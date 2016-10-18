var fs = require('fs');
cors = require('cors');

var appRouter = function(app) {
   app.use(cors());

	 app.get("/api/carros/", function(req, res) {

 		var data = fs.readFileSync('carros.json'), myObj;
		var listaCarros = [];
		
  		try {
  		  listaCarros = JSON.parse(data);
  		}
  		catch (err) {
  		  console.log(err);
  		}

     res.send(listaCarros);
	});

	 app.post("/api/carros/", function(req, res) {
	    var listaCarros = [];

      console.log(req.body);
      
  		var data = fs.readFileSync('carros.json'), myObj;
		
  		try {
  		  listaCarros = JSON.parse(data);
  		  listaCarros.push(req.body);

  		   fs.writeFile('./carros.json', JSON.stringify(listaCarros), function (err) {
  		     if (err) {
  		       console.log(err.message);
  		       return;
  		     }

  		     console.log('Configuration saved successfully.')
  		   });

  		}
  		catch (err) {
  		  console.log(err);
  		}
     
     res.send(listaCarros);
	 });
}
 
module.exports = appRouter;