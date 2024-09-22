// OTPVerification.jsx
import React, { useState } from 'react';

const OTPVerification = () => {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [message, setMessage] = useState("");

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return;

    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    // Focus next input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredOtp = otp.join('');
    if (enteredOtp.length < 6) {
      setMessage("Please enter a complete 6-digit OTP.");
    } else {
      setMessage(`Entered OTP: ${enteredOtp}`);
      // You can call an API to verify the OTP here
    }
  };

  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="bg-white p-8 rounded-lg shadow-sm border max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-6">OTP Verification</h2>
        <p className='text-center mb-6'>Enter the OTP sent to your mobile number</p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex justify-center gap-2">
            {otp.map((data, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                value={data}
                onChange={(e) => handleChange(e.target, index)}
                onFocus={(e) => e.target.select()}
                className="w-10 h-10 text-center border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ))}
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Verify OTP
          </button>

          {message && (
            <p className="text-center text-red-500 mt-2">{message}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default OTPVerification;
