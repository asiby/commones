
class CommonES {
	constructor() {
		this.namespaces = {
			'commonES': new Map()
		}

		this.uniqueScriptUrls = new Set()

		this.namespace = 'commonES'

		/*Object.defineProperty(this, 'currentNamespace', {
			get: () => {
				return this.namespace || 'commonES'
			}
		})*/
	}

	createUUID() {
		let dt = new Date().getTime()
		return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
			let r = (dt + Math.random() * 16) % 16 | 0
			dt = Math.floor(dt / 16)
			return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16)
		})
	}

	ns(namespace) {
		// Push and set the default
		this.namespace = namespace

		if (!(this.namespaces.hasOwnProperty(this.namespace))) {
			this.namespaces[this.namespace] = new Map()
		}

		return this
	}

	register(classDeclaration, {hash, namespace}, classId) {
		let ns = namespace || this.namespace

		if (!this.namespaces[ns].has(hash)) {
			return
		}

		let classRef = this.namespaces[ns].get(hash) || classId;

		if (window[ns] && window[ns][classRef]) return
		if (!window[ns]) window[ns] = {}
		if (!window[ns][classRef]) window[ns][classRef] = classDeclaration
	}

	require(script, classId = null, namespace = null) {
		// Avoid loading a script multiple times.
		if (this.uniqueScriptUrls.has(`${this.namespace}::${script}`)) {
			return
		}

		if (namespace) {
			this.namespace = namespace
		}

		this.namespace = this.namespace || 'commonES'

		let hash = this.createUUID()

		// Keep track of the added script
		this.namespaces[this.namespace].set(hash, classId)

		try {
			let tag = 'script'
			let scriptTag = document.createElement(tag) // create a script tag
			let firstScriptTag = document.getElementsByTagName(tag)[0] // find the first script tag in the document
			scriptTag.src = script // set the source of the script to your script
			scriptTag.dataset.namespace = this.namespace
			scriptTag.dataset.hash = hash
			firstScriptTag.insertAdjacentElement('beforebegin', scriptTag) // append the script to the DOM
			//firstScriptTag.parentNode.insertBefore(scriptTag, firstScriptTag) // append the script to the DOM
		} catch (e) {
			console.error(e.message)
			this.namespaces[this.namespace].delete(hash)
		}

		this.uniqueScriptUrls.add(`${this.namespace}::${script}`)

		console.log('Done')
		return this
	}
}

(function(document) {
	console.log("commonEs loaded!")
	window.commonES = new CommonES()
})(document)
