webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },

/***/ 1:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/home/sli/projects/track-pdf-reader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/home/sli/projects/track-pdf-reader/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	var h, render, co, RootPage, PDFReaderModel, ref$, ref1$;
	h = __webpack_require__(2).createElement;
	render = __webpack_require__(39).render;
	co = __webpack_require__(169);
	RootPage = __webpack_require__(170);
	PDFReaderModel = __webpack_require__(188).PDFReaderModel;
	window.log = bind$(console, 'log');
	window.info = bind$(console, 'info');
	window.debug = bind$(console, 'debug');
	ref1$ = NodeList.prototype;
	ref1$.reduce = (ref$ = Array.prototype).reduce;
	ref1$.forEach = ref$.forEach;
	ref1$.find = ref$.find;
	ref1$.map = ref$.map;
	__webpack_require__.e/* nsure */(1, function(require){
	  var $div;
	  __webpack_require__(189);
	  $div = document.createElement('div');
	  document.body.appendChild($div);
	  return render(h(RootPage), $div);
	});
	function bind$(obj, key, target){
	  return function(){ return (target || obj)[key].apply(obj, arguments) };
	}
	//# sourceMappingURL=/home/sli/projects/track-pdf-reader/node_modules/livescript-loader/index.js!/home/sli/projects/track-pdf-reader/src/client/demo.ls.map


	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/home/sli/projects/track-pdf-reader/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "demo.ls" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 169:
/***/ function(module, exports) {


	/**
	 * slice() reference.
	 */

	var slice = Array.prototype.slice;

	/**
	 * Expose `co`.
	 */

	module.exports = co['default'] = co.co = co;

	/**
	 * Wrap the given generator `fn` into a
	 * function that returns a promise.
	 * This is a separate function so that
	 * every `co()` call doesn't create a new,
	 * unnecessary closure.
	 *
	 * @param {GeneratorFunction} fn
	 * @return {Function}
	 * @api public
	 */

	co.wrap = function (fn) {
	  createPromise.__generatorFunction__ = fn;
	  return createPromise;
	  function createPromise() {
	    return co.call(this, fn.apply(this, arguments));
	  }
	};

	/**
	 * Execute the generator function or a generator
	 * and return a promise.
	 *
	 * @param {Function} fn
	 * @return {Promise}
	 * @api public
	 */

	function co(gen) {
	  var ctx = this;
	  var args = slice.call(arguments, 1)

	  // we wrap everything in a promise to avoid promise chaining,
	  // which leads to memory leak errors.
	  // see https://github.com/tj/co/issues/180
	  return new Promise(function(resolve, reject) {
	    if (typeof gen === 'function') gen = gen.apply(ctx, args);
	    if (!gen || typeof gen.next !== 'function') return resolve(gen);

	    onFulfilled();

	    /**
	     * @param {Mixed} res
	     * @return {Promise}
	     * @api private
	     */

	    function onFulfilled(res) {
	      var ret;
	      try {
	        ret = gen.next(res);
	      } catch (e) {
	        return reject(e);
	      }
	      next(ret);
	    }

	    /**
	     * @param {Error} err
	     * @return {Promise}
	     * @api private
	     */

	    function onRejected(err) {
	      var ret;
	      try {
	        ret = gen.throw(err);
	      } catch (e) {
	        return reject(e);
	      }
	      next(ret);
	    }

	    /**
	     * Get the next value in the generator,
	     * return a promise.
	     *
	     * @param {Object} ret
	     * @return {Promise}
	     * @api private
	     */

	    function next(ret) {
	      if (ret.done) return resolve(ret.value);
	      var value = toPromise.call(ctx, ret.value);
	      if (value && isPromise(value)) return value.then(onFulfilled, onRejected);
	      return onRejected(new TypeError('You may only yield a function, promise, generator, array, or object, '
	        + 'but the following object was passed: "' + String(ret.value) + '"'));
	    }
	  });
	}

	/**
	 * Convert a `yield`ed value into a promise.
	 *
	 * @param {Mixed} obj
	 * @return {Promise}
	 * @api private
	 */

	function toPromise(obj) {
	  if (!obj) return obj;
	  if (isPromise(obj)) return obj;
	  if (isGeneratorFunction(obj) || isGenerator(obj)) return co.call(this, obj);
	  if ('function' == typeof obj) return thunkToPromise.call(this, obj);
	  if (Array.isArray(obj)) return arrayToPromise.call(this, obj);
	  if (isObject(obj)) return objectToPromise.call(this, obj);
	  return obj;
	}

	/**
	 * Convert a thunk to a promise.
	 *
	 * @param {Function}
	 * @return {Promise}
	 * @api private
	 */

	function thunkToPromise(fn) {
	  var ctx = this;
	  return new Promise(function (resolve, reject) {
	    fn.call(ctx, function (err, res) {
	      if (err) return reject(err);
	      if (arguments.length > 2) res = slice.call(arguments, 1);
	      resolve(res);
	    });
	  });
	}

	/**
	 * Convert an array of "yieldables" to a promise.
	 * Uses `Promise.all()` internally.
	 *
	 * @param {Array} obj
	 * @return {Promise}
	 * @api private
	 */

	function arrayToPromise(obj) {
	  return Promise.all(obj.map(toPromise, this));
	}

	/**
	 * Convert an object of "yieldables" to a promise.
	 * Uses `Promise.all()` internally.
	 *
	 * @param {Object} obj
	 * @return {Promise}
	 * @api private
	 */

	function objectToPromise(obj){
	  var results = new obj.constructor();
	  var keys = Object.keys(obj);
	  var promises = [];
	  for (var i = 0; i < keys.length; i++) {
	    var key = keys[i];
	    var promise = toPromise.call(this, obj[key]);
	    if (promise && isPromise(promise)) defer(promise, key);
	    else results[key] = obj[key];
	  }
	  return Promise.all(promises).then(function () {
	    return results;
	  });

	  function defer(promise, key) {
	    // predefine the key in the result
	    results[key] = undefined;
	    promises.push(promise.then(function (res) {
	      results[key] = res;
	    }));
	  }
	}

	/**
	 * Check if `obj` is a promise.
	 *
	 * @param {Object} obj
	 * @return {Boolean}
	 * @api private
	 */

	function isPromise(obj) {
	  return 'function' == typeof obj.then;
	}

	/**
	 * Check if `obj` is a generator.
	 *
	 * @param {Mixed} obj
	 * @return {Boolean}
	 * @api private
	 */

	function isGenerator(obj) {
	  return 'function' == typeof obj.next && 'function' == typeof obj.throw;
	}

	/**
	 * Check if `obj` is a generator function.
	 *
	 * @param {Mixed} obj
	 * @return {Boolean}
	 * @api private
	 */
	function isGeneratorFunction(obj) {
	  var constructor = obj.constructor;
	  if (!constructor) return false;
	  if ('GeneratorFunction' === constructor.name || 'GeneratorFunction' === constructor.displayName) return true;
	  return isGenerator(constructor.prototype);
	}

	/**
	 * Check for plain object.
	 *
	 * @param {Mixed} val
	 * @return {Boolean}
	 * @api private
	 */

	function isObject(val) {
	  return Object == val.constructor;
	}


/***/ },

/***/ 170:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/home/sli/projects/track-pdf-reader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/home/sli/projects/track-pdf-reader/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	var React, h, cf, Component, PDFReader, PDFUploadPanel, pdfDocModel, style, model;
	React = __webpack_require__(2), h = React.createElement, cf = React.createFactory, Component = React.Component;
	PDFReader = __webpack_require__(171);
	PDFUploadPanel = __webpack_require__(182);
	pdfDocModel = __webpack_require__(175);
	style = __webpack_require__(184);
	window.model = model = new pdfDocModel();
	module.exports = function(){
	  return h('div', {}, h(PDFReader, {
	    readerModel: model
	  }));
	};
	//# sourceMappingURL=/home/sli/projects/track-pdf-reader/node_modules/livescript-loader/index.js!/home/sli/projects/track-pdf-reader/node_modules/webpack-append/index.js?require! 'react': {create-element: h, create-factory: cf, Component}: React!/home/sli/projects/track-pdf-reader/src/client/container/RootPage/index.ls.map


	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/home/sli/projects/track-pdf-reader/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.ls" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 171:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/home/sli/projects/track-pdf-reader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/home/sli/projects/track-pdf-reader/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	var React, h, cf, Component, co, observer, ref$, requestFsPromise, writePdfFile, readPdfFile, removePdfFile, pdfDocModel, unalias, PDFPage, PDFToolbar, attr, option, PDFReader;
	React = __webpack_require__(2), h = React.createElement, cf = React.createFactory, Component = React.Component;
	co = __webpack_require__(169);
	observer = __webpack_require__(172).observer;
	ref$ = __webpack_require__(174), requestFsPromise = ref$.requestFsPromise, writePdfFile = ref$.writePdfFile, readPdfFile = ref$.readPdfFile, removePdfFile = ref$.removePdfFile;
	pdfDocModel = __webpack_require__(175);
	unalias = __webpack_require__(177);
	PDFPage = __webpack_require__(178);
	PDFToolbar = __webpack_require__(179);
	attr = __webpack_require__(181);
	option = {
	  ds: function(){
	    return {
	      ready: false,
	      showOverlay: false
	    };
	  },
	  cwm: co.wrap(function*(){
	    var readerModel, fs, lastFile, e, this$ = this;
	    readerModel = this.props.readerModel;
	    fs = (yield requestFsPromise());
	    try {
	      lastFile = (yield readPdfFile({
	        filename: 'last.pdf',
	        fs: fs
	      }));
	      (yield readerModel.ready(lastFile));
	    } catch (e$) {
	      e = e$;
	      (yield readerModel.ready('rust.pdf'));
	    }
	    return this.setState((function(it){
	      return it.ready = true, it;
	    }));
	  }),
	  cdu: function(prop, state){
	    var ref$;
	    if (state.ready !== this.state.ready) {
	      return (ref$ = this.refs['wrap']) != null ? ref$.focus() : void 8;
	    }
	  },
	  cdm: function(){
	    var ref$, readerModel;
	    return ref$ = this.props, readerModel = ref$.readerModel, ref$;
	  }
	};
	observer(unalias(option)(PDFReader = (function(superclass){
	  var prototype = extend$((import$(PDFReader, superclass).displayName = 'PDFReader', PDFReader), superclass).prototype, constructor = PDFReader;
	  importAll$(prototype, arguments[1]);
	  PDFReader.prototype.render$loading = function(){
	    return h('div', {}, 'loading');
	  };
	  PDFReader.prototype.render = function(){
	    var props, readerModel, state, showOverlay;
	    if (!this.state.ready) {
	      return this.render$loading();
	    }
	    props = this.props, readerModel = props.readerModel, state = this.state, showOverlay = state.showOverlay;
	    if ((readerModel != null ? readerModel.currentPage : void 8) == null) {
	      return null;
	    }
	    return h('div', this.$wrap({
	      readerModel: readerModel
	    }), h(PDFToolbar, {
	      readerModel: readerModel
	    }), h(PDFPage, {
	      currentPage: readerModel.currentPage
	    }), showOverlay ? h('div', this.$overlay({
	      showOverlay: showOverlay
	    }), 'drop file here') : void 8);
	  };
	  function PDFReader(){
	    PDFReader.superclass.apply(this, arguments);
	  }
	  return PDFReader;
	}(Component, attr))));
	module.exports = PDFReader;
	function extend$(sub, sup){
	  function fun(){} fun.prototype = (sub.superclass = sup).prototype;
	  (sub.prototype = new fun).constructor = sub;
	  if (typeof sup.extended == 'function') sup.extended(sub);
	  return sub;
	}
	function import$(obj, src){
	  var own = {}.hasOwnProperty;
	  for (var key in src) if (own.call(src, key)) obj[key] = src[key];
	  return obj;
	}
	function importAll$(obj, src){
	  for (var key in src) obj[key] = src[key];
	  return obj;
	}
	//# sourceMappingURL=/home/sli/projects/track-pdf-reader/node_modules/livescript-loader/index.js!/home/sli/projects/track-pdf-reader/node_modules/webpack-append/index.js?require! 'react': {create-element: h, create-factory: cf, Component}: React!/home/sli/projects/track-pdf-reader/src/client/component/PDFReader/index.ls.map


	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/home/sli/projects/track-pdf-reader/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.ls" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 172:
/***/ function(module, exports, __webpack_require__) {

	(function() {
	    function mrFactory(mobx, React, ReactDOM) {
	        if (!mobx)
	            throw new Error("mobx-react requires the MobX package")
	        if (!React)
	            throw new Error("mobx-react requires React to be available");

	        var isDevtoolsEnabled = false;

	        // WeakMap<Node, Object>;
	        var componentByNodeRegistery = typeof WeakMap !== "undefined" ? new WeakMap() : undefined;
	        var renderReporter = new EventEmitter();
	        function findDOMNode(component) {
	            if (ReactDOM)
	                return ReactDOM.findDOMNode(component);
	            return null;
	        }

	        function reportRendering(component) {
	            var node = findDOMNode(component);
	            if (node)
	                componentByNodeRegistery.set(node, component);

	            renderReporter.emit({
	                event: 'render',
	                renderTime: component.__$mobRenderEnd - component.__$mobRenderStart,
	                totalTime: Date.now() - component.__$mobRenderStart,
	                component: component,
	                node: node
	            });
	        }

	        var reactiveMixin = {
	            componentWillMount: function() {
	                // Generate friendly name for debugging
	                var name = [
	                    this.displayName || this.name || (this.constructor && (this.constructor.displayName || this.constructor.name)) || "<component>",
	                    "#", this._reactInternalInstance && this._reactInternalInstance._rootNodeID,
	                    ".render()"
	                ].join("");

	                var baseRender = this.render.bind(this);
	                var self = this;
	                var reaction = null;
	                var isRenderingPending = false;
	                function initialRender() {
	                    reaction = new mobx.Reaction(name, function() {
	                        if (!isRenderingPending) {
	                            isRenderingPending = true;
	                            if (typeof self.componentWillReact === "function")
	                                self.componentWillReact();
	                            React.Component.prototype.forceUpdate.call(self)
	                        }
	                    });
	                    reactiveRender.$mobx = reaction;
	                    self.render = reactiveRender;
	                    return reactiveRender();
	                }

	                function reactiveRender() {
	                    isRenderingPending = false;
	                    var rendering;
	                    reaction.track(function() {
	                        if (isDevtoolsEnabled)
	                            self.__$mobRenderStart = Date.now();
	                        rendering = mobx.extras.allowStateChanges(false, baseRender);
	                        if (isDevtoolsEnabled)
	                            self.__$mobRenderEnd = Date.now();
	                    });
	                    return rendering;
	                }

	                this.render = initialRender;
	            },

	            componentWillUnmount: function() {
	                this.render.$mobx && this.render.$mobx.dispose();
	                if (isDevtoolsEnabled) {
	                    var node = findDOMNode(this);
	                    if (node) {
	                        componentByNodeRegistery.delete(node);
	                    }
	                    renderReporter.emit({
	                        event: 'destroy',
	                        component: this,
	                        node: node
	                    });
	                }
	            },

	            componentDidMount: function() {
	                if (isDevtoolsEnabled)
	                    reportRendering(this);
	            },

	            componentDidUpdate: function() {
	                if (isDevtoolsEnabled)
	                    reportRendering(this);
	            },

	            shouldComponentUpdate: function(nextProps, nextState) {
	                // TODO: if context changed, return true.., see #18

	                // if props or state did change, but a render was scheduled already, no additional render needs to be scheduled
	                if (this.render.$mobx && this.render.$mobx.isScheduled() === true)
	                    return false;

	                // update on any state changes (as is the default)
	                if (this.state !== nextState)
	                    return true;
	                // update if props are shallowly not equal, inspired by PureRenderMixin
	                var keys = Object.keys(this.props);
	                var key;
	                if (keys.length !== Object.keys(nextProps).length)
	                    return true;
	                for(var i = keys.length -1; i >= 0, key = keys[i]; i--) {
	                    var newValue = nextProps[key];
	                    if (newValue !== this.props[key]) {
	                        return true;
	                    } else if (newValue && typeof newValue === "object" && !mobx.isObservable(newValue)) {
	                        /**
	                         * If the newValue is still the same object, but that object is not observable,
	                         * fallback to the default React behavior: update, because the object *might* have changed.
	                         * If you need the non default behavior, just use the React pure render mixin, as that one
	                         * will work fine with mobx as well, instead of the default implementation of
	                         * observer.
	                         */
	                        return true;
	                    }
	                }
	                return false;
	            }
	        }

	        function patch(target, funcName) {
	            var base = target[funcName];
	            var mixinFunc = reactiveMixin[funcName];
	            if (!base) {
	                target[funcName] = mixinFunc;
	            } else {
	                target[funcName] = function() {
	                    base.apply(this, arguments);
	                    mixinFunc.apply(this, arguments);
	                }
	            }
	        }

	        function observer(componentClass) {
	            // If it is function but doesn't seem to be a react class constructor,
	            // wrap it to a react class automatically
	            if (typeof componentClass === "function" && !componentClass.prototype.render && !componentClass.isReactClass && !React.Component.isPrototypeOf(componentClass)) {
	                return observer(React.createClass({
	                    displayName:     componentClass.displayName || componentClass.name,
	                    propTypes:       componentClass.propTypes,
	                    contextTypes:    componentClass.contextTypes,
	                    getDefaultProps: function() { return componentClass.defaultProps; },
	                    render:          function() { return componentClass.call(this, this.props, this.context); }
	                }));
	            }

	            if (!componentClass)
	                throw new Error("Please pass a valid component to 'observer'");
	            var target = componentClass.prototype || componentClass;

	            [
	                "componentWillMount",
	                "componentWillUnmount",
	                "componentDidMount",
	                "componentDidUpdate"
	            ].forEach(function(funcName) {
	                patch(target, funcName)
	            });

	            if (!target.shouldComponentUpdate)
	                target.shouldComponentUpdate = reactiveMixin.shouldComponentUpdate;
	            componentClass.isMobXReactObserver = true;
	            return componentClass;
	        }

	        function trackComponents() {
	            if (typeof WeakMap === "undefined")
	                throw new Error("[mobx-react] tracking components is not supported in this browser.");
	            if (!isDevtoolsEnabled)
	                isDevtoolsEnabled = true;
	        }

	        function EventEmitter() {
	            this.listeners = [];
	        };
	        EventEmitter.prototype.on = function (cb) {
	            this.listeners.push(cb);
	            var self = this;
	            return function() {
	                var idx = self.listeners.indexOf(cb);
	                if (idx !== -1)
	                    self.listeners.splice(idx, 1);
	            };
	        };
	        EventEmitter.prototype.emit = function(data) {
	            this.listeners.forEach(function (fn) {
	                fn(data);
	            });
	        };

	        return ({
	            observer: observer,
	            reactiveComponent: function() {
	                console.warn("[mobx-react] `reactiveComponent` has been renamed to `observer` and will be removed in 1.1.");
	                return observer.apply(null, arguments);
	            },
	            renderReporter: renderReporter,
	            componentByNodeRegistery: componentByNodeRegistery,
	            trackComponents: trackComponents
	        });
	    }

	    // UMD
	    if (true) {
	        module.exports = mrFactory(__webpack_require__(173), __webpack_require__(2), __webpack_require__(39));
	    } else if (typeof define === 'function' && define.amd) {
	        define('mobx-react', ['mobx', 'react', 'react-dom'], mrFactory);
	    } else {
	        this.mobxReact = mrFactory(this['mobx'], this['React'], this['ReactDOM']);
	    }
	})();


/***/ },

/***/ 174:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/home/sli/projects/track-pdf-reader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/home/sli/projects/track-pdf-reader/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	var co, requestFsPromise, writePdfFile, removePdfFile, readPdfFile;
	co = __webpack_require__(169);
	requestFsPromise = function(arg$){
	  var ref$, quota, type;
	  ref$ = arg$ != null
	    ? arg$
	    : {}, quota = ref$.quota, type = ref$.type;
	  quota == null && (quota = 1024 * 1024 * 1024);
	  type == null && (type = window.TEMPORARY);
	  return new Promise(function(r, d){
	    return window.webkitRequestFileSystem(type, quota, r, d);
	  });
	};
	writePdfFile = function(arg$){
	  var filename, ref$, fs, file;
	  filename = (ref$ = arg$.filename) != null ? ref$ : 'last.pdf', fs = arg$.fs, file = arg$.file;
	  return new Promise(function(r, d){
	    var successHandler, failHandler;
	    successHandler = function(fileEntry){
	      return fileEntry.createWriter(function(fileWriter){
	        var x$;
	        x$ = fileWriter;
	        x$.addEventListener('error', d);
	        x$.addEventListener('writeend', function(e){
	          log('write completed');
	          return r();
	        });
	        x$.write(file);
	        return x$;
	      });
	    };
	    failHandler = d;
	    return fs.root.getFile(filename, {
	      create: true
	    }, successHandler, failHandler);
	  });
	};
	removePdfFile = function(arg$){
	  var filename, ref$, fs;
	  filename = (ref$ = arg$.filename) != null ? ref$ : 'last.pdf', fs = arg$.fs;
	  return new Promise(function(r, d){
	    var success, fail;
	    success = function(fileEntry){
	      return fileEntry.remove(r, d);
	    };
	    fail = d;
	    return fs.root.getFile(filename, {
	      create: false
	    }, success, fail);
	  });
	};
	readPdfFile = function(arg$){
	  var filename, fs;
	  filename = arg$.filename, fs = arg$.fs;
	  return new Promise(function(r, d){
	    var successHandler, failHandler;
	    successHandler = function(fileEntry){
	      return fileEntry.file(function(file){
	        var reader;
	        reader = new FileReader();
	        reader.addEventListener('loadend', function(){
	          var typedArray;
	          typedArray = new Uint8Array(this.result);
	          return r(typedArray);
	        });
	        return reader.readAsArrayBuffer(file);
	      });
	    };
	    failHandler = d;
	    return fs.root.getFile(filename, {}, successHandler, failHandler);
	  });
	};
	module.exports = {
	  requestFsPromise: requestFsPromise,
	  readPdfFile: readPdfFile,
	  writePdfFile: writePdfFile,
	  removePdfFile: removePdfFile
	};
	//# sourceMappingURL=/home/sli/projects/track-pdf-reader/node_modules/livescript-loader/index.js!/home/sli/projects/track-pdf-reader/src/client/util/chrome-file-utils.ls.map


	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/home/sli/projects/track-pdf-reader/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "chrome-file-utils.ls" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 175:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/home/sli/projects/track-pdf-reader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/home/sli/projects/track-pdf-reader/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	var co, ref$, extendObservable, autorun, reaction, pdfPageModel, pdfReaderModel;
	co = __webpack_require__(169);
	ref$ = __webpack_require__(173), extendObservable = ref$.extendObservable, autorun = ref$.autorun, reaction = ref$.reaction;
	pdfPageModel = __webpack_require__(176);
	pdfReaderModel = (function(){
	  pdfReaderModel.displayName = 'pdfReaderModel';
	  var prototype = pdfReaderModel.prototype, constructor = pdfReaderModel;
	  function pdfReaderModel(){
	    this.pageStore = {};
	    this.svgStore = {};
	    this.runs = [];
	    extendObservable(this, {
	      doc: null,
	      styleSelectedLine: "opacity: 1;",
	      styleNormalLine: "opacity: 0.2;",
	      currentPageNo: this.pageNo || 1,
	      pageStore: {},
	      currentPage: function(){
	        return this.pageStore[this.currentPageNo];
	      }
	    });
	  }
	  pdfReaderModel.prototype.ready = function*(data){
	    var key, ref$, ref1$, ref2$, ref3$, lastPageNo, lastLineNo, pageModel;
	    this.dispose();
	    this.doc = (yield PDFJS.getDocument(data));
	    this.metaData = (yield this.doc.getMetadata());
	    this.outline = (yield this.doc.getOutline());
	    key = "(" + ((ref$ = this.doc) != null ? (ref1$ = ref$.pdfInfo) != null ? ref1$.fingerprint : void 8 : void 8) + ")";
	    if (localStorage.getItem(key) != null) {
	      ref3$ = (ref2$ = localStorage.getItem(key)) != null ? ref2$.split(':') : void 8, lastPageNo = ref3$[0], lastLineNo = ref3$[1];
	      this.currentPageNo = parseInt(lastPageNo);
	      pageModel = (yield this.cachePage({
	        pageNo: this.currentPageNo
	      }));
	      pageModel.lineNo = parseInt(lastLineNo);
	    } else {
	      pageModel = (yield this.cachePage({
	        pageNo: this.currentPageNo
	      }));
	      pageModel.lineNo = 0;
	    }
	    return this.runs = this.runs.concat([autorun(bind$(this, 'registerStyle')), autorun(bind$(this, 'localstorageTrackPage'))]);
	  };
	  pdfReaderModel.prototype.localstorageTrackPage = function(){
	    var ref$, key, str, ref1$;
	    if (((ref$ = this.doc) != null ? ref$.pdfInfo : void 8) != null) {
	      key = "(" + this.doc.pdfInfo.fingerprint + ")";
	      str = this.currentPageNo + ":" + ((ref1$ = this.currentPage) != null ? ref1$.lineNo : void 8);
	      return localStorage.setItem(key, str);
	    }
	  };
	  pdfReaderModel.prototype.dispose = function(){
	    this.doc = null;
	    this.currentPageNo = 1;
	    this.pageStore = {};
	    this.svgStore = {};
	    this.runs.map(function(el){
	      return el();
	    });
	    return this.runs = [];
	  };
	  pdfReaderModel.prototype.registerStyle = function(){
	    var styleStr, that, x$, $style;
	    styleStr = "svg {\n  transform-origin: top left;\n  transform: scale(2);\n}\ntspan {\n  transition: 1s all;\n  " + this.styleNormalLine + "\n}\n.selected-line {\n  " + this.styleSelectedLine + "\n}";
	    if (that = document.getElementById('pdf-reader-style' != null)) {
	      return that.innerHTML = styleStr;
	    } else {
	      x$ = $style = document.createElement('style');
	      x$.innerHTML = styleStr;
	      x$.id = 'pdf-reader-style';
	      return document.head.appendChild($style);
	    }
	  };
	  pdfReaderModel.prototype.cachePage = function*(arg$){
	    var pageNo, that, page, pageModel, ref$;
	    pageNo = arg$.pageNo;
	    if ((that = this.pageStore[pageNo]) != null) {
	      return that;
	    }
	    page = (yield this.doc.getPage(pageNo));
	    pageModel = new pdfPageModel({
	      page: page,
	      docModel: this
	    });
	    (yield pageModel.ready());
	    (ref$ = this.pageStore)[pageNo] == null && (ref$[pageNo] = pageModel);
	    return pageModel;
	  };
	  pdfReaderModel.prototype.setStyle = function(){};
	  pdfReaderModel.prototype.toNextPage = function*(){
	    var n, ref$;
	    if (!(this.currentPageNo < this.doc.numPages)) {
	      return;
	    }
	    n = this.currentPageNo + 1;
	    if (this.currentPageNo[n] == null) {
	      (yield this.cachePage({
	        pageNo: n
	      }));
	    }
	    this.currentPageNo = n;
	    return (ref$ = this.currentPage) != null ? ref$.selectTargetLine() : void 8;
	  };
	  pdfReaderModel.prototype.toPrevPage = function*(){
	    var n, ref$;
	    if (!(this.currentPageNo > 1)) {
	      return;
	    }
	    n = this.currentPageNo - 1;
	    if (this.pageStore[n] == null) {
	      (yield this.cachePage({
	        pageNo: n
	      }));
	    }
	    this.currentPageNo = n;
	    return (ref$ = this.currentPage) != null ? ref$.selectTargetLine() : void 8;
	  };
	  return pdfReaderModel;
	}());
	module.exports = pdfReaderModel;
	function bind$(obj, key, target){
	  return function(){ return (target || obj)[key].apply(obj, arguments) };
	}
	//# sourceMappingURL=/home/sli/projects/track-pdf-reader/node_modules/livescript-loader/index.js!/home/sli/projects/track-pdf-reader/src/client/store/pdf-doc-model.ls.map


	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/home/sli/projects/track-pdf-reader/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "pdf-doc-model.ls" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 176:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/home/sli/projects/track-pdf-reader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/home/sli/projects/track-pdf-reader/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	var co, ref$, extendObservable, autorun, action, pdfPageModel;
	co = __webpack_require__(169);
	ref$ = __webpack_require__(173), extendObservable = ref$.extendObservable, autorun = ref$.autorun, action = ref$.action;
	pdfPageModel = (function(){
	  pdfPageModel.displayName = 'pdfPageModel';
	  var prototype = pdfPageModel.prototype, constructor = pdfPageModel;
	  function pdfPageModel(arg$){
	    this.page = arg$.page, this.docModel = arg$.docModel;
	  }
	  pdfPageModel.prototype.ready = function*(){
	    var SVGGraphics, ref$, commonObjs, objs, viewport, opList, svgGfx, propMap, k, v, this$ = this;
	    SVGGraphics = PDFJS.SVGGraphics;
	    ref$ = this.page, commonObjs = ref$.commonObjs, objs = ref$.objs;
	    viewport = this.page.getViewport(1);
	    this.textContent = (yield this.page.getTextContent());
	    opList = (yield this.page.getOperatorList());
	    svgGfx = new SVGGraphics(commonObjs, objs);
	    svgGfx.embedFonts = true;
	    this.svg = (yield svgGfx.getSVG(opList, viewport));
	    propMap = {
	      width: '50vw',
	      preserveAspectRatio: 'xMidYMid meet'
	    };
	    for (k in propMap) {
	      v = propMap[k];
	      this.svg.setAttribute(k, v);
	    }
	    this.svg.removeAttribute('height');
	    this.lineMap = this.createLineMap(this.svg);
	    this.lineMapLength = this.lineMap.length;
	    extendObservable(this, {
	      currentLineEl: function(){
	        return this.lineMap[this.lineNo];
	      },
	      lineNo: 0,
	      debug: false
	    });
	    return autorun(function(){
	      return this$.selectTargetLine();
	    });
	  };
	  pdfPageModel.prototype.selectTargetLine = function(el){
	    var ref$, h, ref1$, matrix, p, ref2$, x, y, $reader, orgPos, target, delta, step, this$ = this;
	    this.svg.querySelectorAll('.selected-line').forEach(function(it){
	      return it.classList.remove('selected-line');
	    });
	    if ((ref$ = this.currentLineEl) != null) {
	      ref$.forEach(function(it){
	        return it.classList.add('selected-line');
	      });
	    }
	    h = document.body.clientHeight / 2;
	    try {
	      window.$l = (ref1$ = this.currentLineEl) != null ? ref1$[0] : void 8;
	      matrix = $l.getCTM();
	      p = $l.nearestViewportElement.createSVGPoint();
	      ref2$ = {
	        x: parseInt($l.getAttribute('x').split(' ')[0]),
	        y: parseInt($l.getAttribute('y'))
	      }, x = ref2$.x, y = ref2$.y;
	      p.x = x;
	      p.y = y;
	      y = p.matrixTransform(matrix).y;
	      $reader = this.svg.parentNode;
	      orgPos = $reader.scrollTop;
	      target = parseInt(y * 2 - 300);
	      delta = parseInt(orgPos - target);
	      step = delta / 10;
	      return $reader.scrollTop = target;
	    } catch (e$) {}
	  };
	  pdfPageModel.prototype.toNextLine = function(){
	    var this$ = this;
	    if (this.lineNo < this.lineMapLength - 1) {
	      return this.lineNo += 1;
	    } else {
	      return co(function*(){
	        return (yield this$.docModel.toNextPage());
	      });
	    }
	  };
	  pdfPageModel.prototype.toPrevLine = function(){
	    var this$ = this;
	    if (this.lineNo > 0) {
	      return this.lineNo -= 1;
	    } else {
	      return co(function*(){
	        return (yield this$.docModel.toPrevPage());
	      });
	    }
	  };
	  pdfPageModel.prototype.createLineMap = function($svg){
	    var $$tspan, x$, $div, y$, getYPos, lineMap, k, v, results$ = [];
	    $$tspan = $svg.querySelectorAll('tspan');
	    x$ = $div = document.createElement('div');
	    y$ = x$.style;
	    y$.position = 'fixed';
	    y$.top = '0px';
	    y$.left = '0px';
	    y$.opacity = 0;
	    x$.appendChild($svg);
	    document.body.appendChild($div);
	    getYPos = function(el){
	      var ref$;
	      return parseInt(el != null ? (ref$ = el.getClientRects()[0]) != null ? ref$.top : void 8 : void 8);
	    };
	    lineMap = $$tspan.reduce(function(ag, s, i, arr){
	      var y, q;
	      y = getYPos(s);
	      q = Object.keys(ag).find(function(t){
	        var b;
	        return b = Math.abs(y - parseInt(t)) < 7;
	      });
	      if (q !== undefined) {
	        ag[q] == null && (ag[q] = []);
	        ag[q] = ag[q].concat(s);
	        q = undefined;
	        return ag;
	      }
	      ag[y] == null && (ag[y] = []);
	      ag[y] = ag[y].concat(s);
	      return ag;
	    }, {});
	    document.body.removeChild($div);
	    for (k in lineMap) {
	      v = lineMap[k];
	      results$.push(v);
	    }
	    return results$;
	  };
	  return pdfPageModel;
	}());
	module.exports = pdfPageModel;
	//# sourceMappingURL=/home/sli/projects/track-pdf-reader/node_modules/livescript-loader/index.js!/home/sli/projects/track-pdf-reader/src/client/store/pdf-page-model.ls.map


	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/home/sli/projects/track-pdf-reader/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "pdf-page-model.ls" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 177:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/home/sli/projects/track-pdf-reader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/home/sli/projects/track-pdf-reader/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	var PropTypes, unalias;
	PropTypes = __webpack_require__(2).PropTypes;
	unalias = function(option){
	  return function(c){
	    var lcMap, k, ref$, v, psMap, that;
	    lcMap = {
	      'cwm': 'componentWillMount',
	      'cdm': 'componentDidMount',
	      'cwrp': 'componentWillReceiveProps',
	      'cwu': 'componentWillUpdate',
	      'cdu': 'componentDidUpdate',
	      'scu': 'shouldComponentUpdate',
	      'cwum': 'componentWillUnmount'
	    };
	    for (k in ref$ = option) {
	      v = ref$[k];
	      if (in$(k, Object.keys(lcMap))) {
	        c.prototype[lcMap[k]] = v;
	      }
	    }
	    psMap = {
	      'ds': 'state',
	      'dp': 'defaultProps',
	      'pt': 'propTypes'
	    };
	    if (option.ds != null) {
	      c.prototype.state = option.ds();
	    }
	    if ((that = option.dp) != null) {
	      c.defaultProps = that;
	    }
	    if ((that = option.pt) != null) {
	      c.propTypes = that.call(PropTypes);
	    }
	    return c;
	  };
	};
	module.exports = unalias;
	function in$(x, xs){
	  var i = -1, l = xs.length >>> 0;
	  while (++i < l) if (x === xs[i]) return true;
	  return false;
	}
	//# sourceMappingURL=/home/sli/projects/track-pdf-reader/node_modules/livescript-loader/index.js!/home/sli/projects/track-pdf-reader/src/client/util/decorator/unalias.ls.map


	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/home/sli/projects/track-pdf-reader/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "unalias.ls" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 178:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/home/sli/projects/track-pdf-reader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/home/sli/projects/track-pdf-reader/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	var React, h, cf, Component, pdfDocModel, unalias, observer, option, attr, PDFPage;
	React = __webpack_require__(2), h = React.createElement, cf = React.createFactory, Component = React.Component;
	pdfDocModel = __webpack_require__(175);
	unalias = __webpack_require__(177);
	observer = __webpack_require__(172).observer;
	option = {
	  cdm: function(){},
	  cdu: function(){
	    var currentLineEl;
	    currentLineEl = this.props.currentPage.currentLineEl;
	    return window.addEventListener('resize', log);
	  },
	  cwrp: function(){}
	};
	attr = {
	  $wrap: function(arg$){
	    var currentPage;
	    currentPage = arg$.currentPage;
	    return {
	      style: {
	        width: '100%',
	        height: 'calc(100vh - 30px)',
	        overflow: 'scroll'
	      },
	      ref: function(el){
	        var svg, that;
	        if (el == null) {
	          return;
	        }
	        svg == null && (svg = currentPage.svg);
	        if (svg != null) {
	          if ((that = el.firstChild) != null) {
	            return el.replaceChild(svg, that);
	          } else {
	            return el.appendChild(svg);
	          }
	        }
	      }
	    };
	  }
	};
	observer(unalias(option)(PDFPage = (function(superclass){
	  var prototype = extend$((import$(PDFPage, superclass).displayName = 'PDFPage', PDFPage), superclass).prototype, constructor = PDFPage;
	  importAll$(prototype, arguments[1]);
	  PDFPage.prototype.render = function(){
	    var currentPage;
	    currentPage = this.props.currentPage;
	    return h('div', this.$wrap({
	      currentPage: currentPage
	    }), null);
	  };
	  function PDFPage(){
	    PDFPage.superclass.apply(this, arguments);
	  }
	  return PDFPage;
	}(Component, attr))));
	module.exports = PDFPage;
	function extend$(sub, sup){
	  function fun(){} fun.prototype = (sub.superclass = sup).prototype;
	  (sub.prototype = new fun).constructor = sub;
	  if (typeof sup.extended == 'function') sup.extended(sub);
	  return sub;
	}
	function import$(obj, src){
	  var own = {}.hasOwnProperty;
	  for (var key in src) if (own.call(src, key)) obj[key] = src[key];
	  return obj;
	}
	function importAll$(obj, src){
	  for (var key in src) obj[key] = src[key];
	  return obj;
	}
	//# sourceMappingURL=/home/sli/projects/track-pdf-reader/node_modules/livescript-loader/index.js!/home/sli/projects/track-pdf-reader/node_modules/webpack-append/index.js?require! 'react': {create-element: h, create-factory: cf, Component}: React!/home/sli/projects/track-pdf-reader/src/client/component/PDFPage/index.ls.map


	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/home/sli/projects/track-pdf-reader/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.ls" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 179:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/home/sli/projects/track-pdf-reader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/home/sli/projects/track-pdf-reader/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	var React, h, cf, Component, co, observer, unalias, attr, option, PDFToolbar;
	React = __webpack_require__(2), h = React.createElement, cf = React.createFactory, Component = React.Component;
	co = __webpack_require__(169);
	observer = __webpack_require__(172).observer;
	unalias = __webpack_require__(177);
	attr = __webpack_require__(180);
	option = {
	  cdm: function(){}
	};
	observer(unalias(option)(PDFToolbar = (function(superclass){
	  var prototype = extend$((import$(PDFToolbar, superclass).displayName = 'PDFToolbar', PDFToolbar), superclass).prototype, constructor = PDFToolbar;
	  importAll$(prototype, arguments[1]);
	  PDFToolbar.prototype.render = function(){
	    var readerModel, doc, numPages, currentPage, lineNo, lineMap, currentPageNo, ref$, ref1$;
	    readerModel = this.props.readerModel;
	    if (!(readerModel.doc != null && readerModel.currentPage != null)) {
	      return null;
	    }
	    doc = readerModel.doc, numPages = doc.numPages, currentPage = readerModel.currentPage, lineNo = currentPage.lineNo, lineMap = currentPage.lineMap, currentPageNo = readerModel.currentPageNo;
	    return h('div', this.$wrap, h('div', this.$title({
	      readerModel: readerModel
	    }), (ref$ = readerModel.metaData) != null ? (ref1$ = ref$.info) != null ? ref1$.Title : void 8 : void 8), h('div', {
	      style: {
	        float: 'right'
	      }
	    }, h('span', {
	      style: {
	        width: '100px'
	      }
	    }, h('span', this.$prevPage({
	      readerModel: readerModel
	    }), '-'), currentPageNo + "/" + numPages, h('span', this.$nextPage({
	      readerModel: readerModel
	    }), '+')), h('span', {
	      style: {
	        width: '100px'
	      }
	    }, h('span', this.$prevLine({
	      readerModel: readerModel
	    }), '-'), lineNo + "/" + lineMap.length, h('span', this.$nextLine({
	      readerModel: readerModel
	    }), '+'))));
	  };
	  function PDFToolbar(){
	    PDFToolbar.superclass.apply(this, arguments);
	  }
	  return PDFToolbar;
	}(Component, attr))));
	module.exports = PDFToolbar;
	function extend$(sub, sup){
	  function fun(){} fun.prototype = (sub.superclass = sup).prototype;
	  (sub.prototype = new fun).constructor = sub;
	  if (typeof sup.extended == 'function') sup.extended(sub);
	  return sub;
	}
	function import$(obj, src){
	  var own = {}.hasOwnProperty;
	  for (var key in src) if (own.call(src, key)) obj[key] = src[key];
	  return obj;
	}
	function importAll$(obj, src){
	  for (var key in src) obj[key] = src[key];
	  return obj;
	}
	//# sourceMappingURL=/home/sli/projects/track-pdf-reader/node_modules/livescript-loader/index.js!/home/sli/projects/track-pdf-reader/node_modules/webpack-append/index.js?require! 'react': {create-element: h, create-factory: cf, Component}: React!/home/sli/projects/track-pdf-reader/src/client/component/PDFToolbar/index.ls.map


	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/home/sli/projects/track-pdf-reader/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.ls" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 180:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/home/sli/projects/track-pdf-reader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/home/sli/projects/track-pdf-reader/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	var React, h, cf, Component, co, changePage, changeLine, attr;
	React = __webpack_require__(2), h = React.createElement, cf = React.createFactory, Component = React.Component;
	co = __webpack_require__(169);
	changePage = function(direction){
	  return function(arg$){
	    var readerModel;
	    readerModel = arg$.readerModel;
	    return {
	      style: {
	        padding: 10
	      },
	      onClick: co.wrap(function*(){
	        return (yield (yield* (function*(){
	          switch (direction) {
	          case 'forward':
	            return readerModel.toNextPage();
	          case 'backward':
	            return readerModel.toPrevPage();
	          }
	        }())));
	      })
	    };
	  };
	};
	changeLine = function(direction){
	  return function(arg$){
	    var readerModel;
	    readerModel = arg$.readerModel;
	    return {
	      style: {
	        padding: 10
	      },
	      onClick: function(){
	        switch (direction) {
	        case 'forward':
	          return readerModel.currentPage.toNextLine();
	        case 'backward':
	          return readerModel.currentPage.toPrevLine();
	        }
	      }
	    };
	  };
	};
	attr = {
	  $wrap: {
	    style: {
	      width: '100%',
	      opacity: 1,
	      background: 'rgb(37, 184, 135)',
	      position: 'fixed',
	      bottom: 0,
	      height: 30,
	      WebkitUserSelect: 'none',
	      verticalAlign: 'middle',
	      lineHeight: '30px',
	      fontSize: '25px',
	      color: 'white',
	      zIndex: 100
	    }
	  },
	  $title: function(arg$){
	    var readerModel, ref$, ref1$;
	    readerModel = arg$.readerModel;
	    return {
	      alt: (ref$ = readerModel.metaData) != null ? (ref1$ = ref$.info) != null ? ref1$.Title : void 8 : void 8,
	      style: {
	        width: '300px',
	        whiteSpace: 'nowrap',
	        overflow: 'hidden',
	        fontSize: 12,
	        textOverflow: 'ellipsis',
	        float: 'left'
	      }
	    };
	  },
	  $prevPage: changePage('backward'),
	  $nextPage: changePage('forward'),
	  $nextLine: changeLine('forward'),
	  $prevLine: changeLine('backward')
	};
	module.exports = attr;
	//# sourceMappingURL=/home/sli/projects/track-pdf-reader/node_modules/livescript-loader/index.js!/home/sli/projects/track-pdf-reader/node_modules/webpack-append/index.js?require! 'react': {create-element: h, create-factory: cf, Component}: React!/home/sli/projects/track-pdf-reader/src/client/component/PDFToolbar/attr.ls.map


	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/home/sli/projects/track-pdf-reader/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "attr.ls" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 181:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/home/sli/projects/track-pdf-reader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/home/sli/projects/track-pdf-reader/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	var React, h, cf, Component, co, ref$, requestFsPromise, writePdfFile, readPdfFile, removePdfFile, attr;
	React = __webpack_require__(2), h = React.createElement, cf = React.createFactory, Component = React.Component;
	co = __webpack_require__(169);
	ref$ = __webpack_require__(174), requestFsPromise = ref$.requestFsPromise, writePdfFile = ref$.writePdfFile, readPdfFile = ref$.readPdfFile, removePdfFile = ref$.removePdfFile;
	attr = {
	  $info: function(){
	    return {
	      style: {
	        position: 'fixed'
	      }
	    };
	  },
	  $wrap: function(arg$){
	    var readerModel, this$ = this;
	    readerModel = arg$.readerModel;
	    return {
	      ref: 'wrap',
	      tabIndex: '0',
	      style: {
	        height: '100%'
	      },
	      onTouchStart: function(e){
	        if (e.changedTouches.length === 1) {
	          return this.startTouch = e.changedTouches[0];
	        }
	      },
	      onTouchMove: function(e){
	        return e.preventDefault();
	      },
	      onTouchEnd: co.wrap(function*(e){
	        var ref$, clientY, clientX, endY, endX, dx, dy, this$ = this;
	        ref$ = this.startTouch, clientY = ref$.clientY, clientX = ref$.clientX;
	        ref$ = e.changedTouches[0], endY = ref$.clientY, endX = ref$.clientX;
	        dx = endX - clientX;
	        dy = endY - clientY;
	        switch (ref$ = [dy], false) {
	        case !(function(it){
	          return it > 300;
	        })(ref$[0]):
	          return readerModel.currentPage.toNextLine();
	        case !(function(it){
	            return it < 300;
	          })(ref$[0]):
	          return readerModel.currentPage.toPrevLine();
	        }
	      }),
	      onWheel: co.wrap(function*(e){
	        var deltaY, fn;
	        deltaY = e.deltaY;
	        e.preventDefault();
	        fn = function(){
	          switch (false) {
	          case !(deltaY > 0):
	            return readerModel.currentPage.toNextLine();
	          case !(deltaY < 0):
	            return readerModel.currentPage.toPrevLine();
	          }
	        };
	        this$.lastWheelTrigger == null && (this$.lastWheelTrigger = 0);
	        if (this$.lastWheelTrigger < Date.now() - 300) {
	          this$.lastWheelTrigger = Date.now();
	          return fn();
	        }
	      }),
	      onKeyDown: co.wrap(function*(e){
	        var keyCode, K_ARROWS, K_LEFT, K_UP, K_RIGHT, K_DOWN;
	        keyCode = e.keyCode;
	        K_ARROWS = [37, 38, 39, 40], K_LEFT = K_ARROWS[0], K_UP = K_ARROWS[1], K_RIGHT = K_ARROWS[2], K_DOWN = K_ARROWS[3];
	        if (!in$(keyCode, K_ARROWS)) {
	          return;
	        }
	        e.preventDefault();
	        switch (keyCode) {
	        case K_LEFT:
	        case K_RIGHT:
	          switch (keyCode) {
	          case K_LEFT:
	            return (yield readerModel.toPrevPage());
	          case K_RIGHT:
	            return (yield readerModel.toNextPage());
	          }
	          break;
	        case K_UP:
	        case K_DOWN:
	          switch (keyCode) {
	          case K_UP:
	            return readerModel.currentPage.toPrevLine();
	          case K_DOWN:
	            return readerModel.currentPage.toNextLine();
	          }
	        }
	      }),
	      onDragOver: function(e){
	        this$.setState((function(it){
	          return it.showOverlay = true, it;
	        }));
	        return e.preventDefault();
	      },
	      onDragLeave: function(e){},
	      onDrop: function(e){
	        var ss, pdfFile, fileReader;
	        ss = bind$(this$, 'setState');
	        this$.setState((function(it){
	          return it.showOverlay = false, it;
	        }));
	        e.preventDefault();
	        pdfFile = e.dataTransfer.files[0];
	        fileReader = new FileReader();
	        fileReader.addEventListener('load', co.wrap(function*(e){
	          var typedArray, fs;
	          (yield new Promise(function(r){
	            var this$ = this;
	            return ss((function(it){
	              return it.ready = false, it;
	            }), r);
	          }));
	          typedArray = new Uint8Array(this.result);
	          try {
	            (yield readerModel.ready(typedArray));
	          } catch (e$) {}
	          fs = (yield requestFsPromise());
	          try {
	            (yield removePdfFile({
	              filename: 'last.pdf',
	              fs: fs
	            }));
	          } catch (e$) {}
	          try {
	            (yield writePdfFile({
	              filename: 'last.pdf',
	              fs: fs,
	              file: pdfFile
	            }));
	          } catch (e$) {}
	          return (yield new Promise(function(r){
	            var this$ = this;
	            return ss((function(it){
	              return it.ready = true, it;
	            }), r);
	          }));
	        }));
	        return fileReader.readAsArrayBuffer(pdfFile);
	      }
	    };
	  },
	  $overlay: function(arg$){
	    var showOverlay;
	    showOverlay = arg$.showOverlay;
	    return {
	      style: {
	        transition: 'opacity 0.5s',
	        opacity: (function(){
	          switch (false) {
	          case !showOverlay:
	            return 0.5;
	          default:
	            return 0;
	          }
	        }()),
	        fontSize: 50,
	        width: '100vw',
	        height: '100vh',
	        lineHeight: '50vh',
	        textAlign: 'center',
	        verticalAlign: 'middle',
	        position: 'fixed',
	        top: 0,
	        background: 'hsl(87, 7%, 65%)'
	      }
	    };
	  }
	};
	module.exports = attr;
	function in$(x, xs){
	  var i = -1, l = xs.length >>> 0;
	  while (++i < l) if (x === xs[i]) return true;
	  return false;
	}
	function bind$(obj, key, target){
	  return function(){ return (target || obj)[key].apply(obj, arguments) };
	}
	//# sourceMappingURL=/home/sli/projects/track-pdf-reader/node_modules/livescript-loader/index.js!/home/sli/projects/track-pdf-reader/node_modules/webpack-append/index.js?require! 'react': {create-element: h, create-factory: cf, Component}: React!/home/sli/projects/track-pdf-reader/src/client/component/PDFReader/attr.ls.map


	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/home/sli/projects/track-pdf-reader/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "attr.ls" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 182:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/home/sli/projects/track-pdf-reader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/home/sli/projects/track-pdf-reader/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	var React, h, cf, Component, co, Dropzone, unalias, option, attr, PDFUploadPanel;
	React = __webpack_require__(2), h = React.createElement, cf = React.createFactory, Component = React.Component;
	co = __webpack_require__(169);
	Dropzone = __webpack_require__(183);
	unalias = __webpack_require__(177);
	option = {
	  cdm: function(){}
	};
	attr = {
	  $wrap: {
	    style: {
	      width: 300,
	      height: 300,
	      border: 'solid thin red'
	    },
	    onDragOver: function(e){
	      return e.preventDefault();
	    },
	    onDrop: function(e){
	      var file, fileReader;
	      file = e.dataTransfer.files[0];
	      fileReader = new FileReader();
	      fileReader.addEventListener('load', co.wrap(function*(e){
	        var typedArray, doc, page, viewport, $canvas, ctx;
	        typedArray = new Uint8Array(this.result);
	        log(typedArray);
	        doc = (yield PDFJS.getDocument(typedArray));
	        page = (yield doc.getPage(2));
	        viewport = page.getViewport(1);
	        $canvas = document.createElement('canvas');
	        document.body.appendChild($canvas);
	        ctx = $canvas.getContext('2d');
	        $canvas.width = viewport.width;
	        $canvas.height = viewport.height;
	        return page.render({
	          viewport: viewport,
	          canvasContext: ctx
	        });
	      }));
	      fileReader.readAsArrayBuffer(file);
	      console.log(file);
	      return e.preventDefault();
	    }
	  }
	};
	unalias(option)(PDFUploadPanel = (function(superclass){
	  var prototype = extend$((import$(PDFUploadPanel, superclass).displayName = 'PDFUploadPanel', PDFUploadPanel), superclass).prototype, constructor = PDFUploadPanel;
	  importAll$(prototype, arguments[1]);
	  PDFUploadPanel.prototype.render = function(){
	    return h('div', this.$wrap);
	  };
	  function PDFUploadPanel(){
	    PDFUploadPanel.superclass.apply(this, arguments);
	  }
	  return PDFUploadPanel;
	}(Component, attr)));
	module.exports = PDFUploadPanel;
	function extend$(sub, sup){
	  function fun(){} fun.prototype = (sub.superclass = sup).prototype;
	  (sub.prototype = new fun).constructor = sub;
	  if (typeof sup.extended == 'function') sup.extended(sub);
	  return sub;
	}
	function import$(obj, src){
	  var own = {}.hasOwnProperty;
	  for (var key in src) if (own.call(src, key)) obj[key] = src[key];
	  return obj;
	}
	function importAll$(obj, src){
	  for (var key in src) obj[key] = src[key];
	  return obj;
	}
	//# sourceMappingURL=/home/sli/projects/track-pdf-reader/node_modules/livescript-loader/index.js!/home/sli/projects/track-pdf-reader/node_modules/webpack-append/index.js?require! 'react': {create-element: h, create-factory: cf, Component}: React!/home/sli/projects/track-pdf-reader/src/client/component/PDFUploadPanel/index.ls.map


	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/home/sli/projects/track-pdf-reader/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.ls" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 183:
/***/ function(module, exports, __webpack_require__) {

	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory(__webpack_require__(2));
		else if(typeof define === 'function' && define.amd)
			define(["react"], factory);
		else if(typeof exports === 'object')
			exports["Dropzone"] = factory(require("react"));
		else
			root["Dropzone"] = factory(root["react"]);
	})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
	return /******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};
	/******/
	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {
	/******/
	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;
	/******/
	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};
	/******/
	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
	/******/
	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;
	/******/
	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}
	/******/
	/******/
	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;
	/******/
	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;
	/******/
	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";
	/******/
	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});

		var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

		var _attrAccept = __webpack_require__(1);

		var _attrAccept2 = _interopRequireDefault(_attrAccept);

		var _react = __webpack_require__(2);

		var _react2 = _interopRequireDefault(_react);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

		var supportMultiple = typeof document !== 'undefined' && document && document.createElement ? 'multiple' in document.createElement('input') : true;

		var Dropzone = function (_React$Component) {
		  _inherits(Dropzone, _React$Component);

		  function Dropzone(props, context) {
		    _classCallCheck(this, Dropzone);

		    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Dropzone).call(this, props, context));

		    _this.onClick = _this.onClick.bind(_this);
		    _this.onDragEnter = _this.onDragEnter.bind(_this);
		    _this.onDragLeave = _this.onDragLeave.bind(_this);
		    _this.onDragOver = _this.onDragOver.bind(_this);
		    _this.onDrop = _this.onDrop.bind(_this);

		    _this.state = {
		      isDragActive: false
		    };
		    return _this;
		  }

		  _createClass(Dropzone, [{
		    key: 'componentDidMount',
		    value: function componentDidMount() {
		      this.enterCounter = 0;
		    }
		  }, {
		    key: 'onDragEnter',
		    value: function onDragEnter(e) {
		      e.preventDefault();

		      // Count the dropzone and any children that are entered.
		      ++this.enterCounter;

		      // This is tricky. During the drag even the dataTransfer.files is null
		      // But Chrome implements some drag store, which is accesible via dataTransfer.items
		      var dataTransferItems = e.dataTransfer && e.dataTransfer.items ? e.dataTransfer.items : [];

		      // Now we need to convert the DataTransferList to Array
		      var allFilesAccepted = this.allFilesAccepted(Array.prototype.slice.call(dataTransferItems));

		      this.setState({
		        isDragActive: allFilesAccepted,
		        isDragReject: !allFilesAccepted
		      });

		      if (this.props.onDragEnter) {
		        this.props.onDragEnter.call(this, e);
		      }
		    }
		  }, {
		    key: 'onDragOver',
		    value: function onDragOver(e) {
		      e.preventDefault();
		      e.stopPropagation();
		      return false;
		    }
		  }, {
		    key: 'onDragLeave',
		    value: function onDragLeave(e) {
		      e.preventDefault();

		      // Only deactivate once the dropzone and all children was left.
		      if (--this.enterCounter > 0) {
		        return;
		      }

		      this.setState({
		        isDragActive: false,
		        isDragReject: false
		      });

		      if (this.props.onDragLeave) {
		        this.props.onDragLeave.call(this, e);
		      }
		    }
		  }, {
		    key: 'onDrop',
		    value: function onDrop(e) {
		      e.preventDefault();

		      // Reset the counter along with the drag on a drop.
		      this.enterCounter = 0;

		      this.setState({
		        isDragActive: false,
		        isDragReject: false
		      });

		      var droppedFiles = e.dataTransfer ? e.dataTransfer.files : e.target.files;
		      var max = this.props.multiple ? droppedFiles.length : Math.min(droppedFiles.length, 1);
		      var files = [];

		      for (var i = 0; i < max; i++) {
		        var file = droppedFiles[i];
		        // We might want to disable the preview creation to support big files
		        if (!this.props.disablePreview) {
		          file.preview = window.URL.createObjectURL(file);
		        }
		        files.push(file);
		      }

		      if (this.props.onDrop) {
		        this.props.onDrop.call(this, files, e);
		      }

		      if (this.allFilesAccepted(files)) {
		        if (this.props.onDropAccepted) {
		          this.props.onDropAccepted.call(this, files, e);
		        }
		      } else {
		        if (this.props.onDropRejected) {
		          this.props.onDropRejected.call(this, files, e);
		        }
		      }
		    }
		  }, {
		    key: 'onClick',
		    value: function onClick() {
		      if (!this.props.disableClick) {
		        this.open();
		      }
		    }
		  }, {
		    key: 'allFilesAccepted',
		    value: function allFilesAccepted(files) {
		      var _this2 = this;

		      return files.every(function (file) {
		        return (0, _attrAccept2.default)(file, _this2.props.accept);
		      });
		    }
		  }, {
		    key: 'open',
		    value: function open() {
		      this.fileInputEl.value = null;
		      this.fileInputEl.click();
		    }
		  }, {
		    key: 'render',
		    value: function render() {
		      var _this3 = this;

		      var _props = this.props;
		      var accept = _props.accept;
		      var activeClassName = _props.activeClassName;
		      var inputProps = _props.inputProps;
		      var multiple = _props.multiple;
		      var name = _props.name;
		      var rejectClassName = _props.rejectClassName;

		      var rest = _objectWithoutProperties(_props, ['accept', 'activeClassName', 'inputProps', 'multiple', 'name', 'rejectClassName']);

		      var activeStyle = // eslint-disable-line prefer-const
		      rest.activeStyle;
		      var className = rest.className;
		      var rejectStyle = rest.rejectStyle;
		      var style = rest.style;

		      var props = _objectWithoutProperties(rest, ['activeStyle', 'className', 'rejectStyle', 'style']);

		      var _state = this.state;
		      var isDragActive = _state.isDragActive;
		      var isDragReject = _state.isDragReject;


		      className = className || '';

		      if (isDragActive && activeClassName) {
		        className += ' ' + activeClassName;
		      }
		      if (isDragReject && rejectClassName) {
		        className += ' ' + rejectClassName;
		      }

		      if (!className && !style && !activeStyle && !rejectStyle) {
		        style = {
		          width: 200,
		          height: 200,
		          borderWidth: 2,
		          borderColor: '#666',
		          borderStyle: 'dashed',
		          borderRadius: 5
		        };
		        activeStyle = {
		          borderStyle: 'solid',
		          backgroundColor: '#eee'
		        };
		        rejectStyle = {
		          borderStyle: 'solid',
		          backgroundColor: '#ffdddd'
		        };
		      }

		      var appliedStyle = void 0;
		      if (activeStyle && isDragActive) {
		        appliedStyle = _extends({}, style, activeStyle);
		      } else if (rejectStyle && isDragReject) {
		        appliedStyle = _extends({}, style, rejectStyle);
		      } else {
		        appliedStyle = _extends({}, style);
		      }

		      var inputAttributes = {
		        accept: accept,
		        type: 'file',
		        style: { display: 'none' },
		        multiple: supportMultiple && multiple,
		        ref: function ref(el) {
		          return _this3.fileInputEl = el;
		        },
		        onChange: this.onDrop
		      };

		      if (name && name.length) {
		        inputAttributes.name = name;
		      }

		      return _react2.default.createElement(
		        'div',
		        _extends({
		          className: className,
		          style: appliedStyle
		        }, props /* expand user provided props first so event handlers are never overridden */, {
		          onClick: this.onClick,
		          onDragEnter: this.onDragEnter,
		          onDragOver: this.onDragOver,
		          onDragLeave: this.onDragLeave,
		          onDrop: this.onDrop
		        }),
		        this.props.children,
		        _react2.default.createElement('input', _extends({}, inputProps /* expand user provided inputProps first so inputAttributes override them */, inputAttributes))
		      );
		    }
		  }]);

		  return Dropzone;
		}(_react2.default.Component);

		Dropzone.defaultProps = {
		  disablePreview: false,
		  disableClick: false,
		  multiple: true
		};

		Dropzone.propTypes = {
		  onDrop: _react2.default.PropTypes.func,
		  onDropAccepted: _react2.default.PropTypes.func,
		  onDropRejected: _react2.default.PropTypes.func,
		  onDragEnter: _react2.default.PropTypes.func,
		  onDragLeave: _react2.default.PropTypes.func,

		  children: _react2.default.PropTypes.node,
		  style: _react2.default.PropTypes.object,
		  activeStyle: _react2.default.PropTypes.object,
		  rejectStyle: _react2.default.PropTypes.object,
		  className: _react2.default.PropTypes.string,
		  activeClassName: _react2.default.PropTypes.string,
		  rejectClassName: _react2.default.PropTypes.string,

		  disablePreview: _react2.default.PropTypes.bool,
		  disableClick: _react2.default.PropTypes.bool,

		  inputProps: _react2.default.PropTypes.object,
		  multiple: _react2.default.PropTypes.bool,
		  accept: _react2.default.PropTypes.string,
		  name: _react2.default.PropTypes.string
		};

		exports.default = Dropzone;
		module.exports = exports['default'];

	/***/ },
	/* 1 */
	/***/ function(module, exports) {

		module.exports=function(t){function n(e){if(r[e])return r[e].exports;var o=r[e]={exports:{},id:e,loaded:!1};return t[e].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}var r={};return n.m=t,n.c=r,n.p="",n(0)}([function(t,n,r){"use strict";n.__esModule=!0,r(8),r(9),n["default"]=function(t,n){if(t&&n){var r=function(){var r=n.split(","),e=t.name||"",o=t.type||"",i=o.replace(/\/.*$/,"");return{v:r.some(function(t){var n=t.trim();return"."===n.charAt(0)?e.toLowerCase().endsWith(n.toLowerCase()):/\/\*$/.test(n)?i===n.replace(/\/.*$/,""):o===n})}}();if("object"==typeof r)return r.v}return!0},t.exports=n["default"]},function(t,n){var r=t.exports={version:"1.2.2"};"number"==typeof __e&&(__e=r)},function(t,n){var r=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=r)},function(t,n,r){var e=r(2),o=r(1),i=r(4),u=r(19),c="prototype",f=function(t,n){return function(){return t.apply(n,arguments)}},s=function(t,n,r){var a,p,l,d,y=t&s.G,h=t&s.P,v=y?e:t&s.S?e[n]||(e[n]={}):(e[n]||{})[c],x=y?o:o[n]||(o[n]={});y&&(r=n);for(a in r)p=!(t&s.F)&&v&&a in v,l=(p?v:r)[a],d=t&s.B&&p?f(l,e):h&&"function"==typeof l?f(Function.call,l):l,v&&!p&&u(v,a,l),x[a]!=l&&i(x,a,d),h&&((x[c]||(x[c]={}))[a]=l)};e.core=o,s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,t.exports=s},function(t,n,r){var e=r(5),o=r(18);t.exports=r(22)?function(t,n,r){return e.setDesc(t,n,o(1,r))}:function(t,n,r){return t[n]=r,t}},function(t,n){var r=Object;t.exports={create:r.create,getProto:r.getPrototypeOf,isEnum:{}.propertyIsEnumerable,getDesc:r.getOwnPropertyDescriptor,setDesc:r.defineProperty,setDescs:r.defineProperties,getKeys:r.keys,getNames:r.getOwnPropertyNames,getSymbols:r.getOwnPropertySymbols,each:[].forEach}},function(t,n){var r=0,e=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++r+e).toString(36))}},function(t,n,r){var e=r(20)("wks"),o=r(2).Symbol;t.exports=function(t){return e[t]||(e[t]=o&&o[t]||(o||r(6))("Symbol."+t))}},function(t,n,r){r(26),t.exports=r(1).Array.some},function(t,n,r){r(25),t.exports=r(1).String.endsWith},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},function(t,n,r){var e=r(10);t.exports=function(t,n,r){if(e(t),void 0===n)return t;switch(r){case 1:return function(r){return t.call(n,r)};case 2:return function(r,e){return t.call(n,r,e)};case 3:return function(r,e,o){return t.call(n,r,e,o)}}return function(){return t.apply(n,arguments)}}},function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n,r){t.exports=function(t){var n=/./;try{"/./"[t](n)}catch(e){try{return n[r(7)("match")]=!1,!"/./"[t](n)}catch(o){}}return!0}},function(t,n){t.exports=function(t){try{return!!t()}catch(n){return!0}}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,r){var e=r(16),o=r(11),i=r(7)("match");t.exports=function(t){var n;return e(t)&&(void 0!==(n=t[i])?!!n:"RegExp"==o(t))}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,r){var e=r(2),o=r(4),i=r(6)("src"),u="toString",c=Function[u],f=(""+c).split(u);r(1).inspectSource=function(t){return c.call(t)},(t.exports=function(t,n,r,u){"function"==typeof r&&(o(r,i,t[n]?""+t[n]:f.join(String(n))),"name"in r||(r.name=n)),t===e?t[n]=r:(u||delete t[n],o(t,n,r))})(Function.prototype,u,function(){return"function"==typeof this&&this[i]||c.call(this)})},function(t,n,r){var e=r(2),o="__core-js_shared__",i=e[o]||(e[o]={});t.exports=function(t){return i[t]||(i[t]={})}},function(t,n,r){var e=r(17),o=r(13);t.exports=function(t,n,r){if(e(n))throw TypeError("String#"+r+" doesn't accept regex!");return String(o(t))}},function(t,n,r){t.exports=!r(15)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,n){var r=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:r)(t)}},function(t,n,r){var e=r(23),o=Math.min;t.exports=function(t){return t>0?o(e(t),9007199254740991):0}},function(t,n,r){"use strict";var e=r(3),o=r(24),i=r(21),u="endsWith",c=""[u];e(e.P+e.F*r(14)(u),"String",{endsWith:function(t){var n=i(this,t,u),r=arguments,e=r.length>1?r[1]:void 0,f=o(n.length),s=void 0===e?f:Math.min(o(e),f),a=String(t);return c?c.call(n,a,s):n.slice(s-a.length,s)===a}})},function(t,n,r){var e=r(5),o=r(3),i=r(1).Array||Array,u={},c=function(t,n){e.each.call(t.split(","),function(t){void 0==n&&t in i?u[t]=i[t]:t in[]&&(u[t]=r(12)(Function.call,[][t],n))})};c("pop,reverse,shift,keys,values,entries",1),c("indexOf,every,some,forEach,map,filter,find,findIndex,includes",3),c("join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill"),o(o.S,"Array",u)}]);

	/***/ },
	/* 2 */
	/***/ function(module, exports) {

		module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

	/***/ }
	/******/ ])
	});
	;
	//# sourceMappingURL=index.js.map

/***/ },

/***/ 184:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(185);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(187)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/postcss-loader/index.js!./style.css", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/postcss-loader/index.js!./style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 185:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(186)();
	// imports


	// module
	exports.push([module.id, "body {\n  margin: 0;\n  padding: 0;\n}\n::-webkit-scrollbar {\n  display: none; \n}\n", ""]);

	// exports


/***/ },

/***/ 186:
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },

/***/ 187:
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },

/***/ 188:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/home/sli/projects/track-pdf-reader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/home/sli/projects/track-pdf-reader/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	var ref$, extendObservable, autorun, ref1$, PDFPageModel, PDFReaderModel, out$ = typeof exports != 'undefined' && exports || this;
	ref$ = __webpack_require__(173), extendObservable = ref$.extendObservable, autorun = ref$.autorun;
	ref1$ = NodeList.prototype;
	ref1$.map = (ref$ = Array.prototype).map;
	ref1$.reduce = ref$.reduce;
	ref1$.filter = ref$.filter;
	out$.PDFPageModel = PDFPageModel = (function(){
	  PDFPageModel.displayName = 'PDFPageModel';
	  var prototype = PDFPageModel.prototype, constructor = PDFPageModel;
	  function PDFPageModel(arg$){
	    this.page = arg$.page;
	  }
	  PDFPageModel.prototype.ready = function*(){
	    var SVGGraphics, ref$, commonObjs, objs, viewport, opList, svgGfx, $$tspan, lineMap;
	    SVGGraphics = PDFJS.SVGGraphics;
	    ref$ = this.page, commonObjs = ref$.commonObjs, objs = ref$.objs;
	    viewport = this.page.getViewport(1);
	    opList = (yield this.page.getOperatorList());
	    svgGfx = new SVGGraphics(commonObjs, objs);
	    svgGfx.embedFonts = true;
	    this.svg = (yield svgGfx.getSVG(opList, viewport));
	    $$tspan = this.svg.querySelectorAll('tspan');
	    lineMap = this.createLineMap($$tspan);
	    return extendObservable(this, {
	      pageNo: 1,
	      lineNo: 1,
	      debug: false
	    });
	  };
	  PDFPageModel.prototype.createLineMap = function($$tspan){
	    var getYPos, lineMap, k, v, results$ = [];
	    getYPos = function(el){
	      var ref$;
	      return parseInt(el != null ? (ref$ = el.getClientRects()[0]) != null ? ref$.top : void 8 : void 8);
	    };
	    lineMap = $$tspan.reduce(function(ag, s, i, arr){
	      var y, q;
	      y = getYPos(s);
	      q = Object.keys(ag).find(function(t){
	        var b;
	        b = Math.abs(y - parseInt(t)) < 5;
	        return b;
	      });
	      if (q !== undefined) {
	        ag[q] == null && (ag[q] = []);
	        ag[q] = ag[q].concat(s);
	        q = undefined;
	        return ag;
	      }
	      ag[y] == null && (ag[y] = []);
	      ag[y] = ag[y].concat(s);
	      return ag;
	    }, {});
	    for (k in lineMap) {
	      v = lineMap[k];
	      results$.push([parseInt(k), v]);
	    }
	    return results$;
	  };
	  PDFPageModel.prototype.toNextLine = function(){};
	  PDFPageModel.prototype.toPrevLine = function(){};
	  return PDFPageModel;
	}());
	out$.PDFReaderModel = PDFReaderModel = (function(){
	  PDFReaderModel.displayName = 'PDFReaderModel';
	  var prototype = PDFReaderModel.prototype, constructor = PDFReaderModel;
	  function PDFReaderModel(arg$){
	    this.url = arg$.url;
	    this.pageStore = {};
	    this.svgStore = {};
	  }
	  PDFReaderModel.prototype.ready = function*(){
	    var pageModel;
	    this.doc = (yield PDFJS.getDocument(this.url));
	    extendObservable(this, {
	      doc: this.doc,
	      pageStore: {}
	    });
	    pageModel = (yield this.cachePage({
	      pageNo: 1
	    }));
	    return this;
	  };
	  PDFReaderModel.prototype.cachePage = function*(arg$){
	    var pageNo, that, page, pageModel, ref$;
	    pageNo = arg$.pageNo;
	    if ((that = this.pageStore[pageNo]) != null) {
	      return that;
	    }
	    page = (yield this.doc.getPage(pageNo));
	    pageModel = new PDFPageModel({
	      page: page
	    });
	    (yield pageModel.ready());
	    (ref$ = this.pageStore)[pageNo] == null && (ref$[pageNo] = pageModel);
	    return pageModel;
	  };
	  PDFReaderModel.prototype.renderPage = function*(arg$){
	    var pageNo, that, SVGGraphics, firstPage, commonObjs, objs, viewport, opList, svgGfx, svg, ref$, ref1$;
	    pageNo = arg$.pageNo;
	    if ((that = this.svgStore[pageNo]) != null) {
	      return that;
	    }
	    SVGGraphics = PDFJS.SVGGraphics;
	    this.doc = (yield PDFJS.getDocument(this.url));
	    this.docId = this.doc.pdfInfo.fingerprint;
	    firstPage = (yield this.doc.getPage(pageNo)), commonObjs = firstPage.commonObjs, objs = firstPage.objs;
	    viewport = firstPage.getViewport(1);
	    opList = (yield firstPage.getOperatorList());
	    svgGfx = new SVGGraphics(commonObjs, objs);
	    svgGfx.embedFonts = true;
	    svg = (yield svgGfx.getSVG(opList, viewport));
	    document.body.appendChild(svg);
	    return (ref1$ = (ref$ = this.svgStore)[pageNo]) != null
	      ? ref1$
	      : ref$[pageNo] = svg;
	  };
	  PDFReaderModel.prototype.fetchAdjPages = function*(){
	    var n;
	    return n = 2;
	  };
	  PDFReaderModel.prototype.toNextPage = function*(){};
	  PDFReaderModel.prototype.toPrevPage = function*(){};
	  PDFReaderModel.prototype.toNextLine = function*(){};
	  PDFReaderModel.prototype.toPrevLine = function*(){};
	  return PDFReaderModel;
	}());
	//# sourceMappingURL=/home/sli/projects/track-pdf-reader/node_modules/livescript-loader/index.js!/home/sli/projects/track-pdf-reader/src/client/store/root.ls.map


	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/home/sli/projects/track-pdf-reader/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "root.ls" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }

});
//# sourceMappingURL=demo.js.map
