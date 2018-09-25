$(document).ready(function () {
    function claimSubscriptions(event) {
        event.preventDefault();
        console.log("You clicked at least");

        var subInfo = {
            food_sub: $("#foodDelivery").is(":checked"),
            groom_sub: $("#groomSub").is(":checked"),
            walk_sub: $("#walkSub").is(":checked"),
            sit_sub: $("#sitSub").is(":checked")
        }
        $.post("/api/subs", subInfo);
        alert("You've chosen subscriptions!");
        window.location.href = "/TYpage.html"
    }
    $(document).on("click", "#submit", claimSubscriptions);
});
