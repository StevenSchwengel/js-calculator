
  var valArr = [];
  var valArr2 = [];

  var curn = 0;
  var amount = 0

    var fcurn;
    var famount;
    var total = 0;

  var initNum = 1;
  var initOpr = 1;
  var opr ="";
  var operators = ["+", "-", "="];
//  var n = operators.includes(buttonValue);


    const buttons = document.querySelectorAll('button');

    for(let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', alertValue);
    }

    function alertValue(event) {
      const buttonValue = event.target.value;
        var firstUp = buttonValue;
        valArr.push(buttonValue);
        isOperatora(buttonValue);
        isNo(buttonValue);
      }

    function isNo(buttonValue) {

        var n = operators.includes(buttonValue);
        if (n == false){
          valArr2.push(buttonValue);
          curn = valArr2.join("");
          console.log(curn);
      }
    }

    function isOperatora(buttonValue)
         {
          var n = operators.includes(buttonValue);
           if (n == true){
             console.log('is operator');
             console.log(buttonValue);

             valArr2 = [ ];

             if (initNum == 1 ) {
               console.log('do Math push');
               amount = curn;
             }
             initNum = initNum + 1;

             if (initOpr == 1 ) {
               console.log('caputure first operator');
               opr = buttonValue;
               console.log(opr);
             }
             initOpr = initOpr + 1;

            }

            famount = parseFloat(amount);
            fcurn = parseFloat(curn);

             if (opr == "+") {
               console.log('ran math add');
               total = total + fcurn;
               console.log(fcurn);
               console.log(total);
               }

            if (buttonValue == "="){
              console.log(fcurn);
              console.log(total);
            }
        }
