import Milotic from "../img/milotic.jpg";

class Image {
  insertBlobImage() {
    const img = document.createElement("img");
    img.src = Milotic;
    img.width = 200;
    document.querySelector("body").appendChild(img);
  }
}

export default Image;
