import { useEffect, useState } from "react";



function Home() {
  const [data, setData] = useState([]);
  const [selectedValue, setSelectedValue] = useState("Select");

  useEffect(() => {
    fetch(" http://open.tan.fr/ewp/horairesarret.json/PIRA1/27/1")
      .then((response) => response.json())
      .then((res) => setData(res))
      .catch((err) => console.error(err));
  }, []);
    return (
        <div >
            <p>ahahaha bienvenue
            </p>
        </div>
    );
};

export default Home;