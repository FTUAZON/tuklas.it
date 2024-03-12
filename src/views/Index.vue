<template>
    <div class="relative min-h-screen bg-[#f7efed]">
        <HeaderComponent/>
        <HomeComponent/>
        <TaglineComponent/>
        <ServicesComponent/>
        <videoSection/>
        <ProductDescriptionComponent/>
        <TeamComponent/>
        <CoreValuesComponent/>
        <partners/>
        <FooterComponent/>
        
        <a id="button" @click="scrollToTop"><i class="fa fa-chevron-up" aria-hidden="true">T</i></a>
    </div>
</template>

<script>
import HeaderComponent from '@/components/Header.vue';
import HomeComponent from '@/components/sections/Home.vue'
import TaglineComponent from '@/components/sections/Tagline.vue'
import ServicesComponent from '@/components/sections/Services.vue';
import videoSection from '@/components/sections/video-section.vue';
import ProductDescriptionComponent from '@/components/sections/ProductDescription.vue'; 
import TeamComponent from '@/components/sections/Team.vue';
import CoreValuesComponent from '@/components/sections/CoreValues.vue';
import partners from '@/components/sections/partners.vue';
import FooterComponent from '@/components/sections/Footer.vue';

export default {
    components: {
        HeaderComponent,
        HomeComponent,
        TaglineComponent,
        videoSection,
        ServicesComponent,
        ProductDescriptionComponent,
        TeamComponent,
        CoreValuesComponent,
        partners,
        FooterComponent,
    },
    methods: {
        scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        },
        handleScroll() {
            const button = document.getElementById("button");
            if (window.scrollY > 300) {
                button.classList.add("show");
            } else {
                button.classList.remove("show");
            }
        }
    },
    mounted() {
        window.addEventListener("scroll", this.handleScroll);
    },
    destroyed() {
        window.removeEventListener("scroll", this.handleScroll);
    }
}
</script>

<style  scoped>
#button {
  display: inline-block;
  background-color: #C61407;
  width: 45px;
  height: 45px;
  text-align: center;
  border-radius: 30px;
  position: fixed;
  bottom: 30px;
  right: 30px;
  transition: background-color .3s, 
    opacity .5s, visibility .5s;
  opacity: 0;
  visibility: hidden;
  z-index: 1000;
  animation: hoverUpDown 1s infinite alternate;
}

#button i {
  font-size: 24px;
  line-height: 50px;
  color: #fff;
}

@keyframes hoverUpDown {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-10px);
  }
}

#button:hover {
  cursor: pointer;
  animation: lightShow 0.5s ease infinite alternate;
}

@keyframes lightShow {
  0% {
    background-color: #C61407;
    box-shadow: 0 0 10px #C61407;
  }
  100% {
    background-color: #ff1100;
    box-shadow: 0 0 20px #ff1100;
  }
}

#button.show {
  opacity: 1;
  visibility: visible;
}
</style>
