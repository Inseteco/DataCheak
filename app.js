new Vue ({ 

  el: "#app",

  data () {
    return {
      name: '',
      names: ['Carlito', 'Rendi', 'Klara', 'Test'],
      color: false
    }
  },
  
  methods: {
    findName() {
      let n = this.names.find((i) => i == this.name);
           
      if (n) {
        this.color = true;
      } else {
        this.color = false;
      }
    }
  }
});