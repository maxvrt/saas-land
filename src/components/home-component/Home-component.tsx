import homeComponent from './home-component.module.css';
import {ReactNode} from "react";

type Props = {
    children?: ReactNode;
}

export default function HomeComponent(props: Props) {
    return (
        <div className={homeComponent.back}>
            {props.children}
        </div>
    )
};
