    //ノンブロッキング処理(次の処理を実行)
    setTimeout(function(){
        console.log("Hello");
    },1000)
    console.log('world');