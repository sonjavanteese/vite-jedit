/** @typedef {typeof __propDef.props}  FormRangeProps */
/** @typedef {typeof __propDef.events}  FormRangeEvents */
/** @typedef {typeof __propDef.slots}  FormRangeSlots */
export default class FormRange extends SvelteComponentTyped<{
    [x: string]: any;
    label?: boolean;
    value?: string;
    max?: string;
    min?: string;
    step?: string;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type FormRangeProps = typeof __propDef.props;
export type FormRangeEvents = typeof __propDef.events;
export type FormRangeSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        label?: boolean;
        value?: string;
        max?: string;
        min?: string;
        step?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
