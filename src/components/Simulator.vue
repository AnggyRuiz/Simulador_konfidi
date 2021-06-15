<template>
  <div class="main">
    <h1>Konfidi</h1>
    <h3 style="text-align: center">Simulador de Pagos Internacionales</h3>
    <div style="display: none; width: 100%" id="tabla">
      <div class="container-table">
        <div class="bank">
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
        <div class="konfidi">
          <h1>Konfidi</h1>
          <span>Pago de:</span>
          <h3>{{ amountFormat }} USD</h3>

          <div class="amountK">
            <span>Costo de:</span>
            <h2>{{ konfidi }}</h2>
          </div>
          <br />
          <span>Tasas y tarifas:</span>
          <div class="logoK">
            <img src="../assets/img/cheque.svg" alt="" />
            <h4>Comisión: 0 USD</h4>
          </div>
          <div class="logoK">
            <img src="../assets/img/cheque.svg" alt="" />
            <h4>TRM</h4>
          </div>
        </div>
        <div class="bank">
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
        <img
          style="width: 60%; padding-left: 20%"
          src="../assets/img/Requisitos.png"
          alt=""
        />
      </div>
    </div>
    <div class="page-center" id="page-center">
      <div class="container">
        <div class="title-center">
          <img src="../assets/img/money.svg" alt="" />
          <h3>Sin comisiones</h3>
        </div>
        <div class="title-center">
          <img
            style="width: 45%; padding-left: 15%"
            src="../assets/img/globalization.svg"
            alt=""
          />
          <h3>Sin transferencias internacionales</h3>
        </div>
        <div class="title-center">
          <img
            style="width: 50%; padding-left: 20%"
            src="../assets/img/pay.svg"
            alt=""
          />
          <h3>Pagas lo que tengas que pagar!</h3>
        </div>
        <div class="title-center">
          <img style="width: 63%" src="../assets/img/mundo.svg" alt="" />
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
    checkForm() {
      console.log(this.TRM);
      document.getElementById("tabla").style.display = "block";
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
  height: 100vh;
  flex-direction: column;
}
.title-center {
  display: flex;
  flex-direction: column;
  padding-left: 10%;
  margin-top: 10%;
  color: #231f20;
}
.button {
  width: 50%;
}
.container {
  padding-bottom: 6%;
  background: #fff2cc;
  display: flex;
  width: 90%;
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
  margin-top: 3%;
  background: #263238;
  color: #fff;
  font-weight: bold;
  width: 15%;
  border-radius: 20px;
  border: #263238;
  height: 6%;
  font-size: 1.5em;
}
.container-table {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
}
.bank {
  box-shadow: 0px -21px 40px rgb(0 0 0 / 15%);
  width: 23%;
  text-align: center;
  border-radius: 7%;
  height: 500px;
}
.bank h1 {
  width: 100%;
  text-align: center;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  font-size: 2em;
}
.konfidi {
  font-size: 1.2em;
  border-radius: 7%;
  background-image: url("../assets/img/Morraca.png");
  background-repeat: no-repeat;
  text-align: center;
  width: 49%;
  margin-bottom: 0;
  height: 700px;
}
.konfidi h1 {
  margin-top: 20%;
  width: 80%;
  text-align: center;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}
.konfidi h2 {
  width: 80%;
  font-size: 1.2em;
}
.konfidi span {
  padding-right: 130px;
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
  padding-left: 20%;
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
.bankBanc {
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