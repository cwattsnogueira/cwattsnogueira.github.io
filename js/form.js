const form = () => {
  const contactForm = document.querySelector("#contactForm");
  const responseMessage = document.querySelector(".response");

  if (!contactForm) return;

  contactForm.addEventListener("submit", (e) => {
    // show sending feedback
    responseMessage.classList.add("open");
    responseMessage.textContent = "Sending message...";

    // allow the form to submit to formsubmit.co normally
    // hide message after 3s
    setTimeout(() => {
      responseMessage.classList.remove("open");
    }, 3000);
  });
};

export default form;
