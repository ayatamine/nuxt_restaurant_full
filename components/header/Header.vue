<template>
       <header class="for-sticky">
            <!-- Header top area start -->
            <div class="header-top-area">
              <header-top-area/>
            </div>
            <!-- Header top area End -->

            <!-- Header area start -->
            <div class="header-area">
              <main-header/>
            </div>
            <!-- Header area End -->
       </header>
</template>

<script>
import HeaderTopArea from '~/components/header/Header_top_area'
import MainHeader from '~/components/header/MainHeader'
export default {
  components:{
    HeaderTopArea,MainHeader

  }
}
</script>
    MainHeader

<style>

</style>