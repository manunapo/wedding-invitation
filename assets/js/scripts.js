// ------ Scripts ------------


// Parallax

// Instagram parallax
$('.parallax-instagram').parallax({
    imageSrc: 'assets/img/instagram.jpg'

});
// Cover parallax
$('.parallax-cover').parallax({
    imageSrc: 'assets/img/portada.jpg'
});
// Spacer parallax
$('.parallax-spacer').parallax({
    imageSrc: 'assets/img/instagram.jpg'
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
    document.getElementById("reloj").innerHTML = days + " días " + hours + "hs " +
        minutes + "m " + seconds + "s ";

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("reloj").innerHTML = "¡LLEGO EL GRAN DÍA!";
        $('#reloj').prev('p').html('Listo...');
    }
}, 1000);


$('#btnCopy').click(function() {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($("#p1").text()).select();
    document.execCommand("copy");
    $temp.remove();
    $(this).text('Copiado!');
});

// ----------------------