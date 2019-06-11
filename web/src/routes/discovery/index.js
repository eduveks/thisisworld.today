import { h, Component } from 'preact';
import style from './style';
import { of, interval } from 'rxjs';
import { map } from 'rxjs/operators';
import manifest from '../../manifest.json';

export default class Discovery extends Component {

    constructor() {
	super();
        this.mapObservable = interval(100);
        this.mapSubscription = null;
        this.gMap = null;
	this.state = {
	    gMapsReady: false,
            video: null,
            modalVideo: null
	};
        this.modalClose.bind(this);
    }

    componentWillMount() {
        this.mapSubscription = this.mapObservable.subscribe(x => {
            if (window.gMapsLoaded === true) {
                this.setState({ gMapsReady: true });
                this.mapSubscription.unsubscribe();
                this.mapSubscription = null;
            }
        });
    }

    async componentDidMount() {
        window.onclick = (event)=> {
          if (event.target == this.modal) {
            this.modal.style.display = "none";
          }
        };
    }

    componentWillUnmount() {
        if (this.mapSubscription != null) {
            this.mapSubscription.unsubscribe();
        }
    }

    async componentDidUpdate() {
        const { gMapsReady } = this.state;
        if (gMapsReady) {
            this.gMap = new google.maps.Map(
                this.map,
                {
                    zoom: 2,
                    center: new google.maps.LatLng(30, 0)}
            );

            if (this.state.video === null) {
                (async() => {
                    let res = await fetch(manifest.endpoint +'/video.json');
                    let json = await res.json();
                    let result = json || {};
                    this.setState({ 'video': result });
                })();
             } else {
                for (const [ uid, video] of Object.entries(this.state.video)) {
                    let marker = new google.maps.Marker({
                        position: {
                            lat: video.latitude, lng: video.longitude
                        },
                        map: this.gMap,
                        title: video.title
                    });
                    let infowindow = new google.maps.InfoWindow({ content: ''+
                        '<div>'+
                            '<h3>'+ video.title +'</h3>'+
                            '<div class="'+ style.videoContainer +' '+ style.mapMarkerVideoContainer +'">'+
                                '<iframe width="853" height="480" src="'+ video.link.replace('watch?v=', 'embed/') +'" frameborder="0" allowfullscreen></iframe>'+
                            '</div>'+
                        '</div>'+
                        ''
		    });
                    marker.addListener('click', ()=> {
                        this.gMap.setZoom(6);
                        this.gMap.setCenter(marker.getPosition());
                        infowindow.open(this.gMap, marker);
                    });
                }
             }
        }
    }

    modalClose(e) {
        this.setState({
            'modalVideo': null
        });
    }

    render() {
        return (
            <div>
                <div ref={map => this.map = map} class={style.map}></div>
                <div ref={modal => this.modal = modal} class={style.modal} style={ { display: this.state.modalVideo == null ? 'none' : 'block' } } onClick={ this.modalClose.bind(this) }>
                  <div class={style.modalContent}>
                    <span class={style.modalClose} onClick={ this.modalClose.bind(this) }>&times;</span>
                    {
                        this.state.modalVideo != null ?
                        <div>
                            <h3>{ this.state.modalVideo.title }</h3>
                            <div class={ style.videoContainer }>
                                <iframe width="853" height="480" src={ this.state.modalVideo.link.replace('watch?v=', 'embed/') } frameborder="0" allowfullscreen></iframe>
                            </div>
                        </div> : <div/>
                    }
                  </div>
                </div>
            </div>
        );
    }
}
