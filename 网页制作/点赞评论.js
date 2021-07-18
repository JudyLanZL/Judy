function dianZan(){
    var i = 0;
    return function(){
        this.innerHTML ="+"+ ++i;
    }
}
btn_zan.onclick = dianZan();
function caiZan(){
    var i = 0;
    return function(){
        this.innerHTML = --i;
    }
}
btn_cai.onclick = caiZan();