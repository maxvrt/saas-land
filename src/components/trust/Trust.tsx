import trust from './trust.module.css';

export default function Trust() {
    return (
        <div className={trust.app}>
            <div className={trust.head}>
                <h2 className={trust.headTitle}>Ways a project management tool can help your team</h2>
                <p className={trust.headText}>Unique and powerful suite of software to run your entire business, brought to you by a company with the long term vision to transform the way you work.</p>
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
