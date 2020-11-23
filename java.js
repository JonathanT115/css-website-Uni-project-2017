
         function runTotal() {
            var total = 0;
            var small = 5.0;
            var medium = 7.50;
            var large = 10.0;
            var addTop = 0.25;
            if(document.forms[0].pizza[0].checked == true) {
                total += small;
            }
            else if(document.forms[0].pizza[1].checked == true){
                total += medium;
            }
            else if(document.forms[0].pizza[2].checked == true){
                total += large;
            }
            for(var i = 0; i < 4; i++){
                if(document.forms[0].toppings[i].checked == true){
                    total += addTop;
		    }
        }
        document.f1.Total.value = total;
     } 
	 
	 
	     function checkForm(form)
         {
           ...
           if(!form.pizza.checked) {
           alert("Please select pizza base");
           form.pizza.focus();
           return false;
         }
         return true;
        }

function GetClock(){
var d=new Date();
var nmonth=d.getMonth(),ndate=d.getDate(),nyear=d.getYear();
if(nyear<1000) nyear+=1900;
var nhour=d.getHours(),nmin=d.getMinutes(),nsec=d.getSeconds(),ap;

if(nhour==0){ap=" AM";nhour=12;}
else if(nhour<12){ap=" AM";}
else if(nhour==12){ap=" PM";}
else if(nhour>12){ap=" PM";nhour-=12;}

if(nmin<=9) nmin="0"+nmin;
if(nsec<=9) nsec="0"+nsec;

document.getElementById('clockbox').innerHTML=""+ndate+"/"+(nmonth+1)+"/"+nyear+" "+nhour+":"+nmin+":"+nsec+ap+"";
}

window.onload=function(){
GetClock();
setInterval(GetClock,1000);
}