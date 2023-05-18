
let date=document.getElementById("date")
let month=document.getElementById("month")
let year=document.getElementById("year")
let hour=document.getElementById("hour")
let minute=document.getElementById("minute")
let second=document.getElementById("second")
let day=document.getElementById("day")

function RST(val){
  if(val!=1){
    document.getElementsByTagName("input")[1].outerHTML=`<input type="radio" name="ch" id="sun">`
  }
  if(val!=2){
    document.getElementsByTagName("input")[2].outerHTML=`<input type="radio" name="ch" id="mon">`
  }
  if(val!=3){
    document.getElementsByTagName("input")[3].outerHTML=`<input type="radio" name="ch" id="tue">`
  }
  if(val!=4){
    document.getElementsByTagName("input")[4].outerHTML=`<input type="radio" name="ch" id="wed">`
  }
  if(val!=5){
    document.getElementsByTagName("input")[5].outerHTML=`<input type="radio" name="ch" id="thu">`
  }
  if(val!=6){
    document.getElementsByTagName("input")[6].outerHTML=`<input type="radio" name="ch" id="fri">`
  }
  if(val!=0){
    document.getElementsByTagName("input")[7].outerHTML=`<input type="radio" name="ch" id="sat">`
  }
  
}




let a=setInterval(()=>{
  let a=new Date()
  let D=a.getDate()
  let Mo=a.getMonth()
  let Y=a.getFullYear()
  let H=a.getHours()
  let Mn=a.getMinutes()
  let S=a.getSeconds()
  let day=a.getDay()
  date.innerHTML=D;
  month.innerHTML=Mo;
  year.innerHTML=Y;
  hour.innerHTML=H;
  month.innerHTML=Mo;
  year.innerHTML=Y;
  hour.innerHTML=H;
  minute.innerHTML=Mn;
  second.innerHTML=S;
  
  
  
  if(day==1){
    document.getElementsByTagName("input")[1].outerHTML=`<input type="radio" id="sun" name="ch" checked>`
    RST(day)
  }
  else if(day==2){
    document.getElementsByTagName("input")[2].outerHTML=`<input type="radio" id="mon" name="ch" checked>`
    RST(day)
  }
  else if(day==3){
    document.getElementsByTagName("input")[3].outerHTML=`<input type="radio" id="tue" name="ch" checked>`
    RST(day)
  }
  else if(day==4){
    document.getElementsByTagName("input")[4].outerHTML=`<input type="radio" id="wed" name="ch" checked>`
    RST(day)
  }
  else if(day==5){
    document.getElementsByTagName("input")[5].outerHTML=`<input type="radio" id="thu" name="ch" checked>`
    RST(day)
  }
  else if(day==6){
    document.getElementsByTagName("input")[6].outerHTML=`<input type="radio" id="fri" name="ch" checked>`
    RST(day)
  }
  else if(day==0){
    document.getElementsByTagName("input")[0].outerHTML=`<input type="radio" id="sat" name="ch" checked>`
    RST(day)
  }


  if(hour>=1 && hour<=12){
    document.getElementsByTagName("input")[7].outerHTML=`<input type="radio" id="sat" name="am" checked>`
  }
  else{
    document.getElementsByTagName("input")[8].outerHTML=`<input type="radio" id="sat" name="am" checked>`
    
  }


},100)


