function initMap() {
	var pos = {lat:49.868311,lng: 24.047712};
	var opt={
		center:pos,
		zoom: 16
		
	}
	var map = new google.maps.Map(document.getElementById("map"),opt);
	var marker = new google.maps.Marker({
		position:pos,
		map: map,
		title: 'MSLfurniture'

	});
	};


	$(document).ready(function() {

		//E-mail Ajax Send
		$("form").submit(function() { //Change
			var th = $(this);
			$.ajax({
				type: "POST",
				url: "mail.php", //Change
				data: th.serialize()
			}).done(function() {
				alert("Thank you!");
				setTimeout(function() {
					// Done Functions
					th.trigger("reset");
				}, 1000);
			});
			return false;
		});
	
	});