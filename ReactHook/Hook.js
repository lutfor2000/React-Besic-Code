React Hook কী?

React Hook হলো React-এর একটি বিশেষ ফিচার, যা Function Component-এর ভিতরে state, lifecycle এবং অন্যান্য React feature ব্যবহার করতে সাহায্য করে—Class Component ছাড়া।

🔹 সহজভাবে বুঝলে

আগে React-এ state বা lifecycle ব্যবহার করতে হলে Class Component লাগত।
Hook আসার পর Function Component দিয়েই সব করা যায়।

01. React Hook is a feature in the React library that allows developers to use state and other React features in functional components, which were previously only available in class components.

02. It was introduced in React version 16.8.

03. Hooks can be used to manage state, handle si ffects, and access lifecycle methods in functional components.

04. There are several built-in Hooks provided by React, such as useState, useEffect, useContext, and useRef.

05. React Hooks have greatly simplified the development process in React and have made it easier to write reusable and composable code.

০১. রিয়্যাক্ট হুক হলো রিয়্যাক্ট লাইব্রেরির একটি ফিচার যা ডেভেলপারদেরকে ফাংশনাল কম্পোনেন্টে স্টেট এবং অন্যান্য রিয়্যাক্ট ফিচার ব্যবহার করার সুযোগ দেয়, যা আগে শুধুমাত্র ক্লাস কম্পোনেন্টেই পাওয়া যেত।

০২. এটি রিয়্যাক্ট ভার্সন ১৬.৮-এ চালু করা হয়েছিল।

০৩. ফাংশনাল কম্পোনেন্টে স্টেট পরিচালনা, ইফেক্ট হ্যান্ডেল করা এবং লাইফসাইকেল মেথড অ্যাক্সেস করার জন্য হুক ব্যবহার করা যায়।

০৪. রিয়্যাক্টের দেওয়া বেশ কিছু বিল্ট-ইন হুক রয়েছে, যেমন useState, useEffect, useContext, এবং useRef।

০৫. রিয়্যাক্ট হুকস রিয়্যাক্টে ডেভেলপমেন্ট প্রক্রিয়াকে অনেক সহজ করে দিয়েছে এবং পুনঃব্যবহারযোগ্য ও কম্পোজেবল কোড লেখা আরও সহজ করে তুলেছে। 



1. useState → Data (State) Manage

📌 ব্যবহার করো যখন:

✅ Input field এর value handle করতে
✅ Counter (increment / decrement)
✅ Form data store করতে
✅ API থেকে data নিয়ে UI-তে দেখাতে
✅ UI change trigger করতে (re-render দরকার হলে)

📌 Example:

const [name, setName] = useState("");

👉 মনে রাখো:
Data change → UI update হবে 



🔹 2. useEffect → Side Effect Handle

📌 ব্যবহার করো যখন:

✅ API call করতে (fetch / axios)
✅ Component load হলে কিছু run করতে
✅ State change হলে action নিতে
✅ Timer (setInterval / setTimeout)
✅ Event listener add/remove করতে

📌 Example:

useEffect(() => {
  console.log("Component Loaded");
}, []);

👉 মনে রাখো:
Effect run হয় render এর পরে 



🔹 3. useRef → DOM + Persistent Value

📌 ব্যবহার করো যখন:

✅ DOM element direct access করতে (input focus, style change)
✅ Re-render ছাড়াই value store করতে
✅ Previous value track করতে
✅ Timer ID বা mutable value রাখতে
✅ Button click count track (without re-render)

📌 Example:

const inputRef = useRef();

inputRef.current.focus();


