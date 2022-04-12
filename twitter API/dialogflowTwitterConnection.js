module.exports = defineComponent({
  props: {
    google_dialogflow: {
      type: "app",
      app: "google_dialogflow",
    }
  },
  async run({steps, $}) {
    // Example code from the Dialogflow Node.js library:
    // https://github.com/googleapis/nodejs-dialogflow
    const dialogflow = require('dialogflow')
    const uuid = require('uuid')
    
    // A unique identifier for the given session
    const sessionId = uuid.v4()
    
    const key = JSON.parse(this.google_dialogflow.$auth.key_json)
     
    // Creates a session client from a Google service account key.
    const sessionClient = new dialogflow.SessionsClient({
      projectId: key.project_id,
      credentials: {
        client_email: key.client_email,
        private_key: key.private_key,
      }
    })
    const sessionPath = sessionClient.sessionPath(key.project_id, sessionId)
    
    // The text query request.
    const request = {
      session: sessionPath,
      queryInput: {
        text: {
          // The query to send to the dialogflow agent
          text: steps.trigger.event.full_text,
          // The language used by the client (en-US)
          languageCode: 'en-US',
        },
      },
    }
    
    // Send request and log result
    const responses = await sessionClient.detectIntent(request)
    console.log('Detected intent')
    const result = responses[0].queryResult
    console.log(`Query: ${result.queryText}`)
    console.log(`Response: ${result.fulfillmentText}`)
    if (result.intent) {
      console.log(`Intent: ${result.intent.displayName}`)
    } else {
      console.log(`No intent matched.`)
    }
  },
})