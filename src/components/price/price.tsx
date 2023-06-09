import price from './price.module.css';

export default function Price() {
    return (
        <div className={price.app}>
            <div className={price.head}>
                <h2 className={price.headTitle}>Deliver End-To-End Retail Billing & Solutions</h2>
                <p className={price.headText}>Unique and powerful suite of software to run your entire business, brought to you by a company with the long term vision to transform the way you work.</p>
            </div>
            <div className={price.tableWrap}>
                <div className={price.back}></div>
                <div className={price.columns}>
                    <div className={price.column}>
                        <h3 className={price.headStart}>
                            Starter
                        </h3>
                        <h2 className={price.byMonth}>$45/mo</h2>
                        <p className={price.text}>Includes <strong>1,000</strong> marketing contacts. Additional marketing contacts are sold in increments of <strong>1,000</strong> from</p>
                        <ul className={price.list}>
                            <li className={price.elem}>Outbound email and <strong>in-product</strong></li>
                            <li className={price.elem}>Messaging</li>
                            <li className={price.elem}>Push messages & notifications</li>
                            <li className={price.elem}>Custom bots</li>
                            <li className={price.elem}>Mobile Carousels</li>
                            <li className={price.elem}>Banner messages</li>
                            <li className={price.elem}><strong>Multi-channel</strong> campaigns</li>
                            <li className={price.elem}>A/B testing & control groups</li>
                        </ul>
                        <button className={price.button}>Get Started</button>
                    </div>
                    <div className={price.column}>
                        <h3 className={price.headProf}>
                            Professional
                        </h3>
                        <h2 className={price.byMonth}>$60/mo</h2>
                        <p className={price.text}>Includes <strong>2,000</strong> marketing contacts. Additional marketing contacts are sold in increments of <strong>5,000</strong> from</p>
                        <ul className={price.list}>
                            <li className={price.elem}>Outbound email and in-product</li>
                            <li className={price.elem}>Messaging</li>
                            <li className={price.elem}>Push messages & notifications</li>
                            <li className={price.elem}>Custom bots</li>
                            <li className={price.elem}>Mobile Carousels</li>
                            <li className={price.elem}>Banner messages</li>
                            <li className={price.elem}><strong>Multi-channel</strong> campaigns</li>
                            <li className={price.elem}>A/B testing & control groups</li>
                            <li className={price.elem}>Website traffic analytics</li>
                            <li className={price.elem}>Campaign reporting</li>
                            <li className={price.elem}><strong>Custom reporting</strong></li>
                            <li className={price.elem}>Salesforce integration</li>
                        </ul>
                        <button className={price.button}>Get Started</button>
                    </div>
                </div>
            </div>
        </div>

    )
};
