#!/bin/env node
//  OpenShift Node application (satic content built by grunt)
var express = require('express');
var app = express();
app.use(express.static(__dirname + '/dist'));
app.listen(process.env.OPENSHIFT_NODEJS_PORT || 3000);
