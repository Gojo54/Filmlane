$('#sliderbar').owlCarousel({
    loop:false,
    margin:10,
    nav:true,
    responsive:{
        0:{
          items:1
        },
        550:{
            items:2
        },
        991:{
            items:3
        },
        1200:{
            items:4
        }
    }
})
const menu = document.getElementById('menu')
const opecity = document.getElementById('opecity')
function toggleshow(){
  opecity.style.display="block"
  menu.classList.toggle("active");

}
function togglehide(){
  opecity.style.display="none"
  menu.classList.remove("active");




}
