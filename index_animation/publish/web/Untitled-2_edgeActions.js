
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindSymbolAction(compId,symbolName,"creationComplete",function(sym,e){sym.getSymbol("s1").play();window['prevtop']=0;$(window).scroll(function(e){function gotoPlay(pos,compname){if(window['prevtop']<$(window).scrollTop()){if($(window).scrollTop()>pos){if(sym.getSymbol(compname).getPosition()!=sym.getSymbol(compname).getDuration())
sym.getSymbol(compname).play();}}else{if($(window).scrollTop()<pos+400){if(sym.getSymbol(compname).getPosition()>-1){sym.getSymbol(compname).playReverse();}}}}
gotoPlay(200,"s2");gotoPlay(700,"s3");gotoPlay(1200,"s4");window['prevtop']=$(window).scrollTop();});});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 's1'
(function(symbolName){})("s1");
//Edge symbol end:'s1'

//=========================================================

//Edge symbol: 's2'
(function(symbolName){})("s2");
//Edge symbol end:'s2'

//=========================================================

//Edge symbol: 's3'
(function(symbolName){})("s3");
//Edge symbol end:'s3'

//=========================================================

//Edge symbol: 's4'
(function(symbolName){})("s4");
//Edge symbol end:'s4'

//=========================================================

//Edge symbol: 's11'
(function(symbolName){})("s11");
//Edge symbol end:'s11'
})(jQuery,AdobeEdge,"EDGE-944249601");