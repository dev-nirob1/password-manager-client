
const Login = () => {
    return (
        <div className="max-w-xl mx-auto text-center">
            <div className="py-10">
                <div className="px-8 py-16 bg-white">
                    <h1 className="text-3xl font-medium mb-2">&lt;Pass <span className="text-teal-400">Man /&gt;</span></h1>
                    <p className="text-xl font-medium text-neutral-900 mb-2"><span>&#128522; Let&apos;s Get Started</span></p>
                    <p className=" font-medium text-neutral-700">Login to access the fantastic features of our password management app</p>
                    <div className="my-5">
                        <button className="py-3 w-full font-medium text-white bg-sky-500 rounded">
                            Sign in with Facebook
                        </button>
                        <div className="flex items-center justify-center gap-3 my-4">
                            <div className="border-b border-2 border-neutral-500 w-full rounded"></div>
                            <div className="">or</div>
                            <div className="border-b border-2 border-neutral-500 w-full rounded"></div>
                        </div>
                        <button className="py-3 w-full font-medium text-white bg-pink-600 rounded">
                            Sign in with Google
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;