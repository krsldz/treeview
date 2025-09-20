import { ReactNode } from 'react';

type Value = string | number;
type EntityType = {
    id: Value;
    name: string;
};
type NodeData = {
    title: string;
    value: Value;
    children?: NodeData[];
    id?: Value;
    icon?: ReactNode;
};
type NodeItem = {
    data: NodeData;
    children: Value[];
    id: Value;
    parent: Value | null;
    open: boolean;
};
type NodeMap = Record<string, NodeItem>;
type TreeviewProps = {
    data: Array<NodeData>;
    onlyRead?: boolean;
    withIcons?: boolean;
    value?: EntityType[];
    onChange?: (value: EntityType[]) => void;
    classNames?: Partial<CustomClassNames>;
    iconsComponents?: IconComponents;
};
type CustomClassNames = {
    wrap: string;
    node: string;
    label: string;
    dropdown: string;
    checkbox: string;
    indeterminate: string;
};
type IconComponents = {
    parentIcon: ReactNode;
    childIcon: ReactNode;
};

export type { CustomClassNames, EntityType, IconComponents, NodeData, NodeItem, NodeMap, TreeviewProps, Value };
