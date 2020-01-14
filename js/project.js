var courseInfo =[];

function Details(_img,_p,_h2,_h3){
    this.img = _img;
    this.p = _p;
    this.h2= _h2
    this.h3 = _h3
} 

courseInfo.push(new Details("1.JPG","4Lessons / 12week","Study law Of Physics","Lorem ipsum dolor, sit amet consectetur adipisicing elit."))
courseInfo.push(new Details("2.JPG","4Lessons / 12week","Study law Of Physics","Lorem ipsum dolor, sit amet consectetur adipisicing elit."))
courseInfo.push(new Details("3.JPG","4Lessons / 12week","Study law Of Physics","Lorem ipsum dolor, sit amet consectetur adipisicing elit."))
courseInfo.push(new Details("4.JPG","4Lessons / 12week","Study law Of Physics","Lorem ipsum dolor, sit amet consectetur adipisicing elit."))
courseInfo.push(new Details("5.JPG","4Lessons / 12week","Study law Of Physics","Lorem ipsum dolor, sit amet consectetur adipisicing elit."))
courseInfo.push(new Details("6.JPG","4Lessons / 12week","Study law Of Physics","Lorem ipsum dolor, sit amet consectetur adipisicing elit."))
let content = ''

for(let course of courseInfo){
    content +=`     <div class="img-holder">
    <img src="img/images/${course.img}" alt="">
    <div class="course-info">
        <p>${course.p}</p>
        <h2>${course.h2}</h2>
        <h3>${course.h3}</h3>
    </div>
</div>`
console.log(content)
}

document.getElementById("information").innerHTML = content

$(document).ready(function() {
    $(window).on("scroll",function() {
        let dist = $(this).scrollTop();
        if(dist > 50){
            $(".navbar").addClass("f-top");
            $("#scrollTop").fadeIn();
        } else {
            $(".navbar").removeClass("f-top")
            $("#scrollTop").fadeOut();
        }
        $(".sec-item").each(function(el) {
            if ( $(this).offset().top <= dist) {
                $(".navbar ul li a").eq(el).parent().addClass("active").siblings().removeClass("active");
            }

        })
    })
    $("#scrollTop").click(function(){
        $("html, body").animate({
            scrollTop:0
        },700)
    })
    $(".navbar ul li a").on("click", function () {
        $(this).parent().addClass("active").siblings().removeClass("active")
        let target = $(this).attr("href");
        console.log(target)
        $("html, body").animate({
            scrollTop: $(target).offset().top
        },700)
    })
    $(".navbar button a").on("click",function(){
        let res = $(this).attr("href");
        $("body, html").animate({
            scrollTop: $(res).offset().top
        },700)
        $(".navbar ul li").removeClass("active")
    })
    // AOS PLUGIN
    AOS.init({
        duration: 800,
        offset: 500
    });

  $(".owl-carousel").owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    dots:false,
    nav:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2
        },
        1000:{
            items:3
        },
        1200:{
            items:4
        }
    }
});
document.querySelector(".owl-next span").innerHTML = "next"
document.querySelector(".owl-prev span").innerHTML = "prev"
});