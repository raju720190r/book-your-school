import React from "react";
import { useLoaderData } from "react-router-dom";

const CollegeDetails = () => {
  const college = useLoaderData();
  console.log(college);
  return (
    <>
      
      <div>
        <h2 className="text-center text-5xl my-5">College Details</h2>
        <div className="grid lg:flex my-5 w-full lg:justify-center">
          <div className="bg-sky-100 w-96">
            <img src={college.image_url} alt="" />
          </div>
          <div className="bg-pink-100 w-96 py-10 px-10 border-b-4">
            <h2 className="font-bold text-xl border-b-4 border-sky-200">
              {college.college_name}
            </h2>
            <p className="border-b-4 py-2 border-sky-200">
              <span className="font-bold text-xl">Admisiion Process: </span>
              {college.admission_process}
            </p>
            <p>
              <span className="text-xl font-semibold ">Sports:</span>{" "}
              <ol>
                {college.sports_categories.map((sport, index) => (
                  <li key={index} className="badge  badge-outline text-red-500">
                    {sport}
                  </li>
                ))}
              </ol>{" "}
            </p>
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default CollegeDetails;
