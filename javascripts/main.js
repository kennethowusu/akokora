
//===============FOR NAVIGATION ====================//
$('.hamburger-img').on('click',()=>{
  toggleMainMenu();
})

//close search form
$('.search-img').on('click',()=>{
  $('.search-div').css('display','flex');
})
$('.search-close-img').on('click',()=>{
  $('.search-div').slideUp(300);
})

const toggleMainMenu = () =>{
  if($('.hamburger-img').attr('src') == '/images/svg/hamburger.svg'){
    $('.hamburger-img').attr('src','/images/svg/close.svg');
    $('.main-menu').css('transform','translate(0)');
  }else{
    $('.hamburger-img').attr('src','/images/svg/hamburger.svg')
    $('.main-menu').css('transform','translate(-100%)');
  }
}
