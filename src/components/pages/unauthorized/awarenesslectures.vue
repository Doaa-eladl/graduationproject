<template>
  <base-wrapper>
    <div>
      <div>
        <base-button
          type="button"
          class="toogletabs"
          @click="selectedtab('lectures')"
        >
          المحاضرات
        </base-button>
        <base-button
          type="button"
          class="toogletabs"
          @click="selectedtab('lecturesannouncing')"
        >
            اعلن عن محاضره
        </base-button>
      </div>
      <component :is="activetab"></component>
    </div>
  </base-wrapper>
</template>

<script>
import lectures from "../unauthorized/lectures.vue";
import lecturesannouncing from "../unauthorized/lecturesannouncing.vue";

export default {
  components: {
    lectures,
    lecturesannouncing,
  },
  data() {
    return {
      activetab: "lecturesannouncing",
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
