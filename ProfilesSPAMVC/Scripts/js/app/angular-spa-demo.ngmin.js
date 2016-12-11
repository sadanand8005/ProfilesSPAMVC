/* global angular */
angular.module('AppComponentsModule', [
  'HomeComponentsModule',
  'ProfilesComponentsModule',
  'ResourcesComponentsModule',
  'AboutComponentsModule'
]);/* global angular */
angular.module('AboutComponentsModule', [
  'AboutControllerModule',
  'AboutDataServiceModule',
  'AboutWrapperServiceModule',
  'AboutModelModule'
]);/* global angular */
/**
 * @ngdoc object
 * @name AboutController
 * @requires $scope
 * @requires MenuMainModel
 * @requires AboutDataService
 * @requires AboutWrapperService
 * @requires AboutModel
 * @requires PageTitleModel
 * @requires PageHeaderModel
 * @description
 *
 * Controller for the about page:
 *
 *   - set the model on the controller's `$scope`
 *   - set the current menu item id
 *   - call the about data service, and set values on about model accordingly
 *   - call the about wrapper service, and set the values on the page title and header models accordingly
 *
 */
angular.module('AboutControllerModule', []).controller('AboutController', [
  '$scope',
  'MenuMainModel',
  'AboutDataService',
  'AboutWrapperService',
  'AboutModel',
  'PageTitleModel',
  'PageHeaderModel',
  function ($scope, MenuMainModel, AboutDataService, AboutWrapperService, AboutModel, PageTitleModel, PageHeaderModel) {
    $scope.aboutModel = AboutModel;
    MenuMainModel.setCurrentMenuItemId(MenuMainModel.ABOUT);
    AboutDataService.query(function (data) {
      AboutModel.setParagraphs(data.paragraphs);
    });
    AboutWrapperService.query(function (data) {
      PageTitleModel.setTitle(data.title);
      PageHeaderModel.setTitle(data.header.title);
      PageHeaderModel.setParagraphs(data.header.paragraphs);
    });
  }
]);/* global angular */
/**
 * @ngdoc service
 * @name AboutDataService
 * @requires $resource
 * @description
 *
 * Service to get the data for the about page.
 *
 */
angular.module('AboutDataServiceModule', ['ngResource']).factory('AboutDataService', [
  '$resource',
  function ($resource) {
      return $resource(Data.aboutData, {}, { query: { method: 'GET' } });
  }
]);/* global angular */
/**
 * @ngdoc object
 * @name AboutModel
 * @function
 * @description
 *
 * This is the model for the About page.
 *
 */
angular.module('AboutModelModule', []).factory('AboutModel', function () {
  var _paragraphs = [];
  return {
    setParagraphs: function (newParagraphs) {
      _paragraphs = newParagraphs;
    },
    getParagraphs: function () {
      return _paragraphs;
    }
  };
});/* global angular */
/**
 * @ngdoc service
 * @name AboutWrapperService
 * @requires $resource
 * @description
 *
 * Service to get the wrapper for the about page.
 *
 */
angular.module('AboutWrapperServiceModule', ['ngResource']).factory('AboutWrapperService', [
  '$resource',
  function ($resource) {
      return $resource(Data.aboutWrapper, {}, { query: { method: 'GET' } });
  }
]);/* global angular */
angular.module('HomeComponentsModule', [
  'HomeControllerModule',
  'HomeModelModule',
  'HomeDataServiceModule',
  'HomeWrapperServiceModule'
]);/* global angular */
/**
 * @ngdoc object
 * @name HomeController
 * @requires $scope
 * @requires MenuMainModel
 * @requires HomeDataService
 * @requires HomeWrapperService
 * @requires HomeModel
 * @requires PageTitleModel
 * @requires PageHeaderModel
 * @description
 *
 * Define controller for the Home page.
 *
 * Do the following:
 *
 *   - set the model on the controller's `$scope`
 *   - set the current menu item id
 *   - call the home data service, and set values on home model accordingly
 *   - call the home wrapper service, and set the values on the page title and header models accordingly
 *
 */
angular.module('HomeControllerModule', []).controller('HomeController', [
  '$scope',
  'MenuMainModel',
  'HomeDataService',
  'HomeWrapperService',
  'HomeModel',
  'PageTitleModel',
  'PageHeaderModel',
  function ($scope, MenuMainModel, HomeDataService, HomeWrapperService, HomeModel, PageTitleModel, PageHeaderModel) {
    $scope.homeModel = HomeModel;
    MenuMainModel.setCurrentMenuItemId(MenuMainModel.HOME);
    HomeDataService.query(function (data) {
      HomeModel.setMarkdownParagraphs(data.markdownParagraphs);
    });
    HomeWrapperService.query(function (data) {
      PageTitleModel.setTitle(data.title);
      PageHeaderModel.setTitle(data.header.title);
      PageHeaderModel.setParagraphs(data.header.paragraphs);
    });
  }
]);/* global angular */
/**
 * @ngdoc service
 * @name HomeDataService
 * @requires $resource
 * @description
 *
 * Service to get the data for the home page.
 *
 */
angular.module('HomeDataServiceModule', ['ngResource']).factory('HomeDataService', [
  '$resource',
  function ($resource) {
      return $resource(Data.homeData, {}, { query: { method: 'GET' } });
  }
]);/* global angular */
/**
 * @ngdoc object
 * @name HomeModel
 * @function
 * @description
 *
 * This is the model for the Home page.
 *
 */
angular.module('HomeModelModule', []).factory('HomeModel', function () {
  var _markdownParagraphs = [];
  return {
    setMarkdownParagraphs: function (newMarkdownParagraphs) {
      _markdownParagraphs = newMarkdownParagraphs;
    },
    getMarkdownParagraphs: function () {
      return _markdownParagraphs;
    }
  };
});/* global angular */
/**
 * @ngdoc service
 * @name HomeWrapperService
 * @requires $resource
 * @description
 *
 * Service to get the wrapper for the home page.
 *
 */
angular.module('HomeWrapperServiceModule', ['ngResource']).factory('HomeWrapperService', [
  '$resource',
  function ($resource) {
      return $resource(Data.homeWrapper, {}, { query: { method: 'GET' } });
  }
]);/* global angular */
angular.module('ProfilesComponentsModule', [
  'ProfilesControllerModule',
  'ProfilesModelModule',
  'ProfilesDataServiceModule',
  'ProfilesWrapperServiceModule'
]);/* global angular */
/**
 * @ngdoc object
 * @name ProfilesController
 * @requires $scope
 * @requires MenuMainModel
 * @requires ProfilesDataService
 * @requires ProfilesWrapperService
 * @requires ProfilesModel
 * @requires PageTitleModel
 * @requires PageHeaderModel
 * @description
 *
 * Controller for the profiles page:
 *
 *   - set the model on the controller's `$scope`
 *   - set the current menu item id
 *   - call the profiles data service, and set values on profiles model accordingly
 *   - call the profiles wrapper service, and set the values on the page title and header models accordingly
 *
 */
angular.module('ProfilesControllerModule', []).controller('ProfilesController', [
  '$scope',
  'MenuMainModel',
  'ProfilesDataService',
  'ProfilesWrapperService',
  'ProfilesModel',
  'PageTitleModel',
  'PageHeaderModel',
  function ($scope, MenuMainModel, ProfilesDataService, ProfilesWrapperService, ProfilesModel, PageTitleModel, PageHeaderModel) {
    $scope.profilesModel = ProfilesModel;
    MenuMainModel.setCurrentMenuItemId(MenuMainModel.PROFILES);
    ProfilesDataService.query(function (data) {
      ProfilesModel.setProfiles(data);
    });
    ProfilesWrapperService.query(function (data) {
      PageTitleModel.setTitle(data.title);
      PageHeaderModel.setTitle(data.header.title);
      PageHeaderModel.setParagraphs(data.header.paragraphs);
    });
  }
]);/* global angular */
/**
 * @ngdoc service
 * @name ProfilesDataService
 * @requires $resource
 * @description
 *
 * Service to get the data for the profiles page.
 *
 */
angular.module('ProfilesDataServiceModule', ['ngResource']).factory('ProfilesDataService', [
  '$resource',
  function ($resource) {
      return $resource(Data.profileData, {}, {
      query: {
        method: 'GET',
        isArray: true
      }
    });
  }
]);/* global angular */
/**
 * @ngdoc object
 * @name ProfilesModel
 * @function
 * @description
 *
 * This is the model for the Profiles page.
 *
 */
angular.module('ProfilesModelModule', []).factory('ProfilesModel', function () {
  var _profiles = [];
  return {
    setProfiles: function (newProfiles) {
      _profiles = newProfiles;
    },
    getProfiles: function () {
      return _profiles;
    }
  };
});/* global angular */
/**
 * @ngdoc service
 * @name ProfilesWrapperService
 * @requires $resource
 * @description
 *
 * Service to get the wrapper for the profiles page.
 *
 */
angular.module('ProfilesWrapperServiceModule', ['ngResource']).factory('ProfilesWrapperService', [
  '$resource',
  function ($resource) {
      return $resource(Data.profileWrapper, {}, { query: { method: 'GET' } });
  }
]);/* global angular */
angular.module('ResourcesComponentsModule', [
  'ResourcesControllerModule',
  'ResourcesModelModule',
  'ResourcesDataServiceModule',
  'ResourcesWrapperServiceModule'
]);/* global angular */
/**
 * @ngdoc object
 * @name ResourcesController
 * @requires $scope
 * @requires MenuMainModel
 * @requires ResourcesDataService
 * @requires ResourcesWrapperService
 * @requires ResourcesModel
 * @requires PageTitleModel
 * @requires PageHeaderModel
 * @description
 *
 * Controller for the resources page:
 *
 *   - set the model on the controller's `$scope`
 *   - set the current menu item id
 *   - call the resources data service, and set values on resources model accordingly
 *   - call the resources wrapper service, and set the values on the page title and header models accordingly
 *
 */
angular.module('ResourcesControllerModule', []).controller('ResourcesController', [
  '$scope',
  'MenuMainModel',
  'ResourcesDataService',
  'ResourcesWrapperService',
  'ResourcesModel',
  'PageTitleModel',
  'PageHeaderModel',
  function ($scope, MenuMainModel, ResourcesDataService, ResourcesWrapperService, ResourcesModel, PageTitleModel, PageHeaderModel) {
    $scope.resourcesModel = ResourcesModel;
    MenuMainModel.setCurrentMenuItemId(MenuMainModel.RESOURCES);
    ResourcesDataService.query(function (data) {
      ResourcesModel.setParagraphs(data.paragraphs);
    });
    ResourcesWrapperService.query(function (data) {
      PageTitleModel.setTitle(data.title);
      PageHeaderModel.setTitle(data.header.title);
      PageHeaderModel.setParagraphs(data.header.paragraphs);
    });
  }
]);/* global angular */
/**
 * @ngdoc service
 * @name ResourcesDataService
 * @requires $resource
 * @description
 *
 * Service to get the data for the resources page.
 *
 */
angular.module('ResourcesDataServiceModule', ['ngResource']).factory('ResourcesDataService', [
  '$resource',
  function ($resource) {
      return $resource(Data.resourceData, {}, { query: { method: 'GET' } });
  }
]);/* global angular */
/**
 * @ngdoc object
 * @name ResourcesModel
 * @function
 * @description
 *
 * This is the model for the About page.
 *
 */
angular.module('ResourcesModelModule', []).factory('ResourcesModel', function () {
  var _paragraphs = [];
  return {
    setParagraphs: function (newParagraphs) {
      _paragraphs = newParagraphs;
    },
    getParagraphs: function () {
      return _paragraphs;
    }
  };
});/* global angular */
/**
 * @ngdoc service
 * @name ResourcesWrapperService
 * @requires $resource
 * @description
 *
 * Service to get the wrapper for the resources page.
 *
 */
angular.module('ResourcesWrapperServiceModule', ['ngResource']).factory('ResourcesWrapperService', [
  '$resource',
  function ($resource) {
      return $resource(Data.resourceWrapper, {}, { query: { method: 'GET' } });
  }
]);/* global angular */
angular.module('AppDirectivesModule', [
  'PageDirectivesModule',
  'MenuDirectivesModule'
]);/* global angular */
angular.module('MenuDirectivesModule', [
  'MenuMainDirectiveModule',
  'MenuMainControllerModule',
  'MenuMainModelModule'
]);/* global angular */
/**
 * @ngdoc object
 * @name MenuMainController
 * @requires $scope
 * @requires MenuMainModel
 * @description
 *
 * Set the value of the model on the controller.
 *
 */
angular.module('MenuMainControllerModule', []).controller('MenuMainController', [
  '$scope',
  'MenuMainModel',
  function ($scope, MenuMainModel) {
    $scope.menuMainModel = MenuMainModel;
  }
]);/* global angular */
/**
 * @ngdoc directive
 * @name prMenuMain
 * @description
 *
 * Define the prMenuMain directive - set the value of `templateUrl` accordingly
 *
 */
angular.module('MenuMainDirectiveModule', []).directive('prMenuMain', function factory() {
  return {
    restrict: 'E',
    scope: true,
    templateUrl: Routes.menu,
    link: function () {
    }
  };
});/* global angular */
/**
 * @ngdoc object
 * @name MenuMainModel
 * @function
 * @description
 *
 * This is the model for the main menu.
 *
 * @note Because the code structure is tightly linked to the menu structure,
 * the menu items are defined here, rather than retrieving them from a service.
 *
 */
angular.module('MenuMainModelModule', []).factory('MenuMainModel', function () {
  var _HOME = 'home', _PROFILES = 'profiles', _RESOURCES = 'resources', _ABOUT = 'about', _currentMenuItemId = _HOME, _menuItems = [
      {
        'id': _HOME,
        'text': 'home',
        'url': '#/home'
      },
      {
        'id': _PROFILES,
        'text': 'profiles',
        'url': '#/profiles'
      },
      {
        'id': _RESOURCES,
        'text': 'resources',
        'url': '#/resources'
      },
      {
        'id': _ABOUT,
        'text': 'about',
        'url': '#/about'
      }
    ];
  return {
    HOME: _HOME,
    PROFILES: _PROFILES,
    RESOURCES: _RESOURCES,
    ABOUT: _ABOUT,
    getCurrentMenuItemId: function () {
      return _currentMenuItemId;
    },
    setCurrentMenuItemId: function (newCurrentMenuItemId) {
      _currentMenuItemId = newCurrentMenuItemId;
    },
    getMenuItems: function () {
      return _menuItems;
    }
  };
});/* global angular */
angular.module('PageDirectivesModule', [
  'PageTitleControllerModule',
  'PageTitleModelModule',
  'PageHeaderDirectiveModule',
  'PageHeaderControllerModule',
  'PageHeaderModelModule',
  'PageFooterDirectiveModule',
  'PageFooterControllerModule',
  'PageFooterModelModule'
]);/* global angular */
/**
 * @ngdoc object
 * @name PageFooterController
 * @requires $scope
 * @requires PageFooterModel
 * @description
 *
 * Set the value of the model on the controller.
 *
 */
angular.module('PageFooterControllerModule', []).controller('PageFooterController', [
  '$scope',
  'PageFooterModel',
  function ($scope, PageFooterModel) {
    $scope.pageFooterModel = PageFooterModel;
  }
]);/* global angular */
/**
 * @ngdoc directive
 * @name prPageFooter
 * @description
 *
 * Define the prPageFooter directive - set the value of `templateUrl` accordingly
 *
 */
angular.module('PageFooterDirectiveModule', []).directive('prPageFooter', function factory() {
  return {
    restrict: 'E',
    scope: true,
    templateUrl: Routes.footer,
    link: function () {
    }
  };
});/* global angular */
/**
 * @ngdoc object
 * @name PageFooterModel
 * @function
 * @description
 *
 * This is the model for the page footer.
 *
 * @note This is not currently used.
 *
 */
angular.module('PageFooterModelModule', []).factory('PageFooterModel', function () {
  var PageFooterModel = {};
  // TODO: complete
  return PageFooterModel;
});/* global angular */
/**
 * @ngdoc object
 * @name PageHeaderController
 * @requires $scope
 * @requires PageHeaderModel
 * @description
 *
 * Set the value of the model on the controller.
 *
 */
angular.module('PageHeaderControllerModule', []).controller('PageHeaderController', [
  '$scope',
  'PageHeaderModel',
  function ($scope, PageHeaderModel) {
    $scope.pageHeaderModel = PageHeaderModel;
  }
]);/* global angular */
/**
 * @ngdoc directive
 * @name prPageHeader
 * @description
 *
 * Define the prPageHeader directive - set the value of `templateUrl` accordingly
 *
 */
angular.module('PageHeaderDirectiveModule', []).directive('prPageHeader', function factory() {
  return {
    restrict: 'E',
    scope: true,
    templateUrl: Routes.header,
    link: function () {
    }
  };
});/* global angular */
/**
 * @ngdoc object
 * @name PageHeaderModel
 * @function
 * @description
 *
 * This is the model for the page header.
 *
 */
angular.module('PageHeaderModelModule', []).factory('PageHeaderModel', function () {
  var _title = '', _paragraphs = [];
  return {
    setTitle: function (newTitle) {
      _title = newTitle;
    },
    getTitle: function () {
      return _title;
    },
    setParagraphs: function (newParagraphs) {
      _paragraphs = newParagraphs;
    },
    getParagraphs: function () {
      return _paragraphs;
    }
  };
});/* global angular */
/**
 * @ngdoc object
 * @name PageTitleController
 * @requires $scope
 * @requires PageTitleModel
 * @description
 *
 * Set the value of the model on the controller.
 *
 */
angular.module('PageTitleControllerModule', []).controller('PageTitleController', [
  '$scope',
  'PageTitleModel',
  function ($scope, PageTitleModel) {
    $scope.pageTitleModel = PageTitleModel;
  }
]);/* global angular */
/**
 * @ngdoc object
 * @name PageTitleModel
 * @function
 * @description
 *
 * This is the model for the page title.
 *
 */
angular.module('PageTitleModelModule', []).factory('PageTitleModel', function () {
  var _title = '';
  return {
    setTitle: function (newTitle) {
      _title = newTitle;
    },
    getTitle: function () {
      return _title;
    }
  };
});/* global angular */
angular.module('AppFiltersModule', [
  'ProfilesFiltersModule',
  'UtilFiltersModule'
]);/* global angular */
angular.module('ProfilesFiltersModule', ['ProfilesImageAltTextFilterModule']);/* global angular */
/**
 * @ngdoc filter
 * @name ProfilesImageAltText
 * @description
 *
 * This filter creates appropriate alt text for a profile image.
 *
 * If the alt-text for the image is non-blank, it is always returned.
 *
 * If the alt-text for the image is blank, set return value to first name + space + last name.
 *
 * If either first or last name is blank, return just the non-blank value
 *      (no leading or trailing space).
 *
 * If all params are blank, return empty string.
 *
 * @param {String} altTextDefault The default alt text to use - may be blank
 * @param {String} nameFirst The first name of the person associated with the image
 * @param {String} nameLast The last name
 * @returns {String} The filtered text
 *
 */
angular.module('ProfilesImageAltTextFilterModule', []).filter('ProfilesImageAltText', function () {
  return function (altTextDefault, nameFirst, nameLast) {
    var altText = '';
    if (altTextDefault) {
      altText = altTextDefault;
    } else {
      if (nameFirst) {
        altText = nameFirst;
      }
      if (nameLast) {
        if (altText) {
          altText += ' ';
        }
        altText += nameLast;
      }
    }
    return altText;
  };
});/* global angular */
angular.module('UtilFiltersModule', ['MarkdownToHtmlFilterModule']);/* global angular */
/**
 * @ngdoc filter
 * @name MarkdownToHtml
 * @description
 *
 * This filter treats its input as Markdown text, and returns HTML.
 *
 * @param {String} markdownText The Markdown text to convert
 * @returns {String} The converted text
 *
 */
// TODO: write unit tests for this filter
angular.module('MarkdownToHtmlFilterModule', []).filter('MarkdownToHtml', function () {
  var converter = new Showdown.converter();
  return function (markdownText) {
    return converter.makeHtml(markdownText);
  };
});/* global angular */
angular.module('AppLibrariesModule', [
  'ngAnimate',
  'ngRoute',
  'ngSanitize',
  'ui.bootstrap'
]);/* global angular */
/**
 * @ngdoc object
 * @name MainApp
 * @requires $routeProvider
 * @description
 *
 * This is the main script, which does the following:
 *
 *   - loads all the submodules
 *   - defines routes via `$routeProvider`
 *   - sets html5Mode to true (removes the # from the route in the URI)
 *
 */
angular.module('MainApp', [
  'AppComponentsModule',
  'AppDirectivesModule',
  'AppFiltersModule',
  'AppLibrariesModule'
]).config([
  '$routeProvider',
  function ($routeProvider) {
    $routeProvider.when('/home', {
        templateUrl: Routes.home.view,
        controller: Routes.home.controller
    }).when('/profiles', {
        templateUrl: Routes.profiles.view,
        controller: Routes.profiles.controller
    }).when('/resources', {
        templateUrl: Routes.resources.view,
        controller: Routes.resources.controller
    }).when('/about', {
        templateUrl: Routes.about.view,
        controller: Routes.about.controller
    }).otherwise({ redirectTo: '/home' });
  }
]);