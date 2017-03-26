(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])
.run(require('./config/config'))
.config(require('./routes/main'));

require('./controllers/main');
require('./services/main');

},{"./config/config":2,"./controllers/main":7,"./routes/main":8,"./services/main":15}],2:[function(require,module,exports){
module.exports = function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
}

},{}],3:[function(require,module,exports){
module.exports = function($scope) {
  $scope.settings = {
    enableFriends: true
  };
}

},{}],4:[function(require,module,exports){
module.exports = function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
}

},{}],5:[function(require,module,exports){
module.exports = function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
}

},{}],6:[function(require,module,exports){
module.exports = function($scope) {}

},{}],7:[function(require,module,exports){
module.exports = angular.module('starter.controllers', [])
.controller('DashCtrl', require('./DashController'))
.controller('ChatsCtrl', require('./ChatsController'))
.controller('ChatDetailCtrl', require('./ChatDetailController'))
.controller('AccountCtrl', require('./AccountController'));

},{"./AccountController":3,"./ChatDetailController":4,"./ChatsController":5,"./DashController":6}],8:[function(require,module,exports){
module.exports = function($stateProvider, $urlRouterProvider) {
  $stateProvider
  // Tabs routes
    .state('tab', require('./tabs/main'))
    .state('tab.dash', require('./tabs/dash'))
    .state('tab.chats', require('./tabs/chats'))
    .state('tab.chat-detail', require('./tabs/chat-detail'))
    .state('tab.account', require('./tabs/account'));
  $urlRouterProvider.otherwise('/tab/dash');

}

},{"./tabs/account":9,"./tabs/chat-detail":10,"./tabs/chats":11,"./tabs/dash":12,"./tabs/main":13}],9:[function(require,module,exports){
module.exports = {
  url: '/account',
  views: {
    'tab-account': {
      templateUrl: 'templates/tabs/account.html',
      controller: 'AccountCtrl'
    }
  }
}

},{}],10:[function(require,module,exports){
module.exports = {
  url: '/chats/:chatId',
  views: {
    'tab-chats': {
      templateUrl: 'templates/tabs/chat-detail.html',
      controller: 'ChatDetailCtrl'
    }
  }
}

},{}],11:[function(require,module,exports){
module.exports = {
  url: '/chats',
  views: {
    'tab-chats': {
      templateUrl: 'templates/tabs/chats.html',
      controller: 'ChatsCtrl'
    }
  }
}

},{}],12:[function(require,module,exports){
module.exports = {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tabs/dash.html',
        controller: 'DashCtrl'
      }
    }
}

},{}],13:[function(require,module,exports){
module.exports = {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs/index.html'
}

},{}],14:[function(require,module,exports){
module.exports = function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
}

},{}],15:[function(require,module,exports){
module.exports = angular.module('starter.services', [])
.factory('Chats', require('./ChatService'));

},{"./ChatService":14}]},{},[1]);
