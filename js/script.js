
// window.addEventListener('load',()=> document.querySelector('.preloader')
// .classList.add('hidePreloader'));

function overnav(link){
    var navLink = document.getElementsByClassName('nav-link');

    for(var i =0;i<navLink.length;i++){
       var navLinks =  navLink[i];
       navLinks.style.color = "gray";
       navLinks.style.transition = "1s"
    }
    navLink[link].classList.add('.dark');
}
function outnav(){
    var navLink = document.getElementsByClassName('nav-link');
    
    for(var i =0;i<navLink.length;i++){
        var navLinks =  navLink[i];
        navLinks.style.color = "black";
        navLinks.style.transition = "1s"
        
     }
}
// Wrap every letter in a span
var textWrapper = document.querySelector('.ml11 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml11 .line',
    scaleY: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700
  })
  .add({
    targets: '.ml11 .line',
    translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10],
    easing: "easeOutExpo",
    duration: 700,
    delay: 100
  }).add({
    targets: '.ml11 .letter',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=775',
    delay: (el, i) => 34 * (i+1)
  }).add({
    targets: '.ml11',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
  function outsocial(social){
    social.style.transition = "1s";
  }
  var iconTop = document.getElementsByClassName("icon-top");
  var doTitle = document.getElementsByClassName("do-title");
  var doInfo = document.getElementsByClassName('do-info');
  var arrowIcon = document.getElementsByClassName("fa-arrow-right");
  function doover(numberEle,cardEle){
    var cardEle = cardEle;
    var numberEle = numberEle;
    cardEle.style.background = "#FF014F";
    cardEle.style.transition = "0.5s";
    iconTop[numberEle].style.color = "white";
    iconTop[numberEle].style.marginTop = "-10px";
    iconTop[numberEle].style.transition ="0.5s"
    doTitle[numberEle].style.color ="white";
    doInfo[numberEle].classList.remove('text-muted');
    doInfo[numberEle].style.color = "white";
    arrowIcon[numberEle].classList.remove("d-none");
    arrowIcon[numberEle].style.transition = "0.5s"
  }
  function doout(cardEle,number){
    cardEle.style.background = "#E9EEF1";
    cardEle.style.transition = "0.5s";
    iconTop[number].style.color = "#FF014F";
    iconTop[number].style.marginTop = "+10px";
    iconTop[number].style.transition ="0.5s"
    doTitle[number].style.color ="black";
    doInfo[number].classList.add('text-muted');
    doInfo[number].style.color = "white";
    arrowIcon[number].style.color = "#E9EEF1"
    arrowIcon[number].style.transition = "0.5s"
  }
  function overtext(textEle){
    var textEle = textEle;
    var eleicon = textEle.childNodes[1];
    eleicon.style.opacity=("1");
    eleicon.style.transition = "0.4s";
  }
  function outtext(textEle){
    var textEle = textEle;
    var eleicon = textEle.childNodes[1];
    eleicon.style.transition = "0.4s";
    eleicon.style.opacity = "0";
  }
  function liked(likeElement){
   var likeclass = document.getElementsByClassName("like");
   number(likeclass[0].innerHTML+=1);
 
  }
  // $(document).ready(function(){  
  //   $(".resume-single-list").hover(function(){  
  //       $(".shadow").css("background-color", "#FF014F");
  //        $(".title").css("color", "white");
  //        $(".text-muted").css("color", "white");  
  //        $(".shadow").css("transition", "1s");  
  //       }, function(){  
  //        $(".title").css("color", "black");  
  //        $(".shadow").css("background-color", "white");

  //    });  
  //  });  