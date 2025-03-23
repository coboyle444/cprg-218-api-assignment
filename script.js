const categoryTitle = document.getElementById(('title'))
const joke = document.getElementById("joke");

categoryTitle.textContent = "😹 Joke of the Day";

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
    categoryTitle.textContent = "A Random Programming Joke 💻"
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
    categoryTitle.textContent = "A Random Miscellaneous Joke 😄"
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

pun.addEventListener('click', function () {
    console.log("pun... *sigh*");
    categoryTitle.textContent = "A Random Pun 🙃";
    fetch('https://v2.jokeapi.dev/joke/Pun?safe-mode')
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

christmas.addEventListener('click', function () {
    console.log("christmas joke!");
    categoryTitle.textContent = "A Random Christmas Joke 🎄";
    fetch('https://v2.jokeapi.dev/joke/Christmas?safe-mode')
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

spooky.addEventListener('click', function () {
    console.log("spooky joke! oooOOOoo!");
    categoryTitle.textContent = "A Random Spooky Joke 👻";
    fetch('https://v2.jokeapi.dev/joke/Spooky?safe-mode')
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