import { useQuery } from "@tanstack/react-query";
import axios from 'axios'
import { useContext } from "react";
import { AppContext } from "../provider/ContextProvider";
import { FaCopy } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";

const MyPassword = () => {
    const { user } = useContext(AppContext)
    const { data: account = [] } = useQuery({
        queryKey: ['account'],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/account/${user?.email}`)
            console.log(res.data, account)
            return res.data
        }
    })

    return (
        <div className="min-h-screen bg-gradient-to-b from-cyan-600 to-cyan-300">
            <div className="max-w-[1080px] mx-auto w-full bg-transparent rounded-lg px-2 md:px-8 py-8 overflow-x-scroll md:overflow-auto">
                <h1 className="text-2xl text-white font-bold mb-4 md:mb-8 text-center">My Password</h1>
                <table className="w-full md:min-w-full border-collapse">
                    <thead>
                        <tr className="bg-cyan-600 text-white text-xs md:text-base">
                            <th className="border-b-2 border-cyan-300 px-4 py-2">
                                Account
                            </th>
                            <th className="border-b-2 border-cyan-300 px-4 py-2">
                                Email/Username
                            </th>
                            <th className="border-b-2 border-cyan-300 px-4 py-2">
                                Password
                            </th>
                            <th className="border-b-2 border-cyan-300 px-4 py-2">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    {
                        account.map(item => <tbody key={item._id}>

                            <tr className="text-center text-white text-xs md:text-base">
                                <td className="border-b border-cyan-300 px-4 py-2">
                                    <a className="hover:underline" href={item.websiteLink}>{item.accountName}</a>
                                </td>
                                <td className="border-b border-cyan-300 px-4 py-2">
                                    {item.email}
                                </td>
                                <td className="border-b border-cyan-300 px-4 py-2">
                                    <div className="flex justify-center items-center gap-2">
                                        {item.password}
                                        <button><FaCopy /></button>
                                    </div>
                                </td>
                                <td className="border-b border-cyan-300 px-4 py-2">
                                    <div className="flex items-center justify-center gap-1">
                                        <button className="border rounded">
                                            <MdEdit size={20} />
                                        </button>
                                        <button className="border rounded">
                                            <MdDelete size={20} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>)
                    }
                </table>
            </div>
        </div>
    );
};

export default MyPassword;