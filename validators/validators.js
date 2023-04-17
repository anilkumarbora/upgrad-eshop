//validators

const isValidEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(/^[\w.-]+@[a-zA-Z0-9]+\.[a-z]{2,6}$/);
};

const isValidPhoneNumber = (number) => {
  return String(number).match(/^\d{10}$/);
};

const isValidZipcode = (number) => {
  return String(number).match(/^\d{6}$/);
};

module.exports = {
  isValidEmail,
  isValidPhoneNumber,
  isValidZipcode,
};
