Vue.createApp({
    data(){
        return{
            input: "",
            todos:[{text: "first todo" , completed: false} , {text:"second todo" , completed: false }]
        }
    },
    methods:{
        addTodo(){
            if(this.input){
                this.todos.push({text: this.input , completed: false})
                this.input = ""
            }
        },
        deleteTodo(index){
            this.todos.splice(index , 1)

        }
    }
}).mount('#app')