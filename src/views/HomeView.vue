<template>
  <div class="main">
    <div class="appMusic">
      <div class="title">
        <p class="header">by Apple Music</p>
      </div>
      <div class="classRow">
        <dl v-for="item in AppleMusic" :key="item.id">
          <dd>
            <div class="playbutton">
              <svg-icon icon-file-name="play" class="play"></svg-icon>
            </div>
            <img :src="item.appleMusicUrl" alt="" />
          </dd>
          <dt>
            <a>{{ item.name }}</a>
            <p>by Apple Music</p>
          </dt>
        </dl>
      </div>
    </div>
    <div class="hot-playlist">
      <div class="title">
        <p class="header">{{ $t("home.recommendPlaylist") }}</p>
        <a>{{ $t("home.seeMore") }}</a>
      </div>
      <div class="classRow">
        <dl v-for="item in topPlayList" :key="item.id">
          <dd>
            <div class="playbutton">
              <svg-icon icon-file-name="play" class="play"></svg-icon>
            </div>
            <img :src="item.picUrl" alt="" />
          </dd>
          <dt>
            <a>{{ item.name }}</a>
          </dt>
        </dl>
      </div>
    </div>
    <div class="ForYour">
      <div class="title">
        <p class="header">{{ $t("home.foryou") }}</p>
        <!-- <a>{{ $t("home.seeMore") }}</a> -->
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import { byAppleMusic } from "@/model/appleMusic.js";
import { topPlayList } from "@/service/service";
import axios from "axios"
export default {
  // name: '',
  data() {
    return {
      topPlayList: [],
      foryouList:[]
    };
  },
  components: {},
  computed: {
    AppleMusic() {
      return byAppleMusic;
    },
  },
  async created() {
    let { data: playlist } = await topPlayList({ limit: 10 });
    if (playlist.code == 200) {
      this.topPlayList = playlist.result;
    }
    console.log(this.topPlayList);
    axios({
      url:"https://mock.apifox.cn/m1/2360032-0-default/foryou1",
      methods:"get"
    }).then(res=>{
      console.log(res);
      this.foryouList=res.data
    })

  },
};
</script>
<style scoped lang="scss">
.main {
  position: absolute;
  // background-color: aqua;
  left: 0;
  width: 80vw;
  padding-left: 10vw;
  padding-right: 10vw;
  overflow: auto;
  max-height: calc(100vh - 128px);
  .title {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    height: 80px;
    line-height: 70px;
    color: var(--color-text);
    .header {
      font-size: 25px;
      font-weight: 700;
    }
    a {
      &:hover {
        text-decoration: underline;
      }
      font-weight: 600;
      font-size: 13px;
    }
  }
  .classRow {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    dl {
      width: 18%;
      color: var(--color-text);

      img {
        font-size: 0;
        border-radius: 10px;
        width: 100%;
        height: 100%;
      }
      dd {
        position: relative;
        padding: 0;
        .playbutton {
          display: none;
        }
        &:hover {
          .playbutton {
            position: absolute;
            left: 50%;
            top: 50%;
            margin-left: -11%;
            margin-top: -14%;
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
            //背景滤镜
            backdrop-filter: blur(8px);
            background: rgba(255, 255, 255, 0.14);
            border: 1px solid rgba(255, 255, 255, 0.08);
            height: 20%;
            width: 22%;
            border-radius: 50%;
            cursor: default;
            transition: 0.2s;
            .play {
              height: 44%;
              margin: {
                left: 4px;
              }
            }
            &:hover {
              background: rgba(255, 255, 255, 0.28);
            }
            &:active {
              transform: scale(0.94);
            }
          }
        }
      }
      dt {
        margin-top: -15px;
        a {
          display: block;
          // height: 30px;
          line-height: 25px;
          font-size: 16px;
          font-weight: 700;
          &:hover {
            text-decoration: underline;
          }
        }
        p {
          height: 20px;
          font-size: 14px;
          line-height: 20px;
        }
      }
    }
  }
  .hot-playlist {
    dt {
      font-size: 16px;
    }
    .classRow {
      dl:nth-child(1) {
        dt {
          margin-bottom: 20px;
        }
      }
    }
  }
}
</style>
