🔹 useEffect() কী?

React component render হওয়ার পর যেসব কাজ করতে হয় (API call, DOM update, timer, event listener), সেগুলো handle করার জন্য useEffect() ব্যবহার করা হয়।

🔹 Basic Syntax
useEffect(() => {
  // side effect code
}, []);
