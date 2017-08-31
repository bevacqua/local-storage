declare module "local-storage" {
    export function set<T>(key: string, value: T): boolean;
    export function get<T>(key: string): T;
    export function remove(key:string):void;
    export function clear():void;
    export default function<T>(key:string,value?:T):void;
}