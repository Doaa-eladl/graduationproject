<template>
  <base-wrapper>
    <div>
      <div>
        <base-button
          type="button"
          class="toogletabs"
          @click="selectedtab('allactivities')"
        >
          الأنشطه
        </base-button>
        <base-button
          type="button"
          class="toogletabs"
          @click="selectedtab('charities')"
        >
            الجمعيات
        </base-button>
        <base-button
          type="button"
          class="toogletabs"
          @click="selectedtab('posts')"
        >
            اخر الاخبار
        </base-button>
      </div>
      <component :is="activetab"></component>
    </div>
  </base-wrapper>
</template>

<script>
import charities from '../unauthorized/charities.vue'
import allactivities from '../unauthorized/allactivities.vue'
import posts from '../unauthorized/posts.vue'

export default {
  components:{
    charities,
    allactivities,
    posts,
  },
  data() {
    return {
      activetab: "charities",
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