import Patient from "./Patient";

function PatientsList() {
  return (
    <section className="md:w-1/2 lg:w-3/5">
      <h2 className="text-3xl font-bold text-center">Patients List</h2>

      <p className="text-xl mt-3 text-center font-medium">
        Manage <span className="text-indigo-600 font-bold">Patients</span>
      </p>

      <div className="mt-8 md:h-screen md:overflow-y-scroll no-scrollbar">
        <p className="font-bold text-gray-800 text-center text-3xl mt-8">
          No Patients added
        </p>
      </div>
    </section>
  );
}

export default PatientsList;
