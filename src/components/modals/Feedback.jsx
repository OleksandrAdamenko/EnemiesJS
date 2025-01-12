import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import Modal from '../ui/Modal';

const Feedback = ({ isOpen, onClose }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState('');
  
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('');

    try {
      await emailjs.send(
        'service_kh61x3q',
        'template_mrijysf',
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message
        },
        '1PPd9edAA9i29C44S'
      );

      setStatus('success');
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => {
        onClose();
        setStatus('');
      }, 2000);

    } catch (error) {
      console.error('Error sending:', error);
      setStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal 
      isOpen={isOpen}
      onClose={onClose}
      title="Contact Me"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Name
          </label>
          <input
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm(prev => ({ ...prev, name: e.target.value }))}
            className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 p-2"
            disabled={isLoading}
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Email
          </label>
          <input
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm(prev => ({ ...prev, email: e.target.value }))}
            className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 p-2"
            disabled={isLoading}
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Message
          </label>
          <textarea
            required
            value={form.message}
            onChange={(e) => setForm(prev => ({ ...prev, message: e.target.value }))}
            rows={4}
            className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 p-2"
            disabled={isLoading}
          />
        </div>

        {status && (
          <div className={`text-center p-2 rounded ${
            status === 'success' 
              ? 'bg-green-100 dark:bg-green-800 text-green-700 dark:text-green-200' 
              : 'bg-red-100 dark:bg-red-800 text-red-700 dark:text-red-200'
          }`}>
            {status === 'success' ? 'Message sent successfully!' : 'Error sending message'}
          </div>
        )}

        <button
          type="submit"
          disabled={isLoading}
          className={`
            w-full 
            px-4 
            py-2 
            bg-blue-600 
            text-white 
            rounded-md 
            ${!isLoading && 'hover:bg-blue-700'}
            ${isLoading && 'opacity-50 cursor-not-allowed'}
            transition-colors
          `}
        >
          {isLoading ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </Modal>
  );
};

export default Feedback;