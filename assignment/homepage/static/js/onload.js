let slideLocation = 0;
let data = [];


$(async function(){
    await getData();
    slideToggles();
    bannerSlide();
    showCaseSet("#productsShowcase");
});