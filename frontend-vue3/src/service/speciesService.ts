import axios from "axios";
import { API_BASE_URL } from "../../constants";

export type Species = {
  id?: number;
  name: string;
  latin_name: string;
  description: string;
  typical_weight: number;
};

export async function getAllSpecies() {
  const response = await axios({
    method: "get",
    url: API_BASE_URL + "/hamsters/species",
  });
  return response.data;
}

export async function getSpeciesById(id: number | string) {
  const response = await axios({
    method: "get",
    url: API_BASE_URL + "/hamsters/species/" + id,
  });
  return response.data;
}
