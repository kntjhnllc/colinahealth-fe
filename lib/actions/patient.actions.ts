// Import fetchData function from your API file
import { fetchData } from "@/server/api";
// patientService.ts

export const getPatientById = async (patientId: number) => {
  const query = `
    query GetPatientInformation($patientId: Int!) {
      getPatientInformation(patientId: $patientId) {
        patientId
        firstName
        lastName
        age
        dateOfBirth
        gender
        city
        state
        zip
        country
        phoneNo
        allergies
        codeStatus
      }
    }
  `;

  const variables = { patientId };

  try {
    const response = await fetchData(query, variables);
    return response.data.getPatientInformation; // Assuming the response structure matches
  } catch (error) {
    console.error("Error fetching patient:", error);
    throw error; // Re-throw the error to handle it elsewhere if needed
  }
};
