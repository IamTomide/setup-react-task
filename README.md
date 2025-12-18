# React Setup Task 

## What is NPM and package.json?
NPM stands for Node Package Manager and it is the default package manager for Node.js. It allows users to discover, install, manage and share packages of reusable JavaScript libraries, frameworks and tools.

Package.json is a file in a project that holds important information about the project like dependencies and devDependencies, and defines how the project should be used or run.

## What is Vite?
Vite is a fast build tool for modern web projects and it helps to run and build applications quickly using modern JavaScript features. It also provides tools that make developemnt faster.


## React Summary
React is a JavaScript library used to build user interfaces, especially for applications that need to update the screen often based on user interaction or data changes. It focuses mainly on the UI layer, which means it handles how things look and behave on the screen, while other tools are usually added to manage things like routing or data fetching. What stands out about React is its declarative style. Instead of manually telling the browser how to update elements step by step, you describe what the interface should look like for a given state, and React handles the updates automatically.
A core idea in React is that the UI depends entirely on state. When the state changes, the interface updates to reflect that change. Rather than manipulating the DOM directly, React re-renders components when needed. To make this process efficient, it uses a Virtual DOM, which is a lightweight copy of the real DOM kept in memory. React compares changes in the Virtual DOM and updates only what is necessary in the real DOM, improving performance and reducing unnecessary work.
React uses elements and JSX to define what should appear on the screen. React elements are simple JavaScript objects that represent parts of the UI. JSX makes writing these elements easier by allowing code that looks like HTML but is actually JavaScript. This makes React code more readable and easier to understand, even though it is eventually converted into standard JavaScript before running in the browser.
Components are the building blocks of React applications. They are usually written as
functions and represent reusable pieces of the interface. Components receive data through props, which allows the same component to be reused with different content. Components can also be nested inside one another, forming a structured tree that represents the full interface of the application.
Managing state and side effects is done using Hooks in modern React. With Hooks like
useState, components can store and update data that affects what is rendered on the
screen. When this data changes, the component automatically re-renders. Hooks like
useEffect are used to handle side effects such as fetching data, interacting with APIs, or running code after the component has rendered. This approach keeps component logic organized and easier to follow.
Using React requires a different way of thinking compared to traditional DOM-based
development. Instead of focusing on how to update elements manually, the focus is on
describing the desired UI for each possible state of the application. React then ensures the interface stays in sync with the data. This makes applications more predictable, easier to maintain, and easier to scale as they grow.
Overall, React helps simplify frontend development by abstracting away low-level DOM
operations, encouraging reusable and modular code, and providing a clear way to manage state and UI updates. This is why it is widely used for building modern, scalable web
applications.

## React Hooks
React Hooks are functions that let you use state and other React features inside function components. Before Hooks, only class components could have internal state and lifecycle behaviors, but Hooks made it possible to write simpler and cleaner components that still
manage state and side effects. The most commonly used Hook is useState, which allows a component to hold and update local data. When state changes, React automatically
re-renders the component to reflect the new values.
Another essential Hook is useEffect, which lets components run side effects such as fetching data, subscribing to events, or interacting with browser APIs. Unlike state updates, side effects happen after a component has been rendered. useEffect helps manage code that should run at certain times, such as when a component first appears or when specific values change, and you can even clean up effects when the component unmounts.
There are more Hooks that handle different needs. useContext lets components access
values from a context provider without passing props deeply through the component tree, which makes shared data easier to manage. useReducer is another state-related Hook that is helpful when state logic is complex or when multiple state transitions depend on each other, similar to how reducers work in Redux. useRef creates a mutable value that persists across renders without causing a re-render, which is useful for accessing DOM elements or storing values that don’t affect UI output.
React also includes miscellaneous Hooks like useMemo and useCallback that help with
optimization by preventing unnecessary recalculations or re-creations of functions when dependent values haven’t changed. These are particularly valuable when a component does expensive computations or when you want to avoid triggering effects because of functions being re-created on every render.
Overall, Hooks make React code more readable, reusable, and easier to maintain by
allowing developers to use state and side effects in functional components. They replace many class component patterns with simpler, more intuitive function-based approaches, and they encourage keeping related logic grouped together instead of separated by lifecycle methods. Hooks are now an essential part of modern React development.

## HTML DOM
In the HTML DOM, the document object represents the entire HTML page that is loaded in the browser. It acts as the entry point for interacting with the content and structure of a web page using JavaScript. When you want to read, change, or manipulate elements on the page, you do it through the document object. It provides a set of methods and properties that allow you to access elements, attributes, text, and styles.
One of the most common uses of the document object is to select elements from the page. Functions like getElementById, getElementsByClassName, and querySelector let you target specific parts of the HTML so you can examine or update them. For example, you can use these methods to change the text of an element, alter its styling, or respond to user interactions. The document object also provides properties like document.body and document.head, which give direct access to the body and head sections of the page.
The document object can be used to create new elements and insert them into the page.
Methods like createElement and appendChild allow you to build new HTML structures
dynamically. You can also remove or replace existing elements. This capability makes it possible to update a web page in real time without reloading the entire page, which is essential for interactive web applications.
In addition to accessing and modifying individual elements, the document object lets you work with groups of elements based on their names, tags, or CSS selectors. Using methods like getElementsByTagName or querySelectorAll, you can loop through multiple elements at once and apply changes to all of them. This makes it easier to implement behaviors that affect many parts of the page at the same time.
Overall, the document object is fundamental to DOM scripting because it gives you control over the structure, content, and behavior of a web page. By using the methods and properties it provides, you can build dynamic and interactive experiences in the browser with JavaScript.

## HTML DOM elements
In the HTML DOM (Document Object Model), elements are the building blocks of a web
page. Every section of HTML you write such as headings, paragraphs, images, lists,
buttons, and more is represented as an element in the DOM. These elements form a
tree-like structure in memory that JavaScript can access and change when the page is
loaded in the browser. Because every HTML tag corresponds to an element in the DOM,
developers can use JavaScript to interact with the actual structure and content of the page.
To work with elements, the DOM provides different methods that let you find and select them. For example, you can use getElementById to grab a specific element by its unique ID, or getElementsByClassName to get a collection of elements that share a common class.
There are also methods like getElementsByTagName and querySelector/querySelectorAll
that let you select elements based on their tag name or CSS-style selectors. Once an
element is selected, you can read or change its content, styles, attributes, and even its position on the page.
After selecting an element, developers often modify its innerHTML, textContent, or style to
update what’s shown to the user. For example, element.innerHTML lets you replace the
HTML inside an element, while properties like element.style.color let you change how the element looks visually. You can also change element attributes with setAttribute, or remove
them with removeAttribute. This allows dynamic updates to the page based on user
interaction or other logic.
One important part of working with elements is creating and inserting new ones. Using
methods like createElement, developers can generate new elements in memory and attach
them to the document with appendChild or insertBefore. Likewise, existing elements can be removed with removeChild. These capabilities help build or update parts of the page without reloading it, which is how interactive web pages behave in modern applications.
Overall, DOM elements are fundamental to making web pages dynamic and interactive. By
selecting, modifying, creating, and removing elements through JavaScript, developers can control the content and appearance of a page in real time, giving users rich experiences that
respond to actions such as clicks, typing, or scrolling.