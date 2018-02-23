//Variables pulling required info from html file

var requiredTotalFuel = document.getElementById('requiredTotalFuel');

var tank1 = document.getElementById('tank1');
var tank2 = document.getElementById('tank2');
var tank3 = document.getElementById('tank3');
var tank4 = document.getElementById('tank4');

var form = document.getElementById('form');

//When a submit event occurs the following function will take place
form.addEventListener('submit', function(event) {
  if(requiredTotalFuel.value > 249000) {
    alert('Maximum fuel quantity is 249,000 lbs');
    } else {
        var reqFuel = parseInt(requiredTotalFuel.value);
        
        //Divide fuel evenly among tanks
        var reqFuelDividedBy4 = reqFuel / 4;
        var tank1Total = reqFuelDividedBy4;
        var tank2Total = reqFuelDividedBy4;
        var tank3Total = reqFuelDividedBy4;
        var tank4Total = reqFuelDividedBy4;
        
        //Tank 1 & 4 at max capacity
        if(tank1Total > 38200 || tank4Total > 38200) {        
            var difference1 = tank1Total - 38200;
            var difference2 = tank4Total - 38200;
            
            //Put overfill fuel in the inner tanks
            var tank1Total = reqFuelDividedBy4 - difference1;
            var tank2Total = reqFuelDividedBy4 + difference1;
            var tank3Total = reqFuelDividedBy4 + difference2;
            var tank4Total = reqFuelDividedBy4 - difference2;
            
            //Assign fuel tank quantities
            tank1.innerText = tank1Total;
            tank2.innerText = tank2Total;
            tank3.innerText = tank3Total;
            tank4.innerText = tank4Total;
        } else {
            
            //Not at tank 1 & 4 max capacity
            tank1.innerText = tank1Total;
            tank2.innerText = tank2Total;
            tank3.innerText = tank3Total;
            tank4.innerText = tank4Total;
        }
        
        //Prevents the form element from refreshing by default in HTML5
        event.preventDefault();
    }
})