//Later can be moved to partiall views if server side dynamism is needed
var Routes = (function () {

    var _api = {
        home: { view: "Content/Views/components/home/home-main-view.html", controller: "HomeController" },
        profiles: { view: "Content/Views/components/profiles/profiles-main-view.html", controller: "ProfilesController" },
        resources: { view: "Content/Views/components/resources/resources-main-view.html", controller: "ResourcesController" },
        about: { view: "About/MainView", controller: "AboutController" },
        header: "Content/Views/directives/page/page-header-view.html",
        footer: "Content/Views/directives/page/page-footer-view.html",
        menu: "Content/Views/directives/menu/menu-main-view.html"
    };

    return _api;
})();

var Data = (function () {
    var _api = {
        aboutWrapper: "About/Wrapper",
        aboutData: "About/Data",
        homeWrapper: "Home/Wrapper",
        homeData: "Home/Data",
        profileWrapper: "Profiles/Wrapper",
        profileData: "Profiles/Data",
        resourceWrapper: "Resources/Wrapper",
        resourceData: "Resources/Data",
        TitleAPI: "api/Title/:id"
    };

    return _api;
})();

var PageTitles = { HOME: 1, PROFILES: 2, RESOURCES: 3, ABOUT: 4 };