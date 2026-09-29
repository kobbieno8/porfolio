import { useState } from "react";
import linkden from '../images/linkden.png'
import twitter from '../images/twitter.png'
import github from '../images/github.png'

const ContactMePage = () => {

   const [Name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [comment, setComment] = useState('');
   const [isSubmitting, setIsSubmitting] = useState(false);
   const [errorMessage, setErrorMessage] = useState('');
   const [formErrors, setFormErrors] = useState({
     name: '',
     email: '',
     comment: ''
   });

   const validateForm = () => {
     const errors = { name: '', email: '', comment: '' };

     if (!Name) errors.name = 'Name is required.';
     if (!email) errors.email = 'Email is required.';
     else if (!/\S+@\S+\.\S+/.test(email)) errors.email = 'Please enter a valid email address.';
     if (!comment) errors.comment = 'Comment is required.';
     else if (comment.length > 500) errors.comment = 'Comment cannot be more than 500 characters.';

     setFormErrors(errors);
     return !Object.values(errors).some((error) => error);
   };

   const addinfo = async (new_job) => {
     await fetch('http://localhost:8000/comments', {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify(new_job),
     });
   };

   const sub_myform = async (e) => {
     e.preventDefault();
     if (validateForm()) {
       const contactinfo = { Name, email, comment };
       const formData = new FormData(e.target);
       formData.append("access_key", "9d33ba97-c068-4900-8b50-8a57c4b97cc8");
       setIsSubmitting(true);
       setErrorMessage('');
       addinfo(contactinfo).finally(() => setIsSubmitting(false));
       await fetch("https://api.web3forms.com/submit", { method: "POST", body: formData });
     }
   };

   return (
     <section id="contact" className="bg-gray-200 dark:bg-gray-950 md:px-80 p-5 min-h-screen transition-colors duration-300">

       <form id="my_form" className="text-black dark:text-white justify-center pt-5 px-14" onSubmit={sub_myform}>
         <h2 className="text-3xl text-center font-semibold mb-6 dark:text-white">Contact Info</h2>
         <div className="space-y-3 flex flex-col justify-center">

           <label className="font-semibold dark:text-gray-300" htmlFor="name">Name</label>
           <input
             placeholder="Name:"
             className="border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 dark:text-white dark:placeholder-gray-500 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500"
             type="text" id="name" value={Name} onChange={(e) => setName(e.target.value)}
           />
           {formErrors.name && <p className="text-red-500">{formErrors.name}</p>}

           <label className="font-semibold dark:text-gray-300" htmlFor="useremail">E-mail</label>
           <input
             placeholder="E-mail"
             className="border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 dark:text-white dark:placeholder-gray-500 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500"
             type="email" id="useremail" value={email} onChange={(e) => setEmail(e.target.value)}
           />
           {formErrors.email && <p className="text-red-500">{formErrors.email}</p>}

           <label className="font-semibold dark:text-gray-300" htmlFor="comment">Comment:</label>
           <textarea
             placeholder="Your comment:"
             className="border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 dark:text-white dark:placeholder-gray-500 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500 min-h-[120px]"
             name="comment" id="comment" value={comment}
             onChange={(e) => { if (e.target.value.length <= 500) setComment(e.target.value); }}
           />
           <p className="text-sm text-gray-500 dark:text-gray-400">{comment.length}/500 characters</p>
           {formErrors.comment && <p className="text-red-500">{formErrors.comment}</p>}
           {errorMessage && <p className="text-red-500">{errorMessage}</p>}

           <button
             id="btn"
             className="block bg-black dark:bg-indigo-600 dark:hover:bg-indigo-700 text-white rounded-full shadow-md w-fit px-5 py-2 transition-colors duration-200"
             type="submit" disabled={isSubmitting}
           >
             {isSubmitting ? 'Submitting...' : 'Submit'}
           </button>
         </div>
       </form>

       <h2 className="text-3xl text-center font-semibold mt-8 dark:text-white">Socials</h2>
       <div className="flex flex-row space-x-6 w-full p-3 rounded-xl justify-center bg-gray-400 dark:bg-gray-800 dark:border dark:border-gray-700 mt-3">
         <a href="https://x.com/" className="hover:opacity-70 transition-opacity"><img src={twitter} alt="Twitter" /></a>
         <a href="https://linkedin.com/" className="hover:opacity-70 transition-opacity"><img src={linkden} alt="LinkedIn" /></a>
         <a href="https://github.com/" className="hover:opacity-70 transition-opacity"><img src={github} alt="GitHub" /></a>
       </div>

     </section>
   );
};

export default ContactMePage