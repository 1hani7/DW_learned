const board_img=["카리나1.jpg","카리나2.jpg","카리나3.jpg","강동원.jpg","김채원.jpg","데인드한.jpg","미연.jpg","미츠하.jpg",
"백지헌.jpg","산.jpg","설리.jpg","소연.jpg","소피.jpg","시타.jpg","아리에티.jpg","아이유.jpg","엠버.jpg","유체리.jpg",
"잘몰름.jpg","정우성.jpg","채영.jpg","키키.jpg","티모시.jpg","프로도.jpg","한소희.jpg","혜린1.jpg","혜린2.jpg","히나.jpg"];

const board=new Array(28);
var gamer=[];
var pLocation = [];
var gamerNames = [];

$(function(){
    board.fill(0);
    initBoard();
    
    $("#setBt").click(setOpen);
    $("#dice_bt").click(dice_turn);
    t=setInterval( ()=>{
        if( gamer.length > 0 ){
            // console.log(gamer);
            $("#dice_bt").attr('disabled',false);
            clearInterval(t);
            draw();
        };
    }, 50 );
});