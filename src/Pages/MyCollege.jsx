import React from "react";
import { Link } from "react-router-dom";
import useAdmissionList from "../Hooks/useAdmissionList";
import useAuth from "../Hooks/useAuth";

const MyCollege = () => {
  const admissionlist = useAdmissionList();
  const { user } = useAuth();
  console.log(user?.email);
  console.log(admissionlist);
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Applied College</th>
            <th>Student</th>
            <th>Favorite Color</th>
          </tr>
        </thead>
        {admissionlist.map((Collegedata, index) => (
          <tbody key={index}>
            {/* map through each selectedCollege and render rows */}
            {Collegedata.map((College, index) => {
              console.log(College);
              // Check if user email matches the candidateEmail
              const isUserCandidate = user?.email === College?.candidateEmail;

              // Render the row only if it matches the user's college
              if (isUserCandidate) {
                return (
                  <tr key={index} className="my-4">
                    <th>{index + 1}</th>
                    <td>{College?.collegeName}</td>
                    <td>{College?.candidateName}</td>
                    <td className="btn btn-primary">
                      <Link to={`/colleges/${College?.clgId}`}>details</Link>
                    </td>
                    <td className="btn bg-red-400 ms-2">Review</td>
                  </tr>
                );
              } else {
                // Return null if there is no match (skips rendering the row)
                return null;
              }
            })}
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default MyCollege;
