<template>
    <div>
    </div>
</template>

<script>
import { computed, reactive } from 'vue'
export default {
    setup() {
        const names = reactive({
            f: "a",
            l: "b"
        })


        // computed返回的值也是ref, 取其值时也要用.value
        const fullname = computed( {
            set: function(newValue) {

            },
            get: function() {
                return names.f + " " + names.l
            }
            
        })

        return {
            names,
            fullname
        }
    }



}
</script>

<style scoped>

</style>