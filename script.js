const btnsEle = document.querySelectorAll("button");
//console.log(btnsEle);
const inputEle = document.getElementById("result");

for(let i=0; i<btnsEle.length ; i++)
{
    btnsEle[i].addEventListener("click", () => {
        //console.log( btnsEle[i].textContent);
      const btnValue = btnsEle[i].textContent 

      if (btnValue ==="C")
      {
        clearResult()
      }
      else if (btnValue === "=")
         {
           calculateResult()
         }
      else
         {
          appendValue(btnValue)
        }   
    })
}


function clearResult()
{
   inputEle.value = ""
}

function calculateResult()
{
   inputEle.value = eval(inputEle.value)
}

function appendValue(btnValue)
{
    inputEle.value += btnValue
}

/*const btnsEle = document.querySelectorAll("button");
const inputEle = document.getElementById("result");

// Loop through each button and add event listeners
for (let i = 0; i < btnsEle.length; i++) {
    btnsEle[i].addEventListener("click", () => {
        const btnValue = btnsEle[i].textContent;

        // Clear the result when 'C' is clicked
        if (btnValue === "C") {
            clearResult();
        } 
        // Calculate result when '=' is clicked
        else if (btnValue === "=") {
            calculateResult();
        } 
        // Append the value for numbers and operators
        else {
            appendValue(btnValue);
        }
    });
}

// Function to clear the input field
function clearResult() {
    inputEle.value = "";
}

// Function to calculate the result using 'eval'
function calculateResult() {
    try {
        inputEle.value = eval(inputEle.value); // eval to compute the string expression
    } catch (error) {
        inputEle.value = "Error"; // Handle invalid expressions
    }
}

// Function to append the clicked button's value to the input field
function appendValue(btnValue) {
    inputEle.value += btnValue;
}*/
