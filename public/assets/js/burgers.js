$(function(){
    $("#btn-submit").on("click", function(event){
        event.preventDefault();
        
        var newBurger = {
            name: $("#text-burger").val().trim(),
            quantity: parseInt($("#text-quantity").val().trim())
        };
        console.log(newBurger);
        $.post("/api/burgers",newBurger, function(data){
            location.reload();
        });
    });

    $(".change-devour").on("click", function(event){
        // var id = $(this).data("id");
        // var newDevourState = {
        //     devoured: true
        // };
        var id = $(this).siblings(".custom-select").val();
        console.log("button id = " + $(this).data("id"));
        console.log("customer id = " + id);
        var newServeState = {
            served: true
        }
        $.ajax({
            url: "/api/customers/" + id,
            type: "PUT",
            data: newServeState
        }).then(function(){
            console.log("Serve to customer " + id);
            location.reload();
        })
    });

    $("#btn-submitOrder").on("click", function(event){
        event.preventDefault();
        var newCustomer = {
            name: $("#text-customer").val().trim(),
            BurgerId: $("#select-burger").val()
        };
        $.post("/api/customers", newCustomer, function(data){
            location.reload();
        });
    })
});