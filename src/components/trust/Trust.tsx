import trust from './trust.module.css';

export default function Trust() {
    return (
        <div className={trust.app}>
            <div className={trust.head}>
                <h2 className={trust.headTitle}>Trusted by more than 75 million users globally</h2>
                <p className={trust.headText}>Unique and powerful suite of software to run your entire business, brought to you  transform the way you work.</p>
            </div>
            <div className={trust.tableWrap}>
                <ul className={trust.table}>
                    <li className={trust.element}></li>
                    <li className={trust.element}></li>
                    <li className={trust.element}></li>
                    <li className={trust.element}></li>
                    <li className={trust.element}></li>
                    <li className={trust.element}></li>
                    <li className={trust.element}></li>
                    <li className={trust.element}></li>
                    <li className={trust.element}></li>
                    <li className={trust.element}></li>
                    <li className={trust.element}></li>
                    <li className={trust.element}></li>
                </ul>
            </div>
        </div>

    )
};
