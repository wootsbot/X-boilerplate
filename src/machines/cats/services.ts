export async function getCatsRequest() {
  try {
    const response = await fetch("https://store.cats/cats");

    const { cats } = await response.json();

    return cats;
  } catch (error) {
    throw error;
  }
}
