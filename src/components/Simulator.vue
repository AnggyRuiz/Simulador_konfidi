<template>
  <div class="main">
    <div style="display: flex">
      <img
        style="display: none; width: 40px; padding-left: 30px"
        id="arrow"
        src="../assets/img/arrow.svg"
        alt=""
        @click="back"
      />
      <h1>Simulador de Pagos Internacionales</h1>
    </div>
    <div style="display: none; width: 100%" id="tabla">
      <div class="container-table">
        <div style="border: 2px solid #f4f4f4" class="bank">
          <div class="bankBanc">
            <h1>Bancolombia</h1>
          </div>
          <span>Pago de:</span>
          <h3>{{ amountFormat }} USD</h3>

          <div class="amount">
            <span>Costo de:</span>
            <h2>{{ valueBanc }}</h2>
          </div>
          <br />
          <span>Tasas y tarifas:</span>

          <div class="logo">
            <img src="../assets/img/cheque.svg" alt="" />
            <h4>Comisión: 32 USD</h4>
          </div>

          <div class="logo">
            <img src="../assets/img/cheque.svg" alt="" />
            <h4>TRM + 1.8%</h4>
          </div>
        </div>
        <div
          style="
            background-color: #fff;
            box-shadow: 0px -21px 40px rgb(0 0 0 / 15%);
          "
          class="bank"
        >
          <h1>Konfidi</h1>
          <span>Pago de:</span>
          <h3>{{ amountFormat }} USD</h3>

          <div style="background-color: #fff2cc" class="amount">
            <span>Costo de:</span>
            <h2>{{ konfidi }}</h2>
          </div>
          <br />
          <span>Tasas y tarifas:</span>
          <div class="logo">
            <img src="../assets/img/cheque.svg" alt="" />
            <h4>Comisión: 0 USD</h4>
          </div>
          <div class="logo">
            <img src="../assets/img/cheque.svg" alt="" />
            <h4>TRM</h4>
          </div>
        </div>
        <div style="border: 2px solid #f4f4f4" class="bank">
          <div class="bankBanc">
            <h1>Davivienda</h1>
          </div>
          <span>Pago de:</span>
          <h3>{{ amountFormat }} USD</h3>

          <div class="amount">
            <span>Costo de:</span>
            <h2>{{ valueDav }}</h2>
          </div>
          <br />
          <span>Tasas y tarifas:</span>

          <div class="logo">
            <img src="../assets/img/cheque.svg" alt="" />
            <h4>Comisión: 20 USD</h4>
          </div>

          <div class="logo">
            <img src="../assets/img/cheque.svg" alt="" />
            <h4>TRM + 1.9%</h4>
          </div>
        </div>
      </div>
      <div>
        <br />
        <br />
        <div
          style="
            border-top: 1px solid #f4f4f4;
            border-bottom: 1px solid #f4f4f4;
            background-color: #f4f4f4;
            margin-left: 100px;
            margin-right: 100px;
          "
        >
          <div
            @click="req"
            style="
              display: flex;
              justify-content: space-between;
              padding-left: 20px;
              padding-right: 20px;
            "
          >
            <h3 style="padding: 20px; margin: 0">Paso a seguir</h3>
            <div id="down">
              <img
                style="width: 20px; padding-top: 20px"
                src="../assets/img/arrowdown.svg"
                alt=""
              />
            </div>
          </div>
          <div style="display: none" id="req">
            <img
              style="width: 60%; padding-left: 20%"
              src="../assets/img/Requisitos.png"
              alt=""
            />
          </div>
          <div @click="up" style="display: none; width: 20px; padding-left: 20px;" id="upload">
            <img src="../assets/img/upload.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div class="page-center" id="page-center">
      <div class="container">
        <div class="title-center">
          <img src="../assets/img/money.svg" alt="" />
          <br />
          <h3>Sin comisiones</h3>
        </div>
        <div class="title-center">
          <img
            style="width: 45%; padding-left: 30%"
            src="../assets/img/globalization.svg"
            alt=""
          />
          <br />
          <h3>Sin transferencias internacionales</h3>
        </div>
        <div class="title-center">
          <img
            style="width: 47%; padding-left: 20%"
            src="../assets/img/pay.svg"
            alt=""
          />
          <br />

          <h3>Pagas lo que tengas que pagar!</h3>
        </div>
        <div class="title-center">
          <img style="width: 65%" src="../assets/img/mundo.svg" alt="" />
          <br />

          <h3>Sin fronteras</h3>
        </div>
      </div>
      <form class="form-center">
        <input
          type="number"
          placeholder="$0"
          v-model="amount"
          v-on:keyup.enter="checkForm"
        />
        <p style="display: none" id="danger">Ingrese un valor</p>
        <br />
      </form>
      <button class="btn-center" @click="checkForm">Calcular</button>
    </div>
  </div>
</template>

<script>
import TrmApi from "trm-api";
const trmapi = new TrmApi();

export default {
  data() {
    return {
      amount: "",
      TRM: 0,
      valueBanc: 0,
      valueDav: 0,
      comBanc: 32,
      comDav: 20,
      konfidi: 0,
      amountFormat: 0,
    };
  },
  created() {
    trmapi
      .latest()
      .then((data) => {
        console.log(data);
        this.TRM = data.valor;
        console.log(this.TRM);
      })
      .catch((error) => console.log(error));
  },
  methods: {
    back() {
      location.reload();
    },
    req() {
      document.getElementById("req").style.display = "block";
      document.getElementById("down").style.display = "none";
      document.getElementById("upload").style.display = "block";
    },
    up() {
      console.log("entra");
      document.getElementById("req").style.display = "none";
      document.getElementById("down").style.display = "block";
      document.getElementById("upload").style.display = "none";
    },
    checkForm() {
      if (!this.amount) {
        document.getElementById("danger").style.display = "block";
      } else {
        console.log(this.TRM);
        document.getElementById("tabla").style.display = "block";
        document.getElementById("arrow").style.display = "block";
        document.getElementById("page-center").style.display = "none";
        console.log(this.amount);
        const options2 = { style: "currency", currency: "USD" };
        const numberFormat2 = new Intl.NumberFormat("en-US", options2);
        console.log(numberFormat2.format(this.amount));
        this.amountFormat = numberFormat2.format(this.amount);

        const trmBanc = this.TRM * 1.018;
        const trmDav = this.TRM * 1.019;
        console.log(trmDav);
        this.valueBanc = numberFormat2.format(
          (parseInt(this.amount) + this.comBanc) * trmBanc
        );
        console.log(this.valueBanc);
        this.valueDav = numberFormat2.format(
          (parseInt(this.amount) + this.comDav) * trmDav
        );
        console.log(this.valueDav);
        this.konfidi = numberFormat2.format(this.amount * this.TRM);
        console.log(this.konfidi);
      }
    },
  },
};
</script>

<style>
.main {
  display: flex;
  flex-direction: column;
}
h1 {
  color: #231f20;
  font-size: 3em;
  width: 100%;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  text-align: center;
}

.form {
  display: flex;
  width: 40%;
  padding: 5%;
}
.form img {
  padding-right: 5%;
}
.form h3 {
  width: 39%;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}

.btn {
  width: 20%;
  margin-left: 15%;
}
.page-center {
  display: flex;
  align-items: center;
  width: 100%;
  height: 80vh;
  flex-direction: column;
}
.title-center {
  display: flex;
  flex-direction: column;
  margin-top: 5%;
  color: #231f20;
}
.button {
  width: 50%;
}
.container {
  padding-bottom: 3%;
  background: #fff2cc;
  display: flex;
  width: 90%;
  justify-content: space-between;
  padding-left: 6%;
  border-radius: 15px;
}
input {
  margin-top: 15%;
  border: 1px solid #d8d8d8;
  padding: 10px;
  padding-left: 15px;
  font-family: "Nunito";
  font-size: 20px;
  border-radius: 10px;
  color: #0d1239;
}
.btn-center {
  margin-top: 30px;
  background: #263238;
  color: #fff;
  font-weight: bold;
  width: 15%;
  border-radius: 20px;
  border: #263238;
  height: 6%;
  font-size: 1.3em;
}
.container-table {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
}
.bank {
  width: 23%;
  text-align: center;
  border-radius: 7%;
  margin-top: 60px;
  height: 500px;
}
.bank h1 {
  width: 100%;
  text-align: center;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  font-size: 2em;
}
p {
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}
.konfidi {
  font-size: 1.2em;
  border-radius: 7%;
  background-image: url("../assets/img/Morraca.jpg");
  background-repeat: no-repeat;
  text-align: center;
  width: 40%;
  margin-bottom: 0;
  height: 700px;
}
.konfidi h1 {
  margin-top: 20%;
  width: 85%;
  text-align: center;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}
.konfidi h2 {
  width: 80%;
  font-size: 1.2em;
}
.konfidi span {
  padding-right: 73px;
  font-size: 1em;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}
.konfidi h3 {
  padding-right: 130px;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  font-size: 1em;
}
.logo {
  display: flex;
  padding-left: 15%;
  font-size: 1.2em;
}
.logo h4 {
  margin: 1%;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}

.logoK {
  display: flex;
  width: 80%;
  padding-left: 26%;
  font-size: 1em;
}
.logoK h4 {
  margin: 1%;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}
h2 {
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}
.amount {
  padding-top: 50px;
  background-color: #f4f4f4;
  height: 80px;
}

.amount h2 {
  margin: 0;
}
h3 {
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  margin: 0;
  margin-bottom: 4%;
}
span {
  font-size: 1.2em;
  margin: 0;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  color: #2c2a29;
}
.amountK {
  padding-bottom: 10px;
  padding-left: 33px;
}
.amountK h2 {
  margin: 0;
}
.req {
  border-bottom: 1px solid;
  /* border-top: 1px solid; */
  width: 28%;
  margin-left: 35%;
}
</style>