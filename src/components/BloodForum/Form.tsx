"use client";
import React, { useState } from "react";

function Form() {
  const [patientName, setPatientName] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [unitsOfBlood, setUnitsOfBlood] = useState("");
  const [date, setDate] = useState("");
  const [hospitalName, setHospitalName] = useState("");
  const [place, setPlace] = useState("");
  const [bystanderName, setBystanderName] = useState("");
  const [contact, setContact] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = {
      patientName,
      bloodGroup,
      unitsOfBlood,
      date,
      hospitalName,
      place,
      bystanderName,
      contact,
    };
    console.log(formData);

    try {
      if (formData) {
        setResponseMessage(
          "Thank you for submitting your information. We deeply appreciate your trust and will handle your details with care. Our team will reach out to you shortly if needed"
        );
      }
    } catch (error) {
      setResponseMessage(
        "There was an error while submission. Please try again."
      );
      console.log(error);
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className=" flex flex-col rounded-lg py-6 w-full"
    >
      <h2 className="text-lg font-bold text-center bg-[#8D5555] w-full text-white py-2 mb-6">
        BLOOD REQUIREMENT
      </h2>
      <div className="flex flex-row flex-wrap mx-2">
        {/* Patient Name */}
        <div className="w-screen md:w-1/2 px-2 mb-4">
          <label
            className="block text-sm font-medium  text-white mb-1"
            htmlFor="patientName"
          >
            Patient Name
          </label>
          <input
            type="text"
            id="patientName"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#8D5555]"
            value={patientName}
            onChange={(e) => setPatientName(e.target.value)}
            required
          />
        </div>
        {/* Blood Group */}
        <div className="w-screen md:w-1/2 px-2 mb-4">
          <label
            className="block text-sm font-medium  text-white mb-1"
            htmlFor="patientName"
          >
            Blood Group
          </label>
          <select
            id="bloodGroup"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#8D5555]"
            value={bloodGroup}
            onChange={(e) => setBloodGroup(e.target.value)}
            required
          >
            <option value="">select</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
          </select>
        </div>

        {/* No of Units Required */}
        <div className="w-screen md:w-1/2 px-2 mb-4">
          <label
            className="block text-sm font-medium  text-white mb-1"
            htmlFor="units"
          >
            No of Units Required
          </label>
          <input
            type="number"
            id="units"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#8D5555]"
            value={unitsOfBlood}
            onChange={(e) => setUnitsOfBlood(e.target.value)}
            required
          />
        </div>

        {/* Date */}
        <div className="w-screen md:w-1/2 px-2 mb-4">
          <label
            className="block text-sm font-medium  text-white mb-1"
            htmlFor="patientName"
          >
            Date
          </label>
          <input
            type="date"
            id="date"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#8D5555]"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>

        {/* Hospital */}
        <div className="w-screen md:w-1/2 px-2 mb-4">
          <label
            className="block text-sm font-medium  text-white mb-1"
            htmlFor="hospital"
          >
            Hospital Name
          </label>
          <input
            type="text"
            id="hospital"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#8D5555]"
            value={hospitalName}
            onChange={(e) => setHospitalName(e.target.value)}
            required
          />
        </div>

        {/* Place */}
        <div className="w-screen md:w-1/2 px-2 mb-4">
          <label
            className="block text-sm font-medium  text-white mb-1"
            htmlFor="patientName"
          >
            Place
          </label>
          <input
            type="text"
            id="place"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#8D5555]"
            value={place}
            onChange={(e) => setPlace(e.target.value)}
            required
          />
        </div>

        {/* Bystander Name */}
        <div className="w-screen md:w-1/2 px-2 mb-4">
          <label
            className="block text-sm font-medium  text-white mb-1"
            htmlFor="bystanderName"
          >
            Bystander Name
          </label>
          <input
            type="text"
            id="bystanderName"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#8D5555]"
            value={bystanderName}
            onChange={(e) => setBystanderName(e.target.value)}
            required
          />
        </div>

        {/* Contact */}
        <div className="w-screen md:w-1/2 px-2 mb-4">
          <label
            className="block text-sm font-medium  text-white mb-1"
            htmlFor="patientName"
          >
            Contact
          </label>
          <input
            type="tel"
            id="contact"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#8D5555]"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            required
          />
        </div>
      </div>
      {/* Submit Button */}
      <div className="mt-6 text-center">
        <button
          type="submit"
          className="px-20 py-2 bg-[#8D5555] text-white font-bold rounded-md hover:bg-[#623b3b] transition-colors"
        >
          Submit
        </button>
      </div>
      {responseMessage && (
        <div className="flex justify-center items-center text-white text-center py-5 px-5">
          {responseMessage}
        </div>
      )}
    </form>
  );
}

export default Form;
