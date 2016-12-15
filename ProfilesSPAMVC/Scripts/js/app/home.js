/* global angular */
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
  'TitleService',
  function ($scope, MenuMainModel, HomeDataService, HomeWrapperService, HomeModel, PageTitleModel, PageHeaderModel, TitleService) {
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

      TitleService.get(PageTitles.HOME, function (data) {
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
]);

/* global angular */
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
    var _markdownParagraphs = "";
    return {
        setMarkdownParagraphs: function (newMarkdownParagraphs) {
            _markdownParagraphs = newMarkdownParagraphs;
        },
        getMarkdownParagraphs: function () {
            return _markdownParagraphs;
        }
    };
});

/* global angular */
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
]);