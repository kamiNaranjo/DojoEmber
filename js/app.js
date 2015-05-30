App = Ember.Application.create();
//router map es donde se mapea todas las vistas y controladores
App.Router.map(function() {
	this.route('create', {path: '/create'});
});

App.CreateController = Ember.Controller.extend({
	actions: {
		create: function(){
			var userParams = this.get("model");
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
		controller.set('tittle', 'Crear Nuevo Usuario');
	}
});

