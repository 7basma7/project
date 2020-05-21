  function displayRadioValue() { 
            var ele = document.getElementsByName('type1'); 
              
            for(i = 0; i < ele.length; i++) { 
                if(ele[i].checked) 
                document.getElementById("result").innerHTML
                        = "house: "+ele[i].value; 
            } 
        } 

function displayRadioValue1() { 
            var ele = document.getElementsByName('type2'); 
              
            for(i = 0; i < ele.length; i++) { 
                if(ele[i].checked) 
                document.getElementById("result1").innerHTML
                        = "the spell is: "+ele[i].value; 
            } 
        } 


function displayRadioValue2() { 
            var ele = document.getElementsByName('type3'); 
              
            for(i = 0; i < ele.length; i++) { 
                if(ele[i].checked) 
                document.getElementById("result2").innerHTML
                        = "your class: "+ele[i].value; 
            } 
        } 


function displayRadioValue3() { 
            var ele = document.getElementsByName('type4'); 
              
            for(i = 0; i < ele.length; i++) { 
                if(ele[i].checked) 
                document.getElementById("result3").innerHTML
                        = "your choice : "+ele[i].value; 
            } 
        } 


function wizard () {
  document.getElementById('wiz').innerHTML
  =' Hogwarts will contact you via letter if you were suitable'
$("#result1").remove();
$("#result2").remove();
$("#result3").remove();
$("#result4").remove();
}
