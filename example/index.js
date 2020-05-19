const server=require('node-http-server');

server.deploy(
    {
        port: 3000,
        root: './'
    },
    serverReady
);

/*server.deploy(
    {
        port:8888,
        root:'~/myOtherApp/'
    },
    serverReady
);*/

function serverReady(server){
    console.log( `Example Server on port ${server.config.port} is now up. Check it out at http://127.0.0.1:${server.config.port}`);
}
