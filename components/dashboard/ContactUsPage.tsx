import React from 'react';

const ContactUsPage: React.FC = () => {
  return (
    <div className="p-8 text-white">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <div className="bg-proctor-dark p-6 rounded-lg max-w-xl mx-auto">
        <p className="text-gray-400 mb-6 text-center">
          Have questions or feedback? Fill out the form below or reach out to us at <a href="mailto:support@proctorai.com" className="text-proctor-blue hover:underline">support@proctorai.com</a>.
        </p>
        <form className="space-y-4">
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Full Name</label>
                <input type="text" id="name" className="w-full bg-proctor-dark-3 p-2 rounded-md border border-proctor-dark-3 focus:ring-proctor-blue focus:border-proctor-blue" />
            </div>
             <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                <input type="email" id="email" className="w-full bg-proctor-dark-3 p-2 rounded-md border border-proctor-dark-3 focus:ring-proctor-blue focus:border-proctor-blue" />
            </div>
             <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">Subject</label>
                <input type="text" id="subject" className="w-full bg-proctor-dark-3 p-2 rounded-md border border-proctor-dark-3 focus:ring-proctor-blue focus:border-proctor-blue" />
            </div>
            <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea id="message" rows={5} className="w-full bg-proctor-dark-3 p-2 rounded-md border border-proctor-dark-3 focus:ring-proctor-blue focus:border-proctor-blue"></textarea>
            </div>
            <button type="submit" className="w-full bg-proctor-blue hover:bg-indigo-500 text-white font-bold py-3 px-4 rounded-lg">
                Send Message
            </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUsPage;
