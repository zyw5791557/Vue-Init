<template>
	<div class="home">
		<div id="wrapper">
			<h1>{{ author }}</h1>
			<h2>{{ wisdom }}</h2>
			<p>
				<a class="item" id="doc" :href="apiDoc" target="_blank">{{ apiText }}</a>
			</p>
			<ul>
				<router-link class="item" :to="{ name: 'Music' }" tag="li">{{ itemMusicText }}</router-link>
			</ul>
		</div>
		<canvas></canvas>
	</div>
</template>

<script>
export default {
	data() {
		return {
			author: 'Emlice',
			wisdom: 'Write the Code, Change the World',
			apiDoc: 'https://zyw5791557.github.io/EmliceMusicApi/#/',
			apiText: 'View the API document',
			itemMusicText: 'Listening to music'
		}
	},
	methods: {
		drawCanvas() {
			document.addEventListener('touchmove', function(e) {
				e.preventDefault()
			})
			var c = document.getElementsByTagName('canvas')[0],
				x = c.getContext('2d'),
				pr = window.devicePixelRatio || 1,
				w = window.innerWidth,
				h = window.innerHeight,
				f = 90,
				q,
				m = Math,
				r = 0,
				u = m.PI * 2,
				v = m.cos,
				z = m.random
			c.width = w * pr
			c.height = h * pr
			x.scale(pr, pr)
			x.globalAlpha = 0.6
			function i() {
				x.clearRect(0, 0, w, h)
				q = [{ x: 0, y: h * .7 + f }, { x: 0, y: h * .7 - f }]
				while (q[1].x < w + f) d(q[0], q[1])
			}
			function d(i, j) {
				x.beginPath()
				x.moveTo(i.x, i.y)
				x.lineTo(j.x, j.y)
				var k = j.x + (z() * 2 - 0.25) * f,
					n = y(j.y)
				x.lineTo(k, n)
				x.closePath()
				r -= u / -50
				x.fillStyle = '#' + (v(r) * 127 + 128 << 16 | v(r + u / 3) * 127 + 128 << 8 | v(r + u / 3 * 2) * 127 + 128).toString(16)
				x.fill()
				q[0] = q[1]
				q[1] = { x: k, y: n }
			}
			function y(p) {
				var t = p + (z() * 2 - 1.1) * f
				return (t > h || t < 0) ? y(p) : t
			}
			document.onclick = i
			document.ontouchstart = i
			i()
		},
		stopPropagation() {
			let eles = document.getElementsByClassName('item');
			for(let i = 0; i < eles.length; i++) {
				eles[i].onclick = function(e) {
					window.event? window.event.cancelBubble = true : e.stopPropagation();
				}
			}
		}
	},
	mounted() {
		this.drawCanvas();
		this.stopPropagation();
		setTimeout(() => {
            this.$NProgress.done();
        }, 0);
	}
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css?family=Open+Sans');

.home {
	font-family: 'Open Sans', sans-serif;
	font-size: 50px;
	color: #333;
}

#wrapper {
	position: absolute;
	left: 0;
	width: 320px;
	text-align: center;
	top: 50%;
	left: 50%;
	margin-left: -160px;
	margin-top: -160px;
	-webkit-user-select: none;
	-moz-user-select: none;
	user-select: none;
}

h1 {
	font-weight: 700;
	font-size: 30px;
	letter-spacing: 9px;
	text-transform: uppercase;
	margin: 12px 0;
	left: 4px;
}

h2 {
	color: #999;
	font-weight: normal;
	font-size: 15px;
	letter-spacing: .12em;
	margin-bottom: 30px;
	left: 3px;
}

h1,
h2 {
	position: relative;
}

p,
ul {
	font-size: 14px;
	line-height: 2em;
	margin: 0;
	letter-spacing: 2px;
}

canvas {
	position: absolute;
	top: 0;
	left: 0;
	z-index: 0;
	width: 100%;
	height: 100%;
	pointer-events: none;
}

.item {
	color: #999;
	text-decoration: none;
	transition: color .3s ease;
	cursor: pointer;
	&:hover {
		color: #f33;
	}
}
</style>
