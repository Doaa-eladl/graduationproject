<template>
  <section>
    <slot></slot>
  </section>
</template>

<style scoped>
section {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 5rem auto;
  padding-top: 60px;
  width: 90vw;
  height: auto;
  font-family: inherit;
  flex-wrap: wrap;
}
</style>
