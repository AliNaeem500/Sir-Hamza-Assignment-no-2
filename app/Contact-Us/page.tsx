import Headerrr from "../components/Header";
export default function Contect_Us() {
    return(
        <div>
            <Headerrr />
            
      <div className="min-h-screen flex items-center justify-center bg-white px-4">
        <div className="max-w-xl w-full text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-gray-600 text-lg mb-6">
            If you have any questions or feedback, feel free to reach out to us!
          </p>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded px-4 py-2"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded px-4 py-2"
            />
            <textarea
              placeholder="Your Message"
              className="w-full border border-gray-300 rounded px-4 py-2"
              rows={4}
            ></textarea>
            <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
              Send Message
            </button>
          </form>
        </div>
      </div>
     </div>
    );
  }