<template>
  <div id="app">
    <Kumbotron />
    <AboutMeCards />
    <Footer />        

  </div>
</template>

<script>

import Kumbotron from '../public/assets/components/Kumbotron'
import AboutMeCards from '../public/assets/components/AboutMeCards'
import Footer from '../public/assets/components/Footer'
export default {
  name: 'app',
  components: {
    Kumbotron,
    AboutMeCards,
    Footer
  },
  data: () => ({
    //
  }),
};
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #212121;
  margin-top: 60px;
}
</style>