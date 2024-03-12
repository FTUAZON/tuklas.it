<template>
    <section class="h-screen w-full flex bg-inherit">
        <div class="w-full flex items-center justify-center">
            <video class="w-full h-full object-cover md:w-auto md:h-auto lg:w-full lg:h-full" autoplay loop muted>
                <source src="/videos/Video-bg.mp4" type="video/mp4">
            </video>
        </div>
    </section>
    <div>
    <HeaderView/>
  </div>
</template>

<script>
import HeaderView from '@/components/Header.vue';
export default {
  components:{
    HeaderView
  },
  setup() {
    return {};
  },
};
</script>

<style scoped>
</style>
