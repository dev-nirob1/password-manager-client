import { useQuery } from "@tanstack/react-query";
import axios from 'axios'
import { useContext } from "react";
import { AppContext } from "../provider/ContextProvider";
import { FaCopy } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";

const MyPassword = () => {
    const { user } = useContext(AppContext)

    const { data: account = [], refetch } = useQuery({
        queryKey: ['account', `${user?.email}`],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/account/user/${user?.email}`, { withCredentials: true })
            return res.data
        }
    })

    const handleDelete = (id) => {
        axios.delete(`http://localhost:5000/account/delete/${id}`, { withCredentials: true })
            .then(res => {
                console.log(res.data)
                refetch()
            })
    }

    return (
        <div className="">
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
                    <tbody> 
                        {account.length === 0 ? (
                            <tr className="text-center text-white text-xs md:text-base w-full">
                                <td colSpan="4" className="py-3">
                                    <p className="text-center text-lg">No Account to show</p>
                                </td>
                            </tr>
                        ) : (
                            account.map(item => (
                                <tr key={item._id} className="text-center text-white text-xs md:text-base">
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
                                            <Link to={`/update-password/${item._id}`} className="border rounded">
                                                <MdEdit size={20} />
                                            </Link>
                                            <button onClick={() => handleDelete(item._id)} className="border border-red-500 rounded text-red-500">
                                                <MdDelete size={20} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyPassword;
