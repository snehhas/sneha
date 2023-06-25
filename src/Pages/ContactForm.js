// import React, { useState } from "react";
// import "./ContactForm.css";

// const ContactForm = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Name: ", name);
//     console.log("Email: ", email);
//     console.log("Message: ", message);
//     // You can add your code to send the form data to your server here
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div className="form-group">
//         <label htmlFor="name">Name:</label>
//         <br/>
//         <input
//           type="text"
//           id="name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="email">Email:</label>
//         <input
//           type="email"
//           id="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="message">Message:</label>
//         <br/>
//         <textarea
//           id="message"
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//         />
//       </div>
//       <div className="form-group">
//         <button type="submit">Submit</button>
//       </div>
//     </form>
//   );
// };

// export default ContactForm;