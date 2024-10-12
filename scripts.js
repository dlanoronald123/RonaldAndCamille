const form = document.getElementById('rsvpForm');
  form.addEventListener('submit', async function(event) {
      event.preventDefault();

      const formData = new FormData(form);
      const data = {};
      formData.forEach((value, key) => (data[key] = value));

      try {
          const response = await fetch('https://script.google.com/macros/s/AKfycbx-zwf-HxhmVRS5TwqElNmX5GMWjSElwoCscLUkd5q_UUNAH_aEnN_9c06TiE8mlXqsHQ/exec', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/x-www-form-urlencoded',
              },
              body: new URLSearchParams(data),
          });

          const result = await response.json();
          document.getElementById('responseMessage').textContent = result.message;
      } catch (error) {
          document.getElementById('responseMessage').textContent = 'An error occurred while submitting the form.';
      }
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
  