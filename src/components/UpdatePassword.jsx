import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { AppContext } from "../provider/ContextProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const UpdatePassword = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const { isShow, setIsShow } = useContext(AppContext)


    const { data: singleAcount = [] } = useQuery({
        queryKey: ['singleAccount', `${id}`],
        queryFn: async () => {
            const res = await axios.get(`${import.meta.env.VITE_api_url}/singleAcount/${id}`, { withCredentials: true })
            return res.data
        }
    })

    const handleUpdate = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        const updateAccount = { email, password }
        // console.log(updateAccount)
        axios.patch(`${import.meta.env.VITE_api_url}/account/update?id=${singleAcount?._id}`, updateAccount, { withCredentials: true })
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    toast.success('Account Info Updated', { autoClose: 1500 });
                    navigate('/my-password')
                } else {
                    toast.warning('Failed to update account info', { autoClose: 1500 });
                }
            })
    }
    return (
        <div className="max-w-[1080px] mx-auto rounded px-8 pt-6 pb-8">
            <div className="mb-4 text-center text-white">
                <h1 className="text-2xl font-bold mb-4 md:mb-8">Update Info of: <span className="underline">{singleAcount.accountName}</span> </h1>
            </div>
            <form onSubmit={handleUpdate} className="max-w-xl mx-auto">
                <div className="flex flex-col items-center">
                    <div className="mb-4 w-full">
                        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email or Username</label>
                        <input id="email" name="email" defaultValue={singleAcount.email} type="text" placeholder="Email or Username" className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                    </div>
                    <div className="mb-6 w-full">
                        <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                        <div className="relative">
                            <input id="password" name="password" defaultValue={singleAcount.password} type={isShow ? "text" : "password"} placeholder="*************" className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                            <div onClick={() => setIsShow(!isShow)} className="absolute right-4 top-3 cursor-pointer">
                                {isShow ? <FaEyeSlash size={18} title="Hide Password" /> : <FaEye size={18} title="Show Password" />}
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <button type="submit" className="bg-cyan-700 hover:bg-cyan-800 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline w-full">
                        Update Account
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UpdatePassword;