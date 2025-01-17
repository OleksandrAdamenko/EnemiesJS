import React from 'react';
import Modal from '../ui/Modal';

const About = ({ isOpen, onClose }) => {
  return (
    <Modal 
      isOpen={isOpen}
      onClose={onClose}
      title="About"
    >
      <div className="space-y-4 text-gray-600 dark:text-gray-300">
        <p>About content will go here</p>
      </div>
    </Modal>
  );
};

export default About;