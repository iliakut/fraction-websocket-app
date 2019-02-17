<template>
  <v-container text-xs-center>
    <h1>Fractions</h1>
    <v-form v-model="valid">
      <v-layout row wrap>
        <v-flex xs1>
          <v-text-field v-model="firstFraction.numerator" :rules="rules" ></v-text-field>
        </v-flex>
        <v-flex xs1>
          <v-card>
            <v-card-text>/</v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs1>
          <v-text-field v-model="firstFraction.denominator" :rules="rulesDenominator"></v-text-field>
        </v-flex>

        <template v-for="(fraction, index) in fractions">
          <v-flex xs1>
            <v-select :items="['+', '-', '*', '/']" outline v-model="operators[index]">'+'</v-select>
          </v-flex>
          <v-flex xs1>
            <v-text-field v-model="fraction.numerator" :rules="rules"></v-text-field>
          </v-flex>
          <v-flex xs1>
            <v-card>
              <v-card-text>/</v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs1>
            <v-text-field v-model="fraction.denominator" :rules="rulesDenominator"></v-text-field>
          </v-flex>
        </template>

        <!--result-->
        <v-flex xs1>
          <v-card small>
            <v-card-text>=</v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs1>
          <v-card :color="resultColor">
            <v-card-text>{{ result }}</v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-form>
    <v-btn @click="addFraction">add fraction</v-btn>
  </v-container>
</template>

<script>
import Fraction from "fraction.js";
export default {
  name: "Fraction",
  components: {},
  data() {
    return {
      firstFraction: { numerator: "1", denominator: "2" },
      fractions: [{ numerator: "1", denominator: "2" }],
      operators: ["+"],
      valid: false,
      rules: [
        v => !!v || 'is required',
        v => Number.isInteger(v - 0) || 'Must be integer'
      ],
      rulesDenominator: [
        v => !!v || 'is required',
        v => Number.isInteger(v - 0) || 'Must be integer',
        v => v !== '0' || 'Devision by Zero',
      ]
    };
  },
  methods: {
    addFraction: function() {
      this.fractions.push({ numerator: "1", denominator: "1" });
      this.operators.push("+");
    },
    calculateResult: function() {
      let result = new Fraction(
        this.firstFraction.numerator - 0,
        this.firstFraction.denominator - 0
      );
      let convertedFractions = [];
      this.fractions.forEach(item => {
        let numerator = item.numerator - 0;
        let denominator = item.denominator - 0;
        let fraction = new Fraction(numerator, denominator);
        convertedFractions.push(fraction);
      });
      convertedFractions.forEach((item, index) => {
        if (this.operators[index] === "+") {
          result = new Fraction(result).add(item);
        } else if (this.operators[index] === "-") {
          result = new Fraction(result).sub(item);
        } else if (this.operators[index] === "*") {
          result = new Fraction(result).mul(item);
        } else {
          result = new Fraction(result).div(item);
        }
      });
      return result;
    }
  },
  computed: {
    result: function() {
      return this.calculateResult().toFraction(true);
    },
    resultColor: function() {
      if (this.valid === true) {
        return "green";
      }
      return "red";
    }
  }
};
</script>
