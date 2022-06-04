<template>
  <h6>الخدمات المدعومه</h6>

  <form class="card">
    <div>
      <p>اسم الجهه المقدمه للخدمه : {{ supportservices.supportservicessupplier }}</p>
    </div>
    <div>
      <p>العنوان : {{ supportservices.supportservicesaddress }}</p>
    </div>
    <div>
      <p>الوقت المتاح فيه الخدمه : {{ supportservices.supportservicestime }}</p>
    </div>
    <div>
      <p>نوع الخدمه : {{ supportservices.supportservicestype }}</p>
    </div>
    <div>
      <p>{{ supportservices.supportservicesdetails }}</p>
    </div>
  </form>

  <form class="card">
    <div>
      <p>اسم الجهه المقدمه للخدمه : {{ supportservices.supportservicessupplier }}</p>
    </div>
    <div>
      <p>العنوان : {{ supportservices.supportservicesaddress }}</p>
    </div>
    <div>
      <p>الوقت المتاح فيه الخدمه : {{ supportservices.supportservicestime }}</p>
    </div>
    <div>
      <p>نوع الخدمه : {{ supportservices.supportservicestype }}</p>
    </div>
    <div>
      <p>{{ supportservices.supportservicesdetails }}</p>
    </div>
  </form>

  <form class="card">
    <div>
      <p>اسم الجهه المقدمه للخدمه : {{ supportservices.supportservicessupplier }}</p>
    </div>
    <div>
      <p>العنوان : {{ supportservices.supportservicesaddress }}</p>
    </div>
    <div>
      <p>الوقت المتاح فيه الخدمه : {{ supportservices.supportservicestime }}</p>
    </div>
    <div>
      <p>نوع الخدمه : {{ supportservices.supportservicestype }}</p>
    </div>
    <div>
      <p>{{ supportservices.supportservicesdetails }}</p>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      //ده هيجي من الباك اول م ي mount function
        supportservices : {
          supportservicessupplier: "عياده د/ احمد محمد",
          supportservicesaddress: "شارع المشاية السفلية، اول المنصورة، الدقهلية",
          supportservicestime: "يوم الجمعه من 10 صباحا و حتي 6 مسائا",
          supportservicestype: "كشف مجاني",
          supportservicesdetails: ". خصصت عياده د/ احمد محمد الموجوده ف ش المشايه السفليه بمديه المنصوره بمحافظة الدقهلية، يوم الجمعه من الساعه ال10 صباحا وحتي الساعه ال6 مسائا لتقديم الخدمة الصحية المتكاملة بشكل مجاني لغير القادرين بمدينه المنصوره والقري المجاوره لها",
        }
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
  align-items: flex-end;
  justify-content: space-between;
}

form > div > p {
  margin-left: 5px;
  text-align: right;
}

a{
  color: white;
}

a:hover{
  text-decoration: none;
}
</style>  