const types = ["하이브리드","수소","경유","휘발유","전기"]

async function getData(){
    var temp = await fetch("./연료별용도별자동차등록현황.json").then(r=>r.json());
    refine(temp);
};


function refine(temp){
    $.each(temp,function(i,item){
        var type = '';
        if( (type=include(c.DTCONT)) == '' || item.PURPOS_DIV === '사업용' ) return true;
        
    });
};