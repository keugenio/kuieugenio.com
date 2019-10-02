<template>
    <!-- ***************  FOOTER ******************* -->
    <div class="row footer">
        <div class="copyright w-100">
            <p>© 2019, Kui Eugenio, All rights reserved</p>
        </div>
    </div> 
</template>

export default {
    name:'Footer'
}
<script>
</script>

<style lang="scss" scoped >
    @import '../../../sass/main.scss';
    .footer {
        margin-top:1rem;
        font-size: 1.5rem;
        text-align: center;
        width: 100vw;
        & .copyright {
            padding:1rem;
            background: silver;
        }
    }
</style>