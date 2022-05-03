function passwordValidator(pass) {
    function isLengthEnough(password) {
        if (password.length >= 6 && password.length <= 10) {
            return true
        } else {
            return false
        }
    }
    function isOnlyLettersAndDigits(password) {
        for (let i = 0; i < password.length; i++) {
            let char = password[i].charCodeAt(0);
            if (!((char >= 48 && char <= 57) || (char >= 65 && char <= 90) || (char >= 97 && char <= 122))) {
                return false;
            }
           
        }
        return true
    }
    function isAtLeastTwoDigits(password) {
        let counter = 0
        for (let i = 0; i < password.length; i++) {
            let char = password[i].charCodeAt(0);
            if ((char >= 48 && char <= 57)) {
                counter++
            }
            if (counter === 2) {
                return true
            }
        }
        return false
    }
    if (isLengthEnough(pass) &&  isOnlyLettersAndDigits(pass) && isAtLeastTwoDigits(pass)) {
       console.log('Password is valid')
    }
    if (!isLengthEnough(pass)) {
        console.log('Password must be between 6 and 10 characters');
    }
    if (!isOnlyLettersAndDigits(pass)) {
        console.log('Password must consist only of letters and digits');
    }
    if (!isAtLeastTwoDigits(pass)) {
        console.log("Password must have at least 2 digits");
    }
}
passwordValidator('Pa$s$s')