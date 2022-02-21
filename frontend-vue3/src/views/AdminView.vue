<template>
  <label for="hamster-radio">Hamster</label>
  <input id="hamster-radio" type="radio" value="hamster" v-model="selected" />
  <input type="radio" value="species" v-model="selected" />
  <div class="md:grid md:grid-cols-5 md:gap-3">
    <div class="md:col-span-1">
      <div class="px-4 sm:px-0">
        <h3 class="text-lg font-medium leading-6 text-gray-900">
          Register new hamster
        </h3>
        <p class="mt-1 text-sm text-gray-600">
          Register a new hamster to start keeping track of its weight!
        </p>
      </div>
    </div>
    <div class="mt-5 md:mt-0 md:col-span-4">
      <form
        id="form"
        action="#"
        method="POST"
        enctype="multipart/form-data"
        @submit.prevent="onSubmit"
      >
        <div class="shadow sm:rounded-md sm:overflow-hidden">
          <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
            <div class="col-span-6 sm:col-span-4">
              <label for="name" class="block text-sm font-medium text-gray-700"
                >Name</label
              >
              <input
                v-model="name"
                type="text"
                name="name"
                id="name"
                autocomplete="email"
                class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label
                for="description"
                class="block text-sm font-medium text-gray-700"
              >
                Description
              </label>
              <div class="mt-1">
                <textarea
                  v-model="description"
                  id="description"
                  name="description"
                  rows="3"
                  class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                  placeholder="you@example.com"
                />
              </div>
              <p class="mt-2 text-sm text-gray-500">Describe your hamster</p>
            </div>

            <div class="col-span-6 sm:col-span-4">
              <label for="bday" class="block text-sm font-medium text-gray-700"
                >Birthday</label
              >
              <input
                v-model="bday"
                type="date"
                name="bday"
                id="bday"
                class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>

            <div class="col-span-6 sm:col-span-3">
              <label
                for="species"
                class="block text-sm font-medium text-gray-700"
                >Species</label
              >
              <select v-model="species" id="species" name="species">
                <option
                  v-for="species in speciesList"
                  :key="species.id"
                  :value="species.id"
                >
                  {{ species.name }}
                </option>
              </select>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700">
                Photo
              </label>
              <input
                id="file-upload"
                name="image"
                type="file"
                @change="uploadFile"
              />
            </div>
          </div>
          <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button
              type="submit"
              class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Register
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script lang="ts">
import { createNewHamster } from "../service/hamsterservice";
import { getAllSpecies, type Species } from "../service/speciesService";
import { defineComponent } from "vue";

export default defineComponent({
  name: "AdminView",
  async created() {
    this.speciesList = await getAllSpecies();
  },
  data() {
    return {
      speciesList: [] as Species[],
      selected: "hamster" as string,
      name: "" as string,
      description: "" as string,
      bday: undefined as Date | undefined,
      img: null as File | null,
      species: 0 as number,
    };
  },
  methods: {
    uploadFile($event: Event) {
      const target = $event.target as HTMLInputElement;
      if (target && target.files) {
        this.img = target.files[0];
      }
    },
    onSubmit() {
      const form = document.getElementById("form");
      let hamsterFormData = new FormData(form as HTMLFormElement);
      console.log(hamsterFormData.get("image")?.valueOf());
      createNewHamster(hamsterFormData);
    },
  },
});
</script>
∑
<style scoped>
input {
  height: 30px;
  font-size: large;
}
select {
  height: 30px;
  font-size: large;
}

#submit-btn {
  margin-top: 25px;
  background-color: orange;
  border: none;
  border-radius: 5px;
}
</style>
