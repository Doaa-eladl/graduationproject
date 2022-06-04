<template>
  <div class="tabheader">
    <div>
      <h1>الجمعيات</h1>
    </div>
    <div>
      <label for="type">بحث عن جمعيه</label>
      <select v-model="searchtype" @change="selectsearchtype($event)">
        <option :value="null" disabled selected>علي حسب</option>
        <option :value="item" v-for="item in items">
          {{ item }}
        </option>
      </select>
      <input
        type="text"
        placeholder="بحث عن جمعيه بالاسم"
        v-if="searchtype == 'الاسم'"
        v-model="charityname"
      />
      <!--من الباك-->
      <select v-if="searchtype == 'التخصص'" v-model="searchvalue">
        <option :value="null" disabled selected>تخصصات الجمعيات</option>
        <option :value="item" v-for="item in specializations">
          {{ item }}
        </option>
      </select>
      <!--من الباك-->
      <select v-else-if="searchtype == 'المكان'" v-model="searchvalue">
        <option :value="null" disabled selected>اماكن الجمعيات</option>
        <option :value="item" v-for="item in places">
          {{ item }}
        </option>
      </select>
      <small class="form-text text-muted" v-show="searchvalueerror">{{
        searchvalueerror
      }}</small>
      <span
        @click="click"
        v-if="(searchtype == 'التخصص') | (searchtype == 'المكان')"
      >
        <i class="fa fa-search" aria-hidden="true"></i>
      </span>
    </div>
  </div>
  <div class="charitiescontiner">
    <div v-for="charity in filterchards">
      <div class="card chartycard">
        <img class="card-img-top" :src="charity.src" alt="Charty logo" />
        <div class="card-body">
          <h5>
            <router-link
              :to="`/charitypage/${charity.charityid}`"
              class="card-title"
              >{{ charity.name }}</router-link
            >
          </h5>
          <p class="card-text">{{ charity.details }}</p>
          <div class="btncontainer">
            <base-button class="btn"
              ><router-link :to="`/donate-form/${charity.charityid}`"
                >تبرع</router-link
              ></base-button
            >
            <base-button class="btn"
              ><router-link :to="`/volunteer-form/${charity.charityid}`"
                >تطوع</router-link
              ></base-button
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchtype: null,
      items: ["الاسم", "التخصص", "المكان"],

      //من الباك المفروض فال change
      specializations: ["كفاله ايتام", "رعايه كبار مسنين"],
      places: ["حي الجامعه", "جديله"],

      searchvalue: null,
      searchvalueerror: null,
      //بتيجي من الباك مع ال mount اول م يفتح يجيب كل الداتا بتاعت الجمعيات
      charityname: "",
      //من الباك الداتا الي هتتحط غالكروت
      //مفروض هجيب الصوره كمان وال id
      charitydata: [
        {
          src: require("@/assets/rsala.png"),
          name: "جمعيه رساله",
          details: `
            الان اصبح لرسالة اكثر من 60 فرعا منتشرة في انحاء مصر و يتطوع بها كل عام اكثر
            من 200 الف متطوع يخدمون ملايين المصريين في حوالي 30 نشاط تطوعي تشمل رعاية
            الايتام و خدمة المسنين و ايواء اطفال الشوارع و خدمة المكفوفين و الصم و ذوي
            الاحتياجات الخاصة و دروس التقوية المجانية و محو الامية و معارض الملابس
            المستعملة و التبرع بالدم و تعليم الكمبيوتر و اللغات و التنمية البشرية و القرآن
            الكريم و مساعدات للمحتاجين و قوافل الخير للقرى الفقيرة و القوافل الطبية و علاج
            الادمان و اطعام المساكين و عمل مشاريع انتاجية للفقراء و اعمار المساجد و
            المدارس و تحقيق الاماني لاطفال السرطان و التوعية الاخلاقية للشباب و تنظيف
            الشوارع و الحدائق و نشر السرور بين الناس و الرفق بالحيوان.`,
          charityid: 123,
        },
        {
          src: require("@/assets/lifemaker.jpg"),
          name: "جمعيه صناع الحياه",
          details: `
            مؤسسة صناع الحياة مصر هادفة للربح أسست عام وتعمل طبقا لقانون
            الجمعيات والمؤسسات الأهلية المصري. المؤسسة قائمة على التطوع وتعمل
            منذ نشأتها على تنمية الشباب لبناء قدراتهم من أجل العمل على تنمية
            المجتمعات والاستجابة لاحتياجاتهم الإنسانية والإغاثية. المؤسسة تعمل
            مباشرةً من خلال مكاتبها وفروعها المنتشرة في أنحاء الجمهورية وكذا من
            خلال الجمعيات والمنظمات الشريكة في مجالات تنمية الشباب، التعليم،
            الصحة، سبل كسب العيش والاحتياجات الأساسية والبيئة. صناع الحياة هي
            حركة تطوعية غير حكومية وغير دينية وغير حزبية وغير سياسية والتي تعمل
            منذ نشأتها في عام 2004 إلى تحريك أفضل ما في الروح البشرية للحد من
            معاناة الإنسان ولحماية حياته وحقوقه. أسس صناع الحياة`,
          charityid: 124,
        },
        {
          src: require("@/assets/lifemaker.jpg"),
          name: "جمعيه صناع الحياه",
          details: `
            مؤسسة صناع الحياة مصر هادفة للربح أسست عام وتعمل طبقا لقانون
            الجمعيات والمؤسسات الأهلية المصري. المؤسسة قائمة على التطوع وتعمل
            منذ نشأتها على تنمية الشباب لبناء قدراتهم من أجل العمل على تنمية
            المجتمعات والاستجابة لاحتياجاتهم الإنسانية والإغاثية. المؤسسة تعمل
            مباشرةً من خلال مكاتبها وفروعها المنتشرة في أنحاء الجمهورية وكذا من
            خلال الجمعيات والمنظمات الشريكة في مجالات تنمية الشباب، التعليم،
            الصحة، سبل كسب العيش والاحتياجات الأساسية والبيئة. صناع الحياة هي
            حركة تطوعية غير حكومية وغير دينية وغير حزبية وغير سياسية والتي تعمل
            منذ نشأتها في عام 2004 إلى تحريك أفضل ما في الروح البشرية للحد من
            معاناة الإنسان ولحماية حياته وحقوقه. أسس صناع الحياة`,
          charityid: 125,
        },
        {
          src: require("@/assets/rsala.png"),
          name: "جمعيه رساله",
          details: `
            الان اصبح لرسالة اكثر من 60 فرعا منتشرة في انحاء مصر و يتطوع بها كل عام اكثر
            من 200 الف متطوع يخدمون ملايين المصريين في حوالي 30 نشاط تطوعي تشمل رعاية
            الايتام و خدمة المسنين و ايواء اطفال الشوارع و خدمة المكفوفين و الصم و ذوي
            الاحتياجات الخاصة و دروس التقوية المجانية و محو الامية و معارض الملابس
            المستعملة و التبرع بالدم و تعليم الكمبيوتر و اللغات و التنمية البشرية و القرآن
            الكريم و مساعدات للمحتاجين و قوافل الخير للقرى الفقيرة و القوافل الطبية و علاج
            الادمان و اطعام المساكين و عمل مشاريع انتاجية للفقراء و اعمار المساجد و
            المدارس و تحقيق الاماني لاطفال السرطان و التوعية الاخلاقية للشباب و تنظيف
            الشوارع و الحدائق و نشر السرور بين الناس و الرفق بالحيوان.`,
          charityid: 126,
        },
      ],
    };
  },
  methods: {
    selectsearchtype(e) {
      this.searchvalueerror = null;
      if (e.target.value == 1) this.searchtype = "الاسم";
      if (e.target.value == 2) this.searchtype = "التخصص";
      if (e.target.value == 3) this.searchtype = "المكان";
    },
    click() {
      this.searchvalueerror = null;
      if (this.searchvalue == null) this.searchvalueerror = "مطلوب";
      //هيتبعت للباك
      else {
        let searchcategory = {
          searchtype: this.searchtype,
          searchvalue: this.searchvalue,
        };
        //الي هيرجع معلومات عن الجمعيات هتظهر فالكروت
      }
    },
  },
  computed: {
    filterchards: function () {
      return this.charitydata.filter((charity) => {
        return charity.name.match(this.charityname);
      });
    },
  },
  mounted(){
    //مفروض يجيب كل الجمعيات  بتاعتها زي التقسيمه الي فوق فالاراي
  },
};
</script>

<style scoped>
.tabheader{ 
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
div > div {
  display: flex;
  flex-direction: row-reverse;
  width: 45vw;
  justify-content: space-around;
  margin: 5px 0px;
  align-items: baseline;
}
select {
  width: 15vw;
  text-align: right;
}
input {
  text-align: right;
}

.charitiescontiner {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 90vw;
  flex-wrap: wrap;
}
.card {
  width: 33vw;
}
.card-img-top {
  height: 19vh;
  width: 27vw;
}
.chartycard {
  display: flex;
  flex-direction: column;
  text-align: right;
  align-items: center;
}
.card-body {
  display: flex;
  flex-direction: column;
  width: auto;
  align-items: center;
}
.card-title {
  color: black;
  font-weight: 500;
  line-height: 1.2;
  margin-bottom: 0.75rem;
}
a {
  color: white;
  text-decoration: none;
}
.btncontainer {
  width: 29vw;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.btn {
  width: 12vw;
  margin-top: 0px;
}
</style>
