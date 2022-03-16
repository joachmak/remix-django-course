import axios from "axios";
import { getSpeciesById, Species } from "~/modules/species";
import { API_BASE_URL } from "~/constants";

export type Hamster = {
  id: number;
  name: string;
  description: string;
  date_of_birth: Date;
  image: string; // Image URL
  species: Species;
  height: number;
};

export async function getHamsters() {
  /* 
    We could have also created a loader resource route for this, and
    used it with useFetcher()! https://remix.run/docs/en/v1/api/remix#usefetcher
  */
  let response = await axios({
    method: "get",
    url: API_BASE_URL + "/hamsters/",
  });
  for (let hamster of response.data) {
    hamster.species = await getSpeciesById(hamster.species);
    hamster.image = API_BASE_URL + hamster.image;
  }
  return response.data;
}

export async function getHamster(pk: number | string) {
  /* 
    We could have also created a loader resource route for this, and
    used it with useFetcher()! https://remix.run/docs/en/v1/api/remix#usefetcher
  */
  let response = await axios({
    method: "get",
    url: API_BASE_URL + "/hamsters/" + pk,
  });
  response.data.species = await getSpeciesById(response.data.species);
  response.data.image = API_BASE_URL + response.data.image;
  return response.data;
}
