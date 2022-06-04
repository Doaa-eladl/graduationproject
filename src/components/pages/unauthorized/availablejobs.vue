<template>
  <h6>الوظائف الخاليه</h6>

  <form class="card">
      <div>
        <p>اسم المدير/المعلن : {{ availablejob.managername }}</p>
      </div>
      <div>
        <p>المسمي الوظيفي : {{ availablejob.Jobtitle }}</p>
      </div>
      <div>
        <p>مكان العمل : {{ availablejob.jobaddress }}</p>
      </div>
      <div>
        <p>الراتب : {{ availablejob.salary }} جنيهات</p>
      </div>
      <div>
        <p>المؤهلات المطلوبه : {{ availablejob.requiredqualifications }}</p>
      </div>
      <div>
        <p>عدد ساعات العمل : {{ availablejob.jobhours }} ساعات يوميا</p>
      </div>
      <div>
        <p>{{ availablejob.jobdetails }}</p>
      </div>

      <div class="volunteerbtn">
        <base-button class="volunteerbtn">
          <router-link to="/applyforjob">تقديم</router-link>
        </base-button>
      </div>
  </form>

  <form class="card">
      <div>
        <p>اسم المدير/المعلن : {{ availablejob.managername }}</p>
      </div>
      <div>
        <p>المسمي الوظيفي : {{ availablejob.Jobtitle }}</p>
      </div>
      <div>
        <p>مكان العمل : {{ availablejob.jobaddress }}</p>
      </div>
      <div>
        <p>الراتب : {{ availablejob.salary }} جنيهات</p>
      </div>
      <div>
        <p>المؤهلات المطلوبه : {{ availablejob.requiredqualifications }}</p>
      </div>
      <div>
        <p>عدد ساعات العمل : {{ availablejob.jobhours }} ساعات يوميا</p>
      </div>
      <div>
        <p>{{ availablejob.jobdetails }}</p>
      </div>

      <div class="volunteerbtn">
        <base-button class="volunteerbtn">
          <router-link to="/applyforjob">تقديم</router-link>
        </base-button>
      </div>
  </form>

  <form class="card">
      <div>
        <p>اسم المدير/المعلن : {{ availablejob.managername }}</p>
      </div>
      <div>
        <p>المسمي الوظيفي : {{ availablejob.Jobtitle }}</p>
      </div>
      <div>
        <p>مكان العمل : {{ availablejob.jobaddress }}</p>
      </div>
      <div>
        <p>الراتب : {{ availablejob.salary }} جنيهات</p>
      </div>
      <div>
        <p>المؤهلات المطلوبه : {{ availablejob.requiredqualifications }}</p>
      </div>
      <div>
        <p>عدد ساعات العمل : {{ availablejob.jobhours }} ساعات يوميا</p>
      </div>
      <div>
        <p>{{ availablejob.jobdetails }}</p>
      </div>

      <div class="volunteerbtn">
        <base-button class="volunteerbtn">
          <router-link to="/applyforjob">تقديم</router-link>
        </base-button>
      </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      //ده هيجي من الباك اول م ي mount function
        availablejob : {
          managername: "احمد محمد",
          Jobtitle: "سكرتير",
          jobaddress: "عياده د/احمد محمد ف منصف ش جيهان",
          salary: "2000",
          requiredqualifications: "يجيد القراءه والكتابه و استعمال الكمبيوتر",
          jobhours: "8",
          jobdetails: "مسؤول عن استقبال المكالمات و حجز مواعيد المرضي و تنظيم جداول الطبيبات و الاطباء بالمركز و تحصيل رسوم الجلسات و ارسال التقارير اليومية",
        }
    };
  },
};
</script>

<style scoped>
.card {
  margin-top: 10px;
  width: 44vw;
  padding: 5px;
  border-radius: 10px;
}

h6 {
  align-self: end;
  margin: 5px auto;
  margin-top: 10px;
  font-size: 20px;
}
form {
  display: flex;
  flex-direction: column;
  margin: 5px;
  align-items: center;
  justify-content: space-between;
  align-items: end;
  padding: 5px 20px;
}
form > div {
  display: flex;
  flex-direction: row-reverse;
  margin: 5px;
  align-items: flex-end;
  justify-content: space-between;
}

form > div > p {
  margin-left: 5px;
  text-align: right;
}

.volunteerbtn {
  width: 25vw;
  margin: 0px auto;
}

a{
  color: white;
}

a:hover{
  text-decoration: none;
}
</style>  