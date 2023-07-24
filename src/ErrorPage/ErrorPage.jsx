import { Link, useRouteError } from "react-router-dom";
import { FcHome } from "react-icons/fc";

const ErrorPage = () => {
  const { error, status } = useRouteError();

  return (
    <section className="flex items-center h-screen p-16 bg-gray-100 text-gray-900">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <img
          src="https://i.ibb.co/m8mtLbc/xanrs3yj.png"
          className="w-80"
          alt=""
        />
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl text-red-600">
            <span className="sr-only">Error</span> {status || 404}
          </h2>
          <p className="text-2xl font-semibold md:text-3xl mb-8">
            Go BACK
            <br />
            {error?.message}
          </p>
          <Link
            to="/"
            className="px-2 py-3 font-semibold rounded bg-black bg-opacity-20 text-white flex items-center justify-center"
          >
            <FcHome className="mr-2" /> Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
