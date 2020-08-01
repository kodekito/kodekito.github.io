document.addEventListener("DOMContentLoaded", function(){
    var modals = document.querySelectorAll(".modal");
    M.Modal.init(modals);

    var btnClose = document.getElementById("closeNotif");
    btnClose.addEventListener('click', function() {
        var modal_notif = document.getElementById("modal-notif");
        var instance = M.Modal.getInstance(modal_notif);
        instance.close();
    });

})