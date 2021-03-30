

var courses = document.getElementsByClassName("course");

for (var i = 0; i < courses.length; i++) {
    courses[i].onclick = function() {
    this.classList.toggle('is-open');

    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
          content.style.maxHeight = null;
    } else {
          content.style.maxHeight = content.scrollHeight + "px";
    }
  }
}
//the button that goes to top.
const btnScrollToTop= document.querySelector("#btnScrollToTop");
btnScrollToTop.addEventListener("click",function(){
     // window.scrollTo(0,0); ;DID NOT WORK 
     window.scrollTo({
           top:0,
           left:0,
           behavior:"smooth"

     });
    // $("html,body").animate({scrollTop:0},"slow");DID NOT WORK 
});

