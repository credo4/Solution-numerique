// let navbar = document.querySelector('.header .navbar');

document.addEventListener('DOMContentLoaded', function () {
  const menuBtn = document.getElementById('menu-btn');
  const navbar = document.querySelector('.navbar ul');

  menuBtn.addEventListener('click', function () {
    navbar.classList.toggle('show');
  });
});
document.getElementById('login-btn').addEventListener('click', function () {
  window.location.href = document.getElementById('login-link').getAttribute('href');
});

function validateForm() {
  var name = document.getElementById("name").value;
  var lastname = document.getElementById("lastname").value;
  var date = document.getElementById("date").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;
  var passwordError = document.getElementById("passwordError");

  name.textContent = "";
  lastname.textContent = "";
  date.textContent = "";
  email.textContent = "";
  passwordError.textContent = "";

  function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;


    if (name == "") {
      alert("Veuillez entrer votre nom");
      return false;
    }

    if (lastname == "") {
      alert("Veuillez entrer votre nom");
      return false;
    }

    if (date == "") {
      alert("Veuillez entrer votre nom");
      return false;
    }

    if (email == "") {
      alert("Veuillez entrer votre adresse email");
      return false;
    }
    if (date == "") {
      alert("Veuillez entrer votre date de naissance");
      return false; // Empêche l'envoi du formulaire
    } else {

      var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        alert("Veuillez entrer une adresse email valide");
        return false; // Empêche l'envoi du formulaire
      }
    }

    if (password !== confirmPassword) {
      passwordError.textContent = "Les mots de passe ne correspondent pas.";
      return false;
    }


    if (password.length < 8) {
      passwordError.textContent = "Le mot de passe doit contenir au moins 8 caractères.";
      return false;
    }


    // Si la validation passe, le formulaire est soumis
    return true;
  }




ScrollReveal({
  distance: "40px",
  delay: 400,
  duration: 2500
});

ScrollReveal().reveal(' img ', { delay: 500, origin: "bottom" });
ScrollReveal().reveal('p', { delay: 2000, origin: "left" });



// JavaScript pour activer le menu déroulant
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
});




window.onscroll = () => {
  navbar.classList.remove('active');
  loginForm.classList.remove('active');
}

var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  centeredSlides: true,
  grabCursor: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  loop: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});

}
