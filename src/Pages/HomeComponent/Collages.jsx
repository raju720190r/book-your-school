import Input from "postcss/lib/input";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import UseColleges from "../../Hooks/UseColleges";

const Colleges = () => {
  const [colleges] = UseColleges();

  console.log(colleges);

  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);
  };
  console.log(searchTerm);

  const filteredColleges = colleges.filter(
    (college) =>
      college &&
      college.college_name &&
      college.college_name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <>
      <div className="p-4 flex justify-center items-center ">
        <input
          type="text"
          placeholder="Search college"
          className=" text-center px-4 py-2 border border-gray-300 rounded-md w-64 focus:outline-none focus:ring focus:border-blue-300"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
        {filteredColleges.slice(0, 3).map((college) => (
          <div
            key={college._id}
            className="card  glass shadow-xl bg-pink-200 rounded-lg p-4 w-96"
          >
            <figure className="px-2 pt-2">
              <img
                src={college.image_url}
                alt="CollegeIMG"
                className="rounded-xl w-80 h-80 border-4 border-white shadow-lg"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-4xl font-bold ">
                {college.college_name}
              </h2>
              <p className="text-lg mt-2">
                Admission: {college.admission_dates}
              </p>
              <div className=" font-semibold mt-3">
                Events:
                {college.events.map((event, index) => (
                  <ul key={index}>
                    <li>{event.name}</li>
                  </ul>
                ))}
              </div>
              <p className=" mt-3">
                Recharge History: {college.research_history}
              </p>
              <div className="card-actions mt-5">
                <Link
                  to={`/colleges/${college._id}`}
                  className="btn bg-pink-600 hover:bg-pink-800 text-white  px-4 py-2 rounded-md"
                >
                  Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Colleges;
