document.addEventListener("DOMContentLoaded", function () {

    const registerPassword = document.getElementById("registerPassword");
    const registerStrengthBar = document.getElementById("registerStrengthBar");
    const registerStrengthText = document.getElementById("registerStrengthText");

    function checkStrength(password) {
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasNumber = /[0-9]/.test(password);
        const hasSpecial = /[^A-Za-z0-9]/.test(password);
        const hasMinLength = password.length >= 8;

        let strength = 0;

        if (hasUpperCase) strength++;
        if (hasLowerCase) strength++;
        if (hasNumber) strength++;
        if (hasSpecial) strength++;
        if (hasMinLength) strength++;

        if (password.length === 0) {
            registerStrengthBar.style.width = "0%";
            registerStrengthText.textContent = "";
            return;
        }

        if (strength <= 2) {
            registerStrengthBar.style.width = "40%";
            registerStrengthBar.style.background = "#ff4d4d";
            registerStrengthText.textContent = "Weak";
        } 
        else if (strength <= 4) {
            registerStrengthBar.style.width = "70%";
            registerStrengthBar.style.background = "#ff9800";
            registerStrengthText.textContent = "Medium";
        } 
        else {
            registerStrengthBar.style.width = "100%";
            registerStrengthBar.style.background = "#4caf50";
            registerStrengthText.textContent = "Strong";
        }
    }

    if (registerPassword) {
        registerPassword.addEventListener("input", function () {
            checkStrength(this.value);
        });
    }

});
