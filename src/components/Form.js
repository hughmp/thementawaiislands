import React from 'react';

module.exports = ({ form, handleSubmitForm }) => (
  <form onSubmit={handleSubmitForm}>
    <h2>Email Us</h2>
    {form.success ?
      <div className='form-success'> {form.success} </div>
      :
      <div>
        <div className='form-name-email'>
          <input className="footer-input" name='name' id='name' placeholder='Name' type='text' />
          <input className="footer-input" name='email' id='email' placeholder='Email' type='email' required />
        </div>
        <div className='form-name-email'>
          <textarea className="footer-textarea" name='message' id='message' rows='6' placeholder='Message' required ></textarea>
        </div>
        {form.loading ?
          <i className="fa fa-circle-o-notch fa-spin fa-2x fa-fw"></i> :
          <input value='SEND MESSAGE' className='footer-form-button' type='submit' />
        }
        <p>{form.error}</p>
      </div>
    }
  </form>
);