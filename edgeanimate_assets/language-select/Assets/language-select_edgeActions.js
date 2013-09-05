
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",500,function(sym,e){});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'English'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Rectangle}","click",function(sym,e){window.open("../../../en_main-menu.html","contentContainer");});
//Edge binding end
})("en-btn");
//Edge symbol end:'en-btn'

//=========================================================

//Edge symbol: 'fr-btn'
(function(symbolName){})("fr-btn");
//Edge symbol end:'fr-btn'
})(jQuery,AdobeEdge,"EDGE-62071296");