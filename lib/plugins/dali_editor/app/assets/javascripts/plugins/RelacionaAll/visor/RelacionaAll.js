Dali.Visor.Plugins["RelacionaAll"] = function (){
    return {
        getRenderTemplate: function (state) {
            var colors = ['verde', 'morado', 'azul', 'rosa', 'naranja', 'rojo'];
            var idDate = Date.now()
            let currentColor = state.colors[0]
            var template = '<div class="desplVert" style=" margin-top:30px; margin-bottom:20px; width:100%; max-width:500px">'
                              +'<div id="primerdiv">'
                                  +'<div class="izq_jq ' + currentColor + '">1</div>'
                                  +'<div class="container0 ' + currentColor + 'der">'
                                    +'<plugin plugin-data-key="numList_0" plugin-data-resizable  />'
                                  +'</div>'
                              +'</div>'
                              +'<div class="desplVert' + idDate + ' container">'

            for (var i = 0; i < state.nBoxes-1; i++){
                currentColor = state.colors[i+1];
                template += '<div style="display: none;" class="ocultar"  >'
                                +'<div class="izq_jq ' + currentColor + '">' + (i+2) + '</div>'
                                +'<div class="container0 ' + currentColor + 'der">'
                                    +'<plugin plugin-data-key="numList_' + (i+1) + '" plugin-data-resizable />'
                                 +'</div>'
                           +'</div>'
            }

            
            template +='</div>'
            + '<p data-pos="0" onClick="$dali$.showDiv(this)" data-index="' + idDate + '" data-length="' + state.nBoxes + '" class="showLista" id="show' + idDate + '" rel="desplVert' + idDate + ' ">+</p>'
            + '</div>'

            return template;

 
        },
        showDiv: function(element) {
            var el = element.currentTarget || element;
            var dataIndex = parseInt(el.getAttribute('data-index'));
            var dataLength = parseInt(el.getAttribute('data-length'));
            var dataPos = parseInt(el.getAttribute('data-pos'));
            if (dataPos < dataLength) {
                $('.desplVert' + dataIndex + ' > div:eq(' + dataPos + ')').show("slow");
                var nextElem = parseInt(dataPos + 1);
                el.setAttribute('data-pos', nextElem);
            }
            if (dataPos >= dataLength - 2) {
               $('#show' + dataIndex ).hide();
            }
             

        }
    }
}
