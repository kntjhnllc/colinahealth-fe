import axios from "axios";

const API_URL = "http://localhost:3000/graphql";

export const fetchData = async (query: string, variables: any = {}) => {
  const response = await axios.post(API_URL, {
    query,
    variables,
  });
  return response.data;
};

export const updatePatient = async (
  patientId: number,
  firstName: string,
  lastName: string
) => {
  const mutation = `
      mutation UpdatePatientInformation($patientId: Int!, $firstName: String!, $lastName: String!) {
        updatePatientInformation(updatePatientInformationInput: { patientId: $patientId, firstName: $firstName, lastName: $lastName }) {
          patientId
          firstName
          lastName
        }
      }
    `;

  return fetchData(mutation, { patientId, firstName, lastName });
};

export const createPatient = async (
  firstName: string,
  lastName: string,
  dateOfBirth: string,
  gender: string,
  city: string,
  state: string,
  zip: string,
  country: string,
  phoneNo: string,
  allergies: string,
  codeStatus: string
) => {
  const mutation = `
  mutation CreatePatientInformation(
    $firstName: String!,
    $lastName: String!,
    $dateOfBirth: DateTime!,
    $gender: String!,
    $city: String!,
    $state: String!,
    $zip: String!,
    $country: String!,
    $phoneNo: String!,
    $allergies: String!,
    $codeStatus: String!
  ) {
    createPatientInformation(createPatientInformationInput: {
      firstName: $firstName,
      lastName: $lastName,
      dateOfBirth: $dateOfBirth,
      gender: $gender,
      city: $city,
      state: $state,
      zip: $zip,
      country: $country,
      phoneNo: $phoneNo,
      allergies: $allergies,
      codeStatus: $codeStatus
    }) {
      patientId
      firstName
      lastName
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

  const variables = {
    firstName,
    lastName,
    dateOfBirth,
    gender,
    city,
    state,
    zip,
    country,
    phoneNo,
    allergies,
    codeStatus,
  };

  return fetchData(mutation, variables);
};
