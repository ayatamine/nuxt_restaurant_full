<template>
<div>
        <section class="intro">
            <h1><slot/></h1>
        </section>
        <section class="menu-section">
            <div class="section-header">
                <img src="nuxtjs_logo.png" style="    max-height: 70px;" alt="Resturant-logo">
                <h3>TODAY’S MENU </h3>
            </div>
            <div class="menu">
                <div class="recipe">
                    <img src="menu_style_two_1.jpg" alt="Avatar" style="width:100%;max-height: 200px;">
                    <div class="container-card">
                        <h4><b>Cupcake Recipes </b></h4>
                        <hr>
                        <p class="price">120$</p>
                    </div>
                </div>
                <div class="recipe">
                    <img src="menu_style_two_1.jpg" alt="Avatar" style="width:100%;max-height: 200px;">
                    <div class="container-card">
                        <h4><b>Cupcake Recipes </b></h4>
                        <hr>
                        <p class="price">120$</p>
                    </div>
                </div>
            </div>

        </section>
</div>


</template>

<script>
export default {

}
</script>

<style >
 .intro {
            height: 300px;
            position: relative;
            padding: 30px;
            box-sizing: border-box;
            background-image: url('~assets/images/contact_page_barner.jpg');
            background-position: center;
            background-size: cover;
        }

        .intro::after {
            background: #000;
            content: "";
            height: 100%;
            left: 0;
            opacity: 0.5;
            position: absolute;
            top: 0;
            width: 100%;
        }

        .intro>h1 {
            position: absolute;
            top: 10%;
            left: 5%;
            width: 90%;
            font-size: 1.5rem;
            color: white;
            padding: 10px;
            text-align: center;
            z-index: 999;
        }

        @media (min-width: 768px) {
            .intro h1 {
                font-size: 2rem;
            }
        }
</style>