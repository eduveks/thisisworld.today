import { h, Component } from 'preact';
import { Router } from 'preact-router';

import { of, interval } from 'rxjs';

import Header from './header';
import Footer from './footer';

import Discovery from '../routes/discovery';
import Media from '../routes/media';
import Donate from '../routes/donate';
import Human from '../routes/human';
import Sponsors from '../routes/sponsors';

import manifest from '../manifest.json';

if (typeof window !== "undefined") {
    window.gMapsLoaded = false;
    window.gMapsInit = function() {
        window.gMapsLoaded = true;
    };
}

export default class App extends Component {

    /** Gets fired when the route changes.
     *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
     *	@param {string} event.url	The newly routed URL
     */
    handleRoute = e => {
	this.currentUrl = e.url;
    };

    componentWillMount() {

    }

    componentDidMount() {
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', manifest.analytics);
    }

    componentDidUpdate() {
	
    }

    render() {
	return (
	    <div id="app">
	      <Header />
	      <Router onChange={this.handleRoute}>
		<Discovery path="/" />
                <Media path="/media/" country="*" />
                <Media path="/media/:country" />
		{ /* <Donate path="/donate/" item="me" />
		     <Donate path="/donate/:item" />
		     <Human path="/human/" />
		     */ }
		<Sponsors path="/sponsors/" />
	      </Router>
              <Footer />
              <script async defer src={ `https://maps.googleapis.com/maps/api/js?key=${ manifest.mapsKey }&callback=gMapsInit` }></script>
              <script async src={ `https://www.googletagmanager.com/gtag/js?id=${ manifest.analytics }` }></script>
	    </div>
	);
    }
}
