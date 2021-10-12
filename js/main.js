document.addEventListener("DOMContentLoaded", function() {
    /////// Prevent closing from click inside dropdown
    document.querySelectorAll('.dropdown-menu').forEach(function(element) {
        element.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    })
});

 
    $(".owl-carousel,.posts-carousel").owlCarousel({
        loop: true,
        margin: 10,
        rtl: true,
        nav: true,
        dots:true,
        items: 1,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    });
 