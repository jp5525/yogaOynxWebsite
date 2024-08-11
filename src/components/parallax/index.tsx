import { JSX } from "solid-js"
import styles from "./index.module.css"

type ParallaxProps = {
    image: string;
    children?: JSX.Element;
    class?: string;
    style?: JSX.CSSProperties;
    opacity?: number,
    fixed?: boolean,
    focus?: string
}

export default (props: ParallaxProps)=>{
    return <div class={`${styles['parallax-wrapper']} ${props.class}`} style={props.style}>
        <div 
            class={styles.parallax} 
            style={{
                "background-image": `url('${props.image}')`, 
                ...(props.opacity?{opacity: props.opacity}: {}),
                ...(props.fixed == false?{["background-attachment"]: "unset"}: {}),
                ...(props.focus ?{["background-position"]: props.focus}: {})
            }}
        ></div>
        {props.children}
    </div>
}