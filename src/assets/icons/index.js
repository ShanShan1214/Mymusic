//svg文件中创建js并引入svg组件
import Vue from 'vue';
import SvgIcon from '@/components/SvgIcon';

Vue.component('svg-icon', SvgIcon);//全局注册svgIcon

const requireAll = requireContext => requireContext.keys().map(requireContext);
const req = require.context('./', true, /\.svg$/);
requireAll(req);