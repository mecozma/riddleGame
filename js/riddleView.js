var RiddleView = Backbone.View.extend({
    tagName: 'li',
    events: {
        'click #compare': 'onClickCompare',
        'keypress #userAnswer': 'onKeyPress'
    },
    onKeyPress: function(e) {
        if (e.keyCode === 13) {
            var $textBox = this.$('#userAnswer');
            if ($textBox.val() < 1) {
                alert('Please insert an answer!');
            };

            var $textBox = this.$('#userAnswer');
            var userAnswer = $textBox.val().toLowerCase();
            var correctAnswer = this.model.escape('punchline').toLowerCase();
            
            if (userAnswer === correctAnswer) {
                this.$el.append('You got it right!').addClass('right-answer');
            } else {
                this.$el.append('Nah! try again...').addClass('wrong-answer');
            }

            $textBox.addClass('hide');
            console.log('Enter pressed');
            $textBox.val('');
        }
    },
    onClickCompare: function(){
       
        this.$el.append("<br />" + "<span>" + this.model.escape('punchline') + "</span>");
        
        
    },
    initialize: function(options) {
        if(!(options && options.model)) {
            throw new Error("The Model is not specified");
        }
    },
   render: function() {
       this.$el.html(this.model.escape('setup') + '<input type="text" autofocus id="userAnswer" placeholder="Your answer here" type="text"></input>' + '<button id="compare">See Answer</button>');

       return this;
   }
});