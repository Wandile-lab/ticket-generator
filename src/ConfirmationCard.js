import React from "react";
const ConfirmationCard = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 flex justify-center">
      <div className="max-w-3xl w-full bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">Your Ticket is Booked!</h1>
        <p className="text-gray-600">Check your email for a copy or download it below.</p>
        <div className="mt-6">
          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
            Download Ticket
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationCard;

