<template>
    <section class="mb-5">
        <div class="container">
            <div class="row justify-content-center m-2">
                <div class="col border border-primary rounded">
                    <input type="text" id="todo_input" class="form-control my-2"
                    v-model="job" placeholder="할 일을 작성하시게"/>
                </div>
                <div class="row my-2">
                    <div class="col-6">
                        <input type="date" v-model="date" :min="today">
                    </div>
                    <div class="col-6">
                        <button type="button" class="btn btn-primary btn-sm float-end"
                        @click="onAddTodo">할일추가</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

import{ reactive, toRefs, inject } from 'vue' // inject 쓰려면 vue에서 import 해줘야 함

export default{
    name:"TodoListNew",
    setup(){
        const today = inject('today')
        const addTodo = inject('addTodo');
        const val_obj = reactive({
            job:'', date:today, today:today,
        })
        const onAddTodo=()=>{
            if( val_obj.job.length > 0 ){
                addTodo(val_obj.job, val_obj.date)
                val_obj.date=''
                val_obj.date=today
            }
        }
        return{ // 다른 파일이 아니라 이 파일의 template에 있는 html로 보내주는 return
            ...toRefs(val_obj),onAddTodo
        }
    }
}

</script>

<style>

</style>