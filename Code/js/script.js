 $(document).ready(function () {
            // Smooth scroll for anchor links (if needed)
            $('.nav-link[href^="#"]').on('click', function (event) {
                var target = $(this.getAttribute('href'));
                if (target.length) {
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top - 70
                    }, 500);
                }
            });

            // Navbar background change on scroll
            $(window).scroll(function () {
                if ($(this).scrollTop() > 50) {
                    $('.navbar').addClass('bg-white shadow');
                } else {
                    $('.navbar').removeClass('bg-white shadow');
                }
            });
        });