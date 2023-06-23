import {InjectionKey} from "vue";

export interface ContactsMenu{
    title: string,
    icon: string,
    bgc: string,
    idx: number,
}

export const key = Symbol() as InjectionKey<ContactsMenu>;//标注类型。