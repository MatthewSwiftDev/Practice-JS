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

// 3. Border Radius Change 
funcBorderRadiusChange()
function funcBorderRadiusChange ()
{
    let rtlElement = document.getElementById("rtl")
    let ttlElement = document.getElementById("ttl")
    let rtrElement = document.getElementById("rtr")
    let ttrElement = document.getElementById("ttr")
    let rblElement = document.getElementById("rbl")
    let tblElement = document.getElementById("tbl")
    let rbrElement = document.getElementById("rbr")
    let tbrElement = document.getElementById("tbr")

    let divBorderRadiusElement = document.getElementById("divWrapper")

    rtlElement.addEventListener('input', ()=>{
        ttlElement.value = rtlElement.value
        funcChangeRadius()
    })
    divBorderRadiusElement.style.borderRadius = rtlElement.value + "px "
   
    rtrElement.addEventListener('input', ()=>{
        ttrElement.value = rtrElement.value
        funcChangeRadius()
    })
    rblElement.addEventListener('input', ()=>{
        tblElement.value = rblElement.value
        funcChangeRadius()
    })
    rbrElement.addEventListener('input', ()=>{
        tbrElement.value = rbrElement.value
        funcChangeRadius()
    })
   
    function funcChangeRadius() {
    divBorderRadiusElement.style.borderRadius = rtlElement.value + "px " +
    rtrElement.value + "px " + rblElement.value + "px " + rbrElement.value + "px "
    }
}

// 4. Выпадающее меню

// Работаем в области nav
let navElement = document.getElementById('nav')

navElement.onmouseover = function(event) {
    let targ = event.target
    
    if(targ.className == "menu-item") {
        let subMenuElement = targ.getElementsByClassName('submenu')
        closeSubMenu()
        subMenuElement[0].style.display="block"
    }
}

// Если покидаем облать nav, все подменю пропадают
document.onmouseover = function(event) {
    if(event.target.className != "menu-item" && event.target.className != "submenu") {
        closeSubMenu()
    }
}

function closeSubMenu() {
    let subMenuElement = document.getElementsByClassName('submenu')
    for(let i = 0;i<subMenuElement.length;i++) {
        subMenuElement[i].style.display='none'
    }
}

// 5. Вкладки на стрнице

// Изначально отборажается первая вкладка
let tabElements = document.getElementsByClassName('tab')
let tabContentElements = document.getElementsByClassName('tabContent')

window.onload = function() {
    for(let i = 1; i< tabContentElements.length;i++) {
        tabContentElements[i].classList.add('hide')
    }
}

let tabsElement = document.getElementById('tabs')

tabsElement.addEventListener('click', (event)=>{
    let targ = event.target
    let indexContentElement

    if(targ.className == "tab") {
        // Определяем какой индекс у элмента
        for(let i = 0; i< tabElements.length;i++) {
            tabContentElements[i].classList.add('hide')
            tabContentElements[i].classList.remove('show')
            tabElements[i].classList.remove('whiteborder')
            if(targ == tabElements[i]) {
                indexContentElement = i
                console.log(indexContentElement)
                console.log(indexContentElement)
                tabContentElements[indexContentElement].classList.add('show')
                tabElements[indexContentElement].classList.add('whiteborder')
            }       
        } 
    }
})