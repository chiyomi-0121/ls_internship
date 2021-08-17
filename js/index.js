/*var level1 = new Vue({
    el: '#level-1',
    data: {
        message: 'Hello Vue!'
    }
});*/
var count = 0;
var level2 = new Vue({
    el: '#level-2',
    data: {
        nodata:true,
        message: '',
        num: null,
        todos: [
        ]
    },
    methods: {
        addMessage: function(){
            this.todos.push({ text: this.message, num: count+1})
            count++;
            this.nodata = false;
        },
        delMessage: function(){
            this.todos.splice(this.num, 1)
            count--;
            if(count == 0){
                this.nodata = true;
            }
        }
    }
});