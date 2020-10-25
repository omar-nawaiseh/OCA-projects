

$(document).ready(function() {
    var firstOperand = null; 
    var operator = null; 
    var secondOperand = null; 
    var isPending = false; 
  
    function calculate() {
      
      firstOperand = Number(firstOperand);
      secondOperand = Number(secondOperand);
  
     
      if (operator === '+') {
        return firstOperand + secondOperand;
      } else if (operator === '-') {
        return firstOperand - secondOperand;
      } else if (operator === '×') {
        return firstOperand * secondOperand;
      } else if (operator === '÷') {
        return firstOperand / secondOperand;
      }
    }
  
    
    function resetCalculator() {
      firstOperand = null;
      secondOperand = null;
      operator = null;
      isPending = false;
    }
  
    $('#calculate').click(function() {
      
      if (operator !== null && firstOperand !== null && secondOperand !== null) {
        var result = calculate(); 
        $('input').val(result); 
        resetCalculator(); 
        
        firstOperand = result;
      }
    });
  
    $('#reset').click(function() {
      resetCalculator();
      $('input').val(''); 
    });
  
    factorial = () => {
        var x = document.getElementById("factorialID").value;
        var y = document.getElementById("factorialID").value;
        if (x != "") {
          if (x == 0) {
            result.innerHTML = 1;
          } else if (x > 0) {
            var n = 1;
            for (i = x; i >= 1; i--) {
              n = n * i;
            }
            result.innerHTML = n;
          }
          else{
            result.innerHTML="Please Enter a Positive Number!";
          }
      
        } else {
          if (y == 0) {
            result.innerHTML = 1;
          } else if (y > 0) {
            var n = 1;
            for (i = y; i >= 1; i--) {
              n = n * i;
            }
            result.innerHTML = n;
          }
          else {
            result.innerHTML="Please Enter a Positive Number!";
      
          }
        }
      };
    
    $('#numbers > button:not(#calculate)').click(function() {
      var value = $(this).text();
      if (operator === null) {

        if (isPending === true && firstOperand !== null) {

            firstOperand = firstOperand + value;
        } else {

            firstOperand = value;

            isPending = true;
        }

        $('input').val(firstOperand);
      } else {

        if (secondOperand === null) {

            secondOperand = value;
        } else {

            secondOperand = secondOperand + value;
        }

        $('input').val(secondOperand);
      }
    });
  
    $('#operators > button').click(function() {
      operator = $(this).text(); 
      isPending = true;
    });
  });
