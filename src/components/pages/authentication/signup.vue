<template>
  <base-wrapper>
    <div class="signincontainer">
      <h2>انشاء حساب جديد</h2>
      <form @submit.prevent="signup">
        <div class="form-group">
          <input type="text" class="form-control" placeholder="الاسم بالكامل" v-model="username" />
          <small class="form-text text-muted" v-show="nameError">{{
              nameError
          }}</small>
        </div>
        <div class="form-group">
          <input type="email" class="form-control" placeholder="البريد الالكتروني" v-model="email" />
          <small class="form-text text-muted" v-show="emailError">{{
              emailError
          }}</small>
        </div>
        <div class="form-group">
          <input type="password" class="form-control" placeholder="كلمه المرور" v-model="password" />
          <small class="form-text text-muted" v-show="passwordError">{{
              passwordError
          }}</small>
        </div>

        <div class="form-group">
          <input type="text" class="form-control" placeholder="رقم الجوال" v-model="phone" />
          <small class="form-text text-muted" v-show="phoneError">{{
              phoneError
          }}</small>
        </div>

        <div class="form-group">
          <input type="text" class="form-control" placeholder="عنوانك" v-model="address" />
          <small class="form-text text-muted" v-show="addressError">{{
              addressError
          }}</small>
        </div>
        <div>
          <label>الموافقه علي الشروط والاحكام</label>
          <input type="checkbox" v-model="acceptTerms" />
          <div>
            <small class="form-text text-muted" v-show="!acceptTerms">{{
                acceptTermsError
            }}</small>
          </div>
        </div>
        <base-button type="submit">انشاء حساب</base-button>
      </form>
      <div class="createnewaccount">
        <p>لديك حساب ؟</p>
        <router-link to="/login">تسجيل الدخول</router-link>
      </div>
    </div>
  </base-wrapper>
</template>

<script>
export default {
  data() {
    return {
      username: null,
      nameError: null,
      email: null,
      emailError: null,
      password: null,
      passwordError: null,
      phone: "",
      phoneError: null,
      address: null,
      addressError: null,
      acceptTerms: false,
      acceptTermsError: null,

    };
  },
  methods: {
    signup() {
      if (this.isValidateInput()) {
        const userData = {
          name: this.username,
          email: this.email,
          phone: this.phone,
          password: this.password,
          address: this.address,
        }
        const api = this.api + '/users/create/';
       
        this.axios.post(api, userData)
          .then((response) => console.log(response))
          .catch((error) => console.log(error));
        this.axios.post(api, userData)
          .then((response) => console.log(response))
          .catch((error) => console.log(error));
        this.$router.replace("/")
      }
      //هنبعت للباك الداتا لو كله سليم ع هيئه اوبجيكت
      else {

      }
    },
    isValidateInput() {
      this.restErrors()
      let isValid = true;

      if (!this.username) {
        this.nameError = "ادخل الاسم بالكامل";
        isValid = false
      }

      if (!this.email) {
        this.emailError = "ادخل بريدك الالكتروني";
        isValid = false
      }

      if (!this.password) {
        this.passwordError = "ادخل كلمه المرور";
        isValid = false
      }

      if (this.phone) {
        if (this.phone.length < 12) {
          this.phoneError = "ادخل رقمك المكون من 12 رقم";
          isValid = false
        } else if (isNaN(this.phone)) {
          this.phoneError = "ادخل ارقام فقط من فضلك";
          isValid = false
        }
      } else {
        this.phoneError = "ادخل رقمك المكون من 12 رقم";
        isValid = false
      }

      if (!this.address) {
        this.addressError = "ادخل عنوانك";
        isValid = false
      }

      if (!this.acceptTerms) {
        this.acceptTermsError = "يجب الموافقه علي شروط الموقع";
        isValid = false
      }

      return isValid

    },
    restErrors() {
      this.nameError = null;
      this.emailError = null;
      this.passwordError = null;
      this.phoneError = null;
      this.addressError = null;
      this.acceptTermsError = null;
    }
  },
};
</script>

<style scoped>
.signincontainer {
  width: 30vw;
}

h2 {
  margin-bottom: 20px;
}

form {
  text-align: end;
}

form>div {
  margin: 5px 0px;
  cursor: context-menu !important;
}

form>div>input {
  text-align: end;
}

form>div>label {
  margin-right: 10px;
}

label {
  color: #7c7e80;
}

input[type="checkbox"] {
  transform: scale(1.2);
}

button {
  margin-top: 25px !important;
}

small {
  color: #f84949 !important;
}

.createnewaccount {
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  margin-top: 5px;
}

div>a {
  text-decoration: none;
}
</style>