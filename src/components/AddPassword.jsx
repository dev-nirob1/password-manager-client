// import { useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import { useContext } from "react";
import { AppContext } from "../provider/ContextProvider";
import axios from "axios";
import { toast } from 'react-toastify';
import { FaEye, FaEyeSlash } from "react-icons/fa6";

const AddPassword = () => {
  const { user, isShow, setIsShow } = useContext(AppContext)

  const navigate = useNavigate()


  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target;
    const websiteLink = form.link.value;
    const accountName = form.account.value;
    const email = form.email.value;
    const password = form.password.value;
    const AddedBy = {
      userEmail: user?.email,
      userName: user?.displayName
    }
    const account = { websiteLink, accountName, email, password, AddedBy }

    axios.put(`${import.meta.env.VITE_api_url}/account`, account, { withCredentials: true })
      .then(res => {
        if (res.data.
          acknowledged) {
          toast.success('Account Added', { autoClose: 1500 })
          navigate('/my-password')
        }
      }
      )
  }
  return (
    <div className="max-w-[1080px] mx-auto rounded px-8 pt-6 pb-8">
      <div className="mb-4 text-center text-white">
        <h1 className="text-2xl font-bold mb-4 md:mb-8">Add Info</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="md:flex items-center gap-5">
          <div className="mb-6 flex-1">
            <label htmlFor="link" className="block text-gray-700 text-sm font-bold mb-2">Link (optional)</label>
            <input id="link" name="link" type="url" placeholder="Website Link" className="shadow block bg-white appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div className="mb-6 flex-1">
            <label htmlFor="account-name" className="block text-gray-700 text-sm font-bold mb-2">Account Name</label>
            <input id="account-name" name="account" type="text" placeholder="Account Name" className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
          </div>
        </div>
        <div className="md:flex items-center gap-5">
          <div className="mb-6 flex-1">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email or Username</label>
            <input id="email" name="email" type="text" placeholder="Email or Username" className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
          </div>
          <div className="mb-6 flex-1">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <div className='relative'>
              <input id="password" name="password" type={`${isShow ? 'text' : 'password'}`} placeholder="**************" className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
              <div className='absolute right-4 top-3' onClick={() => setIsShow(!isShow)}>
                {isShow ? <FaEyeSlash size={17} title='Hide Password'/> : <FaEye size={17} title='Show password' />}
              </div>
            </div>
          </div>
        </div>
        <div>
          <button type="submit" className="bg-cyan-700 hover:bg-cyan-800 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline w-full">
            Add Password
          </button>
        </div>
      </form>
    </div>


  );
};

export default AddPassword;