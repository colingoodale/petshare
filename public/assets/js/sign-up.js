$(document).ready(function () {




    $(document).on("click", "#submit", insertNewUser);

    function insertNewUser() {
        event.preventDefault();
        const userInfo = {
            user_email: $("#login-email").val().trim(),
            first_name: $("#user-firstname").val().trim(),
            last_name: $("#user-lastname").val().trim(),
            user_password: $("#user-password").val().trim(),
            home_address_1: $("#user-homeaddress1").val().trim(),
            home_address_2: $("#user-homeaddress2").val().trim(),
            home_city: $("#user-homecity").val().trim(),
            home_state: $("#user-homestate".val().trim(),
                home_zipcode: $("#user-homezipcode").val().trim(),
                credit_numb: $("#user-credtinum").val().trim()
    };

        $.post("/api/users", userInfo);
    }
});