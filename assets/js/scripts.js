// ------ Scripts ------------


// Parallax

// Instagram parallax
$('.parallax-instagram').parallax({
    imageSrc: 'assets/img/photo_background.jpg'

});
// Cover parallax
$('.parallax-cover').parallax({
    imageSrc: 'assets/img/photo_background.jpg'
});
// Spacer parallax
$('.parallax-spacer').parallax({
    imageSrc: 'assets/img/photo_background.jpg'
});


// Counting down:
// Set the date we're counting down to
var countDownDate = new Date(dateCountDown).getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("clock").innerHTML = days + " days " + hours + "hs " +
        minutes + "m " + seconds + "s ";

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("clock").innerHTML = "¡THE BIG DAY HAS ARRIVED!";
        $('#clock').prev('p').html('Done...');
    }
}, 1000);


$('#btnCopy').click(function() {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($("#p1").text()).select();
    document.execCommand("copy");
    $temp.remove();
    $(this).text('Done!');
});

// ----------------------