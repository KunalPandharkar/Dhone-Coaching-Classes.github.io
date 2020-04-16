

function googleTranslateElementInit() {
    new google.translate.TranslateElement(
        { pageLanguage: 'en' },
        'google_translate_element'
    );



    if (typeof (document.querySelector) === 'function') {
        document.querySelector('.goog-logo-link').setAttribute('style', 'display: none');
        document.querySelector('.goog-te-gadget').setAttribute('style', 'font-size: 0');
    }

    jQuery('.goog-logo-link').css('display', 'none');
    jQuery('.goog-te-gadget').css('font-size', '0');
}


if (typeof (localStorage) == 'undefined') {
    alert('Your browser does not support HTML5 localStorage. Try upgrading.');
} else {
    if (localStorage.getItem("background") != null) {
        $("#contrast1").hide();
        $("#contrast2").show();
        getColour = localStorage.background;
        $('body').css('background', getColour);
        $('div,footer,nav,a,.ul-title').css('background', getColour);
        $('p,span,a,td,div,footer').css('color', 'yellow');
        $('.info-section,.carousel-caption').css('background', '');
        $('.info-section, .info-section p,h1,h2,h3,h4,h5,h6,.ul-title').css('color', 'white');
        $('nav').css('border-bottom', '1px solid rgba(255,255,255,0.6)');
        $('.ttl').css('border', '1px solid red');
        $('.ul-title').css('border', '1px solid rgba(255,255,255,0.6)');
    }
    else {
        $("#contrast2").hide();
        $("#contrast1").show();
    }
}


$("#contrast1").click(function () {
    location.reload();
    setColour = "black";


    /*to more test color can change and retest*/
    if (setColour == "") {
        alert('You never entered anything silly!');
        return;
    }
    localStorage.setItem("background", setColour);
    localStorage.setItem("color", settextColor);
    getColour = localStorage.background;

    $('body').css('background', getColour);
    $('div,footer,nav,a,.ul-title').css('background', getColour);
    $('p,span,a,td,div,footer,.fa').css('color', 'yellow');
    $('.info-section,.carousel-caption').css('background', '');
    $('.info-section,.info-section p,h1,h2,h3,h4,h5,h6,.ul-title').css('color', 'white');
    $('nav').css('border-bottom', '1px solid rgba(255,255,255,0.6)');

    $('.ttl').css('border', '1px solid red');
    $('.ul-title').css('border', '1px solid rgba(255,255,255,0.6)');
});
$(document).ready(function () {
    $("#contrast2").click(function () {
        location.reload();
        localStorage.removeItem('background');
    });
});


  $('.hide').hide();
        $('#hidebutton').hide();
        $('#showbutton').click(function () {
            $('.hide').toggle();
            $('#showbutton').hide();
            $('#hidebutton').show();
        });

        $('#hidebutton').click(function () {
            $('.hide').toggle();
            $('#showbutton').show();
            $('#hidebutton').hide();
        });


$('#exampleSlider').multislider({
    interval: 4000,
    slideAll: false,
    duration: 1500
});

//$('#zoom-in').click(function () {
//    updateZoom(0.1);
//});

//$('#zoom-out').click(function () {
//    updateZoom(-0.1);
//});
//$('#zoom').click(function () {
//    zoomLevel = 1;
//    $('body').css({ zoom: zoomLevel, '-moz-transform': 'scale(' + zoomLevel + ')' });
//});

//zoomLevel = 1;

//var updateZoom = function (zoom) {
//    zoomLevel += zoom;
//    $('body').css({ zoom: zoomLevel, '-moz-transform': 'scale(' + zoomLevel + ')' });
//};




$(".dropdown").hover(
    function () {
        $('>.dropdown-menu', this).stop(true, true).fadeIn("fast");
        $(this).addClass('open');
    },
    function () {
        $('>.dropdown-menu', this).stop(true, true).fadeOut("fast");
        $(this).removeClass('open');
    });

$('.right-panel #sidebar').hide();
$(document).ready(function () {
    $('.right-panel #sidebar').hide();
    $('#sidebarCollapse').on('click', function () {
        $('.right-panel #sidebar').toggle();

    });


});

$(document).ready(function () {

    $("#owl-demo").owlCarousel({


        items: 1, //how many items you want to display
        loop: true,

        autoplay: true,
        autoplayTimeout: 1000,
        autoplayHoverPause: false

    });

});





function openModal() {
    document.getElementById("myModal").style.display = "block";
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
var isPresent = document.getElementById('photo-gallery');
if (isPresent > 0) {
    showSlides(slideIndex);
}
function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");

    var captionText = document.getElementById("caption");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";

}





    $(document).ready(function () {
        var allElement = $('h1,h2,h3,h4,h5,h6,p,a,span, .table td, .table th, li, i, em');
        console.log(allElement);
        let originalArray = [];

        for (var i = 0; i < allElement.length; i++) {
            var originalSize = $(allElement[i]).css('font-size');
            originalArray.push(originalSize);
        }


        var localArray = localStorage.getItem('fonts');
        if (localStorage.getItem("fonts") != null) {

            var floatArray = [];
            let pasreValue;

            pasreValue = JSON.parse(localArray);
            var floatValue;
            for (var x = 0; x < pasreValue.length; x++) {
                floatValue = parseFloat(pasreValue[x]);

                floatArray.push(floatValue);

            }
            console.log(floatArray);

            for (var i = 0; i < allElement.length; i++) {
                $(allElement[i]).css('font-size', floatArray[i] + 'px');

            }

        }

        // Increase Font Size  

        var count = 0;

        $("#zoom-in").one('click', function () {
            count = localStorage.getItem('count');

            if (count <= 0) {

                count++;
                for (var i = 0; i < allElement.length; i++) {

                    originalSize = $(allElement[i]).css('font-size');

                    var increaseSize = parseFloat(originalSize) + 2 + 'px';

                    $(allElement[i]).css('font-size', increaseSize);

                    namesArr.push(increaseSize);


                    ////alert(parseFloat(originalSize) + 2);
                    //console.log($(allElement[i]));
                    //console.log($(allElement[i]) + " /" +originalSize + " /" + increaseSize);


                }


                localStorage.setItem('fonts', JSON.stringify(namesArr));
                localStorage.setItem('count', count);
            }
        });

        // Decrease Font Size 


        let namesArr = [];
        var count1 = 0;
        $("#zoom-out").one('click', function () {
            count1 = localStorage.getItem('count1');

            if (count1 <= 0) {
                count1++;
                for (var i = 0; i < allElement.length; i++) {

                    originalSize = $(allElement[i]).css('font-size');

                    var increaseSize = parseFloat(originalSize) - 2 + 'px';

                    $(allElement[i]).css('font-size', increaseSize);

                    namesArr.push(increaseSize);
                }
                //console.log(namesArr);

                localStorage.setItem('fonts', JSON.stringify(namesArr));
                localStorage.setItem('count1', count1);
            }
        });

        // reset Font Size


        $("#zoom").one('click', function () {
            location.reload();
            localStorage.removeItem('fonts');
            localStorage.removeItem('count');
            localStorage.removeItem('count1');
        });


    });





$(document).ready(function () {
    // Add minus icon for collapse element which is open by default
    $(".collapse.show").each(function () {
        $(this).prev(".card-header").find(".fa").addClass("fa-minus").removeClass("fa-plus");
    });

    // Toggle plus minus icon on show hide of collapse element
    $(".collapse").on('show.bs.collapse', function () {
        $(this).prev(".card-header").find(".fa").removeClass("fa-plus").addClass("fa-minus");
    }).on('hide.bs.collapse', function () {
        $(this).prev(".card-header").find(".fa").removeClass("fa-minus").addClass("fa-plus");
    });
});

$('.v-playmarquee').hide();
$('.h-playmarquee').hide();

function calcSpeed() {
    var liTime = 5;

    var spanSelector = document.querySelectorAll('.marquee');
    for (var i = 0; i < spanSelector.length; i++) {
        var marqueeDiv = spanSelector[i];

        marqueeUL = marqueeDiv.children[0];

        marqueeElemts = marqueeUL.childElementCount;
        //console.log(marqueeElemts);
        if (marqueeUL.classList.contains('marquee-vertical')) {
            marqueeULHeight = marqueeUL.offsetHeight;
            //console.log(marqueeULHeight);
            liTime = 4;
            var vPlay = document.querySelectorAll('.v-playmarquee');

            var vPause = document.querySelectorAll('.v-pausemarquee');
            vPause.forEach(function (item) {
                item.addEventListener('click', function (event) {
                    event.target.style.display = "none";
                    event.target.nextSibling.nextSibling.style.display = "inline-block";
                    targetUL = event.target.parentElement.nextSibling.nextSibling.children[0];
                    targetUL.style.animationPlayState = "paused";
                });
            });
            vPlay.forEach(function (item) {
                item.addEventListener('click', function (event) {
                    event.target.style.display = "none";
                    event.target.previousSibling.previousSibling.style.display = "inline-block";;
                    targetUL = event.target.parentElement.nextSibling.nextSibling.children[0];
                    targetUL.style.animationPlayState = "running";
                });
            });
        }

        else if (marqueeUL.classList.contains('marquee-horizontal')) {
            marqueeULWidth = marqueeUL.scrollWidth;
            console.log(marqueeULWidth);
            liTime = 8;
            var hPlay = document.querySelectorAll('.h-playmarquee');
            var hPause = document.querySelectorAll('.h-pausemarquee');
            hPause.forEach(function (item) {
                item.addEventListener('click', function (event) {
                    targetUL = event.target.parentElement.previousSibling.previousSibling.children[0];
                    //console.log(targetUL);
                    targetUL.style.animationPlayState = "paused";
                    event.target.style.display = "none";
                    event.target.nextSibling.nextSibling.style.display = "block";

                });
            });
            hPlay.forEach(function (item) {
                item.addEventListener('click', function (event) {
                    targetUL = event.target.parentElement.previousSibling.previousSibling.children[0];
                    //console.log(targetUL);
                    targetUL.style.animationPlayState = "running";
                    event.target.style.display = "none";
                    event.target.previousSibling.previousSibling.style.display = "block";

                });
            });
        }
        if (marqueeUL.classList.contains('marquee-vertical')) {
            var spanTime = marqueeULHeight / 16;
        }
        else {
          
           
             
         
         
                 spanTime = marqueeULWidth / 22;
                 console.log(marqueeULWidth);
                 console.log(spanTime);
          
          
        }

        //console.log(spanTime);
        marqueeUL.style.animationDuration = spanTime + "s";


    }
}
calcSpeed();



$('.marquee a').click(function () {
    window.location.reload();
});

$(".dropdown").hover(
    function () {
        $('>.dropdown-menu', this).stop(true, true).fadeIn("fast");
        $(this).addClass('show');
    },
    function () {
        $('>.dropdown-menu', this).stop(true, true).fadeOut("fast");
        $(this).removeClass('show');
    });


window.onload = function () {
    (function () {
        var viewportWidth = $(window).width();
        if (viewportWidth < 800) {

            var dropdownBtn = document.querySelectorAll('.dropdown-toggle');
            //console.log(dropdownBtn);
            dropdownBtn.forEach(function (btn) {
                btn.addEventListener('click', function (event) {
                    var dropMenu = event.target.nextSibling.nextSibling;
                    if (dropMenu.classList.contains('show')) {
                        dropMenu.style.display = "none";
                    }
                    else {
                        dropMenu.style.display = "block";
                    }
                });

            });


        }



    })();
}


var card = document.querySelectorAll('.flip-box-inner');
card.forEach(function (item) {
    var box = item.parentElement;
    box.addEventListener('click', function (event) {

        var targetCard = event.target.children[0];
        console.log(targetCard);
        targetCard.classList.toggle('is-flipped');
        var flipCLass = document.querySelectorAll('.is-flipped');
        flipCLass.forEach(function (it) {
            console.log(it);
            if (it == !null) {
                if (it.classList.contains('is-flipped')) {
                    it.classList.remove('is-flipped');
                }

            }

        })


    });
});

function load() {
    window.location.href = "https://localhost:44335/CmsCounterIndex";

}