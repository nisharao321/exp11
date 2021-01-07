function navNext()
{
  for (temp = 0; temp <= 7 ; temp++) 
  { 
      document.getElementById('canvas'+temp).style.visibility="hidden";
  }

 simsubscreennum+=1;
 document.getElementById('canvas'+(simsubscreennum)).style.visibility="visible";
 document.getElementById('nextButton').style.visibility="hidden";
 magic();
}
var r = Math.floor(Math.random() * 14);

var ar3 = [
	[1, 0.25, 1.5,0.028,53.57,5.09],
	[1.5,0.25,0.91,0.0332,27.4,13.75],
	[2,0.25,0.79,0.044,17.95,24.74],
	[3,0.25,0.4,0.0385,10.39,56.16],
	[4,0.5,0.44,0.0312,14.1,49.49],
	[4,0.25,0.23,0.0319,7.21,100.15],
	[5,0.5,0.48,0.0458,10.48,77.76],
	[6,0.5,0.32,0.043,7.44,112.33],
	[8,0.5,0.16,0.0418,3.83,200.3],
	[10,1,0.17,0.0347,4.89,155.53],
	[10,0.5,0.08,0.0376,2.12,313.41],
	[15,1,0.09,0.0435,2.07,351.9],
	[20,1,0.05,0.0385,1.29,626.83],
	[30,1,0.02,0.027,0.74,1412.3]	];
	
	var arr3 = [
		[272.67],
		[376.89],
		[444.08],
		[583.5],
		[697.81],
		[722.08],
		[814.92],
		[835.74],
		[767.15],
		[760.54],
		[664.42],
		[728.43],
		[808.61],
		[1045.12]
		];
var data1=[
	[1,1, 0.25, 1.5,0.028,53.57,5.09,272.67],
	[2,1.5,0.25,0.91,0.0332,27.4,13.75,376.89],
	[3,2,0.25,0.79,0.044,17.95,24.74,444.08],
	[4,3,0.25,0.4,0.0385,10.39,56.16,583.5],
	[5,4,0.5,0.44,0.0312,14.1,49.49,697.81],
	[6,4,0.25,0.23,0.0319,7.21,100.15,722.08],
	[7,5,0.5,0.48,0.0458,10.48,77.76,814.92],
	[8,6,0.5,0.32,0.043,7.44,112.33,835.74],
	[9,8,0.5,0.16,0.0418,3.83,200.3,767.15],
	[10,10,1,0.17,0.0347,4.89,155.53,760.54],
	[11,10,0.5,0.08,0.0376,2.12,313.41,664.42],
	[12,15,1,0.09,0.0435,2.07,351.9,728.43],
	[13,20,1,0.05,0.0385,1.29,626.83,808.61],
	[14,30,1,0.02,0.027,0.74,1412.3,1045.12]];
	
	var j1=0;
	function fillTable1(repeat)
	{
	  var tb2 = document.getElementById("table2");
	  var row2 = tb2.insertRow();
	  for (i = 0; i <= data1[j1].length-1; i++)
	  {
	    var cell2 = row2.insertCell();
	    cell2.innerHTML = data1[j1][i];
	  }
	  if(j1<=12)
	  {
	  j1++;
	  fillTable1(j1);
	  }
	}
//-----------------------------------------blink arrow on the next step---------------------------------------------
//blink arrow on the next step
function animatearrow()
{
   if (document.getElementById('arrow1').style.visibility=="hidden")
       document.getElementById('arrow1').style.visibility="visible";
   else
       document.getElementById('arrow1').style.visibility="hidden";
}

//stop blinking arrow
function myStopFunction() 
{
clearInterval(myInt);
document.getElementById('arrow1').style.visibility="hidden";
}

function animateArrowATPosition(left,top,height,degg)
	{
	document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:"+left+"px; top: "+top+"px; height:"+height+"px; z-index: 10;";
	document.getElementById("arrow1").style.WebkitTransform = "rotate("+degg+"deg)";
	// Code for IE9
	document.getElementById("arrow1").style.msTransform = "rotate("+degg+"deg)";
	// Standard syntax
	document.getElementById("arrow1").style.transform = "rotate("+degg+"deg)";
	}

//-------------------------------------function magic starts here----------------------------------------------------
function magic()
{
	
	if (simsubscreennum==1)
	{
		myInt = setInterval(function(){ animatearrow(); }, 500);
		animateArrowATPosition(380,170,30,180);

		document.getElementById('a5').onclick=function() { step1(); };
	}
	if (simsubscreennum==2)
	{
		myInt = setInterval(function(){ animatearrow(); }, 500);
		animateArrowATPosition(140,170,30,180);

		document.getElementById('b5').onclick=function() { step2(); };
	}
	if (simsubscreennum==3)
	{
		myInt = setInterval(function(){ animatearrow(); }, 500);
		animateArrowATPosition(525,170,30,180);

		document.getElementById('c5').onclick=function() { step3(); };
	}
	if (simsubscreennum==4)
	{
		myInt = setInterval(function(){ animatearrow(); }, 500);
		animateArrowATPosition(5,170,30,180);

		document.getElementById('d5').onclick=function() { step4(); };
	}
	if (simsubscreennum==5)
	{
		myInt = setInterval(function(){ animatearrow(); }, 500);
		animateArrowATPosition(300,470,30,180);

		document.getElementById('a8').onclick=function() {
			myStopFunction();
  
	      document.getElementById("a8").style.animation = "movek 1s ease-in-out  forwards";
		setTimeout(function()
		{
			document.getElementById("a8").style.animation = "movek 1s ease-in-out  forwards";
			setTimeout(function()
			{
				// document.getElementById("a8").style.animation = "movek1 1s ease-in-out  forwards";
				// document.getElementById("a7").style.animation = "movek2 1s ease-in-out  forwards";
		document.getElementById('a9').style.visibility="visible";


			},1000);
		},1000);

		};
		document.getElementById('nextButton').style.visibility="visible";

	}

	else if (simsubscreennum == 6) {
		for (i = 0; i <= ar3[r].length - 1; i++) {
		    document.getElementById("row" + i).innerHTML = ar3[r][i];
		}
    
		calc1('button', 'output', 'output', 'button', 'output','row6', 'nextButton', 'button', 'wrong', 'wrong', 'right', 'nextButton', 'h1', 'h1','row6', 'output', 'wrong', 'right', 'right', 'h1', 'h1','row6','button', 0);

	}
	else if (simsubscreennum == 7) {
	      document.getElementById('10').style.visibility="visible";
	      document.getElementById('ok').onclick=function() { 
		document.getElementById('10').style.visibility="hidden";
		document.getElementById('ok').style.visibility="hidden";
		document.getElementById('table2').style.visibility="visible";
		document.getElementById('button1').style.visibility="visible";
		document.getElementById('div').style.visibility="visible";

            fillTable1(1);
		calc2('button1', 'output1', 'output1', 'button1', 'output1', 'nextButton', 'button1', 'wrong1', 'wrong1', 'right1', 'nextButton', 'h2', 'h2', 'output1', 'wrong1', 'right1', 'right1', 'h2', 'h2', 'button1','row4', 0);
	  };


	}

	else if (simsubscreennum == 8) {
		// document.getElementById('trial1').style.visibility = "visible";
	
		document.getElementById('table2').style.visibility="hidden";
		document.getElementById('button1').style.visibility="hidden";
		document.getElementById('div').style.visibility="hidden";
	}


}

function step1()
{
	myStopFunction();
	// document.getElementById('a3').style.visibility="hidden";
	document.getElementById("a5").style.animation = "mover 1s ease-in-out  forwards";
	setTimeout(function()
	{
	document.getElementById("a6").style.animation = "movep 0.1s ease-in-out  forwards";
	document.getElementById("a23").style.transform = "rotate(7deg)";

	setTimeout(function()
	{
	document.getElementById('a5').style.visibility="hidden";
	document.getElementById('nextButton').style.visibility="visible";

      },1000);
	},1000);
}

function step2()
{
	myStopFunction();
	document.getElementById("b5").style.animation = "mover 1s ease-in-out  forwards";
	setTimeout(function()
	{
	document.getElementById("b7").style.animation = "movep 0.1s ease-in-out  forwards";
	document.getElementById("b24").style.transform = "rotate(15deg)";

	setTimeout(function()
	{
	document.getElementById('b5').style.visibility="hidden";
	document.getElementById('nextButton').style.visibility="visible";

      },1000);
	},1000);
}

function step3()
{
	myStopFunction();
	document.getElementById("c5").style.animation = "mover 1s ease-in-out  forwards";
	setTimeout(function()
	{
	document.getElementById("c7").style.animation = "movep 0.1s ease-in-out  forwards";
	document.getElementById("c23").style.transform = "rotate(8deg)";
	setTimeout(function()
	{
	document.getElementById('c5').style.visibility="hidden";
	document.getElementById('nextButton').style.visibility="visible";

      },1000);
	},1000);
}
function step4()
{
	myStopFunction();
	document.getElementById("d5").style.animation = "mover 1s ease-in-out  forwards";
	setTimeout(function()
	{
	document.getElementById("d7").style.animation = "movep 0.1s ease-in-out  forwards";
	document.getElementById("c21").style.transform = "rotate(16deg)";

	setTimeout(function()
	{
	document.getElementById('d5').style.visibility="hidden";
	document.getElementById('nextButton').style.visibility="visible";

      },1000);
	},1000);
}

var k;
function calc1(para_button, para_output, para_output, para_button, para_output,para_row4, para_button1, para_button, para_wrong, para_wrong, para_right, para_button1, para_h1, para_h1,para_row4,para_output, para_wrong, para_right, para_right, para_h1, para_h1,para_row4, para_button, k) {
  var flag1 = 0;
  document.getElementById(para_button).onclick = function () {
    n = document.getElementById(para_output).value;
    if (document.getElementById(para_output).value === "") {
    if (document.getElementById(para_button).innerHTML === "Result") {
	  document.getElementById(para_output).value = arr3[r][k];
	  document.getElementById(para_row4).innerHTML = arr3[r][k];

        document.getElementById(para_button1).style.visibility = "visible";
        document.getElementById(para_button).style.visibility = "hidden";
        document.getElementById(para_wrong).style.visibility = "hidden";
      }
      else
        alert("Enter the value to proceed");
    }
    else {
      if ((Math.floor(n * 10) === Math.floor(arr3[r][k] * 10)) || (Math.floor(n * 100) === Math.floor(arr3[r][k] * 100))) {
        document.getElementById(para_button).style.visibility = 'hidden';
        document.getElementById(para_wrong).style.visibility = "hidden";
        document.getElementById(para_right).style.visibility = "visible";
        document.getElementById(para_button1).style.visibility = 'visible';
        document.getElementById(para_h1).style.visibility = "visible";
	  document.getElementById(para_h1).innerHTML = arr3[r][k];
	  document.getElementById(para_row4).innerHTML = arr3[r][k];
	

      }
      else {
        flag1 += 1;
        document.getElementById(para_output).value = "";
        document.getElementById(para_wrong).style.visibility = "visible";
        document.getElementById(para_right).style.visibility = "hidden";
        if (flag1 === 2) {
          if ((Math.floor(n * 10) === Math.floor(arr3[r][k] * 10)) || (Math.floor(n * 100) === Math.floor(arr3[r][k] * 100))) {
            document.getElementById(para_right).style.visibility = "visible";
            document.getElementById(para_h1).style.visibility = "visible";
            document.getElementById(para_h1).innerHTML = arr3[r][k];
            document.getElementById(para_row4).innerHTML = arr3[r][k];
          }
          else
            document.getElementById(para_button).innerHTML = "Result";
        }
      }
    }
  };
}

var k;
          function calc2(para_button1,para_output1,para_output1,para_button1,para_output1,para_button11,
            para_button1,para_wrong1,para_wrong1,para_right1,para_button11,para_h11,para_h11,para_output1,
            para_wrong1,para_right1,para_right1,para_h11,para_h11,para_button1,k)
          {
            var flag1=0;
            document.getElementById(para_button1).onclick=function() {
              n= document.getElementById(para_output1).value;
              if(document.getElementById(para_output1).value==="")
              {
                if(document.getElementById(para_button1).innerHTML==="Result"){
                  document.getElementById(para_output1).value=680.14;
                  document.getElementById(para_button11).style.visibility="visible";
                  document.getElementById(para_button1).style.visibility = "hidden";
                  document.getElementById(para_wrong1).style.visibility = "hidden";
                }
                else
                  alert("Enter the value to proceed");
              }
              else {
                if(Math.floor(n)===Math.floor(680.14)||Math.floor(n*10)===Math.floor(680.14*10)||Math.floor(n*100)===Math.floor(680.14*100)){
                  document.getElementById(para_button1).style.visibility = 'hidden';
                  document.getElementById(para_wrong1).style.visibility = "hidden";
                  document.getElementById(para_right1).style.visibility = "visible";
                  document.getElementById(para_button11).style.visibility = 'visible';
                  document.getElementById(para_h11).style.visibility="visible";
                  document.getElementById(para_h11).innerHTML=680.14;
                }
                  else{
                    flag1+=1;
                    document.getElementById(para_output1).value = "";
                    document.getElementById(para_wrong1).style.visibility = "visible";
                    document.getElementById(para_right1).style.visibility = "hidden";
                    if (flag1===2){
                      if(Math.floor(n)===Math.floor(680.14)||Math.floor(n*10)===Math.floor(680.14)||Math.floor(n*100)===Math.floor(680.14*100)){
                        document.getElementById(para_right1).style.visibility="visible";
                        document.getElementById(para_h11).style.visibility="visible";
                        document.getElementById(para_h11).innerHTML=680.14;
                      }
                      else
                        document.getElementById(para_button1).innerHTML="Result";
                    }
                  }
                }
              };
            }
