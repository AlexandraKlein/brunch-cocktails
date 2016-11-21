document.addEventListener('DOMContentLoaded', function() {

    var $ = require('jquery');

    $(function() {
        console.log('scripts.js Loaded');

        $('#fullpage').fullpage({
            navigationPosition: 'left',
            loopHorizontal: false,
            autoScrolling: false,
            slidesNavigation: true,
            lazyLoading: true,
            verticalCentered: false,
            css3: true,
            easingcss3: 'ease-out',
            navigation: true,
            navigationTooltips: ['First section', 'Second section', 'Third section'],
            dragAndMove: true,
            onLeave: function(index, nextIndex, direction) {
                // Remove the inactive class from all arrows
                $('#fp-nav > span').removeClass('inactive');

                // Add inactive class if needed
                if (nextIndex == 1) {
                    $('#fp-nav > span.prev').addClass('inactive');
                } else if (nextIndex == $('.fp-section').length) {
                    $('#fp-nav > span.next').addClass('inactive');
                }
            }
        });

        $('#fp-nav').prepend('<span class="prev inactive">&#8593;</span>')
                    .append('<span class="next">&#8595;</span>');

        $('.fp-controlArrow.fp-prev').prepend('<span class="prev">&#8592;</span>');
        $('.fp-controlArrow.fp-next').prepend('<span class="next">&#8594;</span>');

        // Re-center the fullPage navigation
        $('#fp-nav').css({ 'margin-top': '-' + ($('#fp-nav').height() / 2) + 'px' });

        // Add actions to the arrows
        $('#fp-nav').find('span.prev, span.next').on('click', function() {
            if ($(this).hasClass('prev')) {
                $.fn.fullpage.moveSectionUp();
            } else {
                $.fn.fullpage.moveSectionDown();
            }
        });

    });


});
