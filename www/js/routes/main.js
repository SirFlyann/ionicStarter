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
