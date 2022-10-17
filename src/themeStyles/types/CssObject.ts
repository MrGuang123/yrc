import * as CSS from 'csstype'

export interface CSSObject { }

export type CSSTssSpecials = {
    ref?: string;
}

// 返回所有的css属性
export type CSSProperties = CSS.PropertiesFallback<number | string>
// 同样返回所有css属性，只是值可以为字符串的数组
export type CSSPropertiesWithMultiValues = {
    [K in keyof CSSProperties]: CSSProperties[K] | Extract<CSSProperties[K], string>[]
}

// css伪类
export type CSSPseudos = { [K in CSS.Pseudos]?: CSSObject }

// css插值数组
export interface ArrayCSSInterpolation extends Array<CSSInterpolation> { }

// 组件选择器
export interface ComponentSelector {
    __emotion_styles: any;
}

// 关键帧
export type Keyframes = {
    name: string;
    styles: string;
    anim: number;
    toString: () => string;
} & string;

// 序列化样式
export interface SerializedStyles {
    name: string;
    styles: string;
    map?: string;
    next?: SerializedStyles;
}

// 插值原始值
export type InterpolationPrimitive = null | undefined | boolean | number | string |
    ComponentSelector | Keyframes | SerializedStyles | CSSObject;

// css插值
export type CSSInterpolation = InterpolationPrimitive | ArrayCSSInterpolation;

export interface CSSOthersObject {
    [propertiesName: string]: CSSInterpolation;
}