<template>
  <base-wrapper>
    <div>
      <div>
        <base-button
          type="button"
          class="toogletabs"
          @click="selectedtab('homelesscases')"
        >
          الحالات
        </base-button>
        <base-button
          type="button"
          class="toogletabs"
          @click="selectedtab('Reportofhomeless')"
        >
          قدم بلاغ
        </base-button>
      </div>
      <component :is="activetab"></component>
    </div>
  </base-wrapper>
</template>

<script>
import Reportofhomeless from "../unauthorized/Reportofhomeless.vue";
import homelesscases from "../unauthorized/homelesscases.vue";

export default {
  components: {
    Reportofhomeless,
    homelesscases,
  },
  data() {
    return {
      activetab: "Reportofhomeless",
    };
  },
  methods: {
    selectedtab(currentval) {
      this.activetab = currentval;
    },
  },
};
</script>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
div > div {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: auto;
}
.toogletabs {
  width: 15vw;
  margin: 10px;
}
</style>
