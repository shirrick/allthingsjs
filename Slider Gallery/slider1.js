(function(window) {
  var config = {
    imageWrap: '.slider__images-wrap',
    images: '.slider__item',
    navButtons: '.slider-move'
  }

  var images = document.querySelectorAll(config.images);
  console.log(images);
  var imagesNumber = document.querySelectorAll(config.images);

  var imagesNumber = images.length - 1;
  var currentImageNumber = 0;

  images[0].className += ' visible';

  function moveSlider(event) {
    var direction = event.currentTarget.dataset.direction;
    var currentImage = document.querySelectorAll(config.imagesWrap + ' .visible');

    currentImage.className.replace('visible', '').trim();

    (direction === 'next') ? currentImageNumber++ : currentImageNumber--;

    if (currentImageNumber > imagesNumber) {
      currentImageNumber = 0;
    }

    if (currentImageNumber < imagesNumber) {
      currentImageNumber = imagesNumber;
    }

    images[currentImageNumber].className += ' visible';

  }

  document.querySelectorAll(config.navButtons).forEach(function(node) {
    node.addEventListener('click', moveSlider);
  })

})(window);
