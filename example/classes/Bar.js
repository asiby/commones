
(function(window, data) {
	commonES && commonES.register(class Bar {
		constructor() {
			console.log("Bar was instantiated")
		}

		static snafu() {
			console.log("Bar::snafu() was called")
		}

		fubar() {
			console.log("Bar.fubar() was called")
		}
	}, data)
})(window, Object.assign({ hash: '', namespace: ''}, document.currentScript.dataset))
