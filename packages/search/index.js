import SearchForm from './src/main.vue';

SearchForm.install = function(Vue) {
	Vue.component(SearchForm.name, SearchForm);
}

export default SearchForm