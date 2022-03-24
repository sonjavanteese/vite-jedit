/** @typedef {typeof __propDef.props}  FormRadiosProps */
/** @typedef {typeof __propDef.events}  FormRadiosEvents */
/** @typedef {typeof __propDef.slots}  FormRadiosSlots */
export default class FormRadios extends SvelteComponentTyped<{
    label?: boolean;
    value?: number;
    items?: {
        val: number;
        titel: string;
    }[];
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type FormRadiosProps = typeof __propDef.props;
export type FormRadiosEvents = typeof __propDef.events;
export type FormRadiosSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        label?: boolean;
        value?: number;
        items?: {
            val: number;
            titel: string;
        }[];
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
