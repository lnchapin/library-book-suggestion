const app = new Vue({
  el: '#app',
  data: {
    heading: 'Are we missing a book you want to read?',
    lastValue: '',
    loading: false,
    ipAddress: '',
    error: false
  },
  watch: {
    lastValue: function(value){
      this.lastValue = this.getCapitalized(value);
    }
  },
  methods: {
    getCapitalized(value) {
      if (lastValue.length + 1 == value.length && lastValue === value.substring(0, lastValue.length)) {
        // Value has been extended by one character (i.e. they're typing)
        value = value.split(/\b/). // Split by word boundaries
        map(function(word) { // Check each word individually
          if (['and', 'or', 'a', 'an', 'the', 'on', 'with', 'for', 'of', 'in', 'to', 'at'].indexOf(word.toLowerCase()) >= 0) {
            // Special lower-case word
            return word.toLowerCase();
          } else if (word.match(/[a-z]+/)) {
            // Capitalize it
            return word[0].toUpperCase() + word.substr(1).toLowerCase();
          } else {
            // Leave it
            return word;
          }
        }).join(''); // Glue 'em back together

      }
      // Update lastValue for next time
      lastValue = value;

      return value;
    },

    addSuggestion() {
      this.loading=true;
       let that = this;
      axios.post('bookSuggestions.php', {
      }).then(function (response) {
        that.loading=false;
        that.ipAddress=response.data;
      }).catch(function (error) {
        that.loading=false;
        that.error=true;
      })
    }
  }
})

const heading = new Vue({
  el: '#heading',
  data: {
    message: false,
    search: ''
  },
  methods:{
    noBook(){
      this.message=true;
    }
  }
})
