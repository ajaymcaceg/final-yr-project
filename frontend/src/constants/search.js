export function searchInData(data, searchString) {
  const results = [];

  if (
    typeof data._id === "string" &&
    data._id.toLowerCase().includes(searchString.toLowerCase())
  ) {
    results.push(data._id);
  }

  for (const key in data) {
    const value = data[key];

    if (Array.isArray(value)) {
      for (const item of value) {
        if (typeof item === "object") {
          const nestedResults = searchInData(item, searchString);
          results.push(...nestedResults);
        }
      }
    } else if (typeof value === "object" && value !== null) {
      const nestedResults = searchInData(value, searchString);
      results.push(...nestedResults);
    } else if (
      typeof value === "string" &&
      value.toLowerCase().includes(searchString.toLowerCase())
    ) {
      if (key === "_id") {
        continue;
      }
      results.push(data._id);
      break;
    }
  }

  return results;
}
