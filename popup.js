let imgContainer = document.getElementById("image-container");
let closeEl = document.getElementById("close");
let nextEl = document.getElementById("next");
let previousEl = document.getElementById("previous");
let popupContainerEl = document.getElementById("popup-container");

// closeEl.addEventListener("click", () => {
//   popupContainerEl.style.display = "none";
//   popupContainerEl.removeChild(idOfClicked);
// });

// console.log(imgContainer);
function createImages(num) {
  for (let i = 0; i <= num; i++) {
    let divs = document.createElement("div");
    let images = document.createElement("img");
    images.src = `https://picsum.photos/id/${i + 10}/200/200`;
    images.id = i;
    divs.appendChild(images);
    imgContainer.appendChild(divs);
    images.onclick = (image) => {
      let newImg = document.createElement("img");
      newImg.id = image.target.id;

      newImg.classList.add("newImg");
      newImg.src = image.target.src;
      popupContainerEl.style.display = "block";
      popupContainerEl.appendChild(newImg);

      nextEl.onclick = () => {
        let next = +newImg.id++;
        let nextImg = document.getElementById(next).getAttribute("src");
        newImg.src = nextImg;
        console.log(nextImg);
      };
      previousEl.onclick = () => {
        let previous = +newImg.id--;
        let preImg = document.getElementById(previous).getAttribute("src");
        newImg.src = preImg;
        // console.log(nextImg);
      };

      closeEl.addEventListener("click", () => {
        popupContainerEl.style.display = "none";
        popupContainerEl.removeChild(newImg);
      });
    };
  }
}

createImages(200);
