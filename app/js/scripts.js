document.addEventListener('DOMContentLoaded', function() {
// do your setup here
    var $ = require('jquery');

    $(function() {
        console.log('scripts.js Loaded');
        $(document).ready(function() {
            $('#fullpage').fullpage({
                navigation: true,
                slidesNavigation: true,
                lazyLoading: true,
                verticalCentered: false
            });
        });
    });
});
