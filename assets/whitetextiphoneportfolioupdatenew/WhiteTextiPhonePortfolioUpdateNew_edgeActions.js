
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"document","compositionReady",function(sym,e){$("#Stage").css("margin","auto")});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_lock-slider}","swiperight",function(sym,e){sym.play();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1250,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_lock-slider}","click",function(sym,e){sym.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Ellipse5}","click",function(sym,e){sym.stop(1);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_lock-slider}","mouseover",function(sym,e){sym.play()});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1000,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_RoundRectCopy}","click",function(sym,e){sym.play("PHOTONAV");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_RoundRectCopy2}","click",function(sym,e){sym.stop("HERO");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Text3}","click",function(sym,e){sym.stop("HERO");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Text3Copy2}","click",function(sym,e){sym.stop("PHOTONAV");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_RoundRectCopy3}","click",function(sym,e){sym.play("DROP");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Text3Copy3}","click",function(sym,e){sym.play("DROP");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1500,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2250,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_RoundRectCopy5}","click",function(sym,e){sym.play("RAINBOW");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Text3Copy5}","click",function(sym,e){sym.play("RAINBOW");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1750,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2000,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_COLORSTRIPE}","click",function(sym,e){sym.$("Text9").html("1");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_COLORSTRIPE_2}","click",function(sym,e){sym.$("Text9").html("2");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_COLORSTRIPE_5}","click",function(sym,e){sym.$("Text9").html("3");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_COLORSTRIPE_4}","click",function(sym,e){sym.$("Text9").html("4");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_COLORSTRIPE_3}","click",function(sym,e){sym.$("Text9").html("5");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_COLORSTRIPE_62}","click",function(sym,e){sym.$("Text9").html("6");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_COLORSTRIPE_72}","click",function(sym,e){sym.$("Text9").html("7");});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'Symbol_1'
(function(symbolName){})("Symbol_1");
//Edge symbol end:'Symbol_1'

//=========================================================

//Edge symbol: 'TouchToOpen'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.play();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1000,function(sym,e){sym.playReverse();});
//Edge binding end
})("TouchToOpen");
//Edge symbol end:'TouchToOpen'

//=========================================================

//Edge symbol: 'Preloader'
(function(symbolName){})("Preloader");
//Edge symbol end:'Preloader'

//=========================================================

//Edge symbol: 'BUTTONBOXPANDER'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Group4}","click",function(sym,e){sym.play("toggleOn")});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Group4Copy}","click",function(sym,e){sym.playReverse();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",872,function(sym,e){});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Group4}","swiperight",function(sym,e){sym.play("toggleOn")});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Group4Copy}","swipeleft",function(sym,e){sym.playReverse();});
//Edge binding end
})("BUTTONBOXPANDER");
//Edge symbol end:'BUTTONBOXPANDER'

//=========================================================

//Edge symbol: 'WHAT'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",500,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Group6}","mouseover",function(sym,e){sym.play("DROPCLIK");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Group6}","mouseout",function(sym,e){sym.playReverse();});
//Edge binding end
})("WHAT");
//Edge symbol end:'WHAT'

//=========================================================

//Edge symbol: 'WHAT_1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",500,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Group6}","mouseup",function(sym,e){sym.playReverse();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Group6}","mousedown",function(sym,e){sym.play("DROPCLIK");});
//Edge binding end
})("WHAT_1");
//Edge symbol end:'WHAT_1'

//=========================================================

//Edge symbol: 'WHAT_2'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",750,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Rectangle}","mousedown",function(sym,e){sym.play("DROPCLIK");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Rectangle}","mouseup",function(sym,e){sym.playReverse();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_TextCopy}","mousedown",function(sym,e){sym.play("DROPCLIK");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_TextCopy}","mouseup",function(sym,e){sym.playReverse();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_RectangleCopy}","mousedown",function(sym,e){sym.play("DROPCLIK");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_RectangleCopy}","mouseup",function(sym,e){sym.playReverse();});
//Edge binding end
})("WHAT_2");
//Edge symbol end:'WHAT_2'

//=========================================================

//Edge symbol: 'COLORSTRIPE'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_RectangleCopy5}","mouseout",function(sym,e){sym.playReverse();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_RectangleCopy5}","mouseover",function(sym,e){sym.play("START");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",250,function(sym,e){sym.stop();});
//Edge binding end
})("COLORSTRIPE");
//Edge symbol end:'COLORSTRIPE'

//=========================================================

//Edge symbol: 'COLORSTRIPE_1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",250,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_RectangleCopy5}","mouseout",function(sym,e){sym.playReverse();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_RectangleCopy5}","mouseover",function(sym,e){sym.play("START");});
//Edge binding end
})("COLORSTRIPE_1");
//Edge symbol end:'COLORSTRIPE_1'

//=========================================================

//Edge symbol: 'COLORSTRIPE_2'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",250,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_RectangleCopy5}","mouseout",function(sym,e){sym.playReverse();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_RectangleCopy5}","mouseover",function(sym,e){sym.play("START");});
//Edge binding end
})("COLORSTRIPE_2");
//Edge symbol end:'COLORSTRIPE_2'

//=========================================================

//Edge symbol: 'COLORSTRIPE_3'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",250,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_RectangleCopy5}","mouseout",function(sym,e){sym.playReverse();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_RectangleCopy5}","mouseover",function(sym,e){sym.play("START");});
//Edge binding end
})("COLORSTRIPE_3");
//Edge symbol end:'COLORSTRIPE_3'

//=========================================================

//Edge symbol: 'COLORSTRIPE_4'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",250,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_RectangleCopy5}","mouseout",function(sym,e){sym.playReverse();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_RectangleCopy5}","mouseover",function(sym,e){sym.play("START");});
//Edge binding end
})("COLORSTRIPE_4");
//Edge symbol end:'COLORSTRIPE_4'

//=========================================================

//Edge symbol: 'COLORSTRIPE_5'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",250,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_RectangleCopy5}","mouseout",function(sym,e){sym.playReverse();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_RectangleCopy5}","mouseover",function(sym,e){sym.play("START");});
//Edge binding end
})("COLORSTRIPE_5");
//Edge symbol end:'COLORSTRIPE_5'

//=========================================================

//Edge symbol: 'COLORSTRIPE_6'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",250,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_RectangleCopy5}","mouseout",function(sym,e){sym.playReverse();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_RectangleCopy5}","mouseover",function(sym,e){sym.play("START");});
//Edge binding end
})("COLORSTRIPE_6");
//Edge symbol end:'COLORSTRIPE_6'

//=========================================================

//Edge symbol: 'COLORSTRIPE_7'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",250,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_RectangleCopy5}","mouseout",function(sym,e){sym.playReverse();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_RectangleCopy5}","mouseover",function(sym,e){sym.play("START");});
//Edge binding end
})("COLORSTRIPE_7");
//Edge symbol end:'COLORSTRIPE_7'

//=========================================================

//Edge symbol: 'INFO'
(function(symbolName){})("INFO");
//Edge symbol end:'INFO'

//=========================================================

//Edge symbol: 'CLICKTABSPOINTER'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2000,function(sym,e){sym.playReverse();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.play()});
//Edge binding end
})("CLICKTABSPOINTER");
//Edge symbol end:'CLICKTABSPOINTER'

//=========================================================

//Edge symbol: 'CLICKTABSPOINTER_1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.play()});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2000,function(sym,e){sym.playReverse();});
//Edge binding end
})("CLICKTABSPOINTER_1");
//Edge symbol end:'CLICKTABSPOINTER_1'
})(jQuery,AdobeEdge,"EDGE-70812485");