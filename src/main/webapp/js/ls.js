new Vue({
    el: '.form',
    data:{
        list: [],
        item: {
            date: '',
            event: 0,
            manager: '',
            content: ''
        }
    },
    methods:{
        add() {
            this.list.push(this.item)
        },
        deletes(index){
            this.list.splice(index,1)
        }
    }
})