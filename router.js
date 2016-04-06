Router.route('/form');
Router.route('/display');
Router.route('/', {
  name: 'home',
  template: "home"
});

Router.configure({
  layoutTemplate: 'main',
});

Router.route('/january');
Router.route('/february');
Router.route('/march');
Router.route('/april');
Router.route('/may');
Router.route('/june');
Router.route('/july');
Router.route('/august');
Router.route('/september');
Router.route('/october');
Router.route('/november');
Router.route('/december');
