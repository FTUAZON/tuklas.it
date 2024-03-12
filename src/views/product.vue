<template>
  <section class="flex-col h-screen w-full">
    <div>
      <HeaderView/>
    </div>
    <div class="flex justify-between items-center w-full" style="background-color: #042940;">
      <div class="flex items-center px-[10rem]">
        <p class="text-white text-8xl">Services</p>
      </div>
      <div>
        <img src="/images/services.png" alt="Services Image" class="w-[400px]">
      </div>
    </div>
    <div class="flex w-full justify-center items-center py-[3rem] px-[10rem]">
      <h1 class="text-5xl italic">
        "A solution for every need"
      </h1>
    </div>
    <div class="flex w-full justify-center items-center text-center px-[10rem]">
      <h1 class="text-lg">
        At TUKLAS we recognize that a Business needs to be flexible as its customers are unique, and that's the challenge we readily embrace. so whatever kind of company you have, TUKLAS IT Creatives and Solutions has the enterprise to get you on your way.
      </h1>
    </div>
    <div class="flex justify-between px-[10rem] py-[5rem]">
      <div class="collapse-container">
        <div tabIndex={0} className="collapse bg-base-200"> 
          <div className="collapse-title text-xl font-medium">
            Business Development
          </div>
          <div className="collapse-content"> 
            <ul class="list-disc">
                <li>Inventory System</li>
                <li>Point-Of-Sale System</li>
                <li>Telemedicine System</li>
                <li>Appointment System</li>
                <li>Booking System</li>
                <li>Document Management System</li>
                <li>Enrollment System</li>
                <li>Landing Page</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="collapse-container">
        <div tabIndex={0} className="collapse bg-base-200"> 
          <div className="collapse-title text-xl font-medium">
            Technical Support
          </div>
          <div className="collapse-content"> 
            <ul class="list-disc">
                <li>Events Management</li>
                <li>Tabulation System</li>
                <li>Company Logo Editing</li>
                <li>Video Editing</li>
                <li>Photo Editing</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="collapse-container">
        <div tabIndex={0} className="collapse bg-base-200"> 
          <div className="collapse-title text-xl font-medium">
            Internet of Things (IoT)
          </div>
          <div className="collapse-content"> 
            <ul class="list-disc">
                <li>Smart Home System </li>
                  <li>Fire Alarm with UI</li>
                  <li>Burglar Alarm System with UI</li>
                  <li>Automated Appliances with UI</li>
                  <li>Wifi Controlled Breaker Unit</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="collapse-container">
        <div tabIndex={0} className="collapse bg-base-200"> 
          <div className="collapse-title text-xl font-medium">
            Educational Consultation
          </div>
          <div className="collapse-content"> 
            <ul class="list-disc">
                <li>Educational Paper Consultation  </li>
                  <li>Capstone Paper and System Consultation</li>
                  <li>Thesis Consultation</li>
                  <li>Feasibility Study Consultation</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    

  </section>
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
  .collapse-container {
    flex: 1;
    margin-right: 10px;
  }
</style>
