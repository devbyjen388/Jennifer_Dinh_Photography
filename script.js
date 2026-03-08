document.addEventListener("DOMContentLoaded", () => {
  const contact_link = document.getElementById("contact_link");
  const works_link = document.getElementById("works_link");

  const contact_overlay = document.getElementById("contact_overlay");
  const works_overlay = document.getElementById("works_overlay");
  const hamburger = document.getElementById("hamburger");
  const nav = document.getElementById("nav");
  const close_contact_form = document.getElementById("close_button_form");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    nav.classList.toggle("active");
  });

  contact_link.addEventListener("click", (e) => {
    e.preventDefault();

    if (works_overlay.classList.contains("active")) {
      works_overlay.classList.remove("active");
    }

    contact_overlay.classList.toggle("active");
    document.body.classList.add("no-scroll");
  });

  works_link.addEventListener("click", (e) => {
    e.preventDefault();

    if (contact_overlay.classList.contains("active")) {
      contact_overlay.classList.remove("active");
    }

    works_overlay.classList.toggle("active");

    if (works_overlay.classList.contains("active")) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  });

  close_contact_form.addEventListener("click", () => {
    contact_overlay.classList.remove("active");
    document.body.classList.remove("no-scroll");
  });
});
