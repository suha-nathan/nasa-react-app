# To Infinity and Beyond 

## Description

This single page web application was built for users to easily access and view NASA imagery and information. 

### Tech

```
- React and React Router
- Bootstrap with react
- Axios for API
- Firebase and firestore (for larger, longer term data storage)
```

### User Stories

```
The user must be able to:

- View multiple images in a grid 
- View each individual image and its associated title and description
- Search by simple queries from a search bar
- Scroll the page almost indefinitely

```

---

### Planning and Development Process

I had a timeline over 5 days to plan and execute the user stories and features. The basic app that included the ability to search and view posts were straightforward to build. However, the difficulty came about when trying to add more complex functionality to the app. I encountered many problems with the async nature of react/javascript. The concept of the event loop is also very important especially when the user has many ways to interact with the single page application

### Problem-Solving Strategy

Aside from what you see in this repository, I built many throwaway prototypes to test the additional feature functionality separately from the main application. After getting the feature to work independently, I worked on integrating the code step by step. 

### Unsolved problems

```

- The "infinite" scroll has a limit of a 100 items. 
- Suggested Posts feature is unfinished
- Duplicate images due to error loading the photos into the state
- The layout of photos, especially when more photos are loaded when the user scrolls
- Search function instability

```

## APIs Used

The main API used was images.nasa.gov.

---