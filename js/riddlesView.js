var RiddlesView = Backbone.View.extend({
    tagName: 'ul',
    id: 'questions',
    initialize: function(options) {
        if(!(options && options.model)) {
            throw new Error("Model is not specified");
        }
    },
    events: {
        'click #get-score': 'onClickGetScore'
    },
    onClickGetScore: function() {
        console.log('get score');
    },
    render: function() {
        this.$el.append('<button id="get-score">Get Score</button>');
        this.model.each(function(riddle){
            var view = new RiddleView({model: riddle});
            this.$el.append(view.render().$el);
        },this);
    
        return this;
    }

    
});