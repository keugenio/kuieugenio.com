<template>
    <div class="main">
        <div class="container-fluid">
            <h1 class="display-3">Kui Eugenio</h1>
            <p class="lead">Koo-ee Yoo-GEE-nee-o</p>
            <hr class="my-4">
            <span class="d-inline">tech avenger | web developer | ceramic artist | loves outrigger paddling | lives &nbsp;</span><span class="d-inline aloha">aloha</span>
            <div class="d-flex">
                <!-- icons -->
                <div class="card card-outline-info icons text-center">
                <div class="card-block" style="font-size: 72px; padding:0px 10px;">
                    <div class="row">
                    <div class="col" style="padding:10px">
                        <a href="https://github.com/keugenio" target="_blank"><i aria-hidden="true" class="fa fa-github"></i></a>
                    </div>
                    <div class="col" style="padding:10px">
                        <a href="https://www.facebook.com/kuieugenio" target="_blank"><i aria-hidden="true" class="fa fa-facebook-official"></i></a>
                    </div>
                    </div>
                    <div class="row">
                    <div class="col" style="padding:10px">
                        <a href="https://www.linkedin.com/in/kui-eugenio-34ab289/" target="_blank"><i aria-hidden="true" class="fa fa-linkedin-square"></i></a>
                    </div>
                    <div class="col" style="padding:10px">
                        <a href="mailto:kui_eugenio@hotmail.com" target="_blank"><i aria-hidden="true" class="fa fa-envelope"></i></a>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>   
        <!-- ***************  FOOTER ******************* -->
        <div class="row mt-2 footer">
            <div class="w-100">
                <p>© 2019, Kui Eugenio, All rights reserved</p>
            </div>
        </div>        
    </div>
</template>

<script>
export default {
  name: 'Kumbotron',
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
   @import '../../sass/main.scss';
  .lead {
    font-size: 1.8rem;
    color:$color-primary;
   }
    .footer {
        font-size: 1rem;
        background: silver;
        text-align: center;
    }
</style>
