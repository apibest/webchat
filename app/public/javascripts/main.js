

$('#login').change(function () {
	var $this = $(this);
	
	localStorage.setItem('login', $this.val());
});

$('#userLogin').text(localStorage.getItem('login'));

if(location.pathname === '/chat') {
	var socket = io();
	
	socket.on('message', function (data) {
                var obj = JSON.parse(data);
		
		$('.chat-history').append('<li class="clearfix"><div class="chat-message"><b>' + obj.login + '</b><p>' + obj.message + '</p></div></li>');
	});
	
	$('#send').click(function (e) {
		e.preventDefault();
var msg = $('#message').val();
		socket.emit('message', JSON.stringify({
			message:msg,
			login: localStorage.getItem('login')
		}));
		
		$('.chat-history').append('<li class="clearfix"><div class="chat-message message-your"><b>' + localStorage.getItem('login') + '</b><p>' + $('#message').val() + '</p></div></li>');
		
		$('#message').val('');
		return false;
	});
};
