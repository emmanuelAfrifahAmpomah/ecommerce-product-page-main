$("document").ready(function() {
    $("#cartBadge").hide();
    $("#checkout").hide();
    $(".cartModal").hide();
     $(".navCart").click(function() {
         $(".cartModal").fadeToggle();
     });

     var cart_item_count = 0;
     $("#cartButton").click(function() {
        
        var image_link = 'images/image-product-1.jpg'
        // var img_source = $('#productMain').attr('src', image_link);
        var titles = $(this).parents(".otherSection").find(".fall").text();
        var prices = $(this).parents(".otherSection").find(".price").text();
        var multiplicant = $(this).parents(".otherSection").find(".number").text();
        cart_item_count = multiplicant;

        var cart_item = `
        <div class="row main d-flex px-0 py-2" style="color: #87879D;">
        <div class="col-md-3 col-sm-1 col-xs-1 pe-0">
        <img src=${image_link} class="w-100 rounded" alt=""/>
        </div>

        <div id="title" class="col-md-7 pe-0 align-content-center">
        <h6 style="font-size:13px;">${titles}</h6>
        <h7 class="mt-0 d-flex"> <span class="span_item_price pe-2">${prices} x ${multiplicant}</span><strong>$<span>${125 * multiplicant}.00</span></strong></h7>
        </div>



        <div class="col-md-1 flex-wrap align-content-end">
        <span class="close" style="cursor:pointer;"><svg width="14" height="16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z" id="a"/></defs><use fill="#C3CAD9" fill-rule="nonzero" xlink:href="#a"/></svg></span>
        </div>
        </div>
        
        `

        // Pushing into cart modal
        // var theCartPush = $("#order").append(cart_item);
        if(multiplicant >= 1) {
            $("#order").append(cart_item);
            $(".modal-body").hide();
            $("#checkout").show();
            $("#cartBadge").show();
        }

        // else if($('#order').children().length == 0) {
        //     $("#cartBadge").hide();
        // }
        else{
            alert("Please select number of items");
        }
        
        
        

        $("#cartBadge").text(cart_item_count);

        $(".close").click(function() {
            $(this).parents(".main").remove();
            item_count();
            // cart_item_count--;
        })
        item_count();
        
     })


     function item_count() {
        var res = $("#order").children().length;
        $("$cart_item_count").text(res);
     }
 });


//  <div class="col-md-3 d-flex flex-wrap align-content-center">
//  <span class="mx-2">1</span>
//  </div>
