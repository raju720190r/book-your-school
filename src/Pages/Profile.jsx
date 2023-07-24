import { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
import useUsers from "../Hooks/useUsers";

const Profile = () => {
  const { user } = useAuth();
  const [users] = useUsers();

  console.log(users);

  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [university, setUniversity] = useState("");
  const [address, setAddress] = useState("");
  const [id, setID] = useState("");

  useEffect(() => {
    if (user && users) {
      const userProfile = users.find((u) => u.email === user.email);

      if (userProfile) {
        setName(userProfile.name || "");
        setEmail(userProfile.email || "");
        setUniversity(userProfile.university || "");
        setAddress(userProfile.address || "");
        setID(userProfile._id);
      }
    }
  }, [user, users]);

  // Function to handle saving the edited data
  const handleSave = () => {
    console.log("Updated Name:", name);
    console.log("Updated Email:", email);
    console.log("Updated University:", university);
    console.log("Updated Address:", address);
    console.log("Updated id:", id);

    setEditMode(false);
    // Call an API or update the database with the edited data
    // ...
    const userId = id; // Assuming you have access to the user ID
    const apiUrl = `https://book-your-collage-server.vercel.app/users/${userId}`; // Assuming your API URL for updating users
    const updatedUserData = { name, email, university, address };

    fetch(apiUrl, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedUserData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.message);
        // Optionally, you can update the user data in your front-end state here
      })
      .catch((error) => {
        console.error("Error updating user data:", error);
        // Handle error cases if needed
      });
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="avatar m-4">
        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img src={user?.photoURL} />
        </div>
      </div>
      <h3 className="text-2xl font-medium">
        Welcome To Your Profile{" "}
        <span className="text-blue-500">- {user?.displayName} </span>{" "}
      </h3>

      {editMode ? (
        <div className="border-2 m-2 p-2  border-red-300 rounded-xl bg-slate-200">
          {/* Edit mode form */}
          <div>
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input input-bordered input-success w-full max-w-xs"
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="text"
              value={email}
              readOnly
              className="input input-bordered input-success w-full max-w-xs my-4"
            />
          </div>
          <div>
            <label>University:</label>
            <input
              type="text"
              value={university}
              onChange={(e) => setUniversity(e.target.value)}
              className="input input-bordered input-success w-full max-w-xs "
            />
          </div>
          <div>
            <label>Address:</label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="input input-bordered input-success w-full max-w-xs my-4"
            />
          </div>
          <button
            onClick={handleSave}
            className="btn bg-blue-500 hover:bg-blue-600 text-white glass"
          >
            Save
          </button>
        </div>
      ) : (
        <>
          {/* Display mode */}
          <div className="text-2xl border-2 m-2 p-2  border-red-300 rounded-xl bg-slate-200">
            <p>Name: {name}</p>
            <p className="my-2">Email: {email}</p>
            <p>University: {university}</p>
            <p className="my-2">Address: {address}</p>
          </div>
          <button
            onClick={() => setEditMode(true)}
            className="btn bg-blue-500 hover:bg-blue-600 text-white glass"
          >
            Edit
          </button>
        </>
      )}
    </div>
  );
};

export default Profile;
