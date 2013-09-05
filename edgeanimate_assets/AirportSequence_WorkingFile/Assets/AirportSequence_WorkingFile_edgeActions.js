
var iconSelect="none";var deviceTheft_clicked="false";var cyberCrime_clicked="false";var ppUse_clicked="false";var unsecureData_clicked="false";var beAware_clicked="false";var trustConnection_clicked="false";(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1500,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",750,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_beginBtn_icon}","click",function(sym,e){sym.play();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2250,function(sym,e){if(iconSelect=="unsecureData"){sym.play("scene1_unsecureData");sym.$("scene1_text1").html("When possible, use a Virtual Private Network (VPN) to secure your browsing.  Talk to your IT Department if you travel frequently.");sym.$("scene1_text2").html("Without encryption, others can <span style='font-family: GothamMedium;'>access your unsecured public network</span> and <span style='font-family: GothamMedium;'>access data traveling through it.</span> Use Virtual Private Networks (VPNs) to secure browsing sessions.");}else if(iconSelect=="deviceTheft"){sym.play("scene2_deviceTheft");sym.$("scene1_text1").html("Keep your device on you at all times to prevent theft and loss and to protect the confidentiality of information stored on the device.  Minimize the amount of information you store on the device and <span style='font-family: GothamMedium;'>always use passwords.</span>");sym.$("scene1_text2").html("<span style='font-family: GothamMedium;'>Avoid leaving devices in checked baggage.</span> If you must leave your devices unattended, remove power sources, hard drives, and SIM cards (when applicable) and keep them with you.");}else if(iconSelect=="cyberCrime"){sym.play("scene3_cyberCrime");sym.$("scene1_text1").html("Cyber crime is on the rise.  Carefully safeguard your personal information and financial information while traveling.");sym.$("scene1_text2").html("Cyber crime has shown double-digit growth year after year.");sym.$("scene1_text3").html("Every second, <span style='font-size:30px;'>18</span> adults become victims of a cyber crime incident. ");sym.$("scene1_text4").html("Protect your information and understand that online banking and other important tasks <span style='font-family: GothamMedium;'>should not be conducted on WiFi connections.</span>");}else if(iconSelect=="ppUse"){sym.play("scene4_ppUse");sym.$("scene1_text1").html("Always use caution when using unknown networks.");sym.$("scene1_text2").html("Paying for a network doesn’t mean it is safe. Many paid networks are <span style='font-family: GothamMedium;'>unencrypted</span> and are accessed by <span style='font-family: GothamMedium;'>multiple people.</span> Keep your device secure by <span style='font-family: GothamMedium;'>avoiding untrusted network connections.</span>");}else if(iconSelect=="beAware"){sym.play("scene5_beAware");sym.$("scene1_text1").html("Shoulder surfing is a term used to describe the activity of physical lurking with the intent of gathering information by watching your login screen and/or copying your keystrokes.</br></br>An intruder can simply...");sym.$("scene1_text2").html("...to obtain access to sensitive information (i.e. passwords). With cellphones and smartphones in use everywhere, <span style='font-family: GothamMedium;'>thieves can snap pictures of credit cards</span> or <span style='font-family: GothamMedium;'>record entire conversations.</span>");}else if(iconSelect=="trustConnection"){sym.play("scene6_trustConnection");sym.$("scene1_text1").html("Encryption protects the  confidentiality of data.  If you are using an unencrypted connection, your information is open for all to see. </br></br>Encryption transforms...");sym.$("scene1_text2").html("Without encryption, your online activities are <span style='font-family: GothamMedium;'>open for all to see.</span>");}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_wifi_icon_smb}","click",function(sym,e){var touchPoint=sym.getSymbol("wifi_icon_smb");touchPoint.play(1);iconSelect="ppUse";sym.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_laptop_icon_smb}","click",function(sym,e){var touchPoint=sym.getSymbol("laptop_icon_smb");touchPoint.play(1);iconSelect="deviceTheft";sym.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_atom_icon_smb}","click",function(sym,e){var touchPoint=sym.getSymbol("atom_icon_smb");touchPoint.play(1);iconSelect="unsecureData";sym.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_unlock_icon_smb}","click",function(sym,e){var touchPoint=sym.getSymbol("unlock_icon_smb");touchPoint.play(1);iconSelect="trustConnection";sym.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_finder_icon_smb}","click",function(sym,e){var touchPoint=sym.getSymbol("finder_icon_smb");touchPoint.play(1);iconSelect="cyberCrime";sym.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_eyeGlass_icon_smb}","click",function(sym,e){var touchPoint=sym.getSymbol("eyeGlass_icon_smb");touchPoint.play(1);iconSelect="beAware"
sym.play();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",3000,function(sym,e){});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",4250,function(sym,e){sym.stop();unsecureData_clicked="true";});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_sceneExit_btn_smb}","click",function(sym,e){iconSelect="none";sym.play("BtnScreen");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1112,function(sym,e){if(unsecureData_clicked=="true"){var atomSymbol=sym.getSymbol("atom_icon_smb");atomSymbol.play("clicked");}
if(deviceTheft_clicked=="true"){var compSymbol=sym.getSymbol("laptop_icon_smb");compSymbol.play("clicked");}
if(ppUse_clicked=="true"){var wifiSymbol=sym.getSymbol("wifi_icon_smb");wifiSymbol.play("clicked");}
if(beAware_clicked=="true"){var eyeGlassSymb=sym.getSymbol("eyeGlass_icon_smb");eyeGlassSymb.play("clicked");}
if(trustConnection_clicked=="true"){var lockSymbol=sym.getSymbol("unlock_icon_smb");lockSymbol.play("clicked");}
if(cyberCrime_clicked=="true"){var finderSymbol=sym.getSymbol("finder_icon_smb");finderSymbol.play("clicked");}
if(cyberCrime_clicked=="true"&&trustConnection_clicked=="true"&&beAware_clicked=="true"&&ppUse_clicked=="true"&&deviceTheft_clicked=="true"&&unsecureData_clicked=="true"){sym.play("bestPractices");}});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",6250,function(sym,e){sym.stop();deviceTheft_clicked="true";});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",8177,function(sym,e){sym.stop();ppUse_clicked="true";});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",10217,function(sym,e){sym.stop();cyberCrime_clicked="true";});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",12427,function(sym,e){sym.stop();beAware_clicked="true";});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",14733,function(sym,e){sym.stop();trustConnection_clicked="true";});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",17222,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",18684,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_BP_IT_group}","click",function(sym,e){sym.play("BP_ITPract");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_BP}","click",function(sym,e){sym.play("bestPractices");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_exit_icon_group}","click",function(sym,e){window.open("../../../en_main-menu.html","contentContainer");});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'eyeGlass_icon_smb'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",250,function(sym,e){sym.stop();});
//Edge binding end
})("eyeGlass_icon_smb");
//Edge symbol end:'eyeGlass_icon_smb'

//=========================================================

//Edge symbol: 'unlock_icon_smb'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",250,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
})("unlock_icon_smb");
//Edge symbol end:'unlock_icon_smb'

//=========================================================

//Edge symbol: 'atom_icon_smb'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",250,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
})("atom_icon_smb");
//Edge symbol end:'atom_icon_smb'

//=========================================================

//Edge symbol: 'wifi_icon_smb'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",250,function(sym,e){sym.stop();});
//Edge binding end
})("wifi_icon_smb");
//Edge symbol end:'wifi_icon_smb'

//=========================================================

//Edge symbol: 'laptop_icon_smb'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",250,function(sym,e){sym.stop();});
//Edge binding end
})("laptop_icon_smb");
//Edge symbol end:'laptop_icon_smb'

//=========================================================

//Edge symbol: 'finder_icon_smb'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",250,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
})("finder_icon_smb");
//Edge symbol end:'finder_icon_smb'

//=========================================================

//Edge symbol: 'sceneExit_btn_smb'
(function(symbolName){})("sceneExit_btn_smb");
//Edge symbol end:'sceneExit_btn_smb'
})(jQuery,AdobeEdge,"EDGE-21219353");