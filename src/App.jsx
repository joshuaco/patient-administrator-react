import Form from "./components/Form";
import Header from "./components/Header";
import PatientsList from "./components/PatientsList";
import Title from "./components/Title";

function App() {
  return (
    <div className="mx-auto container">
      <Header />
      <Title />
      <main className="mt-8 md:flex">
        <Form />
        <PatientsList />
      </main>
    </div>
  );
}

export default App;
