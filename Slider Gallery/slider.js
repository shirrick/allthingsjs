(function(window) {
  var config = {
    imagesWrap: '.slider__images-wrap',
    images: '.slider__item',
    navButtons: '.slider__move'
  };

  var images = document.querySelectorAll(config.images);

  var imagesNumber = images.length - 1;
  var currentImageNumber = 0;

  images[currentImageNumber].className += ' visible';

  function moveSlider(event) {
    var direction = event.currentTarget.dataset.direction;
    var currentImage = document.querySelector(config.imagesWrap + ' .visible');

    currentImage.className = currentImage.className.replace('visible', '').trim();

    (direction === 'next') ? currentImageNumber += 1 : currentImageNumber -= 1;

    if (currentImageNumber > imagesNumber) {
      currentImageNumber = 0;
    }

    if (currentImageNumber < 0) {
      currentImageNumber = imagesNumber;
    }

    images[currentImageNumber].className += ' visible';
  }

  document.querySelectorAll(config.navButtons).forEach(function(node) {
    node.addEventListener('click', moveSlider);
  });
})(window);
