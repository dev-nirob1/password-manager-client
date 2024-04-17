

const MyPassword = () => {

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
                                Username
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
                        <tr className="text-center text-white text-xs md:text-base">
                            <td className="border-b border-cyan-300 px-4 py-2">
                                Account 1
                                </td>
                            <td className="border-b border-cyan-300 px-4 py-2">
                                example1
                            </td>
                            <td className="border-b border-cyan-300 px-4 py-2">
                                password1
                                <button className="ml-4">copy</button>
                            </td>
                            <td className="border-b border-cyan-300 px-4 py-2">
                                <button className="border rounded">
                                    edit
                                </button>
                                <button className="border rounded">
                                    del
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyPassword;