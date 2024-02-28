import axios from "axios";

const fetchDataFromNest = async () => {
  try {
    const response = await axios.get("localhost:3000/patient-information/list");

    return response.data.data.getPatients;
  } catch (error) {
    console.error("Error fetching data from GraphQL:", error);
    throw error;
  }
};

export default fetchDataFromNest;
