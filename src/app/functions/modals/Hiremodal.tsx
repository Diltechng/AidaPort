import { FiMail, FiFileText, FiCheckCircle } from "react-icons/fi";
import { btn } from "../components/styledComponents/styled";

export const Hiremodal: React.FC = () => {
  
  return (
      <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-md">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Would you like to hire me?</h2>
          <p className="text-gray-600">Fill out this short form and I will get back to you within 24 hours</p>
        </div>

        <form className="space-y-5 text-gray-600" action={"https://formsubmit.co/diltechng@gmail.com"} method="POST" target="blank">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiMail className="text-gray-400" />
            </div>
            <input
              placeholder="Your email address"
              type="email"
              name="email"
              id="email"
              required
              className="pl-10 border border-gray-300 rounded-lg w-full px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
            />
          </div>

          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 pt-3 pointer-events-none">
              <FiFileText className="text-gray-400" />
            </div>
            <textarea
              rows={6}
              name="details"
              id="details"
              placeholder="Tell me about your project (scope, timeline, budget, etc.)"
              required
              className="pl-10 border border-gray-300 rounded-lg w-full px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
            />
          </div>

          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                type="checkbox"
                name="check"
                id="check"
                required
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
            </div>
            <label htmlFor="check" className="ml-3 flex items-center">
              <span className="text-sm text-gray-700">
                I agree to the <a href="#" className="text-blue-600 hover:underline">terms & conditions</a>
              </span>
            </label>
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-lg text-white font-medium hover:opacity-90 transition-opacity shadow-md"
            style={{ background: btn.gradient }}
          >
            <FiCheckCircle className="text-xl" />
            Submit Hiring Request
          </button>
        </form>

        <div className="mt-4 text-center text-sm text-gray-500">
          Typically responds within 24 hours
        </div>
      </div>
  );
};