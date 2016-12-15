/* global angular */
angular.module('AboutComponentsModule', [
  'AboutControllerModule',
  'AboutDataServiceModule',
  'AboutModelModule'
]);

/* global angular */
/**
 * @ngdoc object
 * @name AboutController
 * @requires $scope
 * @requires MenuMainModel
 * @requires AboutDataService
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
  'TitleService',
  'AboutModel',
  'PageTitleModel',
  'PageHeaderModel',
  function ($scope, MenuMainModel, AboutDataService, TitleService, AboutModel, PageTitleModel, PageHeaderModel) {
      $scope.aboutModel = AboutModel;
      MenuMainModel.setCurrentMenuItemId(MenuMainModel.ABOUT);
      AboutDataService.query(function (data) {
          AboutModel.setParagraphs(data.paragraphs);
      });
      TitleService.get(PageTitles.ABOUT, function (data) {
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
    var _paragraphs = "";
    return {
        setParagraphs: function (newParagraphs) {
            _paragraphs = newParagraphs;
        },
        getParagraphs: function () {
            return _paragraphs;
        }
    };
});