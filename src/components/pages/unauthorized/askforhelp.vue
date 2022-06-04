<template>
  <base-wrapper>
    <div>
      <h1>طلب المساعده</h1>
      <form @submit.prevent="sendrequest">
        <div>
          <input type="text" placeholder="الاسم" v-model="name" />
          <small class="form-text text-muted" v-show="nameerror">{{
            nameerror
          }}</small>
        </div>

        <div>
          <input
            type="number"
            placeholder="الرقم القومي"
            v-model="nationalid"
          />
          <small class="form-text text-muted" v-show="nationaliderror">{{
            nationaliderror
          }}</small>
        </div>

        <div>
          <input type="text" placeholder="العنوان" v-model="address" />
          <small class="form-text text-muted" v-show="addresserror">{{
            addresserror
          }}</small>
        </div>

        <div>
          <select v-model="socialstates">
            <option :value="null" disabled>الحاله الاجتماعيه</option>
            <option value="single">اعزب</option>
            <option value="married">متزوج</option>
          </select>
          <small class="form-text text-muted" v-show="socialstateserror">{{
            socialstateserror
          }}</small>
        </div>

        <div>
          <input type="number" placeholder="عدد الاطفال" v-model="numofkids" />
          <small class="form-text text-muted" v-show="numofkidserror">{{
            numofkidserror
          }}</small>
        </div>

        <div>
          <textarea
            type="text"
            placeholder="وصف المشكله"
            rows="4"
            cols="50"
            v-model="problemdescription"
          />
          <small
            class="form-text text-muted"
            v-show="problemdescriptionerror"
            >{{ problemdescriptionerror }}</small
          >
        </div>

        <base-button type="submit">ارسال الطلب</base-button>
      </form>
    </div>
  </base-wrapper>
</template>

<script>
export default {
  data() {
    return {
      name: null,
      nameerror: null,

      nationalid: null,
      nationaliderror: null,

      address: null,
      addresserror: null,

      socialstates: null,
      socialstateserror: null,

      numofkids: null,
      numofkidserror: null,

      problemdescription: null,
      problemdescriptionerror: null,
    };
  },
  methods: {
    sendrequest() {
      this.nameerror = null
      this.nationaliderror = null
      this.addresserror = null
      this.socialstateserror = null
      this.numofkidserror = null
      this.problemdescriptionerror = null

      if (this.name == null) this.nameerror = "ادخل الاسم من فضلك";
      if (this.nationalid == null || this.nationalid.toString().length != 14)
        this.nationaliderror = "ادخل الرقم القومي صحيح من فضلك";
      if (this.address == null) this.addresserror = "ادخل العنوان من فضلك";
      if (this.socialstates == null)
        this.socialstateserror = "ادخل الحاله الاجتماعيه من فضلك";
      if (this.numofkids == null) this.numofkidserror = "غير مسموح";

      if (this.problemdescription == null)
        this.problemdescriptionerror = "ادخل وصف المشكله من فضلك";
      else {
        //الي هيتبعت للباك
        const newrequest = {
          charityid:this.$route.params.charityid,
          name: this.name,
          nationalid: this.nationalid,
          address: this.address,
          socialstates: this.socialstates,
          numofkids: this.numofkids,
          problemdescription: this.problemdescription,
        };
        this.$router.replace("/");
      }
    },
  },
};
</script>

<style scoped>
form > div {
  display: flex;
  flex-direction: column;
  width: fit-content;
  margin: auto;
}

form > div > input {
  align-self: center;
}

form > div > small {
  align-self: end;
}

input,
select,
textarea {
  width: 30vw;
  padding: 5px 10px 5px 0px;
  margin: 5px;
  border: none;
  border-radius: 4px;
  text-align: end;
}

select {
  color: #777777;
}

textarea {
  resize: none;
}

small {
  color: #f84949 !important;
}
</style>