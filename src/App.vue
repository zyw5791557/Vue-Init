<template>
	<div id="app">
		<transition name="fade"
		            mode="out-in">
			<router-view></router-view>
		</transition>
	</div>
</template>

<script>
export default {
	name: 'app',
	components: {
		
	}
}

</script>

<style lang="scss">
@import url('./assets/style/common/reset.css');
@import url('./assets/style/common/normalize.css');
.fade-enter-active,
.fade-leave-active {
	transition: all .3s ease;
}

.fade-enter,
.fade-leave-active {
	opacity: 0;
}

// 自定义样式重置
html,
body,
#app {
	width: 100%;
	height: 100%;
}
h1,h2,h3,h4,h5,h6 {
    margin: 0;
    padding: 0;
}
a {
    color: rgba(255, 255, 255, 1);
    text-decoration: none;
}
</style>