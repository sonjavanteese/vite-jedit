/** @typedef {typeof __propDef.props}  AccordionProps */
/** @typedef {typeof __propDef.events}  AccordionEvents */
/** @typedef {typeof __propDef.slots}  AccordionSlots */
export default class Accordion extends SvelteComponentTyped<{
    open: any;
    titel?: string;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type AccordionProps = typeof __propDef.props;
export type AccordionEvents = typeof __propDef.events;
export type AccordionSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        open: any;
        titel?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export {};
