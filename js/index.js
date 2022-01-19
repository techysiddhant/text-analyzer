let textArea = document.querySelector('#text');
let text = null;
let data = {
    words: 0,
    digits: 0,
    vowels: 0,
    consonents: 0,
    sentence: 0,
    spaces:0,
    lowercase:0,
    uppercase:0
}
const settext = () => {
    text = textArea.value;
    const findLength = (item)=> (item === null) ? 0 : item.length;

    if(text!= null){
        //find Number of Words
        data.words = findLength(text.match(/[a-zA-Z]+/g));
        //find Number of Digits
        data.digits = findLength(text.match(/\d/g));
        //find Number of Vowels
        data.vowels = findLength(text.match(/[aeiou]/gi));
        //find Number of Consonents
        data.consonents = findLength(text.match(/[bcdfghjklmnpqrstvwxyz]/gi));
        //find Number of Sentences
        data.sentence = findLength(text.match(/[\056]/g));
        //find Number of Spaces
        data.spaces = findLength(text.match(/\s/g));
        //find Number of Lowercase alphabets
        data.lowercase = findLength(text.match(/[a-z]/g));
        //find Number of Uppercase alphabets
        data.uppercase = findLength(text.match(/[A-Z]/g));

    }
    localStorage.setItem("data", JSON.stringify(data));
    window.location = "info.html";
    
    
    console.log(text)
}


const getData = ()=> {
    return JSON.parse(localStorage.getItem("data"));
}


const showData = () => {
    let data = getData();
    let htmlContent = "";
    for(item in data){
        htmlContent += `<div class= "box">
        <h2>${data[item]}</h2>
        <p>${item}</p>
        </div>`
    }
    document.querySelector(".info-wrapper").innerHTML = htmlContent;
}