
const Banner = () => {
    return (
        <div className="bg-gradient-to-b from-cyan-600 to-cyan-400 text-white py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl sm:text-5xl font-semibold mb-4">Securely Manage Your Passwords</h1>
                <p className="text-lg sm:text-xl mb-6">Effortlessly store and access your passwords securely with our app.</p>
                <ul className="text-lg mb-6">
                    <li className="flex items-center mb-2">
                        <svg className="h-6 w-6 mr-2 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                        Store all your passwords securely in one place
                    </li>
                    <li className="flex items-center mb-2">
                        <svg className="h-6 w-6 mr-2 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                        Access your passwords from any device, anywhere
                    </li>
                    <li className="flex items-center mb-2">
                        <svg className="h-6 w-6 mr-2 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                        Securely backup and sync your passwords across all your devices
                    </li>
                </ul>
                <button className="bg-yellow-400 hover:bg-yellow-500 text-neutral-800 font-bold py-3 px-8 rounded-full shadow-lg transition duration-300">Get Started</button>
            </div>
        </div>




    );
};

export default Banner;