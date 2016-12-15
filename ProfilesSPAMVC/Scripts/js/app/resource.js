/* global angular */
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
    var _paragraphs = "";
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