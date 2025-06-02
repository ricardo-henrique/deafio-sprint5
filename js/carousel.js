//carousel

//Array storage class
let carouselArr = [];

//class Carousel
class Carousel {
  constructor(image, msg, link) {
    this._image = image;
    this._msg = msg;
    this._link = link;
  }

  static Start(arr) {
    if (arr) {
      if (arr.length > 0) {
        Carousel._sequence = 0;
        Carousel._size = arr.length;
        Carousel.Next(); //start
        Carousel._interval = setInterval(function () {
          Carousel.Next();
        }, 3000);
      }
    } else {
      throw 'Method Start need a Array Variable.';
    }
  }

  static Next() {
    const carouselItem = carouselArr[Carousel._sequence];

    const carouselImg = document.querySelector('#carousel');
    const title = document.querySelector('#carousel-title');

    carouselImg.style.textAlign = 'center';

    carouselImg.innerHTML = `<img src="img/${carouselItem._image}">`;
    title.innerHTML = `<a href="${carouselItem._link} target="_blank"">${carouselItem._msg}</a>`;

    Carousel._sequence++;
    if (Carousel._sequence >= Carousel._size) {
      Carousel._sequence = 0;
    }
  }
}
