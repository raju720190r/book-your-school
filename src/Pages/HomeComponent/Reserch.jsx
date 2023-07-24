import { getAuth } from "firebase/auth";
import React from "react";
import UseColleges from "../../Hooks/UseColleges";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const Research = () => {
  const [colleges] = UseColleges();
  return (
    <Marquee>
      <div className="flex flex-row ">
        {colleges.map((college) => (
          <div key={college._id} className="flex flex-row">
            {" "}
            {/* Change 'flex-cols' to 'flex-row' */}
            {college.research_works.map((research_work, index) => (
              <div
                key={index}
                className="card w-96 bg-base-100 shadow-xl m-4 flex "
              >
                <div className="card-body">
                  <h2 className="card-title">{research_work.title}</h2>
                  <p>{research_work.description}</p>
                  <p>
                    {" "}
                    <span className="text-xl">Publication Date: </span>{" "}
                    {research_work.publication_date}
                  </p>
                  <div className="card-actions justify-end">
                    <Link
                      to="https://drive.google.com/file/d/1waJg1LnmTWzbtceAcXRzkAgq787uBKCr/view?usp=sharing"
                      className="btn bg-pink-700 text-white"
                    >
                      Recharge Paper
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </Marquee>
  );
};

export default Research;
