let data = {};
let names = {};
let ag = new Object;
let avg = 0;

let test = {
    "나": {
      "너": 42,
      "친구": 36
    },
    "너": {
      "나": 55,
      "친구": 23
    }
  };

function ages(name, age){
    this.name = name;
    this.age = age;
}

const getData=async()=>{
    return await fetch("./control.json").then(r=>r.json());
}

$(async function(){

    data = await getData();
    console.log(data["강동호"]["age"]);

    
    names = Object.keys(data);

    $.each(data,function(i,item){
        ag[item.name]={age:Number(item.age)}
        avg += Number(item.age);
    });
    avg = avg/names.length;


    $("#show").click(function(){

        $.each(names, function(i, item){
            $("#res").append(
                "<div>"+data[names[i]].age+"</div>"
            );
        })

    });
})