import './App.css';

import React from 'react';

import { FeedbackForm } from './components/FeedbackForm';

const App: React.FC = () => {
  const [isOpenModal, setIsOpenModal] = React.useState<boolean>(false);
  const [requestBody, setRequestBody] = React.useState<string | null>(null);

  const openModal = () => setIsOpenModal(true);

  const closeModal = () => setIsOpenModal(false);

  const sendRequest = (json: string) => {
    setRequestBody(json);
  };

  return (
    <div className="app">
      <button onClick={openModal} className="app-button">
        Open Modal
      </button>
      {isOpenModal && (
        <FeedbackForm handleClose={closeModal} handleSendRequest={sendRequest} />
      )}
      {requestBody && (
        <div>
          <h4>Sended data: </h4>
          <p>{requestBody}</p>
        </div>
      )}
    </div>
  );
};
export default App;
