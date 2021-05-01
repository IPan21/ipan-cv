// email empty or not, string or not, 
// local part can contain: numbers, letters and the following symbols: .!#$%&'*+/=?^_`{|}~-,
// domain part can contain: numbers/letters/hyphen/,
// top level domain part: starts with (.) followed by numbers/letters min 1 max 3 times
// email can't start or end with a special symbol
// email string shouldn't have a special character followed by any other special character 

export function validateEmail(email) {
    if (!email || typeof(email) != 'string') {
      return 'Required';
    }
    email = email.trim();
    if(/^[a-zA-Z0-9]+[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+){1,3}$/.test(email)){
        if(!(/[.!#$%&'*+/=@?^_`{|}~-]([.!#$%&'*+/=@?^_`{|}~-])/.test(email))){ 
            return false; 
        }
    };
    return 'Invalid email address';
}