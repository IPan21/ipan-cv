export function validateMessage(message) {
    if (!message) {
      return 'Required';
    }
    return false;
}