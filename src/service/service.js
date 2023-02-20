import Axios from "../model/axios"
import api from "../model/api"
//热门歌单推荐
export const  topPlayList =(params)=>Axios({
    method:"get",
    url:api.playlist["top-playlist"],
    params
})