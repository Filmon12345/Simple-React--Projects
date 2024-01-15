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
 
];
export default data;