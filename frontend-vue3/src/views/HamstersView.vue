<template>
  <div>
    <ul class="mt-5 flex flex-wrap justify-center">
      <li v-for="hamster in hamsterList" :key="hamster.id">
        <HamsterListCard :hamster="hamster" />
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { getAllHamsters } from "../service/hamsterservice";
import type { Hamster } from "../service/hamsterservice";
import { defineComponent } from "vue";
import HamsterListCard from "../components/HamsterListCard.vue";

export default defineComponent({
  name: "HamsterList",
  async created() {
    this.hamsterList = await getAllHamsters();
    console.log(this.hamsterList);
  },
  data() {
    return {
      hamsterList: [] as Hamster[],
    };
  },
  components: { HamsterListCard },
});
</script>

<style scoped>
ul {
  display: flex;
  flex-direction: row;
  gap: 10px;
}
li {
  list-style: none;
  justify-content: center;
  align-content: center;
}
</style>
