//mit switch:

//const bild = document.getElementById("bild1"); 

( function () {

    document.getElementById("sendQuestion").onclick = function () {
        miesmuschelSagt();
    };

    const hierText = document.getElementById("hierText");
    const bild = document.getElementById("bild1");

function miesmuschelSagt() {


   
    let zufallswert = Math.floor(Math.random() * 11);
    switch (zufallswert) {
        case 0 :
            bild.innerHTML = "<img src='http://i.giphy.com/mWToZdKc0sl4k.gif'></img>"
            hierText.innerText = "gewiss";
            break;
        case 1 :  
            bild.innerHTML = "<img src='http://i.giphy.com/NNgLaLxRYgYUw.gif'></img>"
            hierText.innerText = "egal";
            break;
        case 2 :  
            bild.innerHTML = "<img src='http://i.giphy.com/p3Tlnu6jY1cNq.gif'></img>"
            hierText.innerText = "nein";
            break;
        case 3 :  
            bild.innerHTML = "<img src='http://i.giphy.com/NWg7M1VlT101W.gif'></img>"
            hierText.innerText = "frag doch nocheinmal";
            break;
        case 4 :  
            bild.innerHTML = "<img src='http://i.giphy.com/JawaXj8kyWJ44.gif'></img>"
            hierText.innerText = "selbstverständlich";
            break;
        case 5 :  
            bild.innerHTML = "<img src='http://i.giphy.com/YFis3URdQJ6qA.gif'></img>"
            hierText.innerText = "aber sicher";
            break;
        case 6 :  
            bild.innerHTML = "<img src='http://i.giphy.com/l41lV04RvMyCysJX2.gif'></img>"
            hierText.innerText = "frag mich was leichteres";
                break;
        case 7 :  
            bild.innerHTML = "<img src='http://i.giphy.com/O3GqAYR9jFxLi.gif'></img>"
            hierText.innerText = "ich glaube eher nicht";
            break;
        case 8 :  
            bild.innerHTML = "<img src='http://i.giphy.com/3o7TKxZPj7mbWpinWo.gif'></img>"
            hierText.innerText = "ich weiß es nicht";
            break;
        case 9 :  
            bild.innerHTML = "<img src='http://i.giphy.com/YlitvKufE2O4M.gif'></img>"
            hierText.innerText = "keineswegs";
            break;
        case 10 :  
            bild.innerHTML = "<img src='http://i.giphy.com/9w3w4eP5ZUgiQ.gif'></img>"
            hierText.innerText = "eines tages vielleicht";
            break;
        case 11 :  
            bild.innerHTML = "<img src='http://i.giphy.com/9w3w4eP5ZUgiQ.gif'></img>"
            hierText.innerText = "ja";
            break;
        default:
            bild.innerHTML = "<img src='http://i.giphy.com/NNgLaLxRYgYUw.gif'></img>"
            console.log("iwas funzt nicht im switch")
            break;
    }
    
 }

miesmuschelSagt();
})();

/*
var state = 0;

function imglink(src){
    hierText.innerText ="<img src='" + src + "'></img>"    
}

function setstate(){
    state = state + 1;
    if (state >= 11){
        state = 0;
    }
}



function myfunction(){
 //   |  | 
 //  letzteres |  |  | willst du das wirklich wissen |  |
    var hierText = document.getElementById("hierText");
    var bild = document.getElementById("bild1"); 

    if (state == 0){
        hierText.innerText = "gewiss"
        bild.innerHTML = imglink("http://i.giphy.com/mWToZdKc0sl4k.gif")
    } else if (state == 1){
        hierText.innerText = "egal"
        bild.innerHTML = imglink("http://i.giphy.com/NNgLaLxRYgYUw.gif")
    } else if (state == 2){
        hierText.innerText = "nein"
        bild.innerHTML = imglink("http://i.giphy.com/p3Tlnu6jY1cNq.gif")
    } else if (state == 3){
        hierText.innerText = "frag doch nocheinmal"
        bild.innerHTML = imglink("http://i.giphy.com/NWg7M1VlT101W.gif")
    } else if (state == 4){
        hierText.innerText = "selbstverständlich"
        bild.innerHTML = imglink("http://i.giphy.com/JawaXj8kyWJ44.gif") 
    } else if (state == 5){
        hierText.innerText = "aber sicher"
        bild.innerHTML = imglink("http://i.giphy.com/YFis3URdQJ6qA.gif") 
    } else if (state == 6){
        hierText.innerText = "frag mich was leichteres"
        bild.innerHTML = imglink("http://i.giphy.com/l41lV04RvMyCysJX2.gif") 
    } else if (state == 7){
        hierText.innerText = "ich glaube eher nicht"
        bild.innerHTML = imglink("http://i.giphy.com/O3GqAYR9jFxLi.gif") 
    } else if (state == 8){
        hierText.innerText = "ich weiß es nicht"
        bild.innerHTML = imglink("http://i.giphy.com/3o7TKxZPj7mbWpinWo.gif") 
    } else if (state == 9){
        hierText.innerText = "keineswegs"
        bild.innerHTML = imglink("http://i.giphy.com/YlitvKufE2O4M.gif") 
    } else if (state == 10){
        hierText.innerText = "eines tages vielleicht"
        bild.innerHTML = imglink("http://i.giphy.com/9w3w4eP5ZUgiQ.gif") 

    } else {
        hierText.innerText = "ja"
        bild.innerHTML = imglink("http://i.giphy.com/9w3w4eP5ZUgiQ.gif")
    }
    
    setstate();
}

*/