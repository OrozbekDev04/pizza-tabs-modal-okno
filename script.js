// console.log(document)
// console.log(document.getElementById('h1'))
// console.log(document.getElementsByName('text'))
// console.log(document.getElementsByClassName('title'))
// console.log(document.getElementsByTagName('button'))


// document - html ичндеги данныйлар.

// console.log(document.querySelectorAll())-данныйларды кайтарып берет , коптук туру .
// console.log(document.querySelector()) - жекелик туру, жана универсал кете берет.


// let block = document.querySelectorAll('.block');
//
// block.forEach(el =>{
//     el.addEventListener('click',() =>{
//         if(el.style.background === 'white'){
//             el.style.background = 'red'
//         } else {
//             el.style.background = 'white'
//         }
//     })
// })



// let input = document.querySelector('input');
// let btn = document.querySelector('.btn');
// let age = document.querySelector('.age');
//
// btn.addEventListener('click',() => {
//     age.textContent += input.value
//     input.value = ''
// })

// value - бул инпуттун ичине жазылган -> текстер , создор.

// let block = document.querySelectorAll('.block');
// let btn = document.querySelector('.btn')
//
// block.forEach(el =>{
//     btn.addEventListener('click',() =>{
//         if(el.style.background === 'white'){
//             el.style.background = 'red'
//         } else {
//             el.style.background = 'white'
//         }
//     })
// })
// // 2-start
// let ageT = document.querySelector('.age-i');
// let lastN = document.querySelector('.lastName-i');
// let name = document.querySelector('.name-i');
// let telN = document.querySelector('.tel-number-i');
// let weightT = document.querySelector('.weightT')
// let height = document.querySelector('.height');
// let heightT = document.querySelector('.heightT');
// let nationality = document.querySelector('.nationality');
// let nationalityT = document.querySelector('.nationalityT');
// let Country = document.querySelector('.Country')
// let countryT = document.querySelector('.countryT');
// let education = document.querySelector('.education');
// let edu = document.querySelector('.edu');
// let profession= document.querySelector('.profession');
// let prof = document.querySelector('.prof');
// let born = document.querySelector('.born');
// let Born = document.querySelector('.Born');
// let weight = document.querySelector('.weight');
// let age = document.querySelector('.age')
// let number = document.querySelector('.number');
// let lastName = document.querySelector('.lastName');
// let Name = document.querySelector('.name');
// // let btn = document.querySelector('.btn')
// btn.addEventListener('click',()=>{
//     education.textContent += edu.value
//     edu.value =''
// })
// btn.addEventListener('click',()=>{
//     profession.textContent += prof.value
//     prof.value = ''
// })
// btn.addEventListener('click',()=>{
//     born.textContent += Born.value
//     Born.value = ''
// })
// btn.addEventListener('click',()=>{
//     height.textContent += heightT.value
//     heightT.value = ''
// })
// btn.addEventListener('click',()=>{
//     nationality.textContent += nationalityT.value
//     nationalityT.value = ''
// })
// btn.addEventListener('click',() =>{
//     Country.textContent += countryT.value
//     countryT.value = ''
// })
// btn.addEventListener('click' ,(we) =>{
//     age.textContent += ageT.value
//     ageT.value = '';
// })
//
//
// btn.addEventListener('click',() =>{
//     number.textContent += telN.value
//     telN.value= ''
// })
// btn.addEventListener('click',() =>{
//     lastName.textContent += lastN.value
//     lastN.value= ''
// })
// btn.addEventListener('click',() =>{
//     Name.textContent += name.value
//     name.value = ''
// })
//
// btn.addEventListener('click',() =>{
//     weight.textContent += weightT.value
//     weightT.value = ''
// })
// 2-end