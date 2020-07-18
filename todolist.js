$(function() {

	function toDo(title, description) {
		if($('#emptylist-text').css('display') === 'block'){
			$('#emptylist-text').css('display', 'none');
		}
		var container = $('<div class="todo-container"><p class="todo-title">' + title + 
			'</p><button class="todo-delete"><i class="fas fa-times"></i></button><div class="todo-description">' 
			+ description + '</div></div>');

		container.insertAfter('#todolisttitle');

		$('.todo-delete', container).on('click', function() {
			$(this).parent().remove();
			i--;
			console.log(i);
			if(i < 1) {
				$('#emptylist-text').css('display', 'block');
			}
		});
	}

	var i = 0;

	$('#addbutton').on('click', function() {
		var title = $('#addtitle').val();
		var description = $('#addtext').val();
		if(title != 0 && description != 0) {
			toDo(title, description);
			$('#addtitle').val('');
			$('#addtext').val('');
			i++;
			console.log(i);
		}
	});

	

});