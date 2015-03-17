(function(){
  'use strict';

  angular.module( 'app' )
    .constant( 'constants', (function(){

      var userRoles = {
        public: 1, // 001
        user: 2, // 010
        admin: 4 // 100
      };
      var accessLevels = {
        public: userRoles.public | // 111
        userRoles.user |
        userRoles.admin,
        anon: userRoles.public, // 001
        user: userRoles.user | // 110
        userRoles.admin,
        admin: userRoles.admin // 100
      };

      return {
        USER_ROLES: userRoles,
        ACCESS_LEVELS: accessLevels
      }
    })() );
}());
