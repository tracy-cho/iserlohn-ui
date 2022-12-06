import React, {Children, ReactNode, useState} from "react";
import classNames from "classnames/bind";
import Draggable from ".";
import styles from "./Container.module.scss";

const cx = classNames.bind(styles);

export type ContainerProps = {
    children: ReactNode
};

function Container({children}: ContainerProps) {

    const [currentIdx, setCurrentIdx] = useState<number>(-1);

    const [list, setList] = useState<{ idx: number, width: number, height: number, backgroundColor: string, isDrag: boolean, isOver: boolean }[]>([
        {idx: 1, width: 100, height: 100, backgroundColor: "red", isDrag: false, isOver: false},
        {idx: 2, width: 100, height: 100, backgroundColor: "blue", isDrag: false, isOver: false},
        {idx: 3, width: 100, height: 100, backgroundColor: "green", isDrag: false, isOver: false},
        {idx: 4, width: 100, height: 100, backgroundColor: "cyan", isDrag: false, isOver: false},
        {idx: 5, width: 100, height: 100, backgroundColor: "magenta", isDrag: false, isOver: false},
    ])

    return (
        <div
            className={styles.Container}
        >
            {list.map((item, index) => (
                <Draggable.Item
                    className={cx("Item", item.isDrag ? "isDrag" : "", item.isOver ? "isOver" : "")}
                    key={item.backgroundColor}
                    style={{
                        ...item,
                        transform: item.isDrag ? `translate(${item.width * (currentIdx - index)}px, 0)` : ""
                    }}
                    onDragStart={() => {
                        setList(prev => prev.map(_item => item.idx === _item.idx ? ({
                            ..._item,
                            isDrag: true
                        }) : _item));
                        setCurrentIdx(index)
                    }}
                    onDragEnd={() => {
                        setList(prev => prev.map(_item => item.idx === _item.idx ? ({
                            ..._item,
                            isDrag: false
                        }) : _item));
                        setCurrentIdx(-1)
                    }}
                    onDragOver={() => {
                        // change order
                        if (currentIdx === index) {
                            return;
                        }

                        const _list = [...list];
                        const [removed] = _list.splice(currentIdx, 1);

                        _list.splice(index, 0, removed);
                        setList(_list);
                        setCurrentIdx(index);
                    }}
                >
                    {item.backgroundColor}
                </Draggable.Item>
            ))}
        </div>
    );
}

export {Container};