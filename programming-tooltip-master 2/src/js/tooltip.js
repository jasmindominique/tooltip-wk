class Tooltip{


	$tooltips = null
	tooltipDiv = null

	constructor(selector){

		console.log('creating a tooltip', selector);

		this.$tooltips = document.querySelectorAll(selector);

		this.$tooltips.forEach(($tooltip) => {
			this.setupTooltip($tooltip);
		});

		//creating the tooltip div
		this.tooltipDiv = document.createElement('div');
		this.tooltipDiv.innerHTML = 'TEST'
		this.tooltipDiv.classList.add('show-tooltip')
		document.body.appendChild(this.tooltipDiv)
	}

	setupTooltip($tooltip){
		console.log('tip', $tooltip);

		var tooltipText = $tooltip.getAttribute('data-tooltip')
		console.log('text, tooltipText')

		if (!tooltipText){
			return
		}

		console.log('setting up tooltip for', tooltipText);

		$tooltip.addEventListener('mouseover', this.mouseover);
		// $tooltip.addEventListener('mouseover', function(){
		// 	console.log ('mousing over');
		// })
	}

		//mouseover(evt){ 'this' maps to the evt.target
		mouseover = (evt) => { //'this' maps to the tooltip instance
			console.log('mousing over', evt.target, evt);

			var tooltipText = evt.target.getAttribute('data-tooltip')
			this.tooltipDiv.innerHTML = tooltipText
		}	
	}














