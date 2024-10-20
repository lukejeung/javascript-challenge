const images = ["풍경1.jpg", "풍경2.jpg", "풍경3.jpg"];
const chosenimage = images[Math.floor(Math.random() * images.length)];
const bgimage = document.createElement("img");
bgimage.src = `${chosenimage}`;
document.body.appendChild(bgimage);