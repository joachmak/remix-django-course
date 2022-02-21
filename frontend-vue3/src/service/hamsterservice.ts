import axios from "axios";
import { API_BASE_URL } from "../../constants";
import type { Species } from "./speciesService";
import { getSpeciesById } from "./speciesService";

export type Hamster = {
  id: number;
  name: string;
  description: string;
  date_of_birth: Date;
  image: string; //image URL
  species: Species;
};

export async function getAllHamsters(): Promise<Hamster[]> {
  const responseData: Hamster[] = [];
  try {
    const response = await axios({
      method: "get",
      url: API_BASE_URL + "/hamsters",
    });
    for (const hamster of response.data) {
      hamster.species = await getSpeciesById(hamster.species);
      hamster.image = API_BASE_URL + hamster.image;
      responseData.push(hamster);
    }
  } catch (error) {
    console.error(error);
  }
  return responseData;
}

export async function getHamsterById(id: number | string): Promise<Hamster> {
  const response = await axios({
    method: "get",
    url: API_BASE_URL + "/hamsters/" + id,
  });
  response.data.species = await getSpeciesById(response.data.species);
  response.data.image = API_BASE_URL + response.data.image;
  return response.data;
}

export async function createNewHamster(hamsterFormData: FormData) {
  try {
    const response = await axios({
      url: API_BASE_URL + "/hamsters/",
      method: "post",
      data: {
        name: hamsterFormData.get("name"),
        description: hamsterFormData.get("description"),
        date_of_birth: hamsterFormData.get("bday"),
        specied: hamsterFormData.get("species"),
        image: hamsterFormData.get("image"),
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
}
