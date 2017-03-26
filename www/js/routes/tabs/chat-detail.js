module.exports = {
  url: '/chats/:chatId',
  views: {
    'tab-chats': {
      templateUrl: 'templates/tabs/chat-detail.html',
      controller: 'ChatDetailCtrl'
    }
  }
}
