/**
 * A plain and hastily-written service component,
 * used to post hard-coded data to server API from the browser
 * in one click of a button.
 */

app.component('postData', {
  template: '<button data-ng-click="$ctrl.post()">Click to send data to test API</button>',
  controller: function($http) {
    var self = this;

    this.letter = {
      mailbox: '57ff84133727f3110444cb18',
      subject: 'Горячие туры!',
      body: 'Тур в Мексику. Вылет из Самары 45000. Тур в Зимбабве. Вылет из Самары 68000. Тур на Мальдивы. Вылет из Москвы 1200000',
      to: 'mкKyzb@mail.xyz'
    },

    this.contact = {
        fullName: 'Раймунд Дикси',
        email: 'qwerty@iwantsleep.com',
        avatarUrl: 'http://randomuser.me/api/portraits/thumb/men/29.jpg',
        birthdate: new Date(666, 5, 6),
        gender: 'M',
        address: 'qwerty'
    },

    this.post = function() {
      $http.post('//test-api.javascript.ru/v1/maxm/users', self.contact)
        .then(function() {
          console.log('Data was inserted successfully');
        },
        function(response) {
          console.log('Houston we\'ve got problems: ' + response.status + ', ' + response.statusText);
      });
    }
  }
});
