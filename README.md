# form-more

A utility library for form handling and validation.

## Installation

```bash
npm install form-more
```

## Usage

```javascript
const formMore = require('form-more');

// Validate required field
formMore.isRequired('value'); // true
formMore.isRequired(''); // false

// Validate email
formMore.isValidEmail('test@example.com'); // true
formMore.isValidEmail('invalid'); // false

// Check minimum length
formMore.hasMinLength('hello', 3); // true
formMore.hasMinLength('hi', 3); // false

// Serialize form data
const form = document.querySelector('form');
const data = formMore.serializeForm(form);
```

## API

### `isRequired(value)`
Validates if a form field is not empty.

### `isValidEmail(email)`
Validates if a string is a valid email address.

### `hasMinLength(value, minLength)`
Validates if a string meets minimum length requirement.

### `serializeForm(form)`
Serializes form data into an object.

## License

MIT