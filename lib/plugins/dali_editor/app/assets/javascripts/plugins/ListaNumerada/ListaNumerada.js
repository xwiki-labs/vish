Dali.Plugins["ListaNumerada"] = function (base){
    return{
        colors: ['rojo', 'verde', 'morado', 'azul', 'rosa', 'naranja'],
        optionColors: [
            {label: 'Rojo', value: 'rojo' , color: '#C5524B' },
            {label: 'Verde', value: 'verde' , color: '#719100' },
            {label: 'Morado', value: 'morado' , color: '#8067A5' },
            {label: 'Azul', value: 'azul' , color: '#44ADC8' },
            {label: 'Rosa', value: 'rosa' , color: '#F978DE' },
            {label: 'Naranja', value: 'naranja' , color: '#FB9843' }
        ], 
        getConfig: function(){
            return {
                name: 'ListaNumerada',
                category: 'animations',
                icon: 'fa-sort-numeric-asc'
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
                                 nBoxes:{
                                    __name: "Number of boxes",
                                    type: 'number',
                                    value: 2,
                                    max: 7,
                                    min: 1,
                                    autoManaged: false
                                } 
                            }
                        } 
                    }
                }
            }
            toolBar.main.accordions.buttonStyle = {__name: "Estilo cajas", buttons: {}};
            for(var i = 0; i < base.getState().nBoxes; i++){
                toolBar.main.accordions.buttonStyle.buttons["box" + i] = {
                __name: 'Caja '+(i+1),
                                    type: 'colorPicker',
                                    value: this.colors[i%this.colors.length],
                                    options: this.optionColors,
                                    autoManaged: false
                }
           }
            return toolBar;
        },
        getInitialState: function(){ 
            return {nBoxes: 2, colors: ['rojo','verde']};
        },
        getRenderTemplate: function(state){
             
            var currentColor = state.colors[0];
            var template = '<div class="desplVert" style=" margin-top:30px; margin-bottom:20px; width:100%; max-width:500px">'
                              +'<div id="primerdiv">'
                                +'<div class="izq_jq ' + currentColor + '">1</div>'
                                +'<div class="container0 ' + currentColor + 'der">'
                                    +'<plugin plugin-data-key="numList_0" plugin-data-default="BasicText" plugin-data-resizable plugin-data-initialHeight="40px" />'
                                +'</div>'
                              +'</div>'
                              +'<div class="desplVert1 container">'

            for (var i = 0; i < state.nBoxes-1; i++){
                currentColor = state.colors[i+1];
                template += '<div style="display: block;" class="ocultar" >'
                                +'<div class="izq_jq ' + currentColor + '">' + (i+2) + '</div>'
                                +'<div class="container0 ' + currentColor + 'der">'
                                    +'<plugin plugin-data-key="numList_' + (i+1) + '" plugin-data-default="BasicText" plugin-data-resizable  plugin-data-initialHeight="40px"/>'
                                +'</div>'
                            +'</div>'
            }

            template +='</div></div>'

            return template;
        },
        handleToolbar: function(name, value){
 
            if (/box/.test(name)){
                var idB = name.slice(3);
                var newColors = base.getState().colors;
                newColors[idB] = value;
                base.setState('colors', newColors);
            } else if (name == 'nBoxes'){
                var diff = value - base.getState().nBoxes;
                diff = Math.abs(diff);
                if (value > base.getState().nBoxes) {
                    do {
                        base.setState('colors', base.getState().colors.concat([this.colors[(value-diff) % this.colors.length]]));
                        diff--;
                    } while (diff > 0);
                } else if (value < base.getState().nBoxes) {
                    var newColors = base.getState().colors;                       
                    do {
                        newColors.pop();
                        base.setState('colors', newColors);
                        diff--;
                    } while (diff > 0);
                }
                base.setState(name, value);
            } 
        },
        click: function(key){
            alert(key);


        }
    }
}
