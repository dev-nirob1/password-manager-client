import { useQuery } from "@tanstack/react-query";
import axios from 'axios'
import { useContext } from "react";
import { AppContext } from "../provider/ContextProvider";
import { FaCopy } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Swal from 'sweetalert2'
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

const MyPassword = () => {
    const { user, isShow, setIsShow } = useContext(AppContext)

    const { data: account = [], refetch } = useQuery({
        queryKey: ['account', `${user?.email}`],
        queryFn: async () => {
            const res = await axios.get(`${import.meta.env.VITE_api_url}/account/user/${user?.email}`, { withCredentials: true })
            return res.data
        }
    })

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`${import.meta.env.VITE_api_url}/account/delete/${id}`, { withCredentials: true })
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            refetch()
                        }
                    })
            }
        });

    }
    // const handleShowPassword = (id) => {
    //     setIsShow(prevItems => {
    //         return prevItems.map(item => {
    //             if (item.id === id) {
    //                 return { ...item, isShow: !item.isShow };
    //             }
    //             return item;
    //         });
    //     });
    // }
    const handleCopy = () => {
        toast('Copied to Clipboard', { autoClose: 1500 })
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
                                        <div className="flex justify-center items-center gap-3">
                                            {isShow ? (
                                                <span>{item.password}</span>
                                            ) : (
                                                <span>{"*".repeat(item.password.length)}</span>
                                            )}

                                            <div className="flex items-center justify-center gap-2">
                                                <span className="cursor-pointer" onClick={() => setIsShow(!isShow)}>
                                                    {isShow ? <FaEyeSlash title="Hide Password" /> : <FaEye title="Show Password" />}
                                                </span>

                                                <CopyToClipboard text={item.password} onCopy={handleCopy}>
                                                    <button className="hover:text-gray-200" title="copy password"><FaCopy /></button>
                                                </CopyToClipboard>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="border-b border-cyan-300 px-4 py-2">
                                        <div className="flex items-center justify-center gap-3">
                                            <Link to={`/update-password/${item._id}`} className="border rounded hover:text-gray-200">
                                                <MdEdit size={20} title="Update" />
                                            </Link>
                                            <button onClick={() => handleDelete(item._id)} className="border border-red-500 rounded text-red-500">
                                                <MdDelete size={20} title="Delete" />
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
