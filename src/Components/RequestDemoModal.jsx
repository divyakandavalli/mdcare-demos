import React from "react";

function RequestDemoModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target.id === "request-demo-modal") {
      onClose();
    }
  };

  return (
    <div
      id="request-demo-modal"
      className="fixed inset-0 z-50 flex items-center justify-center h-screen mt-24"
      onClick={handleOverlayClick}
    >
      {/* Modal box */}
      <div
        className="relative w-full max-w-2xl bg-white rounded-lg shadow-lg p-6"
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-gray-200">
          <h3 className="text-xl font-semibold text-[#020D2B]">
            Request Live Demo
          </h3>
          <button
            type="button"
            onClick={onClose}
            className="text-gray-400 hover:bg-gray-200 hover:text-[#020D2B] 
              rounded-lg text-sm w-8 h-8 flex justify-center items-center"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="pt-4">
          <form className="space-y-4">
            {/* Full Name + Phone side by side */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-[#020D2B]"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your name"
                  required
                  className="bg-gray-50 border border-gray-300 text-[#020D2B] text-sm rounded-lg 
                  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block mb-2 text-sm font-medium text-[#020D2B]"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="+1 234 567 890"
                  required
                  className="bg-gray-50 border border-gray-300 text-[#020D2B] text-sm rounded-lg 
                  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-[#020D2B]"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="name@company.com"
                required
                className="bg-gray-50 border border-gray-300 text-[#020D2B] text-sm rounded-lg 
                focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
            </div>

            {/* Specialty */}
            <div>
              <label
                htmlFor="specialty"
                className="block mb-2 text-sm font-medium text-[#020D2B]"
              >
                Specialty
              </label>
              <input
                type="text"
                id="specialty"
                placeholder="Your specialty"
                required
                className="bg-gray-50 border border-gray-300 text-[#020D2B] text-sm rounded-lg 
                focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
            </div>

            {/* Details */}
            <div>
              <label
                htmlFor="details"
                className="block mb-2 text-sm font-medium text-[#020D2B]"
              >
                Details
              </label>
              <textarea
                id="details"
                rows="4"
                placeholder="Tell us more about your request..."
                required
                className="bg-gray-50 border border-gray-300 text-[#020D2B] text-sm rounded-lg 
                focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="max-w-xl  text-[#020D2B] bg-[#f7931e]
              focus:ring-4 focus:outline-none focus:ring-blue-300 
              font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RequestDemoModal;
