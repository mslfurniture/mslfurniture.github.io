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
		
		function success() {
		  form.reset();
		  button.style = "display: none ";
		  status.innerHTML = "Thanks!";
		}
	
		function error() {
		  status.innerHTML = "Oops! There was a problem.";
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



	  function setCursorPosition(pos, e) {
		e.focus();
		if (e.setSelectionRange) e.setSelectionRange(pos, pos);
		else if (e.createTextRange) {
		  var range = e.createTextRange();
		  range.collapse(true);
		  range.moveEnd("character", pos);
		  range.moveStart("character", pos);
		  range.select()
		}
	  }
	
	  function mask(e) {
		//console.log('mask',e);
		var matrix = this.placeholder,// .defaultValue
			i = 0,
			def = matrix.replace(/\D/g, ""),
			val = this.value.replace(/\D/g, "");
		def.length >= val.length && (val = def);
		matrix = matrix.replace(/[_\d]/g, function(a) {
		  return val.charAt(i++) || "_"
		});
		this.value = matrix;
		i = matrix.lastIndexOf(val.substr(-1));
		i < matrix.length && matrix != this.placeholder ? i++ : i = matrix.indexOf("_");
		setCursorPosition(i, this)
	  }
	  window.addEventListener("DOMContentLoaded", function() {
		var input = document.querySelector("#online_phone");
		input.addEventListener("input", mask, false);
		input.focus();
		setCursorPosition(3, input);
	  });