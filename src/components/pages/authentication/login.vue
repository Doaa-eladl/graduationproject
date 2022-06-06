<template>
  <base-wrapper>
    <div>
      <img src="../../../assets/login.png" alt="sign in photo" />
    </div>
    <div class="signincontainer">
      <h2>تسجيل الدخول</h2>
      <form @submit.prevent="signin">
        <div class="form-group">
          <input type="email" class="form-control" placeholder="البريد الالكتروني" v-model="email" />
          <small id="emailHelp" class="form-text text-muted" v-show="emailError">{{ emailError }}</small>
        </div>
        <div class="form-group">
          <input type="password" class="form-control" placeholder="كلمه المرور" v-model="password" />
        </div>
        <div class="form-group">
          <small id="emailHelp" class="form-text text-muted" v-show="passwordError">{{ passwordError }}</small>
        </div>
        <div class="paswordcontrols">
          <div>
            <label>تذكر كلمه المرور</label>
            <input type="checkbox" />
          </div>
          <div class="forgetpass">
            <router-link to="/forgetpass">هل نسيت كلمه المرور؟</router-link>
          </div>
        </div>
        <base-button type="submit">تسجيل الدخول</base-button>
      </form>
      <div class="createnewaccount">
        <p>ليس لديك حساب ؟</p>
        <router-link to="/signup">انشاء حساب جديد</router-link>
      </div>
    </div>
  </base-wrapper>
</template>

<script>
export default {
  data() {
    return {
      emailError: null,
      passwordError: null,
      email: null,
      password: null
    };
  },
  methods: {
    async signin() {
      if (this.isValidateInput()) {
        //Todo chang api
        const api = this.api + '/users/create/';
        const data = {
          email: this.email,
          password: this.password
        };
        this.axios.post(api, data)
          .then((response) => console.log(response))
          .catch((error) => console.log(error));
      }
      //لسه الربط بالباك وتعديل الايرور الجاي من الباك
      else {

      }
    },
    isValidateInput() {
      this.emailError = null
      this.passwordError = null;
      let isValid = true
      if (this.email.length == 0) {
        this.emailError = "ادخل البريد الالكتروني";
        isValid = false
      }
      if (this.password.length == 0) {
        this.passwordError = "ادخل كلمه المرور صحيحه";
        isValid = false
      }
      return isValid;
    }
  },
};
</script>


<style scoped>


.signincontainer {
  width: 30vw;
}

h2 {
  margin-bottom: 40px;
}
form {
  text-align: end;
}

form>div {
  margin: 15px 0px;
  cursor: context-menu !important;
}

form>div>input {
  text-align: end;
}

form>div>div>label {
  margin-right: 10px;
}

label {
  color: #7c7e80;
}

input[type="checkbox"] {
  transform: scale(1.5);
}

input[type="email"],
input[type="password"] {
  border: none;
  border-radius: 5px;
}

button {
  margin-top: 45px;
}

.paswordcontrols {
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
}

.forgetpass>a,
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