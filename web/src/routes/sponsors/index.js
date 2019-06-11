import { h } from 'preact';
import style from './style';

const Sponsors = () => (
	<div class={style.sponsors}>
		<h1>Thank you!</h1>
        <div class={ style.sponsorsContainer }>
            <div class={ style.sponsorsLogosContainer }>
                <div>
                    <a target="_blank" href="https://www.netuno.org">
                        <img src="https://www.netuno.org/wp-content/uploads/2018/04/netunologosticky_v4.svg" />
                    </a>
                </div>
                <div>
                    <a target="_blank" href="https://www.veks.net">
                        <img class={ style.sponsorVeksLogo } src="https://www.veks.net/images/logo.svg" />
                    </a>
                </div>
            </div>
            <div class={ style.sponsorsContentsContainer }>
                <div>
                    <a target="_blank" href="https://www.netuno.org">netuno.org</a>
                    <p>
                    Thank you by the manage data service.
                    </p>
                </div>
                <div>
                    <a target="_blank" href="https://www.veks.net">veks.net</a>
                    <p>
                    Thank you by the mail service.
                    </p>
                </div>
            </div>
            <div class={ style.source }>
              Source code is here:
              <p>
		<a target="_blank" href="https://github.com/eduveks/thisisworld.today">
		  <img src="/assets/github-dark.svg" /> GitHub
		</a>
              </p>
	      <div class={ style.author }>
		created by
		<p>
		  <a target="_blank" href="https://www.eduardovelasques.com">eduardovelasques.com</a>
		</p>
	      </div>
            </div>
        </div>
    </div>
);

export default Sponsors;
