exports.isAnagram = (first_string,second_string) => {
  const str1 = first_string.toLowerCase().replace(/[^a-z\d]/g,'').split('').sort().join('');
  const str2 = second_string.toLowerCase().replace(/[^a-z\d]/g,'').split('').sort().join('');
  return str1 === str2;
};

exports.createElement = (type, text, className,id) => {
  // Creates a new HTML element and returns it
  const newElement = document.createElement(type);
  newElement.classList.add(className);
  newElement.id = id;
  newElement.textContent = text;
  return newElement;
};

