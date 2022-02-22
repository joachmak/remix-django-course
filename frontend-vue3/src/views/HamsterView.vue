<template>
  <main class="flex justify-center gap-8 mt-5">
    <div class="flex flex-col">
      <img
        class="rounded-full h-48 w-48 object-cover mx-auto"
        :src="hamsterData.image"
        alt="hamster"
      />
      <h2 class="text-lg decoration-wavy underline decoration-3 font-semibold">
        {{ hamsterData.name }}
      </h2>
      <p>Birthday: {{ hamsterData.date_of_birth }}</p>
      <p>{{ hamsterData.description }}</p>
      <p>
        Species:
        <router-link to="/species">
          <span class="text-indigo-600">{{ hamsterData.species.name }}</span>
        </router-link>
      </p>
      <form
        class="flex flex-col bg-white rounded p-2 shadow-lg mt-4"
        @submit.prevent="registerWeight"
      >
        <h2>Register weight (g):</h2>
        <input type="text" placeholder="weight (g)" />
        <label for="date">Dato:</label>
        <input v-model="date" id="dato" name="date" type="date" />
        <button
          type="submit"
          class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-2"
        >
          Registrer
        </button>
      </form>
    </div>
    <HamsterWeightChart
      :name="hamsterData.name"
      :weight="hamsterData.species.typical_weight"
    />
  </main>
</template>
<script lang="ts">
import { getHamsterById, type Hamster } from "@/service/hamsterservice";
import { defineComponent } from "vue";
import HamsterWeightChart from "../components/HamsterWeightChart.vue";

export default defineComponent({
  name: "HamsterView",
  async created() {
    const { id } = this.$route.params;
    this.hamsterData = await getHamsterById(parseInt(id));
    console.log(this.hamsterData);
  },
  data() {
    return {
      hamsterData: {} as Hamster,
      date: "" as string,
      weight: 0 as number,
    };
  },
  methods: {
    registerWeight() {
      const newWeightRecord = {
        date: this.date,
        weight: this.weight,
        hamster: this.hamsterData.id,
      };
      this.date = "";
      this.weight = 0;
      /*Add the new record with the weightRecordAPI*/
      console.log(newWeightRecord);
    },
  },
  components: { HamsterWeightChart },
});
</script>
