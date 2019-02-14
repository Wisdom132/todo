var vm = new Vue({
  el: '#app', 
  data: {
    new_todo: null, 
    new_category:null,
    work:0,
    personal:0,
    travel:0,
    todos: [], 
    category:'',
    categories: ['Work','Personal','Travel'],
    all_done: false,
  },
  methods: {
    saveTodo() {
          if (this.new_todo != null)
              this.todos.push({ 
                  text: this.new_todo,
                  done: false, 
                  category: this.category,
              });
          this.new_todo = null;
            if(this.category == this.categories[0]) return this.work++;
            if (this.category == this.categories[1]) return this.personal++;
            if (this.category == this.categories[2]) return this.travel++;
          },
      removeTodo: function (todo) {
          window.alert(`Are you sure you want to delete this To-do`);
          var index = this.todos.indexOf(todo); 
          this.todos.splice(index, 1);
        if (todo.category == this.categories[0]) return this.work--;
        if (todo.category == this.categories[1]) return this.personal--;
        if (todo.category == this.categories[2]) return this.travel--;
      },

      // filterTodo(value){

      //   return this.todos.filter((todo) => todo.category === value).length
      // }
  },
  computed: {
    // workTotal(){

    //   return this.filterTodo(this.categories[0])

    // },
    // personalTotal() {
    //   return this.filterTodo(this.categories[1]);
      
    // },
    // travelTotal() {
    //   return this.filterTodo(this.categories[2]);
      
    // }
  }
});