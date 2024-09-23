import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


export const Contact = () => {
  const form = useRef();

  const service_id = import.meta.env.VITE_SERVICE_ID;
  const template_id = import.meta.env.VITE_TEMPLATE;
  const public_key = import.meta.env.VITE_PUBLIC_KEY;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(service_id, template_id, form.current, {
        publicKey: public_key,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          var frm = document.getElementById('contact-form');
          frm.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },

      );
  };

  return (
    <div className="flex flex-col mb-10 mx-auto py-7">
      <div className="flex justify-center items-center">
        <form ref={form} onSubmit={sendEmail} id='contact-form' className='flex flex-col w-full md:w-7/12'>
          <label>Name</label>
          <input type="text" name="user_name" className='p-2 bg-transparent border-2 rounded-md focus:outline-none'/>
          <label>Email</label>
          <input type="email" name="user_email" className='my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none'/>
          <label>Message</label>
          <textarea name="message" className='p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none'/>
          <input type="submit" value="Send" className='text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-black  drop-shadow-md  hover:stroke-white'/>
        </form>
      </div>
    </div>
    
  );
};

export default Contact;