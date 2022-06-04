<template>
  <h6>الاعلان عن وظيفه متاحه</h6>
  <div class="card">
    <form @submit.prevent="lectureannounce">
    <div>
        <label>: اسم المدير/المعلن</label>
        <input type="text" v-model="managername" placeholder="اسم المدير" />
        <small class="form-text text-muted" v-show="managernameerror">{{
          managernameerror
        }}</small>
      </div>

      <div>
        <label>: المسمي الوظيفي</label>
        <input
          type="text"
          v-model="Jobtitle"
          placeholder="المسمي الوظيفي"
        />
        <small class="form-text text-muted" v-show="Jobtitleerror">{{
          Jobtitleerror
        }}</small>
      </div>

      <div>
        <label>:  مكان العمل</label>
        <input
          type="text"
          v-model="jobaddress"
          placeholder="مكان العمل"
        />
        <small class="form-text text-muted" v-show="jobaddresserror">{{
          jobaddresserror
        }}</small>
      </div>

      <div>
        <label>:  الراتب</label>
        <input
          type="text"
          v-model="salary"
          placeholder="الراتب"
        />
        <small class="form-text text-muted" v-show="salaryerror">{{
          salaryerror
        }}</small>
      </div>

      <div>
        <label>:  المؤهلات المطلوبه</label>
        <input
          type="text"
          v-model="requiredqualifications"
          placeholder="المؤهلات المطلوبه"
        />
        <small class="form-text text-muted" v-show="requiredqualificationserror">{{
          requiredqualificationserror
        }}</small>
      </div>

      <div>
        <label>: عدد ساعات العمل</label>
        <input
          type="text"
          v-model="jobhours"
          placeholder="ساعات العمل"
        />
        <small class="form-text text-muted" v-show="jobhourserror">{{
          jobhourserror
        }}</small>
      </div>

      <div>
        <label>: مزيد من التفاصيل</label>
        <textarea type="text" v-model="jobdetails" placeholder="التفاصيل" />
        <small class="form-text text-muted" v-show="jobdetailserror">{{
          jobdetailserror
        }}</small>
      </div>
      <div>
        <base-button class="volunteerbtn">اعلن</base-button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      managername: null,
      managernameerror: null,

      Jobtitle: null,
      Jobtitleerror: null,

      jobaddress: null,
      jobaddresserror: null,

      salary: null,
      salaryerror: null,

      requiredqualifications: null,
      requiredqualificationserror: null,

      jobhours: null,
      jobhourserror: null,

      jobdetails: null,
      jobdetailserror: null,
    };
  },
  methods: {
    lectureannounce() {
      this.managernameerror = null;
      this.Jobtitleerror = null;
      this.jobaddresserror = null;
      this.salaryerror = null;
      this.requiredqualificationserror = null;
      this.jobhourserror = null;
      this.jobdetailserror = null;

      if (this.managername == null) this.managernameerror = "مطلوب";
      if (this.Jobtitle == null) this.Jobtitleerror = "مطلوب";
      if (this.jobaddress == null) this.jobaddresserror = "مطلوب";
      if (this.salary == null) this.salaryerror = "مطلوب";
      if (this.requiredqualifications == null) this.requiredqualificationserror = "مطلوب";
      if (this.jobhours == null) this.jobhourserror = "مطلوب";
      if (this.jobdetails == null) this.jobdetailserror = "مطلوب";
      //هيتبعت للباك
      else {
        let availablejob = {
          managername: this.managername,
          Jobtitle: this.Jobtitle,
          jobaddress: this.jobaddress,
          salary: this.salary,
          requiredqualifications: this.requiredqualifications,
          jobhours: this.jobhours,
          jobdetails: this.jobdetails,
        };
      }
    },
  },
};
</script>

<style scoped>
.card {
  margin-top: 20px;
  width: 50vw;
  padding: 0px;
  border-radius: 10px;
}

h6 {
  align-self: end;
  margin: 5px auto;
  margin-top: 20px;
  font-size: 20px;
}
form {
  display: flex;
  flex-direction: column;
  margin: 10px 5px;
  align-items: center;
  justify-content: space-between;
}

form > div {
  display: flex;
  flex-direction: row-reverse;
  margin: 10px 5px;
  align-items: center;
  justify-content: flex-start;
}

form > div > label {
  margin-left: 5px;
  width: 15vw;
  text-align: right;
}

form > div > input,
form > div > select,
form > div > textarea {
  width: 25vw;
  border: none;
  text-align: end;
  border: 1px solid #ced4da;
  padding: 5px 10px;
}

select {
  color: #777777;
}

.volunteerbtn {
  width: 25vw;
  margin-top: 15px;
}

small {
  color: #f84949 !important;
  margin-right: 2px;
}
</style>
