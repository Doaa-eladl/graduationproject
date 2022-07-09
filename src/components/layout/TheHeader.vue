لسه مفروض تتحول لراوتر لينك
<template>
  <header>
    <nav class="navbar-expand-lg">
      <ul class="navbar-nav">
        <div>
          <li>
            <router-link to="/">الرئيسيه</router-link>
          </li>
          <li dir="rtl" class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button"
              data-bs-toggle="dropdown" aria-expanded="false">
              خدماتنا
            </a>
            <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
              <li>
                <router-link to="/volunteer-form">تطوع</router-link>
              </li>
              <li>
                <router-link to="/donate-form">تبرع</router-link>
              </li>
              <li>
                <router-link to="/askforhelp">طلب المساعده</router-link>
              </li>

              <li>
                <router-link to="/vagrants">بلاغ عن مشردين</router-link>
              </li>
              <li>
                <router-link to="/homelesschildren">بلاغ عن اطفال الشوارع</router-link>
              </li>
              <li>
                <router-link to="/zakat">احسب زكاة مالك</router-link>
              </li>
              <li>
                <router-link to="/awarenesslectures">محاضرات توعويه</router-link>
              </li>
              <li>
                <router-link to="/jobs">فرص العمل</router-link>
              </li>
              <li>
                <router-link to="/supportedservices">خدمات مدعومه</router-link>
              </li>
            </ul>
          </li>

          <li>
            <router-link to="/connectus">تواصل معنا</router-link>
          </li>
          <li>
            <router-link to="/whoweare">من نحن ؟</router-link>
          </li>
        </div>

        <div v-if="auth">
          <li>
            <router-link to="/useraccount">حسابي</router-link>
          </li>
          <li>
            <router-link v-on:click="logout()" to="/">تسجيل الخروج</router-link>
          </li>
        </div>
        <div v-else="auth">
          <li>
            <router-link to="/login">تسجيل الدخول</router-link>
          </li>
          <li>
            <router-link to="/signup">إنشاء حساب</router-link>
          </li>
        </div>
      </ul>

      <div>
        <router-link to="/">
          <img src="../.././assets/logo1.png" alt="" width="20" height="15" />
        </router-link>
      </div>
    </nav>
  </header>
</template>

<script>

export default {
  data() {
    return {
      Symbol: "<< خدماتنا",
      displayserviceslist: false,

    };
  },
  methods: {
    logout() {
      console.log('LOGOUT');
      localStorage.removeItem('token');
    },
    open() {
      this.displayserviceslist = true;
    },

    hide() {
      this.displayserviceslist = false;
    },
  },
};
</script>

<style scoped>
nav {
  position: fixed;
  height: 70px;
  width: 100vw;
  background-color: #25252c;
  display: flex;
  justify-content: start;
  align-items: center;
  z-index: 1;
}

nav>ul {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row-reverse !important;
  width: 88vw;
}

nav>ul>div {
  display: flex;
  flex-direction: row-reverse;
  margin: auto;
}

li,
li>a {
  color: white;
  padding: 0px 10px;
  text-decoration: none;
}

li:hover,
li>a:hover,
img:hover {
  cursor: pointer;
  color: #bbbbbb;
}

img {
  width: 3.5vw;
  height: 2.5vw;
  margin-top: 3px;
}
</style>