$("#sidebar-emcor-logo").click(collapseSidebar);


function collapseSidebar(event) {
    event.preventDefault();
    $(".sidebar-nav-menu-level-2-items-container").removeClass("in");
    $(".sidebar-nav-menu-level-3-items-container").removeClass("in");
    $("#sidebar").toggleClass("minified");
    $("#sidebar-emcor-logo").toggleClass("minified");
    $("#sidebar-search-input-container").toggleClass("minified");
    $("#sidebar-search-input").toggleClass("minified");
}