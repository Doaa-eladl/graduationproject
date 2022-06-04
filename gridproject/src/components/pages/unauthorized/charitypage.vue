<template>
  <div class="charitypagewrapper">
    <div>
      <img :src="charitydata.charitylogo" alt="charity logo" />
      <h1>{{ charitydata.charityname }}</h1>
    </div>
    <div class="btncontainer">
      <base-button class="btn"
        ><router-link :to="`/donate-form/${charitydata.charityid}`"
          >تبرع</router-link
        ></base-button
      >
      <base-button class="btn"
        ><router-link :to="`/volunteer-form/${charitydata.charityid}`"
          >تطوع</router-link
        ></base-button
      >
    </div>
    <div class="aboutchrity">
      <h4>: نبذه عن الجمعيه</h4>
      <p>{{ charitydata.aboutcharit }}</p>
    </div>
    <div class="aboutchrity">
      <h4>: انشطة الجمعيه</h4>
      <div class="activitiescontainer">
        <div
          class="card chartycard"
          v-for="activities in charitydata.activities"
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
    <div class="chrityspecialties">
      <h4>: تخصصات الجمعيه</h4>
      <ul>
        <li v-for="item in charitydata.chrityspecialties">{{ item }}</li>
      </ul>
    </div>
    <div class="chrityspecialties">
      <h4>: فروع الجمعيه</h4>
      <ul>
        <li v-for="item in charitydata.chrityspecialties">{{ item }}</li>
      </ul>
    </div>
    <div class="btncontainer">
      <base-button class="btn"
        ><router-link :to="`/donate-form/${charitydata.charityid}`"
          >تبرع</router-link
        ></base-button
      >
      <base-button class="btn"
        ><router-link :to="`/volunteer-form/${charitydata.charityid}`"
          >تطوع</router-link
        ></base-button
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //من الباك الداتا الي هتتحط غالكروت
      //مفروض هجيب الصوره كمان وال id
      charitydata: {
        charityid: 123,
        charityname: "جمعيه رساله",
        charitylogo: require("@/assets/rsalalogo.png"),
        aboutcharit: `
        نشأت “رسالة” يوم 25 يونيو سنة 1999 كنشاط طلابي في كلية الهندسة بجامعة
        القاهرة على ايدي مجموعة من الطلاب الذين درسوا كورس اخلاقيات مهنة الهندسة
        في قسم هندسة الاتصالات بالكلية على يد د. شريف عبد العظيم . 1999 عام كان
        هدف الفريق المؤسس نشر التطوع و الايجابية في المجتمع و زرع الانتماء و
        محاربة منطق “وانا مالي ” و غيره من الافكار السلبية و قد اختاروا اسم
        “رسالة” تعبيرا عن ان هدف الفريق هو نشر رسالة التطوع و الايجابية و
        التعاون في الكلية و المجتمع باسره. عام 2000 تحولت “رسالة” في عام 2000
        الى جمعية خيرية مشهرة بوزارة الشئوون الاجتماعية بعد تبرع قريب احد
        الطالبات بالكلية بقطعة ارض للفريق كي ينشروا رسالتهم خارج الجامعة. و مع
        مرور الوقت اتسعت انشطة جمعية رسالة و زاد عدد متطوعيها و تعددت فروعها حتى
        اصبحت احد اكبر الجمعيات الخيرية بمصر و اكبر كيان قائم على التطوع في
        العالم العربي.`,
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
        chrityspecialties: [
          "المكفوفين وضعاف البصر",
          "الإطعام",
          "أسر رسالة بالجامعات",
          "تحفيظ القران",
          "أصدقاء البيئه",
          "أطفال قد الحياه",
          "المكفوفين وضعاف البصر",
          "الإطعام",
          "أسر رسالة بالجامعات",
          "تحفيظ القران",
          "أصدقاء البيئه",
          "أطفال قد الحياه",
          "المكفوفين وضعاف البصر",
          "الإطعام",
          "أسر رسالة بالجامعات",
          "تحفيظ القران",
          "أصدقاء البيئه",
          "أطفال قد الحياه",
        ],
        chrityspecialties: [
          "الجيزه - الدقي",
          "الجيزه - فيصل",
          "الجيزه - 6أكتوبر",
          "الجيزه - الحوامديه",
          "الجيزه - الصف",
          "القاهره - مدينه نصر",
          "الجيزه - الدقي",
          "الجيزه - فيصل",
          "الجيزه - 6أكتوبر",
          "الجيزه - الحوامديه",
          "الجيزه - الصف",
          "القاهره - مدينه نصر",
          "الجيزه - الدقي",
          "الجيزه - فيصل",
          "الجيزه - 6أكتوبر",
          "الجيزه - الحوامديه",
          "الجيزه - الصف",
          "القاهره - مدينه نصر",
        ],
      },
    };
  },
  mounted() {
    //مفروض هنجيب الداتا من الباك بناءا علي ال id الي مبعوت فال url
    // هتتبعت للباك عشان يريتيرن الداتا بتاعت الاكتيفيتي this.$route.params.charityid
  },
};
</script>

<style scoped>
.charitypagewrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 110px 0px;
}
img {
  width: 75vw;
  height: 25vh;
}
h1 {
  margin-top: 15px;
}
h4 {
  text-align: right;
  padding-bottom: 25px;
  width: 75vw;
  border-bottom: solid 3px #acacac;
}
.aboutchrity {
  display: flex;
  width: 75vw;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: right;
  margin-top: 20px;
}
.activitiescontainer {
  display: flex;
  width: 75vw;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  margin: 15px 0px;
}
.card {
  width: 22vw;
  padding-right: 10px;
  padding-bottom: 10px;
  margin: 15px 0px;
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
  width: 35vw;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 20px 0px 30px 0px;
}
.btn {
  width: 16vw;
  margin-top: 0px;
}
.chrityspecialties {
  display: flex;
  width: 75vw;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  text-align: right;
  margin-top: 20px;
  flex-wrap: wrap;
}
ul {
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: end;
  flex-wrap: wrap;
}
li {
  padding: 10px;
}
</style>
