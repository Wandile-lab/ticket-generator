import React from 'react';
import './index.css'; // Make sure Tailwind is being loaded
import TicketGenerator from './TicketGenerator';
import AttendeeForm from './AttendeeForm';
import ConfirmationCard from './ConfirmationCard';
import Form from './Form.js';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <TicketGenerator />
      <AttendeeForm />
      <ConfirmationCard />
    </div>
  );
}

export default App;
