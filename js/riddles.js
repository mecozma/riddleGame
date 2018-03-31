var Riddles = Backbone.Collection.extend({
 model: Riddle,
 url: 'https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_ten'
});
