import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

const Header = () => (
	<header class={style.header}>
		<h1><a href="/">this is world <span>. today</span></a></h1>
		<nav>
			<Link activeClassName={style.active} href="/">DISCOVERY</Link>
			<Link activeClassName={style.active} href="/media">Media</Link>
			{ /* <Link activeClassName={style.active} href="/donate">Donate</Link>
			<Link activeClassName={style.active} href="/human">Human</Link> */ }
			<Link activeClassName={style.active} href="/sponsors">Sponsors</Link>
		</nav>
	</header>
);

export default Header;
