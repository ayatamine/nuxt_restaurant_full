<template>
  <div>
    <div class="main-wrapper">


        <!-- skiptocontent start ( This section for blind and Google SEO, Also for page speed )-->
        <a id="skiptocontent" href="#maincontent">skip navigation</a>
        <!-- skiptocontent End -->

        <!-- Preloader start -->
        <!-- <div class="wshipping-site-preloader-wrapper">
          <div class="spinner">
            <div class="double-bounce1"></div>
            <div class="double-bounce2"></div>
          </div>
        </div> -->
        <!-- Preloader End -->
        <div class="video-wrapper">
          <div id="ytbg" data-youtube="https://www.youtube.com/watch?v=gHZO5JAtEjM&feature=youtu.be&list=PLiZp9L5WltUKsqGcvfjPTTzQmW1aP6wsr"></div>
        </div>
        <Header/>
         <nuxt />
        <!-- footer -->
        <Thefooter/>
        <!-- end footer -->
    </div>
  </div>

</template>
<script>
import Header from '~/components/header/Header'
import Thefooter from '~/components/footer/Footer'
export default {
  components:{
    Header,Thefooter
  }
}
</script>
<style>
/* html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
} */
</style>
