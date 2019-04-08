
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
    return {
      // 缩放比例
      scale: 1.0,
      // 宽
      widt: "190px",
      // 判断滚轮上下
      initscroll: 0,
      // 上树显示隐藏变量
      hide: false,
      // 下树
      tree: [
        {
          id: 1,
          company: "北京蝌蚪集团",
          up: false,
          show: false, //控制子集显示
          flag: false, //判断块里显示元素
          icon: true, //判断图标元素影藏显示
          children: [
            {
              id: "1-1",
              company: "xxx公司1",
              Subscription: "200",
              show: false,
              flag: true,
              icon: false,
              gb: "20%",
              children: [
                {
                  id: "1-1",
                  company: "xxx公司1-1",
                  Subscription: "100",
                  show: false,
                  flag: true,
                  icon: false,
                  gb: "10%"
                },
                {
                  id: "1-1",
                  company: "xxx公司1-2",
                  Subscription: "100",
                  show: false,
                  flag: true,
                  icon: false,
                  gb: "10%"
                }
              ]
            },
            {
              id: "1-1",
              company: "xxx公司2",
              Subscription: "200",
              show: false,
              flag: true,
              gb: "20%",
              children: [
                {
                  id: "1-1",
                  company: "xxx公司2-1",
                  Subscription: "100",
                  show: false,
                  flag: true,
                  icon: false,
                  gb: "10%"
                },
                {
                  id: "1-1",
                  company: "xxx公司2-2",
                  Subscription: "100",
                  show: false,
                  flag: true,
                  icon: false,
                  gb: "10%"
                }
              ]
            },
            {
              id: "1-1",
              company: "xxx公司3",
              Subscription: "200",
              show: false,
              flag: true,
              gb: "20%",
              children: [
                {
                  id: "1-1",
                  company: "xxx公司3-1",
                  Subscription: "100",
                  show: false,
                  flag: true,
                  icon: false,
                  gb: "10%"
                },
                {
                  id: "1-1",
                  company: "xxx公司3-2",
                  Subscription: "100",
                  show: false,
                  flag: true,
                  icon: false,
                  gb: "10%"
                }
              ]
            },
            {
              id: "1-1",
              company: "xxx公司4",
              Subscription: "200",
              show: false,
              flag: true,
              icon: false,
              gb: "20%",
              children: [
                {
                  id: "1-1",
                  company: "xxx公司4-1",
                  Subscription: "100",
                  show: false,
                  flag: true,
                  icon: false,
                  gb: "10%"
                },
                {
                  id: "1-1",
                  company: "xxx公司4-2",
                  Subscription: "100",
                  show: false,
                  flag: true,
                  icon: false,
                  gb: "10%"
                }
              ]
            },
            {
              id: "1-1",
              company: "xxx公司5",
              Subscription: "200",
              show: false,
              flag: true,
              icon: false,
              gb: "20%",
              children: [
                {
                  id: "1-1",
                  company: "xxx公司5-1",
                  Subscription: "100",
                  show: false,
                  flag: true,
                  icon: false,
                  gb: "10%"
                },
                {
                  id: "1-1",
                  company: "xxx公司5-2",
                  Subscription: "100",
                  show: false,
                  flag: true,
                  icon: false,
                  gb: "10%"
                }
              ]
            }
          ],
          upChildren: [
            {
              id: 1,
              company: "北京天鹅公司",
              show: false,
              flag: false,
              up: true,
              children: [
                {
                  id: "1-1",
                  company: "xxx公司1",
                  Subscription: "200",
                  show: false,
                  flag: true,
                  gb: "20%",
                  children: [
                    {
                      id: "1-1",
                      company: "xxx公司1-1",
                      Subscription: "100",
                      show: false,
                      flag: true,
                      gb: "10%"
                    },
                    {
                      id: "1-1",
                      company: "xxx公司1-2",
                      Subscription: "100",
                      show: false,
                      flag: true,
                      gb: "10%"
                    }
                  ]
                },
                {
                  id: "1-1",
                  company: "xxx公司2",
                  Subscription: "200",
                  show: false,
                  flag: true,
                  gb: "20%",
                  children: [
                    {
                      id: "1-1",
                      company: "xxx公司2-1",
                      Subscription: "100",
                      show: false,
                      flag: true,
                      gb: "10%"
                    },
                    {
                      id: "1-1",
                      company: "xxx公司2-2",
                      Subscription: "100",
                      show: false,
                      flag: true,
                      gb: "10%"
                    }
                  ]
                }
              ]
            },
            {
              id: 1,
              company: "北京蛤蟆公司",
              show: false,
              flag: false,
              up: true,
              children: [
                {
                  id: "1-1",
                  company: "xxx公司1",
                  Subscription: "200",
                  show: false,
                  flag: true,
                  gb: "20%",
                  children: [
                    {
                      id: "1-1",
                      company: "xxx公司1-1",
                      Subscription: "100",
                      show: false,
                      flag: true,
                      gb: "10%"
                    },
                    {
                      id: "1-1",
                      company: "xxx公司1-2",
                      Subscription: "100",
                      show: false,
                      flag: true,
                      gb: "10%"
                    }
                  ]
                },
                {
                  id: "1-1",
                  company: "xxx公司2",
                  Subscription: "200",
                  show: false,
                  flag: true,
                  gb: "20%",
                  children: [
                    {
                      id: "1-1",
                      company: "xxx公司2-1",
                      Subscription: "100",
                      show: false,
                      flag: true,
                      gb: "10%"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    };
  },
  methods: {
    // 鼠标滚轮缩放值增减
    sca(e) {
      console.log(e);
      console.log(this.scale);
      if (e.wheelDelta > this.initscroll) {
        this.scale = this.scale + 0.1;
        if (this.scale >= 1.4) {
          this.scale = 1.4;
        }
      } else {
        this.scale = this.scale - 0.1;
        if (this.scale <= 0.3) {
          this.scale = 0.3;
        }
      }
    },
    // 根节点up  iconfont 图标控制
    sel(data, index) {
      data.up = !data.up;
      if (data.up == true) {
        Bus.$emit("hide", true);
      } else {
        Bus.$emit("hide", false);
      }
      console.log(data.up);
    },
    // 点击iconfont事件
    select(data, index) {
      console.log(data.children);
      let arr = [
        {
          id: "1-1",
          company: "xxx公司5-2",
          Subscription: "100",
          show: false,
          flag: true,
          icon: false,
          gb: "10%"
        }
      ];
      this.$set(data, "children", arr);
      if (data.children) {
        data.show = !data.show;
      }
      console.log(data, index);
    }
  },
  filters: {},
  computed: {
    scaleFun: function() {
      var scale = this.scale;
      return {
        transform: "scale(" + scale + ")"
      };
    }
  },
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
