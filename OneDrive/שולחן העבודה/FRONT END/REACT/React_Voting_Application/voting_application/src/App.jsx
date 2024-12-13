import { useState } from 'react'
import './App.css'


// export default function LoginPage() {

//   const [email, setEmail] = useState  ('');
//   const [password, setPassword] = useState  ('');

  
//   function handleSubmit (e) {
//     e.preventDefault (); 

//     const userEmail = "tehila10@gmail.com";
//     const userPassword = 1234;
//     const adminEmail = "tehila20@gmail.com";
//     const adminPassword = 4321;
    
//     const form = e.target;
//     const formData = new FormData(form);
//     const formJson = Object.fromEntries(formData.entries());
//     console.log(formJson);


//     if ((formJson.myInput === userEmail && formJson.password === userPassword) || 
//     (formJson.myInput === adminEmail && formJson.password === adminPassword)) {
 
//   alert("connect succeed");
//   history.push('/next-page');  
// } else {
//   alert("can't connect");
// }

//     fetch ('/some-api', {method: 'POST', body: formData});
//   }

//   return (
//     <form method="post" onSubmit={handleSubmit}>

//     <h1>welcome!</h1>
//     <h2>
//     user name <input name="userName" defaultValue="Some initial value" />
//     </h2>
//     <h2>
//     password <input name="password" defaultValue="Some initial value" />
//     </h2>
    
//     <button type="submit">Submit</button>
//     </form>
//   );
// }


// export default function VotingPage() {
//   function handleSubmit(e) {
//     e.preventDefault();

//     const form = e.target;
//     const formData = new FormData(form);

//     fetch('/some-api', { method: form.method, body: formData });
//     console.log(new URLSearchParams(formData).toString());
//     const formJson = Object.fromEntries(formData.entries());
//     console.log(formJson); 
//     console.log([...formData.entries()]);
//   }

//   return (
//     <form method="post" onSubmit={handleSubmit}>
//       <label>
//         Pick your favorite animel:
//         <select name="selectedAnimel" defaultValue="orange">
//           <option value="cats">cats</option>
//           <option value="dogs">dogs</option>
//           <option value="cows">cows</option>
//           <option value="lions">lions</option>

//         </select>
//       </label>
   
//       <button type="changeVote">change vote</button>
//       <button type="done">done</button>
//     </form>
//   );
// }



import { useState } from 'react';

export default function VotingPage() {
  function handleSubmit(e) {
    e.preventDefault(); // מונע מהטופס להישלח בצורה רגילה

    const form = e.target; // מקבלים את הטופס
    const formData = new FormData(form); // יוצרים אובייקט FormData מתוך הטופס

    // שליחת הנתונים ל-API
    fetch('/some-api', { method: 'POST', body: formData })
      .then(response => response.json())
      .then(data => console.log('Success:', data))
      .catch(error => console.error('Error:', error));

    // הצגת המידע שהוזן בטופס
    console.log(new URLSearchParams(formData).toString()); // הדפסת המידע בצורה של מפתח-ערך
    const formJson = Object.fromEntries(formData.entries()); // המרת הנתונים לאובייקט רגיל
    console.log(formJson);
    console.log([...formData.entries()]); // הדפסת כל הזוגות מפתח-ערך
  }

  return (
    <form method="post" onSubmit={handleSubmit}>
      <label>
        Pick your favorite animal:
        <select name="selectedAnimel" defaultValue="orange">
          <option value="cats">cats</option>
          <option value="dogs">dogs</option>
          <option value="cows">cows</option>
          <option value="lions">lions</option>
        </select>
      </label>
   
      {/* כפתור לשינוי הצבעה (לא ישלח את הטופס) */}
      <button type="button" onClick={() => alert('Vote has been changed!')}>Change Vote</button>

      {/* כפתור לשליחת הטופס */}
      <button type="submit">Done</button>
    </form>
  );
}
