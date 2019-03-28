
<template>
    <div class="test">
      <VueDraggableResizable :x="5" :y="5" :parent="false" :is-conflict-check="true" :snap="true">
        <div class="parent" @mousewheel="sca($event)" >
          <down :folder = "tree" :select = "select" :style="scaleFun" :sel = "sel" class="down"></down>
        </div>
      </VueDraggableResizable>
    </div>
</template>

<script>
import down from "./DownTree";
import Bus from "../assets/js/bus.js";
import VueDraggableResizable from "./vue-draggable-resizable";

export default {
  name: "test",
  components: {
    down,
    VueDraggableResizable
  },
  data() {
    return {}  
  },
  methods: {},
  filters: {},
  computed: {},
  props: [],
  watch: {},
  created() {},
  mounted() {}
};
</script>

<style scoped>
.down {
  position: absolute;
  left: 57%;
  top: 15%;
}
.test {
  width: 100%;
  height: 800px;
  overflow: hidden;
  border: 1px solid green;
  position: relative;
}

.parent {
  height: 10000px;
  width: 10000px;
  cursor: move;
  border: 1px solid red;
  position: relative;
  left: -50%;
  top: -150%;
  /* transform: rotate(180deg); */
  /* transform-origin: 50% 50% 0; */
}
</style>
