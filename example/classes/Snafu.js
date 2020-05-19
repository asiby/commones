
(function(window, data) {
	commonES && commonES.register(class Snafu {
		constructor() {
			console.log("Snafu was instantiated")
		}

		static snafu() {
			console.log("Snafu::snafu() was called")
		}

		fubar() {
			console.log("Snafu.fubar() was called")
		}
	}, data)
})(window, Object.assign({ hash: '', namespace: ''}, document.currentScript.dataset))
