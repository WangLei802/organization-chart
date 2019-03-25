
<template>
    <div class="tree" >
      <div class="max_width">
        <ul>
            <li v-for = "(item,index) in folder" :key = "index">
                <a class="text">
                  <div v-if="!item.flag">股东</div>
                  <div class="company">{{ item.company }}</div>
                  <div class="submoney" v-if="item.flag"><span>注册金额：</span>{{ item.Subscription }}<span>万元</span></div>
                  <div v-if="item.flag"><span>股比：</span>{{ item.gb }}</div>
                </a>
                <div :class="{'icon':true,'iconfont':true,'icon-icon_roundadd_fill':!item.show,'icon-icon_roundreduce_fil':item.show }" class="pointer" @click = "select(item,index)"></div>
                <tree v-if = "item.show" :folder = "item.children" :select= "select" ></tree>
            </li>
        </ul>
      </div>
    </div>
</template>

<script>
export default {
  name: "tree",
  props: ["folder", "select"],
  components: {},
  data() {
    return {};
  },
  methods: {},
  filters: {},
  computed: {},
  watch: {},
  created() {},
  mounted() {}
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.text {
  transform: rotate(180deg);
}
.tree {
  transform-origin: 50% 50% 0;
  transform: rotate(180deg);
}

.top {
  transform: scale(1);
}
.max_width {
  width: 100%;
  height: 180px;
  transform-origin: 50% 50% 0;
  transform: rotate(180deg);
  display: flex;
  justify-content: center;
}

.icon {
  width: 30px;
  font-size: 16px;
  color: #000000;
  margin: 0 auto;
}

.tree ul {
  display: flex;
  padding-top: 20px;
  position: relative;
  transition: all 0.5s;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  box-sizing: border-box;
}

.tree li {
  text-align: center;
  list-style-type: none;
  position: relative;
  padding: 20px 5px 0 5px;
  box-sizing: border-box;
  transition: all 0.5s;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
}

.tree li::before,
.tree li::after {
  content: "";
  position: absolute;
  top: 0;
  right: 50%;
  border-top: 1px solid #ccc;
  box-sizing: border-box;
  width: 50%;
  height: 20px;
}
.tree li::after {
  right: auto;
  left: 50%;
  border-left: 1px solid #ccc;
  box-sizing: border-box;
}

.tree li:only-child::after,
.tree li:only-child::before {
  display: none;
}

.tree li:only-child {
  padding-top: 0;
}

.tree li:first-child::before,
.tree li:last-child::after {
  border: 0 none;
  box-sizing: border-box;
}

.tree li:last-child::before {
  border-right: 1px solid #ccc;
  box-sizing: border-box;
  border-radius: 0 5px 0 0;
  -webkit-border-radius: 0 5px 0 0;
  -moz-border-radius: 0 5px 0 0;
}
.tree li:first-child::after {
  border-radius: 5px 0 0 0;
  -webkit-border-radius: 5px 0 0 0;
  -moz-border-radius: 5px 0 0 0;
  box-sizing: border-box;
}
.pointer {
  cursor: pointer;
}

.tree ul ul::before {
  content: "";
  position: absolute;
  top: 0;
  left: 50%;
  border-left: 1px solid #ccc;
  height: 20px;
  box-sizing: border-box;
}

.tree li a {
  border: 1px solid #ccc;
  width: 180px;
  padding: 10px 10px;
  text-decoration: none;
  color: #666;
  font-family: arial, verdana, tahoma;
  font-size: 12px;
  display: inline-block;
  text-align: left;
  border-radius: 5px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  line-height: 20px;
  transition: all 0.5s;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  box-sizing: border-box;
}
.tree li a:first-child {
  text-align: center;
}
.company {
  white-space: normal;
  word-wrap: break-word;
  word-break: break-all;
}
.submoney {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
