


  var valArr = [];
  var valArr2 = [];
  var valNum = [];
  var numa = 0;
  var numb = 0;
  var curn = 0;
  var previousNum = 0;
  var amount = 0
  var lastmount = 0

  var initNum = 1;
  var initOpr = 1;

  var opr ="";
  var initOpr ="";
  var oprb ="";
  var bob;

  var fcurn;
  var famount;
  var nCheck = 1;

  var total = 0;
  var totala = 1;

  var operators = ["+", "-", "=", "*", "/", "c"];
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
        updateDisplay(buttonValue);
      }

    function updateDisplay(buttonValue)
     {
      var yyy = curn;
      document.getElementById("p1").innerHTML = (yyy);
// //      document.getElementById("calculator-screen").innerHTML = (yyy);
//
     }


    function isNo(buttonValue) {

        var n = operators.includes(buttonValue);
        if (n == false){
          valArr2.push(buttonValue);
          curn = valArr2.join("");
          console.log(buttonValue);
      }
    }

    function isOperatora(buttonValue)
         {
          var n = operators.includes(buttonValue);
           if (n == true){
    //         console.log('is operator');
  //            console.log(buttonValue);
    //         console.log(curn);
    //         console.log(valArr2);
             valArr2 = [ ];


             if (initNum == 1 ) {
               console.log('do Math push');
               console.log(curn);
               amount = curn;
             }
             initNum = initNum + 1;

             if (initOpr == 1 ) {
//               console.log('caputure first operator');
               initopr = buttonValue
             }
             initOpr = initOpr + 1;

            }

            famount = parseFloat(amount);
            fcurn = parseFloat(curn);

             if (buttonValue == "+") {
                total = (total + fcurn);
                console.log('current total +');
                console.log(total);
                }

           if (opr == "-") {
               total = (fcurn - total);
               console.log('current total minus');
               console.log(total);
                  }

           if (opr == "*") {

               if (nCheck > 1) {
                 console.log('pass2 famount, total, lastamount move then second')
                 console.log(famount);
                  total = (lastamount * fcurn);
                  lastamount = total;
                  console.log('total:')
                  console.log(total);
                  console.log('previous num');
                  console.log(lastamount);
                  console.log('current number');
                  console.log(fcurn);


                  }

                if (nCheck == 1) {
                    console.log('initial value multiplication');
                    lastamount = fcurn;
                    total = fcurn;
                    nCheck = nCheck + 1;
                  }
              }









          //     console.log('current total for multiplaction');
          //     console.log(total);


           if (buttonValue == "/") {
              //  fcurn = (fcurn * total);
              console.log('current total division');
               //console.log(fcurn);
               //console.log(total);
              console.log(fcurn);
              console.log(famount);
  //            famount = (fcurn / famount);
              famount = (famount/ fcurn);
              console.log('current total');
              console.log(famount);
               }



  // original

               if (buttonValue == "=") {


                if (opr == "+") {
                   total = total + fcurn;
                   console.log('grand total addition');
                   console.log(total);
                   }

                if (opr == "-") {
                    fcurn = total -fcurn;
                    console.log('grand total minus');
                    total = fcurn;
                    console.log(total);
                    }

               if (opr == "*") {
                    total = (famount * fcurn);
                    console.log('grand total multiplication');
                    console.log(total);
                  //  console.log(fcurn);

                        }

                if (opr == "/") {
                     //  fcurn = (fcurn * total);
                     console.log('current total division');
                     //console.log(fcurn);
                     //console.log(total);
                     console.log(fcurn);
                     console.log(famount);
//                     famount = (fcurn / famount);
                       famount = (famount/ fcurn);
                     console.log('current total');
                     console.log(famount);
                      }





                 CleanSlate ();
             }



             // if (buttonValue == "c")
              function CleanSlate () {
                 {
                console.log(total);
                 fcurn = 0;
                 famount = 0;
                 total = 0;
                 var valArr = [];
                 var valArr2 = [];
                 var valNum = [];
                 var initNum = 1;
                 var initOpr = 1;
                 console.log('cleaned nums');
                 }

            }
       }


//             console.log(' = operator pushed');
//             console.log(amount);
             //
             // famount = parseFloat(amount);
             // fcurn = parseFloat(curn);
             //
             //
             //
             //  if (opr == "+") {
             //    famount = famount + fcurn;
             //    console.log(fcurn);
             //    console.log(famount);
             //    }
             //



  //
  //   function isOperator(buttonValue)
  //     {
  //      var operators = ["+", "-", "="];
  //      var n = operators.includes(buttonValue);
  //
  //        if (n == false){
  //           }
  //         else if
  //          (n == true){
  //
  //                console.log('do math');
  //                console.log(valArr);
  //
  //             if (numa == 0) {
  //               console.log('check for first number');
  //                const opr = valArr[valArr.length - 1];
  //                      valArr.pop();
  //                            console.log(opr);
  //
  //               numa = valArr.join("");
  //               console.log(numa);
  //               console.log(buttonValue);
  //
  //               if (buttonValue == '-')
  //               {
  //                  console.log('run a minus operation');
  //               }
  //
  //               if (buttonValue == '+'){
  //                   console.log('run a plus operation');
  //               }
  //
  //              }
  //
  //
  //             if (numa !== 0) {
  // //              console.log('zzz for first number');
  //                console.log(numa);
  // //              console.log('AAAA check for second number');
  //                mumb = valArr.join("");
  //
  //             }
  //
  //            if (buttonValue == "=") {
  //               console.log('AA return result!');
  //               console.log(numa);
  //               console.log(opr);
  //           //    console.log(numb);
  //
  //             }
  //
  //                console.log('possible zero out after');
  //
  //
  //
  //                const oprb = valArr[valArr.length - 1];
  //                      valArr.pop();
  //
  //                console.log(oprb);
  //                  console.log(numb);
  //                  console.log('bob');
  //
  //
  //
  //
  //
  //                valArr = [];
  //
  //         }
  //     }
  //
  //
  //     const calculation = [];


// test area = Maddy help
      //
      // // returns a NodeList
      // const numberButtons = document.querySelectorAll('.number');
      // for(let i = 0; i < numberButtons.length; i++) {
      //   numberButtons[i].addEventListener('click', function(event) {
      //     // console.log(event.target.value);
      //     calculation.push(event.target.value);
      //   });
      // }
      //
      //
      // // returns a NodeList
      // const operatorButtons = document.querySelectorAll('.operator');
      // for(let i = 0; i < operatorButtons.length; i++) {
      //   operatorButtons[i].addEventListener('click', function(event) {
      //     // console.log(event.target.value);
      //     calculation.push(event.target.value);
      //   });
      // }
