function countdown(seconds){
    let timer = setInterval (function(){
        console.log(seconds);
        seconds--;
        if(seconds < 0){
            clearInterval(timer);
            console.log(timer);

        }
    },1000)
}
countdown(10)







