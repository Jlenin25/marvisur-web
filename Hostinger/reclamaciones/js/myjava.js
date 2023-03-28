/*
$(function(){
	
	$('#ingresar').on('click',function(){
		var usu = $('#usu').val();
		var pass = $('#pass').val();
		var area = $('#area').val();
		var url = 'procesar_login.php';
		var total = usu.length * pass.length * area.length;
		if (total>0){
			$.ajax({
				type: 'POST',
				url: url,
				data: 'usu='+usu+'&pass='+pass+'&area='+area,
				success: function(valor){
					if(valor == 'usuario'){
						$('#mensaje').addClass('error').html('El usuario ingresado no existe').show(300).delay(3000).hide(300);
						$('#usu').focus();
						return false;
					}else if(valor == 'area'){
						$('#mensaje').addClass('error').html('Usted no pertenece al area seleccionada').show(300).delay(3000).hide(300);
						$('#area').focus();
						return false;
					}else if(valor == 'password'){
						$('#mensaje').addClass('error').html('Su password es incorrecto').show(300).delay(3000).hide(300);
						$('#pass').focus();
						return false;
					}else if(valor == 'admin'){
						document.location.href = 'inicio_2.php';
					}else if(valor == 'user'){
						document.location.href = 'inicio.php';
					}
				}
			});
			return false;
		}else{
			$('#mensaje').addClass('error').html('Complete todos los campos').show(300).delay(3000).hide(300);
		}
	});
	
});

pruebas*/

/*Dropdown Menu*/
$('.dropdown').click(function () {
	$(this).attr('tabindex', 1).focus();
	$(this).toggleClass('active');
	$(this).find('.dropdown-menu').slideToggle(300);
});
$('.dropdown').focusout(function () {
	$(this).removeClass('active');
	$(this).find('.dropdown-menu').slideUp(300);
});
$('.dropdown .dropdown-menu li').click(function () {
	$(this).parents('.dropdown').find('span').text($(this).text());
	$(this).parents('.dropdown').find('input').attr('value', $(this).attr('id'));
});
/*End Dropdown Menu*/


$('.dropdown-menu li').click(function () {
var input = '<strong>' + $(this).parents('.dropdown').find('input').val() + '</strong>',
  msg = '<span class="msg">Hidden input value: ';
$('.msg').html(msg + input + '</span>');
}); 


var checkAge = (e) => {
    if(document.querySelector('#sucursal').value == 0){

        // Preventing the submit of the form
        e.preventDefault();
        
        // Displaying the modal window
        alert("Debe seleccionar una Sucursal!!!!!");
		document.getElementsByClassName("dropdown").focus();
    }
};

// Listening to the click event on the button
document.querySelector('button').addEventListener('click', checkAge);