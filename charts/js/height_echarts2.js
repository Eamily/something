window.onload = function() {
	// 基于准备好的dom，初始化echarts实例
	var myChart1 = echarts.init(document.getElementById('w_one'));

	// 指定图表的配置项和数据
	var option1 = {
		title: {
			text: 'ECharts 入门示例'
		},
		tooltip: {},
		legend: {
			data: ['销量']
		},
		xAxis: {
			data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
		},
		yAxis: {},
		series: [{
			name: '销量',
			type: 'bar',
			data: [5, 20, 36, 10, 10, 20]
		}],
		grid: {
			top: 40, //距离容器上边界40像素
			bottom: 30, //距离容器下边界30像素
			left: 30,
			right: 30
		}
	};

	// 使用刚指定的配置项和数据显示图表。
	myChart1.setOption(option1);

	var myChart2 = echarts.init(document.getElementById('w_two'));
	var data = [];

	for(var i = 0; i <= 100; i++) {
		var theta = i / 100 * 360;
		var r = 5 * (1 + Math.sin(theta / 180 * Math.PI));
		data.push([r, theta]);
	}
	var option2 = {
		title: {
			text: '极坐标双数值轴'
		},
		legend: {
			data: ['line']
		},
		polar: {},
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'cross'
			}
		},
		angleAxis: {
			type: 'value',
			startAngle: 0
		},
		radiusAxis: {},
		series: [{
			coordinateSystem: 'polar',
			name: 'line',
			type: 'line',
			data: data
		}],

	};
	myChart2.setOption(option2);

	var myChart3 = echarts.init(document.getElementById('w_three'));
	var data = [];

	for(var i = 0; i <= 360; i++) {
		var t = i / 180 * Math.PI;
		var r = Math.sin(2 * t) * Math.cos(2 * t);
		data.push([r, i]);
	}

	option3 = {
		title: {
			text: '极坐标双数值轴'
		},
		legend: {
			data: ['line']
		},
		polar: {
			center: ['50%', '54%']
		},
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'cross'
			}
		},
		angleAxis: {
			type: 'value',
			startAngle: 0
		},
		radiusAxis: {
			min: 0
		},
		series: [{
			coordinateSystem: 'polar',
			name: 'line',
			type: 'line',
			showSymbol: false,
			data: data
		}],
		animationDuration: 2000
	};
	myChart3.setOption(option3);

	var myChart4 = echarts.init(document.getElementById('w_four'));
	option4 = {
		title: {
			text: '某站点用户访问来源',
			x: 'center'
		},
		tooltip: {
			trigger: 'item',
			formatter: "{a} <br/>{b} : {c} ({d}%)"
		},
		legend: {
			orient: 'vertical',
			left: 'left',
			data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
		},
		series: [{
			name: '访问来源',
			type: 'pie',
			radius: '55%',
			center: ['50%', '60%'],
			data: [{
					value: 335,
					name: '直接访问'
				},
				{
					value: 310,
					name: '邮件营销'
				},
				{
					value: 234,
					name: '联盟广告'
				},
				{
					value: 135,
					name: '视频广告'
				},
				{
					value: 1548,
					name: '搜索引擎'
				}
			],
			itemStyle: {
				emphasis: {
					shadowBlur: 10,
					shadowOffsetX: 0,
					shadowColor: 'rgba(0, 0, 0, 0.5)'
				}
			}
		}]
	};
	myChart4.setOption(option4);

	var myChart5 = echarts.init(document.getElementById('w_five'));
	option5 = {
		title: {
			text: '浏览器占比变化',
			top: 10,
			left: 10
		},
		tooltip: {
			trigger: 'item',
			backgroundColor: 'rgba(0,0,250,0.2)'
		},
		legend: {
			type: 'scroll',
			bottom: 10,
			data: (function() {
				var list = [];
				for(var i = 1; i <= 28; i++) {
					list.push(i + 2000 + '');
				}
				return list;
			})()
		},
		visualMap: {
			top: 'middle',
			right: 10,
			color: ['red', 'yellow'],
			calculable: true
		},
		radar: {
			indicator: [{
					text: 'IE8-',
					max: 400
				},
				{
					text: 'IE9+',
					max: 400
				},
				{
					text: 'Safari',
					max: 400
				},
				{
					text: 'Firefox',
					max: 400
				},
				{
					text: 'Chrome',
					max: 400
				}
			]
		},
		series: (function() {
			var series = [];
			for(var i = 1; i <= 28; i++) {
				series.push({
					name: '浏览器（数据纯属虚构）',
					type: 'radar',
					symbol: 'none',
					lineStyle: {
						width: 1
					},
					emphasis: {
						areaStyle: {
							color: 'rgba(0,250,0,0.3)'
						}
					},
					data: [{
						value: [
							(40 - i) * 10,
							(38 - i) * 4 + 60,
							i * 5 + 10,
							i * 9,
							i * i / 2
						],
						name: i + 2000 + ''
					}]
				});
			}
			return series;
		})()
	};
	myChart5.setOption(option5);

	var myChart6 = echarts.init(document.getElementById('w_six'));
	option6 = {
		backgroundColor: '#2c343c',

		title: {
			//					text: 'Customized Pie',
			left: 'center',
			top: 20,
			textStyle: {
				color: '#ccc'
			}
		},

		tooltip: {
			trigger: 'item',
			formatter: "{a} <br/>{b} : {c} ({d}%)"
		},

		visualMap: {
			show: false,
			min: 80,
			max: 600,
			inRange: {
				colorLightness: [0, 1]
			}
		},
		series: [{
			name: '访问来源',
			type: 'pie',
			radius: '55%',
			center: ['50%', '50%'],
			data: [{
					value: 335,
					name: '直接访问'
				},
				{
					value: 310,
					name: '邮件营销'
				},
				{
					value: 274,
					name: '联盟广告'
				},
				{
					value: 235,
					name: '视频广告'
				},
				{
					value: 400,
					name: '搜索引擎'
				}
			].sort(function(a, b) {
				return a.value - b.value;
			}),
			roseType: 'radius',
			label: {
				normal: {
					textStyle: {
						color: 'rgba(255, 255, 255, 0.3)'
					}
				}
			},
			labelLine: {
				normal: {
					lineStyle: {
						color: 'rgba(255, 255, 255, 0.3)'
					},
					smooth: 0.2,
					length: 5,
					length2: 5
				}
			},
			itemStyle: {
				normal: {
					color: '#c23531',
					shadowBlur: 200,
					shadowColor: 'rgba(0, 0, 0, 0.5)'
				}
			},

			animationType: 'scale',
			animationEasing: 'elasticOut',
			animationDelay: function(idx) {
				return Math.random() * 200;
			}
		}]
	};
	myChart6.setOption(option6);

	var myChart7 = echarts.init(document.getElementById('w_seven'));
	option7 = {
		title: {
			text: '漏斗图',
		},
		tooltip: {
			trigger: 'item',
			formatter: "{a} <br/>{b} : {c}%"
		},
		grid: {
			top: 10, //距离容器上边界40像素
			bottom: 0, //距离容器下边界30像素
		},
		legend: {
			data: ['展现', '点击', '访问', '咨询', '订单']
		},
		calculable: true,
		series: [{
			name: '漏斗图',
			type: 'funnel',
			left: '10%',
			top: 60,
			//x2: 80,
			bottom: 60,
			width: '80%',
			// height: {totalHeight} - y - y2,
			min: 0,
			max: 100,
			minSize: '0%',
			maxSize: '100%',
			sort: 'descending',
			gap: 2,
			label: {
				normal: {
					show: true,
					position: 'inside'
				},
				emphasis: {
					textStyle: {
						fontSize: 20
					}
				}
			},
			labelLine: {
				normal: {
					length: 10,
					lineStyle: {
						width: 1,
						type: 'solid'
					}
				}
			},
			itemStyle: {
				normal: {
					borderColor: '#fff',
					borderWidth: 1
				}
			},
			data: [{
					value: 60,
					name: '访问'
				},
				{
					value: 40,
					name: '咨询'
				},
				{
					value: 20,
					name: '订单'
				},
				{
					value: 80,
					name: '点击'
				},
				{
					value: 100,
					name: '展现'
				}
			]
		}]
	};

	myChart7.setOption(option7);

	var myChart8 = echarts.init(document.getElementById('w_eight'));
	var data = [
		[
			[28604, 77, 17096869, 'Australia', 1990],
			[31163, 77.4, 27662440, 'Canada', 1990],
			[1516, 68, 1154605773, 'China', 1990],
			[13670, 74.7, 10582082, 'Cuba', 1990],
			[28599, 75, 4986705, 'Finland', 1990],
			[29476, 77.1, 56943299, 'France', 1990],
			[31476, 75.4, 78958237, 'Germany', 1990],
			[28666, 78.1, 254830, 'Iceland', 1990],
			[1777, 57.7, 870601776, 'India', 1990],
			[29550, 79.1, 122249285, 'Japan', 1990],
			[2076, 67.9, 20194354, 'North Korea', 1990],
			[12087, 72, 42972254, 'South Korea', 1990],
			[24021, 75.4, 3397534, 'New Zealand', 1990],
			[43296, 76.8, 4240375, 'Norway', 1990],
			[10088, 70.8, 38195258, 'Poland', 1990],
			[19349, 69.6, 147568552, 'Russia', 1990],
			[10670, 67.3, 53994605, 'Turkey', 1990],
			[26424, 75.7, 57110117, 'United Kingdom', 1990],
			[37062, 75.4, 252847810, 'United States', 1990]
		],
		[
			[44056, 81.8, 23968973, 'Australia', 2015],
			[43294, 81.7, 35939927, 'Canada', 2015],
			[13334, 76.9, 1376048943, 'China', 2015],
			[21291, 78.5, 11389562, 'Cuba', 2015],
			[38923, 80.8, 5503457, 'Finland', 2015],
			[37599, 81.9, 64395345, 'France', 2015],
			[44053, 81.1, 80688545, 'Germany', 2015],
			[42182, 82.8, 329425, 'Iceland', 2015],
			[5903, 66.8, 1311050527, 'India', 2015],
			[36162, 83.5, 126573481, 'Japan', 2015],
			[1390, 71.4, 25155317, 'North Korea', 2015],
			[34644, 80.7, 50293439, 'South Korea', 2015],
			[34186, 80.6, 4528526, 'New Zealand', 2015],
			[64304, 81.6, 5210967, 'Norway', 2015],
			[24787, 77.3, 38611794, 'Poland', 2015],
			[23038, 73.13, 143456918, 'Russia', 2015],
			[19360, 76.5, 78665830, 'Turkey', 2015],
			[38225, 81.4, 64715810, 'United Kingdom', 2015],
			[53354, 79.1, 321773631, 'United States', 2015]
		]
	];

	option8 = {
		//				backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
		//					offset: 0,
		//					color: '#f7f8fa'
		//				}, {
		//					offset: 1,
		//					color: '#cdd0d5'
		//				}]),
		title: {
			text: '1990 与 2015 年各国家人均寿命与 GDP'
		},
		legend: {
			right: 10,
			data: ['1990', '2015']
		},
		xAxis: {
			splitLine: {
				lineStyle: {
					type: 'dashed'
				}
			}
		},
		yAxis: {
			splitLine: {
				lineStyle: {
					type: 'dashed'
				}
			},
			scale: true
		},
		series: [{
			name: '1990',
			data: data[0],
			type: 'scatter',
			symbolSize: function(data) {
				return Math.sqrt(data[2]) / 1e3;
			},
			label: {
				emphasis: {
					show: true,
					formatter: function(param) {
						return param.data[3];
					},
					position: 'top'
				}
			},
			itemStyle: {
				normal: {
					shadowBlur: 10,
					shadowColor: 'rgba(120, 36, 50, 0.5)',
					shadowOffsetY: 5,
					color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
						offset: 0,
						color: 'rgb(251, 118, 123)'
					}, {
						offset: 1,
						color: 'rgb(204, 46, 72)'
					}])
				}
			}
		}, {
			name: '2015',
			data: data[1],
			type: 'scatter',
			symbolSize: function(data) {
				return Math.sqrt(data[2]) / 1e3;
			},
			label: {
				emphasis: {
					show: true,
					formatter: function(param) {
						return param.data[3];
					},
					position: 'top'
				}
			},
			itemStyle: {
				normal: {
					shadowBlur: 10,
					shadowColor: 'rgba(25, 100, 150, 0.5)',
					shadowOffsetY: 5,
					color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
						offset: 0,
						color: 'rgb(129, 227, 238)'
					}, {
						offset: 1,
						color: 'rgb(25, 183, 207)'
					}])
				}
			}
		}]
	};
	myChart8.setOption(option8);

	var myChart9 = echarts.init(document.getElementById('w_nine'));
	option9 = {
		tooltip: {
			formatter: "{a} <br/>{b} : {c}%"
		},
		series: [{
			name: '业务指标',
			type: 'gauge',
			detail: {
				formatter: '{value}%'
			},
			data: [{
				value: 50,
				//						name: '完成率'
			}]
		}]
	};

	setInterval(function() {
		option9.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
		myChart9.setOption(option9, true);
	}, 2000);

	myChart9.setOption(option9);

	var myChart10 = echarts.init(document.getElementById('w_ten'));
	option10 = {
		title: {
			text: '南丁格尔玫瑰图',
			x: 'center'
		},
		tooltip: {
			trigger: 'item',
			formatter: "{a} <br/>{b} : {c} ({d}%)"
		},
		legend: {
			x: 'center',
			y: 'bottom',
			data: ['rose1', 'rose2', 'rose3', 'rose4', 'rose5', 'rose6', 'rose7', 'rose8']
		},
		calculable: true,
		series: [{
				name: '半径模式',
				type: 'pie',
				radius: [20, 110],
				center: ['25%', '50%'],
				roseType: 'radius',
				label: {
					normal: {
						show: false
					},
					emphasis: {
						show: true
					}
				},
				lableLine: {
					normal: {
						show: false,
					},
					emphasis: {
						show: true
					}
				},
				data: [{
						value: 10,
						name: 'rose1'
					},
					{
						value: 5,
						name: 'rose2'
					},
					{
						value: 15,
						name: 'rose3'
					},
					{
						value: 25,
						name: 'rose4'
					},
					{
						value: 20,
						name: 'rose5'
					},
					{
						value: 35,
						name: 'rose6'
					},
					{
						value: 30,
						name: 'rose7'
					},
					{
						value: 40,
						name: 'rose8'
					}
				]
			},
			{
				name: '面积模式',
				type: 'pie',
				radius: [30, 110],
				center: ['75%', '50%'],
				roseType: 'area',
				labelLine: {
					normal: {
						smooth: 0.2,
						length: 5,
						length2: 5
					}
				},
				data: [{
						value: 10,
						name: 'rose1'
					},
					{
						value: 5,
						name: 'rose2'
					},
					{
						value: 15,
						name: 'rose3'
					},
					{
						value: 25,
						name: 'rose4'
					},
					{
						value: 20,
						name: 'rose5'
					},
					{
						value: 35,
						name: 'rose6'
					},
					{
						value: 30,
						name: 'rose7'
					},
					{
						value: 40,
						name: 'rose8'
					}
				]
			}
		]
	};

	myChart10.setOption(option10);

	//	var myChart11 = echarts.init(document.getElementById('w_elven'));
	//
	//	// 指定图表的配置项和数据
	//	var option11 = {
	//		title: {
	//			text: 'ECharts 入门示例'
	//		},
	//		tooltip: {},
	//		legend: {
	//			data: ['销量']
	//		},
	//		xAxis: {
	//			data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
	//		},
	//		yAxis: {},
	//		series: [{
	//			name: '销量',
	//			type: 'bar',
	//			data: [5, 20, 36, 10, 10, 20]
	//		}],
	//		grid: {
	//			top: 40, //距离容器上边界40像素
	//			bottom: 30, //距离容器下边界30像素
	//			left: 30,
	//			right: 30
	//		}
	//	};
	//
	//	// 使用刚指定的配置项和数据显示图表。
	//	myChart11.setOption(option11);

	//窗口大小发生变动时，图标跟随变动
	window.onresize = function() {
		myChart1.resize();
		myChart2.resize(); //若有多个图表变动，可多写
		myChart3.resize();
		myChart4.resize();
		myChart5.resize();
		myChart6.resize();
		myChart7.resize();
		myChart8.resize();
		myChart9.resize();
		myChart10.resize();
		//		myChart11.resize();
	}
}