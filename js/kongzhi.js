
        $("section span").velocity({"rotateX":-10,"translateZ":300},0);

        $("section span").each(function(i){
            $(this).show().delay(i*100).velocity("reverse",{"duration":600});
        });
        setTimeout(function(){
            $("section").empty();
        },3000)

        