

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
         iopr = buttonValue;
         console.log('operator to follow');
         console.log(iopr);
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
               console.log('doing first Math push');
               famount = curn;
                console.log(famount);
             }

             if (initNum === 2){
               console.log('doing second Math push');
               console.log(curn);
             }

             if (initNum >= 3)
              { famount = total;
              }

           }


             if (initOpr === 1 ) {
    //           console.log('caputure first operator');
               iopr = buttonValue;
               initOpr = initOpr + 1;
              }

              famount = parseFloat(famount);
              fcurn = parseFloat(curn);

  //            console.log("initnum test");
  //            console.log(initNum);

  //            if (initNum == 1) {
  //              famount = fcurn;
  //              fcurn = 0;
  //            }

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
            console.log(total);
            //if (iopr ==="+" )  { console.log(aamount + fcurn); }
          }

          function additionA (famount, fcurn) {
              // console.log('first amount');
              // console.log(famount);
              // console.log('current amount');
              // console.log(fcurn);
              // console.log('famount + fcurn');
              total = famount + fcurn;
              console.log('total');
              console.log(total);
              return total;
                       }

           function subtractA (famount, fcurn) {
                  console.log('first amount');
                  console.log(famount);
                  console.log('current amount');
                  console.log(fcurn);
                  total = famount - fcurn;
                  console.log('total');
                  console.log(total);
                  return total;
               }
             }



           function multiplactionA (famount, fcurn) {
                                 total = (famount * fcurn);
                                 console.log('running multiplication total');
                                 //console.log(total);
                                 return total;
                          }

             function division (famount, fcurn) {
                          total = (famount / fcurn);
                          console.log('running division total');
                          console.log(famount);
                          console.log(fcurn);
                          return total;
                  }

                  function percent (famount, fcurn) {
                               total = (.01 * famount);
                               console.log('percent total');
                               console.log(famount);
                               console.log(fcurn);
                               return total;
                       }

                       function plus-minus (famount, fcurn) {
                                    if (famount < 0)
                                     {famount = famount.abs(famount);}
                                    if (famount > 0)
                                     {famount = -famount.abls(famrount); }

                                    total = famount;
                                    return total;
                                }
