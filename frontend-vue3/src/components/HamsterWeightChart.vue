<template>
  <div>
    <h2>{{ name }}'s weight over time:</h2>
    <Chart
      :size="{ width: 700, height: 400 }"
      :data="data"
      :margin="margin"
      :direction="direction"
      class="bg-white p-3 rounded shadow-lg mt-2"
    >
      <template #layers>
        <Grid strokeDasharray="2,2" />
        <Line :dataKeys="['date', 'weight']" />
        <Marker
          :value="weight"
          label="Typical species weight"
          color="orange"
          :strokeWidth="2"
          strokeDasharray="6 6"
        />
      </template>
    </Chart>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { Chart, Grid, Line, Marker } from "vue3-charts";
import { mockWeightData } from "@/data";

export default defineComponent({
  name: "HamsterWeightChart",
  components: { Chart, Grid, Line, Marker },
  setup() {
    /* Fetch data from weightRecordAPI instead of mock data here */
    const data = ref(mockWeightData);
    //const data = await getWeightRecords();
    const direction = ref("horizontal");
    const margin = ref({
      left: 0,
      top: 20,
      right: 20,
      bottom: 0,
    });

    return { data, direction, margin };
  },
  props: {
    name: String,
    weight: Number,
  },
});
</script>

<style></style>
