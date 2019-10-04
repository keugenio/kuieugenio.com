<template>
    <div class="col-12 100vw main-Container">
        <div>
            <h1 class="display-3">Kui Eugenio</h1>
            <p class="lead">Koo-ee Yoo-GEE-nee-o</p>        
            <div class="description">
                <span>tech avenger | web developer | loves outrigger paddling | lives 
                <b class="aloha">aloha</b></span>
            </div>
            <div class="card border-0 mt-5 bg-transparent ">
                <div class="icons">
                        <a href="https://github.com/keugenio" target="_blank"><i aria-hidden="true" class="fab fa-github"></i></a>

                        <a href="https://www.facebook.com/kuieugenio" target="_blank"><i aria-hidden="true" class="fab fa-facebook"></i></a>

                        <a href="https://www.linkedin.com/in/kui-eugenio-34ab289/" target="_blank"><i aria-hidden="true" class="fab fa-linkedin-square"></i></a>

                        <a href="mailto:kui_eugenio@hotmail.com" target="_blank"><i aria-hidden="true" class="fa fa-envelope"></i></a>

                </div>
            </div>
            <hr class="my-4">
            
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
    @import '../../../sass/main.scss';
    .main-Container {
        position:relative;
    }
    .lead {
        font-size: 1.8rem;
        color:$color-primary;
    }

    .icons {
        width:50%;
        margin-right:auto;
        margin-left:auto;
        display: flex;
        justify-content: space-evenly;
        font-size: 36px; 
        padding:0px 10px;
    }
    .description {
        display: flex;
        justify-content: center;
        width:100vw;
        font-size: 1.75rem;
        margin-top:2rem;
    }
    .aloha {
        text-transform: uppercase;
        color:$color-dark-blue;
    }
</style>
