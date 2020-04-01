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
			timer: 2500
			});
		}
		
		function error() {
			Swal.fire({
				position: 'top-end',
				icon: 'success',
				title: 'Перезагрузіть сторінку і попробуйте знову.',
				showConfirmButton: false,
				timer: 2500
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
	function slowScroll (id) {
		var offset = 0;
		$('html, body').animate ({
		  scrollTop: $(id).offset ().top - offset
		}, 800);
		return false;
	  }
	  $(document).ready(function(){
		//При нажатии на ссылку с классом poplight и href атрибута тега <a> с #
		 $('a.poplight[href*=\\#]').click(function() {
			 var popID = $(this).attr('rel'); //получаем имя окна, важно не забывать при добавлении новых менять имя в атрибуте rel ссылки
			 var popURL = $(this).attr('href'); //получаем размер из href атрибута ссылки
	  
		//запрос и переменные из href url
			 var query= popURL.split('?');
			 var dim= query[1].split('&');
			 var popWidth = dim[0].split('=')[1]; //первое значение строки запроса
	  
		//Добавляем к окну кнопку закрытия
			 $('#' + popID).fadeIn().css({ 'width': Number( popWidth ) }).prepend('<a href="#" title="Закрыть" class="close"></a>');
	  
		//Определяем маржу(запас) для выравнивания по центру (по вертикали и горизонтали) - мы добавляем 80 к высоте / ширине с учетом отступов + ширина рамки определённые в css
			 var popMargTop = ($('#' + popID).height() + 80) / 2;
			 var popMargLeft = ($('#' + popID).width() + 80) / 2;
	  
			 //Устанавливаем величину отступа
			 $('#' + popID).css({ 
				 'margin-top' : -popMargTop,
				 'margin-left' : -popMargLeft
			 });
			 //Добавляем полупрозрачный фон затемнения
			 $('body').append('<div id="fade"></div>'); //div контейнер будет прописан перед тегом </body>.
			 $('#fade').css({'filter' : 'alpha(opacity=80)'}).fadeIn(); //полупрозрачность слоя, фильтр для тупого IE
	  
			 return false;
		 });
		//Закрываем окно и фон затемнения
			 $(document).on('click', 'a.close, #fade', function() { //закрытие по клику вне окна, т.е. по фону...
			 $('#fade , .popup_block').fadeOut(function() {
			 $('#fade, a.close').remove();  //плавно исчезают 
		 });   
		 return false;    
		});  
	 });


	 $(function() {
		var selectedClass = "";
		$(".fil-cat").click(function(){ 
		selectedClass = $(this).attr("data-rel"); 
     $("#por_news").fadeTo(100, 0.1);
		$("#por_news div").not("."+selectedClass).fadeOut().removeClass('scale-anm');
    setTimeout(function() {
      $("."+selectedClass).fadeIn().addClass('scale-anm');
      $("#por_news").fadeTo(300, 1);
    }, 300); 
		
	});
});	