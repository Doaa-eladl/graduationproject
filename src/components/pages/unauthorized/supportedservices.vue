<template>
  <base-wrapper>
    <div>
      <div>
        <base-button
          type="button"
          class="toogletabs"
          @click="selectedtab('services')"
        >
          الخدمات المدعمه
        </base-button>
        <base-button
          type="button"
          class="toogletabs"
          @click="selectedtab('supportedservicesannouncing')"
        >
            اعلن عن خدمه مدعمه
        </base-button>
      </div>
      <component :is="activetab"></component>
    </div>
  </base-wrapper>
</template>

<script>
import services from "../unauthorized/services.vue";
import supportedservicesannouncing from "../unauthorized/supportedservicesannouncing.vue";

export default {
  components: {
    services,
    supportedservicesannouncing,
  },
  data() {
    return {
      activetab: "supportedservicesannouncing",
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