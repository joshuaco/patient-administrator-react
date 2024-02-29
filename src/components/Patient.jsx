function Patient({ name, owner, phone, date, description }) {
  return (
    <article className="bg-white shadow rounded-lg p-8 mb-4 ml-3">
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
    </article>
  );
}

export default Patient;
