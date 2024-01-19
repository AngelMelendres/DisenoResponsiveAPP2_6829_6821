import React from "react";
const Contact = () => {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        {/* Imagen y Formulario uno al lado del otro */}
        <div className="flex w-full justify-center items-center border rounded-lg border-gray-500 m-10 shadow-lg ">
          {/* Imagen (2 partes del alto) */}
          <div className="flex-shrink-0  w-1/4">
            <img
              src="https://static.vecteezy.com/system/resources/previews/006/801/832/non_2x/get-in-touch-illustration-exclusive-design-inspiration-vector.jpg"
              alt="Imagen de contacto"
              className="p-1 w-screen "
            />
          </div>
          {/* Formulario (el resto del alto) */}
          <div className="flex justify-center items-center h-2/3 w-3/4 m-8">
            {" "}
            {/* Adjusted width to 3/4 */}
            <form className="w-full max-3/4">
              {" "}
              {/* Added max-w-md for responsiveness */}
              <div className="mb-4">
                <label htmlFor="from" className="block text-gray-700">
                  From:
                </label>
                <input
                  type="email"
                  id="from"
                  name="from"
                  className="w-full border rounded p-2   border-gray-700"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="subject" className="block text-gray-700">
                  Subject:
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full border rounded p-2 border-gray-700"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700">
                  Message:
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full border rounded p-2 border-gray-700"
                  required
                ></textarea>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-blue-500 text-white p-2 rounded"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
