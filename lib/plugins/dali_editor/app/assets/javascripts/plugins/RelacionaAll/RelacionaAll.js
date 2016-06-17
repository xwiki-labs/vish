Dali.Plugins["RelacionaAll"] = function (base){
    return{
        getConfig: function(){
            return {
                name: 'RelacionaAll',
                category: 'exercises',
                icon: 'fa-hand-lizard-o'
            }
        },
        getToolbar: function(){
            var toolBar = {
                main: {
                    __name: "Main",
                    accordions:{
                        general: {
                          __name: "General",
                          buttons:{
                            title: {
                              __name: 'Título',
                              type: 'text',
                              autoManaged: false,
                              value: 'Título del ejercicio'                                  
                            },
                            enunciado: {
                              __name: 'Enunciado',
                              type: 'text',
                              autoManaged: false,
                              value: 'Enunciado del ejercicio'                                  
                            },
                            nQuestions:{
                              __name: "Número de preguntas",
                              type: 'number',
                              value: 2,
                              max: 7,
                              min: 1,
                              autoManaged: false
                            },
                            nAnswers:{
                              __name: "Número de respuestas",
                              type: 'number',
                              value: 2,
                              max: 7,
                              min: 1,
                              autoManaged: false
                            } 
                          }
                        } ,
                        image: {
                          __name: "Imagen",
                          buttons:{
                            hasImage: {
                                __name: 'Tiene Imagen',
                                type: 'checkbox',
                                value: 'unchecked'  
                            },                                
                            url: {
                              __name: 'URL',
                              type: 'text',
                              autoManaged: false,
                              value: 'http://nemanjakovacevic.net/wp-content/uploads/2013/07/placeholder.png'
                            }
                        }
                      }
                   } 
                }
            }
 

          toolBar.main.accordions.solutions = {__name: "Soluciones", buttons: {}};
          var opt = [];
          for(var i = 1; i <= base.getState().nAnswers; i++){
            opt.push({label: ""+i, value: ""+i});
          }
          for(var i = 0; i < base.getState().nQuestions; i++){
            toolBar.main.accordions.solutions.buttons["RAmatch" + i] = {
            __name: 'Respuesta correcta a pregunta '+(i+1),
                                type: 'select',
                                value: ["1"],
                                multiple: true,
                                options: opt,
                                autoManaged: false  
                                 
            }
          }
             return toolBar;
        },
        getInitialState: function(){ 
            return {title: 'Título del ejercicio', enunciado: 'Relaciona All', hasImage: 'unchecked', nQuestions: 2 , nAnswers: 2 ,  match:[2,1]};
        },
        getRenderTemplate: function(state){
         var template = '<table border="0" width="100%" cellpadding="0" cellspacing="0">'    
        /*                  + '<tbody><tr><td>'
                          + '<div id="enunciadoEjer">' + state.enunciado + '</div>'
            
            
        
          <div id="enunciadoEjer">5 Ejercicio relacionar conceptos N a N</div>
          <div id="instruccionesEjer">Relaciona ambos conceptos<span style="text-align:center;display:block;">
          <img class="imgPpal" src="imagenes/buzon.jpg"></span></div>
          <div style="display: none;" id="resultados"></div>
          <div style="-moz-user-select: none; visibility: visible;" unselectable="on" id="ejercicio">
          <div style="margin: 0px auto; width: 456px;" id="ejercicioBase"><div id="drags" class="drags">
          <div style="width: 80px;" id="dragTxt0" class="boxDrag" rel="0">Uno</div>
          <div posl="[object Object]" post="10" style="width: 0px; height: 0px; top: 10px;" id="drag0" class="draggable _jsPlumb_endpoint_anchor_" rel="0"></div>
          <div style="width: 80px;" id="dragTxt1" class="boxDrag" rel="1">Dos</div>
          <div posl="[object Object]" post="10" style="width: 0px; height: 0px; top: 10px;" id="drag1" class="draggable _jsPlumb_endpoint_anchor_" rel="1"></div>
          <div style="width: 80px;" id="dragTxt2" class="boxDrag" rel="2">Tres</div>
          <div posl="[object Object]" post="10" style="width: 0px; height: 0px; top: 10px;" id="drag2" class="draggable _jsPlumb_endpoint_anchor_" rel="2"></div>
          <div style="width: 80px;" id="dragTxt3" class="boxDrag" rel="3">Cuatro</div>
          <div posl="[object Object]" post="10" style="width: 0px; height: 0px; top: 10px;" id="drag3" class="draggable _jsPlumb_endpoint_anchor_" rel="3"></div>
          <div class="_jsPlumb_endpoint  _jsPlumb_endpoint_anchor_ ui-draggable ui-droppable" style="position: absolute; height: 34px; width: 34px; left: 276.25px; top: 453.9px;">
          <svg xmlns="http://www.w3.org/1999/xhtml" version="1.1" position="absolute" pointer-events="all" height="34" width="34" style="position:absolute;left:0px;top:0px">
          <circle stroke="none" fill="#f47920" style="" xmlns="http://www.w3.org/1999/xhtml" version="1.1" r="17" cy="17" cx="17"></circle></svg></div>
          <div class="_jsPlumb_endpoint  _jsPlumb_endpoint_anchor_ ui-draggable ui-droppable" style="position: absolute; height: 34px; width: 34px; left: 276.25px; top: 506.5px;">
          <svg xmlns="http://www.w3.org/1999/xhtml" version="1.1" position="absolute" pointer-events="all" height="34" width="34" style="position:absolute;left:0px;top:0px">
          <circle stroke="none" fill="#f47920" style="" xmlns="http://www.w3.org/1999/xhtml" version="1.1" r="17" cy="17" cx="17"></circle></svg></div>
          <div class="_jsPlumb_endpoint  _jsPlumb_endpoint_anchor_ ui-draggable ui-droppable" style="position: absolute; height: 34px; width: 34px; left: 276.25px; top: 559.1px;">
          <svg xmlns="http://www.w3.org/1999/xhtml" version="1.1" position="absolute" pointer-events="all" height="34" width="34" style="position:absolute;left:0px;top:0px">
          <circle stroke="none" fill="#f47920" style="" xmlns="http://www.w3.org/1999/xhtml" version="1.1" r="17" cy="17" cx="17"></circle></svg></div>
          <div class="_jsPlumb_endpoint  _jsPlumb_endpoint_anchor_ ui-draggable ui-droppable" style="position: absolute; height: 34px; width: 34px; left: 276.25px; top: 611.7px;">
          <svg xmlns="http://www.w3.org/1999/xhtml" version="1.1" position="absolute" pointer-events="all" height="34" width="34" style="position:absolute;left:0px;top:0px">
          <circle stroke="none" fill="#f47920" style="" xmlns="http://www.w3.org/1999/xhtml" version="1.1" r="17" cy="17" cx="17"></circle></svg></div>
          <div class="_jsPlumb_endpoint  _jsPlumb_endpoint_anchor_ ui-draggable ui-droppable" style="position: absolute; height: 34px; width: 34px; left: 395.85px; top: 461.4px;">
          <svg xmlns="http://www.w3.org/1999/xhtml" version="1.1" position="absolute" pointer-events="all" height="34" width="34" style="position:absolute;left:0px;top:0px">
          <circle stroke="none" fill="#f47920" style="" xmlns="http://www.w3.org/1999/xhtml" version="1.1" r="17" cy="17" cx="17"></circle></svg></div>
          <div class="_jsPlumb_endpoint  _jsPlumb_endpoint_anchor_ ui-draggable ui-droppable" style="position: absolute; height: 34px; width: 34px; left: 395.85px; top: 501.8px;">
          <svg xmlns="http://www.w3.org/1999/xhtml" version="1.1" position="absolute" pointer-events="all" height="34" width="34" style="position:absolute;left:0px;top:0px">
          <circle stroke="none" fill="#f47920" style="" xmlns="http://www.w3.org/1999/xhtml" version="1.1" r="17" cy="17" cx="17"></circle></svg></div>
          <div class="_jsPlumb_endpoint  _jsPlumb_endpoint_anchor_ ui-draggable ui-droppable" style="position: absolute; height: 34px; width: 34px; left: 395.85px; top: 542.2px;">
          <svg xmlns="http://www.w3.org/1999/xhtml" version="1.1" position="absolute" pointer-events="all" height="34" width="34" style="position:absolute;left:0px;top:0px">
          <circle stroke="none" fill="#f47920" style="" xmlns="http://www.w3.org/1999/xhtml" version="1.1" r="17" cy="17" cx="17"></circle></svg></div>
          <div class="_jsPlumb_endpoint  _jsPlumb_endpoint_anchor_ ui-draggable ui-droppable" style="position: absolute; height: 34px; width: 34px; left: 395.85px; top: 582.6px;">
          <svg xmlns="http://www.w3.org/1999/xhtml" version="1.1" position="absolute" pointer-events="all" height="34" width="34" style="position:absolute;left:0px;top:0px">
          <circle stroke="none" fill="#f47920" style="" xmlns="http://www.w3.org/1999/xhtml" version="1.1" r="17" cy="17" cx="17"></circle></svg></div></div>
          <div style="margin: 24px 10px 10px;" id="drops" class="drops"><div style="width: 0px; height: 0px; top: 3.5px;" id="drop0" class="droppable _jsPlumb_endpoint_anchor_" rel="0"></div>
          <div style="width: 150px; height: 20.4px;" id="dropTxt0" class="boxDrop" rel="0">Compact Flaix</div><div style="width: 0px; height: 0px; top: 3.5px;" id="drop1" class="droppable _jsPlumb_endpoint_anchor_" rel="1"></div>
          <div style="width: 150px; height: 20.4px;" id="dropTxt1" class="boxDrop" rel="1">Memory Stick</div><div style="width: 0px; height: 0px; top: 3.5px;" id="drop2" class="droppable _jsPlumb_endpoint_anchor_" rel="2"></div>
          <div style="width: 150px; height: 20.4px;" id="dropTxt2" class="boxDrop" rel="2">Secure Digital</div><div style="width: 0px; height: 0px; top: 3.5px;" id="drop3" class="droppable _jsPlumb_endpoint_anchor_" rel="3"></div>
          <div style="width: 150px; height: 20.4px;" id="dropTxt3" class="boxDrop" rel="3">Micro SD</div></div></div></div>
          <div id="corregir"><input name="corrige" id="botCorregir" value="Corregir" onclick="javascript:corrigeDragAndDrop()" "="" type="button">
          </div>
          <div id="paginacion"></div>
          </td>
          </tr>
          </tbody></table>
*/
            return template;
        },
        handleToolbar: function(name, value){
 
     /*       if (/RApreg/.test(name)) {
              var idB = name.slice(6);
              var newQuestions = base.getState().questions;
              newQuestions[idB] = value;
              base.setState('questions', newQuestions);

            } else if(/RAresp/.test(name)) {
              var idB = name.slice(6);
              var newAnswers = base.getState().answers;
              newAnswers[idB] = value;
              base.setState('answers', newAnswers);

            } else */if(/RAmatch/.test(name)) {
              var idB = name.slice(7);
              var newMatch = base.getState().match;
              newMatch[idB] = value;
              base.setState('match', newMatch);

            } else if (name == 'nQuestions'){
               /* var diff = value - base.getState().nQuestions;
                diff = Math.abs(diff);
                if (value > base.getState().nQuestions) {
                    do{
                        base.setState('questions', base.getState().questions.push('Pregunta'));
                         diff--;
                    } while (diff > 0);
                } else if(value < base.getState().nQuestions) {
                    var newQuestions = base.getState().questions;                       
                    do{
                        newQuestions.pop();
                        base.setState('nQuestions', newQuestions.length);
                        diff--;
                    } while (diff > 0);
                }*/
                base.setState(name, value);
            }  else if (name == 'nAnswers'){
                /*var diff = value - base.getState().nAnswers;
                diff = Math.abs(diff);
                if (value > base.getState().nAnswers) {
                    do{
                         base.setState('answers', base.getState().answers.push('Respuesta'));
                        diff--;
                    } while (diff > 0);
                } else if(value < base.getState().nAnswers) {
                    var newAnswers = base.getState().answers;                       
                    do{
                        newAnswers.pop();
                        base.setState('nAnswers', newAnswers.length);
                        diff--;
                    } while (diff > 0);
                }*/
                base.setState(name, value);
            } 
        },
        click: function(key){
            alert(key);


        }
    }
}