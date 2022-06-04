<template>
  <base-wrapper>
    <div>
      <img src="../../../assets/login.png" alt="sign in photo" />
    </div>
    <div class="signincontainer">
      <h2>اعاده ضبط كلمه المرور</h2>
      <form @submit.prevent="signin">
        <div class="form-group">
          <input
            type="password"
            class="form-control"
            placeholder="كلمه المرور الجديده"
            v-model="newpass"
          />
        </div>
        <div class="form-group">
          <small
            id="emailHelp"
            class="form-text text-muted"
            v-if="newpasserror"
            >{{ newpasserror }}</small
          >
        </div>
        <div class="form-group">
          <input
            type="password"
            class="form-control"
            placeholder="تاكيد كلمه المرورالجديده"
            v-model="repetednewpass"
          />
        </div>
        <div class="form-group">
          <small
            id="emailHelp"
            class="form-text text-muted"
            v-if="repetednewpasserror"
            >{{ repetednewpasserror }}</small
          >
        </div>
        <p>{{ email }}</p>
        <base-button type="submit">تسجيل الدخول</base-button>
      </form>
    </div>
  </base-wrapper>
</template>

<script>
export default {
  inject: ["email"],
  data() {
    return {
      newpass: "",
      repetednewpass: "",
      newpasserror: "",
      repetednewpasserror: "",
    };
  },
  methods: {
    signin() {
      this.newpasserror = null;
      this.repetednewpasserror = null;

      if (this.newpass.length == 0) {
        this.newpasserror = "ادخل كلمه المرور";
      }
      if (this.repetednewpass.length == 0) {
        this.repetednewpasserror = "اعد ادخال كلمه المرور";
      }
      if (this.repetednewpass != this.newpass) {
        this.repetednewpasserror = "غير مطابقه لكلمه المرور الجديده";
      }
      //الداتا الي هتروح للباك
      else {
        const userdata = {
          email: this.$route.params.email,
          password: this.newpass,
        };
        this.$router.replace(`/`);
      }
    },
  },
};
</script>

<style scoped>
h2 {
  margin-bottom: 40px;
}

form {
  text-align: end;
}

form > div {
  margin: 15px 0px;
  cursor: context-menu !important;
}

form > div > input {
  text-align: end;
}

form > div > div > label {
  margin-right: 10px;
}

label {
  color: #7c7e80;
}
input[type="password"] {
  border: none;
  border-radius: 5px;
}

button {
  margin-top: 45px;
}
small {
  color: #f84949 !important;
}
</style>