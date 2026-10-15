"use client";

import { authClient } from "../lib/auth-client";
import Link from "next/link";
import { MdOutlineSubdirectoryArrowLeft } from "react-icons/md";

const ProfilePage = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const handleSignOut = async () => {
    await authClient.signOut();
  };

  const handleUpdateProfile = async (e: React.SubmitEvent<HTMLElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newUserData = Object.fromEntries(formData.entries()) as {
      name: string;
    };
    await authClient.updateUser({
      ...newUserData,
    });
  };
  return (
    <div className="grid justify-items-center my-10 space-y-3">
      <h2 className="font-bold text-xl"> আমার প্রোফাইল</h2>
      <p className="text-gray-500 text-md">আপনার একাউন্টের তথ্য এখানে দেখুন।</p>
      <div className="bg-green-100 flex justify-between items-center gap-8 shadow-sm px-8 py-5 rounded-2xl">
        <div className="flex justify-center items-center gap-2">
          <div className="avatar avatar-online avatar-placeholder">
            <div className="bg-green-600 text-neutral-content w-16 rounded-full">
              <span className="text-xl">{user?.name[0]}</span>
            </div>
          </div>
          <div>
            <p className="font-bold"> {user?.name}</p>
            <p className="text-gray-500">
              <small>{user?.email}</small>
            </p>
          </div>
        </div>
        <div className="flex justif-center items-center text-red-700 gap-2 border py-3 px-2 rounded-xl border-red-700 hover:bg-red-700 hover:text-white">
          <MdOutlineSubdirectoryArrowLeft className="" />
          <Link
            onClick={handleSignOut}
            href="/sign-in"
            className="text-[12px] rounded-xl font-bold md:text-[13px]"
          >
            সাইন আউট
          </Link>
        </div>
      </div>
      <div className="bg-green-100 shadow-sm rounded-2xl py-4">
        <h4 className="font-bold text-lg ml-2">তথ্য</h4>
        <form onSubmit={handleUpdateProfile}>
          <fieldset className="fieldset border-green-100 w-sm  rounded-box border p-4">
            <label className="label font-bold">নাম</label>
            <input type="text" name="name" className="input" />

            <button className="btn bg-green-600 mt-4 text-white">আপডেট</button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default ProfilePage;
