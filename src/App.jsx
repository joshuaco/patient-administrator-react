import { useState } from "react";

import Form from "./components/Form";
import PatientsList from "./components/PatientsList";
import Title from "./components/Title";

function App() {
  const [patients, setPatients] = useState([]);

  return (
    <div className="mx-auto container">
      <Title />
      <main className="mt-8 md:flex">
        <Form patients={patients} setPatients={setPatients} />
        <PatientsList patients={patients} />
      </main>
    </div>
  );
}

export default App;
