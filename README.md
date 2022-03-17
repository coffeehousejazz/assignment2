
[![Social banner for Chatbot agent](https://www.comm100.com/wp-content/uploads/images/blog-banner-ai-powered-chatbot-1.png)](https://github.com/COSC310-Team-23/assignment2.git)

# **COSC 310 - Assignment 3** <img src="https://media3.giphy.com/media/S60CrN9iMxFlyp7uM8/giphy.gif?cid=ecf05e4704yigthbkvnneq2y40zp98jkeohqhlc8vuqhhpgk&rid=giphy.gif&ct=g" width="45px">

## 🔗 Link to our Github

<https://github.com/COSC310-Team-23/assignment2.git>

This is the Assignment 3 for Group 23 in COSC 310. The assignment's purpose is to create a simple chat agent. Our agent is a restaurant server that simulates ordering food at a restaurant.

## 📗 Our Chatbot is organized into Intents and Entities

Intents are descriptors that allow the chatbot to determine how to respond to your prompt. Intents are made up of a few sample phrases that a user might say to the chatbot, and a response delegated for those sample phrases. Ex: if you wanted to pay the bill at a restaurant you might say, “Can I have the bill”, “Check please” or “We’re ready to leave”. A human might interpret all those things as the same but the chatbot needs to be taught to recognize that all of these phrases result in requiring the bill. Intents are the pointers that tell the chatbot where to carry the conversation based on inputs coming from the user.

Entities are lists or categories of miscellaneous objects or categories that the chatbot might need to understand. These are also written into the chatbot so it can understand the specifics of what you might be asking for. The chatbot needs this data written into it because it might possibly have to refer back to it later. Ex: We may have a list of entities, called $drinks. In this list may be some options like water, soda, wine etc. When we reference drinks asking what drinks are available to the chatbot, it needs to be able to give us options in that category and will recite what is written in. Another use case is having the chatbot capable of repeating an entity back to you in conversation. Ex: “What would you like to drink?”, “I’ll have water” “Sure, $drinks coming up.” The chatbot here recognizes water, and in its response we can use the $drinks variable to reference the user's choice.

## 📕 Features

* New and improved GUI
* Extra topic added
* Voice-to-speech ability
* Detect and handle spelling mistakes, using machine learning from Google DialogFlow
* Extra responses created to help the flow of conversation
* More responses created for extraneous inputs
* Entity matching Toolkit applied
* Synonym matching Toolkit applied
* Second language (French) Toolkit applied
* Connected to Botium Unit Testing via Google Cloud for unit testing conversation

## 📘 GUI

The chatbot GUI resembles a simple ‘Facebook Messenger’ style chat window with full customizability. Built-in to the API is a sleek minimizable chat window with color scheme selection, chatbot profile options and full scalability for any device. Modifying the chatbot to fit in on any website is as easy as tweaking the CSS to your liking.

To use our chatbot without the HTML: You can also view it right on a web browser! Just follow this link: <https://bot.dialogflow.com/15436cfd-7c75-416d-9244-8014e6f10d41>

## 📙 Extra Topic

Our second topic is a Coffee Shop. Now, users can either order from the restaurant or order from the coffee shop. At the beginning of the Chatbot, we changed the welcome message to indicate that there is now a second topic. Users can also go to the other topic once finishing with one. For example, they can order from the coffee shop and after they finish their order, they can talk to the restaurant.

Example for extra topic:

## 📗 Voice-to-speech

Voice-to-speech allows for the user to talk into the microphone instead of typing. We enabled this ability within Google DialogFlow API.

## 📕 Handling Spelling

We used the Automatic Spell Correction from Google to detect incorrect spelling. The software uses Machine Learning to learn what spelling mistakes are common for our conversation. We train Machine Learning as we test our chatbot and make mistakes. Then, the Spell Correction learns over time what the response should be according to common mistakes.

## 📘 More responses

We added more responses to our ChatBot to handle various tasks. Our chatbot now responds to extraneous inputs with a variety of responses such as “Sorry, I don’t understand, could you repeat that?” and “what do you mean?” Another type of response that we added was to respond to small talk. The user is able to ask the chatbot questions like, “How are you?” and “You’re so sweet.”

Example for Extraneous:

Example for Small Talk:

## 📙 Toolkits

## 📗 Unit Testing

## 📕 Features that could be extracted with others as API

* The use of entities to easily and accurately detect user inputs
* The use of a Second Language Toolkit to adapt to French speaking users
* The use of Botium Unit Testing to test conversations
* Voice-to-speech ability
* Use of Machine Learning for spelling from Google DialogFlow

## 📘 GitHub Graphs

* **Level 0 DFD**
