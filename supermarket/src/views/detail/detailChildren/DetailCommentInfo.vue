<template>
  <div >
    <div class="bg-white rounded shadow-sm comment-card">
      <div class="comment-card-text">用户评价</div>
    </div>
    <div
      class="bg-white rounded shadow-sm comment-card "
      v-if="detailCommentInfo.cRate !== 0 && Object.keys(detailCommentInfo).length"
    >
      <div class="comment-user">
        <img
          :src="rate.user.avatar"
          v-if="rate.user.avatar"
          class="user-logo"
        />
        <div class="comment-uname">{{ rate.user.uname }}</div>
        <div class="comment-content">{{ rate.content }}</div>
        <div class="comment-time-content">
          <span class="comment-time">{{ time }}</span>
          <span>{{ rate.style }}</span>
          <img :src="rate.images" />
        </div>
      </div>
    </div>
    <div class="bg-white rounded shadow-sm comment-card" v-else>
      <p class="none-content">当前无评论</p>
    </div>
  </div>
</template>

<script>
import { transformTime } from "./../../../components/common/utils/detailTime";
export default {
  name: "DetailCommentInfo",
  props: {
    detailCommentInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      rate: {},
      time: "",
    };
  },
  watch: {
    detailCommentInfo() {
      if (this.detailCommentInfo.cRate !== 0) {
        console.log(this.detailCommentInfo);
        this.rate = this.detailCommentInfo.list[0];
        this.time = transformTime(this.rate.created * 1000);
      }
    },
  },
};
</script>

<style scoped lang="scss">
.comment-card {
  margin: 0.5em;
  padding: 0.5em;
  div {
    font-weight: bold;
    font-size: 1.2em;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
  }
}

.comment-user {
  .user-logo {
    width: 3em;
    height: 3em;
    float: left;
  }
  .comment-uname {
    font-size: 1em;
    height: 3em;
    line-height: 3em;
  }
}

.comment-time-content {
  span {
    font-size: 14px;
    font-weight: normal;
    margin-right: 1em;
  }
}

.comment-content {
  clear: both;
  font-size: 1em;
  font-weight: normal;
}

.none-content {
  margin: 0.2em;
  height: 2em;
  line-height: 2em;
  font-size: 1.2em;
  font-weight: bold;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}
</style>
