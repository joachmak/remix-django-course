import { ActionFunction, redirect } from "@remix-run/server-runtime";
import { API_BASE_URL } from "~/constants";
import axios from "axios";

const delete_species = async (form_data: FormData) => {
  let response = await axios({
    method: "delete",
    url: API_BASE_URL + "/hamsters/species/" + form_data.get("id") + "/",
  });
  if (response.status !== 204) {
    throw new Response(response.statusText, { status: response.status });
  }
  return response.data.data;
};

export const action: ActionFunction = async ({ request }) => {
  // This is called when a POST / PUT / PATCH / DELETE request is sent to this route.
  const form_data = await request.formData();
  try {
    await delete_species(form_data);
    return redirect("/species/");
  } catch (e) {
    return redirect("/species/" + form_data.get("id"), 400);
  }
};
