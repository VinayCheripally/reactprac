export async function getdetails(query) {
  try {
    const response = await fetch(
      `http://127.0.0.1:5000/getinfo?query=${query}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return await response.json();
  } catch (error) {
    console.log(error);
    return [];
  }
}
