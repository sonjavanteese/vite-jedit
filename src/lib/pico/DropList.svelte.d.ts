/** @typedef {typeof __propDef.props}  DropListProps */
/** @typedef {typeof __propDef.events}  DropListEvents */
/** @typedef {typeof __propDef.slots}  DropListSlots */
export default class DropList extends SvelteComponentTyped<{
    open: any;
    titel?: string;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type DropListProps = typeof __propDef.props;
export type DropListEvents = typeof __propDef.events;
export type DropListSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        open: any;
        titel?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
