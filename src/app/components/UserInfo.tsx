"use client";

import Link from "next/link";
import { authClient } from "../lib/auth-client";

const UserInfo = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const handleSignOut = async () => {
    await authClient.signOut();
  };
  return (
    <div>
      {user ? (
        <div className="flex justify-center items-center gap-2">
          <div>
            <Link href="/profile">
              {" "}
              <p className="font-bold text-green-500 underline">{user.name}</p>
            </Link>
          </div>

          <Link
            onClick={handleSignOut}
            href="/sign-in"
            className="btn text-[11px] md:text-base bg-green-500 text-white hover:bg-white hover:text-green-400 "
          >
            সাইন আউট
          </Link>
        </div>
      ) : (
        <div className="flex gap-3">
          {" "}
          <Link
            href="/sign-in"
            className="btn bg-white text-green-500 text-[12px] md:text-base hover:bg-green-400 hover:text-white "
          >
            সাইন ইন
          </Link>
          <Link
            href="/sign-up"
            className="btn  text-[11px] md:text-base bg-green-500 text-white hover:bg-white hover:text-green-400 "
          >
            সাইন আপ
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserInfo;
