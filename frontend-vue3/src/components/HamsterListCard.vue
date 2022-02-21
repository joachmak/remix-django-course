<template>
  <router-link :to="'/hamsters/' + hamster!.id">
    <div class="p-1 rounded-md hover:bg-orange-200">
      <img
        class="rounded-md mb-2 shadow-lg object-cover h-48 w-96"
        :src="hamster?.image"
        alt="hamster"
      />
      <h3 class="text-base font-semibold">{{ hamster?.name }}</h3>
      <span>{{ age }}</span>
      <br />

      <router-link to="/species">
        <span class="text-indigo-600">{{ hamster?.species.name }}</span>
      </router-link>
    </div>
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { RouterLink } from "vue-router";
import type { PropType } from "vue";
import type { Hamster } from "../service/hamsterservice";
import { getAge } from "../utils/calculateAge";

export default defineComponent({
  name: "HamsterListCard",
  components: {
    "router-link": RouterLink,
  },
  props: {
    hamster: Object as PropType<Hamster>,
  },
  computed: {
    age() {
      return getAge(this.hamster?.date_of_birth);
    },
  },
  setup(props) {
    props.hamster;
  },
});
</script>

<style scoped>
img {
  width: 250px;
}
button {
  background-color: orange;
  border-radius: 5px;
  border: none;
}
.wrapper {
  border-radius: 5px;
  padding: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: white;
}
</style>
