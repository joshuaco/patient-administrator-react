const Form = () => {
  return (
    <section className="md:w-1/2 lg:w-2/5">
      <h2 className="text-3xl font-bold text-center">Patient Monitoring</h2>

      <p className="text-xl mt-3 text-center font-medium">
        Add and <span className="text-indigo-600 font-bold">Manage</span>{" "}
        Patients
      </p>

      <form className="my-8 bg-white shadow rounded-lg p-8">
        <div>
          <label
            htmlFor="name"
            className="block text-gray-700 uppercase font-bold"
          >
            Pet's Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Enter the patient name"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md focus:outline-none focus:border-indigo-600"
          />
        </div>
        <div className="mt-4">
          <label
            htmlFor="owner"
            className="block text-gray-700 uppercase font-bold"
          >
            Pet's Owner
          </label>
          <input
            id="owner"
            type="text"
            placeholder="Enter the owner name"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md focus:outline-none focus:border-indigo-600"
          />
        </div>
        <div className="mt-4">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter the email"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md focus:outline-none focus:border-indigo-600"
          />
        </div>
        <div className="mt-4">
          <label
            htmlFor="phone"
            className="block text-gray-700 uppercase font-bold"
          >
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="Enter the phone"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md focus:outline-none focus:border-indigo-600"
          />
        </div>

        <div className="mt-4">
          <label
            htmlFor="date"
            className="block text-gray-700 uppercase font-bold"
          >
            Patient Admission Date
          </label>
          <input
            id="date"
            type="date"
            className="border-2 w-full p-2 mt-2 text-gray-400 rounded-md focus:outline-none focus:border-indigo-600"
          />
        </div>
        <div className="mt-4">
          <label
            htmlFor="description"
            className="block text-gray-700 uppercase font-bold"
          >
            Description
          </label>
          <textarea
            id="description"
            type="text"
            placeholder="Enter the symptoms description"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md focus:outline-none focus:border-indigo-600 resize-none"
          />
        </div>

        <input
          type="submit"
          value="Add Patient"
          className="bg-indigo-600 w-full p-3 mt-8 text-white uppercase font-bold rounded-md hover:bg-indigo-700 cursor-pointer transition-colors"
        />
      </form>
    </section>
  );
};

export default Form;
