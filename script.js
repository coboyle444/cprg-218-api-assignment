document.getElementById("title").textContent = "😹 Joke of the Day ";

fetch('https://v2.jokeapi.dev/joke/Any?safe-mode')
.then(response => response.json ())
.then(data => {
    console.log(data);
    if(data.type === "single") {
        joke.textContent = data.joke
    }
    else if (data.type === "twopart") {
        joke.textContent = data.setup + "  ...  " + data.delivery;
    }
});

programming.addEventListener('click', function () {
    console.log("program joke!");
    fetch('https://v2.jokeapi.dev/joke/Programming?safe-mode')
    .then(response => response.json ())
    .then(data => {
        console.log(data);
        if(data.type === "single"){
            joke.textContent = data.joke
        }
        else {
            joke.textContent = data.setup + " ... " + data.delivery;
        }
    })
});

misc.addEventListener('click', function () {
    console.log("miscellaneous joke!");
    fetch('https://v2.jokeapi.dev/joke/Miscellaneous?safe-mode')
    .then(response => response.json ())
    .then(data => {
        console.log(data);
        if(data.type === "single"){
            joke.textContent = data.joke
        }
        else {
            joke.textContent = data.setup + " ... " + data.delivery;
        }
    })
});
