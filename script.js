
// mr RebootJeff jest autorem skryptu https://github.com/RebootJeff/myLearning/blob/master/odin.js.sketch_pad
var start = function(option){
	$('#grid_container').html("");

	var input = prompt('Wprowadź liczbę całkowitą od 1 do 128');

	if (input >= 1 && input <= 128){	// Sprawdź input
		var square_size = $('#grid_container').width()/input - 2;	// -2 dla marginesu

		for(var i = 1; i <= input; i++){ //pętle dla kolumn i wierszy
			for(var j = 1; j <= input; j++){
				$('#grid_container').append('<div class="grid_square"></div>');
			}
			$('#grid_container').append('<div class="new_row"></div>');
		}
		$('.grid_square').css('width',square_size); //css do nowopowstałych divs
		$('.grid_square').css('height',square_size);

		$('.grid_square').mouseenter(function(){ //funkcja z okazji najazdu myszy
			switch(option){ //wybierane przez onclick w indexie
				case 1:
					$(this).addClass('grid_square_lit');
					break;
				case 2:
					var currentOpacity = $(this).css('opacity');//color nie white ma 100% opacity
					if(currentOpacity > 0){
						$(this).css('opacity', currentOpacity - 0.1);
					}
					break;
				case 3:
				
					//animowane do 0% opacity(mętności!) w 100ms, potem z powrotem do 100% w 400ms
						
	
					$(this).fadeTo(100,0);
					$(this).mouseleave(function(){
						$(this).fadeTo(400,1);
					});
					break;
			}
		});
	}
	else{
		alert('od 1 do 128');
	}
}
