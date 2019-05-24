const { generateText, createElement, validateInput,isAnagram } = require('./util');

const mainBody = document.getElementById("main-body");
const element = createElement('p', "Enter two string to get the result", 'text-danger','message');

const initApp = () => {
  
  const firstString = document.querySelector('input#firstString');
  const secondString = document.querySelector('input#secondString');
  firstString.addEventListener('keyup',checkAnagram);
  secondString.addEventListener('keyup',checkAnagram);
  mainBody.appendChild(element);
  checkAnagram();
};


const checkAnagram = () => {
  const str1 = document.querySelector('input#firstString').value;
  const str2 = document.querySelector('input#secondString').value;

  if(!str1.length || !str2.length){
    element.classList.remove("text-success");
    element.classList.add("text-danger");
    element.textContent = "Inputs can not be empty";
  }else if(isAnagram(str1,str2)){
    element.classList.remove("text-danger");
    element.classList.add("text-success");
    element.textContent = str1 +" and " + str2 + " are anagram.";
  }else{
    element.classList.remove("text-success");
    element.classList.add("text-danger");
    element.textContent = str1 +" and " + str2 + "are not anagram.";
    console.log("Hello");
  }
};
// Start the app!
initApp();
