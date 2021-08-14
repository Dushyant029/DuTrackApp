
<h1 align="center">DuTrack App</h1>

**DuTrack** is an app to keep track of your route while you go around by recording the source and destination distance built with React Native as Frontend UI and Node.js and MongoDB as Backend.

 
![image]()
 

⭐ Star us on GitHub — it helps!


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
| ![SignUp Screen]() | ![Login Screen]() | ![Error Screen]() | ![Track Screen]() |  ![Track Detail Screen]() |

| Map Permission Screen | Map Screen | Track Update Screen | Logout Screen |
| --- | --- | --- | --- |
| ![Map Permission Screen]() | ![Map Screen]() | ![Track Update Screen]() | ![Logout Screen]() |





