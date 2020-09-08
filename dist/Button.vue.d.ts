declare const _default: import("vue").ComponentOptions<import("vue").default, import("@vue/composition-api").ShallowUnwrapRef<{
    count: import("@vue/composition-api").Ref<number>;
    increase: () => void;
}> & {
    [key: string]: unknown;
}, {}, {}, {
    number: {
        type: NumberConstructor;
        default: number;
    };
}, {} & {
    number?: number | undefined;
}> & import("vue").VueConstructor<import("vue").default> & (new (...args: any[]) => import("@vue/composition-api").ComponentRenderProxy<{
    number: number;
} & {}, import("@vue/composition-api").ShallowUnwrapRef<{
    count: import("@vue/composition-api").Ref<number>;
    increase: () => void;
}>, {} & {
    number?: number | undefined;
}, {}, {}, {
    number: number;
} & {}>);
export default _default;
