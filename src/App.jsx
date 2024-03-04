import { useState, useEffect } from "react";

import Form from "./components/Form";
import PatientsList from "./components/PatientsList";
import Title from "./components/Title";
import Header from "./components/Header";

function App() {
  const [patients, setPatients] = useState(
    JSON.parse(localStorage.getItem("patients")) ?? []
  );
  const [patient, setPatient] = useState({});

  useEffect(() => {
    localStorage.setItem("patients", JSON.stringify(patients));

    if (patients.length === 0) {
      localStorage.removeItem("patients");
    }
  }, [patients]);

  const deletePatient = (id) => {
    const patientsUpdated = patients.filter((patient) => patient.id !== id);
    setPatients(patientsUpdated);
  };

  return (
    <div className="mx-auto container">
      <Header />
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
