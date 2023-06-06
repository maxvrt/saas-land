import cards from './cards.module.css';

export default function Cards() {
    return (
        <div className={cards.app}>
            <h2 className={cards.title}></h2>
            <p className={cards.text}></p>
            <ul className={cards.cardsList}>
                <li className={cards.cardItem}>
                    <div className={cards.imageGear}></div>
                    <h3 className={cards.cardItemTitle}>Powerful Settings</h3>
                    <p className={cards.cardItemText}>Provide excellent customer service.
                        Answer more tickets.</p>
                </li>
                <li className={cards.cardItem}>
                    <div className={cards.imageUser}></div>
                    <h3 className={cards.cardItemTitle}>User Friendly</h3>
                    <p className={cards.cardItemText}>Use Timeline to plan projects right how the pieces fit together.</p>
                </li>
                <li className={cards.cardItem}>
                    <div className={cards.imageCheck}></div>
                    <h3 className={cards.cardItemTitle}>Integrated platform</h3>
                    <p className={cards.cardItemText}>Vivamus massa eleifend etiam neque
                        odio feugiat dolor est.</p>
                </li>
            </ul>
        </div>
    )
};
