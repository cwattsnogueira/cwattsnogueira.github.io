"use strict";
import form from "./form.js";
import skillbar from "./skillbar.js";

document.addEventListener("DOMContentLoaded", () => {
  // Initialize AOS
  if (window.AOS) {
    AOS.init({ once: true, duration: 1000 });
  }

  // Run local modules
  form();
  skillbar();

  const nav = document.querySelector("#nav");
  const navBtn = document.querySelector("#nav-btn");
  const navBtnImg = document.querySelector("#nav-btn-img");
  const navLinks = document.querySelectorAll(".nav-link");
  const goToTop = document.querySelector("#goToTop");

  // Hamburger menu toggle
  if (navBtn) {
    navBtn.onclick = () => {
      if (nav.classList.toggle("open")) {
        navBtnImg.src = "img/icons/close.svg";
      } else {
        navBtnImg.src = "img/icons/open.svg";
      }
    };
  }

  // Close menu when clicking on a nav link
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      if (navBtnImg) navBtnImg.src = "img/icons/open.svg";
    });
  });

  // Sticky header + back-to-top
  window.addEventListener("scroll", function () {
    const header = document.querySelector("#header");
    const hero = document.querySelector("#home");
    const goToTopEl = document.querySelector("#goToTop");
    let triggerHeight = hero ? hero.offsetHeight - 170 : 200;

    if (window.scrollY > triggerHeight) {
      header.classList.add("header-sticky");
      if (goToTopEl) goToTopEl.classList.add("reveal");
    } else {
      header.classList.remove("header-sticky");
      if (goToTopEl) goToTopEl.classList.remove("reveal");
    }
  });

  // Highlight active section link on scroll
  let sections = document.querySelectorAll("section");
  let navLinksScroll = document.querySelectorAll("header nav a");

  window.onscroll = () => {
    sections.forEach((sec) => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 170;
      let height = sec.offsetHeight;
      let id = sec.getAttribute("id");

      if (top >= offset && top < offset + height) {
        navLinksScroll.forEach((links) => {
          links.classList.remove("active");
        });
        const activeLink = document.querySelector("header nav a[href*=" + id + "]");
        if (activeLink) activeLink.classList.add("active");
      }
    });
  };

  // Preloader hide when page fully loaded
  window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");
    if (preloader) {
      preloader.style.opacity = "0";
      setTimeout(() => {
        preloader.style.display = "none";
      }, 500);
    }
  });
});
