import React from "react";

export default function ContactPage() {
  return (
    <div className=" mt-20 bg-gray-50 flex flex-col items-center justify-center p-6">
      <div className="text-center mb-12">
        {/* <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4">
          RiseZonic <span className="text-orange-500">Travel</span>
        </h1> */}
        <p className="text-gray-600 text-lg max-w-2xl"></p>
      </div>

      <div className="max-w-6xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
        <div className="md:w-1/3 bg-gradient-to-br from-blue-800 to-blue-600 p-8 text-white">
          <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
          <p className="mb-8 text-blue-100"></p>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <span className="p-3 bg-blue-500 rounded-full">📞</span>

              <div className="flex flex-col">
                <span>+1 888 843 4146, +91 81788 57250</span>
                <span>+91 85888 09690</span>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <span className="p-3 bg-blue-500 rounded-full">📧</span>

              <span>support@risezonic.com</span>
            </div>

            <div className="flex items-start space-x-4">
              <span className="p-3 bg-blue-500 rounded-full">📍</span>

              <div className="flex flex-col">
                <span>
                  RZ11/D, Upper Ground Floor Opp. Palam Metro Station Gate No 3,
                  Palam Dwarka Road, Delhi, 110045
                </span>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <span className="p-3 bg-blue-500 rounded-full">📍</span>

              <div className="flex flex-col">
                <span>
                  Awfis: 07th Floor, Gate No 3 & 4, Ambience Island, DLF Phase
                  3, NH-8, Gurugram, Haryana 122002
                </span>
              </div>
            </div>
          </div>

          <div className="mt-12 flex space-x-4">
            <div className="social-icon">Fb</div>
            <div className="social-icon">Insta</div>
            <div className="social-icon">Tw</div>
          </div>
        </div>

        <div className="md:w-2/3 p-8 md:p-12">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                First Name
              </label>
              <input
                type="text"
                placeholder="John"
                className="custom-input w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Doe"
                className="custom-input w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="example@mail.com"
                className="custom-input w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Your Message
              </label>
              <textarea
                rows="4"
                placeholder="Send Message....."
                className="custom-input w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
