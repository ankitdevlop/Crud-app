var sun=document.querySelector(".fa-sun-o");
sun.addEventListener("click",function(){
    console.log(this);
    this.classList.toggle("fa-moon-o");
})


var ab1=document.querySelector(".box41");

var clicked=true;

var icon10=document.querySelector(".uil-angle-down");

ab1.addEventListener("click",function(){

    console.log(this);

    if(clicked)
    {
        this.nextElementSibling.style.display="block";
        // this.nextElementSibling.style.transition = "all 2s";
        gsap.from(".box51",{
            y:-60,
            opacity:0,
            duration:1,
            delay:0.2,
        }) 
        clicked=false;
    }

    else
    {
        this.nextElementSibling.style.display="none";
        clicked=true;
    }

});

var btn1=document.querySelector(".top1");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btn1.style.display = "block";
  } else {
    btn1.style.display = "none";
  }
}

function topfunction() 
{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

var btn2=document.querySelector(".fa-sun-o");

// --sections--
var sec2=document.querySelector(".section2");
var sec3=document.querySelector(".section3");
var sec4=document.querySelector(".section4");
var sec5=document.querySelector(".section51");
var sec6=document.querySelector(".section61");
var sec7=document.querySelector(".section71");

var hea1=document.querySelector(".head1");

var nav1=document.querySelector(".nav");

// var li1=document.querySelectorAll(".li11");
var lo1=document.querySelector(".logo");
var pa1=document.querySelector(".p1");
var pa2=document.querySelector(".p2");
var pa3=document.querySelector(".p3");

var sco1=document.querySelector(".scroll1");

var la1=document.querySelectorAll(".li11")

var pa4=document.querySelectorAll(".ab1");
var pa5=document.querySelector(".ab2");

var pa6=document.querySelector(".pa12");

var pa9=document.querySelector(".pa13");
var pa10=document.querySelector(".pa14");
// var pa11=document.querySelector(".ap1");
var pa12=document.querySelectorAll(".p7");

var la2=document.querySelectorAll(".l1");

var inp2=document.querySelectorAll(".inpu1");

var icon1=document.querySelector(".fa-sun-o");

var ski1=document.querySelectorAll(".skills1");
var tx1=document.querySelectorAll(".txt11");
var pa8=document.querySelectorAll(".ab111");
var ca1=document.querySelectorAll(".ab12");

var lai=document.querySelectorAll(".li1");

var foot=document.querySelector(".footer");
var fo1=document.querySelector(".footer11");
var ft1=document.querySelector(".ft1");

var pa13=document.querySelector(".ab12");

var sub=document.querySelectorAll(".ab2");

var sub1=document.querySelector(".pa11");

var cap=document.querySelector(".uil-graduation-cap");

var top11=document.querySelector(".top1");

var desc=document.querySelectorAll(".ab33");

var list1=document.querySelectorAll(".li1");

var subtitle=document.querySelectorAll(".em1");

var pas1=document.querySelector(".pas");

var pad1=document.querySelector(".pad");

btn2.onclick=function()
{

    sec2.classList.toggle('active');
    sec3.classList.toggle('active');
    sec4.classList.toggle('active');
    sec5.classList.toggle('active');
    sec6.classList.toggle('active');
    sec7.classList.toggle('active');

    nav1.classList.toggle('active');
    icon1.classList.toggle('active');

    // li1.classList.toggle('active');
    sco1.classList.toggle('active');
    lo1.classList.toggle('active');
    pa1.classList.toggle('active');
    pa2.classList.toggle('active');
    pa3.classList.toggle('active');
    pa6.classList.toggle('active');
    pas1.classList.toggle('active');
    pad1.classList.toggle('active');

    pa9.classList.toggle('active');
    pa10.classList.toggle('active');
    // pa11.classList.toggle('active');
    
    hea1.classList.toggle('active');
    foot.classList.toggle('active');
    fo1.classList.toggle('active');
    ft1.classList.toggle('active');
    // desc.classList.toggle('active');

    sub1.classList.toggle('active');
    cap.classList.toggle('active');

    top11.classList.toggle('active');

      // Add click event listener to each element
    la1.forEach(function (val1) 
    {
        val1.classList.toggle('active');
    });

    pa4.forEach(function (val2) 
    {
        val2.classList.toggle('active');
    });

    ski1.forEach(function (val4) 
    {
        val4.classList.toggle('active');
    });

    desc.forEach(function (val16) 
    {
        val16.classList.toggle('active');
    });

    pa12.forEach(function (val6) 
    {
        val6.classList.toggle('active');
    });

    la2.forEach(function (val7) 
    {
        val7.classList.toggle('active');
    });

    inp2.forEach(function (val8) 
    {
        val8.classList.toggle('active');
    });

    tx1.forEach(function (val9) 
    {
        val9.classList.toggle('active');
    });


    list1.forEach(function(val13)
    {
        val13.classList.toggle('active');
    });

    sub.forEach(function (val12) 
    {
        val12.classList.toggle('active');
    });

    subtitle.forEach(function (val14) 
    {
        val14.classList.toggle('active');
    });

    subtitle.forEach(function (val14) 
    {
        val14.classList.toggle('active');
    });

}


