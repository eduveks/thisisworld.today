import { h, Component } from 'preact';
import { Router, route } from 'preact-router';
import manifest from '../../manifest.json';
import style from './style';

export default class Media extends Component {

    constructor() {
	super();
	this.state = {
            countries: null,
            videos: null
	};
    }

    componentWillMount() {

    }

    async componentDidMount() {
        this.reload();
    }

    componentWillUnmount() {

    }

    async componentDidUpdate() {

    }

    async reload() {
        if (this.state.countries === null && this.state.videos === null) {
            (async() => {
		let countryResult = await fetch(manifest.endpoint +'/country.json');
		let countryJSON = await countryResult.json();
		let countries = [];
		for (const [ country_uid, country] of Object.entries(countryJSON)) {
                    country.uid = country_uid;
                    countries.push(country);
		}
		countries.sort((a, b) => {
                    if (a.name < b.name) {
                        return -1;
                    }
                    if (a.name > b.name) {
                        return 1;
                    }
                    return 0;
		});
		let videoResult = await fetch(manifest.endpoint +'/video.json');
		let videoJSON = await videoResult.json();
		let videos = videoJSON || {};
		this.setState({ 'countries': countries, 'videos': videos });
            })();
        }
    }

    render() {
        let menu = [];
        let main = <div></div>;
        let contents = [];
        if (this.state.countries !== null && this.state.videos !== null) {
            for (const country of this.state.countries) {
                if (this.props.country != country.code) {
                    continue
                }
                contents.push(
                    <div>
                        <h2>{ country.name }</h2>
                    </div>
                );
                for (const [ video_uid, video] of Object.entries(this.state.videos)) {
                    if (country.uid == video.country_uid) {
                        contents.push(
                            <div>
                                <h3>{ video.title }</h3>
                                <div class={ style.videoContainer }>
                                    <iframe width="853" height="480" src={ video.link.replace('watch?v=', 'embed/') } frameborder="0" allowfullscreen></iframe>
                                </div>
                            </div>
                        );
                    }
                }
            }
            for (const country of this.state.countries) {
                menu.push(
                    <div class={ this.props.country == country.code ? style.navActive : '' }>
                        <a href="#" onClick={ e => route('/media/'+ country.code, true) }>{ country.code }</a>
                    </div>
                );
            }
            if (contents.length == 0) {
                main = <div class={ style.navButtons }>
                    {
                        this.state.countries.map((country) => {
                            return <div onClick={ e => route('/media/'+ country.code, true) }>
                                <div>
                                <p><strong>{ country.code }</strong></p>
                                <p>{ country.name }</p>
                                </div>
				</div>;
                        })
                    }
                </div>;
            }
        }

        return (
            <div>
                <div class={style.navLeft}>{ menu }</div>
                <div class={style.media}>
            		<h1>Media</h1>
                    <div class={style.navTop}>{ menu }</div>
                    { main }
                    <div>{ contents }</div>
            	</div>
            </div>
        );
    }
}
