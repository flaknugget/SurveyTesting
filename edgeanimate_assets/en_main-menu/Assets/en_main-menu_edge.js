
(function($,Edge,compId){var _=null,y=true,n=false,x1='GothamBook',x77='rgb(0, 0, 0)',x3='2.0.1',e54='${_servicesIcon}',cl='clip',e25='${_scenarioIcon2}',x48='servicesIcon',x16='default',e31='${_servicesIcon_smb}',i='none',x21='rect(@@0@@px @@1@@px @@2@@px @@3@@px)',x98='Text2Copy2',x87='Rectangle2',e23='${_subIcon1}',e73='${_surveyIcon}',e63='${_quizIcon}',e101='${_Text2Copy2}',x51='212px',e29='${_subIcon2}',x100='subIcon1_label_smb',x95='Rectangle3',e72='${_Text3Copy2}',fs='font-size',ta='text-align',xc='rgba(0,0,0,1)',x82='100px',x74='624px',x92='subIcon2_label_smb',c='color',x76='Rectangle',zx='scaleX',x67='116px',x69='Text3Copy2',x53='servicesIcon_smb',qoq='easeOutQuad',x50='122px',x4='2.0.0',x71='surveyIcon_smb',p='px',x14='pointer',x41='199px',e26='${_surveyIcon_smb}',e24='${_Rectangle}',e46='${_scenarioIcon}',x65='surveyIcon',ql='linear',e27='${_subIcon3}',x90='Text2Copy',x88='rgba(38,34,98,1.00)',e64='${_Text3Copy}',x42='Text3',e86='${_Text2}',x83='Text2',a='Base State',x19='hidden',x12='rgba(255,255,255,1.00)',e45='${_Text3}',lf='left',x80='36px',x36='452px',x58='226px',x35='60px',bg='background-color',x55='quizIcon',x38='auto',tp='top',ov='overflow',zy='scaleY',t='transform',e94='${_Text2Copy}',x6='rgba(0,0,0,0)',e15='${_scenario_Btn}',g='image',x57='77px',x89='162px',x96='rgba(243,120,32,1.00)',x44='scenarioIcon_smb',e102='${_Rectangle3}',x='text',x97='443px',m='rect',x34='0px',x59='298px',h='height',e93='${_Rectangle2}',x60='Text3Copy',x11='rgba(255,0,255,1.00)',o='opacity',e22='${_subIcon3_label}',s='style',x79='161px',dt='Default Timeline',e18='${_Stage}',x5='2.0.1.268',x85='subIcon3_label_smb',x75='160px',x81='419px',x2='GothamMed',x78='rgba(11,148,68,1.00)',x17='rgba(255,255,255,1)',e30='${_quizIcon_smb}',x13='stage',l='normal',e32='${_mainmenuBackground}',x68='224px',po='center',e20='${_subIcon1_label_smb}',w='width',x37='390px',x33='scenarioIcon',e47='${symbolSelector}',e28='${_subIcon2_label_smb}',x62='quizIcon_smb',ff='font-family',x40='108px';var im='images/';var g49='servicesIcon.png',g10='subIcon3.png',g66='surveyIcon.png',g39='scenarioIcon.png',g9='subIcon2.png',g8='subIcon1.png',g56='quizIcon.png',g7='mainmenuBackground.jpg';var s52="OUR<br>SERVICES",s70="TAKE OUR <br>SURVEY",s91="CYBER SECURITY &amp;<br>SOCIAL MEDIA",s61="TAKE OUR QUIZ",s99="CYBER SECURITY &amp;<br>WIRELESS TECHNOLOGIES",s84="CYBER SECURITY &amp;<br>INTERNATIONAL TRAVEL",s43="EXPLORE 3<br>SCENARIOS";var fonts={};fonts[x1]='<style>@font-face {     font-family: GothamBook;    src: url(\'../../../fonts/GothamBook.otf\'); }</style>';fonts[x2]='<style>@font-face {     font-family: GothamMed;    src: url(\'../../../fonts/GothamMedium.otf\'); }</style>';var P=Edge.P,T=Edge.T,A=Edge.A;var resources=[];var symbols={"stage":{v:x3,mv:x4,b:x5,bS:a,iS:a,gpu:n,rI:n,cn:{dom:[{id:'mainmenuBackground',t:g,r:['-72px','-89px','1352px','803px','auto','auto'],f:[x6,im+g7,'0px','0px']},{id:'subIcon1_label_smb',t:m,r:['1606px','528px','auto','auto','auto','auto'],cl:['rect(0px 624pxpx 160pxpx 0px)'],cu:['pointer']},{id:'subIcon1',t:g,r:['737px','234px','92px','80px','auto','auto'],f:[x6,im+g8,'0px','0px']},{id:'subIcon2_label_smb',t:m,r:['1512','356px','auto','auto','auto','auto'],cl:['rect(0px 624pxpx 160pxpx 0px)'],tf:[]},{id:'subIcon2',t:g,r:['687px','184px','94px','80px','auto','auto'],f:[x6,im+g9,'0px','0px']},{id:'subIcon3_label',t:m,r:['1417px','186','auto','auto','auto','auto'],cl:['rect(0px 624pxpx 160pxpx 0px)']},{id:'subIcon3',t:g,r:['581px','31px','94px','80px','auto','auto'],f:[x6,im+g10,'0px','0px']},{id:'servicesIcon_smb',t:m,r:['583px','246px','auto','auto','auto','auto'],tf:[[],[],[],['0.46449','0.46449']]},{id:'quizIcon_smb',t:m,r:['411px','344px','auto','auto','auto','auto'],tf:[[],[],[],['0.46449','0.46449']]},{id:'surveyIcon_smb',t:m,r:['240px','246px','auto','auto','auto','auto'],tf:[[],[],[],['0.46449','0.46449']]},{id:'scenarioIcon2',t:m,r:['411px','145px','auto','auto','auto','auto'],tf:[[],[],[],['0.46449','0.46449']]},{id:'scenario_Btn',t:'ellipse',r:['548px','261px','179px','181px','auto','auto'],cu:['default'],br:["50%","50%","50%","50%"],f:[x11],s:[0,xc,i]},{id:'Rectangle',t:m,r:['-164px','-238px','3072px','1896px','auto','auto'],f:[x12],s:[0,xc,i]}],sI:[{id:'servicesIcon_smb',sN:'servicesIcon_smb'},{id:'scenarioIcon2',sN:'scenarioIcon_smb'},{id:'surveyIcon_smb',sN:'surveyIcon_smb'},{id:'quizIcon_smb',sN:'quizIcon_smb'},{id:'subIcon3_label',sN:'subIcon3_label_smb'},{id:'subIcon1_label_smb',sN:'subIcon1_label_smb'},{id:'subIcon2_label_smb',sN:'subIcon2_label_smb'}]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:2555,a:y,tt:[]}}},"scenarioIcon_smb":{v:x3,mv:x4,b:x5,bS:a,iS:a,gpu:n,rI:n,cn:{dom:[{id:x33,t:g,r:[x34,x35,x36,x37,x38,x38],f:[x6,im+g39,x34,x34]},{r:[x40,x41,x38,x38,x38,x38],n:[x2,40,x17,l,i,l],id:x42,text:s43,align:lf,t:x}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:0,a:n,tt:[]}}},"servicesIcon_smb":{v:x3,mv:x4,b:x5,bS:a,iS:a,gpu:n,rI:n,cn:{dom:[{id:x48,t:g,r:[x34,x35,x36,x37,x38,x38],f:[x6,im+g49,x34,x34]},{t:x,r:[x50,x51,x38,x38,x38,x38],id:x42,text:s52,align:po,n:[x2,40,x17,l,i,l]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:0,a:n,tt:[]}}},"quizIcon_smb":{v:x3,mv:x4,b:x5,bS:a,iS:a,gpu:n,rI:n,cn:{dom:[{id:x55,t:g,r:[x34,x35,x36,x37,x38,x38],f:[x6,im+g56,x34,x34]},{t:x,r:[x57,x58,x59,x38,x38,x38],id:x60,text:s61,align:po,n:[x2,40,x17,l,i,l]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:0,a:n,tt:[]}}},"surveyIcon_smb":{v:x3,mv:x4,b:x5,bS:a,iS:a,gpu:n,rI:n,cn:{dom:[{id:x65,t:g,r:[x34,x35,x36,x37,x38,x38],f:[x6,im+g66,x34,x34]},{r:[x67,x68,x38,x38,x38,x38],n:[x2,40,x17,l,i,l],id:x69,text:s70,align:po,t:x}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:0,a:n,tt:[]}}},"subIcon3_label_smb":{v:x3,mv:x4,b:x5,bS:a,iS:a,gpu:n,rI:n,cn:{dom:[{r:[x34,x34,x74,x75,x38,x38],o:0.85,id:x76,s:[0,x77,i],t:m,f:[x78]},{t:x,r:[x79,x80,x81,x82,x38,x38],id:x83,text:s84,align:lf,n:[x2,30,x17,l,i,l]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:0,a:n,tt:[]}}},"subIcon2_label_smb":{v:x3,mv:x4,b:x5,bS:a,iS:a,gpu:n,rI:n,cn:{dom:[{r:[x34,x34,x74,x75,x38,x38],o:0.85,id:x87,s:[0,x77,i],t:m,f:[x88]},{t:x,r:[x89,x80,x81,x82,x38,x38],id:x90,text:s91,align:lf,n:[x2,30,x17,l,i,l]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:0,a:y,tt:[]}}},"subIcon1_label_smb":{v:x3,mv:x4,b:x5,bS:a,iS:a,gpu:n,rI:n,cn:{dom:[{r:[x34,x34,x74,x75,x38,x38],o:0.85,id:x95,s:[0,x77,i],t:m,f:[x96]},{r:[x89,x80,x97,x82,x38,x38],n:[x2,30,x17,l,i,l],id:x98,text:s99,align:lf,t:x}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:0,a:n,tt:[]}}}};var S1=symbols[x13];var tl0=S1.tl[dt].tt,st1=S1.s[a]={},A1=A(_,tl0,st1);A1.A(e15).P(tp,261).P(bg,x11,c).P("cursor",x16).P(h,181).P(o,0,_,_,"").P(lf,548,_,_,p).P(w,179);A1.A(e18).P(bg,x17,c).P(w,1280).P(h,683).P(ov,x19);A1.A(e20).P(tp,228).P(zy,0.49989,t,_,"").P(zx,0.49989,t).P(lf,612,_,_,p).P("cursor",x14).P(cl,[0,0,160,0],_,x21).T(1.827,[0,624,160,0],0.403,qoq);A1.A(e22).P(tp,60).P(zy,0.49989,t,_,"").P(zx,0.49989,t).P(lf,518,_,_,p).P(cl,[0,0,160,0],_,x21).T(1.276,[0,624,160,0],0.403,qoq);A1.A(e23).P(h,80).P(w,92).P(tp,313).T(1.552,268,0.276,qoq).P(lf,591).T(1.552,735,0.276);A1.A(e24).P(bg,x12,c).P(tp,-238).T(0.656,-158,0.094,qoq).P(o,1,_,_,"").T(0,0,0.656).P(lf,-164,_,_,p).T(0.656,-3132,0.094);A1.A(e25).P(zx,0.46449,t,_,"").P(lf,411,_,_,p).P(zy,0.46449,t,_,"").P(tp,119,_,_,p).T(0.75,158,0.25,qoq);A1.A(e26).P("filter.grayscale",0,"subproperty",_,"").P(zy,0.46449,t).P(zx,0.46449,t).P(lf,240,_,_,p).P(tp,220).T(0.75,259,0.25,qoq);A1.A(e27).P(h,80).P(w,94).P(tp,323).T(1,100,0.276,qoq).P(lf,593).T(1,641,0.276);A1.A(e28).P(tp,144).P(zy,0.49989,t,_,"").P(zx,0.49989,t).P(o,1).P(lf,564,_,_,p).P(cl,[0,0,160,0],_,x21).T(1.552,[0,624,160,0],0.403,qoq);A1.A(e29).P(h,80).P(w,94).P(tp,323).T(1.276,184,0.276,qoq).P(lf,590).T(1.276,687,0.276);A1.A(e30).P("filter.grayscale",0,"subproperty",_,"").P(zy,0.46449,t).P(zx,0.46449,t).P(lf,411,_,_,p).P(tp,318).T(0.75,357,0.25,qoq);A1.A(e31).P("filter.grayscale",0,"subproperty",_,"").P(zy,0.46449,t).P(zx,0.46449,t).P(lf,583,_,_,p).P(tp,220).T(0.75,259,0.25,qoq);A1.A(e32).P(ov,x19).P(h,760).T(2.555,760).P(tp,-115).T(0.75,-76,0.25,qoq).T(1,-33,1.555,ql).P(lf,0).T(2.555,0).P(w,1280).T(2.555,1280);var S2=symbols[x44];var tl1=S2.tl[dt].tt,st2=S2.s[a]={},A2=A(_,tl1,st2);A2.A(e45).P("line-height",56).P(tp,199).P(lf,108).P(fs,40);A2.A(e46).P(lf,0).P(tp,0);A2.A(e47).P(h,390).P(w,452);var S3=symbols[x53];var tl2=S3.tl[dt].tt,st3=S3.s[a]={},A3=A(_,tl2,st3);A3.A(e45).P("line-height",56).P(ta,po).P(tp,212).P(lf,122).P(fs,40);A3.A(e54).P(lf,0).P(tp,0);A3.A(e47).P(h,390).P(w,452);var S4=symbols[x62];var tl3=S4.tl[dt].tt,st4=S4.s[a]={},A4=A(_,tl3,st4);A4.A(e63).P(tp,0).P(lf,0);A4.A(e64).P(tp,226).P(ta,po).P(fs,40).P("line-height",56).P(lf,77).P(w,298);A4.A(e47).P(h,390).P(w,452);var S5=symbols[x71];var tl4=S5.tl[dt].tt,st5=S5.s[a]={},A5=A(_,tl4,st5);A5.A(e72).P(tp,224).P(ta,po).P("line-height",56).P(lf,116).P(fs,40);A5.A(e73).P(lf,0).P(tp,0);A5.A(e47).P(h,390).P(w,452);var S6=symbols[x85];var tl5=S6.tl[dt].tt,st6=S6.s[a]={},A6=A(_,tl5,st6);A6.A(e24).P(bg,x78,c).P(tp,0).P(o,0.85,_,_,"").P(lf,0,_,_,p).P(w,624);A6.A(e86).P(tp,36).P("line-height",45).P(h,100).P(ff,x2).P(lf,161).P(w,419);A6.A(e47).P(h,160).P(w,624);var S7=symbols[x92];var tl6=S7.tl[dt].tt,st7=S7.s[a]={},A7=A(_,tl6,st7);A7.A(e93).P(tp,0).P(bg,x88,c).P(h,160).P(o,0.85,_,_,"").P(lf,0,_,_,p).P(w,624);A7.A(e94).P(tp,36).P("line-height",45).P(h,100).P(ff,x2).P(lf,162).P(w,419);A7.A(e47).P(h,160).P(w,624);var S8=symbols[x100];var tl7=S8.tl[dt].tt,st8=S8.s[a]={},A8=A(_,tl7,st8);A8.A(e101).P(tp,36).P("line-height",45).P(h,100).P(ff,x2).P(lf,162).P(w,443);A8.A(e102).P(tp,0).P(bg,x96,c).P(o,0.85,_,_,"").P(lf,0,_,_,p).P(w,624);A8.A(e47).P(h,160).P(w,624);Edge.registerCompositionDefn(compId,symbols,fonts,resources);$(window).ready(function(){Edge.launchComposition(compId);});})(jQuery,AdobeEdge,"EDGE-2548275");