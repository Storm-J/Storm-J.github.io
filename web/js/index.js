var app =new Vue({
    el:'#app',
    data:{
        classList1:['threeDTran','top'],
        classList2:['threeDTran'],
        classList3:['threeDTran'],
        classList4:['threeDTran'],
    },
    methods:{
        d1up(){
            this.classList1=['threeDTran','rotateCubeTopOut']
            this.classList2=['threeDTran','rotateCubeTopIn']
            this.classList3=['threeDTran']
            this.classList4=['threeDTran']
        },
        d2up(){
            this.classList1=['threeDTran']
            this.classList2=['threeDTran','rotateCubeTopOut']
            this.classList3=['threeDTran','rotateCubeTopIn']
            this.classList4=['threeDTran']
        },
        d3up(){
            this.classList1=['threeDTran']
            this.classList2=['threeDTran']
            this.classList3=['threeDTran','rotateCubeTopOut']
            this.classList4=['threeDTran','rotateCubeTopIn']
        },
        d2down(){
            this.classList1=['threeDTran','rotateCubeBottomIn']
            this.classList2=['threeDTran','rotateCubeBottomOut']
            this.classList3=['threeDTran']
            this.classList4=['threeDTran']
        },

        d3down(){
            this.classList1=['threeDTran']
            this.classList2=['threeDTran','rotateCubeBottomIn']
            this.classList3=['threeDTran','rotateCubeBottomOut']
            this.classList4=['threeDTran']
        },
        d4down(){
            this.classList1=['threeDTran']
            this.classList2=['threeDTran']
            this.classList3=['threeDTran','rotateCubeBottomIn']
            this.classList4=['threeDTran','rotateCubeBottomOut']
        },
    },
    directives: {
        mwheel: {
            bind: function (el,binding) {
                el.addEventListener('wheel',function (e) {
                    if(e.deltaY > 0){
                        switch (binding.value) {
                            case 'd1':app.d1up();break;
                            case 'd2':app.d2up();break;
                            case 'd3':app.d3up();break;
                            case 'd4':break;
                        }
                    }else{
                        switch (binding.value) {
                            case 'd1':break;
                            case 'd2':app.d2down();break;
                            case 'd3':app.d3down();break;
                            case 'd4':app.d4down();break;
                        }
                    }
                })
                el.addEventListener('DOMMouseScroll',function (e) {
                    if(e.deltaY > 0){
                        switch (binding.value) {
                            case 'd1':app.d1up();break;
                            case 'd2':app.d2up();break;
                            case 'd3':app.d3up();break;
                            case 'd4':break;
                        }
                    }else{
                        switch (binding.value) {
                            case 'd1':break;
                            case 'd2':app.d2down();break;
                            case 'd3':app.d3down();break;
                            case 'd4':app.d4down();break;
                        }
                    }
                })
            }
        }
    }

})