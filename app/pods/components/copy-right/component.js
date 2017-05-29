import Component from 'ember-component';
import computed from 'ember-computed';

export default Component.extend({
    tagName: 'p',
    classNames: ['copyright'],

    year: computed(function () {
        return new Date().getFullYear();
    })
});
