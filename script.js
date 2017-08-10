let hour = 0,
morningOrNight = "",
minutes = 0,
date = new Date();
//defines all variables and functions

function printDay() {
	weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	//make an array to get the weekday not a 0-6 value

	document.getElementById("date").innerHTML = 'Today is ' + weekDays[date.getDay()] + '<br>';
	//puts in the day value to the array to get the day as a string and has a br tag to put a line in

	setTimeout(printDay, 100000)
}

function printTime() {
	let twentyFourHour = date.getHours(),
	possMinute = date.getMinutes();

	if (twentyFourHour > 12) { //for afternoon
		 hour = date.getHours() - 12;
		//accounting for 24hr time
		 morningOrNight = "PM";
	} else if (twentyFourHour == 0) { //12 AM, have to turn 00 into 12 bc 24hr time
		 hour = 12;
		 morningOrNight = "AM";
	} else if (twentyFourHour < 13) { //for the morning
		if (twentyFourHour < 12) { //for 1-11
			 morningOrNight = "AM";
		} else { //12 is technically PM, so have to set that manually
			 morningOrNight = "PM";
		}
		 hour = twentyFourHour;
		//since its not past 12 all the numbers are the same, no problem
	}

	minutes = possMinute + '';
	//turns minutes into a string so the string.length will work
	if (minutes.length == 1) {
		 minutes = "0".concat(minutes);
		//so when the time is < 10 it doesn't just show XX:1
	};

	hour = hour + '';
	if (hour.length == 1) {
		 hour = "0".concat(hour);
	};
	//Same as above but for hours

	if (window.innerWidth > 500) {
		document.getElementById("time").innerHTML = 'and the time is ' + hour + ":" + minutes + ' ' + morningOrNight;
	} else {
		document.getElementById("time").innerHTML = 'and the time is <br>' + hour + ":" + minutes + ' ' + morningOrNight;
	}
	//makes it wrap for smaller screens

	setTimeout(printTime, 1000)
};

printDay();
printTime();
