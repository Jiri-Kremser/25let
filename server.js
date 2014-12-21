#!/bin/env node
//  OpenShift Node application (satic content built by grunt)
console.log('running server.js ...');

var express = require('express');
var app = express();

app.use(express.static(__dirname + '/dist'));

var port = process.env.OPENSHIFT_NODEJS_PORT || 3000;
var ip = process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';
app.listen(port, ip, function(){
    console.log('%s: Node server started on %s:%d ...',
        Date(Date.now() ), ip, port);
    }
);

