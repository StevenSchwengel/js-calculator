

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
    //       initNum = initNum + 1;
          }
      //  }

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
                initNum = initNum + 1;
             }

             if (initNum === 2){
               console.log('doing second Math push');
               console.log(curn);
                initNum = initNum + 1;
             }

             if (initnum >= 3) {
               console.log('doing match changes');
                initNum = initNum + 1;
              }
           }

    //iopr = buttonValue;

      //       if (initOpr === 1 ) {
    //           console.log('caputure first operator');
        //       iopr = buttonValue;
        //       initOpr = initOpr + 1;
          //    }

              famount = parseFloat(famount);
              fcurn = parseFloat(curn);

    }
  }
      //        console.log("initnum test");
      //        console.log(initNum);

      //         if (initNum == 1) {
      //           famount = fcurn;
      //           fcurn = 0;
      //         }
      //
      //         if (initNum >= 2) {
      //
      // //          console.log('check initNums');
      //   //        console.log(initNum);
      //
      //            if (iopr === '-')
      //              {operator = "-";
      //   //            subtractA (famount, fcurn);
      //             }
      //
      //            if (iopr === '+')
      //               {operator === "+";
      //     //           additionA (famount, fcurn);
      //     //           console.log('runs adds');
      //               }
      //
      //               if (iopr === '/')
      //                  {operator = "/";
      //       //           division (famount, fcurn);
      //                  }
      //
      //                  if (iopr === '*')
      //                     {operator = "*";
      //         //             multiplactionA (famount, fcurn);
      //                     }
               // init number check.
          //     }


          // }
  //    }
