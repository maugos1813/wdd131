document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
  
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });
  });

document.addEventListener("DOMContentLoaded", () => {
    const levelsContainer = document.getElementById("levels-container");
  
    if (levelsContainer) {
      const levels = [
        {
          name: "Level 1",
          price: "$300",
          features: ["1 page", "Responsive", "Contact form"]
        },
        {
          name: "Level 2",
          price: "$600",
          features: ["3-5 pages", "Custom design", "SEO optimized"]
        },
        {
          name: "Level 3",
          price: "$1200+",
          features: ["Full CMS", "Advanced JS features", "Maintenance included"]
        }
      ];
  
      levelsContainer.innerHTML = levels.map(level => `
        <div class="card">
          <h3>${level.name}</h3>
          <p><strong>Price:</strong> ${level.price}</p>
          <ul>
            ${level.features.map(f => `<li>${f}</li>`).join('')}
          </ul>
        </div>
      `).join('');
    }
  
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
      contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;
        const formData = { name, email, message };
        localStorage.setItem("contactFormData", JSON.stringify(formData));
        alert("Thank you for contacting us!");
        contactForm.reset();
      });
    }
  });
  