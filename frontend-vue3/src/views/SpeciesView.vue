<template>
  <div class="mt-5">
    <ul class="flex flex-col gap-2 align-center">
      <li
        v-for="(species, index) in speciesList"
        :key="species.id"
        class="bg-white p-4 rounded shadow-lg w-2/3 mx-auto"
      >
        <div class="flex gap-4">
          <img
            :src="getUrl(index)"
            alt="hamster"
            class="rounded-full shadow-md bg-yellow-100"
          />
          <div class="flex flex-col self-center">
            <h2 class="text-lg font-semibold">{{ species.name }}</h2>
            <p>latin name: {{ species.latin_name }}</p>
            <p>typical weight: {{ species.typical_weight }}g</p>
          </div>
        </div>
        <hr class="solid" />
        <p>{{ species.description }}</p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { getAllSpecies, type Species } from "@/service/speciesService";
import { defineComponent } from "vue";

export default defineComponent({
  name: "SpeciesView",
  async created() {
    this.speciesList = await getAllSpecies();
  },
  data() {
    return {
      speciesList: [] as Species[],
    };
  },
  methods: {
    getUrl(index: number) {
      return new URL(`../assets/hamster-${index + 1}.png`, import.meta.url)
        .pathname;
    },
  },
});
</script>
<style scoped>
hr {
  margin: 5px 0px;
}
</style>
