$(document).ready(function () {
    var interval = setInterval(nextImage, 5000); 

    function nextImage() {
        var activeImage = $('.carousal .inner .active');
        var nextImage = activeImage.next('img');

        if (nextImage.length === 0) {
            nextImage = $('.carousal .inner img:first');
        }

        activeImage.removeClass('active');
        nextImage.addClass('active');

        updatePoints();
    }

    function updatePoints() {
        var activePoint = $('.carousal .points .activeSVG');
        var nextPoint = activePoint.next('svg');

        if (nextPoint.length === 0) {
            nextPoint = $('.carousal .points svg:first');
        }

        activePoint.removeClass('activeSVG');
        nextPoint.addClass('activeSVG');
    }

    $('.carousal .next').click(function () {
        clearInterval(interval);
        nextImage();
        interval = setInterval(nextImage, 5000); // Reset the interval
    });
});