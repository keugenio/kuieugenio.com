<template>
  <div class="card-columns w-75 mx-auto">

    <!-- techie words -->
    <div class="card">
      <h4 class="card-title text-darkblue"><span class="title">What</span>&nbsp;I know</h4>
      <p class="card-text">HTML 5.0, CSS 3.0, Bootstrap, JavaScript, SASS, node.js, jQuery, React.js, React-Native, Redux, Express, Vue, Vuex, MYSQL, JSON, XML and API development. Utilizes GitHub & GitLab for version control and Heroku for deployment.</p>
      <div class="text-center" style="padding-bottom: 10px">
        <a class="btn btn-primary text-white" href="assets/docs/Kui_Eugenio_resume.pdf">Download my Resume</a>
      </div>
    </div>
    <!-- pono -->
    <div class="card bg-info text-white">
      <blockquote class="card-blockquote">
        <p class="font-weight-bold font-italic">PONO</p>
        <footer>
          The value of integrity, of rightness and balance. The feeling of contentment when all is good and all is right.
        </footer>
      </blockquote>
    </div>
    <!-- Marvel Hangman -->
    <div class="card bg-success">
        <img class="card-img-top" src='../images/The_Marvel_Universe.png'/>
        <div class="card-body rounded">
          <h2 class="card-title text-white header-title">Marvel Hangman</h2>
          <h4 class="card-text text-white">A twist on a classical game where we utilize the Marvel Developer API to get random images, their corresponding names and descriptions from their entire library of characters.</h4>
        </div>
        <a class="card-link" data-target="#hangmanModal" data-toggle="modal">Try it out!</a>
    </div>    
    <!-- WHERE am I from -->
    <div class="card">
      <h4 class="card-title text-darkblue"><span class="title">Where</span> am I from</h4>
      <p class="card-text">I was born and raised on the island of Maui, the Valley Isle. I started my IT career upon graduating from the University of Hawaii for a telecom, quickly relocated to Southern California and finally laid my roots in the Valley of the Sun, AZ</p>
    </div>
    <!-- Ron Swanson -->
    <div class="card bg-success">
        <div class="card-block rounded">
          <h2 class="card-title text-white header-title">Quotes by Ron Swanson</h2>
          <h4 class="card-text text-white">Written in React and interacts with a PostgreSQL database hosted on Heroku. The app lets you select quotes only once and tracks them by your IP address</h4>
        </div>
        <img class="card-img-bottom" src='../images/ronSwanson.png'/>
        <a class="card-link" data-target="#hangmanModal" data-toggle="modal">Try it out!</a>
    </div>    
    <!-- KŪLIA I KA NU‘U -->
    <div class="card bg-info text-white">
      <blockquote class="card-blockquote">
        <p class="font-weight-bold font-italic">KŪLIA I KA NU‘U</p>
        <footer>
          The value of achievement and excellence. Strive to reach the summit. Pursue personal excellence in all you do.
        </footer>
      </blockquote>
    </div>
  </div>
</template>


export default {
  name: 'AboutMeCards',
}
<script>
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    @import '../../../sass/main.scss';
    .card-container{
      flex:1;
    }
  .card {
    border: thin solid 1px;
    border-radius: 1rem;
    padding:1rem;
    font-weight: 500;
    font-size: 1.5rem;
    background-color: rgba($color-yellow,.95);

    & .card-title {
      font-size: 1.8rem;
      font-weight: 600;
    }
    & .card-img-top, .card-img-bottom {
      max-width: 100%
    }
  }
</style>
