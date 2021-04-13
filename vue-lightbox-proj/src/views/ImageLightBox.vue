<template>
  <div>
    <h1>vue image lightbox</h1>
    <ul>
      <li
        v-for="(item,index) in media"
        :key="index"
        class="img-box"
      >
        <img
          :src="item.src"
          @click="OpenLightBox(index)"
        >
      </li>
    </ul>

    <LightBox
      ref="lightbox"
      :media="media"
      :show-light-box="false"
      :show-caption="true"
    />
  </div>
</template>

<script>
import LightBox from 'vue-image-lightbox';
import 'vue-image-lightbox/dist/vue-image-lightbox.min.css';

import img1 from '@/assets/1.jpeg';
import img2 from '@/assets/2.jpg';

export default {
  name: 'ImageLightBox',
  components: {
    LightBox,
  },
  data() {
    return {
      media: [
        { // For image
          thumb: img2,
          src: img1,
          caption: '<i>img001</i>', // 要顯示的標題
          srcset: '', // Optional for displaying responsive images
        },
        {
          thumb: img2,
          src: img2,
          caption: 'img002',
          srcset: '',
        },
      ],
    };
  },
  methods: {
    OpenLightBox(index) {
      this.$refs.lightbox.showImage(index);
    },
  },
};
</script>

<style scoped src="@/css/ImageLightBox.css">
