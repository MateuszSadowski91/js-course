function calculateSumOfTwoInts(){
    let input1 = document.getElementByName("integerinput1").value
    let input2 = document.getElementByName("integerinput2").value

    let number1 = parseInt(input1)
    let number2 = parseInt(input2)
    if (isNaN(number1) || isNaN (number2)){
        alert("Invalid input. One or more of the input values are not integers.")
    }
    else{
        let result = input1 + input2
        alert(`Sum of the input values is: ${result}. `)
    }
}