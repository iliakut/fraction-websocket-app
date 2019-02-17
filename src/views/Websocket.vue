<template>
  <v-container>
    <h1>Websocket</h1>
    <v-container fluid grid-list-lg>
      <v-layout row wrap>
        <v-flex xs12  v-for="comment in comments" :key="comment.number">
          <v-card class="mx-auto" dark max-width="800">
            <v-card-text class="headline font-weight-bold">
              {{ comment.text }}
            </v-card-text>
            <v-card-actions>
              <v-list-tile class="grow">
                <v-list-tile-content>
                  <v-list-tile-title>{{ comment.author }}</v-list-tile-title>
                </v-list-tile-content>
                <v-layout align-center justify-end>
                  <v-btn flat icon color="deep-orange accent-3" @click="deleteComment(comment.number)">
                    <v-icon>delete</v-icon>
                  </v-btn>
                </v-layout>
              </v-list-tile>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-container>
</template>

<script>
export default {
  name: "Websocket",
  components: {},
  data() {
    return {
      ws: null,
      comments: [
        { number: "0", text: "You don't need Vuex", author: "Evan You" },
        { number: "1", text: "хаха офигенно", author: "Elon Musk" },
        { number: "2", text: "Это шедевр", author: "User 2" },
        { number: "3", text: "Это прекрасно", author: "User 3" },
        { number: "4", text: "Лучшее, что я видел", author: "User 4" },
        { number: "5", text: "Два чая этому автору", author: "User 5" },
        { number: "6", text: "Текстовый коммент 1", author: "User 1" },
        { number: "7", text: "Текстовый коммент 2", author: "User 6" },
        { number: "8", text: "Текстовый коммент 3", author: "User 6" },
        { number: "9", text: "Текстовый коммент 4", author: "User 6" }
      ]
    };
  },
  created: function() {
    let self = this;
    this.ws = new WebSocket("wss://echo.websocket.org");
    this.ws.onopen = function() {
      console.log("Соединение установлено");
    };
    this.ws.onclose = function(event) {
      if (event.wasClean) {
        console.log("Соединение закрыто чисто");
      } else {
        console.log("Обрыв соединения");
      }
      console.log("Код: " + event.code + " причина: " + event.reason);
    };
    this.ws.onmessage = function(event) {
      const answer = event.data;
      self.deleteCommentFromData(answer);
    };
    this.ws.onerror = function(error) {
      console.log("Ошибка " + error.message);
    };
    console.log("websocket");
  },
  methods: {
    deleteComment: function(number) {
      this.ws.send(number);
    },
    deleteCommentFromData: function(number) {
      const index = this.comments.findIndex(element => { return element.number === number });
      this.comments.splice(index, 1);
    }
  }
};
</script>
