const getAllDepartments = () => 
  fetch('https://collectionapi.metmuseum.org/public/collection/v1/departments')
    .then(response => response.json());

const getObjectsByDepartment = (id) => 
  fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects?hasImages=true&isPublicDomain=true&departmentIds=${id}`)
    .then(response => response.json())
    .then(data => data.objectIDs.slice(0, 20));

const getObjectById = (objectID) => 
  fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`)
    .then(response => response.json());

const getObjectsByDepIdSearch = (id, searchText) => 
  fetch(`https://collectionapi.metmuseum.org/public/collection/v1/search?isPublicDomain=true&hasImages=true&departmentId=${id}&q=${searchText}`)
    .then(response => response.json());

const ApiServices = {
  getAllDepartments,
  getObjectsByDepartment,
  getObjectById,
  getObjectsByDepIdSearch,
};

export default ApiServices;