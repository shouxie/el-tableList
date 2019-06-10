import DljList from './src/main.vue';

DljList.install = function(Vue) {
	Vue.component(DljList.name, DljList);
}

export default DljList