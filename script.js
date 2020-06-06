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

funcNav()
function funcNav() {
    let navElement = document.getElementById('nav')
    
    // Работаем в области nav
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
}

// 5. Вкладки на стрнице
funcTabs()
function funcTabs() {
    let tabElements = document.getElementsByClassName('tab')
    let tabContentElements = document.getElementsByClassName('tabContent')

    // После загрузки страницы отборажается первая вкладка
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
                    tabContentElements[indexContentElement].classList.add('show')
                    tabElements[indexContentElement].classList.add('whiteborder')
                }       
            } 
        }
    })
}

// 6. Модальное окно
funcModalWindow()
function funcModalWindow() {
    let modalElement = document.getElementById('myModal')
    let btnElement = document.getElementById('myBtn')
    let spanCloseElement = document.getElementsByClassName('close')[0];

    btnElement.addEventListener('click', ()=>{
        modalElement.style.display = "block"
    })

    spanCloseElement.addEventListener('click', ()=>{
        modalElement.style.display = "none"
    })

    // window.addEventListener('click', (event)=>{
    //     if(event.target == modalElement) {
    //         modalElement.style.display = "none"      
    //     }
    // })
}

// 7. Анимация
funcAnimation()

function funcAnimation() {
    let buttonAnimationElement = document.getElementById('buttonGoMove')
    let divAnimationElement = document.getElementById('objectAnimation')
    
    let pos = 0;
    
    buttonAnimationElement.addEventListener('click', ()=>{
        let intervalElement = setInterval(funcIntervalAnimation, 1)

        function funcIntervalAnimation () {
            if(pos <= 320) {
                divAnimationElement.style.top = pos+"px"
                divAnimationElement.style.left = pos+"px"
                pos++
            }
            else {
                clearInterval(intervalElement)
            }
        }
    })
}

// 8. Слайдер
funcSlider()

function funcSlider() {
    let imageElements = document.querySelectorAll(".sliderContent img")
    let numCurrentImage = 0

    let btnNextElement = document.getElementById('bntNext')
    let btnBackElement = document.getElementById('btnBack')

    btnNextElement.addEventListener('click', ()=>{
        numCurrentImage++
        for(let i = 0; i< imageElements.length;i++) {
            imageElements[i].classList.add('imageNone')
        }

        funcAbsAndRemove()
    })

    btnBackElement.addEventListener('click', ()=>{
        numCurrentImage--
        
        for(let i = 0; i< imageElements.length;i++) {
            imageElements[i].classList.add('imageNone')
        }
        console.log(numCurrentImage % 3)

        funcAbsAndRemove()
    })

    function funcAbsAndRemove () {
        let tempCurrent = numCurrentImage
        if(numCurrentImage < 0) {
            tempCurrent = -numCurrentImage
        }
        imageElements[tempCurrent % 3].classList.remove('imageNone')
    }

}

// 8.1. Слайдер V.2.0

funcSliderSecond ()

function funcSliderSecond () {
    
    let mySlidesElements = document.querySelectorAll(".slideshow-container .mySlides")
    let prevSlideElement = document.getElementsByClassName("prevSlide")[0]
    let nextSlideElement = document.getElementsByClassName("nextSlide")[0]
    let dotElements = document.getElementsByClassName("dot")
    let currentSlide = 0

    funcSlideShow()

    // Скрывает все изображения, кроме выбранного
    function funcSlideShow () {
        for(let i = 0; i< mySlidesElements.length; i++) {
            mySlidesElements[i].classList.add("imageNone")
            dotElements[i].classList.remove("dotCurrent")
        }
        mySlidesElements[currentSlide].classList.remove("imageNone")
        mySlidesElements[currentSlide].style.transition="ease"
        dotElements[currentSlide].classList.add("dotCurrent")
    }

    prevSlideElement.addEventListener('click', ()=>{
        currentSlide--
        if(currentSlide<0) {
            currentSlide = 2
        }
        funcSlideShow()
    })

    nextSlideElement.addEventListener('click', ()=>{
        currentSlide++
        if(currentSlide>2) {
            currentSlide = 0
        }

        funcSlideShow()
    })

}

// 9. Фильтрация

funcFiltration()

function funcFiltration() {

    let input = document.getElementById("inputName")  
    let ul = document.getElementById("filtrationUl")
    let li = document.getElementsByTagName("li")
   
    input.addEventListener("keyup", () => {
        let filter = input.value.toUpperCase()

        for(let i = 0;i<li.length;i++) {
            let a = li[i].getElementsByTagName("a")[0]
            
            if(a.innerText.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = ""          
            }
            else {
                li[i].style.display = "none"
                console.log("fired")
            }
        }
    })
}

// 10. Калькулятор

funcCalculator()

function funcCalculator() {
    let buttonPlusElement = document.getElementById("buttonPlus")
    let buttonMinusElement = document.getElementById("buttonMinus")
    let buttonMultiplicationElement = document.getElementById("buttonMultiplication")

    let outAnswerElement = document.getElementById("outAnswer")

    buttonPlusElement.addEventListener('click', ()=>{
        outAnswerElement.innerText = parseInt(document.getElementById("n1").value)
         + parseInt(document.getElementById("n2").value)
    })

    buttonMinusElement.addEventListener('click', ()=>{
        outAnswerElement.innerText = parseInt(document.getElementById("n1").value)
        - parseInt(document.getElementById("n2").value)
    })

    buttonMultiplicationElement.addEventListener('click', ()=>{
        outAnswerElement.innerText = parseInt(document.getElementById("n1").value)
        * parseInt(document.getElementById("n2").value)
    })

}

// 11. Google maps API

// let pos = {lat: -34.397, lng: 150.644}

// function initMap() {
//     let map = new google.maps.Map(document.getElementById("map"), {
//     center: pos,
//     zoom: 15
//     });

// let marker = new google.maps.marker({
//     map: map,
//     position: pos,
//     title: "Городская среда"
// })
// }

// 12. Modal window
//funcModalWindow()
function funcModalWindow() {
    let imgElement = document.getElementById("modalImage") 
    let modalElement = document.getElementById("myModalSpace")
    let captionElement = document.getElementById("caption")
    let modalImgElement = document.getElementById("modalImageFull")

    imgElement.addEventListener('click', () => {
        modalElement.style.display = "block"
        captionElement.innerHTML = imgElement.alt     
        modalImgElement.src = imgElement.src  
    })

    let closeElement = document.getElementsByClassName("closeModalWindow")[0]
    closeElement.addEventListener('click', ()=>{
        modalElement.style.display = "none"
    })
}

// 13. Progress bar
funcProgressBar()

function funcProgressBar() {
    let barElement = document.getElementById("myBar");
    let buttonElement = document.getElementsByClassName("progressPlus")[0]
    let buttonElementFull = document.getElementsByClassName("progressFull")[0]
    let labelElement = document.getElementById("label")
    let currentProgress = 10

    buttonElement.addEventListener('click', ()=>{
        if(currentProgress >= 100)
            currentProgress = 0

        currentProgress += 10
        barElement.style.width = currentProgress + "%"
        labelElement.innerText = currentProgress + "%"
    })

    buttonElementFull.addEventListener("click", ()=>{    
        let id = setInterval(frame, 100)
        function frame() {   
            if(currentProgress >= 99){
                clearInterval(id)  
                //currentProgress = 0   
            }

            currentProgress++
            barElement.style.width = currentProgress + "%"
            labelElement.innerText = currentProgress + "%"        
        }
    })
}