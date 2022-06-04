<template>
  <h6>الاعلان عن محاضره توعويه</h6>
  <div class="card">
    <form @submit.prevent="lectureannounce">
      <div>
        <label>: اسم الجمعيه</label>
        <select v-model="charityname">
          <option :value="null" disabled>
            اختار الجمعيه التي تود التطوع فيها
          </option>
          <option value="1">One</option>
          <option value="2">two</option>
        </select>
        <small class="form-text text-muted" v-show="nameerror">{{
          nameerror
        }}</small>
      </div>

      <div>
        <label>: اسم المحاضر</label>
        <input type="text" v-model="lecturername" placeholder="اسم المحاضر" />
        <small class="form-text text-muted" v-show="lecturernameerror">{{
          lecturernameerror
        }}</small>
      </div>

      <div>
        <label>: عنوان المحاضره</label>
        <input
          type="text"
          v-model="lecturetitle"
          placeholder="عنوان المحاضره"
        />
        <small class="form-text text-muted" v-show="lecturetitleerror">{{
          lecturetitleerror
        }}</small>
      </div>

      <div>
        <label>: تخصص المحاضره</label>
        <select v-model="lecturespecialty">
          <option :value="null" disabled>اختر تخصص المحاضره</option>
          <option value="1">الاسره/الابناء</option>
          <option value="2">التاهيل للزواج</option>
          <option value="2">الصحه النفسيه</option>
        </select>
        <small class="form-text text-muted" v-show="lecturespecialtyerror">{{
          lecturespecialtyerror
        }}</small>
      </div>

      <div>
        <label>: عدد ساعات المحاضره</label>
        <input
          type="text"
          v-model="lecturehours"
          placeholder="ساعات المحاضره"
        />
        <small class="form-text text-muted" v-show="lecturehourserror">{{
          lecturehourserror
        }}</small>
      </div>

      <div>
        <label>: تاريخ المحاضره</label>
        <input
          type="date"
          v-model="lecturedate"
          placeholder="التاريخ المقام به المحاضره"
        />
        <small class="form-text text-muted" v-show="lecturedateerror">{{
          lecturedateerror
        }}</small>
      </div>

      <div>
        <label>: اختار الفرع</label>
        <select v-model="charitybranchname">
          <option :value="null" disabled>اختر الفرع المقام به المحاضره</option>
          <option value="1">One</option>
          <option value="2">two</option>
        </select>
        <small class="form-text text-muted" v-show="charitybranchnameerror">{{
          charitybranchnameerror
        }}</small>
      </div>

      <div>
        <label>: العنوان</label>
        <input type="text" v-model="lectureaddress" placeholder="العنوان" />
        <small class="form-text text-muted" v-show="lectureaddresserror">{{
          lectureaddresserror
        }}</small>
      </div>

      <div>
        <label>: مزيد من التفاصيل</label>
        <textarea type="text" v-model="lecturedetails" placeholder="التفاصيل" />
        <small class="form-text text-muted" v-show="lecturedetailserror">{{
          lecturedetailserror
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
      charityname: null,
      nameerror: null,

      lecturername: null,
      lecturernameerror: null,

      lecturetitle: null,
      lecturetitleerror: null,

      lecturespecialty: null,
      lecturespecialtyerror: null,

      lecturehours: null,
      lecturehourserror: null,

      lecturedate: null,
      lecturedateerror: null,

      charitybranchname: null,
      charitybranchnameerror: null,

      lectureaddress: null,
      lectureaddresserror: null,

      lecturedetails: null,
      lecturedetailserror: null,
    };
  },
  methods: {
    lectureannounce() {
      this.nameerror = null;
      this.lecturernameerror = null;
      this.lecturetitleerror = null;
      this.lecturespecialtyerror = null;
      this.lecturehourserror = null;
      this.lecturedateerror = null;
      this.charitybranchnameerror = null;
      this.lecturedetailserror = null;
      this.lectureaddresserror = null;

      if (this.charityname == null) this.nameerror = "مطلوب";
      if (this.lecturername == null) this.lecturernameerror = "مطلوب";
      if (this.lecturetitle == null) this.lecturetitleerror = "مطلوب";
      if (this.lecturespecialty == null) this.lecturespecialtyerror = "مطلوب";
      if (this.lecturehours == null) this.lecturehourserror = "مطلوب";
      if (this.lecturedate == null) this.lecturedateerror = "مطلوب";
      if (this.charitybranchname == null) this.charitybranchnameerror = "مطلوب";
      if (this.lecturedetails == null) this.lecturedetailserror = "مطلوب";
      if (this.lectureaddress == null) this.lectureaddresserror = "مطلوب";
      //هيتبعت للباك
      else {
        let lecture = {
          charityname: this.charityname,
          lecturername: this.lecturername,
          lecturetitle: this.lecturetitle,
          lecturespecialty: this.lecturespecialty,
          lecturehours: this.lecturehours,
          lecturedate: this.lecturedate,
          charitybranchname: this.charitybranchname,
          lectureaddress: this.lectureaddress,
          lecturedetails: this.lecturedetails,
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
  width: 10vw;
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
