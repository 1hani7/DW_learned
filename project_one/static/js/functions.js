window.onload=function(){
    var lastScrollTop = 0;
    
    // 우클릭 방지
    document.oncontextmenu=function(){return false;}


    // 스크롤 효과들
    window.addEventListener("scroll", function(){
      

      var scrollTop = window.scrollY || document.documentElement.scrollTop;

      // 스크롤 방향 확인
      if (scrollTop > lastScrollTop) {
        // 스크롤을 내릴 때
        document.getElementById("navigator").style.opacity="0";
        document.getElementById("navigator").style.transition="1s";
      } else {
        // 스크롤을 올릴 때
        document.getElementById("navigator").style.opacity="1";
        document.getElementById("navigator").style.transition="1s";
      }

      lastScrollTop = scrollTop;

      // 스크롤값 확인용
      console.log("스크롤 Y값:", scrollY);
      

      // 스크롤값 따라서 나타내기 or 날아오기 효과
      appear( "slogun", 900 );
      if(window.scrollY >= 3000){
        var title = document.getElementsByClassName("title_box")[0];
        title.style.transform="translateX(0)";
        title.style.opacity="1";
        title.style.transition="2s"
      }
      expose( "introduce", 3400 );
      expose( "about_us", 4700 );
      if(window.scrollY >= 4500){
        var title = document.getElementsByClassName("title_box")[1];
        title.style.transform="translateX(0)";
        title.style.opacity="1";
        title.style.transition="2s"
      }
      expose( "sercive", 7600 );
      if(window.scrollY >= 7600){
        var cus_link = document.getElementById("cus_link");
        cus_link.style.transform="translateX(0)";
        cus_link.style.opacity="1";
        cus_link.style.transition="2s"
      }
      expose( "vision", 8800 );
      if(window.scrollY >= 10000){
        var title = document.getElementsByClassName("title_box")[2];
        title.style.transform="translateX(0)";
        title.style.opacity="1";
        title.style.transition="2s"
      }
      if(window.scrollY >= 14875){
        var title = document.getElementsByClassName("title_box")[3];
        title.style.transform="translateX(0)";
        title.style.opacity="1";
        title.style.transition="2s"
      }
      appear( "map_box", 20600 );
      if(window.scrollY >= 20000){
        var title = document.getElementsByClassName("title_box")[4];
        title.style.transform="translateX(0)";
        title.style.opacity="1";
        title.style.transition="2s"
      }
      appear( "selector_box", 21000 );
      if(window.scrollY >= 22000){
        var title = document.getElementsByClassName("title_box")[5];
        title.style.transform="translateX(0)";
        title.style.opacity="1";
        title.style.transition="2s"
      }
      expose( "custom_order", 22000 );
    });


    

    var overlay_part = document.getElementsByClassName("overlay_part");
    var product_part = document.getElementsByClassName("product_part");

    // 오버레이
    // 띄우기
    product_part[0].addEventListener("mouseover", function(){
        overlay_part[0].style.transform="translateX(0)";
        overlay_part[0].style.opacity="1";
        overlay_part[0].style.transition="2s";
    });

    product_part[1].addEventListener("mouseover", function(){
        overlay_part[1].style.transform="translateX(0)";
        overlay_part[1].style.opacity="1";
        overlay_part[1].style.transition="2s";
    });

    product_part[2].addEventListener("mouseover", function(){
        overlay_part[2].style.transform="translateX(0)";
        overlay_part[2].style.opacity="1";
        overlay_part[2].style.transition="2s";
    });

    product_part[3].addEventListener("mouseover", function(){
        overlay_part[3].style.transform="translateX(0)";
        overlay_part[3].style.opacity="1";
        overlay_part[3].style.transition="2s";
    });

    product_part[4].addEventListener("mouseover", function(){
        overlay_part[4].style.transform="translateX(0)";
        overlay_part[4].style.opacity="1";
        overlay_part[4].style.transition="2s";
    });



    // 끄기
    document.getElementById("first_product").addEventListener("mouseleave", function(){
        overlay_part[0].style.transform="translateX(100%)";
        overlay_part[0].style.opacity="0";
        overlay_part[0].style.transition="1s";
    });

    document.getElementById("second_product").addEventListener("mouseleave", function(){
        overlay_part[1].style.transform="translateX(100%)";
        overlay_part[1].style.opacity="0";
        overlay_part[1].style.transition="1s";
    });

    document.getElementById("third_product").addEventListener("mouseleave", function(){
        overlay_part[2].style.transform="translateX(100%)";
        overlay_part[2].style.opacity="0";
        overlay_part[2].style.transition="1s";
    });

    document.getElementById("fourth_product").addEventListener("mouseleave", function(){
        overlay_part[3].style.transform="translateX(100%)";
        overlay_part[3].style.opacity="0";
        overlay_part[3].style.transition="1s";
    });

    document.getElementById("fifth_product").addEventListener("mouseleave", function(){
        overlay_part[4].style.transform="translateX(100%)";
        overlay_part[4].style.opacity="0";
        overlay_part[4].style.transition="1s";
    });




    // 배너 슬라이드 쇼
    $('.slider').each(function() {
        var $this = $(this);
        var $group = $this.find('.slide_group');
        var $slides = $this.find('.slide');
        var bulletArray = [];
        var currentIndex = 0;
        var timeout;
        
        function move(newIndex) {
          var animateLeft, slideLeft;
          
          advance();
          
          if ($group.is(':animated') || currentIndex === newIndex) {
            return;
          }
          
          bulletArray[currentIndex].removeClass('active');
          bulletArray[newIndex].addClass('active');
          
          if (newIndex > currentIndex) {
            slideLeft = '100%';
            animateLeft = '-100%';
          } else {
            slideLeft = '-100%';
            animateLeft = '100%';
          }
          
          $slides.eq(newIndex).css({
            display: 'block',
            left: slideLeft
          });
          $group.animate({
            left: animateLeft
          }, function() {
            $slides.eq(currentIndex).css({
              display: 'none'
            });
            $slides.eq(newIndex).css({
              left: 0
            });
            $group.css({
              left: 0
            });
            currentIndex = newIndex;
          });
        }
        
        function advance() {
          clearTimeout(timeout);
          timeout = setTimeout(function() {
            if (currentIndex < ($slides.length - 1)) {
              move(currentIndex + 1);
            } else {
              move(0);
            }
          }, 4000);
        }
        
        $('.next_btn').on('click', function() {
          if (currentIndex < ($slides.length - 1)) {
            move(currentIndex + 1);
          } else {
            move(0);
          }
        });
        
        $('.previous_btn').on('click', function() {
          if (currentIndex !== 0) {
            move(currentIndex - 1);
          } else {
            move(3);
          }
        });
        
        $.each($slides, function(index) {
          var $button = $('<a class="slide_btn">&bull;</a>');
          
          if (index === currentIndex) {
            $button.addClass('active');
          }
          $button.on('click', function() {
            move(index);
          }).appendTo('.slide_buttons');
          bulletArray.push($button);
        });
        
        advance();
      });




      //지도 슬라이드
      var prev = document.getElementsByClassName("slider")[1];
      var next = document.getElementsByClassName("slider")[2];
      next.addEventListener("click", slide_next);
      prev.addEventListener("click", slide_prev);


      // 구글 지도
      initMap(37.522925, 127.022780);


      // 지도 좌표 버튼
      var lo_btn = document.getElementsByClassName("location");
      for(var i=0; i<lo_btn.length; i++){
        lo_btn[i].addEventListener("click", location_in)
      }


}// window.onload부분 끝


// 서서히 나타내기 함수
function expose( name, Y ){
  var which = document.getElementById(name);

    if(window.scrollY >= Y){
      which.style.opacity="1";
      which.style.transition="3s";
    }
}


// 서서히 올라가면서 나타내기 함수
function appear( name, Y ){
  var which = document.getElementById(name);

    if(window.scrollY >= Y){
      which.style.opacity="1";
      which.style.transition="3s";
      which.style.transform="translateY(0)";
    }
}



// 지도 좌표 버튼
function location_in(){
  if(this.textContent==="본사"){
    initMap(37.522925, 127.022780);
  }
  if(this.textContent==="인천"){
    initMap(37.436857, 126.455695);
  }
  if(this.textContent==="대전"){
    initMap(36.351882, 127.377919);
  }
  if(this.textContent==="대구"){
    initMap(35.877612, 128.628955);
  }
  if(this.textContent==="부산"){
    initMap(35.098072, 129.036337);
  }
  if(this.textContent==="청주"){
    initMap(36.644740, 127.426667);
  }
  if(this.textContent==="홍대"){
    initMap(37.550027, 126.919515);
  }
}



// 지도 버튼 슬라이드 앞뒤
let a = 0;

function slide_next(){
  if(a==(-600))return;
  a-=300;
  document.getElementById("bt").style.left=a+"px";
  document.getElementById("bt").style.transition="1s";
}
function slide_prev(){
  if(a==0)return;
  a+=300;
  document.getElementById("bt").style.left=a+"px";
  document.getElementById("bt").style.transition="1s";
}




// 지도 그리기 (구글맵api 복사해옴)
let map;

async function initMap( lt, lg) {
  const { Map } = await google.maps.importLibrary("maps");

   // Specify the coordinates for the marker
   var markerPosition = { lat: lt, lng: lg }; // Example: New York City

   // Create a new map centered at the marker's position
   var map = new google.maps.Map(document.getElementById("map"), {
     zoom: 18,
     center: markerPosition,
   });

   // Create a new marker
   var marker = new google.maps.Marker({
     position: markerPosition,
     map: map,
     title: "Marker Title", // Add a title to the marker (optional)
   });
}
