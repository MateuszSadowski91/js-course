function checkIfInputIsNotNaN(){
    let input1 = document.getElementById("integerinput1").value
    let input2 = document.getElementById("integerinput2").value

    let number1 = parseInt(input1)
    let number2 = parseInt(input2)
    if (isNaN(number1) || isNaN (number2)){
        alert("Invalid input. One or more of the input values are not integers.")
    }
    else{
        let result = number1 + number2
        alert(`Sum of the input values is: ${result}. `)
    }
}

function start(){
    alert("Hello there!")
}
let clickCount = 0

function calculateClickCount(){
   clickCount ++
   let buttons = document.querySelector(".btn.btn-success[data-label=increment-button]")
   buttons.innerText = `Clicks: ${clickCount}`
}