<template>
  <h6>بلغ عن مكان أطفال الشوارع</h6>

  <div class="card">
    <form ref="anyName" @submit.prevent="Reportofhomeless">
      <div>
        <input
          type="text"
          v-model="vagranarea"
          placeholder="المنطقه التي يوجد بها الطفل"
        />
        <small class="form-text text-muted" v-show="vagranareaerror">{{
          vagranareaerror
        }}</small>
      </div>
      <div>
        <textarea
          type="text"
          placeholder="التفاصيل"
          rows="4"
          cols="50"
          v-model="details"
        />
        <small class="form-text text-muted" v-show="detailserror">{{
          detailserror
        }}</small>
      </div>
      <div>
        <label>ارفاق صوره للحاله</label>
        <input type="file" accept="image/*" @change="imgselected" />
      </div>
      <div class="reportbtncontainer">
        <base-button class="reportbtn">بلغ</base-button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      img: null,
      vagranarea: null,
      vagranareaerror: null,
      details: null,
      detailserror: null,
    };
  },
  methods: {
    imgselected(e) {
      this.img = e.target.files[0];
      let reader = new FileReader();
      reader.readAsDataURL(this.img);
    },
    Reportofhomeless() {
      this.vagranareaerror = null;
      this.detailserror = null;
      if (this.vagranarea == null) this.vagranareaerror = "مطلوب";
      if (this.details == null) this.detailserror = "مطلوب";
      else {
        let vagrantreport = {
          vagranarea: this.vagranarea,
          details: this.details,
          img: this.img,
        };
        console.log(vagrantreport);
      }
      //send to backend
      this.$refs.anyName.reset();
    },
  },
};
</script>

<style scoped>
.card {
  margin-top: 20px;
  width: 50vw;
  height: 47vh;
  padding: 15px;
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
  justify-content: space-between;
}

form > div > label {
  margin-left: 5px;
}

input,
textarea {
  width: 42.5vw;
  padding: 5px 10px 5px 0px;
  border-radius: 4px;
  border: 1px solid #aaaaaa;
  text-align: end;
}

input[type="file"] {
  width: 34.5vw;
  padding: 5px;
  text-align-last: right;
  justify-content: space-around;
}
input[type="file"]::-webkit-file-upload-button {
  float: right;
  border: 1px solid #aaaaaa;
}

textarea {
  resize: none;
}

small {
  color: #f84949 !important;
  margin-right: 2px;
}
.reportbtncontainer {
  margin-top: 15px;
}
.reportbtn {
  width: 25vw;
  margin-top: 0px;
}
</style>
