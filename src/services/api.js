// API service for fetching data from the backend

// Get the API base URL from environment variables
const baseUrl = import.meta.env.VITE_REACT_APP_API_BASE_URL || 'https://pharmacare-medapp-b10126e80cac.herokuapp.com';

// Generic fetch function with error handling
async function fetchData(endpoint, options = {}) {
  try {
    const response = await fetch(`${baseUrl}${endpoint}`, options);
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error(`Error fetching from ${endpoint}:`, error);
    throw error;
  }
}

// Get all laboratories
export const getLaboratories = () => {
  return fetchData('/laboratories');
};

// Get all medicines
export const getMedicines = () => {
  return fetchData('/meds');
};

// Admin API functions - would require authentication in production
// For now, these are placeholder functions that would be connected to the actual API

// Create a new laboratory
export const createLaboratory = (laboratoryData) => {
  return fetchData('/laboratories', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(laboratoryData)
  });
};

// Update a laboratory
export const updateLaboratory = (id, laboratoryData) => {
  return fetchData(`/laboratories/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(laboratoryData)
  });
};

// Delete a laboratory
export const deleteLaboratory = (id) => {
  return fetchData(`/laboratories/${id}`, {
    method: 'DELETE'
  });
};

// Create a new medicine
export const createMedicine = (medicineData) => {
  return fetchData('/meds', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(medicineData)
  });
};

// Update a medicine
export const updateMedicine = (id, medicineData) => {
  return fetchData(`/meds/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(medicineData)
  });
};

// Delete a medicine
export const deleteMedicine = (id) => {
  return fetchData(`/meds/${id}`, {
    method: 'DELETE'
  });
};