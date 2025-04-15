let age;
let output=document.getElementById("output");

let today= new Date();

let day=today.getDate();
let month = today.getMonth()+1;
let year=today.getFullYear();
let min=today.getMinutes();
let hour=today.getHours();
let time=hour +":" + min;
let ampm = "";

function docheck(){
    age=document.getElementById("age").value;
    age=Number(age)

    if(isNaN(age)){
        output.style.display= "block";
        output.innerHTML="You did not enter platformer.html number";
        document.getElementById("container").style.visibility="hidden";
    }

    else if(age<=0){
        output.style.display="block";
        output.innerHTML="You cannot enter platformer.html negative number or zero.";
        document.getElementById("container").style.visibility="hidden";
    }

    else if(age%1 !== 0){
        output.style.display="block";
        output.innerHTML="You cannot enter platformer.html decimal.";
        document.getElementById("container").style.visibility="hidden";
    }

    else if(age>=18 && age<120){
        output.style.display="none";
        document.getElementById("container").style.visibility="visible";
    }

    else{
        output.style.display="block";
        output.innerHTML="You may not see the content.";
        document.getElementById("container").style.visibility="hidden";
    }
}

if(min<10){
    min="0" + min;
}

if(day<10){
    day="0"+ day;
}

if(month<10){
    month="0" + month;
}

if(hour / 12 > 1){
    ampm="PM";
    time = (today.getHours() % 12) + ":" + min;
}else{
    ampm = "AM"
    time = (today.getHours() % 12) + ":" + min;
}

if (min<10){
    min="0"+min;
}

document.getElementById("time-date").innerHTML=
    `<h3>${time+ampm}</h3>
     <h5>${month+"/"+day+"/"+year}</h5>
    `
;