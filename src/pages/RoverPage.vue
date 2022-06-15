<template>
  <div v-for="r in rovers" :key="r.rovers" class="component">
<p>{{rovers.name}}</p>

  </div>
</template>


<script>
import { computed, onMounted } from 'vue'
import { logger } from "../utils/Logger"
import Pop from "../utils/Pop"
import { roversService } from "../services/RoversService"
import { AppState } from '../AppState'

export default {
  setup(){
    onMounted( async()=>{
      try {
        await roversService.getRovers()
      } catch (error) {
        logger.error(error)
        Pop.toast(error.message, 'error')
      }

    })
    return {
      rovers: computed(()=> AppState.rovers)
    }
  }
}
</script>


<style lang="scss" scoped>

</style>