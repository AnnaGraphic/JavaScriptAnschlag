( function () {

    document.getElementById("sendQuestion").onclick = function () {
        miesmuschelSagt();
    };

    const answer = document.getElementById("answer");
    const gif = document.getElementById("gif");

    function miesmuschelSagt() {
        let randomValue = Math.floor(Math.random() * 12);q
        switch (randomValue) {
            case 0 :
                gif.innerHTML = "<img src='http://i.giphy.com/mWToZdKc0sl4k.gif'></img>"
                answer.innerText = "gewiss";
                break;
            case 1 :
                gif.innerHTML = "<img src='http://i.giphy.com/NNgLaLxRYgYUw.gif'></img>"
                answer.innerText = "egal";
                break;
            case 2 :
                gif.innerHTML = "<img src='http://i.giphy.com/p3Tlnu6jY1cNq.gif'></img>"
                answer.innerText = "nein";
                break;
            case 3 :
                gif.innerHTML = "<img src='http://i.giphy.com/NWg7M1VlT101W.gif'></img>"
                answer.innerText = "frag doch nocheinmal";
                break;
            case 4 :
                gif.innerHTML = "<img src='http://i.giphy.com/JawaXj8kyWJ44.gif'></img>"
                answer.innerText = "selbstverständlich";
                break;
            case 5 :
                gif.innerHTML = "<img src='http://i.giphy.com/YFis3URdQJ6qA.gif'></img>"
                answer.innerText = "aber sicher";
                break;
            case 6 :
                gif.innerHTML = "<img src='http://i.giphy.com/l41lV04RvMyCysJX2.gif'></img>"
                answer.innerText = "frag mich was leichteres";
                    break;
            case 7 :
                gif.innerHTML = "<img src='http://i.giphy.com/O3GqAYR9jFxLi.gif'></img>"
                answer.innerText = "ich glaube eher nicht";
                break;
            case 8 :
                gif.innerHTML = "<img src='http://i.giphy.com/3o7TKxZPj7mbWpinWo.gif'></img>"
                answer.innerText = "ich weiß es nicht";
                break;
            case 9 :
                gif.innerHTML = "<img src='http://i.giphy.com/YlitvKufE2O4M.gif'></img>"
                answer.innerText = "keineswegs";
                break;
            case 10 :
                gif.innerHTML = "<img src='http://i.giphy.com/9w3w4eP5ZUgiQ.gif'></img>"
                answer.innerText = "eines tages vielleicht";
                break;
            case 11 :
                gif.innerHTML = "<img src='http://i.giphy.com/9w3w4eP5ZUgiQ.gif'></img>"
                answer.innerText = "ja";
                break;
            default:
                gif.innerHTML = "<img src='http://i.giphy.com/NNgLaLxRYgYUw.gif'></img>"
                console.log("iwas funzt nicht im switch")
                break;
        }
    }
    miesmuschelSagt();
})();
