const BASE_URL = 'http://localhost:8080/api';

export async function getCharacters() {
  try{
    const response = await fetch(`${BASE_URL}/characters`);
    return await response.json();
  } catch (error){
    return new Error(error)
  }
}

export async function getCharacter(id) {
  try{
    const response = await fetch (`${BASE_URL}/characters/${id}`);
    return response.json();
  } catch (error){
    return new Error(error);
  }
}

export async function createCharacter(character) {
  try{
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(character),
  }
  const response = await fetch(`${BASE_URL}/characters/`, options);
  return response.json(); 
} catch (error) {
 return new Error(error);
}
}

export async function updateCharacter(character) {
  try {
  const options = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(character),
  }
  const response = await fetch(`${BASE_URL}/characters/${character.id}`, options);
  return response.json();
  } catch (error) {
    return new Error(error)
  }
}

export async function deleteCharacter(id) {
  try {
  const options = {
    method: 'DELETE',
    headers: {
        'Content-Type': 'application/json',
  },
} 
  const response = await fetch(`${BASE_URL}/characters/${id}`, options); 
  return response.json();
} catch (error) {
  return new Error(error);
}
}
