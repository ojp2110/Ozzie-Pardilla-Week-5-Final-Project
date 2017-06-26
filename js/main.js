/******Logo On Mouse and On Click Events*******/

var mathItems = new Array();
var geoItems = new Array();
image_tracker = "a";

function change() {


  var image = document.getElementById('logo');
  if (image_tracker == 'a') {

    image.src = "https://github.com/ojp2110/drummer/blob/master/quizworld_dn%20(1).gif?raw=true";
    image_tracker = 'b';

  } else {
    image.src = "https://github.com/ojp2110/drummer/blob/master/quizworld_up.gif?raw=true";

    image_tracker = 'a';


  }


}

/************Home Page Enter Name Function************/

function writeName() {

  var welcomeMsg = document.getElementById("welcome");

  var name = document.getElementById("name");

  var formContent = document.getElementById("entername");


  welcomeMsg.innerHTML = "<font size=5><b>Welcome " + name.value + " please select your quiz below!</b></font><br>";

  formContent.innerHTML = "";

}




/******** Math Arrays*******************/



function initMathArray() {
  mathItems[0] = "Division";
  mathItems[1] = "9";
  mathItems[2] = "4";
  mathItems[3] = "26";
}


/******** Geo Arrays*******************/
function initGeoArray() {
  geoItems[0] = "Raleigh";
  geoItems[1] = "Austin";
  geoItems[2] = "Bismark";
  geoItems[3] = "Jefferson City";
}


/******** Math Check Submit Function And Question Countdown Function*******************/
function submitAnswers() {
  boolChecked = false;;
  var qArray;
  var wrongTally = 0;
  for (a = 0; a < 4; a++) {
    qArray = document.getElementsByName("q" + a)
    boolChecked = false;
    for (b = 0; b < 4; b++) {
      if (qArray[b].checked) {
        if (qArray[b].value != mathItems[a]) {
          wrongTally++;
        }
        boolChecked = true;
      }
    }
    if (boolChecked == false) {
      alert("All questions must be clicked before submitting.");
      boolChecked = false;
      a = 4;
    }
  }
  if (boolChecked == true) {
    document.getElementById("quizResults").innerHTML = "<font size=5><b>You got " + (4 - wrongTally) + " out of 4 correct.</b></font>";
  }
}


/******** Geo Check Submit Function And Question Countdown Function*******************/
function submitGeoAnswers() {
  boolChecked = false;;
  var qArray;
  var wrongTally = 0;
  for (a = 0; a < 4; a++) {
    qArray = document.getElementsByName("q" + a)
    boolChecked = false;
    for (b = 0; b < 4; b++) {
      if (qArray[b].checked) {
        if (qArray[b].value != geoItems[a]) {
          wrongTally++;
        }
        boolChecked = true;
      }
    }
    if (boolChecked == false) {
      alert("All questions must be clicked before submitting.");
      boolChecked = false;
      a = 4;
    }
  }
  if (boolChecked == true) {
    document.getElementById("quizResults").innerHTML = "<font size=5><b>You got " + (4 - wrongTally) + " out of 4 correct.</b></font>";
  }
}


function userAlert() {
  var qArray;
  var tally = 0;
  var boolChecked;
  for (a = 0; a < 4; a++) {
    qArray = document.getElementsByName("q" + a)
    boolChecked = false;
    for (b = 0; b < 4; b++) {
      if (qArray[b].checked) {
        boolChecked = true;
      }
    }
    if (boolChecked == false) {
      tally++;
    }
  }
  document.getElementById("quizResults").innerHTML = "<font size='3'><b>You have " + tally + " questions left.</b></font>";
}


initMathArray();
initGeoArray();
