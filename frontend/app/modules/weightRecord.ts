import axios from "axios";
import { API_BASE_URL } from "~/constants";

export type WeightRecord = {
  id: number;
  date: Date;
  weight_in_grams: number;
  hamster: number; // ID of hamster
  hamster_bmi: number;
};

// TODO: Add id argument
export async function getWeightRecordsOfHamsterWithId(id: number) {
  let response = await axios({
    method: "get",
    url: API_BASE_URL + "/hamsters/weight_records",
  });
  // Filter and return response
  return response.data.filter((record: WeightRecord) => record.hamster === id);
}
