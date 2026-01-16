/**
 * form-more - A utility library for form handling
 * @module form-more
 */

/**
 * Validates if a form field is not empty
 * @param {string} value - The value to validate
 * @returns {boolean} True if the value is not empty
 */
function isRequired(value) {
  return value !== null && value !== undefined && value.toString().trim() !== '';
}

/**
 * Validates if a string is a valid email address
 * @param {string} email - The email to validate
 * @returns {boolean} True if the email is valid
 */
function isValidEmail(email) {
  if (email === null || email === undefined) {
    return false;
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validates if a string meets minimum length requirement
 * @param {string} value - The value to validate
 * @param {number} minLength - The minimum length required
 * @returns {boolean} True if the value meets the minimum length
 */
function hasMinLength(value, minLength) {
  if (value === null || value === undefined) {
    return false;
  }
  return value.length >= minLength;
}

/**
 * Serializes form data into an object
 * @param {HTMLFormElement} form - The form element to serialize
 * @returns {Object} An object containing form field names and values
 */
function serializeForm(form) {
  const formData = new FormData(form);
  const obj = {};
  
  for (const [key, value] of formData.entries()) {
    if (obj[key]) {
      if (Array.isArray(obj[key])) {
        obj[key].push(value);
      } else {
        obj[key] = [obj[key], value];
      }
    } else {
      obj[key] = value;
    }
  }
  
  return obj;
}

module.exports = {
  isRequired,
  isValidEmail,
  hasMinLength,
  serializeForm
};
