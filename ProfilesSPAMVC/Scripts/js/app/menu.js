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
});
