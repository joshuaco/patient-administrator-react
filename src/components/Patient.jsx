function Patient({ patient, setPatient }) {
  const { name, owner, phone, date, description } = patient;

  const handleEdit = (e) => {};
  const handleDelete = (e) => {};

  return (
    <article className="bg-white shadow rounded-lg p-8 mb-4 ml-3 flex lg:flex-row md:flex-col">
      <div className="lg:w-3/4 sm:w-full">
        <p className="font-bold text-gray-700 uppercase">
          Pet's Name: <span className="font-normal">{name}</span>
        </p>
        <p className="font-bold text-gray-700 uppercase">
          Pet's Owner: <span className="font-normal">{owner}</span>
        </p>
        <p className="font-bold text-gray-700 uppercase">
          Phone Number: <span className="font-normal">{phone}</span>
        </p>
        <p className="font-bold text-gray-700 uppercase">
          Patient Admission Date: <span className="font-normal">{date}</span>
        </p>
        <p className="font-bold text-gray-700 uppercase">
          Description: <span className="font-normal">{description}</span>
        </p>
      </div>
      <div className="w-1/4 flex flex-col items-center justify-center gap-4">
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm lg:w-1/2 sm:w-full px-5 py-2.5 text-center"
          onClick={() => setPatient(patient)}
        >
          Edit
        </button>
        <button
          type="button"
          className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm lg:w-1/2 sm:w-full px-5 py-2.5 text-center"
        >
          Delete
        </button>
      </div>
    </article>
  );
}

export default Patient;
