<template>
  <base-wrapper>
    <div class="signincontainer">
      <h2>انشاء حساب جديد</h2>
      <form @submit.prevent="signup">
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            placeholder="الاسم بالكامل"
            v-model="username"
          />
          <small class="form-text text-muted" v-show="nameerror">{{
            nameerror
          }}</small>
        </div>
        <div class="form-group">
          <input
            type="email"
            class="form-control"
            placeholder="البريد الالكتروني"
            v-model="useremail"
          />
          <small class="form-text text-muted" v-show="emailerror">{{
            emailerror
          }}</small>
        </div>
        <div class="form-group">
          <input
            type="password"
            class="form-control"
            placeholder="كلمه المرور"
            v-model="userpass"
          />
          <small class="form-text text-muted" v-show="passworderror">{{
            passworderror
          }}</small>
        </div>

        <div class="form-group">
          <input
            type="text"
            class="form-control"
            placeholder="رقم الجوال"
            v-model="userphone"
          />
          <small class="form-text text-muted" v-show="phoneerror">{{
            phoneerror
          }}</small>
        </div>

        <div class="form-group">
          <input
            type="text"
            class="form-control"
            placeholder="المدينه"
            v-model="useraddress"
          />
          <small class="form-text text-muted" v-show="addresserror">{{
            addresserror
          }}</small>
        </div>
        <div>
          <label>الموافقه علي الشروط والاحكام</label>
          <input type="checkbox" v-model="acceptterms" />
          <div>
            <small class="form-text text-muted" v-show="!acceptterms">{{
              accepttermserror
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
      nameerror: null,
      useremail: null,
      emailerror: null,
      userpass: null,
      passworderror: null,
      userphone: "",
      phoneerror: null,
      useraddress: null,
      addresserror: null,
      acceptterms: false,
      accepttermserror: null,
    };
  },
  methods: {
    signup() {
      this.nameerror = null;
      this.emailerror = null;
      this.passworderror = null;
      this.phoneerror = null;
      this.addresserror = null;
      this.accepttermserror = null;

      if (this.username == null) {
        this.nameerror = "ادخل الاسم بالكامل";
      }
      if (this.useremail == null) {
        this.emailerror = "ادخل بريدك الالكتروني";
      }
      if (this.userpass == null) {
        this.passworderror = "ادخل كلمه المرور";
      }
      if (this.userphone.length < 12) {
        this.phoneerror = "ادخل رقمك المكون من 12 رقم";
      }
      if (this.useraddress == null) {
        this.addresserror = "ادخل عنوانك";
      }
      if (this.acceptterms == false) {
        this.accepttermserror = "يجب الموافقه علي شروط الموقع";
      }
      //هنبعت للباك الداتا لو كله سليم ع هيئه اوبجيكت
      else {
        const newuser = {
          name: this.username,
          email: this.useremail,
          phone: this.userphone,
          password: this.userpass,
          address: this.useraddress,
        };
        this.$router.replace("/");
      }
    },
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

form > div {
  margin: 5px 0px;
  cursor: context-menu !important;
}

form > div > input {
  text-align: end;
}

form > div > label {
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

div > a {
  text-decoration: none;
}
</style>