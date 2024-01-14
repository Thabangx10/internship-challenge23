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

        var h1Element = bannerSection.querySelector('h1');

        // Add a class to trigger the transition effect
        h1Element.classList.add('slide-from-left');
    
        // Set the text content after a short delay to allow the transition to take effect
        setTimeout(function () {
            h1Element.textContent = text;
            // Remove the class after the transition ends to reset for the next update
            h1Element.addEventListener('transitionend', function () {
                h1Element.classList.remove('slide-from-left');
            }, { once: true });
        }, 100);
    }
});
