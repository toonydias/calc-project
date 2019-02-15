class CalcController {
	constructor(){
		this._locale = 'pt-BR';
		this._displayCalcEl = document.querySelector("#display");
		this._dateEl = document.querySelector("#data");
		this._timeEl = document.querySelector("#hora");
		this._currentDate;
		this.initialize();
	}
	initialize (){
		this.setDisplayDateTime ();

		setInterval(()=>{
			this.displayDate = this.currentDate.toLocaleDateString(this.locale,{
			day: "2-digit",
			month:"long",
			year:"numeric"
		});
			this.displayTime = this.currentDate.toLocaleTimeString(this.locale);
		}, 1000);
	}
	setDisplayDateTime (){
		this.displayDate = this.currentDate.toLocaleDateString(this.locale);
		this.displayTime = this.currentDate.toLocaleTimeString(this.locale);
	}
	get displayTime(){
		return this._timeEl.innerHTML;
	}
	set displayTime(value){
		return this._timeEl.innerHTML = value;
	}
	get displayDate(){
		return this._dateEl.innerHTML;
	}
	set displayDate(value){
		return this._dateEl.innerHTML = value;
	}
	get displayCalc(){
		return this._displayCalcEl.innerHTML;
	}
	set displayCalc(value){
		return this._displayCalcEl.innerHTML = value;
	}
	get currentDate(){
		return new Date;
	}
	set currentDate(value){
		return this._currentDate.innerHTML = value;
	}
}