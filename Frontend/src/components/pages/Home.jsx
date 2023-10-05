import  { useEffect, useState } from "react";

function Home() {
  const [data, setData] = useState({});
  const [selectedGroup, setSelectedGroup] = useState("");
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
  });

  useEffect(() => {
    fetch("https://open.tan.fr/ewp/horairesarret.json/PIRA1/27/1")
      .then(async (res) => {
        const response = await res.json();

        if (response && response.ligne && response.ligne.numLigne) {
          setData(response);
          console.log("Données de l'API récupérées avec succès :");
        } else {
          console.error("Données invalides de l'API");
        }
      });
  }, []);

  const renderCheckboxGroup = (groupData) => {
    const checkboxes = [];

    const generateCheckboxes = (data, parentKey = "") => {
      for (const key in data) {
        if (typeof data[key] === "object") {
          generateCheckboxes(data[key], parentKey + key + "/");
        } else {
          checkboxes.push(
            <div key={parentKey + key}>
              <input type="checkbox" id={parentKey + key} />
              <label htmlFor={parentKey + key}>{key}: {data[key].toString()}</label>
            </div>
          );
        }
      }
    };

    generateCheckboxes(groupData);

    return checkboxes;
  };

  const handleSelectChange = (event) => {
    setSelectedGroup(event.target.value);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Données du formulaire soumises :", formData);
  };

  return (
    <div>
      <h1>Mon parcours quotidien</h1>
      <div className="select-container">
        <select onChange={handleSelectChange}>
          <option value="">Sélectionne ta ligne</option>
          {Object.keys(data).map((groupKey) => (
            <option key={groupKey} value={groupKey}>
              {groupKey}
            </option>
          ))}
        </select>
        {selectedGroup && (
          <div className="checkbox-container">
            {renderCheckboxGroup(data[selectedGroup])}
          </div>
        )}
      </div>
      <div className="form-container">
  <form>
    <h2>Réservé ton cotransporteur</h2>
    <input type="text" placeholder="Nom" />
    <input type="text" placeholder="Prénom" />
    <input type="text" placeholder="Email" />
    <textarea placeholder="Écris ton message ici"></textarea>
    <button>Réserver</button>
  </form>

  <form>
    <h2>Soit le cotransporteur</h2>
    <input type="text" placeholder="Nom" />
    <input type="text" placeholder="Prénom" />
    <input type="text" placeholder="Email" />
    <textarea placeholder="Écris ton message ici"></textarea>
    <button>Réserver</button>
  </form>
</div>

      
    </div>
  );
}

export default Home;
