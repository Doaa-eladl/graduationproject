<template>
  <div class="activitydetails">
    <img :src="activitydata.src" alt="project for poor people" />
    <div>
      <h2>مشروع رزق حلال</h2>
      <p>{{ activitydata.details }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activitydata: {
        src: require("@/assets/project.jpg"),
        details: `
      ونواصل مسيرة مشروعنا الأهم (رزق حلال ) وأهدافه؛ من خلاله نواصل العمل على
      مسيرة مساعدة الأسر شديدة الفقر (تحت خط الفقر المدقع). هدفنا كان تحقيق
      الاستقلال الاقتصادي؛ من خلال منحهم مشروعات متناهية الصغر مدرة للدخل. نفذنا
      728 مشروعًا متناهي الصغر للأسر الأكثر احتياجًا. مشروع “رزق حلال”، بدأ
      تنفيذه منذ ثلاثة أعوام، سلمنا خلالهم أكثر من 2500 مشروع متناهي الصغر
      ومتنوع: تروسيكل ومشروعات أخرى متنوعة ( بقالة – تربية أغنام – خياطة – سباكة
      – تربية أبقار).`,
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
.activitydetails {
  margin: 200px 0px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
img {
  width: 30vw;
}
h2 {
  margin-bottom: 25px;
}
p {
  width: 40vw;
}
</style>
