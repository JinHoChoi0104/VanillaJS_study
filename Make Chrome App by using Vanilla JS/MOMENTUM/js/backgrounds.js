const images = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

//const bgImage = document.createElement("img");
//bgImage.src = `img/${chosenImage}`;
//document.body.appendChild(bgImage);

const bgImage = document.createElement("background");
bgImage.src = red;

document.body.appendChild(bgImage);
document.body.style.background =red;