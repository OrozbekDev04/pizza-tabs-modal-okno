// let btn =document.querySelector('.btn');
// let inputName = document.querySelector('.input_name');
// let inputSurname = document.querySelector('.input_surname');
// let inputAge = document.querySelector('.input_age');
// let inputTel = document.querySelector('.input_tel');
// let textSurname = document.querySelector('.text_surname');
// let textAge = document.querySelector('.text_age');
// let textTel = document.querySelector('.text_tel');
// let textName = document.querySelector('.text_name');
//
// let textError = document.querySelector('.text_error')
// btn.addEventListener('click',()=> {
//     //  textName.textContent += inputName.value
//     //  inputName.value = ''
//     // textSurname.textContent += inputSurname.value
//     //  inputSurname.value = ''
//     // textAge.textContent += inputAge.value
//     //  inputAge.value = ''
//     // textTel.textContent += inputTel.value
//     //  inputTel.value = ''
//
//     if (inputName.value === "" || inputSurname.value === " " || inputAge.value === "" || inputTel.value === "") {
//         btn.addEventListener("click", () => {
//             textError.style.display = 'block'
//         })
//     } else {
//         btn.addEventListener("click", () => {
//             textError.style.display = 'none'
//         })
//         textName.textContent += inputName.value
//         inputName.value = ''
//         textSurname.textContent += inputSurname.value
//         inputSurname.value = ''
//         textAge.textContent += inputAge.value
//         inputAge.value = ''
//         textTel.textContent += inputTel.value
//         inputTel.value = ''
//     }
// })
//
// let block = document.querySelector('.title')

// console.log(block.className = 'block')//- бул классты озгортуп берет.бирок анча колдонулбайт. Анын ордуна бизде ClassList барю

// console.log(block.classList.add('block')); // - кошот
// console.log(block.classList.remove('title')) // - удалить этет
// console.log(block.classList.replace('title','two'));// - Озгортуп берет
// console.log(block.classList.toggle('two')); // - бир класснейм жазабыз бар болсо удалит кылат,жок болсо кошуп берет.

const btn = document.querySelector('.open');
const modal = document.querySelector('.modal');
const close = document.querySelector('.close');

btn.addEventListener('click', ()=>{
    modal.style.display = 'block'
})

close.addEventListener('click',()=>{
    modal.style.display = 'none'
})

const img = document.querySelector('.imgOne');
const btnOne= document.querySelector('.btnOne');
const btnTwo= document.querySelector('.btnTwo');
const btnThree= document.querySelector('.btnThree');

btnOne.addEventListener('click',()=>{
    img.classList.replace('imgTwo','imgOne')
    img.classList.replace('imgThree','imgOne')
    btnTwo.style.background = 'red'
    btnThree.style.background = 'red'
    btnOne.style.background = 'green'
})

btnTwo.addEventListener('click',()=>{
    img.classList.replace('imgOne','imgTwo')
    img.classList.replace('imgThree','imgTwo')
    btnTwo.style.background = 'green';
    btnOne.style.background = 'red'
    btnThree.style.background = 'red'
})

btnThree.addEventListener('click',()=>{
    img.classList.replace('imgOne','imgThree')
    img.classList.replace('imgTwo','imgThree')
    btnThree.style.background = 'green';
    btnTwo.style.background = 'red'
    btnOne.style.background = 'red'
})