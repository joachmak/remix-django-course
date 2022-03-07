import axios from "axios";
import { API_BASE_URL } from "../../constants";

export type weightRecord = {
  weight: number;
  date: Date;
  hamsterId: number;
};

export function getHamsterWeightRecords(id: number) {
  const response = axios
    .get(API_BASE_URL + "/weight_records/")
    .catch((error) => console.log(error));
  return response;
}

export function createHamsterWeightRecords(data: weightRecord) {
  axios
    .post(API_BASE_URL + "/weight_records/" + data.hamsterId, data)
    .then(() => console.log("weight record created successfully!"))
    .catch((error) => console.log(error));
}
