<template>
	<div class='dlj-search'>
		<div>dcdscdcscsdcscsccscscscscssc</div>
		<!-- <el-form inline ref="dlj-form" :label-width="`${labelWidth}px`" label-position="right">
			<el-form-item v-for="(form, index) in forms" :key="index" :label="form.labelType === 'string' ? form.label : ''">
				<el-select
					v-if="form.labelType === 'html'"
					v-modal="params[form.modelLabelValue]"
					:style="`${labelWidth}px`"
				>
					<el-option 
						v-for="(option, optionIndex) in form.labelOptions" 
						:key="optionIndex"
						:label="(typeof option === 'object') ? option[form.labelKey || 'label'] : option"
						:value="(typeof option === 'object') ? option[form.valueKey || 'label'] : option"
					></el-option>
				</el-select>
				<el-input
				 	v-if="form.itemType==='input'" 
				 	v-model="params[form.modelValue]" 
				 	:style="formItemWidth"
				 	:palceholder="form.palceholder"
				 >
				</el-input>
				<el-date-picker
					v-else-if="form.itemType==='date'"
					v-modal="params[form.modelValue]"
					:style="formItemWidth"
				 	:palceholder="form.palceholder"
				 	:format="form.format || 'yyyy-MM-dd HH:mm:ss'"
				 	:value-format="form.valueFormat || 'yyyy-MM-dd HH:mm:ss'"
				 	:type="form.dateType || 'datetime'"
				 	:picker-options="form.pickerOptions || {}"
				 	@change="date => form.change(date)"
				>
				</el-date-picker>
				<template v-else-if="form.itemType==='daterange'">
					<el-date-picker
						v-modal="params[form.modelValue1]"
						:style="formItemWidth"
					 	:palceholder="form.palceholder"
					 	:format="form.format || 'yyyy-MM-dd HH:mm:ss'"
					 	:value-format="form.valueFormat || 'yyyy-MM-dd HH:mm:ss'"
					 	:type="form.dateType || 'datetime'"
					 	:picker-options="form.pickerOptions || {}"
					 	@change="date => form.changeStart(date)"
					>
					</el-date-picker>
					<span>~</span>
					<el-date-picker
						v-modal="params[form.modelValue2]"
						:style="formItemWidth"
					 	:palceholder="form.palceholder"
					 	:format="form.format || 'yyyy-MM-dd HH:mm:ss'"
					 	:value-format="form.valueFormat || 'yyyy-MM-dd HH:mm:ss'"
					 	:type="form.dateType || 'datetime'"
					 	:picker-options="form.pickerOptions || {}"
					 	@change="date => form.changeEnd(date)"
					>
					</el-date-picker>
				</template>
				<el-select
					v-else-if="form.itemType === 'select'"
					v-modal="params[form.modelValue]"
					:style="formItemWidth"
				 	:palceholder="form.palceholder"

				>
					<el-option 
						v-for="(option, optionIndex) in form.options" 
						:key="optionIndex"
						:label="(typeof option === 'object') ? option[form.labelKey || 'label'] : option"
						:value="(typeof option === 'object') ? option[form.valueKey || 'label'] : option"
					></el-option>
				</el-select>
			</el-form-item>
		</el-form> -->
		<!-- <div class='dlj-searchBtn-area'>
			<el-button type='primary' @click="search">查询</el-button>
			<el-button type='primary' @click="reset">重置</el-button>
		</div> -->
	</div>
</template>
<script>
	import { formProps } from './props';

	export default {
		name: "DljSearchForm",
		props: formProps,
		// data () {
		// 	const { forms } = this.$props;
		// 	let params = {};
		// 	forms.forEach(form => {
		// 		const propType = typeof form.prop;
		// 		if (form.labelType === 'html') {
		// 			params[form.labelProp] = '';
		// 		}
		// 		if (propType === 'string') {
		// 			params[form.prop] = '';
		// 		} else {
		// 			form.prop.forEach(v => {
		// 				params[v] = '';
		// 			});
		// 		}
		// 	});
		// 	return {
		// 		formItemWidth: '204px',
		// 		params
		// 	}

		// },
		methods: {
			isArray(val) {
				return typeof val === 'object' && Object.prototype.toString.call(val) === '[object Array]';
			},
			search() {

			},
			getParams(callback) {
				const { params } = this;
				if (callback) callback(null, params);
			}
		}
	}
</script>
<style lang='less' scoped>
@import '../../styles/search.less';
</style>