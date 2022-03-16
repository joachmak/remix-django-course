import { ActionFunction, redirect } from "@remix-run/server-runtime";
import { API_BASE_URL } from "~/constants";
import axios from "axios";

const delete_weight_record = async (form_data: FormData) => {
  let response = await axios({
    method: "delete",
    url:
      API_BASE_URL +
      "/hamsters/weight_records/" +
      form_data.get("record_id") +
      "/",
  });
  if (response.status !== 204) {
    throw new Response(response.statusText, { status: response.status });
  }
  return response.data.data;
};

export const action: ActionFunction = async ({ request }) => {
  // This is called when a POST / PUT / PATCH / DELETE request is sent to this route.
  const form_data = await request.formData();
  let data = await delete_weight_record(form_data);
  return redirect("/hamsters/" + form_data.get("hamster_id"));
};
