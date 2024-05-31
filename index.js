function text_q1(){
    let text_q1 = document.getElementById('text_q1');
    text_q1.innerHTML = "ватсап броууʕ•͡-•ʔ";
    console.log(text_q1.innerHTML);
}

// Задание 2
function class_q2(){
    let class_q2 = document.getElementById("class_q2");
    class_q2.setAttribute('class', 'class_q2');
    console.log(class_q2);
}

// Задание 3
function color_q3(){
    let color_q3 = document.getElementById('color_q3');
    color_q3.setAttribute('class', 'color_q3');
    console.log(color_q3);
}

//Задание 4
function button_q4(){
    let button_q4 = document.getElementById('button_q4');
    if(button_q4.innerHTML == "Попробуй"){
        button_q4.innerHTML = "Что?";
        console.log(button_q4.innerHTML);
    } else {
        button_q4.innerHTML = "Попробуй";
        console.log(button_q4.innerHTML);
    }
}

//Задание 5
let a = 5;
function ul_q5(){
    let ul = document.getElementById("ul_q5");
    let ul_q5 = document.createElement('li');
    ul_q5.className="ul_q5";
    ul_q5.innerHTML= a++;
    ul.append(ul_q5);
    console.log(ul_q5.innerHTML);
}

//Задание 6
function div_q6(){
    let div_q6 = document.getElementById("div_q6");
    div_q6.remove(div_q6);
    console.log(div_q6);
}

//Задание 7
function src_q7(){
    let src_q7 = document.getElementById("src_q7");
    src_q7.removeAttribute("src");
    src_q7.setAttribute("src", "./koshechki.jpeg");
    console.log(src_q7)
}
//Задание 8
var num1=5
function addrow1(){
    
    let row1 = document.getElementById("1row")
    var addrow1 = document.createElement("td")
    addrow1.innerHTML = num1++
    row1.appendChild(addrow1)
}
var num2=5
function addrow2(){
    let row2 = document.getElementById("2row")
    var addrow2 = document.createElement("td")
    addrow2.innerHTML = num2++
    row2.appendChild(addrow2)
}
var num3 = 1
function addnewrow(){
    let row = document.getElementById("table")
    var addrow = document.createElement("tr")
    row.appendChild(addrow)
    addrow.setAttribute("id","3row")
    let row3 = document.getElementById("3row")
    var addrow3 = document.createElement("td")
    addrow3.innerHTML = num3++
    row3.appendChild(addrow3)
}
function addrow3(){
    let row3 = document.getElementById("3row")
    var addrow3 = document.createElement("td")
    addrow3.innerHTML = num3++
    row3.appendChild(addrow3)
}

//Задание 9
function button_q9(){
    let button_q9 = document.getElementById('button_q9');
    if(button_q9.innerHTML == "добавь краски🪼"){
        button_q9.setAttribute("class", "button_q9c");
        console.log(button_q9.innerHTML);
    } else if(button_q9.hasAttribute("class","button_q9c")) {
        button_q9.setAttribute("class", "button_q9c");
        console.log(button_q9.innerHTML);
    }
}
// Задание 10
function h2_q10(){
    let h2_q10 = document.getElementById('h2_q10');
    h2_q10.innerHTML = "ого˙ᵕ˙!";
    console.log(h2_q10);
}

//Задание 11
function div_q11(){
    let div_q11 = document.getElementById('div_q11');
    if (div_q11.hidden == false){
        div_q11.hidden = true;
    } else {
        div_q11.hidden = false;
    }
    console.log('div_q11')
}

//Задание 12
function in_q12(){
    let in_q12 = document.getElementById('in_q12');
    let p_q12 = document.getElementById('p_q12');
    p_q12.innerHTML = in_q12.value;
    console.log('p_q12');
}


//Задание 13
let num = 2;
function span_q13(){
    let span_q13 = document.getElementById('span_q13');
    span_q13.innerHTML = num++;
    console.log('span_q13');
}

//Задание 14
function button1(){
    let buttka = document.getElementById('buttka');
    buttka.innerHTML = ('о нас<br> 1500 м2 — площадь смотровой площадки — это 2 хоккейных поля!<br>Это значит, что каждому гостю хватит места для комфортного отдыха.<br>По высоте 89 этаж — это как башня из 77 жирафов!«Жираф большой — ему виднее».<br> А как насчёт 77 жирафов? <br>Вы увидите всю Москву как на ладони с высоты 89 этажа.')
}

function button2(){
    let buttka = document.getElementById('buttka');
    buttka.innerHTML = ('Услуги<br>-Лучшие локации для ваших фотоснимков.<br>-Увлекательная анимационная программа.<br>-Самая высокая фабрика мороженого в мире.<br>-Групповые экскурсии для всех возрастов')
}

function button3(){
    let buttka = document.getElementById('buttka');
    buttka.innerHTML = ('Контакты<br> +7 978-334-55-66.<br> Вы можете позвонить нам в любой соц сети.')
}

//Задание 15
function dey1(){
    let qwe1 = document.getElementById('in1');
    let list1 = document.getElementById('ul1');
    let new1 = document.createElement('li');
    new1.className="new1";
    new1.innerHTML = qwe1.value;
    list1.append(new1);
}
function dey2(){
    let qwe2 = document.getElementById('in2');
    let list2 = document.getElementById('ul2');
    let new2 = document.createElement('li');
    new2.className="new2";
    new2.innerHTML = qwe2.value;
    list2.append(new2);
}
function dey3(){
    let qwe3 = document.getElementById('in3');
    let list3 = document.getElementById('ul3');
    let new3 = document.createElement('li');
    new3.className="new3";
    new3.innerHTML = qwe3.value;
    list3.append(new3);
}