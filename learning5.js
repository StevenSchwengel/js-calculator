

  var valArr = [];
  var valArr2 = [];
  var valNum = [];

  var previousNum = 0;
  var amount = 0
  var lastmount = 0

  var initNum = 1;
  var initOpr = 1;

  var iopr;
  var opr ="";
  var initOpr ="";
  var oprb ="";

  var curn;
  var fcurn;
  var famount = 0;
  var nCheck = 1;

  var operator = "";
  var total;
  var aamount = 0

  var operators = ["+", "-", "=", "*", "/", "c", "plus-minus", "percent"];
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
     }

    function isNo(buttonValue) {

        var n = operators.includes(buttonValue);
        if (n == false){
          valArr2.push(buttonValue);
          curn = valArr2.join("");
          console.log(buttonValue);
         }
        else {
           initNum = initNum + 1;
          }
        }

    function isOperatora(buttonValue)
         {
          var n = operators.includes(buttonValue);
           if (n == true){
             valArr2 = [ ];
             console.log(curn);

             if (initNum === 1 ) {
               console.log('do Math push');
               famount = curn;
                console.log(famount);
             }

             if (initNum === 2){
               console.log('doing second Math push');
               console.log(curn);
               initNum = initNum + 1;
             }

          }


 iopr = buttonValue;

             if (initOpr === 1 ) {
    //           console.log('caputure first operator');
               iopr = buttonValue;
               initOpr = initOpr + 1;
              }

              famount = parseFloat(famount);
              fcurn = parseFloat(curn);

              console.log("initnum test");
              console.log(initNum);

              if (initNum == 1) {
                famount = fcurn;
                fcurn = 0;
              }

              if (initNum >= 2) {

      //          console.log('check initNums');
        //        console.log(initNum);

                 if (iopr === '-')
                   {operator = "-";
                    subtractA (famount, fcurn);
                  }

                 if (iopr === '+')
                    {operator === "+";
                     additionA (famount, fcurn);
          //           console.log('runs adds');
                    }

                    if (iopr === '/')
                       {operator = "/";
                       division (famount, fcurn);
                       }

                       if (iopr === '*')
                          {operator = "*";
                           multiplactionA (famount, fcurn);
                          }
               // init number check.
               }


         if (buttonValue === '=') {

            //console.log('grand total');
            //console.log(total);
            //if (iopr ==="+" )  { console.log(aamount + fcurn); }
          }

          function additionA (famount, fcurn) {
                              var total = (aamount + fcurn);
              //                console.log('running total');
                //              console.log(total);
                              aamount = total;
                              famount = total;
                              return total;
                       }

           function subtractA (famount, fcurn) {

        //        console.log('two numbers');
        //        console.log(famount);
        //        console.log(fcurn);

                //  famount = famount - fcurn;
                if (initNum < 2){
                  {
            //      console.log('only one num');
            //      console.log(famount);
                  }
                if (initNum >= 2)
                  {
              //    console.log('two or more nums');
                }
                 // console.log('famount and fcurn');
                 // console.log(famount);
                 // console.log(fcurn);
                 // console.log(famount - fcurn);
                 // return famount;
               }
             }


            //      console.log ('running minus operation');
            //        console.log(famount);
            //        console.log(fcurn);
            //        famount = famount - fcurn;
            //          console.log ('after operation');
            //          console.log ('famount');




                    // total = fcurn - aamount;
                    // console.log('new run');
                    // console.log(total);
                    // console.log(fcurn);
                    // console.log(famount);






           function multiplactionA (famount, fcurn) {
                                 total = (famount * fcurn);
                                 console.log('running multiplication total');
                                 console.log(total);
                                 aamount = total;
                                 famount = total;
                                 return famount;
                                 console.log('initNum loop counts')
                                 console.log(initNum);
                          }

             function division (famount, fcurn) {
                          console.log('running division total');
                          console.log(famount);
                          console.log(fcurn);

                          // if (initNum < 2)
                          //   {
                          //   console.log('waiting for second number');
                          //   console.log(famount);
                          //   console.log(fcurn);
                          //   }
                          // else {
                          // total = (famount/fcurn);
                          // famount = total;
                          // console.log('division answer');
                          // console.log(famount);
                          // return famount;
                          // }

                  }
           }
  //    }
