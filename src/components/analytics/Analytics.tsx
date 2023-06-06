import analytics from './analytics.module.css';

export default function Cards() {
    return (
        <div className={analytics.app}>
            <div className={analytics.app1}></div>
            <div className={analytics.leftBox}>
                <div className={analytics.saleAnalytic}>
                    <h3 className={analytics.saleAnalyticTitle}>Sale analytics</h3>
                    <div className={analytics.saleAnalyticBlock}>
                        <div className={analytics.saleAnalyticWrap}>
                            <p className={analytics.saleAnalyticText}>Lead</p>
                            <p className={analytics.saleAnalyticText}>Qualification</p>
                            <p className={analytics.saleAnalyticText}>Validation</p>
                            <p className={analytics.saleAnalyticText}>Supply</p>
                        </div>
                        <div className={analytics.saleAnalyticWrap}>
                            <div className={analytics.saleAnalyticBar}></div>
                            <div className={analytics.saleAnalyticBarYellow}></div>
                            <div className={analytics.saleAnalyticBarBlue}></div>
                            <div className={analytics.saleAnalyticBarRed}></div>
                        </div>
                        <div className={analytics.saleAnalyticWrap}>
                            <p className={analytics.saleAnalyticText}>80%</p>
                            <p className={analytics.saleAnalyticText}>45%</p>
                            <p className={analytics.saleAnalyticText}>90%</p>
                            <p className={analytics.saleAnalyticText}>60%</p>
                        </div>
                    </div>
                </div>
                <div className={analytics.leadsBlock}>
                    <div className={analytics.leads}>
                        <h3 className={analytics.leadsTitle}>Number of leads</h3>
                        <div className={analytics.lineGraph}></div>
                    </div>
                    <div className={analytics.roundGraph}></div>
                </div>
                <div className={analytics.taskBlock}>
                    <h3 className={analytics.taskBlockTitle}>Task Assigned to me</h3>
                    <span className={analytics.plusRound}></span>
                    <span className={analytics.calendar}></span>
                    <span className={analytics.checked}></span>
                    <span className={analytics.instruments}></span>
                </div>
            </div>
            <div className={analytics.rightBox}>
                <h2 className={analytics.rightBoxTitle}>Allocate Leads and Simplify Lead Management</h2>
                <p className={analytics.rightBoxText}>Unique and powerful suite of software to run your entire business, brought to you by a company with the long term vision to transform the way you work.</p>
                <div className={analytics.grid}>
                    <span className={analytics.rowSpan2}></span>
                    <h3 className={analytics.gridTitle}>Lead generation</h3>
                    <p  className={analytics.rightBoxText}>Guide Helps Companies Increase Customer & Agent Satisfaction, Also Reducing Support Costs.</p>
                </div>
                <div className={analytics.grid}>
                    <span className={analytics.rowSpan2}></span>
                    <h3 className={analytics.gridTitle}>Team Email</h3>
                    <p  className={analytics.rightBoxText}>Group Your Contacts By Location, Age, And Almost Any Behavior With Advanced Segmentation Tools.</p>
                </div>
            </div>
        </div>
    )
};
