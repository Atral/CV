import CV from './cv.js';

$(() => {
    const page = new CV();
    $('body').append(page.$el);
    tippy('[data-tippy-content]', {
        placement: 'bottom',
    });
});