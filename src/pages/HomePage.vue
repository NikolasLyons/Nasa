<template>
  <div class="container-fluid" :style="`background-image: url(${APOD.url})`">
    <div class="row">
      <div class="col-12 text-light">
        <label for="Date">Date</label>
        <input class="date-picker" type="date" id="date" name="date" width="25" v-model="newDate" @change="getDate">
        
        <h3>{{APOD.title}}</h3>
        <p>{{APOD.explanation}}</p>
        <p>{{APOD.copyright}}</p>
      </div>
    </div>
  </div>
</template>

<script>

import { computed, onMounted, ref } from "vue"
import { AppState } from "../AppState"
import { apodService } from "../services/APODService"
import { logger } from "../utils/Logger"
import Pop from "../utils/Pop"
export default {
  name: 'Home',
  setup(){
    const newDate = ref('')
    onMounted(async ()=>{
      try {
        await apodService.getAPOD()
      
      } catch (error) {
        Pop.toast(error.message,"error")
        logger.error(error)
      }
    });
   
    return {
      APOD: computed(()=> AppState.APOD),
      async getDate(){
        await apodService.getDate(newDate.value)
        logger.log(newDate.value)

      },
      newDate

      
    }

  }
}
</script>

<style scoped lang="scss">
.container-fluid{
  min-height: 100vh;
  object-fit: contain;
  background-size: cover;
  
}

// .date-picker{
//  display: none;
 
// }
</style>
