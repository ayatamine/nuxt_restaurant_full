<template>

                <div class="container">
                    <!-- Site logo Start -->
                    <div class="logo">
                        <a href="index.html" title="W-shipping"><img src="~assets/images/logo.png" alt="W-shipping" /></a>
                    </div>
                    <!-- Site logo end -->
                    <div class="mobile-menu-wrapper"></div>
                    <!-- Search Start -->
                    <div class="dropdown header-search-bar">
                        <form action="index.html">
                            <span class="" data-toggle="dropdown"><i class="fa fa-search" aria-hidden="true"></i></span>
                            <input type="search" placeholder="kyewords.." class="dropdown-menu search-box">
                        </form>
                    </div>
                    <!-- Search End -->

                    <!-- Main menu start -->
                    <nav class="mainmenu">
                        <ul id="navigation">
                            <li class="nav-active"><a href="#">Home</a>
                                <ul>
                                    <li class="chaild-active"><a href="index.html">Home version 1</a></li>
                                    <li><a href="index2.html">Home version 2</a></li>
                                    <li><a href="index3.html">Box Style</a></li>
                                    <li><a href="rtl-version.html">RTL Version</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Services</a>
                                <ul>
                                    <li><a href="services.html">Service page</a></li>
                                    <li><a href="single-services.html">Air Freight Shipping</a></li>
                                    <li><a href="single-services.html">Ocean Freight Shipping</a></li>
                                    <li><a href="single-services.html">Car Shipping</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Shipping</a>
                                <ul>
                                    <li><a href="create-shipping.html">Create New Shipment</a></li>
                                    <li><a href="current-shipment.html">Current Shipment list</a></li>
                                    <li><a href="shipment-history.html">Shipment History</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Tracking</a>
                                <ul>
                                    <li><a href="customer-login.html">Customer Login</a></li>
                                    <li><a href="customer-register.html">Customer Register</a></li>
                                    <li><a href="tracking.html">Tracking</a></li>
                                    <li><a href="tracking-result.html">Your shipment progress</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Blog</a>
                                <ul>
                                    <li><a href="blog.html">Blog left sidebar</a></li>
                                    <li><a href="blog-another-page.html">Blog right sidebar</a></li>
                                    <li><a href="single-blog.html">Single Blog</a></li>
                                </ul>
                            </li>
                            <li><a href="#">pages</a>
                                <ul>
                                    <li><a href="about.html">About Us</a></li>
                                    <li><a href="media.html">Media & Publications</a></li>
                                    <li><a href="freight-gallery.html">Freight Gallery</a></li>
                                    <li><a href="image-gallery.html">Image Gallery</a></li>
                                    <li><a href="typography.html">Typography</a></li>
                                    <li><a href="button-accordion.html">Button &amp; Accordion</a></li>
                                    <li><a href="community.html">Shipping Community</a></li>
                                    <li><a href="404.html">Error 404</a></li>
                                    <li><a href="sitemap.html">Sitemap</a></li>
                                    <li><a href="coming-soon.html">Coming Soon</a></li>
                                </ul>
                            </li>
                            <li><a href="contact.html">Contuct Us</a></li>
                        </ul>
                    </nav>
                    <!-- Main menu end -->
                </div>
</template>

<script>
export default {
    data(){
          return {
              opened:false
          }
    }
}
</script>

<style scoped>

</style>