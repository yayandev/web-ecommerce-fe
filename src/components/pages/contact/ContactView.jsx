import { FaEnvelope, FaPhone } from "react-icons/fa";

const ContactView = () => {
  return (
    <div className="w-full flex flex-col sm:flex-row my-10 gap-5">
      <div className="w-full sm:w-96 p-5 sm:p-10 shadow rounded space-y-3">
        <div className="flex gap-3 items-center">
          <div className="h-10 w-10 rounded-full bg-red-500 text-white flex justify-center items-center font-bold text-lg">
            <FaPhone />
          </div>
          <h2 className="font-semibold text-lg">Call To Us</h2>
        </div>
        <p className="text-sm">We are available 24/7, 7 days a week.</p>
        <p className="text-sm">Phone: +8801611112222</p>
        <div className="h-2 bg-gray-100 w-full"></div>
        <div className="flex gap-3 items-center">
          <div className="h-10 w-10 rounded-full bg-red-500 text-white flex justify-center items-center font-bold text-lg">
            <FaEnvelope />
          </div>
          <h2 className="font-semibold text-lg">Write To US</h2>
        </div>
        <p className="text-sm">
          Fill out our form and we will contact you within 24 hours.
        </p>
        <p className="text-sm">Emails: customer@exclusive.com</p>
        <p className="text-sm">Emails: support@exclusive.com</p>
      </div>
      <div className="flex-1 shadow rounded p-5 sm:p-10 space-y-3">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-sm bg-gray-100 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-sm bg-gray-100 focus:outline-none"
          />
          <input
            type="tel"
            placeholder="Your Phone"
            className="w-full p-3 rounded-sm bg-gray-100 focus:outline-none"
          />
        </div>
        <textarea
          rows={10}
          className="w-full bg-gray-100 rounded-sm focus:outline-none p-3"
          id=""
        ></textarea>
        <div className="flex justify-end">
          <button className="py-2 px-5 rounded hover:opacity-80 bg-red-500 text-white font-semibold">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactView;
