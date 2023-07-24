import React, { useEffect, useState } from "react";

const UseColleges = () => {
  const [colleges, setColleges] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/colleges")
      .then((res) => res.json())
      .then((data) => {
        setColleges(data);
      });
  }, []);

  return [colleges];
};

export default UseColleges;
