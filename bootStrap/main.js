var prevScrollpos = window.pageXOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos || currentScrollPos <= 360) {
    document.getElementById("header").style.top = "0";
  } else {
    document.getElementById("header").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
};
let a = true;
document.getElementById("more1").style.display = "none";
document.getElementById("more2").style.display = "none";
document.getElementById("more3").style.display = "none";
document.getElementById("more4").style.display = "none";

function ReadMore(thisreadmore, more) {
  let AddText = document.getElementById(more);
  if (a) {
    AddText.style.display = "block";
    thisreadmore.innerText = "read less";
  } else {
    AddText.style.display = "none";
    thisreadmore.innerText = "read more ";
  }
  a = !a;
}
// $(document).ready(function () {
//   $(".image").hover(function () {
//     $(".overlay").getElementsByClassName({
//       top: "0px",
//     });
//   });
// });
