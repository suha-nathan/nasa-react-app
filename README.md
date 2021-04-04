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

### Planning and Development Process

I had a timeline over 5 days to plan and execute the user stories and features. The basic app that included the ability to search and view posts were straightforward to build. However, the difficulty came about when trying to add more complex functionality to the app. 

There were 2 main challenges - to create the infinite scroll feature from scratch (not using and libraries/npm packages) and to deal with the large dataset due to the infinite scroll and search terms. 

The infinite scroll feature was implemented using the Intersection Observer Web API. As the user scrolls "indefinitely" and/or searches more keywords, the data requested from the NASA API grows larger. To deal with this larger dataset, I decided to migrate the data storage to firebase. This prevented excessive/unnecessary calls to the NASA API.  

### Problem-Solving Strategy

Aside from what you see in this repository, I built a number of throwaway prototypes to test the additional feature functionality separately from the main application. After getting the feature to work independently, I worked on integrating the code step by step. 

### Unsolved problems

```
- The "infinite" scroll has a limit of a 100 items. 
- Suggested Posts feature is to be implemented
- Masonry grid layout to be implemented
```

## APIs Used

The main API used was images.nasa.gov.

---

