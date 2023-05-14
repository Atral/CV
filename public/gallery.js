class Gallery {
  constructor(images) {
    this.images = images;
    this.currentIndex = 0;
    this.container = $('<div>').addClass('gallery');
    this.displayImage();
    this.container.appendTo($('body'));  }

  displayImage() {
    this.image = $('<img>').attr('src', this.images[this.currentIndex]);
    this.container.empty().append(this.image);

    this.container.on('click', () => {
      this.maximiseImage(closeButton);
    });

    const leftArrow = $('<div class="arrow left">').html('&lt;')
      .on('click', (e) => {
        e.stopPropagation();
        this.prevImage();
      });

    const rightArrow = $('<div class="arrow right">').html('&gt;')
      .on('click', (e) => {
        e.stopPropagation();
        this.nextImage();
      });
          
    const closeButton = $('<div class="close-button">x</div>')
      .on('click', (e) => {
        e.stopPropagation();
        this.closeImage();
        closeButton.toggle();
        this.container.on('click', () => {this.maximiseImage(closeButton)});
      }).hide();

    this.container.append(leftArrow, rightArrow, closeButton);
  }

  maximiseImage(closeButton) {
    this.container.toggleClass('fullscreen');
    this.image.toggleClass('fullscreen');
    this.container.off('click');
    closeButton.toggle();
  }

  prevImage() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    this.image.attr('src', this.images[this.currentIndex])
  }

  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.image.attr('src', this.images[this.currentIndex])
  }

  closeImage() {
    this.container.removeClass('fullscreen');
    this.image.removeClass('fullscreen');
  }
}

export default Gallery;
