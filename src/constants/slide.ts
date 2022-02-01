// 定义一些store全局的类型

export type Slide = {
    index: number;// 第n张幻灯片
    contents: EditingEle[];
    activeEle?: number; // 编辑中的幻灯片存在一个编辑中的元素
    editingSlideRef? :any;
}

export type EditingEle = {
    // 编辑元素： 文本、图片。。。
    type: string;
    // zIndex: number; 在contents数组的顺序，即z-index从小到大的，直接利用后面元素对前面元素的覆盖性来做图层
    style: React.CSSProperties;
    x?: number;
    y?: number;
}

export enum Ele {
    Text = 'text',
    Img = 'img',
}