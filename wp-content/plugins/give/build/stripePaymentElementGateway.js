!function(){var e={6664:function(e,t,n){!function(e,t){"use strict";function n(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function r(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=n){var r,o,a=[],_n=!0,i=!1;try{for(n=n.call(e);!(_n=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);_n=!0);}catch(e){i=!0,o=e}finally{try{_n||null==n.return||n.return()}finally{if(i)throw o}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t;function c(){}function u(){}u.resetWarningCache=c;var l,p,f=(l=function(e){e.exports=function(){function e(e,t,n,r,o,a){if("SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"!==a){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:u,resetWarningCache:c};return n.PropTypes=n,n}()},l(p={exports:{}},p.exports),p.exports),m=function(e){var n=t.useRef(e);return t.useEffect((function(){n.current=e}),[e]),n.current},d=function(e){return null!==e&&"object"===o(e)},y="[object Object]",h=function e(t,n){if(!d(t)||!d(n))return t===n;var r=Array.isArray(t);if(r!==Array.isArray(n))return!1;var o=Object.prototype.toString.call(t)===y;if(o!==(Object.prototype.toString.call(n)===y))return!1;if(!o&&!r)return t===n;var a=Object.keys(t),i=Object.keys(n);if(a.length!==i.length)return!1;for(var s={},c=0;c<a.length;c+=1)s[a[c]]=!0;for(var u=0;u<i.length;u+=1)s[i[u]]=!0;var l=Object.keys(s);if(l.length!==a.length)return!1;var p=t,f=n;return l.every((function(t){return e(p[t],f[t])}))},g=function(e,t,n){return d(e)?Object.keys(e).reduce((function(o,i){var s=!d(t)||!h(e[i],t[i]);return n.includes(i)?(s&&console.warn("Unsupported prop change: options.".concat(i," is not a mutable property.")),o):s?r(r({},o||{}),{},a({},i,e[i])):o}),null):null},v=function(e){if(null===e||d(t=e)&&"function"==typeof t.elements&&"function"==typeof t.createToken&&"function"==typeof t.createPaymentMethod&&"function"==typeof t.confirmCardPayment)return e;var t;throw new Error("Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.")},E=function(e){if(function(e){return d(e)&&"function"==typeof e.then}(e))return{tag:"async",stripePromise:Promise.resolve(e).then(v)};var t=v(e);return null===t?{tag:"empty"}:{tag:"sync",stripe:t}},w=t.createContext(null);w.displayName="ElementsContext";var b=t.createContext(null);b.displayName="CartElementContext";var C=function(e){var n=e.stripe,r=e.options,o=e.children,a=t.useMemo((function(){return E(n)}),[n]),s=i(t.useState(null),2),c=s[0],u=s[1],l=i(t.useState(null),2),p=l[0],f=l[1],d=i(t.useState((function(){return{stripe:"sync"===a.tag?a.stripe:null,elements:"sync"===a.tag?a.stripe.elements(r):null}})),2),y=d[0],h=d[1];t.useEffect((function(){var e=!0,t=function(e){h((function(t){return t.stripe?t:{stripe:e,elements:e.elements(r)}}))};return"async"!==a.tag||y.stripe?"sync"!==a.tag||y.stripe||t(a.stripe):a.stripePromise.then((function(n){n&&e&&t(n)})),function(){e=!1}}),[a,y,r]);var v=m(n);t.useEffect((function(){null!==v&&v!==n&&console.warn("Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it.")}),[v,n]);var C=m(r);return t.useEffect((function(){if(y.elements){var e=g(r,C,["clientSecret","fonts"]);e&&y.elements.update(e)}}),[r,C,y.elements]),t.useEffect((function(){var e=y.stripe;e&&e._registerWrapper&&e.registerAppInfo&&(e._registerWrapper({name:"react-stripe-js",version:"2.1.2"}),e.registerAppInfo({name:"react-stripe-js",version:"2.1.2",url:"https://stripe.com/docs/stripe-js/react"}))}),[y.stripe]),t.createElement(w.Provider,{value:y},t.createElement(b.Provider,{value:{cart:c,setCart:u,cartState:p,setCartState:f}},o))};C.propTypes={stripe:f.any,options:f.object};var S=function(e){return function(e,t){if(!e)throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(t," in an <Elements> provider."));return e}(t.useContext(w),e)},j=function(e){return function(e,t){if(!e)throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(t," in an <Elements> provider."));return e}(t.useContext(b),e)},P=function(e){return(0,e.children)(S("mounts <ElementsConsumer>"))};P.propTypes={children:f.func.isRequired};var k=function(e,n,r){var o=!!r,a=t.useRef(r);t.useEffect((function(){a.current=r}),[r]),t.useEffect((function(){if(!o||!e)return function(){};var t=function(){a.current&&a.current.apply(a,arguments)};return e.on(n,t),function(){e.off(n,t)}}),[o,n,e,a])},O=function(e,n){var r,o="".concat((r=e).charAt(0).toUpperCase()+r.slice(1),"Element"),a=n?function(e){S("mounts <".concat(o,">")),j("mounts <".concat(o,">"));var n=e.id,r=e.className;return t.createElement("div",{id:n,className:r})}:function(n){var r,a=n.id,s=n.className,c=n.options,u=void 0===c?{}:c,l=n.onBlur,p=n.onFocus,f=n.onReady,d=n.onChange,y=n.onEscape,h=n.onClick,v=n.onLoadError,E=n.onLoaderStart,w=n.onNetworksChange,b=n.onCheckout,C=n.onLineItemClick,P=n.onConfirm,O=n.onCancel,A=n.onShippingAddressChange,x=n.onShippingRateChange,_=S("mounts <".concat(o,">")).elements,R=i(t.useState(null),2),F=R[0],M=R[1],T=t.useRef(null),I=t.useRef(null),B=j("mounts <".concat(o,">")),L=B.setCart,N=B.setCartState;k(F,"blur",l),k(F,"focus",p),k(F,"escape",y),k(F,"click",h),k(F,"loaderror",v),k(F,"loaderstart",E),k(F,"networkschange",w),k(F,"lineitemclick",C),k(F,"confirm",P),k(F,"cancel",O),k(F,"shippingaddresschange",A),k(F,"shippingratechange",x),"cart"===e?r=function(e){N(e),f&&f(e)}:f&&(r="expressCheckout"===e?f:function(){f(F)}),k(F,"ready",r),k(F,"change","cart"===e?function(e){N(e),d&&d(e)}:d),k(F,"checkout","cart"===e?function(e){N(e),b&&b(e)}:b),t.useLayoutEffect((function(){if(null===T.current&&_&&null!==I.current){var t=_.create(e,u);"cart"===e&&L&&L(t),T.current=t,M(t),t.mount(I.current)}}),[_,u,L]);var D=m(u);return t.useEffect((function(){if(T.current){var e=g(u,D,["paymentRequest"]);e&&T.current.update(e)}}),[u,D]),t.useLayoutEffect((function(){return function(){if(T.current&&"function"==typeof T.current.destroy)try{T.current.destroy(),T.current=null}catch(e){}}}),[]),t.createElement("div",{id:a,className:s,ref:I})};return a.propTypes={id:f.string,className:f.string,onChange:f.func,onBlur:f.func,onFocus:f.func,onReady:f.func,onEscape:f.func,onClick:f.func,onLoadError:f.func,onLoaderStart:f.func,onNetworksChange:f.func,onCheckout:f.func,onLineItemClick:f.func,onConfirm:f.func,onCancel:f.func,onShippingAddressChange:f.func,onShippingRateChange:f.func,options:f.object},a.displayName=o,a.__elementType=e,a},A="undefined"==typeof window,x=O("auBankAccount",A),_=O("card",A),R=O("cardNumber",A),F=O("cardExpiry",A),M=O("cardCvc",A),T=O("fpxBank",A),I=O("iban",A),B=O("idealBank",A),L=O("p24Bank",A),N=O("epsBank",A),D=O("payment",A),W=O("expressCheckout",A),U=O("paymentRequestButton",A),q=O("linkAuthentication",A),Y=O("address",A),G=O("shippingAddress",A),V=O("cart",A),X=O("paymentMethodMessaging",A),K=O("affirmMessage",A),J=O("afterpayClearpayMessage",A);e.AddressElement=Y,e.AffirmMessageElement=K,e.AfterpayClearpayMessageElement=J,e.AuBankAccountElement=x,e.CardCvcElement=M,e.CardElement=_,e.CardExpiryElement=F,e.CardNumberElement=R,e.CartElement=V,e.Elements=C,e.ElementsConsumer=P,e.EpsBankElement=N,e.ExpressCheckoutElement=W,e.FpxBankElement=T,e.IbanElement=I,e.IdealBankElement=B,e.LinkAuthenticationElement=q,e.P24BankElement=L,e.PaymentElement=D,e.PaymentMethodMessagingElement=X,e.PaymentRequestButtonElement=U,e.ShippingAddressElement=G,e.useCartElement=function(){return j("calls useCartElement()").cart},e.useCartElementState=function(){return j("calls useCartElementState()").cartState},e.useElements=function(){return S("calls useElements()").elements},e.useStripe=function(){return S("calls useStripe()").stripe},Object.defineProperty(e,"__esModule",{value:!0})}(t,n(9196))},9196:function(e){"use strict";e.exports=window.React}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r].call(a.exports,a,a.exports,n),a.exports}!function(){"use strict";var e=window.wp.element,t="https://js.stripe.com/v3",r=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,o="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",a=null,i=Promise.resolve().then((function(){return e=null,null!==a||(a=new Promise((function(n,a){if("undefined"!=typeof window&&"undefined"!=typeof document)if(window.Stripe&&e&&console.warn(o),window.Stripe)n(window.Stripe);else try{var i=function(){for(var e=document.querySelectorAll('script[src^="'.concat(t,'"]')),n=0;n<e.length;n++){var o=e[n];if(r.test(o.src))return o}return null}();i&&e?console.warn(o):i||(i=function(e){var n=e&&!e.advancedFraudSignals?"?advancedFraudSignals=false":"",r=document.createElement("script");r.src="".concat(t).concat(n);var o=document.head||document.body;if(!o)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return o.appendChild(r),r}(e)),i.addEventListener("load",(function(){window.Stripe?n(window.Stripe):a(new Error("Stripe.js not available"))})),i.addEventListener("error",(function(){a(new Error("Failed to load Stripe.js"))}))}catch(e){return void a(e)}else n(null)}))),a;var e})),s=!1;i.catch((function(e){s||console.warn(e)}));var c=n(6664);let u=null,l=null,p=!1;const f=["BIF","CLP","DJF","GNF","JPY","KMF","KRW","MGA","PYG","RWF","UGX","VND","VUV","XAF","XOF","XPF"],m=({gateway:t})=>{const n=(0,c.useStripe)(),r=(0,c.useElements)();return t.stripe=n,t.elements=r,(0,e.createElement)(c.PaymentElement,{onChange:e=>{l=e.value.type,p="card"===e.value.type},options:{fields:{billingDetails:{name:"never",email:"never"}}}})},d={id:"stripe_payment_element",initialize(){const{stripeKey:e,stripeConnectedAccountId:t}=this.settings;if(!e||!t)throw new Error("Stripe gateway settings are missing.  Check your Stripe settings.");u=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];s=!0;var r=Date.now();return i.then((function(e){return function(e,t,n){if(null===e)return null;var r=e.apply(void 0,t);return function(e,t){e&&e._registerWrapper&&e._registerWrapper({name:"stripe-js",version:"1.54.2",startTime:t})}(r,n),r}(e,t,r)}))}(e,{stripeAccount:t})},beforeCreatePayment:async function(e){if(!this.stripe||!this.elements)throw new Error("Stripe was not able to load.");const{error:t}=await this.elements.submit();if(t)throw new Error(t);return{stripePaymentMethod:l,stripePaymentMethodIsCreditCard:p,...this.settings}},afterCreatePayment:async function(e){const{error:t}=await this.stripe.confirmPayment({elements:this.elements,clientSecret:e.data.clientSecret,confirmParams:{payment_method_data:{billing_details:e.data.billingDetails},return_url:e.data.returnUrl}});if(console.error(t),"card_error"===t.type||"validation_error"===t.type)throw new Error(t.message);if(t)throw new Error(t.message)},Fields(){if(!u)throw new Error("Stripe library was not able to load.  Check your Stripe settings.");const{useWatch:t}=window.givewp.form.hooks,n=t({name:"donationType"}),r=t({name:"currency"});var o,a;const i={mode:"subscription"===n?"subscription":"payment",amount:(o=t({name:"amount"}),a=r.toString().toUpperCase(),f.includes(a)?Math.round(parseFloat(o)):Math.round(100*parseFloat(o))),currency:r.toLowerCase()};return(0,e.createElement)(c.Elements,{stripe:u,options:i},(0,e.createElement)(m,{gateway:d}))}};window.givewp.gateways.register(d)}()}();