
document.addEventListener("deviceready",onDeviceReadyNot,false);

function onDeviceReadyNot(){
	var push = PushNotification.init({ "android": {"senderID": "****"}});


	push.on('notification', function(data) {
		// data.message,
		// data.title,
		// data.count,
		// data.sound,
		// data.image,
		// data.additionalData
		//alert(data.title+" Message: " +data.message+"---"+ data.count+"----"+data.sound);
		 window.location.href = 'notification.html';

	});
}