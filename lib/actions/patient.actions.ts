import axios from "axios";

export const getPatientById = async (patientId: number) => {
  const url = `http://localhost:3000/patient-information/${patientId}`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching patient:", error);
    throw error; // Re-throw the error to handle it elsewhere if needed
  }
};
