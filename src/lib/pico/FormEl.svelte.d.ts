/** @typedef {typeof __propDef.props}  FormElProps */
/** @typedef {typeof __propDef.events}  FormElEvents */
/** @typedef {typeof __propDef.slots}  FormElSlots */
export default class FormEl extends SvelteComponentTyped<{
    [x: string]: any;
    select?: boolean;
    label?: boolean;
    help?: boolean;
    search?: boolean;
    color?: boolean;
    file?: boolean;
    options?: any[];
    value?: string;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type FormElProps = typeof __propDef.props;
export type FormElEvents = typeof __propDef.events;
export type FormElSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        select?: boolean;
        label?: boolean;
        help?: boolean;
        search?: boolean;
        color?: boolean;
        file?: boolean;
        options?: any[];
        value?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
