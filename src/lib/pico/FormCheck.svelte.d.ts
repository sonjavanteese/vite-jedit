/** @typedef {typeof __propDef.props}  FormCheckProps */
/** @typedef {typeof __propDef.events}  FormCheckEvents */
/** @typedef {typeof __propDef.slots}  FormCheckSlots */
export default class FormCheck extends SvelteComponentTyped<{
    [x: string]: any;
    toggle?: boolean;
    label?: boolean;
    checked?: boolean;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type FormCheckProps = typeof __propDef.props;
export type FormCheckEvents = typeof __propDef.events;
export type FormCheckSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        toggle?: boolean;
        label?: boolean;
        checked?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
