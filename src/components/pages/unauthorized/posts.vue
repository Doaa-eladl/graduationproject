<template>
  <div class="postscontainer">
    <div class="card" v-if=auth >
      <textarea type="text" placeholder="اكتب منشور" v-model="postdata" />
      <small class="form-text text-muted" v-show="posterror">{{
        posterror
      }}</small>
      <base-button class="publishbtn" @click="publishpost">نشر</base-button>
    </div>
    <h2>اخر الاخبار</h2>
    <div class="post" v-for="item in posts">
      <h3>{{ item.username }}</h3>
      <h7 v-if="useridentity != ''">{{ item.useridentity }}</h7>
      <p>{{ item.postdata }}</p>
      <div class="comment">
        <textarea type="text" placeholder="اكتب تعليق" v-model="commentdata" />
        <small class="form-text text-muted" v-show="commenterror">{{
          commenterror
        }}</small>
        <base-button class="publishbtn" @click="publishcomment(item.postid)"
          >نشر</base-button
        >
      </div>
      <h4>التعليقات</h4>
      <div class="comment" v-for="i in item.comments">
        <h5>{{ i.username }}</h5>
        <p>{{ i.commentdata }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      postdata: "",
      commentdata: "",
      posterror: "",
      commenterror: "",
      //نموذج للداتا الي مفروض تيجي من الباك اول م الصفحه تشتغل
      posts: [
        {
          postid: 124,
          userid: 1789,
          username: "محمود السيد",
          useridentity: "مسؤول جمعيه رساله",
          postdata: `قام نشاط قوافل خارجية بجمعية رسالة بتوزيع أكثر من ١٠٠ وجبة إطعام جاهزة علي أكتر من ٤٠٠ أسرة علاوة علي توزيع أكثر من ١٢٥٠ شنطة مواد غذائية علي ١٢٥٠ أسرة بمشاركة أكتر من ٢٨٠ متطوع من متطوعي جمعية رسالة.`,
          comments: [
            {
              userid: 555,
              username: `محمود أحمد`,
              commentdata: `عاش ماشاء الله`,
            },
            {
              userid: 545,
              username: `أحمد محمد`,
              commentdata: `متي موعد التوزيع القادم`,
            },
          ],
        },
        {
          postid: 124,
          userid: 1789,
          username: "أحمد السيد",
          useridentity: "",
          postdata: `حد عارف جمعيه في محيط حي الجامعه المنصوره`,
          comments: [
            {
              userid: 555,
              username: `عبد السلام محمد`,
              commentdata: `ممكن تشوف جمعيه خير زاد`,
            },
          ],
        },
      ],
    };
  },
  mounted() {
    //مفروض يجيب كل البوستس بالكومنتات بتاعتها زي التقسيمه الي فوق فالاراي
  },
  methods: {
    publishpost() {
      //هنعب اليوزر اي دي الي متخزن فاللوكل استوريج ولو مش موجوده هنظهر alert to sign in
      //هنبعت البوست داتا
      //فالباك مفروض يكريت اي دي لكل بوست
      this.posterror = null;
      if (!localStorage.getItem("userid")) alert("you must sign in first");
      else if (this.postdata == "") this.posterror = "مطلوب";
      else {
        let post = {
          postdata: this.postdata,
          userid: localStorage.getItem("userid"),
        };
      }
    },
    publishcomment(postid) {
      //هنعب اليوزر اي دي الي متخزن فاللوكل استوريج ولو مش موجوده هنظهر alert to sign in
      //هنبعت البوست داتا
      //فالباك مفروض يكريت اي دي لكل بوست
      this.commenterror = null;
      if (!localStorage.getItem("userid")) alert("you must sign in first");
      else if (this.commentdata == "") this.commenterror = "مطلوب";
      else {
        let post = {
          commentdata: this.commentdata,
          userid: localStorage.getItem("userid"),
          postid: postid,
        };
      }
    },
  },
};
</script>

<style scoped>
.postscontainer {
  display: flex;
  flex-direction: column;
}
.card {
  width: 40vw;
  margin: 20px 0px;
  border-radius: 5px;
  background-color: #d5d2d2;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0px;
}
.post {
  width: 40vw;
  margin: 20px 0px;
  border-radius: 5px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  text-align: right;
  padding: 10px;
}
.comment > p {
  align-self: end;
  padding: 10px 0px 0px 0px;
  margin-bottom: 2px;
}
h3 {
  border-bottom: solid 3px #acacac;
  width: 38vw;
  margin-bottom: 0px;
}
h7 {
  margin-bottom: 15px;
}
h5 {
  width: 38vw;
  margin-bottom: 0px;
  padding-right: 10px;
}
.comment {
  width: 38vw;
  margin: 10px 0px;
  border-radius: 5px;
  background-color: #d5d2d2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
}
textarea {
  width: 32vw;
  border-radius: 5px;
  border: solid 3px white;
  text-align: right;
}
.publishbtn {
  margin-top: 10px;
  width: 10vw;
  padding: 2px 5px;
}
small {
  color: #f84949 !important;
}
</style>
