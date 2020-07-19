const dialogflow = require("dialogflow");
const config = require("../config/keys");


const sessionClient = new dialogflow.SessionsClient();
const sessionPath = sessionClient.sessionPath("newagent-pyjyai","react-bot-session");


module.exports = app=>{
    app.get('/',(req,res)=>{
        res.send({"hello":"there"});
    });
    
    app.post('/api/df_text_query',async(req,res)=>{

          // The text query request.
        const request = {
            session: sessionPath,
            queryInput: {
            text: {
                // The query to send to the dialogflow agent
                text: req.body.text,
                // The language used by the client (en-US)
                languageCode: "en-US",
            },
            },
        };
     //console.log(request);
    //  let responses = await sessionClient.detectIntent(request).catch(err => console.log("error in request"));
    //     console.log(responses);
    //     res.send(responses.queryResult);
        

        try {
            let responses = await sessionClient.detectIntent(request)
            console.log(responses);
            // return responses
            res.send(responses[0].queryResult);

        } catch (err) {
            res.send({'error':err.message})
        }
    });
    
    app.post('/api/df_event_query',(req,res)=>{
        res.send({"do":"Event Query"});
    });
}