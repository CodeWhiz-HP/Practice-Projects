class Password {
    constructor(length) {
        this.length = length;
    }

    generate() {
        const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const lower = "abcdefghijklmnopqrstuvwxyz";
        const num = "0123456789";
        const specialChars = "!@#$%^&*()_+[]{}|;:,.<>?";
        
        let passwordChars = "";
        passwordChars += upper;
        passwordChars += lower;
        passwordChars += num;
        passwordChars += specialChars;

        let password = "";
        let uppercount = 0;
        let lowercount = 0;
        let numcount = 0;
        let specialcount = 0;
        for (let i = 0; i < this.length; i++) {
            const randomIndex = Math.floor(Math.random() * passwordChars.length);
            if (randomIndex <= 25) uppercount++;
            if (randomIndex <= 51 && randomIndex >= 26) lowercount++;
            if (randomIndex <= 61 && randomIndex >= 52) numcount++;
            if (randomIndex <= 85 && randomIndex >= 62) specialcount++;
            password += passwordChars[randomIndex];
        }
        if (uppercount > 0 && lowercount > 0 && numcount > 0 && specialcount > 0) {
            return password;
        }
        else {
            return this.generate();
        }
    }        
}

let PasswordLength = prompt("Enter the length of the password (minimum 8 characters): ");
let order = confirm("Do you want to generate a password?");
if (order) {
    if (PasswordLength >= 8) {
        const password = new Password(PasswordLength);
        const generatedPassword = password.generate();
        alert(`Generated Password: ${generatedPassword}`);
    } else {
        alert("Password length must be at least 8 characters.");
    }
}