#!/bin/env node
//  OpenShift Node application (satic content built by grunt)
console.log('running server.js ...',

var express = require('express');
var app = express();

app.use(express.static(__dirname + '/dist'));

var port = process.env.OPENSHIFT_NODEJS_PORT || 3000;
var ip = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
app.listen(port, ip, function(){
    console.log('%s: Node server started on %s:%d ...',
        Date(Date.now() ), self.ipaddress, self.port);
    }
);

