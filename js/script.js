
if ($(".text-slider").length == 1) {
  var typed_strings = $(".text-slider-items").text();
  var typed = new Typed(".text-slider", {
      strings: typed_strings.split(", "),
      typeSpeed: 30,
      loop: true,
      backDelay: 2000,
      backSpeed: 100,
  });
}



var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 1500);
}

function showPage() {
  document.getElementById("box").style.display = "none";
  document.getElementById("after-load").style.display = "block";
}