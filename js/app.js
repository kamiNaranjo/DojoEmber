App = Ember.Application.create();
//router map es donde se mapea todas las vistas y controladores
App.Router.map(function() {
	this.route('create', {path: '/create'});
	this.route('index', {path: '/'});
});

App.CreateController = Ember.Controller.extend({
	actions: {
		create: function(){
			var userParams = this.get("model");
			$.ajax({
				url: 'http://proyectosudea.hol.es/users',
				type: 'POST',
				data: JSON.stringify(userParams),
				contentType: 'text/json'
			});
		}
	}
});

//Inicializacion

App.CreateRoute = Ember.Route.extend({
	model: function(){
		return Em.Object.create({});
	},
	setupController: function(controller, model){
		controller.set('model', model);
		controller.set('tittle', 'Crear un nuevo usuario');
	}
});

App.IndexController = Ember.Controller.extend({
	tittle: 'Lista de usuarios',
	users: '',
	actions: {
		delete: function(user){

		}
	}
});

App.IndexRoute = Ember.Route.extend({
	setupController: function(controller){
		$.get('http://proyectosudea.hol.es/users', function(data){
			controller.set('users', JSON.parse(data).users);
		});
	}
});