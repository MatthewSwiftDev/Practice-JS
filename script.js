// Оработчик checkbox
function funcConditionCheckBox() {
    let checkBoxElement = document.getElementById('one')

    if(checkBoxElement.checked) {
        alert("Selected")
    }
    else {
        alert("Not selected")
    }
}

// Обработчик radiobuttons
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

// Обаработчик выпадающего списка
let listElement = document.getElementById('list1')
listElement.addEventListener('change', funcConditionList)

function funcConditionList() {
    let index = listElement.selectedIndex
    console.log(index)
    let listOptions = document.getElementById('list1').options[index].text
    console.log(listOptions)
    alert("Выбран: " + listOptions)  
}

// Обработчик range
let rangeElement = document.getElementById('range1')
let pElement = document.getElementById('p1')
let inputTextElement = document.getElementById('text1')
let divValueElement = document.getElementById('divValue')

rangeElement.addEventListener('input', funcConditionRange)

function funcConditionRange() {
    pElement.innerText = rangeElement.value
    inputTextElement.value = rangeElement.value
    divValueElement.style.width = rangeElement.value + 'px'
}