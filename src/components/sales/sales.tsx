import sales from './sales.module.css';

export default function Sales() {
    return (
        <div className={sales.app}>
            <div className={sales.head}>
                <h2 className={sales.headTitle}>Sales Automation Modules</h2>
                <p className={sales.headText}>Unique and powerful suite of software to run your entire business, brought to you by a company with the long term vision to transform the way you work.</p>
            </div>
            <div className={sales.tableWrap}>
                <ul className={sales.table}>
                    <li className={[sales.element, sales.offer].join(" ")}>
                        <h3 className={sales.elementTitle}>Sales</h3>
                        <p className={sales.elementText}>Unique and powerful suite sale
                            run your entire business</p>
                    </li>
                    <li className={[sales.element, sales.offer].join(" ")}>
                        <h3 className={sales.elementTitle}>Marketing</h3>
                        <p className={sales.elementText}>Unique and powerful suite sale
                            run your entire business</p>
                    </li>
                    <li className={[sales.element, sales.offer].join(" ")}>
                        <h3 className={sales.elementTitle}>Service</h3>
                        <p className={sales.elementText}>Unique and powerful suite sale
                            run your entire business</p>
                    </li>
                    <li className={[sales.element, sales.offer].join(" ")}>
                        <h3 className={sales.elementTitle}>Automotive</h3>
                        <p className={sales.elementText}>Unique and powerful suite sale
                            run your entire business</p>
                    </li>
                    <li className={[sales.element, sales.offer].join(" ")}>
                        <h3 className={sales.elementTitle}>Real estate</h3>
                        <p className={sales.elementText}>Unique and powerful suite sale
                            run your entire business</p>
                    </li>
                    <li className={[sales.element, sales.offer].join(" ")}>
                        <h3 className={sales.elementTitle}>Education</h3>
                        <p className={sales.elementText}>Unique and powerful suite sale
                            run your entire business</p>
                    </li>
                    <li className={[sales.element, sales.offer].join(" ")}>
                        <h3 className={sales.elementTitle}>Project Management</h3>
                        <p className={sales.elementText}>Unique and powerful suite sale
                            run your entire business</p>
                    </li>
                    <li className={[sales.element, sales.offer].join(" ")}>
                        <h3 className={sales.elementTitle}>Delivery Management</h3>
                        <p className={sales.elementText}>Unique and powerful suite sale
                            run your entire business</p>
                    </li>
                    <li className={[sales.element, sales.offer].join(" ")}>
                        <h3 className={sales.elementTitle}>Loyalty Management</h3>
                        <p className={sales.elementText}>Unique and powerful suite sale
                            run your entire business</p>
                    </li>
                </ul>
            </div>
        </div>

    )
};
