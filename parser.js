 $.ajax({
    url: 'http://api.bandsintown.com/artists/Kanye%20West/events?format=json&app_id=NWHACKS&date=all', 
    crossDomain: true,
    dataType: 'jsonp',
    data: '',
    type: 'get',
    headers: {"Access-Control-Allow-Origin": "*"},
    success: function(data) {

    	var jsonArray = data;
		var LatLongList=[];
		var Info=[];

		for (var i = 0; i < jsonArray.length; i++) {
			//get a single jsonObject from the JsonFile
			var jsonObject = jsonArray[i];
			//get latitude from jsonObject
			var latitude = parseFloat(jsonObject.venue.latitude);
			//get longitude from jsonObject
			var longitude = parseFloat(jsonObject.venue.longitude);
			//put lat and long into single array
			var LatLong=[];
			LatLong.push(latitude,longitude);
			//LatLong.push(longitude);
			//store LatLong in mainArray    
			LatLongList.push(LatLong);
		}

		for (var i = 0; i < jsonArray.length; i++) {
			//get a single jsonObject from the JsonFile
			var jsonObject = jsonArray[i];
			//get artistName from jsonObject
			var artistName = jsonObject.artists[0].name;
			
			//get venueinfo from jsonObject
			var time = jsonObject.datetime;
			var venueName = jsonObject.venue.name;
			var venueCity = jsonObject.venue.city;
			var venueCountry = jsonObject.venue.country;
			var venueRegion = jsonObject.venue.region; 
			var ticketStatus = jsonObject.ticket_status; 
			

			Info.push("Artist Name:"+ artistName);
			Info.push("Venue Name:"+ venueName);
			Info.push("Country:"+ venueCountry);
			Info.push("Region:"+ venueRegion);
			Info.push("Ticket Status:"+ ticketStatus);
			Info.push("Date & Time:"+ time);
			
		}

		//Print test
		for(var i = 0; i < LatLongList.length; i++){
			document.write(LatLongList[i] + "<br>");
			document.write(Info[i] + "<br>");
		}
	}
   
  });