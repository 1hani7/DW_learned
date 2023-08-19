const types = ["하이브리드","수소","경유","휘발유","전기"]

async function getData(){
    var temp = await fetch("./연료별용도별자동차등록현황.json").then(r=>r.json());
    refine(temp);
};


function refine(temp){
    $.each(temp,function(key,item){
        var type = '';
        if( (type=include(c.DTCONT)) == '' || item.PURPOS_DIV === '사업용' ) return true;
        if( !(item.REG_YY in data[type]) )
            data[type][c.REGYY] = Number(item.RIDNG_ODR);
        if( !(type in data[type]) )
            data[type][c.REG_YY] = Number(item.RIDNG_ODR);

    });
};

function include(name){
    for(var i in types){
        if(name.indexOf(types[i]) > -1)
            return types[i]
    }
    return '';
}