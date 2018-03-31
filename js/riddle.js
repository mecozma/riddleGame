var Riddle = Backbone.Model.extend({
    urlRoot: 'https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_ten',
    validate(attrs) {
        if (!(attrs.description)) {
            return 'Description is required';
        }
    }
});
