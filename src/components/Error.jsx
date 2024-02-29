const Error = ({ children }) => {
  return (
    <p className="text-red-600 my-1 p-1 text-center uppercase font-semibold">
      {children}
    </p>
  );
};

export default Error;
