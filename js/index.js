// vue对象
var app =new Vue({
    el:'#app',
    data() {
        return {
            classList1:['threeDTran','top'],
            classList2:['threeDTran'],
            classList3:['threeDTran'],
            classList4:['threeDTran'],
        }
    },
    created: function (){
        $('.facade').addClass('active');
    },
    methods:{
        // 页面跳转动画
        d1up(){
            this.classList1=['threeDTran','rotateCubeTopOut']
            this.classList2=['threeDTran','rotateCubeTopIn']
            this.classList3=['threeDTran']
            this.classList4=['threeDTran']
            $('.facade').removeClass('active');
            $("dd").animate({width:'hide'},350);
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
        // nav ClickEvent
        Nav3(){
            this.classList1=['threeDTran','rotateCubeTopOut']
            this.classList2=['threeDTran']
            this.classList3=['threeDTran','rotateCubeTopIn']
            this.classList4=['threeDTran']
            $('.facade').removeClass('active');
            $("dd").animate({width:'hide'},350);
        },
        Nav4(){
            this.classList1=['threeDTran','rotateCubeTopOut']
            this.classList2=['threeDTran']
            this.classList3=['threeDTran']
            this.classList4=['threeDTran','rotateCubeTopIn']
            $('.facade').removeClass('active');
            $("dd").animate({width:'hide'},350);
        },
    },
    directives: {
        // 自定义滚轮事件
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
            }
        }
    }
})

// 鼠标样式
window.onmousemove = function(event) {
    let Ele = document.getElementsByClassName("cursor")[0];
    Ele.style.left = event.clientX + "px";
    Ele.style.top = event.clientY + "px";
}

$(document).ready(function() {
    // 初始化interaction元素List
    $(".interaction").hover(
        function () {//mouseover
            $(".cursor").addClass("active")
        },
        function () {//mouseout
            $(".cursor").removeClass("active")
        }
    );
    // light&dark切换
    $(".el-icon-s-fold").click(function () {
        $("#dark").css("width","100%");
    });

    $(".el-icon-s-unfold").click(function () {
        $("#dark").css("width","0");
    });
    // HI页面显示
    $("#d1").on("animationend",function () {
        if ($(this).attr("class").includes("rotateCubeBottomIn"))
            $('.facade').addClass('active');
    });

    $(".facade").on("animationend",function () {
        $("dd").animate({width:'show'},350);
    });

    $(".dark-nav dd").hover(function () {
        $(this).siblings().children().removeClass("active");
        $(this).children().addClass("active");
        switch($(this).children().attr('id')){
            case 'darkNav1':
                $("#darkContent1").siblings(".dark-content").fadeOut();
                $("#darkContent1").fadeIn();
                break;
            case 'darkNav2':
                $("#darkContent2").siblings(".dark-content").fadeOut();
                $("#darkContent2").fadeIn();
                break;
            case 'darkNav3':
                $("#darkContent3").siblings(".dark-content").fadeOut();
                $("#darkContent3").fadeIn();
                break;
            case 'darkNav4':
                $("#darkContent4").siblings(".dark-content").fadeOut();
                $("#darkContent4").fadeIn();
                break;
        }
    });
    //
    $("#darkContent3 .dark-content-inner").children().hover(function () {
        $(this).children().css("height","100%")
    },function () {
        $(this).children().css("height","0")
    })

});
