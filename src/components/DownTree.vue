
<template>
    <div class="tree" >
      <div class="max_width">
        <ul>
            <li v-for = "(item,index) in folder" :key = "index">
                <div v-if="hide">
                  <toptree v-if="item.upChildren" :folder = "item.upChildren" :select = "select" class="top"></toptree>
                </div>
                <div v-if="item.icon" :class="{'icon':true,'iconfont':true,'icon-icon_roundadd_fill':!item.up,'icon-icon_roundreduce_fil':item.up }" class="pointer" @click = "sel(item,index)"></div>
                <a>
                  <div class="center">{{ item.gb }}</div>
                  <div class="company center">{{ item.company }}</div>
                  <div class="submoney center" v-if="!item.flag">投资方</div>
                  <div v-if="item.flag" class="center"><span>注册金额</span>{{ item.Subscription }} 万元</div>
                </a>
                <div :class="{'icon':true,'iconfont':true,'icon-icon_roundadd_fill':!item.show,'icon-icon_roundreduce_fil':item.show }" class="pointer" @click = "select(item,index)"></div>
                <tree v-if = "item.show" :folder = "item.children" :select = "select" ></tree>
            </li>
        </ul>
      </div>
    </div>
</template>

<script>
import toptree from "./UpTree";
import Bus from "../assets/js/bus.js";
export default {
  name: "tree",
  props: ["folder", "select", "sel"],
  components: { toptree },
  data() {
    return {
      hide: false
    };
  },
  methods: {},
  filters: {},
  computed: {},
  watch: {},
  created() {},
  mounted() {
    Bus.$on("hide", content => {
      // alert(1111)
      this.hide = content;
    });
    console.log(this.hide);
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.max_width {
  width: 100%;
  /* height: 180px; */
}

.tree {
  transform-origin: 50% 50% 0;
}
.icon {
  width: 30px;
  font-size: 16px;
  color: #000000;
  margin: 0 auto;
  position: relative;
  left: 0;
  top: 0px;
}

.tree ul {
  display: flex;
  padding-top: 20px;
  position: relative;
  transition: all 0.5s;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  box-sizing: border-box;
  justify-content: center;
}
/* 给相同类名的第一个加相同的样式 */
/* .tree:nth-of-type(1){
  margin-top: 7%;
  padding-left: 58%;
  box-sizing: border-box;
} */
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

/*绘制连接器*/
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

/*删除仅只有一个分支的分支线*/
.tree li:only-child::after,
.tree li:only-child::before {
  display: none;
}

.tree li:only-child {
  padding-top: 0;
}

/*从第一个子级拆下左连接器，从最后一个子级拆下右连接器*/
.tree li:first-child::before,
.tree li:last-child::after {
  border: 0 none;
  box-sizing: border-box;
}

/*将垂直连接线添加回最后一个节点*/
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

/*添加仅只有一个分支的下分支线*/
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

.center {
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
