const wordEl=document.getElementById('word')
const wrongLettersDOM=document.querySelector('wrong-letter')
const playBtnagain=document.getElementById('playButton')
const popup=document.getElementById('popupContainer')
const notification=document.getElementById('notificationContainer')
const finalMessage=document.getElementById('finalMessage')
const figureParts=document.querySelectorAll('.part-figure')
const word=['Application',"Javacrtipt",'Python','Json']
let selectWord=word[Math.floor(Math.random()*word.length)]
const correctLetters=[]
const wrongLetters=[]
function displayWord(){
    wordEl.innerHTML=`
        ${selectWord.split('').map(letter=>`
            <span class='letter'>${correctLetters.includes(letter)?letter:''}</span>
        `)}
    `;
}
displayWord()