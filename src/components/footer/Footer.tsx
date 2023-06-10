import footer from './footer.module.css';

export default function Footer() {
    return (
        <div className={footer.app}>
            <div className={footer.wrap}>
                <div className={footer.head}>
                    <div className={footer.logo}></div>
                    <div className={footer.social}>
                        <span className={footer.element}></span>
                        <span className={footer.element}></span>
                        <span className={footer.element}></span>
                        <span className={footer.element}></span>
                        <span className={footer.element}></span>
                    </div>
                </div>
                <div className={footer.tableHead}>
                    <p className={footer.tableEl}>Usefull Link</p>
                    <p className={footer.tableEl}>Service</p>
                    <p className={footer.tableEl}>Contact Us</p>
                    <p className={footer.tableEl}>Our Latest News</p>
                </div>
                <div className={footer.table}>
                    <div className={footer.tableEl}>
                        <p className={footer.tableElInner}>Solution</p>
                        <p className={footer.tableElInner}>Industries</p>
                        <p className={footer.tableElInner}>Products</p>
                        <p className={footer.tableElInner}>Resources</p>
                        <p className={footer.tableElInner}>Pricing</p>
                    </div>
                    <div className={footer.tableEl}>
                        <p className={footer.tableElInner}>Sale</p>
                        <p className={footer.tableElInner}>Marketing</p>
                        <p className={footer.tableElInner}>Real Estate</p>
                        <p className={footer.tableElInner}>Automotive</p>
                        <p className={footer.tableElInner}>Education</p>
                    </div>
                    <div className={footer.tableBlock}>
                        <div className={footer.tableElBlock}>
                            1700 W Blancke St,
                            port south USA, American
                        </div>
                        <div className={footer.tableElBlock}>
                            +3255 456 789
                            mail@primarily.com
                        </div>
                    </div>
                    <div className={footer.tableEl}>

                    </div>
                </div>
                <div className={footer.last}>
                    Copyright © Primary | Designed by VictorFlow Templates
                </div>
            </div>
        </div>

    )
};
