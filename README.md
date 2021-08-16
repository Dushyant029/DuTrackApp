
<h1 align="center">DuTrack App</h1>

**DuTrack** is an app to keep track of your route while you go around by recording the source and destination distance built with React Native as Frontend UI and Node.js and MongoDB as Backend.

 
![image](https://user-images.githubusercontent.com/55031190/129458518-bf8f7fad-b9a8-4c17-8b21-8366cf32e958.png)
 

⭐ Star me on GitHub — it helps!


# Sections 📚

⚡️ Signup 🔐\
⚡️ Login 🔓\
⚡️ TrackScreen 📜\
⚡️ TrackDetail 📝\
⚡️ Map Integrated 🌏\
⚡️ Logout 🔙

# Clone 📑

- The website is completely built on `react-native` library of `javascript` and that's why we need `nodejs` and `npm` installed.
- While installing `nodejs` and `npm`, try to install versions which are equal or greater than the versions mentioned in badges above.
- In case you want to help developing it or simply saving it, you can fork the repository just by clicking the button on the top-right corner of this page.
- After the successful installation of `nodejs` and `npm`, clone the repository into your local system using below command:
  - ```python
     git clone https://github.com/Dushyant029/DuTrackApp.git
    ```
  - This will clone the whole repository in your system.
- To download required dependencies to your system, navigate to the directory where the cloned repository resides and execute following command:
  - - First run the backend
        - ```
          $ cd tracks-server
          $ npm install
          $ npm start
          ```
  - - Then, run the frontend
        - ```
          # open new terminal
          $ cd tracks
          $ npm install
          $ npm start
          ```
        - Also, used ngrok to allow local development environment available externally
            * ```
              # open one more terminal
              $ cd tracks
              $ ngrok http 3000
              ```
            * Copy the Forwarding URL and paste it in 
                ```
                  tracks/src/api/tracker.js  
                ```
# Features 🔌

- Authentication
- Add an number of tracks
- Fetch Track details anytime which are saved
- Record distance by Start and Stop feature. 

# Technologies used 🛠️

#### Frontend

- React Native
- React Dom (renderers to DOM and server)
- Axios (promise based HTTP client for the browser and node.js)
- React Native Maps (to render Google map)
- Expo Location (converts location coords to address)
- React Native Elements (toolkit for material design)

#### Backend

- Mongoose
- Express
- Nodemon
- Json Web Token (for authentication)
- Bcrypt (for data encryption)



# Screenshots Walkthrough :- 📷

| SignUp Screen | Login Screen | Error Screen | Track Screen | Track Detail Screen |
| --- | --- | --- | --- | --- |
| ![SignUp Screen](https://user-images.githubusercontent.com/55031190/129458221-793b91f6-5fc2-4181-aa9c-1864dda39bec.png) | ![Login Screen](https://user-images.githubusercontent.com/55031190/129458239-8a6f91af-54ae-4ce6-88f2-faa26ad885ee.png) | ![Error Screen](https://user-images.githubusercontent.com/55031190/129458251-88945ae8-ffbc-45cf-af37-c10710324022.png) | ![Track Screen](https://user-images.githubusercontent.com/55031190/129458263-96ad5838-d1ad-41d7-b84a-27409ce4a7fa.png) |  ![Track Detail Screen](https://user-images.githubusercontent.com/55031190/129458270-dff32309-08f8-4417-bbf4-99eb3d51e968.png) |

| Map Permission Screen | Map Screen | Track Update Screen | Logout Screen |
| --- | --- | --- | --- |
| ![Map Permission Screen](https://user-images.githubusercontent.com/55031190/129458279-ad89e0be-a6a6-43eb-adef-39864bcfad4a.png) | ![Map Screen](https://user-images.githubusercontent.com/55031190/129458288-61a89c9a-b1ec-450e-8872-876103dd1f57.png) | ![Track Update Screen](https://user-images.githubusercontent.com/55031190/129458293-1d9e7e70-8f21-400e-86f8-5b42da2beb63.png) | ![Logout Screen](https://user-images.githubusercontent.com/55031190/129458300-a305675f-8306-4790-a09b-3b9bc39c5136.png) |



  

