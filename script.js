
function funcConditionCheckBox() {
    let checkBoxElement = document.getElementById('one')

    if(checkBoxElement.checked) {
        alert("Selected")
    }
    else {
        alert("Not selected")
    }
}

let showResultButton = document.getElementById('B1')
 showResultButton.addEventListener('click', funcConditionRadioButton)

function funcConditionRadioButton(){
    let arryRadioButton = document.getElementsByName('radioButton1')
    for(let i = 0;i<arryRadioButton.length;i++) {
        if(arryRadioButton[i].checked) {
            alert('Выбран элемент: '+arryRadioButton[i].value)
        }
    }
}
