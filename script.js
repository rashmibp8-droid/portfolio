// Mobile Menu
const menu = document.querySelector(".menu");
const nav = document.querySelector(".nav-links");

menu.addEventListener("click", () => {
    nav.classList.toggle("show");
});

// Contact Form
const form = document.getElementById("contactForm");
const msg = document.getElementById("msg");

form.addEventListener("submit", function(e){
    e.preventDefault();

    msg.textContent = "Message sent successfully!";

    form.reset();

    setTimeout(()=>{
        msg.textContent="";
    },3000);
});