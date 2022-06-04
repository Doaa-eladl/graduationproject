<template>
  <h6>المحاضرات</h6>

  <div class="card">
    <form>
      <div>
        <p>اسم الجمعيه : {{ lecture.charityname }}</p>
      </div>
      <div>
        <p>اسم المحاضر : {{ lecture.lecturername }}</p>
      </div>
      <div>
        <p>عنوان المحاضره : {{ lecture.lecturetitle }}</p>
      </div>
      <div>
        <p>تخصص المحاضره : {{ lecture.lecturespecialty }}</p>
      </div>
      <div>
        <p>عدد ساعات المحاضره : {{ lecture.lecturehours }} ساعات</p>
      </div>
      <div>
        <p>تاريخ المحاضره : {{ lecture.lecturedate }}</p>
      </div>
      <div>
        <p>الفرع المقام به المحاضره : {{ lecture.charitybranchname }}</p>
      </div>
      <div>
        <p>{{ lecture.lecturedetails }}</p>
      </div>

      <div class="volunteerbtn">
        <base-button class="volunteerbtn">
          <router-link to="/attendlecture">تسجيل حضور</router-link>
        </base-button>
      </div>
    </form>
  </div>

  <div class="card">
    <form>
      <div>
        <p>اسم الجمعيه : {{ lecture.charityname }}</p>
      </div>
      <div>
        <p>اسم المحاضر : {{ lecture.lecturername }}</p>
      </div>
      <div>
        <p>عنوان المحاضره : {{ lecture.lecturetitle }}</p>
      </div>
      <div>
        <p>تخصص المحاضره : {{ lecture.lecturespecialty }}</p>
      </div>
      <div>
        <p>عدد ساعات المحاضره : {{ lecture.lecturehours }} ساعات</p>
      </div>
      <div>
        <p>تاريخ المحاضره : {{ lecture.lecturedate }}</p>
      </div>
      <div>
        <p>الفرع المقام به المحاضره : {{ lecture.charitybranchname }}</p>
      </div>
      <div>
        <p>{{ lecture.lecturedetails }}</p>
      </div>

      <div class="volunteerbtn">
        <base-button class="volunteerbtn">
          <router-link to="/attendlecture">تسجيل حضور</router-link>
        </base-button>
      </div>
    </form>
  </div>

  <div class="card">
    <form>
      <div>
        <p>اسم الجمعيه : {{ lecture.charityname }}</p>
      </div>
      <div>
        <p>اسم المحاضر : {{ lecture.lecturername }}</p>
      </div>
      <div>
        <p>عنوان المحاضره : {{ lecture.lecturetitle }}</p>
      </div>
      <div>
        <p>تخصص المحاضره : {{ lecture.lecturespecialty }}</p>
      </div>
      <div>
        <p>عدد ساعات المحاضره : {{ lecture.lecturehours }} ساعات</p>
      </div>
      <div>
        <p>تاريخ المحاضره : {{ lecture.lecturedate }}</p>
      </div>
      <div>
        <p>الفرع المقام به المحاضره : {{ lecture.charitybranchname }}</p>
      </div>
      <div>
        <p>{{ lecture.lecturedetails }}</p>
      </div>

      <div class="volunteerbtn">
        <base-button class="volunteerbtn">
          <router-link to="/attendlecture">تسجيل حضور</router-link>
        </base-button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //ده هيجي من الباك اول م ي mount function
      lecture: {
        charityname: "جمعيه رساله",
        lecturername: "ا/محمد احمد",
        lecturetitle: "الفرق بين الاداره و القياده",
        lecturespecialty: "اداره مشروعات",
        lecturehours: "4",
        lecturedate: "01/808/2022",
        charitybranchname: "المنصوره",
        lecturedetails:
          "هناك اختلاف كبير بين المفهومين من أكثر من ناحية، ونقطة الاختلاف الأهم بين الإدارة والقيادة هي ما تركز عليه كل منهما، إذ تضع الإدارة كل تركيزها على المخرجات أي نتائج الأداء والمكونات المادية في المنظمة مع إهمال العنصر البشري، وعكس ذلك تماماً في القيادة إذ تركز بشكل كبير على العنصر البشري وتهتم به وبتنمية مهاراته وقدراته وتدريبه؛ لتحفيزه على أداء العمل وإنجاز الأهداف",
      },
    };
  },
};
</script>

<style scoped>
.card {
  margin-top: 10px;
  width: 44vw;
  padding: 5px;
  border-radius: 10px;
}

h6 {
  align-self: end;
  margin: 5px auto;
  margin-top: 10px;
  font-size: 20px;
}
form {
  display: flex;
  flex-direction: column;
  margin: 5px;
  align-items: center;
  justify-content: space-between;
  align-items: end;
  padding: 5px 20px;
}
form > div {
  display: flex;
  flex-direction: row-reverse;
  margin: 5px;
  align-items: flex-start;
  justify-content: space-between;
}

form > div > p {
  margin-left: 5px;
  text-align: right;
}

.volunteerbtn {
  width: 25vw;
  margin: 0px auto;
}

a {
  color: white;
}

a:hover {
  text-decoration: none;
}
</style>
