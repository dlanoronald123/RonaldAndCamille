document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent the default form submission
  document.getElementById("message").textContent = "Submitting..";
  document.getElementById("message").style.display = "block";
  document.getElementById("submit-button").disabled = true;

  // Collect the form data
  var formData = new FormData(this);
  var keyValuePairs = [];
  for (var pair of formData.entries()) {
    keyValuePairs.push(pair[0] + "=" + pair[1]);
  }

  var formDataString = keyValuePairs.join("&");

  // Send a POST request to your Google Apps Script
  fetch(
    "https://script.google.com/macros/s/AKfycby_4oMsmmRKaZ5EkDsKBP8fqBW5Vdw4fkEgaS82pqSO6QTaRz7YORu_kBjZ_b3JIZmMdA/exec",
    {
      redirect: "follow",
      method: "POST",
      body: formDataString,
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
    }
  )
    .then(function (response) {
      // Check if the request was successful
      if (response) {
        return response; // Assuming your script returns JSON response
      } else {
        throw new Error("Failed to submit the form.");
      }
    })
    .then(function (data) {
      // Display a success message
      document.getElementById("message").textContent =
        "Data submitted successfully!";
      document.getElementById("message").style.display = "block";
      document.getElementById("message").style.backgroundColor = "green";
      document.getElementById("message").style.color = "beige";
      document.getElementById("submit-button").disabled = false;
      document.getElementById("form").reset();

      setTimeout(function () {
        document.getElementById("message").textContent = "";
        document.getElementById("message").style.display = "none";
      }, 2600);
    })
    .catch(function (error) {
      // Handle errors, you can display an error message here
      console.error(error);
      document.getElementById("message").textContent =
        "An error occurred while submitting the form.";
      document.getElementById("message").style.display = "block";
    });
});



const accordions = document.querySelectorAll(".accordion");

accordions.forEach((accordion, index) => {
  const header = accordion.querySelector(".accordion__header");
  const content = accordion.querySelector(".accordion__content");
  const icon = accordion.querySelector("#accordion-icon");

  header.addEventListener("click", () => {
    const isOpen = content.style.height === `${content.scrollHeight}px`;

    accordions.forEach((a, i) => {
      const c = a.querySelector(".accordion__content");
      const ic = a.querySelector("#accordion-icon");

      c.style.height = i === index && !isOpen ? `${c.scrollHeight}px` : "0px";
      ic.classList.toggle("ri-add-line", i !== index || !isOpen);
      ic.classList.toggle("ri-subtract-fill", i === index && !isOpen);
    });
  });
});


document.addEventListener("DOMContentLoaded", () => {
    const marquee = document.querySelector(".marquee-inner");
    const speed = 1; // Scrolling Speed
    let scrollAmount = 0;
    let isHovered = false;
  
    // Duplicates the content
    const marqueeContent = marquee.innerHTML;
    marquee.innerHTML += marqueeContent;
  
    const startScrolling = () => {
      if (!isHovered) {
        scrollAmount -= speed;
        if (Math.abs(scrollAmount) >= marquee.scrollWidth / 2) {
          scrollAmount = 0;
        }
        marquee.style.transform = `translateX(${scrollAmount}px)`;
      }
      requestAnimationFrame(startScrolling);
    };
  
    marquee.addEventListener("mouseover", () => {
      isHovered = true;
    });
  
    marquee.addEventListener("mouseout", () => {
      isHovered = false;
    });
  
    startScrolling();
  });


  // Get the radio buttons and the divs
  const attendYes = document.getElementById('attendYes');
  const attendNo = document.getElementById('attendNo');
  const guestDiv = document.getElementById('guestDiv');
  const reasonDiv = document.getElementById('reasonDiv');

  // Function to handle visibility with animation
  function toggleDivs() {
      if (attendYes.checked) {
          guestDiv.classList.add('visible');  // Show guest div with animation
          reasonDiv.classList.remove('visible');  // Hide reason div
      } else if (attendNo.checked) {
          reasonDiv.classList.add('visible'); // Show reason div with animation
          guestDiv.classList.remove('visible');  // Hide guest div
      }
  }

  // Add event listeners to the radio buttons
  attendYes.addEventListener('change', toggleDivs);
  attendNo.addEventListener('change', toggleDivs);

  $(function () {
    $('#bgndVideo').YTPlayer();
  });
  
  // window.addEventListener('scroll', function() {
  //   const parallax = document.querySelector('.section-rsvp');
  //   let scrollPosition = window.pageYOffset;
  //   parallax.style.backgroundPositionY = (scrollPosition * 0.5) + 'px';
  // });
  