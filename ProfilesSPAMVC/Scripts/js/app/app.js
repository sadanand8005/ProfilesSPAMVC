/**
The angular.module is a global place for creating, registering and retrieving Angular modules. 
All modules (angular core or 3rd party) that should be available to an application must be registered using this mechanism.
Modules inside the angular js can be created using the below syntax.

angular.module(name, [requires], [configFn]);

Param       |   Type                |   Details
name        |   string              |	The name of the module to create or retrieve.
requires    |   !Array.<string>=    |   If specified then new module is being created. If unspecified then the module is being retrieved for further configuration.
(optional)
configFn    |   Function=           |   Optional configuration function for the module. Same as Module#config().
(optional)

Returns
angular.Module	
new module with the angular.Module api.
**/

/* global angular */
angular.module('AppComponentsModule', [
  'HomeComponentsModule',
  'ProfilesComponentsModule',
  'ResourcesComponentsModule',
  'AboutComponentsModule'
]);

/* global angular */
angular.module('AppFiltersModule', [
  'ProfilesFiltersModule',
  'UtilFiltersModule'
]);

/* global angular */
angular.module('UtilFiltersModule', ['MarkdownToHtmlFilterModule']);

/* global angular */
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
});

/* global angular */
angular.module('AppLibrariesModule', [
  'ngAnimate',
  'ngRoute',
  'ngSanitize',
  'ui.bootstrap'
]);

/* global angular */
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