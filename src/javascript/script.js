$(document).ready(function(){
    $('#mobile_btn').on('click', function() {
        $('#mobile_menu').toggleCLass('active');
        $('#mobile_btn').find('i').toggleCLass('fa-x');

    });
});