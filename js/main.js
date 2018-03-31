$(document).ready(function(){
  var riddles = new Riddles();
  riddles.fetch({
      success: function() {
        var riddlesView = new RiddlesView({model: riddles});
        $('body').append(riddlesView.render().$el);
      }
  });

  
});