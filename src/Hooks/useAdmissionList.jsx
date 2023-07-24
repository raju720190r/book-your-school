import { useEffect, useState } from "react";

const useAdmissionList = () => {
  const [admissionlist, setAdmissionList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/admission")
      .then((res) => res.json())
      .then((data) => {
        setAdmissionList(data);
      });
  }, []);

  return [admissionlist];
};

export default useAdmissionList;
