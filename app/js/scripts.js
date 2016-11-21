document.addEventListener('DOMContentLoaded', function() {

    var $ = require('jquery');

    $(function() {
        console.log('scripts.js Loaded');

        $('#fullpage').fullpage({
            navigationPosition: 'left',
            navigation: true,
            loopHorizontal: false,
            slidesNavigation: true,
            lazyLoading: true,
            verticalCentered: false,
            css3: true,
            easingcss3: 'ease-out',
            dragAndMove: true
        });
    });


});
