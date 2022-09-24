
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

