<template>
  <h6>: الاعلان عن خدمه مدعمه</h6>
  <div class="card">
    <form @submit.prevent="supportservicesannounce">
      <div>
        <label>: اسم الجهه</label>
        <input
          type="text"
          v-model="supportservicessupplier"
          placeholder="اسم الجهه المقدمه للخدمه"
        />
        <small class="form-text text-muted" v-show="supportservicessuppliererror">{{
         supportservicessuppliererror
        }}</small>
      </div>

      <div>
        <label>: العنوان</label>
        <input type="text" v-model="supportservicesaddress" placeholder="العنوان" />
        <small class="form-text text-muted" v-show="supportservicesaddresserror">{{
          supportservicesaddresserror
        }}</small>
      </div>

      <div>
        <label>: الوقت المتاح فيه الخدمه</label>
        <input
          type="text"
          v-model="supportservicestime"
          placeholder="الوقت المتاح فيه الخدمه"
        />
        <small class="form-text text-muted" v-show="supportservicestimeerror">{{
          supportservicestimeerror
        }}</small>
      </div>

      <div>
        <label>: نوع الخدمه</label>
        <input type="text" v-model="supportservicestype" placeholder="نوع الخدمه" />
        <small class="form-text text-muted" v-show="supportservicestypeerror">{{
          supportservicestypeerror
        }}</small>
      </div>

      <div>
        <label>: مزيد من التفاصيل</label>
        <textarea type="text" v-model="supportservicesdetails" placeholder="التفاصيل" />
        <small class="form-text text-muted" v-show="supportservicesdetailserror">{{
          supportservicesdetailserror
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
      supportservicessupplier: null,
      supportservicessuppliererror: null,

      supportservicesaddress: null,
      supportservicesaddresserror: null,

      supportservicestime: null,
      supportservicestimeerror: null,

      supportservicestype: null,
      supportservicestypeerror: null,

      supportservicesdetails: null,
      supportservicesdetailserror: null,
    };
  },
  methods: {
    supportservicesannounce() {
      this.supportservicessuppliererror = null;
      this.supportservicesaddresserror = null;
      this.supportservicestimeerror = null;
      this.supportservicestypeerror = null;
      this.supportservicesdetailserror = null;

      if (this.supportservicessupplier == null) this.supportservicessuppliererror = "مطلوب";
      if (this.supportservicesaddress == null) this.supportservicesaddresserror = "مطلوب";
      if (this.supportservicestime == null) this.supportservicestimeerror = "مطلوب";
      if (this.supportservicestype == null) this.supportservicestypeerror = "مطلوب";
      if (this.supportservicesdetails == null) this.supportservicesdetailserror = "مطلوب";
      //هيتبعت للباك
      else {
        let supportservices = {
          supportservicessupplier: this.supportservicessupplier,
          supportservicesaddress: this.supportservicesaddress,
          supportservicestime: this.supportservicestime,
          supportservicestype: this.supportservicestype,
          supportservicesdetails: this.supportservicesdetails,
        };
      }
    },
  },
};
</script>

<style scoped>
.card {
  margin-top: 20px;
  width: 45vw;
  padding: 0px;
  border-radius: 10px;
  display: flex;
  justify-content: flex-start;
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
