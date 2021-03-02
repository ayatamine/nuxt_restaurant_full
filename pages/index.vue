<template>
  <div class="">
    <home-slider/>
     
    <home-services/>
    <!-- we provide -->
    <div class="wshipping-content-block provided-block text-center">
            <div class="item-table">
                <div class="item-tablecell">
                    <div class="container">
                        <div class="row">
                            <div class="col-12 wow fadeInUp">
                                <h3 class="text-uppercase">We Provide</h3>
                                <h1 class="text-uppercase">the Best Sea and Air Freight Services</h1>
                                <h2>For Book Your Shipping From any Country</h2>
                                <a href="#" class="wshipping-button cta-btn">Contact Weth Us</a> </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    <!-- end we provide -->

    <!-- start our services process -->
    <services-process/>
    <!-- end our services process -->
    <!-- start counter -->
    <counter/>
    <!-- end counter -->
    <!-- new and testemonials -->
    <news-testimonials/>
    <!-- end new and testemonials -->


  </div>
</template>

<script>
import HomeSlider from '~/components/home/Slider.vue'
import HomeServices from '~/components/home/Services.vue'
import ServicesProcess from '~/components/home/ServicesProcess.vue'
import Counter from '~/components/home/Counter.vue'
import NewsTestimonials from '~/components/home/NewsTestimonials.vue'
export default {
  components: {
    HomeSlider,HomeServices,
    ServicesProcess,
    Counter,NewsTestimonials
  }
}
</script>

<style>
/* .container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
} */
</style>
