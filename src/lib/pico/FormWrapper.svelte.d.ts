/** @typedef {typeof __propDef.props}  FormWrapperProps */
/** @typedef {typeof __propDef.events}  FormWrapperEvents */
/** @typedef {typeof __propDef.slots}  FormWrapperSlots */
export default class FormWrapper extends SvelteComponentTyped<{}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type FormWrapperProps = typeof __propDef.props;
export type FormWrapperEvents = typeof __propDef.events;
export type FormWrapperSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {};
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
