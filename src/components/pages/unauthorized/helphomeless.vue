 <template>
  <base-wrapper>
    <div>
      <h1>مساعده المشردين</h1>
      <div class="card">
        <h6>: برجاء ملء الاستماره التاليه</h6>
        <form @submit.prevent="donate">
          <div>
            <label>: الاسم</label>
            <input type="text" v-model="donorname" placeholder="اسم المتبرع" />
            <small class="form-text text-muted" v-show="donornameerror">{{
              donornameerror
            }}</small>
          </div>

          <div>
            <label>: رقم التليفون</label>
            <input
              type="text"
              v-model="donorphnenumber"
              placeholder="رقم تليفون المتبرع"
            />
            <small class="form-text text-muted" v-show="donorphnenumbererror">{{
              donorphnenumbererror
            }}</small>
          </div>

          <div>
            <label>: العنوان</label>
            <input
              type="text"
              v-model="donoraddress"
              placeholder="عنوان المتبرع"
            />
            <small class="form-text text-muted" v-show="donoraddresserror">{{
              donoraddresserror
            }}</small>
          </div>

          <div>
            <label>: نوع التبرع</label>
            <select v-model="donationtype">
              <option :value="null" disabled>نوع التبرع</option>
              <option value="1">مالي</option>
              <option value="2">عيني</option>
            </select>
            <small class="form-text text-muted" v-show="donationtypeerror">{{
              donationtypeerror
            }}</small>
          </div>

          <div>
            <label>مقدار التبرع</label>
            <input
              type="text"
              v-model="donationamount"
              placeholder="مقدار التبرع"
            />
            <small class="form-text text-muted" v-show="donationamounterror">{{
              donationamounterror
            }}</small>
          </div>

          <div class="volunteerbtn">
            <base-button>ساعد</base-button>
          </div>
        </form>
      </div>
    </div>
  </base-wrapper>
</template>

<script>
export default {
  data() {
    return {
      donorname: null,
      donornameerror: null,

      donorphnenumber: "",
      donorphnenumbererror: null,

      donoraddress: null,
      donoraddresserror: null,

      donationtype: null,
      donationtypeerror: null,

      category: null,
      categoryerror: null,
      donationamount: null,
      donationamounterror: null,

      error: null,
    };
  },
  methods: {
    donate() {
      this.donornameerror = null;
      this.donorphnenumbererror = null;
      this.donoraddresserror = null;
      this.donationtypeerror = null;
      this.donationamounterror = null;

      if (this.donorname == null || this.donorname == "") {
        this.donornameerror = "مطلوب";
      }
      if (this.donorphnenumber.length < 12 || this.donorphnenumber == null) {
        this.donorphnenumbererror = "ادخل رقمك المكون من 12 رقم";
      }
      if (this.donoraddress == null || this.donoraddress == "") {
        this.donoraddresserror = "مطلوب";
      }
      if (this.donationtype == null) {
        this.donationtypeerror = "مطلوب";
      }
      if (this.donationamount == null || this.donationamount == "") {
        this.donationamounterror = "مطلوب";
      }else {
        //الاوبجيكت الي هيتبعت للباك
        const donationform = {
          donorname: this.donorname,
          donorphnenumber: this.donorphnenumber,
          donoraddress: this.donoraddress,
          //ال اي دي بتاع اليوزر الي هيكون موجود فالurl
        };
        this.$router.replace("/");
      }
    },
  },
};
</script>

<style scoped>
.card {
  margin-top: 20px;
  width: 60vw;
  padding: 15px;
  border-radius: 10px;
}

h6 {
  align-self: end;
  margin: 5px 10px;
}

form > div {
  display: flex;
  flex-direction: row-reverse;
  margin: 10px 5px;
  align-items: center;
  justify-content: space-between;
}

form > div > label {
  margin-left: 5px;
}

form > div > input,
form > div > select {
  width: 50vw;
  border: none;
  text-align: end;
  border: 1px solid #ced4da;
  padding: 5px 10px;
}

select {
  color: #777777;
}

.volunteerbtn {
  display: flex;
  justify-content: center;
}

small {
  color: #f84949 !important;
  margin-right: 2px;
}
</style>