import { useState } from "react";
import { ThemeProvider } from "../../my-project/src/theme/Themebtn";
import linkden from'../images/linkden.png'
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
     const errors = {
       name: '',
       email: '',
       comment: ''
     };
     
     if (!Name) {
       errors.name = 'Name is required.';
     }
 
     if (!email) {
       errors.email = 'Email is required.';
     } else if (!/\S+@\S+\.\S+/.test(email)) {
       errors.email = 'Please enter a valid email address.';
     }
 
  
     if (!comment) {
       errors.comment = 'Comment is required.';
     } else if (comment.length > 500) {
       errors.comment = 'Comment cannot be more than 500 characters.';
     }
 
     setFormErrors(errors);
 
  
     return !Object.values(errors).some((error) => error);
   };
 
   const addinfo = async (new_job) => {
     
       const req = await fetch('http://localhost:8000/comments', {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json',
         },
         body: JSON.stringify(new_job),
       });
 
       
   };
 
   const sub_myform = async (e) => {
     e.preventDefault();
 
     
     if (validateForm()) {
       const contactinfo = {Name, email,  comment,

       };
       const formData = new FormData(e.target);
       console.log(formData);
       formData.append("access_key", "9d33ba97-c068-4900-8b50-8a57c4b97cc8");
       setIsSubmitting(true);
       setErrorMessage(''); 
       addinfo(contactinfo).finally(() => setIsSubmitting(false));
       const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
     }
   };
 
   return (
     <ThemeProvider>
     <section id="contact"    className="dark:bg-blacki  md:px-80 p-5 bg-gray-200 ">
        
       <form
         id="my_form"
         className="text-black justify-center pt-5 px-14 dark:bg-blacki dark:text-white"
         onSubmit={sub_myform}
       >
         <h2 className="text-3xl text-center font-semibold mb-6">contact info</h2>
         <div className="space-y-3 flex flex-col justify-center">
           <label className="font-semibold" htmlFor="name">Name</label>
           <input placeholder="Name:"  className="border-2 inline" type="text"   id="name" value={Name}  onChange={(e) => setName(e.target.value)}/>
           {formErrors.name && <p className="text-red-500">{formErrors.name}</p>}
 
           <label className="font-semibold" htmlFor="useremail">E-mail</label>
           <input placeholder="E-mail" className="border-2" type="email" id="useremail" value={email} onChange={(e) => setEmail(e.target.value)} />
           {formErrors.email && <p className="text-red-500">{formErrors.email}</p>}
 
           <label className="font-semibold" htmlFor="comment">Comment:</label>
           <textarea placeholder="your comment:" className="border-2" name="comment" id="comment" value={comment}
             onChange={(e) => {
               if (e.target.value.length <= 500) {
                 setComment(e.target.value);
               }
             }}
           />
           <p className="text-sm text-gray-500">{comment.length}/500 characters</p>
           {formErrors.comment && <p className="text-red-500">{formErrors.comment}</p>}
 
           {errorMessage && <p className="text-red-500">{errorMessage}</p>}
 
           <button id="btn" className="block bg-black text-white rounded-full shadow-md w-fit px-5" type="submit" disabled={isSubmitting}>
             {isSubmitting ? 'Submitting...' : 'Submit'}
           </button>
         </div>
       </form>
       <h2 className="text-3xl text-center font-semibold mt-4">Socials</h2>
       <div className=' flex flex-row space-x-6 w-full p-2 rounded-lg justify-center  bg-gray-500'>
     
          <a href="https://x.com/"><img src={twitter} /></a>
          <a href="https://linkedin.com/"><img src={linkden}/></a>
          <a href="https://github.com/"><img src={github}/></a>
          </div>
     </section>
     </ThemeProvider>
   );
};


export default ContactMePage