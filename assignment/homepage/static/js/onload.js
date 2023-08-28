let slideLocation = 0;
let data = [];
let picks = [];


$(async function(){
    slideToggles(); // 작은 화면 좌측 메뉴 슬라이드 토글
    bannerSlide(); // 슬라이드 배너 관련
    await getData(); // DISPLAY 관련 Json fetch
    showCaseSet("#productsShowcase"); // DISPLAY 세팅
    await getData2(); // 추천상품 관련 Json fetch
    recshowCaseSet("#recShowcase"); // 추천상품 목록 세팅

    $("#quickMenuOpen").click(function(){
        $("#quickMenuItems").slideToggle(500);
        $(".bi-caret-down-fill").toggleClass("bi-caret-up-fill")
    });
});