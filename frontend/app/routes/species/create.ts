import { ActionFunction, redirect } from "@remix-run/server-runtime";
import { API_BASE_URL } from "~/constants";
import axios from "axios";

/*
 * This is a so-called "resource route". When called with POST, it calls the action method.
 * When called with GET, it would call the loader method (not implemented here).
 * In other words - it is not a part of the UI - it is only here to upload some data!
 * See resource route documentation here: https://remix.run/docs/en/v1/guides/api-routes#resource-routes
 * */

const create_species = async (form_data: FormData) => {
  let response = await axios({
    method: "post",
    url: API_BASE_URL + "/hamsters/species/",
    data: {
      name: form_data.get("name"),
      latin_name: form_data.get("latin_name"),
      description: form_data.get("description"),
      typical_weight: form_data.get("typical_weight"),
    },
  });
  if (!response.data) {
    throw new Response(response.statusText, { status: response.status });
  }
  return response.data.data;
};

export const action: ActionFunction = async ({ request }) => {
  // This is called when a POST / PUT / PATCH / DELETE request is sent to this route.
  const form_data = await request.formData();
  console.log(form_data);
  try {
    let data = await create_species(form_data);
    return redirect("/species/" + data.id); // Redirect to home page
  } catch (e) {
    return redirect("/admin/", 400);
  }
};
