<template>
  <div class="card-columns w-75 mx-auto">
    <!-- what I know -->
    <div class="card">
      <h4 class="card-title text-darkblue"><span class="title">What</span>&nbsp;I know</h4>
      <p class="card-text">HTML 5.0, CSS 3.0, Bootstrap, JavaScript, SASS, node.js, jQuery, React.js, React-Native, Redux, Express, Vue, Vuex, MYSQL, JSON, XML and API development. Utilizes GitHub & GitLab for version control and Heroku for deployment.</p>
      <div class="text-center my-3">
        <button class="btn btn-large bg-canary border-dark-blue" href="assets/docs/Kui_Eugenio_resume.pdf">Download my Resume</button>
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
        <div class="card-footer d-flex justify-content-around my-3">
          <button class="btn bg-success border-dark-blue" data-target="#hangman-modal" data-toggle="modal" type="button" @click="showModal('Marvel')">Play</button>
          <a href="https://github.com/keugenio/marvelHangman" class="btn btn-success" target="_blank">
            <i class="fa fa-github rounded" aria-hidden="true"></i>
          </a>
        </div>
    </div>    
    <!-- Ron Swanson -->
    <div class="card bg-success">
        <div class="card-block mb-3">
          <h2 class="card-title text-white">Quotes by Ron Swanson</h2>
          <h4 class="card-text text-white">Written in React and interacts with a PostgreSQL database hosted on Heroku. The app lets you rates quotes and tracks them by your IP address. Simple, humorous but highlights my backend and frontend skills.</h4>
        </div>
        <img class="card-img-bottom" src='../images/ronSwanson.png'/>
        <div class="card-footer d-flex justify-content-around my-3">
          <button class="btn bg-success border-dark-blue" data-target="#hangman-modal" data-toggle="modal" type="button" @click="showModal('RonSwanson')">Try it</button>
          <a href="https://github.com/keugenio/marvelHangman" class="btn btn-success" target="_blank">
            <i class="fa fa-github rounded" aria-hidden="true"></i>
          </a>
        </div>
    </div>
    <!-- WHERE am I from -->
    <div class="card">
      <h4 class="card-title text-darkblue"><span class="title">Where</span> am I from</h4>
      <p class="card-text">I was born and raised on the island of Maui, the Valley Isle. I started my IT career upon graduating from the University of Hawaii for a telecom, quickly relocated to Southern California and finally laid my roots in the Valley of the Sun, AZ</p>
    </div>    
    <!-- What's next -->
    <div class="card">
      <h4 class="card-title text-darkblue">What's Next?</h4>
      <p class="card-text">Although successful in many years of Systems Admin and Application support, I've always wanted to explore the more creative side of technology. 
      So when life gave me a sign, I decided to combine my problem solving skills with the my passion for web development. 
      Let's see what pans out!</p>
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
    <!-- Clicky -->
    <div class="card bg-success">
      <img class="card-img-top" src='../images/clicky.png'>
      <h2 class="card-title text-white">Clicky With Friends</h2>
      <h4 class="card-text text-white">Memorization game written with React and utilizes the random.me api for images. The interface is simple and the game intuitive but the backend is challenging and complex.</h4>
        <div class="card-footer  d-flex justify-content-around my-3">								
            <button href="https://keugenio.github.io/clicky/" target="_blank" class="btn btn-success border-dark-blue" @click="showModal('Clicky')">
              Play
            </button>
            <a href="https://github.com/keugenio/clicky" class="btn btn-success" target="_blank">
              <i class="fa fa-github" aria-hidden="true"></i>
            </a>								
        </div>
    </div> 
    <modals-container/>
  </div>
</template>

<script>
import Clicky from './Clicky'
import RonSwanson from './RonSwanson'
import Marvel from './Marvel'

export default {
  name: 'AboutMeCards',
  components: {Clicky, RonSwanson},
  methods: {
    showModal (modalName) {
      var w = .9*window.innerWidth;
      var h = .9*window.innerHeight;
      let openModalName=''

      switch (modalName) {
        case 'Clicky':
          this.$modal.show(Clicky,{},{
            draggable: true,
            width:w,
            height:h,
            scrollable:true,
          })
          break;
        case 'RonSwanson':
          this.$modal.show(RonSwanson,{},{
            draggable: true,
            width:w,
            height:h,
            scrollable:true,
          })
          break;
        case 'Marvel':
          this.$modal.show(Marvel,{},{
            draggable: true,
            width:w,
            height:h*.9,
          })
          break;                
        default:
          break;
      }

    },
    hideModal () {
      this.$modal.hide('ClickyModal');
    }
  }
} 
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import '../../../sass/main.scss';
  .card-columns{
    padding-top:5rem;
    padding-bottom: 5rem;

    @include response(tabPort){
        width: 90vw!important;
    }
  }
  .card {
    border: thin solid 1px;
    border-radius: 1rem;
    padding:1rem;
    font-weight: 500;
    font-size: 1.5rem;
    background-color: rgba($color-yellow,.5);
    word-wrap:break-word;

    & .card-title {
      font-size: 1.8rem;
      font-weight: 600;
    }
    & .card-img-top, .card-img-bottom {
      max-width: 100%
    }
    & button {
      font-size: 1.5rem;
      padding:.5rem 2rem;
      color: $color-dark-blue;
      &:hover {
        background-color:$color-dark-blue;
        color:$color-light-blue;
      }
      &.btn{
        white-space: normal;
      }
    }
    & i {
      font-size: 3rem;
      padding: .5rem 2rem;
      border: thin solid $color-dark-blue;
      color: $color-dark-blue;
      &:hover{
        color: $color-light-blue;
      }
    }
    & .border-dark-blue {
      border: thin solid $color-dark-blue;
    }
    & .card-footer {
      padding: 2rem;
    }

  }
  .bg-success {
    background: rgba($color-success, .75)!important;
  }
  .bg-info {
    background: rgba($color-info, .75)!important;
  }
  .bg-canary {
    background: rgba($color-yellow, .75);
    &:hover {
      background: $color-yellow;
      color: $color-dark-blue;
    }
  }
</style>
