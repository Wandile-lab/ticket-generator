import React from "react";

const AttendeeForm = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 flex justify-center">
      <div className="max-w-3xl w-full bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-blue-600 mb-6">Attendee Details</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Your Name</label>
            <input type="text" className="w-full p-2 border rounded-lg" placeholder="Enter your name" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AttendeeForm;

