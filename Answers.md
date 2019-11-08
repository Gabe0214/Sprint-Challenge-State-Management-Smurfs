1. What problem does the context API help solve?
context api is a component created by the React Framework, and it solves the issues of prop drilling. 
1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions: are objects that tells reducers what actions ocurred in the application.
Reducers: are functions that update the state of the application, once an action is triggered

Store: is the global object that holds all of the state of the application


1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is the global state and component state is local. 

Application state uses redux to manage states of large applications. Component state lives within that component. 

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux-Thunk is a middleware package that is used in Redux. We can use it to give redux the ability to run asynchronous operations. 

1. What is your favorite state management system you've learned and this sprint? Please explain why!

My favorite state management is redux because it helps me manage the state of the application a lot easier than context api. 