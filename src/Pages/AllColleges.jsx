import React from "react";
import { Link } from "react-router-dom";
import UseColleges from "../Hooks/UseColleges";

const AllColleges = () => {
  const [colleges] = UseColleges();

  return (
    <div>
      <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-4  justify-items-center">
        {colleges.map((college) => (
          <div
            key={college._id}
            className="card  glass shadow-xl rounded-lg p-4 bg-sky-200"
          >
            <figure className="px-5 pt-5">
              <img
                src={college.image_url}
                alt="CollegeIMG"
                className="rounded-xl w-80 h-80 border-4 border-pink-200 shadow-lg"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-4xl font-bold ">
                {college.college_name}
              </h2>
              <p className=" text-lg mt-2">
                Admission: {college.admission_dates}
              </p>
              <div className=" font-semibold mt-3">
                Events:
                {college.events.map((event, index) => (
                  <ul  key={index}>
                    <li>{event.name}</li>
                  </ul>
                ))}
              </div>
              <p className="mt-3">
                Recharge History: {college.research_history}
              </p>
              <div className="card-actions mt-5">
                <Link
                  to={`/colleges/${college.id}`}
                  className="btn bg-pink-600 hover:bg-pink-800 text-white px-4 py-2 rounded-md"
                >
                  Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllColleges;
