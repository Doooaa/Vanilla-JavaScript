

   
    function EnterNumber(val)
    {
        var Answer=document.getElementById('Answer');
    
        Answer.value += val;  //show
    }
    function EnterOperator(op)
    {
        var Answer=document.getElementById('Answer');
    
        Answer.value += op;//show
        
    }
    // function EnterEqual()
    // {

    //     var Answer=document.getElementById('Answer');
    //     result = eval(Answer.value);
    //     Answer.value = result; 
    // }

    function EnterEqual() {
        var Answer = document.getElementById('Answer');
        var expression = Answer.value.trim();
        
    
        var tokens = expression.split(/([+\-*/])/); 
    
       
        var cleanedTokens = [];
        for (var i = 0; i < tokens.length; i++) {
            if (tokens[i].trim() !== '') {
                cleanedTokens.push(tokens[i].trim());
            }
        }
    
        
        if (cleanedTokens.length % 2 === 0) {
            Answer.value = "Error: Invalid expression";
            return;
        }
    
        
        var result = parseFloat(cleanedTokens[0]);
        for (var i = 1; i < cleanedTokens.length; i += 2) {
            var operator = cleanedTokens[i];
            var operand = parseFloat(cleanedTokens[i + 1]);
    
            
            if (isNaN(operand)) {
                Answer.value = "Error: Invalid operand";
                return;
            }
    
            
            if (operator === '+') {
                result += operand;
            } else if (operator === '-') {
                result -= operand;
            } else if (operator === '*') {
                result *= operand;
            } else if (operator === '/') {
                if (operand === 0) {
                    Answer.value = "Error: Division by zero";
                    return;
                }
                result /= operand;
            } else {
                Answer.value = "Error: Invalid operator";
                return;
            }
        }
    
        Answer.value = result;
    }
    

    function EnterClear(){
        var Answer=document.getElementById('Answer');
        Answer.value=""; 
    }