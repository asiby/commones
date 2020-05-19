
(function(window, data) {
	commonES && commonES.register(class Foo {
		constructor() {
			console.log("Foo was instantiated")
		}

		static snafu() {
			console.log("Foo::snafu() was called")
		}

		fubar() {
			console.log("Foo.fubar() was called")
		}
	}, data, 'Foo')
})(window, Object.assign({ hash: '', namespace: ''}, document.currentScript.dataset))
