import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['form-group'],

    didInsertElement: function () {
        this._super(...arguments);

        let inputId = this.$('input', this.element).attr('id');

        this.$('label', this.element).attr('for', inputId);
    }
});
