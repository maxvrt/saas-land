import crm from './crm.module.css';
import analytics from "../analytics/analytics.module.css";

export default function Crm() {
    return (
        <div className={crm.app}>
            <div className={crm.leftBox}>
                <h2 className={crm.leftBoxTitle}>Ways a project management tool can help your team</h2>
                <p className={crm.leftBoxText}>Unique and powerful suite of software to run your entire business, brought to you by a company with the long term vision to transform the way you work.</p>
                <div className={crm.ways}>
                    <div className={crm.waysBlock}>
                        <span className={crm.waysIconShield}></span>
                        <h3 className={crm.waysTitle}>CRM Security</h3>
                        <p  className={crm.leftBoxText}>Cards and make more sales while chatting</p>
                    </div>
                    <div className={crm.waysBlock}>
                        <span className={crm.waysIconSpeaker}></span>
                        <h3 className={crm.waysTitle}>CRM Security</h3>
                        <p  className={crm.leftBoxText}>Cards and make more sales while chatting</p>
                    </div>
                </div>
            </div>
            <div className={crm.rightBox}>
                <div className={crm.circle}>
                    <span className={crm.location}></span>
                    <span className={crm.cart}></span>
                    <span></span>
                    <span className={crm.shop}></span>
                    <span className={crm.phone}></span>
                    <span className={crm.mail}></span>
                    <span className={crm.chat}></span>
                    <span className={crm.book}></span>
                    <span className={crm.crm}></span>
                </div>
            </div>
        </div>
    )
};
