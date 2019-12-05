$(function(){
    $("#btn-submit").on("click", function(event){
        event.preventDefault();
        console.log("new burger is created");
        var newBurger = {
            name: $("#text-burger").val().trim(),
        };
        
        $.post("/api/burgers",newBurger, function(){
            console.log("created new burger");
            location.reload();
        });
    });

    $(".change-devour").on("click", function(event){
        var id = $(this).data("id");

        var newDevourState = {
            devoured: true
        };

        $.ajax({
            url: "/api/burgers/" + id,
            type: "PUT",
            data: newDevourState
        }).then(function(){
            console.log("Devour the burger of " + id);
            location.reload();
        })
    })
});