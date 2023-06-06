import appHeader from './app-header.module.css';

export default function AppHeader() {
    return (
        <header className={appHeader.app}>
            <div className={appHeader.logo}></div>
            <nav className={appHeader.menuWrapper}>
                <ul className={appHeader.menuList}>
                    <li className={appHeader.menuItem}>
                        <a href="/">Solution</a>
                    </li>
                    <li className={appHeader.menuItem}>
                        <a href="/">Industries</a>
                    </li>
                    <li className={appHeader.menuItem}>
                        <a href="/">Products</a>
                    </li>
                    <li className={appHeader.menuItem}>
                        <a href="/">Resources</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
};
