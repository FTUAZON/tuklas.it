<template>
  <section>
    <div class="container">
      <div class="left-side">
        <img src="/images/Contact.jpg" alt="TUKLAS" class="left-image" />
      </div>
      <div class="right-side">
        <div class="chat-box">
          <h1 class="chat-heading text-6xl mb-5">Let's Chat</h1>
          <p class="chat-paragraph mb-5">
            Our professional team is ready and willing to help evaluate your needs and find the best solution to your business process and IT needs
          </p>
          <input type="text" placeholder="Name" class="input-field" />
          <input type="text" placeholder="Company" class="input-field" />
          <input type="text" placeholder="Email Address" class="input-field" />
          <input type="text" placeholder="Message Subject" class="input-field" />
          <textarea placeholder="Message" class="input-field"></textarea>
          <button class="submit-button">Send</button>
          <div class="arrow-animation"></div>
        </div>
      </div>
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
  .container {
    display: flex;
    height: 100vh;
  }
  
  .left-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .right-side {
    position: relative;
    background: radial-gradient(circle, #2f3764, #181f4b);
    color: white;
    padding: 20px;
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .chat-box {
    position: relative;
    max-width: 500px;
  }
  
  .input-field {
    width: calc(100% - 20px);
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 15px;
    background-color: white;
    color: black;
    border: none;
  }
  
  .submit-button {
    background-color: #c61407;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 15px;
    cursor: pointer;
    animation: lightShow 0.5s infinite alternate;
  }
  
  @keyframes lightShow {
    0% {
      box-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
    }
    50% {
      box-shadow: 0 0 20px rgba(255, 255, 255, 0.8);
    }
    100% {
      box-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
    }
  }
  
  .chat-heading,
  .chat-paragraph {
    padding-bottom: 20px;
  }
  
  .arrow-animation {
    position: absolute;
    top: 11%;
    width: 20px;
    height: 20px;
    background-color: #c61407;
    clip-path: polygon(0 50%, 100% 0, 100% 100%);
    animation: arrowMove 2s infinite;
  }
  
  @keyframes arrowMove {
    0% {
      left: calc(50% + 250px);
    }
    50% {
      left: calc(50% + 50px);
    }
    100% {
      left: calc(20% - 100px);
    }
  }
  
  @media (max-width: 320px) {
    .container {
      flex-direction: column;
    }
    .left-side,
    .right-side {
      width: 100%;
      padding: 10px;
    }
  }
  </style>