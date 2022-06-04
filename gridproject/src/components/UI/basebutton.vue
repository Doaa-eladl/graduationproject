<template>
    <button>
      <slot></slot>
    </button>
</template>

<style scoped>
div {
  display: flex;
  justify-content: center;
}
button {
  background-color: #3f82a2;
  color: white;
  font-family: inherit;
  padding: 5px 15px;
  text-align: center;
  border-color: transparent;
  width: 30vw;
  margin-top: 40px;
  border-radius: 4px;
}
</style>