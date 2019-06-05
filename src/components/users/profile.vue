<template>
<v-container>

  <v-layout xs12 sm6 offset-sm3>
  
     <base-card dark>
    <v-img
      class="grey lighten-2"
      height="600"
      width="300%"
      :src="require('@/assets/cover.jpg')"
    >
      <v-layout
        fill-height
        align-center
        pa-3
      >
        <v-flex
          xs12
          md7
          offset-md5
        >
          <h1 class="display-3 font-weight-light">
            The Art Of Travel
          </h1>
          <div class="subheading text-uppercase pl-2 mb-4">
            Finding Beauty, One flight at a time
          </div>
          <v-btn
            
            depressed
            round
          >
           <a href="https://www.instagram.com/hr1tik623/" target="_blank"> Subscribe</a>
          </v-btn>
        </v-flex>
      </v-layout>
    </v-img>
  </base-card>
  </v-layout>
  <v-layout>
<div class="text-xs-center">
          <v-chip close>
            <v-avatar>
              <img src="https://t8egqq.dm.files.1drv.com/y4pvZ4Go80PBrWrs_VTbhmQj307jbjB3G_IWkiidrhQFOqkap0MqDedheArOkDG61PK5Kha6aB4tbePHbbumkoiyo_TOZSmQOsTp_oVLJCOEdA46yTfxBDh9CxO50Sa9wvhZx3ONs7Dpp-1UZio1QDWUntnhFkgfdLJP4GeeDAqLoE1ABNyrQ2aFmmVK3talyyq9ION5LXgWcAxlSVYkuXXYQ/20190412_175004000_iOS.jpg?psid=1" alt="hritiksood">
            </v-avatar>
            Hritik Sood
          </v-chip>
        </div>
        </v-layout>
           <v-layout> 
          <div class="text-xs-left">
    
    <label >
     <b> TAGS</b>
    </label>
    <v-chip label color="blue" text-color="white">
      <v-icon left>label</v-icon>Leisure
    </v-chip>
    <v-chip label color="blue" text-color="white">
      <v-icon left>label</v-icon>Travel
    </v-chip>
    <v-chip label color="blue" text-color="white">
      <v-icon left>label</v-icon>Political
    </v-chip>
    <v-chip label color="blue" text-color="white">
      <v-icon left>label</v-icon>Wildlife
    </v-chip>
          </div>
          </v-layout>
          
          
      <br>
      <br>
      <header class='masthead'>
  <p class='masthead-intro'>Hi I'm</p>
  <h1 class='masthead-heading'>hr1tik</h1>
</header>
    
  <v-container>
    <div class="row">
  <div class="column" style="background-color:#cfd8dc;">
    <h2 class="display-1"> About me</h2>
    <p>I AM A PHOTOGRAPHER & DESIGNER
Dedicated and energised professional photographer with 7+ years' comprehensive experience in customized and also specialized photography. Experienced in catching premium quality images and arranging products for photoshoots while displaying self-confidence and professionalism and trust in any way times. Wildlife and undersea due to HTML Personal Website .</p>
<ul>
  <li ><v-chip label outline color="blue">Networking</v-chip></li>
  <li><v-chip label outline color="blue">Programming</v-chip></li>
  <li><v-chip label outline color="blue">Web Development</v-chip></li>
  
</ul>
  </div>
  <div class="column" >
    
    <img src="https://t8egqq.dm.files.1drv.com/y4pvZ4Go80PBrWrs_VTbhmQj307jbjB3G_IWkiidrhQFOqkap0MqDedheArOkDG61PK5Kha6aB4tbePHbbumkoiyo_TOZSmQOsTp_oVLJCOEdA46yTfxBDh9CxO50Sa9wvhZx3ONs7Dpp-1UZio1QDWUntnhFkgfdLJP4GeeDAqLoE1ABNyrQ2aFmmVK3talyyq9ION5LXgWcAxlSVYkuXXYQ/20190412_175004000_iOS.jpg?psid=1" alt="" height="100%">
  </div>
</div>
  </v-container>
  <v-container align-content-start="" >
    
    <v-layout align-baseline=""> 
    <v-flex xs12 sm6 offset-sm3>
      
        

        <v-list two-line>
          <v-list-tile @click="">
            <v-list-tile-action>
              <v-icon color="indigo">phone</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title><a href="tel:+919555586295">Call me</a></v-list-tile-title>
              <v-list-tile-sub-title>Mobile</v-list-tile-sub-title>
            </v-list-tile-content>

            

     
            

            
          <v-tooltip bottom>
      <template v-slot:activator="{ on }">
        <span v-on="on">Call </span>
      </template>
      <span>Else you can call +919555586295</span>
    </v-tooltip>
          </v-list-tile>

          <v-divider inset></v-divider>

          <v-list-tile @click="">
            <v-list-tile-action>
              <v-icon color="indigo">mail</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title><a href="mailto:hritikhunny623@gmail.com?Subject=Hello%20Hritik" target="_top">Send Mail</a></v-list-tile-title>
              <v-list-tile-title></v-list-tile-title>
              <v-list-tile-sub-title>Personal</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>

          

          <v-divider inset></v-divider>

          <v-list-tile @click="">
            <v-list-tile-action>
              <v-icon color="indigo">location_on</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>Faridabad</v-list-tile-title>
              <v-list-tile-sub-title>Haryana,India</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
    
    </v-flex>
  </v-layout>
  </v-container>
     
  
  </v-container>
</template>

<style scoped>
* {
  box-sizing: border-box;
}


.column {
  float: left;
  width: 50%;
  padding: 10px;
  height: 320px; 
}
.row:after {
  content: "";
  display: table;
  clear: both;
}
.right{
  float: left;
  width: 300px;
  border: 3px solid #73AD21;
  padding: 10px;
}
.masthead-intro {
    /* Layout Declarations */
    margin-bottom: 0.1em;
    /* Typography Declarations */
    font-family: "Gentium Book Basic", Georgia, serif;
    font-size: 2em;
}
.masthead-heading {
    /* Layout Declarations */
    color: #F1C863;
    margin-top: -0.2em;
    /* Typography Declarations */
    font-family: "Open Sans", "Helvetica Neue", sans-serif;
    font-weight: bold;
    font-size: 6em;
    letter-spacing: -0.02em;
    text-transform: uppercase;
}
ul {
  list-style: none;
}

ul li:before {
  content: '✓';
}
</style>

