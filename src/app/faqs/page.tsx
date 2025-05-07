export default function FAQs(){
    return (
        <section className="flex-grow flex  flex-col items-center min-h-screen font-montserrat">
        <div className="p-6 backdrop-blur-md place-items-center font-montserrat">
            <h1 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h1>
            <div className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">💡 Who am I?</h2>
                <p>
                    I m Abdulmumin Ibrahim, a passionate full-stack developer specializing in MERN, PHP & MySQL, TypeScript, React, Node.js, and more. I turn ideas into functional, visually appealing web solutions.
                </p>
            </div>
            <div className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">🔧 What services do I offer?</h2>
                <ul className="list-disc list-inside">
                    <li>Frontend Development: Clean, responsive designs using React, Tailwind, and Bootstrap.</li>
                    <li>Backend Development: Robust APIs and server-side logic with Node.js, Express, and PHP.</li>
                    <li>Full-Stack Projects: Complete web apps, from database to deployment.</li>
                    <li>Custom Web Solutions: Unique websites tailored to your business needs.</li>
                </ul>
            </div>
            <div className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">📁 What projects have I worked on?</h2>
                <p>Some of my notable projects include:</p>
                <ul className="list-disc list-inside">
                    <li>Nijadealersng: A car dealer platform.</li>
                    <li>CarPay: A car financing solution.</li>
                    <li>Kidnap Report System: A security reporting app.</li>
                </ul>
                <p className="mt-2">You can explore more of my work in the Projects section.</p>
            </div>
            <div className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">🛠️ What technologies do I use?</h2>
                <p>I stay versatile and up-to-date with technologies like:</p>
                <ul className="list-disc list-inside">
                    <li>Frontend: React, TypeScript, JavaScript, HTML, CSS, Tailwind, Bootstrap</li>
                    <li>Backend: Node.js, Express, PHP, MongoDB, MySQL</li>
                    <li>Tools: Git, Netlify, Firebase</li>
                </ul>
            </div>
            <div className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">🚀 How can we collaborate?</h2>
                <p>
                    Im open to freelance projects, partnerships, or joining a development team. If you have an idea or project in mind, let’s discuss how I can bring it to life.
                </p>
            </div>
            <div className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">📩 How can you contact me?</h2>
                <p>You can reach me via:</p>
                <ul className="list-disc list-inside">
                    <li>Email: abdulmumin6060@gmail.com</li>
                    <li>Phone: 09032877519</li>
                    <li>Location: Minna, Niger State</li>
                </ul>
                <p className="mt-2">Got more questions? Feel free to reach out!</p>
            </div>
        </div>
        </section>
    );
}