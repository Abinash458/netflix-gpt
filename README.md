# Netflix GPT

- Install CRA.
- Configure Tailwindcss.
- Header.
- Routing of App.
- Login Form.
- Sign Up Form.
- Form Validation.
- useRef Hook.
- Firebase setup.
- Deploying our app to production.
- Create SingUp User Account.
- Implement Sign In user API.
- Created Redux Store with userSlice.
- Implemented Sign Out.
- Update Profile.
- BugFix: Sign up user displayName and profile picture update.
- BugFix: If user is not logged in Redirect /browse to login page and vice-versa.
- Unsubscribed to the onAuthStateChanged callback.
- Add hardcoded values to the constant file.
- Register for TMDB API, Create an APP & get access token.
- Get Data from TMDB now playing movies list API.
- Custom Hook for Now playing movies.
- Create movieSlice.
- Update Store with movies Data.
- Planning for MainContainer and secondary container.
- Fetch Data for trailer video.
- Update the store with trailer video data.
- Embedded the youture video and make it autoplay and mute.
- Tailwind classes to make main container looks awasome.
- Build Secondary Component.
- Build Movie List.
- Build Movie Card.
- Found out TMDB image CDN.
- Made the browse page look better with tailwind css.
- usePopularMovie custom hooks.
- useTopRatedMovie custom hooks.
- GPT Search Page
- GPT Search Bar
- (\*)Multi-language feature in our app

# Features

- Login/Sign Up
  - Sign In/Sign Up Form
  - redirect to Browser Page
- Browser (after authentication)

  - Header
  - Main Movie
    - Tailer in Background
    - Title & Description
    - Movie Suggestions
      - Movie List \* N

- NetflixGPT
  - Search Bar
  - Movie Suggestions

# Steps for Deployment:

- Install firebase CLI - `npm install -g firebase-tools`
- Firebase Login - `firebase login`
- Initilize Firebase - `firebase init`, then select Hoisting
- Deploy command - `firebase deploy`

- https://netflixgpt-dff8f.web.app
