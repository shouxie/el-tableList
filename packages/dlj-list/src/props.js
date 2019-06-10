export const props = {
	breads: {
		type: Array
	},
	title: {
		type: String,
		required: true
	},
	labelWidth: {
		type: Number,
		default: 145
	},
	forms: {
		type: Array
	},
	searchBtns: {
		type: Array
	},
	globalBtns: {
		type: Array
	},
	cols: {
		type: Array
	},
	list: {
		type: Array
	},
	total: {
		type: Number
	},
	pageSizeKey: {
		type: String,
		default: 'limit'
	},
	pageStartKey: {
		type: String,
		default: 'start'
	},
	tableBtns: {
		type: Array
	}
}