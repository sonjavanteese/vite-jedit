/** @typedef {typeof __propDef.props}  ArticleProps */
/** @typedef {typeof __propDef.events}  ArticleEvents */
/** @typedef {typeof __propDef.slots}  ArticleSlots */
export default class Article extends SvelteComponentTyped<{
    footer: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
    footer: {};
}> {
}
export type ArticleProps = typeof __propDef.props;
export type ArticleEvents = typeof __propDef.events;
export type ArticleSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        footer: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
        footer: {};
    };
};
export {};
