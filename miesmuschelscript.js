//mit switch:


var bild = document.getElementById("bild1"); 

function miesmuschelSagt() {
    var hiertext = document.getElementById("hiertext");
    let zufallswert = Math.floor(Math.random() * 3);
switch (zufallswert) {
    case 0 :  
        return "gewiss";
        //bild = imglink("http://i.giphy.com/mWToZdKc0sl4k.gif")
        break;
    case 1 :  
        return  "egal";
        break;
    case 2 :  
        return  "nein";
        break;
    case 3 :  
        return  "frag doch nocheinmal";
        break;
    case 4 :  
        return  "selbstverständlich";
        break;
    case 5 :  
        return  "aber sicher";
        break;
    case 6 :  
        return  "frag mich was leichteres";
            break;
    case 7 :  
        return  "gewiss";
        break;
    case 8 :  
        return  "gewiss";
        break;
    case 9 :  
        return  "gewiss";
        break;
    case 10 :  
        return  "gewiss";
        break;
    case 11 :  
        return  "gewiss";
        break;
    default:
        console.log("iwas funzt nicht im switch")
        break;
}
}

console.log(miesmuschelSagt())

/*
var state = 0;

function imglink(src){
    return "<img src='" + src + "'></img>"    
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
    var hiertext = document.getElementById("hiertext");
    var bild = document.getElementById("bild1"); 

    if (state == 0){
        hiertext.innerText = "gewiss"
        bild.innerHTML = imglink("http://i.giphy.com/mWToZdKc0sl4k.gif")
    } else if (state == 1){
        hiertext.innerText = "egal"
        bild.innerHTML = imglink("http://i.giphy.com/NNgLaLxRYgYUw.gif")
    } else if (state == 2){
        hiertext.innerText = "nein"
        bild.innerHTML = imglink("http://i.giphy.com/p3Tlnu6jY1cNq.gif")
    } else if (state == 3){
        hiertext.innerText = "frag doch nocheinmal"
        bild.innerHTML = imglink("http://i.giphy.com/NWg7M1VlT101W.gif")
    } else if (state == 4){
        hiertext.innerText = "selbstverständlich"
        bild.innerHTML = imglink("http://i.giphy.com/JawaXj8kyWJ44.gif") 
    } else if (state == 5){
        hiertext.innerText = "aber sicher"
        bild.innerHTML = imglink("http://i.giphy.com/YFis3URdQJ6qA.gif") 
    } else if (state == 6){
        hiertext.innerText = "frag mich was leichteres"
        bild.innerHTML = imglink("http://i.giphy.com/l41lV04RvMyCysJX2.gif") 
    } else if (state == 7){
        hiertext.innerText = "ich glaube eher nicht"
        bild.innerHTML = imglink("http://i.giphy.com/O3GqAYR9jFxLi.gif") 
    } else if (state == 8){
        hiertext.innerText = "ich weiß es nicht"
        bild.innerHTML = imglink("http://i.giphy.com/3o7TKxZPj7mbWpinWo.gif") 
    } else if (state == 9){
        hiertext.innerText = "keineswegs"
        bild.innerHTML = imglink("http://i.giphy.com/YlitvKufE2O4M.gif") 
    } else if (state == 10){
        hiertext.innerText = "eines tages vielleicht"
        bild.innerHTML = imglink("http://i.giphy.com/9w3w4eP5ZUgiQ.gif") 

    } else {
        hiertext.innerText = "ja"
        bild.innerHTML = imglink("http://i.giphy.com/9w3w4eP5ZUgiQ.gif")
    }
    
    setstate();
}

*/