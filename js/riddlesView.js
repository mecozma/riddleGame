var RiddlesView = Backbone.View.extend({
    tagName: 'ul',
    id: 'questions',
    initialize: function (options) {
        if (!(options && options.model)) {
            throw new Error("Model is not specified");
        }
        this.model.on('add', this.onClickGetScore, this);
    },
    events: {
        'click #get-score': 'onClickGetScore',
        'click #reset': 'onClickResetScore'
        
    },
    onClickGetScore: function () {
        var numItems = $('.right-answer').length;
        var e = $('<div></div>');
        this.$el.append(e);
        e.attr('id', 'score');

        if (numItems > this.model.get('score')) {
            this.model.add({score: numItems});
        }

        console.log('Your score is: ' + numItems);
    },
    onClickResetScore: function () {
        this.model.destroy();
    },
   
    render: function () {
        var numItems = $('.right-answer').length;
        this.$el.append('<button id="get-score">Get Score</button>');
        this.model.each(function (riddle) {
            var view = new RiddleView({ model: riddle });
            this.$el.append(view.render().$el);
        }, this);
        this.$el.find('.score').empty().html('<p>Your score is: ' + numItems + '</p>' + '<br />' +
                                             '<p>Your  previous score was :</p>' +
                                              '<button id="reset"> Reset score</button>');
        return this;
    }


});