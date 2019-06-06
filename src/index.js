import SearchTablePagination from '../packages/search-table-pagination/index.js';
import SearchForm from '../packages/search/index.js';

import pkg from '../package.json';

const components = [SearchTablePagination, SearchForm];

const install = (Vue, opts = {}) => {
  components.map(component => {
    Vue.component(component.name, component);
  });
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  version: pkg.version,
  install,
  SearchTablePagination,
  SearchForm
}