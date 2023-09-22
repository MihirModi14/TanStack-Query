# TanStack Query

**Description:**

Are you new to React and struggling with managing data fetching and state management in your applications? Look no further! Our TanStack Query project is here to simplify and streamline the process for you.

**Overview:**

TanStack Query is a powerful library that revolutionizes how you handle asynchronous data fetching and state management in React applications. In this example, we will particularly emphasize the caching capabilities of TanStack Query, showcasing how it optimizes data storage and retrieval to enhance the overall performance and responsiveness of your application.

## Running a React Project

**Step 1:** Install Dependencies: `yarn`

**Step 2:** Start a Local Server: `node src/server/httpserver.js`

**Step 3:** Start React App: `yarn dev`

## Theoretical Overview

In TanStack Query, each asynchronous data response is associated with a unique key called query key. This key serves as a crucial identifier that TanStack Query uses to manage and organize data within its cache.

### Terminology

There are **3 state** of the asynchronous data that we are fetching using TanStack Query.

**Fresh:** Data is still valid for use, If consumer call an API then just return cached data don't need to make new API call.

**Stale:** Data is now outdated, If consumer call an API then give cached data but make one api call and update the consumer once updated data recieved.

**Invalidate:** It is an action which tells TanStack Query that make previous data outdated and you need to make an API call and give me updated data.

### Data Fetching Strategy

TanStack Query will fetch the data from API in three scenario,

- When Data is not cached in storage means calling API first time.
- When query key are changed or invalidated.
- When someone ask for data which is in stale state.

**Note:** Based on requirement we can customize this behaviour using methods provide by the TanStack Query library.

## Repository Content

This repository is organized into three distinct tasks, each accompanied by detailed explanation.

**Task 1: Data Invalidation Example**

In Task 1, we will demonstrate how to invalidate data, which essentially means making a new API call based on specific requirements or triggers.

**Task 2: Reusing Previously Fetched Data**

In Task 2, We will use previously fetched data (cached data) in other components without initiating new API requests.

**Task 3: Caching Data with Custom Parameters**

In Task 3, We will explore how to cache data with custom search parameters in the API.

## Conclusion

This library offers much more than just caching data. It's a versatile toolset for handling data in your React applications efficiently.

#### This Library Can Also Do,

- Global State Management
- Pagination and Infinite Scrolling
- Error Handling
- Server-side Rendering (SSR)
- Time-Travel Debugging

  And many more ...

## References

Here are some useful resources for further information:

- [Official TanStack Query Documentation](https://tanstack.com/query/v3): The official documentation provides in-depth information about using TanStack Query.

## About Me

Hi there! I'm Mihir Modi, a full stack developer. I'm passionate about programming and I embarked on this journey to make the world a better place.

## Connect with me

Feel free to reach out if you have any questions, suggestions, or just want to connect. You can find me at:

- [LinkedIn](https://www.linkedin.com/in/mihirmodi14/)
- [GitHub](https://github.com/MihirModi14)
- [Telegram](https://t.me/MihirModi14)
- Email: [modimihir960@gmail.com](mailto:modimihir960@gmail.com)

Thank you for visiting my project! I hope you enjoy exploring my work as much as I enjoyed creating it.
