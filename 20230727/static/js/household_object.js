const category=["편의점","카페","음식점",
"문화생활","여행","교통","마트","관리비","세금","온라인쇼핑",
"오프라인쇼핑","경조사","기부","교육","의료","유흥","미용",
"통신비","급여","로또"];

const card = [{ name:"비장의카드", bank:"bijang" },
{ name:"함정카드", bank:"trap" },
{ name:"신한카드", bank:"shinhan" },
{ name:"우리카드", bank:"woori" },
{ name:"농협카드", bank:"nh" },
{ name:"포커카드", bank:"poker" }];

const bank = [ { name:"비장은행", bank:"bijang", money:700 },
{ name:"함정은행", bank:"trap", money:39800 },
{ name:"신한은행", bank:"shinhan", money:1360000 },
{ name:"우리은행", bank:"woori", money:950000 },
{ name:"농협은행", bank:"nh", money:750000 },
{ name:"포커은행", bank:"poker", money:6000 }];


function house(date, money, category, way, detail, getcome, balance){
    this.date=date; //날짜
    this.money=money; //금액
    this.category=category; //분류
    this.detail=detail; //내역
    this.way=way; //방식 - 현금, 계좌(어디은행?), 카드(어디카드?)
    this.getcome=getcome; //수입이냐 지출이냐
    this.balance=balance; //잔액
}
house.prototype.won=function(){ // 콤마 찍기 + 원 표시
    return "₩ "+this.money.toLocaleString()+"원";
}
house.prototype.getWay=function(){ // 
    return this.way.split("-").length >1 ? this.way.split("-")[1] : this.way
}