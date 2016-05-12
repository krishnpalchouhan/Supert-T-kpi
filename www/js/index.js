/////////////////////////////////////ios code//////////////////
/*
var token;
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        
        var push = PushNotification.init({
                             "android": {
                             "senderID": "781247844618"
                             },
                             "ios": {
                             "alert": "true",
                             "badge": "true",
                             "sound": "true"
                             }
                         });
        
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        setTimeout(checkToken,500);
        console.log('Received Event: ' + id);
    }
};


function checkToken() {
    cordova.exec(function(message) {
                 token = message.token;
                 if (token.length == 0) {
                    setTimeout(checkToken,120);
                    return;
                 }
                 window.localStorage.setItem("player_id",token);
                 },null,'GetToken','getToken',null);
}

app.initialize();*/
/////////////////////////////////////ios code//////////////////

//window.location = "dashbord.html";		
		// Add to index.js or the first page that loads with your app.
			// For Intel XDK and please add this to your app.js.

			document.addEventListener('deviceready', function () {
	
			// Enable to debug issues.
			// window.plugins.OneSignal.setLogLevel({logLevel: 4, visualLevel: 4});
			  var notificationOpenedCallback = function(jsonData) {
				console.log('didReceiveRemoteNotificationCallBack: ' + JSON.stringify(jsonData));
			
			  };

			  window.plugins.OneSignal.init("54a45a1c-c6cc-491c-b963-aa4dcc8f6abd",
											 {googleProjectNumber: "977668981273"},
											 notificationOpenedCallback);
			  	
			  // Show an alert box if a notification comes in when the user is in your app.
				window.plugins.OneSignal.enableInAppAlertNotification(true);
				window.plugins.OneSignal.getIds(function(ids) {
				alert(ids.userId);
				window.localStorage.setItem("player_id",ids.userId );
				//window.location = "dashbord.html";
				//document.getElementById("OneSignalPushToken").innerHTML = "PushToken: " + ids.pushToken;
				 // console.log('getIds: ' + JSON.stringify(ids));
				});
			  window.plugins.OneSignal.getIds();
                while(ids.userId==""){
                    window.location = "index.html";
                }
			
			}, false); 