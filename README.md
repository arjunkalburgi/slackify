# slackify
Slackify is an Expo app that allows users to choose/take photos which then get resized to emoji dimensions perfect for uploading to Slack. With this app, a team can quickly grow their custom emoji index with all manner of photos.

![alt text](https://cdn-images-1.medium.com/max/1600/1*QnJhLtTd_b5B80E2gaZdSg.jpeg "Slackify")

See [Slackify-Pennapps](https://github.com/askalburgi/slackify-pennapps), for which I placed in the top 30 at PennApps 2017! This project is a refreshed version with a new style and new API structure. 

## story
[View the presentation slides here](https://docs.google.com/presentation/d/1QYxBOJ9L7WkLSDgvlYA_QW-j0uUHDGDZWHk3M0YrZBs/edit?usp=sharing)

The iQmetrix team, with whom I worked for 2 summers, had a great and creative custom emoji suite in their Slack channel. It helped contributed to a great team culture that was very positive and fun. 

I tested out custom emoji's in my own team's Slack channel for the Computer Engineering Club and it worked really well, even getting former students saying they missed them. 

So I decided to build Slackify, so that I could easier make custom emoji's from the pictures on my phone. 

## design 
[View the blog post here](https://medium.com/arjunkalburgi/redesigning-slackify-an-easy-custom-emoji-solution-for-slack-41c81b76e2be)

Slackify is designed to be bright and fun with a tartan pattern to reflect Slack's hashtag logo. 

It's clean and simple look was guided by it's functionality, which is clean and simple itself. 

I designed Slackify in Figma, [which you can see here](https://www.figma.com/file/GhJWMsF40sEEQy0M4OTAKAuj/Slackify-2018?node-id=37%3A5)

## code 
[View the blog post => "Coding the Design" section](https://medium.com/arjunkalburgi/redesigning-slackify-an-easy-custom-emoji-solution-for-slack-41c81b76e2be)

Most of the code for this app are in [App.js](./App.js) and [emoji.js](./components/emoji.js), but I also created some additional components in [button.js](./components/button.js) and [formInput.js](./components/formInput.js). 

All the styles for each screen and component are in their own file (the sign in page is in App.js). I used the `StyleSheet` from `react-native` for all the components. 

I did not complete the API calls for the Slack signin and emoji uploading. This incomplete part of the project will be finished another time. 

## build and run instructions
* Install Node.js 
* Run: `npm install expo-cli --global` in the Terminal 
* Clone my repository: `git clone https://github.com/askalburgi/slackify.git` 
* Go to the repository: `cd slackify`
* Install the node modules: `npm install` 
* Run the app: `expo start` 
* On your Android or iOS device, use the Expo app and the QR Code given to run the app on your phone. [More instructions here](https://expo.io/learn)
