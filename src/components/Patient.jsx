function Patient() {
  return (
    <div className="bg-white shadow rounded-lg p-8 mb-4 ml-3">
      <p className="font-bold mb-2 text-gray-700 uppercase">
        Name: <span className="font-normal normal-case">Rocky</span>{" "}
      </p>
      <p className="font-bold mb-2 text-gray-700 uppercase">Owner: </p>
      <p className="font-bold mb-2 text-gray-700 uppercase">Email: </p>
      <p className="font-bold mb-2 text-gray-700 uppercase">Phone: </p>
      <p className="font-bold mb-2 text-gray-700 uppercase">Date: </p>
      <p className="font-bold mb-2 text-gray-700 uppercase">description: </p>
    </div>
  );
}

export default Patient;
