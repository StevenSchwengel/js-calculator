

// //
//
// // document.getElementById('submit').onclick = function() {
// // document.getElementById('submit').onclick = function() {
// //  document.getElementById('story').innerHTML = 'It was a dark and stormy night...';
//  document.getElementById('story').innerHTML = curn;
//   //document.getElementById('calculator-screen').innerHTML = curn;
//
//
//
// //



  var valArr = [];
  var valArr2 = [];
  var valNum = [];

  var curn = 0;
  var amount = 0

  var initNum = 1;
  var initOpr = 1;
  var total = 0;

  var opr ="";
  var oprb ="";


  var fcurn;
  var famount;


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
        //    console.log('is operator');
          //   console.log(buttonValue);

             valArr2 = [ ];

             if (initNum == 1 ) {
      //       console.log('do Math push');
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
           //     console.log('ran math add');
                 total = total + fcurn;
            //   console.log(fcurn);
            //   console.log(total);
              //    console.log('ran math add');
               }


            if (buttonValue == "="){
              console.log(fcurn);
              console.log(total);
            }
        }
        //
        // // returns a NodeList
        //  const numberButtons = document.querySelectorAll('.number');
        //  for(let i = 0; i < numberButtons.length; i++) {
        //    numberButtons[i].addEventListener('click', function(event) {
        //      // console.log(event.target.value);
        //      calculation.push(event.target.value);
        //    });
        //  }
        //
        //
        //  // returns a NodeList
        //  const operatorButtons = document.querySelectorAll('.operator');
        //  for(let i = 0; i < operatorButtons.length; i++) {
        //    operatorButtons[i].addEventListener('click', function(event) {
        //      // console.log(event.target.value);
        //      calculation.push(event.target.value);
        //    });
        //  }
