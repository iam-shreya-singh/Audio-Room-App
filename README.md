# Audio-Room-App
**Intro:**
A full stack project (Vite - to build frontend , ReactJS, NodeJs, Stream -backend handling )
To build the Frontend of App we are using Vite.

 
The folders dividing project in it's frondtend and backend:

**Client** : Holds entire react app.

**Server**: Backend side which holds mainly authentication , user login .

**Commands to install the non-dev dependencies :**
npm i @hookform/resolvers 
yup @stream-io/video-react-sdk crypto-js universal-cookie react-router-dom

**Backend configuration:**
cd server  >> npm init -y (generates package.json)
for typescript config : npx tsc --init


**Imported libraries:**

Yup - import for form validation in React in file(index.tsx)sign-in


Simple components added to folders under pages - main, room, sign-in -- adding index.tsx to all 3 components

**Flow of app creation:**
1. Rendering pages like Sign in, room, Main Page (with files index.tsx in each) through app.tsx file
2. Initializing back-end
3. 
