<template>
  <base-wrapper>
    <div class="signincontainer">
      <h2>انشاء حساب جديد</h2>
      <form @submit.prevent="signup">
        <div class="form-group">
          <input type="text" class="form-control" placeholder="الاسم بالكامل" v-model="name" />
          <small class="form-text text-muted" v-show="nameError">{{
              nameError
          }}</small>
        </div>
        <div class="form-group">
          <input type="text" class="form-control" placeholder="اسم المستخدم" v-model="userName" />
          <small class="form-text text-muted" v-show="userNameError">{{
              userNameError
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
        <div class="form-group">
          <input type="text" class="form-control" placeholder="عمرك" v-model="age" />
          <small class="form-text text-muted" v-show="ageError">{{
              ageError
          }}</small>
        </div>
        <div class="form-group">
          <input type="text" class="form-control" placeholder="الرقم القومي" v-model="natID" />
          <small class="form-text text-muted" v-show="natIDError">{{
              natIDError
          }}</small>
        </div>
        <div class="form-group">
          <select v-model="bloodType" class="form-select">
            <option disabled>اختر فصيلة دمك</option>
            <option>O-</option>
            <option>O+</option>
            <option>A-</option>
            <option>A+</option>
            <option>B-</option>
            <option>B+</option>
            <option>AB-</option>
            <option>AB+</option>
          </select>
          <small class="form-text text-muted" v-show="bloodTypeError">{{
              bloodTypeError
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
      name: null,
      userName: null,
      email: null,
      password: null,
      phone: null,
      address: null,
      age: null,
      natID: null,
      bloodType: 'اختر فصيلة دمك',
      acceptTerms: false,

      nameError: null,
      userNameError: null,
      emailError: null,
      passwordError: null,
      phoneError: null,
      addressError: null,
      ageError: null,
      natIDError: null,
      bloodTypeError: null,
      acceptTermsError: null,

    };
  },
  methods: {
    async signup() {
      if (this.isValidateInput()) {
        const userData = {
          name: this.name,
          username: this.userName,
          email: this.email,
          phone: this.phone,
          password: this.password,
          address: this.address,
          age: this.age,
          nat_ID: this.natID,
          blood: this.bloodType,
        }
        const api = this.api + '/users/create/';
        this.axios.post(api, userData)
          .then((response) => {
            //  TODO : add JWt
            this.$router.replace("/")
          })
          .catch((error) => console.log(error));
      }
    },
    isValidateInput() {
      this.restErrors()
      let isValid = true;

      if (!this.name) {
        this.nameError = "ادخل الاسم بالكامل";
        isValid = false
      }
      if (!this.userName) {
        this.userNameError = "ادخل اسم المستخدم";
        isValid = false
      }
      if (!this.email) {
        this.emailError = "ادخل بريدك الالكتروني";
        isValid = false
      }
      const pattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

      if (!this.password) {
        this.passwordError = "ادخل كلمه المرور";
        isValid = false
      } else if (!pattern.test(this.password)) {
        this.passwordError = "ادخل كلمه المرور مكونه من ثماني حروف و تحتوي رقم و حرف علي الاقل";
        isValid = false
      }

      if (this.phone) {
        if (this.phone.length != 12) {
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
      if (!this.age) {
        this.ageError = "ادخل عمرك";
        isValid = false
      }
      if (!this.natID) {
        this.natIDError = "ادخل الرقم القومي";
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
      this.userNameError = null,
        this.emailError = null;
      this.passwordError = null;
      this.phoneError = null;
      this.addressError = null;
      this.ageError = null;
      this.natIDError = null;
      this.bloodTypeError = null;
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