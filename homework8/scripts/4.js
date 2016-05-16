function Article() {
      this.created = new Date();

      Article.count++;
      Article.data = this.created;
    }
    Article.count = 0;
    Article.showStats = function() {
      alert( 'Всего: ' + this.count + ', Последняя: ' + this.data );
    }

    new Article();
    new Article();
    Article.showStats(); // Всего: 2, Последняя: (дата)
    new Article();
    Article.showStats(); // Всего: 3, Последняя: (дата)
