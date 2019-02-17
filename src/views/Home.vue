<template>
  <v-container>
    <h1>Описание приложения, список используемых библиотек/ресурсов</h1>
    <v-card>
      <v-card-title class="headline font-weight-bold">Общее</v-card-title>
      <v-card-text class="title font-weight-medium">
        <a href="https://vuejs.org/">Vue.js</a> SPA. Для роутинга используется
        <a href="https://router.vuejs.org">vue-router</a>. Приложение создано на
        основе шаблона <a href="https://cli.vuejs.org/">vue-cli 3</a>.
        Оформление на основе <a href="https://vuetifyjs.com">Vuetify</a>.
        Проверка кода eslint.
      </v-card-text>
    </v-card>
    <v-card>
      <v-card-title class="headline font-weight-bold">Fractions</v-card-title>
      <v-card-text class="title font-weight-medium">
        Компонент использует дополнительную библиотеку
        <a href="https://github.com/infusion/Fraction.js">Fraction.js</a>
        В дробях используется валидация, проверяется числитель, знаменатель.
        Числитель должен быть целым числом. Знаменатель должен быть целым числом и не может быть нулем.
        Вычисление результата происходит без учета порядка выполнения арифметических действий, т.е. вычисление производится
        просто слева направо.
      </v-card-text>
      <v-card-actions>
        <v-btn to="/fraction">Перейти</v-btn>
      </v-card-actions>
    </v-card>
    <v-card>
      <v-card-title class="headline font-weight-bold">Websocket</v-card-title>
      <v-card-text class="title font-weight-medium">Компонент исползует нативные возможности языка.</v-card-text>
      <v-card-actions>
        <v-btn to="/websocket">Перейти</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Home",
  components: {}
};
</script>
