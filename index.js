const http = require('http');
const url = require('url');
const port = 3000;
const querystring = require('querystring');

const requestHandler = (request, response) => { 

        var page = url.parse(request.url).pathname;

        console.log(page);

        if (page == '/') {

           response.end('Bienvenue sur notre serveur!!');

        }

         else if (page == '/contact') {

            response.end('Nous ne sommes pas joignables pour le moment ! ');

         }

         else if (page == '/display') {
             var params = querystring.parse(url.parse(request.url).query);
             response.writeHead(200, {"Content-Type": "text/plain"});
             if ('name' in params) {
                response.end('Vous tentez d\'afficher le profil de ' 
                +params['name']);
        }
             
    }
    response.end();

};
const server = http.createServer(requestHandler);

server.listen(3000);
