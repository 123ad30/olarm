var seconds = 10;
var timerStarted;
var time = document.getElementById('timer');
var btn = document.getElementById('accept-btn');
var dOverlay = document.getElementById('dboxOverlay');
var dbox = document.getElementById('dbox');
var cid1 = document.getElementById('cid1');
var cid2 = document.getElementById('cid2');
var cid3 = document.getElementById('cid3');
var lbtn = document.getElementById('lbtn');

function customAlert() {
	this.render = function (type) {
		var winH = window.innerHeight;
		var winW = window.innerWidth;
		dOverlay.style.display = "block";
		dOverlay.style.height = winH + "px";
		dbox.style.left = (winW/2) - (550/2) + "px";
		console.log((winW/2) - (550/2) + "px");
		dbox.style.display = "block";
		dbox.style.backgroundColor = "#EF4836";
		btn.innerHTML = "ACCEPT";
		if (type == "alert") {
			this.startTimer();
		} else if (type == "logout") {
			this.logout();
		} else if (type == "login") {
			this.login();
		}
	};

	this.hideAlert = function () {
		dOverlay.style.display = "none";
		dbox.style.display = "none";
		seconds = 10;
		clearInterval(timerStarted);
	};

	this.startTimer = function () {
		var that = this;
		time.innerHTML = seconds;
		timerStarted = setInterval(function() {
			time.innerHTML = --seconds;
			if (seconds <= 0) {
				clearInterval(timerStarted);
				Alert.render("logout");
			}
		}, 1000);
	};

	this.logout = function () {
		var that = this;
		dbox.style.backgroundColor = "#3A539B";
		time.style.visibility = "hidden";
		notice.innerHTML = "Logged Out";
		btn.innerHTML = "Log In";
		btn.setAttribute("onclick", "Alert.render('login')");
	}

	this.login = function () {
		dbox.style.backgroundColor = "#3A539B";
		time.style.visibility = "visible";
		notice.innerHTML = "Enter your Password";
		time.innerHTML = "<input type='password' name='pass'>";
		btn.innerHTML = "Log In";
		btn.setAttribute("onclick", "Alert.hideAlert()");
	}
}

var Alert = new customAlert();

// cid1.style.transform = "transform: rotate(135deg)";
cid1.style.color = "green";
cid2.style.transform = "rotate(135deg)";
cid3.style.transform = "rotate(135deg)";
lbtn.disabled ="fasle";
