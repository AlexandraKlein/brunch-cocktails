document.addEventListener('DOMContentLoaded', function() {

    var $ = require('jquery');

    $(function() {
        console.log('fullPageScroll.js Loaded');

        var isMobile = $(window).width() < 768;

        $('#fullpage').fullpage({
            navigationPosition: 'left',
            loopHorizontal: false,
            autoScrolling: isMobile ? false : true,
            slidesNavigation: true,
            verticalCentered: false,
            css3: true,
            easingcss3: 'ease-out',
            navigation: true,
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

                var vid = document.getElementById('bgvid');
                if(index == 1 && direction =='down'){
                    vid.pause();

                    $('#fp-nav span.next').css({
                        color: '#333'
                    })

                } else if(index == 2 && direction == 'up'){
                    vid.play();

                    $('#fp-nav span.next').css({
                        color: '#fff'
                    })
                }
            }
        });

        var $fpNav = $('#fp-nav');

        $fpNav.prepend('<span class="prev inactive">&#8593;</span>')
            .append('<span class="next">&#8595;</span>');

        $('.fp-controlArrow.fp-prev').prepend('<span class="prev">&#8592;</span>');
        $('.fp-controlArrow.fp-next').prepend('<span class="next">&#8594;</span>');

        // Add actions to the arrows
        $fpNav.find('span.prev, span.next').on('click', function() {
            if ($(this).hasClass('prev')) {
                $.fn.fullpage.moveSectionUp();
            } else {
                $.fn.fullpage.moveSectionDown();
            }
        });

    });


});
