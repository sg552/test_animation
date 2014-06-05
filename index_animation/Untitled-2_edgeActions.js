/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      
      
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         sym.getSymbol("s1").play();
         
         window['prevtop'] = 0;
         
         function changeColor(textType,color1,color2){
         		$("."+textType).css("color",color1);
         		$("."+textType+"_a").css("color",color2);
         }
         var classType = null;
         $(window).scroll(function(e) {
         
         
         
         		function gotoPlay(pos, compname) {
         		var browserwidht = $("#Stage").width();
         		var right = browserwidht-140;
         		sym.$("s1_r").css("top",240 + $(window).scrollTop());
         		sym.$("s1_r").css("left",right);
         
         		var color_T = "#fa845c";
         		var color_C = "#ff4c00";
         		var color_t = "#5e5e5e";
         		var color_c = "#cecece";
         		var c_c = color_c;
         		var t_c = color_t;
         		if($(window).scrollTop() >= 0 && $(window).scrollTop() < 560){
         			classType = "T_14"
         			t_c = color_T;
         			c_c = color_C;
         			changeColor(classType,t_c,c_c);
         		}else{
         			classType = "T_14"
         			t_c = color_t;
         			c_c = color_c;
         			changeColor(classType,t_c,c_c);
         		}		 
         		if($(window).scrollTop() >= 560 && $(window).scrollTop() < 1260){
         
         			classType = "T_16";
         			t_c = color_T;
         			c_c = color_C;
         			changeColor(classType,t_c,c_c);
         		}else{
         			classType = "T_16"
         			t_c = color_t;
         			c_c = color_c;
         			changeColor(classType,t_c,c_c);
         		}
         		if($(window).scrollTop() >= 1260 && $(window).scrollTop() < 1860){
         			classType = "T_15";
         			t_c = color_T;
         			c_c = color_C;
         			changeColor(classType,t_c,c_c);
         		}else{
         			classType = "T_15"
         			t_c = color_t;
         			c_c = color_c;
         			changeColor(classType,t_c,c_c);
         		}
         
         		if($(window).scrollTop() >= 1860){
         			classType = "T_17";
         			t_c = color_T;
         			c_c = color_C;
         			changeColor(classType,t_c,c_c);
         		}else{
         			classType = "T_17"
         			t_c = color_t;
         			c_c = color_c;
         			changeColor(classType,t_c,c_c);
         		}
         
         			if (window['prevtop'] < $(window).scrollTop()) {
         				if ($(window).scrollTop() > pos) {			
         					if (sym.getSymbol(compname).getPosition() != sym.getSymbol(compname).getDuration()) 
         						sym.getSymbol(compname).play();
         
         				}
         			} else {
         				if ($(window).scrollTop() < pos + 400) {
         
         					if (sym.getSymbol(compname).getPosition() > -1) {
         
         						sym.getSymbol(compname).playReverse();
         					}
         				}
         			}
         		}
         		gotoPlay(1, "s1_r");
         		gotoPlay(200, "s2");
         
         		gotoPlay(700, "s3");
         
         		gotoPlay(1200, "s4");
         
         		window['prevtop'] = $(window).scrollTop();
         });

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 's1'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_index_t}", "click", function(sym, e) {
         location.reload();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_about_t}", "click", function(sym, e) {
         window.location.hash = "#s1old";
         window.location.hash = "#Stage_s1_b"; 

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_server_t}", "click", function(sym, e) {
         window.location.hash = "#s2old";
         window.location.hash = "#Stage_s2_m";  

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_show_t}", "click", function(sym, e) {
         window.location.hash = "#s3old";
         window.location.hash = "#Stage_s3__3_05";   
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_contact_t}", "click", function(sym, e) {
         window.location.hash = "#s2old";
         window.location.hash = "#Stage_s4__3_33";

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_index_t}", "mouseover", function(sym, e) {
         sym.$("index_t").css("cursor","pointer")

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_about_t}", "mouseover", function(sym, e) {
         sym.$("about_t").css("cursor","pointer")

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_server_t}", "mouseover", function(sym, e) {
         sym.$("server_t").css("cursor","pointer")

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_show_t}", "mouseover", function(sym, e) {
         sym.$("show_t").css("cursor","pointer")

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_contact_t}", "mouseover", function(sym, e) {
         sym.$("contact_t").css("cursor","pointer")

      });
      //Edge binding end

   })("s1");
   //Edge symbol end:'s1'

   //=========================================================
   
   //Edge symbol: 's2'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_f2-3}", "click", function(sym, e) {
           window.location.href='Process.html';

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_t2-3}", "click", function(sym, e) {
         window.location.href='Process.html';

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_t2-3}", "mouseover", function(sym, e) {
         sym.$("t2-3").css("cursor","pointer")

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_f2-3}", "mouseover", function(sym, e) {
         sym.$("f2-3").css("cursor","pointer")

      });
      //Edge binding end

   })("s2");
   //Edge symbol end:'s2'

   //=========================================================
   
   //Edge symbol: 's3'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${__3_28}", "click", function(sym, e) {
           window.location.href='Case.html';

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Text8}", "click", function(sym, e) {
         window.location.href='Case.html';

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__3_28}", "mouseover", function(sym, e) {
         sym.$("_3_28").css("cursor","pointer")

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Text8}", "mouseover", function(sym, e) {
         sym.$("Text8").css("cursor","pointer")

      });
      //Edge binding end

   })("s3");
   //Edge symbol end:'s3'

   //=========================================================
   
   //Edge symbol: 's4'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${__3_37_s}", "click", function(sym, e) {
         window.location.href='Submit.html';

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Text10}", "click", function(sym, e) {
         window.location.href='Submit.html';

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__3_37_s}", "mouseover", function(sym, e) {
         sym.$("_3_37_s").css("cursor","pointer")

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Text10}", "mouseover", function(sym, e) {
         sym.$("Text10").css("cursor","pointer")

      });
      //Edge binding end

   })("s4");
   //Edge symbol end:'s4'

   //=========================================================
   
   //Edge symbol: 's11'
   (function(symbolName) {   
   
   })("s11");
   //Edge symbol end:'s11'

   //=========================================================
   
   //Edge symbol: 's1_r'
   (function(symbolName) {   
   
      

      Symbol.bindElementAction(compId, symbolName, "${_T_15}", "click", function(sym, e) {
         window.location.hash = "#s3old";
         window.location.hash = "#Stage_s3__3_05";   

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_T_14}", "click", function(sym, e) {
         window.location.hash = "#s1old";
         window.location.hash = "#Stage_s1_b";   

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_T_16}", "click", function(sym, e) {
         window.location.hash = "#s2old";
         window.location.hash = "#Stage_s2_m";   

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_T_17}", "click", function(sym, e) {
         window.location.hash = "#s2old";
         window.location.hash = "#Stage_s4__3_33";   

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_T_14}", "mouseover", function(sym, e) {
         sym.$("T_14").css("cursor","pointer")

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_T_16}", "mouseover", function(sym, e) {
         sym.$("T_16").css("cursor","pointer")

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_T_15}", "mouseover", function(sym, e) {
         sym.$("T_15").css("cursor","pointer")

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_T_17}", "mouseover", function(sym, e) {
         sym.$("T_17").css("cursor","pointer")

      });
      //Edge binding end

   })("s1_rf");
   //Edge symbol end:'s1_rf'

})(jQuery, AdobeEdge, "EDGE-944249601");