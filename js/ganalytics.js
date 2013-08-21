// JavaScript Document

			var gaPlugin;      
			
			
			function nativePluginResultHandler (result) {
				alert("nativePluginResultHandler - "+result);
				//console.log("nativePluginResultHandler: "+result);

			}
			
			function nativePluginErrorHandler (error) {
				alert("nativePluginErrorHandler - "+error);
				//console.log('nativePluginErrorHandler: '+error);
			}
			
			
			
// Functions to track specific button clicks	

			function trackPageByTitle() {		
				var pageTitle = $(document).attr('title');			
				gaPlugin.trackPage( nativePluginResultHandler, nativePluginErrorHandler, pageTitle);
			}  
			
			
			function trackClickByTitle() {					
				gaPlugin.trackEvent( nativePluginResultHandler, nativePluginErrorHandler, window.buttonTitle, "Click", "event only", 1);
				alert(window.buttonTitle);
			}  
			
			
			function goingAway() {
				gaPlugin.exit(nativePluginResultHandler, nativePluginErrorHandler);
			}