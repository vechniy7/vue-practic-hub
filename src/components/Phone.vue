<script setup>
import { ref } from 'vue';
const brand = ref("");
const model = ref("");
const color = ref("");
const price = ref("");
const phones = JSON.parse(localStorage.getItem("phones")) || [];

function addPhone() {
    const phone = {
        id: Date.now(),
        brand: brand.value,
        model: model.value,
        color: color.value,
        price: price.value,
    }

    console.log(phone);

    phones.push(phone);
    if (phones === false) {
        localStorage.setItem("phones", JSON.stringify(phones))
    } else {
        localStorage.setItem("phones", JSON.stringify([...phones]))
    }

}
</script>

<template>
    <div class="container">
        <div class="cardAdd">
            <div class="flex">
                <div class="left-area">
                    <h1>Добавление телефона</h1>
                    <form>
                        <input v-model="brand" type="text" placeholder="Бренд" />
                        <input v-model="model" type="text" placeholder="Модель" />
                        <input v-model="color" type="text" placeholder="Цвет" />
                        <input v-model="price" type="number" placeholder="Цена" />

                        <input @click="addPhone()" class="submit-button" type="button" value="Добавить" />
                    </form>
                </div>
            </div>
        </div>
        
    </div>
    <div v-for="phone in phones" class="card">
            <!-- Верхняя часть -->
            <div class="card__top">
                <!-- Изображение-ссылка товара -->
                <a href="#" class="card__image">
                    <img :src="phone.brand" />
                </a>
                <!-- Скидка на товар -->
                <div class="card__label">-10%</div>
            </div>
            <!-- Нижняя часть -->
            <div class="card__bottom">
                <!-- Цены на товар (с учетом скидки и без)-->
                <div class="card__prices">
                    <div class="card__price card__price--discount">
                        {{ phone.price }}
                    </div>
                    <div class="card__price card__price--common">
                        {{ phone.price }}
                    </div>
                </div>
                <!-- Ссылка-название товара -->
                <a href="#" class="card__title">
                    {{ phone.model }}
                </a>
            </div>
        </div>
</template>

<style scoped>
* {
    margin: 0;
    padding: 0;
}

body {
    background: -webkit-linear-gradient(90deg,
            rgb(199, 154, 207),
            rgb(59, 0, 60));
    background: -moz-linear-gradient(90deg, rgb(199, 154, 207), rgb(59, 0, 60));
    background: linear-gradient(90deg, rgb(199, 154, 207), rgb(59, 0, 60));
    font-family: Arial, Helvetica, sans-serif;
}

.container {
    width: 36%;
    margin: 170px auto 0px;
}

.cardAdd {
    background-color: white;
    border-radius: 15px;
    box-shadow: 0 0 20px -2px black;
}

.flex {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
}

.left-area {
    padding: 50px;
    width: 50%;
}

input {
    width: calc(100%-30px);
    height: 30px;
    border: 1px solid #d7d7d7;
    border-radius: 15px;
    padding: 5px 15px;
    border-bottom: 15px;
}

input:hover {
    box-shadow: 0 0 10px -3px rgb(175, 5, 5);
}

.submit-button {
    width: 100%;
    height: 40px;
    background-color: #d74545;
    color: white;
}

.right-area {
    padding: 50px;
    width: 50%;
    background-color: rgb(54, 1, 1);
    /* height: 250px; */
    border-radius: 0px 15px 15px 0px;
    color: white;
}

h1 {
    margin-bottom: 30px;
}

h3 {
    margin-bottom: 10px;
}

form {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

/* TOVARI */
.card__edit {
  display: block;
  width: 100%;
  font-weight: 400;
  font-size: 17px;
  color: #4aa833;
  padding: 10px;
  text-align: center;
  border: 1px solid #94c05b;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.2s;
  margin-top: 10px;
}

.card__edit:hover {
  border: 1px solid #3aff33;
  background-color: #33ff77;
  color: #fff;
}

.card__delete {
  display: block;
  width: 100%;
  font-weight: 400;
  font-size: 17px;
  color: #a83333;
  padding: 10px;
  text-align: center;
  border: 1px solid #c05b68;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.2s;
  margin-top: 10px;
}

.card__delete:hover {
  border: 1px solid #ff3333;
  background-color: #ff3333;
  color: #fff;
}

.card {
  width: 225px;
  min-height: 600px;
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  transition: 0.2s;
  position: relative;
}

.card:hover {
  box-shadow: 4px 8px 16px rgba(255, 102, 51, 0.2);
}

.card__top {
  flex: 0 0 220px;
  position: relative;
  overflow: hidden;
}

.card__image {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.card__image > img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: 0.2s;
}

.card__image:hover > img {
  transform: scale(1.1);
}

.card__label {
  padding: 4px 8px;
  position: absolute;
  bottom: 10px;
  left: 10px;
  background: #ff6633;
  border-radius: 4px;
  font-weight: 400;
  font-size: 16px;
  color: #fff;
}

.card__bottom {
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  padding: 10px;
}

.card__prices {
  display: flex;
  margin-bottom: 10px;
  flex: 0 0 50%;
}

.card__price::after {
  content: "₽";
  margin-left: 4px;
  position: relative;
}

.card__price--discount {
  font-weight: 700;
  font-size: 19px;
  color: #414141;
  display: flex;
  flex-wrap: wrap-reverse;
}

.card__price--discount::before {
  content: "Со скидкой";
  font-weight: 400;
  font-size: 13px;
  color: #bfbfbf;
}

.card__price--common {
  font-weight: 400;
  font-size: 17px;
  color: #606060;
  display: flex;
  flex-wrap: wrap-reverse;
  justify-content: flex-end;
}

.card__price--common::before {
  content: "Обычная";
  font-weight: 400;
  font-size: 13px;
  color: #bfbfbf;
}

.card__title {
  display: block;
  margin-bottom: 10px;
  font-weight: 400;
  font-size: 17px;
  line-height: 150%;
  color: #414141;
}

.card__title:hover {
  color: #ff6633;
}

.card__add {
  display: block;
  width: 100%;
  font-weight: 400;
  font-size: 17px;
  color: #70c05b;
  padding: 10px;
  text-align: center;
  border: 1px solid #70c05b;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.2s;
  margin-top: auto;
}

.card__add:hover {
  border: 1px solid #ff6633;
  background-color: #ff6633;
  color: #fff;
}
</style>
