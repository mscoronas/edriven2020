var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October","November", "December"];
var day = [32, 29, 32, 31, 32, 31, 31, 32, 31, 32, 31, 32];
var title = document.getElementById("title");
window.onload = function(){    
    var months = prompt("Please enter month [1-12]",);
    var week = prompt("Please enter week [1-7]",);

    if(months >= 13 || week >= 8){
        title.innerHTML = "Invalid Date";
    }
    else{

        title.innerHTML = month[months-1];
        display(months, week);
    }
    
}

var table = document.getElementById("days");
function display(months, week){
    var row; var col = 0;
    
    for(i = 1; i < day[months-1]; i++){
        if(i == 1){           
             if(week == 1){
                row = table.insertRow(-1);
            }
            else if(week == 2){
                row = table.insertRow(-1);
                row.insertCell(col++);                
            }
            else if(week == 3){
                row = table.insertRow(-1);
                row.insertCell(col++); 
                row.insertCell(col++);
            }
            else if(week == 4){
                row = table.insertRow(-1);
                row.insertCell(col++); 
                row.insertCell(col++);
                row.insertCell(col++);
            }
            else if(week == 5){
                row = table.insertRow(-1);
                row.insertCell(col++); 
                row.insertCell(col++);
                row.insertCell(col++);
                row.insertCell(col++);
            }
            else if(week == 6){
                row = table.insertRow(-1);
                row.insertCell(col++); 
                row.insertCell(col++);
                row.insertCell(col++);
                row.insertCell(col++);
                row.insertCell(col++);
            }
            else if(week == 7){
                row = table.insertRow(-1);
                row.insertCell(col++); 
                row.insertCell(col++);
                row.insertCell(col++);
                row.insertCell(col++);
                row.insertCell(col++);
                row.insertCell(col++);
            }    
        }
        if(col == 7){
            row = table.insertRow(-1);
            col = 0;
        }    
        val = row.insertCell(col++);
        val.innerHTML = i;        
    }
}