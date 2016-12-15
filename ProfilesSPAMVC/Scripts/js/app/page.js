/* global angular */
angular.module('PageDirectivesModule', [
  'PageTitleControllerModule',
  'PageTitleModelModule',
  'PageHeaderDirectiveModule',
  'PageHeaderControllerModule',
  'PageHeaderModelModule',
  'PageFooterDirectiveModule',
  'PageFooterControllerModule',
  'PageFooterModelModule',
  'TitleServiceModule'
]);


/* global angular */
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
    var _title = '', _paragraphs = "";
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
});


/* global angular */
/**
 * @ngdoc service
 * @name TitleService
 * @requires $resource
 * @description
 *
 * Service to get the title details of a page.
 *
 */
angular.module('TitleServiceModule', ['ngResource']).factory('TitleService', [
  '$resource',
  function ($resource) {
      return $resource(Data.TitleAPI, { id: 1 }, { query: { method: 'GET' } });
  }
]);