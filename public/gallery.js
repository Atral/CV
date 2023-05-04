class Gallery {
  constructor(images) {
    this.images = images;
    this.currentIndex = 0;
    this.container = $('<div>').addClass('gallery');
    this.displayImage();
    this.container.appendTo($('body'));
    this.bindEvents();
  }

  displayImage() {
    const image = $('<img>').attr('src', this.images[this.currentIndex]);
    this.container.empty().append(image);
    if (this.container.hasClass('fullscreen')) {
      image.addClass('fullscreen');
    } else {
      image.addClass('fill-container');
    }

    // add arrow buttons
    const leftArrow = $('<div>').addClass('arrow left').html('&lt;')
      .on('click', 1, () => {
        this.container.stopPropagation();
        self.prevImage();
      });

    const rightArrow = $('<div>').addClass('arrow right').html('&gt;')
      .on('click', 1, () => {
        this.container.stopPropagation();
        self.nextImage();
      });
      
    this.container.append(leftArrow, rightArrow);
  }

  bindEvents() {
    const self = this;


    this.container.find('.right').on('click', () => {

    });

    this.container.on('click', 2, () => {
      if (self.container.hasClass('fullscreen')) {
        self.container.removeClass('fullscreen');
      } else {
        self.container.addClass('fullscreen');
      }
      self.displayImage();
    });
  }

  prevImage() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    this.displayImage();
  }

  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.displayImage();
  }
}

export default Gallery;
