let n;
initBox(); //初始化
let timer=setInterval(()=>{  //自动播放
    makeLeave(getImg(n))
    .one('transitionend',(e)=>{
        makeEnter($(e.currentTarget))
    })
    makeCurrent(getImg(n+1))
    n +=1;
},3000)

// 封装函数
function initBox(){
    n=1
    $(`#images > img:nth-child(${n})`).addClass('current')
   .siblings().addClass('enter');
}
function x(n){
    if(n>5){
        n = n%5
        if (n===0){
            n = 5
        }
    }
    return n
}
function getImg(n){
    return $(`#images > img:nth-child(${x(n)})`)
 }
 function makeCurrent($node){
     return $node.removeClass('enter leave').addClass('current');
 }
 function makeLeave($node){
     return $node.removeClass('current enter').addClass('leave')
 }
 function makeEnter($node){  
     return $node.removeClass('leave current').addClass('enter')
 }
