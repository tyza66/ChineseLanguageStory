//全局变量
//帮助谁
var who = 0; //火神1，水神2，默认0
//后面章节页面隐藏
document.querySelector("#start2").hidden = true;
document.querySelector("#init").hidden = true;
document.querySelector("#p4").hidden = true;
document.querySelector("#fail").hidden = true;
document.querySelector("#p5-1").hidden = true;
document.querySelector("#p5-2").hidden = true;
document.querySelector("#p6").hidden = true;
document.querySelector("#p7").hidden = true;
document.querySelector("#p8").hidden = true;
document.querySelector("#p9").hidden = true;
document.querySelector("#p10").hidden = true;
document.querySelector("#p11").hidden = true;
document.querySelector("#p12").hidden = true;
document.querySelector("#p13").hidden = true;
document.querySelector("#p14").hidden = true;
document.querySelector("#p15").hidden = true;
document.querySelector("#p16").hidden = true;
document.querySelector("#p17").hidden = true;
document.querySelector("#p18").hidden = true;
document.querySelector("#p19").hidden = true;
document.querySelector("#p20").hidden = true;
document.querySelector("#p21").hidden = true;
document.querySelector("#p22").hidden = true;
document.querySelector("#p23").hidden = true;
document.querySelector("#p24").hidden = true;
document.querySelector("#p25").hidden = true;
document.querySelector("#p26").hidden = true;
document.querySelector("#p27").hidden = true;
document.querySelector("#p28").hidden = true;
document.querySelector("#p29").hidden = true;
document.querySelector("#p30").hidden = true;
document.querySelector("#p31").hidden = true;
document.querySelector("#p32").hidden = true;
document.querySelector("#p33").hidden = true;
document.querySelector("#p34").hidden = true;
document.querySelector("#p35").hidden = true;
document.querySelector("#p36").hidden = true;
document.querySelector("#p37").hidden = true;
document.querySelector("#p38").hidden = true;
document.querySelector("#p39").hidden = true;
document.querySelector("#p40").hidden = true;
document.querySelector("#p41").hidden = true;
document.querySelector("#p42").hidden = true;
document.querySelector("#success").hidden = true;
document.querySelector("#an1").hidden = true;
document.querySelector("#an2").hidden = true;
document.querySelector("#an3").hidden = true;
document.querySelector("#an4").hidden = true;
document.querySelector("#an5").hidden = true;
document.querySelector("#an6").hidden = true;
document.querySelector("#an7").hidden = true;
//查看答案
document.querySelector("#ans1").addEventListener("click", () => {
    document.querySelector("#an1").hidden = false;
});
document.querySelector("#ans2").addEventListener("click", () => {
    document.querySelector("#an2").hidden = false;
});
document.querySelector("#ans3").addEventListener("click", () => {
    document.querySelector("#an3").hidden = false;
});
document.querySelector("#ans4").addEventListener("click", () => {
    document.querySelector("#an4").hidden = false;
});
document.querySelector("#ans5").addEventListener("click", () => {
    document.querySelector("#an5").hidden = false;
});
document.querySelector("#ans6").addEventListener("click", () => {
    document.querySelector("#an6").hidden = false;
});
document.querySelector("#ans7").addEventListener("click", () => {
    document.querySelector("#an7").hidden = false;
});
//背景初始化
document.querySelector("#root").style.backgroundImage = "url(./images/1.jpg)"
//按钮点击事件
document.querySelector("#start1-btn").addEventListener("click", () => {
    document.querySelector("#start1").hidden = true;
    document.querySelector("#start2").hidden = false;
});
document.querySelector("#start2-btn").addEventListener("click", () => {
    document.querySelector("#start2").hidden = true;
    document.querySelector("#init").hidden = false;
    document.querySelector("#root").style.backgroundImage = "url(./images/2.png)"
});
document.querySelector("#sect-a").addEventListener("click", () => {
    document.querySelector("#init").hidden = true;
    document.querySelector("#p4").hidden = false;
    who = 1;
});
document.querySelector("#sect-b").addEventListener("click", () => {
    document.querySelector("#init").hidden = true;
    document.querySelector("#p4").hidden = false;
    who = 2;
});
document.querySelector("#answer1-btn").addEventListener("click", () => {
    document.querySelector("#p4").hidden = true;
    if ((document.querySelector("#answer1").value == "间" && who == 2) || (document.querySelector("#answer1").value != "间" && who == 1)) {
        document.querySelector("#p5-1").hidden = false;
    }
    else {
        document.querySelector("#p5-2").hidden = false;
    }
});
document.querySelector("#next1").addEventListener("click", () => {
    document.querySelector("#p5-1").hidden = true;
    document.querySelector("#p5-2").hidden = true;
    document.querySelector("#p6").hidden = false;
    document.querySelector("#root").style.backgroundImage = "url(./images/3.1.png)"
});
document.querySelector("#next1-1").addEventListener("click", () => {
    document.querySelector("#p5-1").hidden = true;
    document.querySelector("#p5-2").hidden = true;
    document.querySelector("#p6").hidden = false;
    document.querySelector("#root").style.backgroundImage = "url(./images/3.1.png)"
});
document.querySelector("#next2").addEventListener("click", () => {
    document.querySelector("#p6").hidden = true;
    document.querySelector("#p7").hidden = false;
});

document.querySelector("#next3").addEventListener("click", () => {
    document.querySelector("#p7").hidden = true;
    document.querySelector("#p8").hidden = false;
});
document.querySelector("#next4").addEventListener("click", () => {
    document.querySelector("#p8").hidden = true;
    document.querySelector("#p9").hidden = false;
    document.querySelector("#root").style.backgroundImage = "url(./images/3.2.png)"
});
var sum = 0;
document.querySelector("#answer2-btn").addEventListener("click", () => {
    document.querySelector("#p9").hidden = true;
    document.querySelector("#p10").hidden = false;
    if (document.querySelector("#answer2").value == "未" || document.querySelector("#answer3").value == "末") {
        sum++;
    }
});
document.querySelector("#answer3-btn").addEventListener("click", () => {
    document.querySelector("#p10").hidden = true;
    if (document.querySelector("#answer3").value == "末" || document.querySelector("#answer3").value == "禾") {
        sum++;
        if (sum == 2) {
            document.querySelector("#p11").hidden = false;
        }
        else {
            document.querySelector("#p12").hidden = false;
        }
    } else {
        document.querySelector("#p12").hidden = false;
    }
});
document.querySelector("#next11").addEventListener("click", () => {
    document.querySelector("#p11").hidden = true;
    document.querySelector("#p13").hidden = false;
    document.querySelector("#root").style.backgroundImage = "url(./images/4.png)"
});
document.querySelector("#next12").addEventListener("click", () => {
    document.querySelector("#p12").hidden = true;
    document.querySelector("#p13").hidden = false;
    document.querySelector("#root").style.backgroundImage = "url(./images/4.png)"
});
document.querySelector("#next13").addEventListener("click", () => {
    document.querySelector("#p13").hidden = true;
    document.querySelector("#p14").hidden = false;
});
document.querySelector("#next14").addEventListener("click", () => {
    document.querySelector("#p14").hidden = true;
    document.querySelector("#p15").hidden = false;
});
document.querySelector("#next15").addEventListener("click", () => {
    document.querySelector("#p15").hidden = true;
    document.querySelector("#p16").hidden = false;
});
document.querySelector("#next16").addEventListener("click", () => {
    document.querySelector("#p16").hidden = true;
    document.querySelector("#p17").hidden = false;
});
document.querySelector("#answer4-btn").addEventListener("click", () => {
    document.querySelector("#p17").hidden = true;
    if (document.querySelector("#answer4").value == "炎黄子孙、泱泱华夏、落地生根、绿水青山") {
        document.querySelector("#p18").hidden = false;
    } else {
        document.querySelector("#p19").hidden = false;
    }
});
document.querySelector("#next18").addEventListener("click", () => {
    document.querySelector("#p18").hidden = true;
    document.querySelector("#p20").hidden = false;
    document.querySelector("#root").style.backgroundImage = "url(./images/5.1.png)"
});
document.querySelector("#next19").addEventListener("click", () => {
    document.querySelector("#p19").hidden = true;
    document.querySelector("#fail").hidden = false;
    document.querySelector("#root").style.backgroundImage = "url(./images/5.1.png)"
});
document.querySelector("#next20").addEventListener("click", () => {
    document.querySelector("#p20").hidden = true;
    document.querySelector("#p21").hidden = false;
});
document.querySelector("#next21").addEventListener("click", () => {
    document.querySelector("#p21").hidden = true;
    document.querySelector("#p22").hidden = false;
});
document.querySelector("#next22").addEventListener("click", () => {
    document.querySelector("#p22").hidden = true;
    document.querySelector("#p23").hidden = false;
});
document.querySelector("#next23").addEventListener("click", () => {
    document.querySelector("#p23").hidden = true;
    document.querySelector("#p24").hidden = false;
    document.querySelector("#root").style.backgroundImage = "url(./images/5.2.png)"
});
document.querySelector("#answer5-btn").addEventListener("click", () => {
    document.querySelector("#p24").hidden = true;
    var one = document.querySelector("#answer5").value.split(",");
    if (one.length < 5) {
        document.querySelector("#p26").hidden = false;
    }
    if (one[0].substr(-1, 1) == one[1].substr(0, 1) && one[1].substr(-1, 1) == one[2].substr(0, 1) && one[2].substr(-1, 1) == one[3].substr(0, 1) && one[3].substr(-1, 1) == one[4].substr(0, 1)) {
        document.querySelector("#p25").hidden = false;
    }
    else {
        document.querySelector("#p26").hidden = false;
    }
});
document.querySelector("#next25").addEventListener("click", () => {
    document.querySelector("#p25").hidden = true;
    document.querySelector("#p27").hidden = false;
    document.querySelector("#root").style.backgroundImage = "url(./images/6.1.png)"
});
document.querySelector("#next26").addEventListener("click", () => {
    document.querySelector("#p26").hidden = true;
    document.querySelector("#p27").hidden = false;
    document.querySelector("#root").style.backgroundImage = "url(./images/6.1.png)"
});
document.querySelector("#next27").addEventListener("click", () => {
    document.querySelector("#p27").hidden = true;
    document.querySelector("#p28").hidden = false;
});
document.querySelector("#next28").addEventListener("click", () => {
    document.querySelector("#p28").hidden = true;
    document.querySelector("#p29").hidden = false;
    document.querySelector("#root").style.backgroundImage = "url(./images/6.2.png)"
});
document.querySelector("#next29").addEventListener("click", () => {
    document.querySelector("#p29").hidden = true;
    document.querySelector("#p30").hidden = false;
});
document.querySelector("#next30").addEventListener("click", () => {
    document.querySelector("#p30").hidden = true;
    document.querySelector("#p31").hidden = false;
});
document.querySelector("#answer6-btn").addEventListener("click", () => {
    document.querySelector("#p31").hidden = true;
    if (document.querySelector("#answer6").value == "口日旦早圼") {
        document.querySelector("#p33").hidden = false;
    } else {
        document.querySelector("#p32").hidden = false;
    }
});
document.querySelector("#next32").addEventListener("click", () => {
    document.querySelector("#p32").hidden = true;
    document.querySelector("#p34").hidden = false;
    document.querySelector("#root").style.backgroundImage = "url(./images/7.1.png)"
});
document.querySelector("#next33").addEventListener("click", () => {
    document.querySelector("#p33").hidden = true;
    document.querySelector("#p34").hidden = false;
    document.querySelector("#root").style.backgroundImage = "url(./images/7.1.png)"
});
document.querySelector("#next34").addEventListener("click", () => {
    document.querySelector("#p34").hidden = true;
    document.querySelector("#p35").hidden = false;
});
document.querySelector("#next35").addEventListener("click", () => {
    document.querySelector("#p35").hidden = true;
    document.querySelector("#p36").hidden = false;
});
document.querySelector("#next36").addEventListener("click", () => {
    document.querySelector("#p36").hidden = true;
    document.querySelector("#p37").hidden = false;
    document.querySelector("#root").style.backgroundImage = "url(./images/7.3.png)"
});
document.querySelector("#next37").addEventListener("click", () => {
    document.querySelector("#p37").hidden = true;
    document.querySelector("#p38").hidden = false;
});
document.querySelector("#answer7-btn").addEventListener("click", () => {
    document.querySelector("#p38").hidden = true;
    if (document.querySelector("#answer7").value == "茉" ||
        document.querySelector("#answer7").value == "抹" ||
        document.querySelector("#answer7").value == "袜" ||
        document.querySelector("#answer7").value == "沫" ||
        document.querySelector("#answer7").value == "秣"
    ) {
        document.querySelector("#p40").hidden = false;
    }
    else {
        document.querySelector("#p39").hidden = false;
    }
});
document.querySelector("#next39").addEventListener("click", () => {
    document.querySelector("#p39").hidden = true;
    document.querySelector("#fail").hidden = false;
});
document.querySelector("#next40").addEventListener("click", () => {
    document.querySelector("#p40").hidden = true;
    document.querySelector("#p41").hidden = false;
    document.querySelector("#root").style.backgroundImage = "url(./images/8.png)"
});
document.querySelector("#next41").addEventListener("click", () => {
    document.querySelector("#p41").hidden = true;
    document.querySelector("#p42").hidden = false;
});
document.querySelector("#next42").addEventListener("click", () => {
    document.querySelector("#p42").hidden = true;
    document.querySelector("#success").hidden = false;
});
document.querySelector("#restart2").addEventListener("click", () => {
    location.reload();
});
//失败重开
document.querySelector("#restart").addEventListener("click", () => {
    location.reload();
});

/*  以下为原作者代码
// 名字设定
var playername;
document.querySelector("#playername-btn").addEventListener("click", () => {
    playername = document.querySelector("#playername").value;
    section1();
});
var f1=false,f1_1=false,f2=false,f3=false,f4=false,f5=false,f6=false,f7=false;
//段落切换间隔
var timeout = 5000;  
//交互第一段
function section1() {
    if(f1){
        return;
    }
    f1=true;
    document.querySelector("#init").hidden=true;
    //显示第一段
    sect1.hidden = false;
    sect1a.hidden = false;
    sect1b.hidden = false;
    sect1a.addEventListener("click", () => {
        sect1ra.hidden = false;
        sect1b.hidden = true;
        //切换到第二段
        setTimeout(section2, timeout);
    });
    sect1b.addEventListener("click", () => {
        sect1rb.hidden = false;
        sect1a.hidden = true;
        setTimeout(section1_1, timeout);
    });
}
function section1_1(){
    if(f1_1){
        return;
    }
    f1_1=true;
    sect1.hidden=true;
    sect1_1.hidden=false;
    sect1_1a.hidden=false;
    sect1_1b.hidden=false;
    sect1_1a.addEventListener("click", () => {
        sect1_1ra.hidden = false;
        sect1_1b.hidden = true;

    });
    sect1_1b.addEventListener("click", () => {
        sect1_1rb.hidden = false;
        sect1_1a.hidden = true;
    });
}
//交互第二段
function section2() {
    if(f2){
        return;
    }
    f2=true;
    root.style.backgroundImage = "url(./images/3.jpg)"
    //隐藏第一段
    sect1.hidden = true;
    //显示第二段
    sect2.hidden = false;
    sect2a.hidden = false;
    sect2b.hidden = false;
    sect2a.addEventListener("click", () => {
        sect2ra.hidden = false;
        sect2b.hidden = true;
    });
    sect2b.addEventListener("click", () => {
        sect2rb.hidden = false;
        sect2a.hidden = true;
        setTimeout(section3, timeout);
    });
}
//交互第三段
function section3() {
    if(f3){
        return;
    }
    f3=true;
    root.style.backgroundImage = "url(./images/4.jpg)"
    //隐藏第二段
    sect2.hidden = true;
    //显示第三段
    sect3.hidden = false;
    sect3a.hidden = false;
    sect3b.hidden = false;
    sect3a.addEventListener("click", () => {
        sect3ra.hidden = false;
        sect3b.hidden = true;
    });
    sect3b.addEventListener("click", () => {
        sect3rb.hidden = false;
        sect3a.hidden = true;
        setTimeout(section4, timeout);
    });
}
//交互第四段
function section4() {
    if(f4){
        return;
    }
    f4=true;
    root.style.backgroundImage = "url(./images/8.jpg)"
    //隐藏第三段
    sect3.hidden = true;
    //显示第四段
    sect4.hidden = false;
    sect4a.hidden = false;
    sect4b.hidden = false;
    sect4a.addEventListener("click", () => {
        sect4ra.hidden = false;
        sect4b.hidden = true;
        setTimeout(section5, timeout);
    });
    sect4b.addEventListener("click", () => {
        sect4rb.hidden = false;
        sect4a.hidden = true;
        setTimeout(section5, timeout);
    });
}
//交互第五段
function section5() {
    if(f5){
        return;
    }
    f5=true;
    root.style.backgroundImage = "url(./images/5.jpg)"
    //隐藏第四段
    sect4.hidden = true;
    //显示第五段
    sect5.hidden = false;
    sect5a.hidden = false;
    sect5b.hidden = false;
    sect5a.addEventListener("click", () => {
        sect5ra.hidden = false;
        sect5b.hidden = true;
        setTimeout(section6, timeout);
    });
    sect5b.addEventListener("click", () => {
        sect5rb.hidden = false;
        sect5a.hidden = true;
    });
}
//交互第六段
function section6() {
    if(f6){
        return;
    }
    f6=true;
    root.style.backgroundImage = "url(./images/6.jpg)"
    //隐藏第五段
    sect5.hidden = true;
    //显示第六段
    sect6.hidden = false;
    sect6a.hidden=false;
    sect6b.hidden=false;
    sect6a.addEventListener("click",()=>
    {
        sect6ra.hidden=false;
        sect6b.hidden=true;
        setTimeout(setcion7,timeout);
    });
    sect6b.addEventListener("click",()=>
    {
        sect6rb.hidden=false;
        sect6a.hidden=true;
    });
}
function setcion7(){
    if(f7){
        return;
    }
    f7=true;
    sect6.hidden=true;
    sect7.hidden=false;
}
var root=document.querySelector("#root")
// 文本显示隐藏
// 段落
var sect1 = document.querySelector("#sect1");
sect1.hidden = true;
var sect1_1 = document.querySelector("#sect1-1");
sect1_1.hidden = true;
var sect2 = document.querySelector("#sect2");
sect2.hidden = true;
var sect3 = document.querySelector("#sect3");
sect3.hidden = true;
var sect4 = document.querySelector("#sect4");
sect4.hidden = true;
var sect5 = document.querySelector("#sect5");
sect5.hidden = true;
var sect6 = document.querySelector("#sect6");
sect6.hidden = true;
var sect7 = document.querySelector("#sect7");
sect7.hidden = true;
// 选项按钮 
var sect1a = document.querySelector("#sect1-a");
sect1a.hidden = true;
var sect1b = document.querySelector("#sect1-b");
sect1b.hidden = true;
var sect1_1a = document.querySelector("#sect1-1-a");
sect1_1a.hidden = true;
var sect1_1b = document.querySelector("#sect1-1-b");
sect1_1b.hidden = true;
var sect2a = document.querySelector("#sect2-a");
sect2a.hidden = true;
var sect2b = document.querySelector("#sect2-b");
sect2b.hidden = true;
var sect3a = document.querySelector("#sect3-a");
sect3a.hidden = true;
var sect3b = document.querySelector("#sect3-b");
sect3b.hidden = true;
var sect4a = document.querySelector("#sect4-a");
sect4a.hidden = true;
var sect4b = document.querySelector("#sect4-b");
sect4b.hidden = true;
var sect5a = document.querySelector("#sect5-a");
sect5a.hidden = true;
var sect5b = document.querySelector("#sect5-b");
sect5b.hidden = true;
var sect6a = document.querySelector("#sect6-a");
sect6a.hidden = true;
var sect6b = document.querySelector("#sect6-b");
sect6b.hidden = true;
// 结局文本
var sect1ra = document.querySelector("#sect1-res-a");
sect1ra.hidden = true;
var sect1rb = document.querySelector("#sect1-res-b");
sect1rb.hidden = true;
var sect1_1ra = document.querySelector("#sect1-1-res-a");
sect1_1ra.hidden = true;
var sect1_1rb = document.querySelector("#sect1-1-res-b");
sect1_1rb.hidden = true;
var sect2ra = document.querySelector("#sect2-res-a");
sect2ra.hidden = true;
var sect2rb = document.querySelector("#sect2-res-b");
sect2rb.hidden = true;
var sect3ra = document.querySelector("#sect3-res-a");
sect3ra.hidden = true;
var sect3rb = document.querySelector("#sect3-res-b");
sect3rb.hidden = true;
var sect4ra = document.querySelector("#sect4-res-a");
sect4ra.hidden = true;
var sect4rb = document.querySelector("#sect4-res-b");
sect4rb.hidden = true;
var sect5ra = document.querySelector("#sect5-res-a");
sect5ra.hidden = true;
var sect5rb = document.querySelector("#sect5-res-b");
sect5rb.hidden = true;
var sect6ra = document.querySelector("#sect6-res-a");
sect6ra.hidden = true;
var sect6rb = document.querySelector("#sect6-res-b");
sect6rb.hidden = true;
root.style.backgroundImage = "url(./images/2.jpg)"
root.style.backgroundRepeat="no-repeat";
root.style.backgroundPosition = "center center";
root.style.backgroundAttachment="fixed";
root.style.backgroundSize = "cover";
*/