import React, { useEffect, useState } from "react";

const useUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://book-your-collage-server.vercel.app/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  }, []); // Add an empty array as the second argument to useEffect

  return [users];
};

export default useUsers;
