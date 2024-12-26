//! reverse a string 
///? input = limit --- output = timil

function reverseStr(str){
    let x = ''
    for(let i=str.length-1;i>=0;i--){
        x = x + str[i]
    }

    return x
}

// console.log(`reversed string = `,reverseStr('limit'))

//! reverse words in a string
//? input = "hello world"  output = "world hello"

function reverseWords(str){
    return str.split(' ').reverse().join(" ");
}

// console.log("reversed words = ",reverseWords('hello world'))

function reverseSentence(str){
    let words = []
    let word = ''
    for(let i = 0;i<str.length;i++){
        if(str[i]  == " "){
            if(word.length > 0){
                words[words.length] = word
                // console.log("if word =",word)
                // console.log("if words =",words)
                word= ''
            }
        }else{
            word = word + str[i]
            // console.log("else word = ",word)
        }
    }
    // console.log(word)
    // console.log(words)
    if(word.length > 0){
        words[words.length] = word
    }
    console.log(words)

    let reverseSentence = ""
    for(let i=words.length-1 ; i>=0;i--){
        reverseSentence += words[i]
        if(i>0){
            reverseSentence += " "
        }
    }
    return reverseSentence
}

// console.log("reversed sentence = ",reverseSentence("hello world , my name is Rahul Kumar"))

function reverse(str){
    let x = ""
    for(let i=str.length-1;i>=0;i--){
        x += str[i]
    }

    console.log(x)
}

// reverse("hello")

//? my name
function sentence(str){
    let words = []
    let word = ""
    for(let i=0;i<str.length;i++){
        if(str[i] == " "){
            words[words.length] = word
            word = ''
        }else{
            word += str[i]
        }
    }
    if(word.length > 0 ){
        words[words.length] = word
    }
    console.log("word",word)
    console.log("words",words)

    let x = ""
    for(let i=words.length-1 ; i>=0;i--){
        x += words[i]
        console.log("words arr",words)
        console.log("x1",x)
        if(i > 0) x += " "
    }

    console.log(x)
}

// sentence("hello   world")

//! reverse each word in a senternce
//? input = "hello world" -- output = "olleh dlrow"

function revWords(str){
    let words = []
    let word = ""

    for(let i=0;i<str.length;i++){
        if(str[i] == " "){
            if(word.length > 0){
                words[words.length] = word
                word = ""
            }
        }else{
            word += str[i]
        }
    }
    if(word.length >0){
        words[words.length] = word
    }

    console.log(words)
    
    let rev = ''
    for(let i = 0;i<words.length;i++){
        for(let j= words[i].length-1;j>=0;j--){
            rev += words[i]
        }
    }
}

revWords("my name is ")