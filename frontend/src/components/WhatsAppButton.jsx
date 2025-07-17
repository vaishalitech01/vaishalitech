import React, { useEffect, useState } from 'react';
import whatsappIcon from '../../src/assets/imgs/whatsapp.png'; // Adjust path if needed

const Whatsapp = () => {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 3000); // message shows for 3 seconds
    }, 5000); // every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Embedded animation styles */}
      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .animate-bounce-slow {
          animation: bounce-slow 2s infinite;
        }

        @keyframes fade-in-out {
          0% { opacity: 0; transform: translateY(10px); }
          10% { opacity: 1; transform: translateY(0); }
          90% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(10px); }
        }

        .animate-fade-in-out {
          animation: fade-in-out 3s ease-in-out;
        }
      `}</style>

      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
        {showMessage && (
          <div className="bg-[#25D366] text-white px-4 py-2 rounded-md shadow-md text-sm animate-fade-in-out">
            How can I help you?
          </div>
        )}

        <a
          href="https://wa.me/919135867021?text=Hello%20VaishaliTech,%20I%20want%20services"
          target="_blank"
          rel="noopener noreferrer"
          className="animate-bounce-slow"
        >
          <img
            src={whatsappIcon}
            alt="WhatsApp"
            className="w-14 h-14 md:w-16 md:h-16 rounded-full shadow-lg"
          />
        </a>
      </div>
    </>
  );
};

export default Whatsapp;
