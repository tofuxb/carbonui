<template>
<a href="javascript:;" 
	class="cbui_btn" 
	:class="[disabled ? 'cbui_btn_disabled' : '', large ? 'cbui_btn_large' : '']">
	<slot></slot>
</a>
</template>

<script>
export default {
	props: {
		/**
		 * 按钮颜色类型
		 * primary 主颜色
		 * default 默认颜色
		 */
		type: {
			type: String,
			default: 'primary',
			required: false
		},

		/**
		 * 是否为disabled，若为true则阻止点击事件
		 */
		disabled: {
			type: Boolean,
			default: false,
			required: false
		},

		large: {
			type: Boolean,
			default: false,
			required: false
		}
	}
}
</script>

<style lang="less">

	.cbui_btn {
		padding-left: 10px;
		padding-right: 10px;
		height: 36px;
		line-height: 36px;
		border-radius: 3px;
	}

</style>