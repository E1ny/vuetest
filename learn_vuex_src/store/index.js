import { createStore } from 'vuex'

const store = createStore({
    state: () => ({
        counter: 100,
        name: "ey11",
        level: 1112,
        friends: [
            {id: 111, name:"ey", age: 11},
            {id: 112, name:"ey2", age: 12},
            {id: 113, name:"ey3", age: 13},
        ]
    }),
    getters: {
        doubleCounter(state) {
            return state.counter * 2
        },
        totalAge(state) {
            return state.friends.reduce((preValue, item) => {
                return preValue + item.age
            }, 0)
        },
        message(state, getters) {
            // getters中的函数可以传入一个getters属性用以获取其他函数的getters
            return `name:${state.friends[1].name} level:${state.level} friendTotalAge:${getters.totalAge}`
        },
        getFriendById(state) {
            return (id) => {
                const friend = state.friends.find(item => item.id === id)
                return friend
            }
        }
    },
    // home中通过store.commit("increment")
    // 绑定了这里的increment, 调用state去修改counter
    // 不能直接修改counter, vuex规定
    mutations: {
        increment(state) {
            state.counter++
        }
    }
})

export default store