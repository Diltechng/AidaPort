import { btn } from "../functions/components/styledComponents/styled";

export default function Contact (){
    return(
        <div className="flex flex-col items-center justify-center min-h-screen backdrop-blur-md">
            <h1 className="text-4xl font-bold mb-6">Contact Me</h1>
            <form className="bg-white p-6 rounded-lg shadow-md w-full max-w-md text-gray-700">
            <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
                <input 
                type="text" 
                id="name" 
                name="name" 
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
                <input 
                type="email" 
                id="email" 
                name="email" 
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message:</label>
                <textarea 
                rows={8}
                id="message" 
                name="message" 
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
            </div>
            <button 
            style={{background: `${btn.gradient}`}}
                type="submit" 
                className="w-full text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
                Submit
            </button>
            </form>
        </div>
    )
}