import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Mail, MessageSquare, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import linkden from '../images/linkden.png';
import twitter from '../images/twitter.png';
import github from '../images/github.png';

const ContactMePage = () => {
  const [Name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    comment: ''
  });

  const validateForm = () => {
    const errors = { name: '', email: '', comment: '' };

    if (!Name.trim()) errors.name = 'Name is required.';
    if (!email.trim()) errors.email = 'Email is required.';
    else if (!/\S+@\S+\.\S+/.test(email)) errors.email = 'Please enter a valid email address.';
    if (!comment.trim()) errors.comment = 'Comment is required.';
    else if (comment.length > 500) errors.comment = 'Comment cannot be more than 500 characters.';

    setFormErrors(errors);
    return !Object.values(errors).some((error) => error);
  };

  const addinfo = async (new_job) => {
    try {
      await fetch('http://localhost:8000/comments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(new_job),
      });
    } catch {
      // Ignore if local dev json-server is offline
    }
  };

  const sub_myform = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      const contactinfo = { Name, email, comment };
      const formData = new FormData(e.target);
      formData.append("access_key", "9d33ba97-c068-4900-8b50-8a57c4b97cc8");
      setIsSubmitting(true);
      setErrorMessage('');
      setIsSuccess(false);

      try {
        await addinfo(contactinfo);
        const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: formData });
        if (res.ok) {
          setIsSuccess(true);
          setName('');
          setEmail('');
          setComment('');
          setFormErrors({ name: '', email: '', comment: '' });
        } else {
          setErrorMessage('Failed to send message. Please try again.');
        }
      } catch {
        setErrorMessage('Network error. Please check your connection and try again.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <section id="contact" className="bg-gradient-to-br from-gray-100 via-gray-200 to-gray-100 dark:from-gray-950 dark:via-darkBg dark:to-gray-900 min-h-screen py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300 flex flex-col justify-center items-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-2xl"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Get In Touch
          </h1>
          <p className="mt-2 text-sm sm:text-base text-gray-600 dark:text-gray-400">
            Have a question or want to work together? Drop me a message below!
          </p>
        </div>

        {/* Card Form */}
        <div className="bg-white dark:bg-darkSurface border border-gray-200 dark:border-indigo-500/20 shadow-2xl rounded-3xl p-6 sm:p-10 transition-all duration-300">
          <AnimatePresence mode="wait">
            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="flex flex-col items-center justify-center text-center py-8 space-y-4"
              >
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/40 rounded-full flex items-center justify-center text-green-600 dark:text-green-400">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Message Sent!</h3>
                <p className="text-gray-600 dark:text-gray-300 max-w-md">
                  Thank you for reaching out. I'll get back to you as soon as possible!
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="mt-4 px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-medium transition-colors"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form id="my_form" onSubmit={sub_myform} className="space-y-6">
                {/* Name Input */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5" htmlFor="name">
                    <span className="flex items-center gap-2">
                      <User size={16} className="text-indigo-500" /> Name
                    </span>
                  </label>
                  <input
                    placeholder="Enter your name"
                    className="w-full border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/80 text-gray-900 dark:text-white dark:placeholder-gray-500 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent transition-all"
                    type="text"
                    id="name"
                    name="name"
                    value={Name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  {formErrors.name && (
                    <p className="text-red-500 text-sm flex items-center gap-1 mt-1.5">
                      <AlertCircle size={14} /> {formErrors.name}
                    </p>
                  )}
                </div>

                {/* Email Input */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5" htmlFor="useremail">
                    <span className="flex items-center gap-2">
                      <Mail size={16} className="text-indigo-500" /> E-mail
                    </span>
                  </label>
                  <input
                    placeholder="name@example.com"
                    className="w-full border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/80 text-gray-900 dark:text-white dark:placeholder-gray-500 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent transition-all"
                    type="email"
                    id="useremail"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {formErrors.email && (
                    <p className="text-red-500 text-sm flex items-center gap-1 mt-1.5">
                      <AlertCircle size={14} /> {formErrors.email}
                    </p>
                  )}
                </div>

                {/* Comment Textarea */}
                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300" htmlFor="comment">
                      <span className="flex items-center gap-2">
                        <MessageSquare size={16} className="text-indigo-500" /> Comment
                      </span>
                    </label>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {comment.length}/500
                    </span>
                  </div>
                  <textarea
                    placeholder="Write your message here..."
                    className="w-full border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/80 text-gray-900 dark:text-white dark:placeholder-gray-500 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent min-h-[140px] resize-y transition-all"
                    name="comment"
                    id="comment"
                    value={comment}
                    onChange={(e) => { if (e.target.value.length <= 500) setComment(e.target.value); }}
                  />
                  {formErrors.comment && (
                    <p className="text-red-500 text-sm flex items-center gap-1 mt-1.5">
                      <AlertCircle size={14} /> {formErrors.comment}
                    </p>
                  )}
                </div>

                {errorMessage && (
                  <p className="text-red-500 text-sm flex items-center gap-1 bg-red-50 dark:bg-red-950/40 p-3 rounded-lg border border-red-200 dark:border-red-900/40">
                    <AlertCircle size={16} /> {errorMessage}
                  </p>
                )}

                {/* Submit Button */}
                <button
                  id="btn"
                  className="w-full bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 text-white font-semibold py-3.5 px-6 rounded-xl shadow-lg hover:shadow-indigo-500/25 active:scale-[0.99] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={18} className="animate-spin" /> Submitting...
                    </>
                  ) : (
                    <>
                      <Send size={18} /> Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </AnimatePresence>
        </div>

        {/* Socials Card */}
        <div className="mt-8 text-center">
          <p className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 font-semibold mb-3">
            Or connect with me on socials
          </p>
          <div className="flex flex-row space-x-6 w-full py-4 px-6 rounded-2xl justify-center items-center bg-white dark:bg-darkSurface border border-gray-200 dark:border-indigo-500/20 shadow-md">
            <a
              href="https://x.com/AGulbet23174"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 hover:opacity-80 transition-all duration-200"
              title="Twitter / X"
            >
              <img src={twitter} alt="Twitter" className="w-7 h-7" />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 hover:opacity-80 transition-all duration-200"
              title="LinkedIn"
            >
              <img src={linkden} alt="LinkedIn" className="w-7 h-7" />
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 hover:opacity-80 transition-all duration-200"
              title="GitHub"
            >
              <img src={github} alt="GitHub" className="w-7 h-7" />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactMePage;