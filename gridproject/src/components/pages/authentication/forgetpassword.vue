<template>
  <base-wrapper>
    <div>
      <img
        src="../../../assets/forgetpass.png"
        alt="Do you forget your password?"
        width="440"
        height="340"
      />
    </div>
    <div class="forgetpasswordcontainer">
      <h2>نسيت كلمه المرور</h2>
      <p>
        من فضلك قم بادخال بريدك الالكتروني لارسال كود مكون من ارقام لاعاده ضبط
        كلمه المرور الخاصه بك
      </p>
      <form @submit.prevent="sendcode">
        <div class="form-group">
          <input
            type="email"
            class="form-control"
            placeholder="البريد الالكتروني"
            v-model="useremail"
          /><small
            id="emailHelp"
            class="form-text text-muted"
            v-if="emailerror"
            >{{ emailerror }}</small
          >
        </div>
        <base-button type="submit">ارسال الكود</base-button>
      </form>
    </div>
  </base-wrapper>
</template>

<script>
export default {
  provide() {
    return {
      email: this.useremail,
    };
  },
  data() {
    return {
      emailerror: null,
      useremail: "",
    };
  },
  methods: {
    sendcode() {
      this.emailerror = null;
      if (this.useremail.length == 0) {
        this.emailerror = "ادخل البريد الالكتروني";
      }
      //لسه الربط بالباك وتعديل الايرور الجاي من الباك
      //redirect
      this.$router.replace(`/checkcode/${this.useremail}`);
    },
  },
};
</script>

<style scoped>
.forgetpasswordcontainer {
  width: 30vw;
  display: flex;
  flex-direction: column;
  align-items: center;
}

h2 {
  margin-bottom: 35px;
}

div > p {
  font-size: 10px;
  width: 35vw;
}

form > div {
  margin: 15px 0px;
  cursor: context-menu !important;
}

form > div > input {
  text-align: end;
}

input[type="email"],
input[type="password"] {
  border: none;
  border-radius: 5px;
}

small {
  color: #f84949 !important;
}
</style>