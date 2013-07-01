require["backbone", "underscore", "backbone.app"], function(){ 
	// an overlay above the page with editor options
	APP.Layouts.Editor
	{
		initialize : function(){
			this.views = {};
		}, 
		// add 
		add : function( name ){
			this.views[name] = new dat.GUI();
			//this.views[name] = new APP.Views.Edit();
		}, 
		update: function( data ){
			console.log( data );
		}
	}
	
	APP.Views.Edit
	{
		// 
		
		initialize : function(){
			this.view = new dat.GUI();
		}, 
	}

});

