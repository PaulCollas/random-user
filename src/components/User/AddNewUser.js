import axios from "axios";
import React from "react";

const baseURL = "https://jsonplaceholder.typicode.com/users";

export default function AddNewUser() {
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    axios.get(`${baseURL}/`).then((response) => {
      setUser(response.data);
    });
  }, []);

  function createUser() {
    axios
      .post(baseURL, {
        name: user.name,
        email: user.email,
        phone: user.phone
      })
      .then((response) => {
        setUser(response.data);
      });
  }

  if (!user) return "Problème lors de l'ajout de l'utilisateur"

  return (
    <div>
        <form className="randomuser-form">
            <input type="text" placeholder="Nom" name="text" className="randomuser-input edit" value={user.name} />
            <input type="text" placeholder="Email" name="text" className="randomuser-input edit" value={user.email} />
            <input type="text" placeholder="Télephone" name="text" className="randomuser-input edit" value={user.phone}/>
            <button className="randomuser-button edit" type="submit" onClick={createUser}>Ajouter</button>
        </form >
    </div>
  );
}