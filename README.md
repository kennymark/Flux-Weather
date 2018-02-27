# Flux Weather

Flux weather is a cross platform react native application that was by built by me [Kenny Mark](http://www.kennymark.co.uk). It was a project I decided to build once I realized swift was not my thing after spending some months in my Advanced Programming class where we were taught swift programming at the University of Chester. The app is crosss platform and there can be built for both IOS and Android. The app relies on the DarkSky API to query for weather info. There are two main endpoints that are being hit namely the forecast endpoint and the time machine end point. If would like some clarification into this, visit the Darksky developer documentation. Just type Darksky Developer docs in Google or Bing if you use it (lol). 
The motivation behind the decision to write this application was to learn react native and cross platform development using something other than native coding languages such as Swift or Java. There are a few other options that allow Developers to write cross platform mobile applications using one programming language. Some of the other solutions include Flutter(Google), NativeScript(Telerik) and Ionic. I went with React Native because I had already gotten started with React and built and Airbnb style mapview web app which was intriguing and fun to code. Moving to React Native was no brainer since its syntax is very similar to React with a few exceptions. The are some things about React Native that aren't fluid to work with such animations and navigation. Navigations and Animations in React Native compared to the React with web can be frustrating. One thing I did not enjoy much about the navigation used in this application called React Navigation was the animations on Android. They flicker or make the application feel buggy even thought it is not by design. I hope the React Navigation works on a fix for such a tiny problem. React native is certainly the future and it is  going no where. It is very simple to get started with and Expo XDE makes it 10x more easier.

# Design

The design for the homepage was inspired by a few other weather apps out there namely Weather Timeline by my favorite android developer/designer Sam Ruston and a few others with unique twist and design language of mine. I prioritized minimalism and simplicity for the interface. I wanted a very UX friendly application where the user would not have to bother worry about complex weather details. Its just simple weather app with a pretty interface that displays weather info.

# Usage

First download the files by cloning the repo using 

    git clone 

After downloading the repo, you have to start the application by typing 

    yarn start

When you start the application, a beautiful screen will appear but guess what? Nothing appears this is because the API key needed for the weather to 

# Requirements

1. A computer
2. Node.js and NPM/Yarn
3. Expo XDE or Expo cli installed 
3. Packages listed below

# Packages

- React
- React-native
- Expo SDK
- React navigation
- Native base
- React native elements
- React-native-icons

# Components

- HomeScreen - The main component
- LocationScreen
- Overview
- Settings
- Header
- Routes

# Screenshots

## Homepage

![](https://static.notion-static.com/bf8ab34f-6572-4322-84a8-d4e3f787b20a/Screen_Shot_4.jpg)

![](https://static.notion-static.com/30b2f67a-677e-4c8c-bc14-354609f522fd/Screen_Shot_3.jpg)

## Location/ Search Screen

![](https://static.notion-static.com/498fae73-a1b1-47d7-b103-4fd308b46da0/Simulator_Screen_Shot_-_iPhone_X_-_2018-02-27_at_15.21.37.png)

## Settings Screen

![](https://static.notion-static.com/0e58b119-37ed-469c-80d9-bf5f328e5a43/Simulator_Screen_Shot_-_iPhone_X_-_2018-02-27_at_15.21.39.png)

## Overview Screen

![](https://static.notion-static.com/ad3d065d-7159-4a80-8a06-a4551fcaf98d/Simulator_Screen_Shot_-_iPhone_X_-_2018-02-27_at_15.21.35.png)
