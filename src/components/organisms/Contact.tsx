import { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import Title from '../atoms/Title';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailSent, setEmailSent] = useState(false);

  type FormData = {
    name: string;
    email: string;
    message: string;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = handleSubmit((formData) => {
    alert(JSON.stringify(formData));

    emailjs
      .send(
        'service_22wxesl',
        'template_4j8j40j',
        formData,
        'F8QI3E9TavieOtFCZ'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    reset();
  });

  const focusHandler = (event: React.FocusEvent<HTMLInputElement>) => {};

  return (
    <>
      <div className='p-contact' id='contact'>
        <Title titleName={'CONTACT'}></Title>
        <form className='p-contact__container' onSubmit={onSubmit}>
          <div className='p-contact__upper-box'>
            <div className='p-contact__upper-item'>
              <label htmlFor='name' className='p-contact__label'>
                Name
              </label>
              <input
                id='name'
                type='text'
                className={
                  errors.name ? 'p-contact__input--error' : 'p-contact__input'
                }
                {...register('name', {
                  required: { value: true, message: 'Name is required' },
                })}
              />
              {errors.name && (
                <p className='p-contact__error'>{errors.name.message}</p>
              )}
            </div>
            <div className='p-contact__upper-item'>
              <label htmlFor='email' className='p-contact__label'>
                Email
              </label>
              <input
                id='email'
                type='email'
                onFocus={focusHandler}
                className={
                  errors.email ? 'p-contact__input--error' : 'p-contact__input'
                }
                {...register('email', {
                  required: {
                    value: true,
                    message: 'Email is required',
                  },
                  pattern: {
                    value:
                      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message: 'Please use valid email address',
                  },
                })}
              />
              {errors.email && (
                <p className='p-contact__error'>{errors.email.message}</p>
              )}
            </div>
          </div>
          <label
            htmlFor='message'
            className='p-contact__label p-contact__label--textarea'
          >
            Message
          </label>
          <textarea
            id='message'
            className={
              errors.message
                ? 'p-contact__textarea--error'
                : 'p-contact__textarea'
            }
            {...register('message', {
              required: { value: true, message: 'Message is required' },
            })}
          ></textarea>
          {errors.message && (
            <p className='p-contact__error'>{errors.message.message}</p>
          )}
          <input type='submit' className='p-contact__submit' value='Confirm' />
        </form>
      </div>
    </>
  );
};

export default Contact;
