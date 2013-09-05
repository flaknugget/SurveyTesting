// JavaScript Document

	var gaPlugin;      
			
			

			
		
		
		
			
// Functions to track specific button clicks	
/* window.top.enMenuTravelClick(); */

/* Button Clicks to be Tracked followed by their unique function name.

English - Main Menu - Hotel Lobby (travel)								enMenuTravelClick
English - Hotel Lobby (travel) - Best Practices							enTravelBestPracticesClick			
English - Hotel Lobby (travel) - Best Practices - IT Practicioners		enTravelBestPracticeITPractionersClick
English - Hotel Lobby (travel) - Best Practices - Managers				enTravelPracticeManagersClick
English - Hotel Lobby (travel) - Best Practices - General Public		enTravelPracticeGeneralPublicClick

English - Main Menu - Airport (Wi-Fi)									enMenuWifiClick
English - Airport (Wi-Fi) - Best Practices								enWifiClickBestPracticeClick
English - Airport (Wi-Fi) - Best Practices - IT Practicioners			enWifiClickBestPracticeITPractionersClick
English - Airport (Wi-Fi) - Best Practices - Managers					enWifiClickBestPracticeManagersClick
English - Airport (Wi-Fi) - Best Practices - General Public				enWifiClickBestPracticeGeneralPublicClick

English - Main Menu - Café (Social Media)								enMenuSocialMediaClick
English - Café (Social Media) - Best Practices							enSocialMediaBestPracticeClick
English - Café (Social Media) - Best Practices - IT Practicioners		enSocialMediaBestPracticeITPractionersClick
English - Café (Social Media) - Best Practices - Managers				enSocialMediaBestPracticeManagersClick
English - Café (Social Media) - Best Practices - General Public			enSocialMediaBestPracticeGeneralPublicClick

English - Main Menu - Survey								enMenuSurveyClick
English - Survey - Submit Button Click						enSurveySubmitClick

English - Main Menu - Quiz									enMenuQuizClick
English - Quiz - Quiz Finished								enQuizFinishedClick


French - Main Menu - Hotel Lobby (travel)								frMenuTravelClick
French - Hotel Lobby (travel) - Best Practices							frTravelBestPracticesClick			
French - Hotel Lobby (travel) - Best Practices - IT Practicioners		frTravelBestPracticeITPractionersClick
French - Hotel Lobby (travel) - Best Practices - Managers				frTravelPracticeManagersClick
French - Hotel Lobby (travel) - Best Practices - General Public			frTravelPracticeGeneralPublicClick

French - Main Menu - Airport (Wi-Fi)									frMenuWifiClick
French - Airport (Wi-Fi) - Best Practices								frWifiClickBestPracticeClick
French - Airport (Wi-Fi) - Best Practices - IT Practicioners			frWifiClickBestPracticeITPractionersClick
French - Airport (Wi-Fi) - Best Practices - Managers					frWifiClickBestPracticeManagersClick
French - Airport (Wi-Fi) - Best Practices - General Public				frWifiClickBestPracticeGeneralPublicClick

French - Main Menu - Café (Social Media)								frMenuSocialMediaClick
French - Café (Social Media) - Best Practices							frSocialMediaBestPracticeClick
French - Café (Social Media) - Best Practices - IT Practicioners		frSocialMediaBestPracticeITPractionersClick
French - Café (Social Media) - Best Practices - Managers				frSocialMediaBestPracticeManagersClick
French - Café (Social Media) - Best Practices - General Public			frSocialMediaBestPracticeGeneralPublicClick

French - Main Menu - Survey									frMenuSurveyClick
French - Survey - Submit Button Click						frSurveySubmitClick

French - Main Menu - Quiz									frMenuQuizClick
French - Quiz - Quiz Finished								frQuizFinishedClick

*/


			


			// Specific English Event Tracking Functions
			function enMenuTravelClick() {					
				gaPlugin.trackPage( nativePluginResultHandler, nativePluginErrorHandler, "English - Main Menu - Hotel Lobby (travel)");
			}
			function enTravelBestPracticesClick() {					
				gaPlugin.trackPage( nativePluginResultHandler, nativePluginErrorHandler, "English - Hotel Lobby (travel) - Best Practices");
			}
			function enTravelBestPracticeITPractionersClick() {					
				gaPlugin.trackPage( nativePluginResultHandler, nativePluginErrorHandler, "English - Hotel Lobby (travel) - Best Practices - IT Practicioners");
			}
			function enTravelPracticeManagersClick() {					
				gaPlugin.trackPage( nativePluginResultHandler, nativePluginErrorHandler, "English - Hotel Lobby (travel) - Best Practices - Managers");
			}
			function enTravelPracticeGeneralPublicClick() {					
				gaPlugin.trackPage( nativePluginResultHandler, nativePluginErrorHandler, "English - Hotel Lobby (travel) - Best Practices - General Public");
			}
			
			
			function enMenuWifiClick() {					
				gaPlugin.trackPage( nativePluginResultHandler, nativePluginErrorHandler, "English - Main Menu - Airport (Wi-Fi)");
			}
			function enWifiClickBestPracticeClick() {					
				gaPlugin.trackPage( nativePluginResultHandler, nativePluginErrorHandler, "English - Airport (Wi-Fi) - Best Practices");
			}
			function enWifiClickBestPracticeITPractionersClick() {					
				gaPlugin.trackPage( nativePluginResultHandler, nativePluginErrorHandler, "English - Airport (Wi-Fi) - Best Practices - IT Practicioners");
			}
			function enWifiClickBestPracticeManagersClick() {					
				gaPlugin.trackPage( nativePluginResultHandler, nativePluginErrorHandler, "English - Airport (Wi-Fi) - Best Practices - Managers");
			}
			function enWifiClickBestPracticeGeneralPublicClick() {					
				gaPlugin.trackPage( nativePluginResultHandler, nativePluginErrorHandler, "English - Airport (Wi-Fi) - Best Practices - General Public");
			}
			
			
			function enMenuSocialMediaClick() {					
				gaPlugin.trackPage( nativePluginResultHandler, nativePluginErrorHandler, "English - Main Menu - Café (Social Media)");
			}
			function enSocialMediaBestPracticeClick() {					
				gaPlugin.trackPage( nativePluginResultHandler, nativePluginErrorHandler, "English - Café (Social Media) - Best Practices");
			}
			function enSocialMediaBestPracticeITPractionersClick() {					
				gaPlugin.trackPage( nativePluginResultHandler, nativePluginErrorHandler, "English - Café (Social Media) - Best Practices - IT Practicioners");
			}
			function enSocialMediaBestPracticeManagersClick() {					
				gaPlugin.trackPage( nativePluginResultHandler, nativePluginErrorHandler, "English - Café (Social Media) - Best Practices - Managers");
			}
			function enSocialMediaBestPracticeGeneralPublicClick() {					
				gaPlugin.trackPage( nativePluginResultHandler, nativePluginErrorHandler, "English - Café (Social Media) - Best Practices - General Public");
			}
			
			
			function enMenuSurveyClick() {					
				gaPlugin.trackPage( nativePluginResultHandler, nativePluginErrorHandler, "English - Main Menu - Survey");
			}
			function enSurveySubmitClick() {					
				gaPlugin.trackPage( nativePluginResultHandler, nativePluginErrorHandler, "English - Survey - Submit Button Click");
			}
			function enMenuQuizClick() {					
				gaPlugin.trackPage( nativePluginResultHandler, nativePluginErrorHandler, "English - Main Menu - Quiz");
			}
			function enQuizFinishedClick() {					
				gaPlugin.trackPage( nativePluginResultHandler, nativePluginErrorHandler, "English - Quiz - Quiz Finished");
			}
			
			
			// Specific French Event Tracking Functions
			function frMenuTravelClick() {					
				gaPlugin.trackPage( nativePluginResultHandler, nativePluginErrorHandler, "French - Main Menu - Hotel Lobby (travel)");
			}
			function frTravelBestPracticesClick() {					
				gaPlugin.trackPage( nativePluginResultHandler, nativePluginErrorHandler, "French - Hotel Lobby (travel) - Best Practices");
			}
			function frTravelBestPracticeITPractionersClick() {					
				gaPlugin.trackPage( nativePluginResultHandler, nativePluginErrorHandler, "French - Hotel Lobby (travel) - Best Practices - IT Practicioners");
			}
			function frTravelPracticeManagersClick() {					
				gaPlugin.trackPage( nativePluginResultHandler, nativePluginErrorHandler, "French - Hotel Lobby (travel) - Best Practices - Managers");
			}
			function frTravelPracticeGeneralPublicClick() {					
				gaPlugin.trackPage( nativePluginResultHandler, nativePluginErrorHandler, "French - Hotel Lobby (travel) - Best Practices - General Public");
			}
			
			
			function frMenuWifiClick() {					
				gaPlugin.trackPage( nativePluginResultHandler, nativePluginErrorHandler, "French - Main Menu - Airport (Wi-Fi)");
			}
			function frWifiClickBestPracticeClick() {					
				gaPlugin.trackPage( nativePluginResultHandler, nativePluginErrorHandler, "French - Airport (Wi-Fi) - Best Practices");
			}
			function frWifiClickBestPracticeITPractionersClick() {					
				gaPlugin.trackPage( nativePluginResultHandler, nativePluginErrorHandler, "French - Airport (Wi-Fi) - Best Practices - IT Practicioners");
			}
			function frWifiClickBestPracticeManagersClick() {					
				gaPlugin.trackPage( nativePluginResultHandler, nativePluginErrorHandler, "French - Airport (Wi-Fi) - Best Practices - Managers");
			}
			function frWifiClickBestPracticeGeneralPublicClick() {					
				gaPlugin.trackPage( nativePluginResultHandler, nativePluginErrorHandler, "French - Airport (Wi-Fi) - Best Practices - General Public");
			}
			
			
			function frMenuSocialMediaClick() {					
				gaPlugin.trackPage( nativePluginResultHandler, nativePluginErrorHandler, "French - Main Menu - Café (Social Media)");
			}
			function frSocialMediaBestPracticeClick() {					
				gaPlugin.trackPage( nativePluginResultHandler, nativePluginErrorHandler, "French - Café (Social Media) - Best Practices");
			}
			function frSocialMediaBestPracticeITPractionersClick() {					
				gaPlugin.trackPage( nativePluginResultHandler, nativePluginErrorHandler, "French - Café (Social Media) - Best Practices - IT Practicioners");
			}
			function frSocialMediaBestPracticeManagersClick() {					
				gaPlugin.trackPage( nativePluginResultHandler, nativePluginErrorHandler, "French - Café (Social Media) - Best Practices - Managers");
			}
			function frSocialMediaBestPracticeGeneralPublicClick() {					
				gaPlugin.trackPage( nativePluginResultHandler, nativePluginErrorHandler, "French - Café (Social Media) - Best Practices - General Public");
			}
			
			
			function frMenuSurveyClick() {					
				gaPlugin.trackPage( nativePluginResultHandler, nativePluginErrorHandler, "French - Main Menu - Survey");
			}
			function frSurveySubmitClick() {					
				gaPlugin.trackPage( nativePluginResultHandler, nativePluginErrorHandler, "French - Survey - Submit Button Click");
			}
			function frMenuQuizClick() {					
				gaPlugin.trackPage( nativePluginResultHandler, nativePluginErrorHandler, "French - Main Menu - Quiz");
			}
			function frQuizFinishedClick() {					
				gaPlugin.trackPage( nativePluginResultHandler, nativePluginErrorHandler, "French - Quiz - Quiz Finished");
			}
			
			
// Page tracking functions
/*
Page - Language Select							LanguageSelectPage
English - Page - Main Menu						enMainMenuPage
English - Page - Hotel Lobby (travel)					enClickableTravelPage
English - Page - Airport (Wi-Fi)					enClickableWifiPage
English - Page - Café (Social Media)					enClickableSocialMediaPage
English - Page - Survey							enSurveyPage
English - Page - Survey	- Submit Thank You				enSurveyPageSubmitThankyou
English - Page - Quiz							enQuizPage
English - Page - Quiz - Submit Thank You				enQuizPageSubmitThankyou
English - Page - Services						enServicesPage


French - Page - Main Menu						frMainMenuPage
French - Page - Hotel Lobby (travel)					frClickableTravelPage
French - Page - Airport (Wi-Fi)						frClickableWifiPage
French - Page - Café (Social Media)					frClickableSocialMediaPage
French - Page - Survey							frSurveyPage
French - Page - Survey	- Submit Thank You				frSurveyPageSubmitThankyou
French - Page - Quiz							frQuizPage
French - Page - Quiz - Submit Thank You					frQuizPageSubmitThankyou
French - Page - Services						frServicesPage
*/
			

			function LanguageSelectPage() {			
				gaPlugin.trackPage( nativePluginResultHandler, nativePluginErrorHandler, "Page - Language Select");
			}
			
			//English Pages
			function enMainMenuPage() {			
				gaPlugin.trackPage( nativePluginResultHandler, nativePluginErrorHandler, "English - Page - Main Menu");
			}
			function enClickableTravelPage() {			
				gaPlugin.trackPage( nativePluginResultHandler, nativePluginErrorHandler, "English - Page - Hotel Lobby (travel)");
			}
			function enClickableWifiPage() {			
				gaPlugin.trackPage( nativePluginResultHandler, nativePluginErrorHandler, "English - Page - Airport (Wi-Fi)");
			}
			function enClickableSocialMediaPage() {			
				gaPlugin.trackPage( nativePluginResultHandler, nativePluginErrorHandler, "English - Page - Café (Social Media)");
			}
			function enSurveyPage() {			
				gaPlugin.trackPage( nativePluginResultHandler, nativePluginErrorHandler, "English - Page - Survey");
			}
			function enSurveyPageSubmitThankyou() {			
				gaPlugin.trackPage( nativePluginResultHandler, nativePluginErrorHandler, "English - Page - Survey	- Submit Thank You");
			}
			function enQuizPage() {			
				gaPlugin.trackPage( nativePluginResultHandler, nativePluginErrorHandler, "English - Page - Quiz");
			}
			function enQuizPageSubmitThankyou() {			
				gaPlugin.trackPage( nativePluginResultHandler, nativePluginErrorHandler, "English - Page - Quiz - Submit Thank You");
			}
			function enServicesPage() {			
				gaPlugin.trackPage( nativePluginResultHandler, nativePluginErrorHandler, "English - Page - Services");
			}
			
			//French Pages
			function frMainMenuPage() {			
				gaPlugin.trackPage( nativePluginResultHandler, nativePluginErrorHandler, "French  - Page - Main Menu");
			}
			function frClickableTravelPage() {			
				gaPlugin.trackPage( nativePluginResultHandler, nativePluginErrorHandler, "French  - Page - Hotel Lobby (travel)");
			}
			function frClickableWifiPage() {			
				gaPlugin.trackPage( nativePluginResultHandler, nativePluginErrorHandler, "French  - Page - Airport (Wi-Fi)");
			}
			function frClickableSocialMediaPage() {			
				gaPlugin.trackPage( nativePluginResultHandler, nativePluginErrorHandler, "French  - Page - Café (Social Media)");
			}
			function frSurveyPage() {			
				gaPlugin.trackPage( nativePluginResultHandler, nativePluginErrorHandler, "French  - Page - Survey");
			}
			function frSurveyPageSubmitThankyou() {			
				gaPlugin.trackPage( nativePluginResultHandler, nativePluginErrorHandler, "French  - Page - Survey	- Submit Thank You");
			}
			function frQuizPage() {			
				gaPlugin.trackPage( nativePluginResultHandler, nativePluginErrorHandler, "French  - Page - Quiz");
			}
			function frQuizPageSubmitThankyou() {			
				gaPlugin.trackPage( nativePluginResultHandler, nativePluginErrorHandler, "French  - Page - Quiz - Submit Thank You");
			}
			function frServicesPage() {			
				gaPlugin.trackPage( nativePluginResultHandler, nativePluginErrorHandler, "French  - Page - Services");
			}
			
