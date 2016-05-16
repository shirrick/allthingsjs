function User(fullName) {
    this.fullName = fullName;

          Object.defineProperties(this, {

  firstName: {

        get: function() {
          return this.fullName.split(' ')[0];
        },

        set: function(newFirstName) {
          this.fullName = newFirstName + ' ' + this.lastName;
        }

      },

  lastName: {

        get: function() {
          return this.fullName.split(' ')[1];
        },

        set: function(newLastName) {
          this.fullName = this.firstName + ' ' + newLastName;
        }

      }
    });
  }

var vasya = new User('Александр Пушкин');

// чтение firstName/lastName
alert( vasya.firstName ); // Александр
alert( vasya.lastName ); // Пушкин

// запись в lastName
vasya.lastName = 'Толстой';

alert( vasya.fullName ); // Александр Толстой

// чето задание это и следующее - просто сотонинские
