import { useState } from "react";

import Form from "./components/Form";
import PatientsList from "./components/PatientsList";
import Title from "./components/Title";

function App() {
  const [patients, setPatients] = useState([]);
  const [patient, setPatient] = useState({});

  const deletePatient = (id) => {
    console.log("deleting patient #", id);
    const patientsUpdated = patients.filter((patient) => patient.id !== id);
    setPatients(patientsUpdated);
  };

  return (
    <div className="mx-auto container">
      <Title />
      <main className="mt-8 md:flex">
        <Form
          patients={patients}
          setPatients={setPatients}
          patient={patient}
          setPatient={setPatient}
        />
        <PatientsList
          patients={patients}
          setPatient={setPatient}
          deletePatient={deletePatient}
        />
      </main>
    </div>
  );
}

export default App;
