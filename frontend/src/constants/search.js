// export function searchInData(data, searchString) {
//   const results = [];

//   if (
//     typeof data._id === "string" &&
//     data._id.toLowerCase().includes(searchString.toLowerCase())
//   ) {
//     results.push(data._id);
//   }

//   for (const key in data) {
//     const value = data[key];

//     if (Array.isArray(value)) {
//       for (const item of value) {
//         if (typeof item === "object") {
//           const nestedResults = searchInData(item, searchString);
//           results.push(...nestedResults);
//         }
//       }
//     } else if (typeof value === "object" && value !== null) {
//       const nestedResults = searchInData(value, searchString);
//       results.push(...nestedResults);
//     } else if (
//       typeof value === "string" &&
//       value.toLowerCase().includes(searchString.toLowerCase())
//     ) {
//       if (key === "_id") {
//         continue;
//       }
//       results.push(data._id);
//       break;
//     }
//   }

//   return results;
// }

export function searchInData(arr, searchString) {
  const results = [];
  for (let i = 0; i < arr.length; i++) {
    const obj = arr[i];
    if (obj.dataId && obj.dataId.includes(searchString)) {
      return obj.dataId;
    }
    if (obj.facultyPublication && Array.isArray(obj.facultyPublication)) {
      for (let j = 0; j < obj.facultyPublication.length; j++) {
        const publication = obj.facultyPublication[j];
        for (const key in publication) {
          if (
            publication.hasOwnProperty(key) &&
            publication[key].includes(searchString)
          ) {
            results.push(obj.dataId);
          }
        }
      }
    }

    if (obj.researchProjects && Array.isArray(obj.researchProjects)) {
      for (let j = 0; j < obj.researchProjects.length; j++) {
        const publication = obj.researchProjects[j];
        for (const key in publication) {
          if (
            publication.hasOwnProperty(key) &&
            publication[key]

              .toString()
              .toLowerCase()
              .includes(searchString.toLowerCase())
          ) {
            results.push(obj.dataId);
          }
        }
      }
    }

    if (obj.awardsRecognition && Array.isArray(obj.awardsRecognition)) {
      for (let j = 0; j < obj.awardsRecognition.length; j++) {
        const publication = obj.awardsRecognition[j];
        for (const key in publication) {
          if (
            publication.hasOwnProperty(key) &&
            publication[key]

              .toString()
              .toLowerCase()
              .includes(searchString.toLowerCase())
          ) {
            results.push(obj.dataId);
          }
        }
      }
    }

    const projects = obj.projects;
    for (const key in projects) {
      if (
        projects.hasOwnProperty(key) &&
        projects[key]

          .toString()
          .toLowerCase()
          .includes(searchString.toLowerCase())
      ) {
        results.push(obj.dataId);
      }
    }

    const personal = obj.personalInfo;
    for (const key in personal) {
      if (
        personal.hasOwnProperty(key) &&
        personal[key]

          .toString()
          .toLowerCase()
          .includes(searchString.toLowerCase())
      ) {
        results.push(obj.dataId);
      }
    }
  }
  return results; // return null if no match is found
}
