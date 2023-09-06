<template>
    <TodoListMenu v-on:change-filter="onChangeFilter" class="p-0"/>
    <div v-for="key in Object.keys(filter_todos)" :key="key" class="mb-3">
        <div v-if="use_category">
        <!-- ㄴ> 조건을 충족하면 나타나고 아니면 나타나지 않음 -->
            <em>{{ key }}</em>
        </div>
        <TodoList :data="filter_todos[key]"/>
    </div>
    <div class="my-2 mt-5">
        <span style="background-color:red;">&nbsp;</span>&nbsp;
        <strong>처리하지 못한 할일</strong>
    </div>
    <TodoList :data="pending_todos"/>
</template>

<script>
import TodoListMenu from '../components/TodoListMenu.vue'
import TodoList from '../components/TodoList.vue'

import {ref, provide, inject, watch} from 'vue'
import { useFilter } from '../stores/filters'

export default{
    name:'TodoListMain',
    components:{
        TodoListMenu, TodoList
    },
    setup(props){
        const { getPendingTodos, getActiveToday,
                getCompletedToday, getAllTodayTodo,
                getAllTodo } = useFilter()
        const filter = ref(0)
        const filter_todos = ref(0)
        const pending_todos = ref([])
        const use_category = ref(false)
        const todos = inject('todos')

        const filters = {
            0:{
                str:'할일들',
                func:getActiveToday,
                category:false,
            },
            1:{
                str:'미션완료',
                func:getCompletedToday,
                category:false,
            },
            2:{
                str:'오늘의 기록',
                func:getAllTodayTodo,
                category:false,
            },
            3:{
                str:'모든 할 일들',
                func:getAllTodo,
                category:false,
            },
        }
        provide('filters',filters)

        const groupBy = (todos) => {
            return todos.reduce( (acc, cur) => {
                acc[cur['date']] = acc[cur['date']] || []
                acc[cur['date']].push(cur)
                return acc
            }, {})
        }
        const onChangeFilter = (filter_idx) => {
            filter.value = Number(filter_idx)
        }

        watch( // 특정한 값의 변경이 일어나면 함수가 실행되게 함
            [ ()=> filter.value, todos.value ],
            ( [new_filter, new_todos], [ old_filter, old_todos ] ) => {
                pending_todos.value = getPendingTodos(todos)
                if( typeof new_filter != 'undefined' ){
                    let temp_todos = filters[new_filter].func(todos)
                    filter_todos.value = groupBy(temp_todos)
                    use_category.value = filters[new_filter].category
                }
            },
            { immediate : true }
            // 변경 없어도 일단 열었을 때 실행되게 하려면 이거
        )
        return { filter, pending_todos, filter_todos, use_category, onChangeFilter }
    }
}
</script>

<style>

</style>