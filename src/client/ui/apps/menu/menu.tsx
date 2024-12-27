import React, { useEffect } from "@rbxts/react"
import { Home } from "./home"
import { DelayRender } from "client/ui/components"
import { Transition } from "client/ui/components/widgets/transition"
import { lerpBinding, useMotion } from "@rbxts/pretty-react-hooks"
import { springs } from "client/constants/spring"

interface MenuProps {
    title?: string
}

/**
 * Menu wrapper
 * 
 * @param 
 * @returns 
 */
export function Menu(): React.ReactNode {

    // TODO: Incorporate reflex store & state control

    const [transition, transitionMotion] = useMotion(0);
    
    const transitionFrom = UDim2.fromScale(.5,0)
    const visible = true;

    useEffect(() => {
		transitionMotion.spring(visible ? 1 : 0, springs.gentle);
	}, [visible]);

    return (
        <>
            <DelayRender shouldRender={true} unmountDelay={1}>
                <Transition
                    groupTransparency={lerpBinding(transition, 1, 0)}
                    size={new UDim2(1, 0, 1, 0)}
                    position={lerpBinding(transition, transitionFrom, new UDim2())}
                    clipsDescendants
                >
                    <Home/>
                </Transition>
            </DelayRender>
                
        
        </>
    )
}