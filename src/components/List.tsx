import { useState } from "react";

interface Props {
    items: string[];
    onDelete: (item: number) => void;
    onSelectItem: (item: string) => void;
    onEditItem: (index: number, newValue: string) => void;
}

const List = ({ items, onDelete, onSelectItem, onEditItem }: Props) => {
    const [selectedIdx, setSelectedIdx] = useState(-1);
    const [editValue, setEditValue] = useState("");

    const startEdit = (index: number, currentVal: string) => {
        setSelectedIdx(index);
        setEditValue(currentVal);
    };

    const saveEdit = (index: number) => {
        if (editValue.trim() !== "" && items[index] !== editValue.trim()) {
            onEditItem(index, editValue);
        }
        setEditValue(editValue.trim());
        setEditValue("");
        setSelectedIdx(-1);
    }

    return (
        <>
            {items.length === 0 && <p>No item found</p>}

            <ul className="list-group">
                {items.map((item, index) => (
                    <li
                        className="list-group-item d-flex justify-content-between align-items-center"
                        key={index}

                        onClick={() => {
                            setSelectedIdx(index);
                            onSelectItem(item);
                            startEdit(index, item)
                        }}
                    >
                        {selectedIdx == index ? <input
                            name="myInput"
                            value={editValue}
                            onChange={(e) => setEditValue(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    saveEdit(index);
                                }
                            }}
                        /> : item}

                        <button
                            type="button"
                            className="btn-close"
                            onClick={(e) => {
                                e.stopPropagation();
                                onDelete(index);
                            }}
                        ></button>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default List;
