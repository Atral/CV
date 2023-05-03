class Gallery {
    constructor(images) {
      this.$el = $('<div class="gallery"/>');
      this.images = images;
      this.currentIndex = 0;
      this.showGallery();
    }
  
    showGallery() {
      const $leftArrow = $('<div class="arrow left-arrow">&lt;</div>').appendTo(this.$el);
      const $rightArrow = $('<div class="arrow right-arrow">&gt;</div>').appendTo(this.$el);
      const $imageContainer = $('<div class="image-container"/>').appendTo(this.$el);
      const $image = $('<img class="gallery-image"/>').attr('src', this.images[this.currentIndex]).appendTo($imageContainer);
      const $closeButton = $('<div class="close-button">×</div>').appendTo($imageContainer);

      this.images.forEach(image => {
        $('<img class="gallery-image"/>').attr('src', image).appendTo($imageContainer);
      });
  
      $leftArrow.on('click', () => {
        this.currentIndex += 1;
        $image.attr('src', this.images[this.currentIndex]);
      });
  
      $rightArrow.on('click', () => {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
        $image.attr('src', this.images[this.currentIndex]);
      });
  
      $image.on('click', () => {
        this.$el.addClass('full-screen');
      });
  
      $closeButton.on('click', () => {
        this.$el.removeClass('full-screen');
      });
  
      $('body').append(this.$el);
    }
  }
  
  export default Gallery;
  