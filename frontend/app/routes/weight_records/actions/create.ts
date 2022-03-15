import { ActionFunction, redirect } from "@remix-run/server-runtime";
import { API_BASE_URL } from "~/constants";
import axios from "axios";

function formatDate(date: string | undefined | null | FormDataEntryValue) {
  if (!date) {
    return "";
  }
  var d = new Date(date.toString()),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
}

const create_weight_record = async (form_data: FormData) => {
  let response = await axios({
    method: "post",
    url: API_BASE_URL + "/hamsters/weight_records/",
    data: {
      weight_in_grams: form_data.get("weight_in_grams"),
      date: formatDate(form_data.get("date")),
      hamster: form_data.get("hamster"),
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
  try {
    await create_weight_record(form_data);
    return redirect("/hamsters/" + form_data.get("hamster")); // Reload current page
  } catch (e) {
    return redirect("/hamsters/" + form_data.get("hamster"), 400); // Reload current page with error status
  }
};
