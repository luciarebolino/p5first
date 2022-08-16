(function() {
    console.log ("it works")
  })();

// window.addEventListener("keydown", testFn);
let sections = document.querySelectorAll("section");

window.addEventListener("keydown", (e) => {
  let stroke = e.key;
  let section = document.querySelector(`.${stroke}`);

  switch (stroke) {
    case "q":
      section.style.background = "blue";
      break;
    case "w":
      section.style.background = "blue";
      break;
    case "e":
      section.style.background = "blue";
      break;
    case "r":
      section.style.background = "blue";
      break;
    case "t":
        section.style.background = "blue";
        break;
    case "y":
        section.style.background = "blue";
        break;
    case "u":
        section.style.background = "blue";
        break;
    case "i":
        section.style.background = "blue";
        break; 
    case "o":
      section.style.background = "blue";
      break;
    case "p":
      section.style.background = "blue";
      break;
    case "a":
      section.style.background = "blue";
      break;
    case "s":
      section.style.background = "blue";
      break;
    case "d":
        section.style.background = "blue";
        break;
    case "f":
        section.style.background = "blue";
        break;
    case "g":
        section.style.background = "blue";
        break;
    case "h":
        section.style.background = "blue";
        break;
    case "j":
      section.style.background = "blue";
      break;
    case "k":
      section.style.background = "blue";
      break;
    case "l":
      section.style.background = "blue";
      break;
    case "z":
      section.style.background = "blue";
      break;
    case "x":
        section.style.background = "blue";
        break;
    case "c":
        section.style.background = "blue";
        break;
    case "v":
        section.style.background = "blue";
        break;
    case "b":
        section.style.background = "blue";
        break; 
    case "n":
        section.style.background = "blue";
        break;
    case "m":
        section.style.background = "blue";
        break;  
    default:
      console.log("not working");
  }
});

// taking in a sentence
// creating obj to keep count of the number of times each key is pressed

/*
let obj = {
  s: 5
};
obj["s"];

let sentence = input.value;

for (let i = 0; i <= sentence.length; i++) {
  let character = sentence[i];
  if (obj[character]) {
    obj[character] += 1;
  } else {
    obj[character] = 1;
  }
}
*/


// MAX CHARS

  (function() {
    document.addEventListener("keyup", function(event){
      if(event.target.matches(".count-chars")){
      //get input value and lenght
    const value = event.target.value;
    const valueLength = event.target.value.length;
      //get data value
    const maxChars = parseInt(event.target.getAttribute("data-max-chars"));
    const remainingChars = maxChars - valueLength;
    if(valueLength > maxChars){
      //limitchars to maxChars
      event.target.value = value.substr(0,maxChars);
      return; // end function execution
    }
    event.target.nextElementSibling.innerHTML = remainingChars;
    }
    })
  })();
  
  