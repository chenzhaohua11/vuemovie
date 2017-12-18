<template>
  <div class="hot">
    <div class="hot-content">
      <div class="hot-list">
        <h1 class="list-title">热门电影推荐</h1>
        <ul>
          <li v-for="(item,index) in hotList" :key="index" class="item">
            <div class="icon">
              <img src="" width="110" height="140" v-lazy="item.cover.url">
            </div>
             <div class="text">
                <h2 class="name" v-html="item.title"></h2>
                <p class="desc" v-html="item.info"></p>
              </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  import {getHot} from '../../api/hot'
  export default{
    data () {
      return {
        hotList: []
      }
    },
    created () {
      this._getHot()
    },
    methods: {
      _getHot () {
        getHot(0).then((res) => {
          this.hotList = res.subject_collection_items
        })
      }
    }
  
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/variable"

  .hot
    position: fixed
    width: 100%
    top: 88px
    bottom: 0
    .hot-content
      height: 100%
      overflow: auto
      .slider-wrapper
        position: relative
        width: 100%
        overflow: hidden
      .hot-list
        .list-title
          height: 65px
          line-height: 65px
          text-align: center
          font-size: $font-size-medium
          color: $color-theme
        .item
          display: flex
          box-sizing: border-box
          align-items: center
          padding: 0 20px 20px 20px
          .icon
            flex: 0 0 60px
            float left
            width: 120px
            padding-right: 20px
          .text
            display: flex
            flex-direction: column
            justify-content: center
            flex: 1
            line-height: 20px
            overflow: hidden
            font-size: $font-size-medium
            .name
              margin-bottom:30px
              margin-left: 20px 
              text-align: center
              font-size: 20px
              color: yellow
            .desc
              color: $color-text-d
      .loading-container
        position: absolute
        width: 100%
        top: 50%
        transform: translateY(-50%)
</style>