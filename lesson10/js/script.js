class options{
	constructor(height, width, bg, fontSize, textAlign){
		this.height = height;
		this.width = width;
		this.bg = bg;
		this.fontSize = fontSize;
		this.textAlign = textAlign;
	}

	newDiv(){
		let nDiv = document.createElement('div');
		document.body.appendChild(nDiv);
		nDiv.innerHTML = prompt('Какой текст ввести в наш елемент?', '');
		nDiv.style.cssText=`height: ${this.height}; 
							width: ${this.width}; 
							background: ${this.bg}; 
							font-size: ${this.fontSize}; 
							text-align: ${this.textAlign};`;
	}
}

const elem = new options('200px','200px','yellow','12px','center');

elem.newDiv();