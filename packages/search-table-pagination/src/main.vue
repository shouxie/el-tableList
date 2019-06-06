<template>
	<div>
		<search-form></search-form>
		<el-table
			v-loading.lock="loading"
			ref="table"
			:data="tableData"
		>
			
		</el-table>
		<div v-if="showPagination">
			<el-pagination
				@size-change="handleSizeChange"
				@current-change="handleCurrentChange"
				:current-page="pagination.pageIndex"
				:page-sizes="pageSizes"
				:page-size="pagination.pageSize"
				:layout="paginationLayout"
				:total="total">
			</el-pagination>
    </div>
	</div>
</template>
<script>
	import Vue from 'vue';
	import props from './props';
	import searchForm from '../../search/src/main.vue';

	export default {
		name: 'ElSearchTablePagination',
		components: {
			searchForm
		},
		props,
		data () {
			const _this = this;
			return {
				Vue,
				paginatin: {
					pageIndex: 1,
					pageSize: (() => {
						const { pagesizes } = _this;
						if (pagesizes.length > 0) {
							return pageSizes[0];
						}
						return 10;
					})()
				},
				total: 0,
				loading: false,
				tableData: []
			}
		},
		methods: {
			
		}
	}
</script>