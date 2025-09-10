const form = () => {
  const contactForm = document.querySelector("#contactForm");
  const responseMessage = document.querySelector(".response");

  if (!contactForm) return;

  contactForm.addEventListener("submit", () => {
    responseMessage.classList.add("open");
    responseMessage.textContent = "Sending message...";
    setTimeout(() => {
      responseMessage.classList.remove("open");
    }, 3000);
  });
};

export default form;
