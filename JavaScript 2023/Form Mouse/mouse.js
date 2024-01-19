const form = document.getElementById("loginForm");
      const emailInput = document.getElementById("email");
      const passwordInput = document.getElementById("password");
      const submitButton = document.getElementById("submitButton");
      let isMoving = true; // Kemi krijuar nje variabel boolean qe do te na ndihmoje te kuptojme nese butoni eshte ne levizje apo jo

      form.addEventListener("submit", function (event) {
        event.preventDefault();
        validateInputs(); // valdidateInputs() do te therritet kur te shtypet butoni submit
      });

      submitButton.addEventListener("mouseover", function () {
        if (!isInputsValid()) {
          isMoving = !isMoving; // Nese inputs nuk jane te vlefshme, butoni do te vazhdoje te leviz
          submitButton.classList.toggle("left", isMoving); // Shtojme klasen "left" nese isMoving eshte true, perndryshe e heqim kete klase, toggle() do te thote qe nese klasa ekziston, ateher ajo do te hiqet, perndryshe do te shtohet
        }
      });

      function validateInputs() {
        if (isInputsValid()) {
          alert("Form submitted successfully!");
          isMoving = false; // Nese inputs jane te vlefshme, butoni nuk do te vazhdoje te leviz kur  vendosim kursorin mbi te
        } else {
          alert("Your are fast, but not fast enough!");
        }
      }

      function isInputsValid() {
        const emailValue = emailInput.value.trim(); // trim() do te heqe hapesirat e teperta nga fillimi dhe fundi i stringut
        const passwordValue = passwordInput.value.trim();
        const validEmail = isValidEmail(emailValue);
        const validPassword = isValidPassword(passwordValue);
        return validEmail && validPassword; // rikthen vleren e funskionit isValidEmail() dhe isValidPassword() nese te dy jane te vlefshme nese jo rikthen false
      }

      function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);  // nese emaili eshte i vlefshem rikthen true, perndryshe false
      }

      function isValidPassword(password) {
        return password.length >= 6; // nese gjatesia e passwordit eshte me e madhe ose e barabarte me 6 rikthen true, perndryshe false
      }