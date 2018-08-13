(function($) {
    var Id = setInterval(function() {
        try {
            $('.js-profile-header-vote').click();
            $('.js-ovl-close').click();
        } catch(e) {}
    }, 0);
})($)
