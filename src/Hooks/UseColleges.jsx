import React, { useEffect, useState } from "react";

const UseColleges = () => {
  const [colleges, setColleges] = useState([]);

  useEffect(() => {
    fetch("https://book-your-collage-server.vercel.app/colleges")
      .then((res) => res.json())
      .then((data) => {
        setColleges(data);
      });
  }, []);

  return [colleges];
};

export default UseColleges;
