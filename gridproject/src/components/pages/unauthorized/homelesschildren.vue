<template>
  <base-wrapper>
    <div>
      <div>
        <base-button
          type="button"
          class="toogletabs"
          @click="selectedtab('homelesscheldrencases')"
        >
          الحالات
        </base-button>
        <base-button
          type="button"
          class="toogletabs"
          @click="selectedtab('Reportofhomelesscheldren')"
        >
          قدم بلاغ
        </base-button>
      </div>
      <component :is="activetab"></component>
    </div>
  </base-wrapper>
</template>

<script>
import Reportofhomelesscheldren from "../unauthorized/Reportofhomelesscheldren.vue";
import homelesscheldrencases from "../unauthorized/homelesscheldrencases.vue";

export default {
  components: {
    Reportofhomelesscheldren,
    homelesscheldrencases,
  },
  data() {
    return {
      activetab: "Reportofhomelesscheldren",
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
