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

$(document).ready(function () {
    var interval = setInterval(nextImage, 5000);

    $('.carousal .inner img').on('load', function () {
        updateBannerText($(this).data('index'));
    });

    function nextImage() {
        var activeImage = $('.carousal .inner .active');
        var nextImage = activeImage.next('img');

        if (nextImage.length === 0) {
            nextImage = $('.carousal .inner img:first');
        }

        activeImage.removeClass('active');
        nextImage.addClass('active');

        updatePoints();
        updateBannerText(nextImage.data('index'));
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

    function updateBannerText(index) {
        var bannerSection = document.getElementById('bannerSection');
        var text;

        switch (index) {
            case 0:
                text = 'LOOK BEYOND THE ORDINARY';
                break;
            case 1:
                text = 'WE CAN AND WE WILL';
                break;
            case 2:
                text = 'WE LEAVE NO STONE UNTURNED';
                break;
        }

        bannerSection.querySelector('h1').textContent = text;
    }
});
