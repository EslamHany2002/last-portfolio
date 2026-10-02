import { useRef, useState } from 'react';
import { Loader2, Send } from 'lucide-react';
import { socials } from '../data/portfolio.js';
import Button from './Button.jsx';

/*
 * Sends messages through Web3Forms (https://web3forms.com).
 * The access key comes from VITE_WEB3FORMS_ACCESS_KEY in .env (git-ignored) and is
 * never hardcoded. Messages are delivered to the email address linked to that key
 * in the Web3Forms dashboard.
 */
const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
const ENDPOINT = 'https://api.web3forms.com/submit';
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const EMPTY = { name: '', email: '', subject: '', message: '' };

const MESSAGES = {
  success: "Message sent successfully. I'll get back to you soon.",
  error: `Sorry, your message couldn't be sent. Please try again, or email me directly at ${socials.email}.`,
  unconfigured: `The contact form is unavailable right now. Please email me directly at ${socials.email}.`,
  idle: 'Your message goes straight to my inbox.',
};

function validate(values) {
  const errors = {};
  if (values.name.trim().length < 2) errors.name = 'Please enter your name.';
  if (!values.email.trim()) errors.email = 'Please enter your email address.';
  else if (!EMAIL_PATTERN.test(values.email.trim())) errors.email = 'Please enter a valid email address.';
  if (values.message.trim().length < 10) errors.message = 'Please write a message of at least 10 characters.';
  return errors;
}

export default function ContactForm() {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(ACCESS_KEY ? 'idle' : 'unconfigured');
  const submitting = useRef(false);
  const formRef = useRef(null);

  const onChange = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
    if (status === 'success' || status === 'error') setStatus('idle');
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (submitting.current || !ACCESS_KEY) return; // blocks double submits

    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      formRef.current?.querySelector(`[name="${Object.keys(found)[0]}"]`)?.focus();
      return;
    }

    const honeypot = new FormData(event.currentTarget).get('botcheck');
    submitting.current = true;
    setStatus('loading');

    try {
      const response = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: values.subject.trim() || `New portfolio message from ${values.name.trim()}`,
          from_name: 'Portfolio contact form',
          name: values.name.trim(),
          email: values.email.trim(),
          replyto: values.email.trim(),
          message: values.message.trim(),
          botcheck: Boolean(honeypot),
        }),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok || !result.success) throw new Error('Submission rejected');

      setValues(EMPTY);
      setStatus('success');
    } catch {
      // Keep what the visitor typed so they can retry.
      setStatus('error');
    } finally {
      submitting.current = false;
    }
  };

  const loading = status === 'loading';
  const fieldProps = (name) => ({
    name,
    id: `cf-${name}`,
    value: values[name],
    onChange,
    disabled: loading,
    'aria-invalid': errors[name] ? true : undefined,
    'aria-describedby': errors[name] ? `cf-${name}-error` : undefined,
  });
  const fieldError = (name) =>
    errors[name] && (
      <p className="field__error" id={`cf-${name}-error`}>
        {errors[name]}
      </p>
    );

  return (
    <form className="contact-form" onSubmit={onSubmit} noValidate ref={formRef} aria-busy={loading}>
      {/* Honeypot: hidden from people, filled in by bots; Web3Forms drops those submissions */}
      <input type="checkbox" name="botcheck" className="visually-hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      <div className="contact-form__row">
        <div className="field">
          <label className="field__label" htmlFor="cf-name">
            Name
          </label>
          <input className="field__input" type="text" autoComplete="name" required {...fieldProps('name')} />
          {fieldError('name')}
        </div>
        <div className="field">
          <label className="field__label" htmlFor="cf-email">
            Email
          </label>
          <input className="field__input" type="email" autoComplete="email" required {...fieldProps('email')} />
          {fieldError('email')}
        </div>
      </div>
      <div className="field">
        <label className="field__label" htmlFor="cf-subject">
          Subject <span className="field__optional">(optional)</span>
        </label>
        <input className="field__input" type="text" {...fieldProps('subject')} />
      </div>
      <div className="field">
        <label className="field__label" htmlFor="cf-message">
          Message
        </label>
        <textarea className="field__input field__input--area" rows="5" required {...fieldProps('message')} />
        {fieldError('message')}
      </div>

      <div className="contact-form__footer">
        <Button
          type="submit"
          variant="light"
          icon={loading ? Loader2 : Send}
          className={loading ? 'is-loading' : ''}
          disabled={loading || status === 'unconfigured'}
        >
          {loading ? 'Sending…' : 'Send Message'}
        </Button>
        <p
          className={`contact-form__hint ${status === 'success' ? 'is-success' : ''} ${status === 'error' || status === 'unconfigured' ? 'is-error' : ''}`}
          role={status === 'error' ? 'alert' : 'status'}
          aria-live="polite"
        >
          {loading ? 'Sending your message…' : MESSAGES[status]}
        </p>
      </div>
    </form>
  );
}
