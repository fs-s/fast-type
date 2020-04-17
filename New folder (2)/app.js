const textboxdiv= document.getElementById('text-box')
const typingArea = document.getElementById('typing-area')
const feedbackdiv = document.getElementById('feedback')

const text= 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
textboxdiv.innerText = text
let wordCount = 0
highlight()

let errorCount = 0
feedbackdiv.innerText = errorCount

typingArea.focus()
typingArea.addEventListener('keydown', event => {

if (event.keyCode == 32) {
    if (text.split(' ')[wordCount] != typingArea.Value.split(' ')[wordCount]){
        //console.log('error!')
        errorCount++
        feedbackdiv.innerText = errorCount
    }
    wordCount++
    highlight()
    
}

})

function highlight() {
    let wordsArray = text.split(' ')
    wordsArray[wordCount] = '<span class=highlight>' + wordsArray[wordCount]  + '</span>'
    textboxdiv.innerHTML = wordsArray.join(' ')
    
}
