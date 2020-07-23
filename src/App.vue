<template>
  <div id="app">
    
    <div id="nav">

      <!-- Masthead-->
        <header class="masthead">
            <div class="container">
                <div class="masthead-subheading">Danimal Crossing</div>
                <div class="masthead-heading text-uppercase">Resumes</div>
                <a class="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#team">Show Resumes</a>
            </div>
        </header>

      <!-- Navigation-->
        <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
            <div class="container">
                <a class="navbar-brand js-scroll-trigger" href="#page-top"><img src="/resume-companion-favicon.png" alt="" /></a>
                <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i class="fas fa-bars ml-1"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav text-uppercase ml-auto">
                        <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#resumes">Resumes</a></li>
                    </ul>
                </div>
            </div>
        </nav>

    </div>
    
    <section class="page-section bg-light" id="team">
      <!-- Individual components injected -->
      <div class="container">
        <router-view/>
      </div>
    </section>
    
    <!-- Footer -->
      <footer class="footer py-4">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-4 text-lg-left">Copyright © Your Website 2020</div>
            <div class="col-lg-4 my-3 my-lg-0">
              <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-twitter"></i></a>
              <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-facebook-f"></i></a>
              <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-linkedin-in"></i></a>
            </div>
            <div class="col-lg-4 text-lg-right">
              <a class="mr-3" href="#!">Privacy Policy</a>
              <a href="#!">Terms of Use</a>
            </div>
          </div>
        </div>
      </footer>
  </div>
</template>

<style>
</style>
