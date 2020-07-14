// Function expression to select elements `

const selectElement = (s) => document.querySelector(s);
const navLinks = document.querySelectorAll(".nav-link");

selectElement(".burger-menu-icon").addEventListener("click", () => {
    selectElement(".nav-list").classList.toggle("active");
    selectElement(".burger-menu-icon").classList.toggle("toggle");

    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = "";
        } else {
            link.style.animation = `navLinkAnimate 0.5s ease forwards ${
        index / 7 + 0.5
      }s`;
            console.log(index / 7 + 0.5);
        }
    });
});
var doughnutArray = [
    document.getElementById("doughnut").getContext("2d"),
    document.getElementById("doughnut2").getContext("2d"),
    document.getElementById("doughnut3").getContext("2d"),
    document.getElementById("doughnut4").getContext("2d"),
    document.getElementById("doughnut5").getContext("2d"),
    document.getElementById("doughnut6").getContext("2d"),
    document.getElementById("doughnut7").getContext("2d"),
    document.getElementById("doughnut8").getContext("2d"),
    document.getElementById("doughnut9").getContext("2d"),
    document.getElementById("doughnut10").getContext("2d"),
    document.getElementById("doughnut11").getContext("2d"),
];
for (var i = 0; i < doughnutArray.length; i++) {
    doughnutArray[i].lineWidth = 5; //thickness of the line
    doughnutArray[i].fillStyle = "	#000033";
    doughnutArray[i].strokeStyle = "	#000033";
    doughnutArray[i].beginPath();
    doughnutArray[i].arc(60, 60, 45, 4.72, 15, false); //.arc(x, y , radius, startAngle, endAngle, anticlockwise)
    doughnutArray[i].stroke();
}
window.onload = function() {
    loadSkills1();
    loadSkills2();
    loadSkills3();
    loadSkills4();
    loadSkills5();
    loadSkills6();
    loadSkills7();
    loadSkills8();
    loadSkills9();
    loadSkills10();
    loadSkills11();
};
/*Load skills one function*/
function loadSkills1() {
    var ctx = document.getElementById("skill1").getContext("2d");
    var al = 0;
    var start = 4.72;
    var cw = ctx.canvas.width;
    var ch = ctx.canvas.height;
    var diff;

    function progressSim() {
        diff = ((al / 100) * Math.PI * 2 * 10).toFixed(2); //change the arc by multiplying .. * Math.PI*2* --> 7.5=75, 5=50 etc.
        ctx.clearRect(0, 0, cw, ch);
        ctx.lineWidth = 5; //thickness of the line
        ctx.fillStyle = "#ff8c00";
        ctx.strokeStyle = "#ff8c00";
        ctx.textAlign = "center";
        ctx.font = "30px Radley";
        ctx.fillText(al + "%", cw * 0.5 + 2, ch * 0.5 + 8, cw);
        ctx.beginPath();
        ctx.arc(60, 60, 45, start, diff / 10 + start, false); //.arc(x, y , radius, startAngle, endAngle, anticlockwise)
        ctx.stroke();
        if (al >= 90) {
            // stop the recreation at your desired point, i.e change 100 to 75 if you need just 75%.
            clearTimeout(sim);
            // Add scripting here that will run when progress completes
        }
        al++;
    }
    var sim = setInterval(progressSim, 65); //speed
}
/*loadSkills2 function*/
function loadSkills2() {
    var ctx = document.getElementById("skill2").getContext("2d");
    var al = 0;
    var start = 4.72;
    var cw = ctx.canvas.width;
    var ch = ctx.canvas.height;
    var diff;

    function progressSim() {
        diff = ((al / 100) * Math.PI * 2 * 10).toFixed(2); //change the arc by multiplying .. * Math.PI*2* --> 7.5=75, 5=50 etc.
        ctx.clearRect(0, 0, cw, ch);
        ctx.lineWidth = 5; //thickness of the line
        ctx.fillStyle = "#fff";
        ctx.strokeStyle = "#fff";
        ctx.textAlign = "center";
        ctx.font = "30px Radley";
        ctx.fillText(al + "%", cw * 0.5 + 2, ch * 0.5 + 8, cw);
        ctx.beginPath();
        ctx.arc(60, 60, 45, start, diff / 10 + start, false); //.arc(x, y , radius, startAngle, endAngle, anticlockwise)
        ctx.stroke();
        if (al >= 80) {
            // stop the recreation at your desired point, i.e change 100 to 75 if you need just 75%.
            clearTimeout(sim);
            // Add scripting here that will run when progress completes
        }
        al++;
    }
    var sim = setInterval(progressSim, 65); //speed
}

/* loadSkill3 function*/
function loadSkills3() {
    var ctx = document.getElementById("skill3").getContext("2d");
    var al = 0;
    var start = 4.72;
    var cw = ctx.canvas.width;
    var ch = ctx.canvas.height;
    var diff;

    function progressSim() {
        diff = ((al / 100) * Math.PI * 2 * 10).toFixed(2); //change the arc by multiplying .. * Math.PI*2* --> 7.5=75, 5=50 etc.
        ctx.clearRect(0, 0, cw, ch);
        ctx.lineWidth = 5; //thickness of the line
        ctx.fillStyle = "#66FF00";
        ctx.strokeStyle = "#66FF00";
        ctx.textAlign = "center";
        ctx.font = "30px Radley";
        ctx.fillText(al + "%", cw * 0.5 + 2, ch * 0.5 + 8, cw);
        ctx.beginPath();
        ctx.arc(60, 60, 45, start, diff / 10 + start, false); //.arc(x, y , radius, startAngle, endAngle, anticlockwise)
        ctx.stroke();
        if (al >= 75) {
            // stop the recreation at your desired point, i.e change 100 to 75 if you need just 75%.
            clearTimeout(sim);
            // Add scripting here that will run when progress completes
        }
        al++;
    }
    var sim = setInterval(progressSim, 65); //speed
}
/* loadSkill4 function*/
function loadSkills4() {
    var ctx = document.getElementById("skill4").getContext("2d");
    var al = 0;
    var start = 4.72;
    var cw = ctx.canvas.width;
    var ch = ctx.canvas.height;
    var diff;

    function progressSim() {
        diff = ((al / 100) * Math.PI * 2 * 10).toFixed(2); //change the arc by multiplying .. * Math.PI*2* --> 7.5=75, 5=50 etc.
        ctx.clearRect(0, 0, cw, ch);
        ctx.lineWidth = 5; //thickness of the line
        ctx.fillStyle = "	#33FF00";
        ctx.strokeStyle = "	#33FF00";
        ctx.textAlign = "center";
        ctx.font = "30px Radley";
        ctx.fillText(al + "%", cw * 0.5 + 2, ch * 0.5 + 8, cw);
        ctx.beginPath();
        ctx.arc(60, 60, 45, start, diff / 10 + start, false); //.arc(x, y , radius, startAngle, endAngle, anticlockwise)
        ctx.stroke();
        if (al >= 70) {
            // stop the recreation at your desired point, i.e change 100 to 75 if you need just 75%.
            clearTimeout(sim);
            // Add scripting here that will run when progress completes
        }
        al++;
    }
    var sim = setInterval(progressSim, 65); //speed
}

function loadSkills5() {
    var ctx = document.getElementById("skill5").getContext("2d");
    var al = 0;
    var start = 4.72;
    var cw = ctx.canvas.width;
    var ch = ctx.canvas.height;
    var diff;

    function progressSim() {
        diff = ((al / 100) * Math.PI * 2 * 10).toFixed(2); //change the arc by multiplying .. * Math.PI*2* --> 7.5=75, 5=50 etc.
        ctx.clearRect(0, 0, cw, ch);
        ctx.lineWidth = 5; //thickness of the line
        ctx.fillStyle = "	#33CCFF";
        ctx.strokeStyle = "	#33CCFF";
        ctx.textAlign = "center";
        ctx.font = "30px Radley";
        ctx.fillText(al + "%", cw * 0.5 + 2, ch * 0.5 + 8, cw);
        ctx.beginPath();
        ctx.arc(60, 60, 45, start, diff / 10 + start, false); //.arc(x, y , radius, startAngle, endAngle, anticlockwise)
        ctx.stroke();
        if (al >= 80) {
            // stop the recreation at your desired point, i.e change 100 to 75 if you need just 75%.
            clearTimeout(sim);
            // Add scripting here that will run when progress completes
        }
        al++;
    }
    var sim = setInterval(progressSim, 65); //speed
}
/*Load skills one function*/
function loadSkills6() {
    var ctx = document.getElementById("skill6").getContext("2d");
    var al = 0;
    var start = 4.72;
    var cw = ctx.canvas.width;
    var ch = ctx.canvas.height;
    var diff;

    function progressSim() {
        diff = ((al / 100) * Math.PI * 2 * 10).toFixed(2); //change the arc by multiplying .. * Math.PI*2* --> 7.5=75, 5=50 etc.
        ctx.clearRect(0, 0, cw, ch);
        ctx.lineWidth = 5; //thickness of the line
        ctx.fillStyle = "	#339900";
        ctx.strokeStyle = "	#339900";
        ctx.textAlign = "center";
        ctx.font = "30px Radley";
        ctx.fillText(al + "%", cw * 0.5 + 2, ch * 0.5 + 8, cw);
        ctx.beginPath();
        ctx.arc(60, 60, 45, start, diff / 10 + start, false); //.arc(x, y , radius, startAngle, endAngle, anticlockwise)
        ctx.stroke();
        if (al >= 70) {
            // stop the recreation at your desired point, i.e change 100 to 75 if you need just 75%.
            clearTimeout(sim);
            // Add scripting here that will run when progress completes
        }
        al++;
    }
    var sim = setInterval(progressSim, 60); //speed
}
/*Load skills one function*/
function loadSkills7() {
    var ctx = document.getElementById("skill7").getContext("2d");
    var al = 0;
    var start = 4.72;
    var cw = ctx.canvas.width;
    var ch = ctx.canvas.height;
    var diff;

    function progressSim() {
        diff = ((al / 100) * Math.PI * 2 * 10).toFixed(2); //change the arc by multiplying .. * Math.PI*2* --> 7.5=75, 5=50 etc.
        ctx.clearRect(0, 0, cw, ch);
        ctx.lineWidth = 5; //thickness of the line
        ctx.fillStyle = "#33CCFF";
        ctx.strokeStyle = "#33CCFF";
        ctx.textAlign = "center";
        ctx.font = "30px Radley";
        ctx.fillText(al + "%", cw * 0.5 + 2, ch * 0.5 + 8, cw);
        ctx.beginPath();
        ctx.arc(60, 60, 45, start, diff / 10 + start, false); //.arc(x, y , radius, startAngle, endAngle, anticlockwise)
        ctx.stroke();
        if (al >= 85) {
            // stop the recreation at your desired point, i.e change 100 to 75 if you need just 75%.
            clearTimeout(sim);
            // Add scripting here that will run when progress completes
        }
        al++;
    }
    var sim = setInterval(progressSim, 60); //speed
}

function loadSkills8() {
    var ctx = document.getElementById("skill8").getContext("2d");
    var al = 0;
    var start = 4.72;
    var cw = ctx.canvas.width;
    var ch = ctx.canvas.height;
    var diff;

    function progressSim() {
        diff = ((al / 100) * Math.PI * 2 * 10).toFixed(2); //change the arc by multiplying .. * Math.PI*2* --> 7.5=75, 5=50 etc.
        ctx.clearRect(0, 0, cw, ch);
        ctx.lineWidth = 5; //thickness of the line
        ctx.fillStyle = "#33CC00";
        ctx.strokeStyle = "#33CC00";
        ctx.textAlign = "center";
        ctx.font = "30px Radley";
        ctx.fillText(al + "%", cw * 0.5 + 2, ch * 0.5 + 8, cw);
        ctx.beginPath();
        ctx.arc(60, 60, 45, start, diff / 10 + start, false); //.arc(x, y , radius, startAngle, endAngle, anticlockwise)
        ctx.stroke();
        if (al >= 70) {
            // stop the recreation at your desired point, i.e change 100 to 75 if you need just 75%.
            clearTimeout(sim);
            // Add scripting here that will run when progress completes
        }
        al++;
    }
    var sim = setInterval(progressSim, 65); //speed
}

function loadSkills9() {
    var ctx = document.getElementById("skill9").getContext("2d");
    var al = 0;
    var start = 4.72;
    var cw = ctx.canvas.width;
    var ch = ctx.canvas.height;
    var diff;

    function progressSim() {
        diff = ((al / 100) * Math.PI * 2 * 10).toFixed(2); //change the arc by multiplying .. * Math.PI*2* --> 7.5=75, 5=50 etc.
        ctx.clearRect(0, 0, cw, ch);
        ctx.lineWidth = 5; //thickness of the line
        ctx.fillStyle = "#ff8c00";
        ctx.strokeStyle = "#ff8c00";
        ctx.textAlign = "center";
        ctx.font = "30px Radley";
        ctx.fillText(al + "%", cw * 0.5 + 2, ch * 0.5 + 8, cw);
        ctx.beginPath();
        ctx.arc(60, 60, 45, start, diff / 10 + start, false); //.arc(x, y , radius, startAngle, endAngle, anticlockwise)
        ctx.stroke();
        if (al >= 70) {
            // stop the recreation at your desired point, i.e change 100 to 75 if you need just 75%.
            clearTimeout(sim);
            // Add scripting here that will run when progress completes
        }
        al++;
    }
    var sim = setInterval(progressSim, 65); //speed
}

function loadSkills10() {
    var ctx = document.getElementById("skill10").getContext("2d");
    var al = 0;
    var start = 4.72;
    var cw = ctx.canvas.width;
    var ch = ctx.canvas.height;
    var diff;

    function progressSim() {
        diff = ((al / 100) * Math.PI * 2 * 10).toFixed(2); //change the arc by multiplying .. * Math.PI*2* --> 7.5=75, 5=50 etc.
        ctx.clearRect(0, 0, cw, ch);
        ctx.lineWidth = 5; //thickness of the line
        ctx.fillStyle = "#fff";
        ctx.strokeStyle = "	#fff";
        ctx.textAlign = "center";
        ctx.font = "30px Radley";
        ctx.fillText(al + "%", cw * 0.5 + 2, ch * 0.5 + 8, cw);
        ctx.beginPath();
        ctx.arc(60, 60, 45, start, diff / 10 + start, false); //.arc(x, y , radius, startAngle, endAngle, anticlockwise)
        ctx.stroke();
        if (al >= 70) {
            // stop the recreation at your desired point, i.e change 100 to 75 if you need just 75%.
            clearTimeout(sim);
            // Add scripting here that will run when progress completes
        }
        al++;
    }
    var sim = setInterval(progressSim, 65); //speed
}

function loadSkills11() {
    var ctx = document.getElementById("skill11").getContext("2d");
    var al = 0;
    var start = 4.72;
    var cw = ctx.canvas.width;
    var ch = ctx.canvas.height;
    var diff;

    function progressSim() {
        diff = ((al / 100) * Math.PI * 2 * 10).toFixed(2); //change the arc by multiplying .. * Math.PI*2* --> 7.5=75, 5=50 etc.
        ctx.clearRect(0, 0, cw, ch);
        ctx.lineWidth = 5; //thickness of the line
        ctx.fillStyle = "	#fff";
        ctx.strokeStyle = "	#33FF00";
        ctx.textAlign = "center";
        ctx.font = "30px Radley";
        ctx.fillText(al + "%", cw * 0.5 + 2, ch * 0.5 + 8, cw);
        ctx.beginPath();
        ctx.arc(60, 60, 45, start, diff / 10 + start, false); //.arc(x, y , radius, startAngle, endAngle, anticlockwise)
        ctx.stroke();
        if (al >= 70) {
            // stop the recreation at your desired point, i.e change 100 to 75 if you need just 75%.
            clearTimeout(sim);
            // Add scripting here that will run when progress completes
        }
        al++;
    }
    var sim = setInterval(progressSim, 50); //speed
}