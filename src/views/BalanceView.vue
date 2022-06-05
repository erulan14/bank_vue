<template>
  <div class="justify-center">
    <q-card v-for="(item, index) in cards" :key="index" bordered class="b_card">
      <q-card-section horizontal>
        <q-card-section>
          <div>{{item.name}}</div>
          <div>Баланс: {{item.balance}} KZT</div>
          <div>{{item.card_number}}</div>
        </q-card-section>

        <q-space></q-space>
        <q-separator vertical></q-separator>
        <q-card-actions vertical class="justify-around">
          <q-btn flat round color="black" icon="more_vert"/>
          <q-btn flat round color="accent" icon="bookmark"/>
          <q-btn flat round color="primary" icon="share"/>
        </q-card-actions>

      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import {mapState, mapActions} from "vuex";

export default {
  name: "BalanceView",

  mounted() {
    this.get_cards();
  },

  computed: {
    ...mapState(["cards"])
  },

  methods: {
    ...mapActions(["get_cards"]),
  }
}
</script>

<style scoped>
.b_card {
  height: 150px;
  margin: 20px;
}
</style>