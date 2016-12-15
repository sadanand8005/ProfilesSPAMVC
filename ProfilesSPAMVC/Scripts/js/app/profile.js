/* global angular */
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
  'TitleService',
  'ProfilesModel',
  'PageTitleModel',
  'PageHeaderModel',
  function ($scope, MenuMainModel, ProfilesDataService, TitleService, ProfilesModel, PageTitleModel, PageHeaderModel) {
      $scope.profilesModel = ProfilesModel;
      MenuMainModel.setCurrentMenuItemId(MenuMainModel.PROFILES);
      ProfilesDataService.query(function (data) {
          ProfilesModel.setProfiles(data);
      });
      TitleService.get(PageTitles.PROFILES, function (data) {
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
]);

/* global angular */
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
});