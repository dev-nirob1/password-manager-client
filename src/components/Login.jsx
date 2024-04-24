import { useContext } from "react";
import { AppContext } from "../provider/ContextProvider";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const { googleLogin} = useContext(AppContext)
    const navigate = useNavigate()
    
    // const handleFacbookLogin = ()=> {
    //     facebookLogin()
    //     .then(result => {
    //         const user = result.user;
    //         if(user){
    //             navigate('/')
    //         }
    //         console.log('facebook', user)
    //         // const credential = FacebookAuthProvider.credentialFromResult(result);
    //         // console.log(user, credential)

    //     })
    //     .catch(err => {
    //         console.log(err)
    //     })
    // }

    const handleGoogleLogin = ()=> {
        googleLogin()
        .then(result => {
            const user = result.user
            if(user){
                navigate('/')
            }
            console.log(user)
        })
        .catch(err => {
            console.log(err.message)
        })
    }

    return (
        <div className="max-w-lg mx-auto text-center">
            <div className="py-10">
                <div className="px-6 py-8 text-white shadow-2xl">
                    <h1 className="text-3xl font-medium mb-2">&lt;Pass<span className="text-teal-300">Man /&gt;</span></h1>
                    <p className="text-xl font-medium text-gray-100 mb-2"><span>&#128522; Let&apos;s Get Started</span></p>
                    {/* <p className=" font-medium text-gray-100">Login to access the fantastic features of our password management app</p> */}
                    <div className="my-5">
                        {/* <button onClick={handleFacbookLogin} className="py-3 w-full font-medium text-white bg-sky-500 rounded">
                            Sign in with Facebook
                        </button>
                        <div className="flex items-center justify-center gap-3 my-4">
                            <div className="border-b border-2 border-neutral-500 w-full rounded"></div>
                            <div className="">or</div>
                            <div className="border-b border-2 border-neutral-500 w-full rounded"></div>
                        </div> */}
                        <button onClick={handleGoogleLogin} className="py-3 w-full font-medium text-gray-100 bg-pink-600 rounded">
                            Sign in with Google
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;