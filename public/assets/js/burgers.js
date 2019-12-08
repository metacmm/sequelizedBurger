$(function(){
    $("#btn-submit").on("click", function(event){
        event.preventDefault();
        
        var newBurger = {
            name: $("#text-burger").val().trim(),
        };
        console.log(newBurger);
        $.post("/api/burgers",newBurger, function(data){
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