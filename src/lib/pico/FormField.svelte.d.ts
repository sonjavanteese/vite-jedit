/** @typedef {typeof __propDef.props}  FormFieldProps */
/** @typedef {typeof __propDef.events}  FormFieldEvents */
/** @typedef {typeof __propDef.slots}  FormFieldSlots */
export default class FormField extends SvelteComponentTyped<{
    legend?: boolean;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type FormFieldProps = typeof __propDef.props;
export type FormFieldEvents = typeof __propDef.events;
export type FormFieldSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        legend?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export {};
