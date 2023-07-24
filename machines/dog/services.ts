export async function getDogRequest() {
  try {
    const response = await fetch('https://dog.ceo/api/breeds/image/random');

    const dog = await response.json();

    return dog;
  } catch (error) {
    throw error;
  }
}
