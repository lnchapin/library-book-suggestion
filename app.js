const app = new Vue({
  el: '#app',
  data: {
    heading: 'Are we missing a book you want to read?',
    lastValue: '',
    suggest:''
  },
  watch: {
    lastValue: function(newsuggestion, oldsuggestion){
      console.log("line 11", this.getCapitalized(newsuggestion));
      suggest = this.getCapitalized(newsuggestion)
    }
  },
  methods: {
    // var lastValue = ''

     getCapitalized(value) {
      console.log("line 19",value);
      if (lastValue.length + 1 == value.length && lastValue === value.substring(0, lastValue.length)) {
        // Value has been extended by one character (i.e. they're typing)
        value = value.split(/\b/). // Split by word boundaries
        map(function(word) { // Check each word individually
          if (['and', 'or', 'a', 'an', 'the', 'on', 'with', 'for', 'of', 'in', 'to', 'at'].indexOf(word.toLowerCase()) >= 0) {
            // Special lower-case word
            return word.toLowerCase();
          } else if (word.match(/[a-z]+/)) {
            // Capitalize it
            return word[0].toUpperCase() + word.substr(1);
          } else {
            // Leave it
            return word;
          }
        }).join(''); // Glue 'em back together

      }

      console.log("line 40 lastValue", lastValue);
      // Update lastValue for next time
      lastValue = value;
      //

      console.log("line 39 value", value);
      return value;
    },

    addSuggestion() {
      console.log(suggestion.value);
    }

  }
})
