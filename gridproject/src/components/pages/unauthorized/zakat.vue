<template>
  <base-wrapper>
    <div style="margin-top: 40px">
      <h1>احسب زكاة مالك</h1>
      <div class="card">
        <form @submit.prevent="caiculatezahah">
          <div>
            <label>مقدار المال الذي مر عليه عام كامل بنفس قيمته</label>
            <input type="text" v-model="money" />
            <small class="form-text text-muted" v-show="moneyerror">{{
              moneyerror
            }}</small>
          </div>
          <div>
            <label>مقدار الزكاه الواجب اخراجها</label>
            <div>
              <label>{{ zakah }}</label>
              <label>جنيهات</label>
            </div>
          </div>
          <div>
            <base-button class="volunteerbtn">احسب</base-button>
          </div>
        </form>
      </div>
    </div>
  </base-wrapper>
</template>

<script>
export default {
  data() {
    return {
      money: null,
      moneyerror: null,
      zakah: 0,
    };
  },
  methods :{
      caiculatezahah(){
          this.zakah=(2.5*this.money)/100
      }
  }
};
</script>

<style scoped>
.card {
  margin-top: 20px;
  width: 45vw;
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 120px;
}

form > div {
  display: flex;
  flex-direction: row-reverse;
  margin: 10px 5px;
  align-items: flex-start;
  justify-content: center;
}

form > div > label {
  margin-left: 5px;
  width: 20vw;
}

form>div>div{
    display: flex;
    flex-direction: row-reverse;
}

form>div>div>label{
    width: 10vw;
}

form > div > input {
  width: 20vw;
  border: none;
  text-align: end;
  border: 1px solid #ced4da;
  padding: 5px 10px;
}
.volunteerbtn {
  display: flex;
  justify-content: center;
  margin-top: 0px;
  width: 25vw;
}
</style>
