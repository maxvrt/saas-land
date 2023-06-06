import promo from './promo.module.css';

export default function Promo() {
    return (
        <div className={promo.wrapper}>
            <div className={promo.info}>
                <h1 className={promo.header}>The CRM Platform Your Whole Business Will Love</h1>
                <p className={promo.text}>Provide excellent customer service. Answer more tickets all-in-one Primarily software.</p>
                <div className={promo.buttons}>
                    <button className={promo.button}>Get Started</button>
                    <p className={promo.short}>How It Work</p>
                </div>
                <div className={promo.winner}>
                    <div className={promo.leftBranch}></div>
                    <div className={promo.flag}></div>
                    <div className={promo.stars}>
                        <h2 className={promo.smallHeader}>5 Star Awards</h2>
                        <p className={promo.text}>for customer services</p>
                        <ul className={promo.starsList}>
                            <li className={promo.star}></li>
                            <li className={promo.star}></li>
                            <li className={promo.star}></li>
                            <li className={promo.star}></li>
                            <li className={promo.star}></li>
                        </ul>
                    </div>
                    <div className={promo.rightBranch}></div>
                </div>
            </div>
            <div className={promo.graphics}>
                <div className={promo.graphRectangle}></div>
                <div className={promo.graphSmallRectangle}></div>
                <div className={promo.graphBigSquare}></div>
                <div className={promo.graphSquare}></div>
                <div className={promo.graphRectangle}></div>
            </div>

        </div>
    )
};
