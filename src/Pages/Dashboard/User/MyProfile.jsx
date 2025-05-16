import Swal from "sweetalert2";
import Button from "../../../components/Button";
import auth from "../../../FireBase/firebase.config";
import UseContext from "../../../Hooks/UseContext";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { updateProfile } from "firebase/auth";

const MyProfile = () => {
  const { user } = UseContext()
  const axiosPublic = useAxiosPublic()
  const axiosSecure = useAxiosSecure()

  const { data: singleUsers, isLoading, refetch } = useQuery({
    queryKey: ['singleUsers'],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/${user?.email}`)
      return res?.data
    },
  })
  const id = singleUsers?._id

  const handleSubmitProfile = (e) => {
    e.preventDefault()
    const data = new FormData(e.target)
    const userData = Object.fromEntries(data.entries())
    const userInfo = {
      photoURL: userData.photoURL,
      name: userData.displayName
    }
    // update profile
    updateProfile(auth.currentUser, {
      displayName: userData.displayName,
      photoURL: userData.photoURL
    }).then(async () => {
      const res = await axiosPublic.patch(`/users/update/${id}`, userInfo)
      refetch()
      if (res?.data?.modifiedCount>0) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your information successfully update!",
          showConfirmButton: false,
          timer: 2000
        });
        
      }


    })
  }

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-10 my-10 bg-white shadow-lg rounded-xl">
      <h2 className="text-3xl font-semibold text-center text-indigo-600 mb-8">
        My Profile
      </h2>

      <div className="flex w-full flex-col  items-center gap-8">
        <form onSubmit={handleSubmitProfile}>
          {/* Profile Image + Upload */}
          <div className="flex w-full flex-col items-center gap-4">
            <img
              src={user?.photoURL}
              alt="Profile"
              className="w-36 h-36 rounded-full border-4 border-indigo-500 object-cover"
            />
            <div className="text-center">
              {/* <input
            type="file"
            name="file"
            className="block w-full text-center items-center text-sm text-gray-500 file:mr-4 file:py-2 file:px-4
              file:rounded-md file:border-0 file:text-sm file:font-semibold
              file:bg-indigo-50 file:text-indigo-700
              hover:file:bg-indigo-100"
          /> */}
            </div>
            <div className="divider w-full uppercase hover:text-hoverColor">{user?.displayName}</div>
          </div>

          {/* User Info */}
          <div className="flex-1 items-center py-6 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">photoURL</label>
                <input
                  type="text"
                  name="photoURL"
                  defaultValue={user?.photoURL}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 shadow-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  name="displayName"
                  defaultValue={user?.displayName}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 shadow-sm"
                />
              </div>
            </div>
            <div className="mx-auto items-center">
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                value="robiulislam74@gmail.com"
                readOnly
                className="w-full cursor-not-allowed px-4 py-2 border border-gray-300 rounded-md bg-gray-100 shadow-sm"
              />
            </div>

            <div className="mt-6 items-center text-center">
              <Button
                type={"submit"}
                text={'Update Profile'}
                bgColor={'bg-thirdColor'}
                overBgColor={'bg-pinkRed'}
                textColor={'text-black'}
                groupHover={'group-hover:text-white'}
                padding={'px-6 py-3'}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MyProfile;
