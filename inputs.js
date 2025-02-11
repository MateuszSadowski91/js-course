function start () {
    alert("Witaj!")
    const choice = confirm("Czy chcesz poznać swoje BMI?")
    if(choice){
        alert("Wspaniale!")
    }
    else {
        alert("Wróć, gdy będziesz chciał/a to zrobić.")
    }
}

function onInputChange(event){
    console.log ("'Input changed")
    console.log(event)
}