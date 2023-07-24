import { useEffect, useState } from "react";

const useAdmissionList = () => {
  const [admissionlist, setAdmissionList] = useState([]);

  useEffect(() => {
    fetch("https://book-your-collage-server.vercel.app/admission")
      .then((res) => res.json())
      .then((data) => {
        setAdmissionList(data);
      });
  }, []);

  return [admissionlist];
};

export default useAdmissionList;
