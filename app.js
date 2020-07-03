const form = document.querySelector('#submitForm')
const imgUrlInput = document.querySelector('input[name="imgUrl"]')
const topTextInput = document.querySelector('input[name="topText"]')
const bottomTextInput = document.querySelector('input[name="bottomText"]')
const result = document.querySelector('#result')


console.log(form)
form.addEventListener('submit',function(e){
    e.preventDefault();
    const newMeme = makeMeme(imgUrlInput.value,topTextInput.value,bottomTextInput.value)
    result.appendChild(newMeme)
    imgUrlInput.value = ''
    topTextInput.value=''
    bottomTextInput.value=''
})


function makeMeme(text,color,size){
    const logo = document.createElement('div')
    logo.setAttribute('class','container')
    let img = new Image(300,300)
    img.src = text
    logo.appendChild(img)
    const textTop = document.createElement('div')
    textTop.setAttribute('class','topcenter')
    textTop.textContent = color
    logo.appendChild(textTop)
    const textbottom = document.createElement('div')
    textbottom.setAttribute('class','botcenter')
    textbottom.textContent = size
    logo.appendChild(textbottom)
    const rmvButton = document.createElement('button')
    rmvButton.setAttribute('class','removebutton')
    rmvButton.innerText = 'X'
    logo.appendChild(rmvButton)
    return logo;
}

result.addEventListener('click',function(e){
    e.preventDefault();
    if (event.target.tagName === 'BUTTON'){
        e.target.parentElement.remove()
    }
})