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


	window.addEventListener("DOMContentLoaded", function() {

		// get the form elements defined in your form HTML above
		
		var form = document.getElementById("my-form");
		var button = document.getElementById("my-form-button");
		var status = document.getElementById("my-form-status");
		
		
		// Success and Error functions for after the form is submitted
		button.addEventListener('click',function(){
		function success() {
		  form.reset();
		  button.style = "display: none ";
		  Swal.fire({
			position: 'top-end',
			icon: 'success',
			title: 'Дякуємо за Ваше повідомлення. Воно було відправлено.',
			showConfirmButton: false,
			timer: 1500
			});
		}
		
		function error() {
			Swal.fire({
				position: 'top-end',
				icon: 'success',
				title: 'Перезагрузіть сторінку і попробуйте знову.',
				showConfirmButton: false,
				timer: 1500
			});	
		}
		
		// handle the form submission event
		
		form.addEventListener("submit", function(ev) {
		  ev.preventDefault();
		  var data = new FormData(form);
		  
		  ajax(form.method, form.action, data, success, error);
		});
		});
	
		
		// helper function for sending an AJAX request
		
		function ajax(method, url, data, success, error) {
		var xhr = new XMLHttpRequest();
		xhr.open(method, url);
		xhr.setRequestHeader("Accept", "application/json");
		xhr.onreadystatechange = function() {
		  if (xhr.readyState !== XMLHttpRequest.DONE) return;
		  if (xhr.status === 200) {
			success(xhr.response, xhr.responseType);
		  } else {
			error(xhr.status, xhr.response, xhr.responseType);
		  }
		};
		xhr.send(data);
		}
	});