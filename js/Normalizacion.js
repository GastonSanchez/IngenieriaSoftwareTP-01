const { log } = require("console");
const { response } = require("express");
const SmartyStreetsSDK = require("smartystreets-javascript-sdk");
const SmartyStreetsCore = SmartyStreetsSDK.core;
const Lookup = SmartyStreetsSDK.usStreet.Lookup;
//configuraciones para pder usar SDK

let authId = process.env.SMARTY_AUTH_TOKEN;
let authToken = process.env.SMARTY_AUTH_TOKEN;
const credentials = new SmartyStreetsCore.StaticCredentials (authId, authToken);
//creamos una instancia de cliente y variables de entorno

let client = SmartyStreetsCore.buildClient.usStreet(credentials);

let lookup = new Lookup ("1600 Amphiteatre Parwkay Mountain View, CA 94043");

client.send(lookup)
    .then(handlaSuccess)
    .catch(handleError);

function handlaSuccess(response){
    var result = response.lookup[0].result[0];
    console.log("Adress:  " + result.delieryLine1 + " " + result.lastLine);
    console.log("Latitude:  " + result.metadata.latitude);
    console.log("Longitude:  " + result.metadata.longitude);
    }

function handleError (response){
    console.log (response);
}
