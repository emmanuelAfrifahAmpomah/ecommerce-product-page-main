$("document").ready(function() {
    $(".cartModal").hide();
     $(".navCart").click(function() {
         $(".cartModal").fadeToggle();
     });

     var cart_item_count = 0;
     $("#cartButton").click(function() {
        cart_item_count++;
        var img_source = $(this).parents(".imageSection").siblings("img").attr("src");
        var titles = $(this).parents(".otherSection").find(".fall").text;
        var prices = $(this).parents(".otherSection").siblings(".money").find("span:nth-child(1)").text();

        var cart_item = `
        <div class="main d-flex p-4 border border-left-0 border-right-0 border-top-0">
        <div class="col-md-3 border border-left-0 border-right-0 border-top-0">
        <img src=${img_source} class="w-100" alt=""/>
        </div>

        <div id="title" class="col-md-3 d-flex flex-wrap align-content-center">
        <h6 style="font-size:13px;">${titles}</h6>
        </div>

        <div class="col-md-3 d-flex flex-wrap align-content-center">
        <span class="mx-2">1</span>
        </div>

        <div class="col-md-2 d-flex flex-wrap align-content-center" id="t_price">
        <h6 class="mt-2 d-flex"><span> $ </span> <span class="span_item_price">${prices}</span></h6>
        </div>

        <div class="col-md-1 d-flex flex-wrap align-content-center">
        <span class="close" style="cursor:pointer; font-size: 25px">&times</span>
        </div>
        </div>
        
        `

        // $("#order").append(cart_item);
        // $("#cartBadge").text(cart_item.count);
        // $(".close").click(function() {
        //     $(this).parents(".main").remove();
        //     item_count();
        // })
        // item_count();
     })


    //  function item_count() {
    //     var res = $("#order").children().length;
    //     $("$cart_item_count").text (res);
    //  }
 });