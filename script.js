document.addEventListener("DOMContentLoaded", () => {
  const contact_link = document.getElementById("contact_link");
  const contact_overlay = document.getElementById("contact_overlay");
  const hamburger = document.getElementById("hamburger");
  const nav = document.getElementById("nav");
  const close_contact_form = document.getElementById("close_button");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    nav.classList.toggle("active");
  });

  contact_link.addEventListener("click", (e) => {
    e.preventDefault();
    contact_overlay.classList.toggle("active");
    document.body.classList.add("no-scroll");
  });

  close_contact_form.addEventListener("click", () => {
    contact_overlay.classList.remove("active");
    document.body.classList.remove("no-scroll");
  });
});
