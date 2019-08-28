// function myFunction() {
//   document.getElementById("demo").innerHTML = "Hello World";
// }

// function picsChangeGrey() {
// 	document.getElementById("myImage").src="pics/g-fl.png";
// }

// function picsChangeBricks() {
//  document.getElementById("myImage2").src="pics/r-brick.png";
// }

// function picsChangePattern2() {
//  document.getElementById("myImage2").src="pics/r-brick2.png";
// }


/*alert("Todays special offer is this and that")*/

function exportPdf() {
    window.print();
}

function reset() {
    location.reload();
}

function display()
{
var z=prompt("enter your name...");
if(z!=null)
{
document.getElementById("demo").innerHTML=z;
document.getElementById("case").style.display='block';
}
else
document.getElementById("demo").innerHTML="Customer.";
}

function wallR() {
	document.getElementById("floor").innerHTML = "Empty";
	document.getElementById ("myImage").src="pics/blank-bedroom.png";
}            
	document.getElementById("img-reset").addEventListener("click", wallR, true);

function wallR1() {
	document.getElementById("wall").innerHTML = "Empty";
	document.getElementById ("myImage2").src="pics/blank-bedroom.png";
}            
	document.getElementById("img-reset1").addEventListener("click", wallR1, true);

function wallR2() {
	document.getElementById("wall-image").innerHTML = "Empty";
	document.getElementById ("myImage4").src="pics/blank-bedroom.png";
}            
	document.getElementById("img-reset2").addEventListener("click", wallR2, true);

     
function floor0() {
	document.getElementById("floor").innerHTML = "Red floor";
    document.getElementById ("myImage").src="pics/red-carpet.png";
    // alert("You have chosen red floor, we reccomend black bricks for the wall!");
}              
	document.getElementById("red").addEventListener("click", floor0, true);
 

function floor1() {
	document.getElementById("floor").innerHTML = "Grey floor";
	document.getElementById ("myImage").src="pics/grey-carpet.png";
}            
	document.getElementById("grey").addEventListener("click", floor1, true);

function floor2() {
	document.getElementById("floor").innerHTML = "Wood";
	document.getElementById ("myImage").src="pics/wood.png";
}            
	document.getElementById("wood").addEventListener("click", floor2, true);	

function floor3() {
	document.getElementById("floor").innerHTML = "3D floor";
	document.getElementById ("myImage").src="pics/3D-floor.png";
}            
	document.getElementById("3D-floor").addEventListener("click", floor3, true);

function floor4() {
	document.getElementById("floor").innerHTML = "Marble";
	document.getElementById ("myImage").src="pics/marble.png";
}            
	document.getElementById("marble").addEventListener("click", floor4, true);

function floor5() {
	document.getElementById("floor").innerHTML = "Marble2";
	document.getElementById ("myImage").src="pics/marble2.png";
}            
	document.getElementById("marble2").addEventListener("click", floor5, true);


function floor6() {
	document.getElementById("floor").innerHTML = "Carpet 3";
	document.getElementById ("myImage").src="pics/carpet3.png";
}            
	document.getElementById("carpet3").addEventListener("click", floor6, true);


function floor7() {
	document.getElementById("floor").innerHTML = "Carpet 4";
	document.getElementById ("myImage").src="pics/carpet4.png";
}            
	document.getElementById("carpet4").addEventListener("click", floor7, true);


function wall0() {
	document.getElementById("wall").innerHTML = "Blue";
    document.getElementById ("myImage2").src="pics/blue wall.png";
    // alert("You have chosen black bricks, we reccomendred floor!");
}              
	document.getElementById("blue").addEventListener("click", wall0, true);


function wall1() {
	document.getElementById("wall-image").innerHTML = "Flowers";
	document.getElementById ("myImage4").src="pics/wall-graphic1.png";
}            
	document.getElementById("flowers").addEventListener("click", wall1, true);

function wall2() {
	document.getElementById("wall").innerHTML = "Grey";
	document.getElementById ("myImage2").src="pics/grey-w.png";
}            
	document.getElementById("grey-w").addEventListener("click", wall2, true);

function wall3() {
	document.getElementById("wall").innerHTML = "Bricks";
	document.getElementById ("myImage2").src="pics/wall-bricks.png";
}            
	document.getElementById("wall-bricks").addEventListener("click", wall3, true);


function wall4() {
	document.getElementById("wall-image").innerHTML = "Tree";
	document.getElementById ("myImage4").src="pics/tree.png";
}            
	document.getElementById("tree").addEventListener("click", wall4, true);
            
function wall5() {
	document.getElementById("wall").innerHTML = "Forest 1";
	document.getElementById ("myImage2").src="pics/w-forest1.png";
}            
	document.getElementById("w-forest1").addEventListener("click", wall5, true);
            
function wall6() {
	document.getElementById("wall").innerHTML = "Forest 2";
	document.getElementById ("myImage2").src="pics/w-forest2.png";
}            
	document.getElementById("w-forest2").addEventListener("click", wall6, true);

function wall7() {
	document.getElementById("wall").innerHTML = "Red";
    document.getElementById ("myImage2").src="pics/red-w.png";
    // alert("You have chosen black bricks, we reccomendred floor!");
}              
	document.getElementById("red-w").addEventListener("click", wall7, true);

function wall8() {
	document.getElementById("wall").innerHTML = "City";
    document.getElementById ("myImage2").src="pics/City-by-night.png";
    // alert("You have chosen black bricks, we reccomendred floor!");
}              
	document.getElementById("city-by-night").addEventListener("click", wall8, true);
function wall9() {
	document.getElementById("wall").innerHTML = "See";
    document.getElementById ("myImage2").src="pics/seeByNight.png";
    // alert("You have chosen black bricks, we reccomendred floor!");
}              
	document.getElementById("seeByNight").addEventListener("click", wall9, true);

function wall10() {
	document.getElementById("wall-image").innerHTML = "Colors";
	document.getElementById ("myImage4").src="pics/wallcol.png";
}            
	document.getElementById("wallcol").addEventListener("click", wall10, true);

function wall11() {
	document.getElementById("wall-image").innerHTML = "Stone";
	document.getElementById ("myImage4").src="pics/stoneWall.png";
}            
	document.getElementById("stoneWall").addEventListener("click", wall11, true);
function wall12() {
	document.getElementById("wall-image").innerHTML = "Hearts";
	document.getElementById ("myImage4").src="pics/hearts.png";
}            
	document.getElementById("hearts").addEventListener("click", wall12, true);
function wall13() {
	document.getElementById("wall-image").innerHTML = "Flowers 2";
	document.getElementById ("myImage4").src="pics/flowers2.png";
}            
	document.getElementById("flowers2").addEventListener("click", wall13, true);
function wall14() {
	document.getElementById("wall-image").innerHTML = "Flowers 3";
	document.getElementById ("myImage4").src="pics/flowers3.png";
}            
	document.getElementById("flowers3").addEventListener("click", wall14, true);
function wall15() {
	document.getElementById("wall-image").innerHTML = "Flowers 4";
	document.getElementById ("myImage4").src="pics/shapes.png";
}            
	document.getElementById("shapes").addEventListener("click", wall15, true);