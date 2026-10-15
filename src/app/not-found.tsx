import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="bg-red-50">
      <div className="flex flex-col justify-center items-center min-h-screen gap-0">
        <h2 className="font-bold text-2xl text-red-700 m-0">404 </h2>
        <p className="font-bold text-md m-0">
          Could not find requested resource
        </p>
        <Link href="/" className="font-bold underline m-0">
          হোম পেজে ফিরে যান
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
