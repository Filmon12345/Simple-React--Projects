const data = [
  {
    id: "1",
    question: "What is JSX in React, and why is it used?",
    answer:
      "JSX is a syntax extension for JavaScript recommended by React. It allows developers to write HTML-like code within JavaScript, making it easier to describe the structure of UI components. Understanding JSX is fundamental to working effectively with React.",
  },
  {
    id:"2",
    question:"What is the significance of virtual DOM in React?",
    answer:"React uses a virtual DOM to improve performance by minimizing the number of direct manipulations to the actual DOM. Changes are first made to a virtual representation, and then React efficiently updates the real DOM by calculating the most optimal way to apply these changes."

  },
  {
    id:"3",
    question:" What is the concept of state in React and how it differs from props?",
    answer:"State and props are essential concepts in React. Understanding that state represents the internal data of a component that can change over time, while props are external data passed to a component, is crucial for building dynamic and interactive React applications."

  },
  {
    id:"4",
    question:"What is the purpose of the useEffect hook in React?",
    answer:"The useEffect hook is used for side effects in functional components, such as data fetching, subscriptions, or manually changing the DOM. Understanding when and how to use useEffect is crucial for managing component lifecycle and avoiding common pitfalls like infinite loops."

  },
  {
    id:"5",
    question:"What is the significance of keys in React lists?",
    answer:"Lifting state up involves moving the state from a lower-level component to a higher-level one, typically when multiple components need to share the same state. This pattern helps to maintain a single source of truth for the shared state."

  },
  {
    id:"6",
    question:"What is the difference between state and props in React?",
    answer:"State is internal to a component and can change over time. Props are external inputs passed to a component. Think of state as a component's memory and props as its properties."

  },
  {
    id:"7",
    question:"Why do we use the useEffect hook in React?",
    answer:"useEffect is used for side effects in React, such as fetching data or interacting with the DOM. It helps manage these actions in a functional component's lifecycle."

  },
  {
    id:"8",
    question:"What is React Router used for?",
    answer:"React Router is used for navigation in React applications by managing the URL. It enables building single-page applications where different components can be displayed based on the URL."

  },
  {
    id:"9",
    question:"What are React Hooks?",
    answer:" React Hooks are functions that let you use state and other React features in functional components. They make it easier to manage state and side effects without using class components."

  },
  {
    id:"10",
    question:"How does Redux help in React applications?",
    answer:"Justification: Redux is a state management library for React. It helps manage the application's global state in a predictable way, making it easier to handle complex state logic"

  },
  {
    id:"11",
    question:"What is the significance of keys in React lists?",
    answer:"Lifting state up involves moving the state from a lower-level component to a higher-level one, typically when multiple components need to share the same state. This pattern helps to maintain a single source of truth for the shared state."

  },
  {
    id:"12",
    question:"What is the significance of keys in React lists?",
    answer:"Lifting state up involves moving the state from a lower-level component to a higher-level one, typically when multiple components need to share the same state. This pattern helps to maintain a single source of truth for the shared state."

  },
];
export default data;