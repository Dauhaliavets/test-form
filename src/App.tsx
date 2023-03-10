import './App.css';

import React from 'react';

import { FeedbackForm } from './components/FeedbackForm';

const App: React.FC = () => {
  const [isOpenModal, setIsOpenModal] = React.useState<boolean>(false);

  const openModal = () => setIsOpenModal(true);

  const closeModal = () => setIsOpenModal(false);

  return (
    <div className="app">
      <button onClick={openModal}>Open Modal</button>
      {isOpenModal && <FeedbackForm handleClose={closeModal} />}
    </div>
  );
};
export default App;
