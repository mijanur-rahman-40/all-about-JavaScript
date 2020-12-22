// const functions = require('firebase-functions');
var { google } = require('googleapis');
var MESSAGING_SCOPE = "https://www.googleapis.com/auth/firebase.messaging";
var SCOPES = [MESSAGING_SCOPE];

var http = require('http');

var express = require('express');
var app = express();


var bodyParser = require('body-parser');
var router = express.Router();

let _request = require('request');

var port = 8085;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
router.post('/send', function (request, _response)
{
    getAccessToken().then(function (access_token)
    {
        var title = request.body.title;
        var body = request.body.body;
        var token = request.body.token;

        _request.post({
            headers: {
                Authorization: 'Bearer ' + access_token
            },
            url: "https://fcm.googleapis.com/v1/projects/notification-6b08f/messages:send",
            body: JSON.stringify(
                {
                    "message": {
                        "token": token,
                        "notification": {
                            "body": body,
                            "title": title
                        }
                    }
                }

            )
        }, function (error, response, body)
        {
            _response.end(body);
            console.log(body);
        });

    });
});

app.use('/api', router);
app.listen(port, function ()
{
    console.log("Server is listening to port :" + port);
});

function getAccessToken()
{
    return new Promise(function (resolve, reject)
    {
        var key = require("./service-account.json");
        var jwtClient = new google.auth.JWT(
            key.client_email,
            null,
            key.private_key,
            SCOPES,
            null
        );
        jwtClient.authorize(function (error, tokens)
        {
            if (error)
            {
                reject(error);
                return;
            }
            resolve(tokens.access_token);
        });
    });
}
// exports.api = functions.https.onRequest(app);

// getAccessToken().then(function (access_token)
// {
//     console.log(access_token);
// });

// var server = http.createServer(function (request, response)
// {
//     getAccessToken().then(function (access_token)
//     {
//         response.end(access_token);
//     });
// });

// server.listen(3000, function ()
// {
//     console.log("Server is Started");
// });