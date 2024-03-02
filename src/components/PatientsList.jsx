import Patient from "./Patient";

function PatientsList({ patients, setPatient }) {
  return (
    <section className="md:w-1/2 lg:w-3/5">
      <h2 className="text-3xl font-bold text-center">Patients List</h2>

      <p className="text-xl mt-3 text-center font-medium">
        Manage <span className="text-indigo-600 font-bold">Patients</span>
      </p>

      <div className="mt-8 md:h-screen md:overflow-y-scroll no-scrollbar">
        {patients.length === 0 ? (
          <>
            <p className="font-bold text-gray-800 text-center text-3xl mt-8">
              No Patients added
            </p>
            <img src="./cat.svg" alt="cat" className="w-1/5 mx-auto mt-5" />
          </>
        ) : (
          patients.map((patient) => {
            return (
              <Patient
                key={patient.id}
                patient={patient}
                setPatient={setPatient}
              />
            );
          })
        )}
      </div>
    </section>
  );
}

export default PatientsList;
