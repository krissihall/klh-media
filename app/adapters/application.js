import FirebaseAdapter from 'emberfire/adapters/firebase';

export default FirebaseAdapter.extend({
    firebase: new window.Firebase('https://klh-media.firebaseio.com')
});
