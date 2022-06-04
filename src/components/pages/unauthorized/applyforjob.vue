<template>
  <base-wrapper style="padding:80px 0px">
    <div>
      <h1>التقدم للوظيفه</h1>
      <form @submit.prevent="applyforjob">
        <div>
          <input type="text" placeholder="الاسم" v-model="name" />
          <small class="form-text text-muted" v-show="nameerror">{{
            nameerror
          }}</small>
        </div>

        <div>
          <input
            type="text"
            placeholder="الرقم القومي"
            v-model="nationalid"
          />
          <small class="form-text text-muted" v-show="nationaliderror">{{
            nationaliderror
          }}</small>
        </div>

        <div>
          <input
            type="text"
            placeholder="رقم الهاتف"
            v-model="phonenumber"
          />
          <small class="form-text text-muted" v-show="phonenumbererror">{{
            phonenumbererror
          }}</small>
        </div>

        <base-button type="submit">ارسال الطلب</base-button>
      </form>
    </div>
  </base-wrapper>
</template>

<script>
export default {
  data() {
    return {
      name: null,
      nameerror: null,

      nationalid: null,
      nationaliderror: null,

      phonenumber:null,
      phonenumbererror:null,
    };
  },
  methods: {
    applyforjob() {
      this.nameerror = null
      this.nationaliderror = null
      this.phonenumbererror = null

      if (this.name == null) this.nameerror = "ادخل الاسم من فضلك";
      if (this.nationalid == null || this.nationalid.toString().length != 14)
        this.nationaliderror = "ادخل الرقم القومي صحيح من فضلك";
      if (this.phonenumber == null) this.phonenumbererror = "ادخل رقم الهاتف من فضلك";
      else {
        //الي هيتبعت للباك
        const newrequest = {
          name: this.name,
          nationalid: this.nationalid,
          phonenumber: this.phonenumber,
        };
        this.$router.replace("/");
      }
    },
  },
};
</script>

<style scoped>
form > div {
  display: flex;
  flex-direction: column;
  width: fit-content;
  margin: auto;
}

form > div > input {
  align-self: center;
}

form > div > small {
  align-self: end;
}

input,
select,
textarea {
  width: 30vw;
  padding: 5px 10px 5px 0px;
  margin: 5px;
  border: none;
  border-radius: 4px;
  text-align: end;
}

select {
  color: #777777;
}

textarea {
  resize: none;
}

small {
  color: #f84949 !important;
}
</style>