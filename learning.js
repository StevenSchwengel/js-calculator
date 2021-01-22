//


// var mString = "";
//var nValue;
//var mOperators;
var matArr = [];
var valArr = [];
var valNum = [];
var x;
//var cleanArrOfNumsAndMat = [];
var mati = 0;// incrementer for array values

var fNum;
var fullNum;
var currentNum;

var Numa;





// part 1
// Caputures digits and places in array


function mouseOver() {
  document.getElementById("demo").style.color = "red";
}

function mouseOut() {
  document.getElementById("demo").style.color = "white";
}

 function mouseDown() {
  document.getElementById("demo").style.color = "blue";
//} test abb added here comments

  function incrementValue() {
    var value = parseInt(document.getElementById("demo").value);
    value = isNaN(value) ? 0 : value;
//    console.log(value);
    document.getElementById('demo').value = value;
// original
    matArr.push(value);
     if (value = 7)
    {
         valArr.push(value);
         valNum.push(value);

// orig
          var x = valNum.toString();
          console.log(valNum.join(""));

//          var x = x
//          var Numa = parseFloat(x);
          console.log(x);


                console.log(valNum);
            //   console.log('push nums');


          // console.log(Num1);

       } else {
    //    value = "+";
    //    currentNum = 77;
    //    console.log('hi');
       }

// test

  //  console.log(matArr);
    console.log(valArr);

  }
  incrementValue()

}
// test abb added above


// // part 2
// // Captures math operators and places in array
//
function mouseDown2() {
  document.getElementById("demo").style.color = "blue";

   function pushOperator() {
    //original var mOperators = document.getElementById("operator").style.color = "+";
     var mOperators = document.getElementById("operator");
     console.log(mOperators);
     matArr.push(`+`);
     console.log('joy');
     }
  pushOperator()
  //show running tota in seperate function
    }


  // part 3
  // runs array of math operators

  function mouseDown3() {
//    document.getElementById("demo").style.color = "blue";
//    document.getElementById("demo").style.color = "blue";


    function calculate() {
//     console.log(matArr);
        console.log(matArr.length);
         console.log(matArr);

          if (matArr[1] == "-")
            {console.log('do subtraction');
             console.log(matArr[0] - matArr[2]);
          };

          if (matArr[1] == "+")
            {console.log('do addition');
             console.log(matArr[0] + matArr[2]);
          };

//      matArr = [];
//       console.log(matArr.join(`));
       }

    calculate()
    //show running tota in seperate function
    }





    // select all the buttons using querySelectorAll

    // loop over all the buttons and add an eventListener

    // the callback function passed to the eventListener should utilize event.target



    // function(event) {
    //   event.target.value
    // }




    const buttons = document.querySelectorAll('button');

    // buttons.forEach(function(button) {
    //   button.addEventListener('click', alertValue);
    // });

    for(let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', alertValue);
    }

    function alertValue(event) {
      const buttonValue = event.target.value;
      console.log(buttonValue)
      alert(buttonValue);
    }
