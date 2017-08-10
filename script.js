let hour = 0,
morningOrNight = "",
minutes = 0;
//defines all variables and functions

function printTime() { //Make it a function so the button can call it
	var date = new Date(),
	twentyFourHour = date.getHours(),
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

	document.getElementById("time").innerHTML = 'The time is ' + hour + ":" + minutes + ' ' + morningOrNight;

	setTimeout(printTime, 1000)
};

printTime();
