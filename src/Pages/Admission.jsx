import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import UseColleges from "../Hooks/UseColleges";
import { FaSchool, FaArrowAltCircleRight } from "react-icons/fa";

const Admission = () => {
  const [colleges] = UseColleges();
  console.log(colleges);
  const [selectedCollege, setSelectedCollege] = useState("");

  console.log(selectedCollege);
  const navigate = useNavigate();
  const from = "/mycolege";
  const { user } = useAuth();
  console.log(user);
  // State to hold the form data

  const [formData, setFormData] = useState({
    collegeName: selectedCollege ? selectedCollege.college_name : " ",
    clgId: selectedCollege ? selectedCollege._id : " ",
    candidateName: user?.displayName,
    subject: "",
    candidateEmail: user?.email,
    candidatePhone: "",
    address: "",
    dateOfBirth: "",
    image: user?.photoURL,
  });

  const handleCollegeSelection = (college) => {
    console.log("Selected college:", college);
    setSelectedCollege(college);
  };

  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      collegeName: selectedCollege ? selectedCollege.college_name : "",
      clgId: selectedCollege ? selectedCollege._id : " ",
    }));
  }, [selectedCollege]);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const newformData = formData;

    fetch("http://localhost:5000/admission", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newformData),
    })
      .then((res) => res.json())
      .then(() => {
        {
          navigate(from, { replace: true });
        }
      });
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => {
      const updatedFormData = {
        ...prevFormData,
        [name]: value,
      };
      console.log("Updated form data:", updatedFormData);
      return updatedFormData;
    });
  };

  return (
    <div className="flex justify-around text-center items-center">
      <div className=" space-x-5 my-10">
        <h2 className="flex px-5 items-center text-2xl font-bold bg-slate-200 p-2 rounded">
          <span className="mr-5">Select Your College</span>{" "}
          <span className="text-green-700">
            <FaArrowAltCircleRight />
          </span>
        </h2>
        {colleges.map((college, index) => (
          <div key={index}>
            <ul>
              <li>
                <p
                  className="btn bg-sky-300 my-2"
                  onClick={() => handleCollegeSelection(college)}
                >
                  <FaSchool />
                  {college.college_name}
                </p>
              </li>
            </ul>
          </div>
        ))}
      </div>
      <div>
        {selectedCollege && (
          <div className="w-full mx-5 py-5 bg-slate-400">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col items-center"
            >
              {/* Input fields for the selected college */}
              <h2 className="text-xl bg-gray-200  p-4 rounded-xl">
                Selected College:{" "}
                <span className="text-green-600">
                  {selectedCollege?.college_name}
                </span>
              </h2>

              
                <div className="input-container my-2">
                  <label htmlFor="candidateName">Candidate Name:</label>
                  <input
                    type="text"
                    placeholder="Candidate Name"
                    name="candidateName"
                    value={formData.candidateName}
                    onChange={handleChange}
                    className="input input-bordered input-info w-full"
                  />
                </div>

                <div className="input-container">
                  <label htmlFor="subject">Subject:</label>
                  <input
                    type="text"
                    placeholder="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="input input-bordered input-info w-full"
                  />
                </div>

                <div className="input-container my-2">
                  <label htmlFor="candidateEmail">Candidate Email:</label>
                  <input
                    type="email"
                    placeholder="Candidate Email"
                    name="candidateEmail"
                    value={formData.candidateEmail}
                    readOnly
                    className="input input-bordered input-info w-full max-w-xs "
                  />
                </div>

                <div className="input-container my-2">
                  <label htmlFor="candidatePhone">
                    Candidate Phone Number:
                  </label>
                  <input
                    type="tel"
                    placeholder="Candidate Phone Number"
                    name="candidatePhone"
                    value={formData.candidatePhone}
                    onChange={handleChange}
                    className="input input-bordered input-info w-full max-w-xs"
                  />
                </div>

                <div className="input-container  my-2">
                  <label htmlFor="address">Address:</label>
                  <input
                    type="text"
                    placeholder="Address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="input input-bordered input-info w-full max-w-xs"
                  />
                </div>

                <div className="input-container  my-2">
                  <label htmlFor="dateOfBirth">Date of Birth:</label>
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    className="input input-bordered input-info w-full max-w-xs"
                  />
                </div>

                <div className="input-container my-2">
                  <label htmlFor="image">Image link:</label>
                  <input
                    type="text"
                    name="image"
                    placeholder="Image link"
                    value={formData.image}
                    onChange={handleChange}
                    className="input input-bordered input-info w-full max-w-xs "
                  />
                </div>

              <button className="btn bg-blue-400" type="submit">
                Submit
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Admission;
