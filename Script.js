	let result = document.getElementById('screen')
			const display = (a) => {
				if (a == 'clear') {
					result.value = ''
				} else if (a == 'del') {
					result.value = result.value.slice(0,-1)
				} else if (a == 'action') {
					result.value = eval(result.value)
				} else{
					result.value += a
				}
			}