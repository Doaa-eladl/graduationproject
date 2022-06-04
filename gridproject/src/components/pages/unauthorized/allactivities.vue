<template>
  <div class="activitescontainer">
    <h1>أنشطه كل الجمعيات</h1>
    <div>
      <input
        type="text"
        placeholder="بحث عن جمعيه بالاسم"
        v-model="charityname"
      />
    </div>

    <div
      v-for="charityactivity in filteractivities"
      class="eachcharityactivities"
    >
      <h4>{{ charityactivity.charityname }}</h4>
      <div class="charitiescontiner">
        <div
          class="card chartycard"
          v-for="activities in charityactivity.activities"
        >
          <img class="card-img-top" :src="activities.src" alt="Charty logo" />
          <div class="card-body">
            <h6 class="card-title">{{ activities.activityname }}</h6>
          </div>
          <p class="card-text">{{ activities.details }}</p>

          <div class="btncontainer">
            <base-button class="btn"
              ><router-link :to="`/activitydetails/${activities.activityid}`"
                >المزيد من التفاصيل</router-link
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
      charityname: "",
      //من الباك الداتا الي هتتحط غالكروت
      //مفروض هجيب الصوره كمان وال id
      activitydata: [
        {
          charityname: "جمعيه صناع الحياه",
          activities: [
            {
              src: require("@/assets/childrenhealth.jpg"),
              activityname: "صحة أطفالنا",
              details: `“صحة أطفالنا” واحد من أهم مشروعات صناع الحياة خلال عام 2018، عملنا على خفض معدلات وفاة الأطفال حديثي الولادة`,
              activityid: 126,
            },
            {
              src: require("@/assets/schooldevelopment.jpg"),
              activityname: "مشروع تطوير مدرسة النور والأمل للمكفوفين",
              details: `طورنا مدرسة النور والأمل للمكفوفين في بني سويف تطويرًا يشمل أعمال البنية التحتية وتوفير احتياجات المدرسة اللوجستية والأدوات التعليمية للمكفوفين.رفعنا كفاءة المعلمين وقدمنا جلسات دعم نفسي للطلاب وأولياء الأمور`,
              activityid: 127,
            },
            {
              src: require("@/assets/project.jpg"),
              activityname: "مشروع رزق حلال",
              details: `استكملنا عملنا على مساعدة الأسر شديدة الفقر (تحت خط الفقر المدقع)، وتحقيق الاستقلال الاقتصادي؛ من خلال منحهم مشروعات متناهية الصغر مدرة للدخل`,
              activityid: 128,
            },
          ],
        },
        {
          charityname: "جمعيه رساله",

          activities: [
            {
              src: require("@/assets/rsala.png"),
              activityname: "تحقيق الأمانى",
              details: `يهتم النشاط ب اطفال مرضى الأورام والحالات المتأخرة`,
              activityid: 123,
            },
            {
              src: require("@/assets/rsala.png"),
              activityname: "المشروعات الطبية",
              details: `مركز رسالة الطبي والذي يضم  نخبة من امهر الأطباء بمختلف التخصصات`,
              activityid: 124,
            },
            {
              src: require("@/assets/rsala.png"),
              activityname: "القوافل الخارجية",
              details: `امداد المساعدات و الاعانات الإغاثية قصيرة المدى للقرى على خط الفقر`,
              activityid: 125,
            },
          ],
        },
      ],
    };
  },
  computed: {
    filteractivities: function () {
      return this.activitydata.filter((charity) => {
        return charity.charityname.match(this.charityname);
      });
    },
  },
  mounted(){
    //مفروض يجيب كل الاكتيفيتي  بتاعتها زي التقسيمه الي فوق فالاراي
  },
};
</script>

<style scoped>
.activitescontainer {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 15px 0px;
}
div > div {
  display: flex;
  flex-direction: row-reverse;
  width: 45vw;
  justify-content: space-around;
  margin: 5px 0px;
  align-items: baseline;
}
input {
  text-align: center;
  width: 25vw;
  margin: 25px 0px 5px 0px;
}
.eachcharityactivities {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
h4 {
  padding-bottom: 5px;
  width: 75vw;
  border-bottom: solid 3px #acacac;
}

.charitiescontiner {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 90vw;
  flex-wrap: wrap;
}
.card {
  width: 22vw;
  padding-right: 10px;
  padding-bottom: 10px;
}
.card-img-top {
  height: 15vh;
  width: 21vw;
  margin-left: 10px;
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
  width: 18vw;
  margin-top: 0px;
}
</style>
