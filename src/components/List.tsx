import { useState } from "react";

interface Props {
    items: string[];
    onDelete: (index: number) => void;
    onSelectItem: (item: string) => void;
    onEditItem: (index: number, newValue: string) => void;
}

const List = ({ items, onDelete, onSelectItem, onEditItem }: Props) => {
    const [editingIndex, setEditingIndex] = useState<number | null>(null);
    const [editValue, setEditValue] = useState("");

    const startEdit = (index: number, currentValue: string) => {
        setEditingIndex(index);
        setEditValue(currentValue);
    };

    const saveEdit = (index: number) => {
        if (editValue.trim() !== "" && editValue !== items[index]) {
            onEditItem(index, editValue);
        }
        setEditingIndex(null);
        setEditValue("");
    };

    return (
        <>
            {items.length === 0 && <p>No item found</p>}
            <ul className="list-group">
                {items.map((item, index) => (
                    <li
                        key={index}
                        className="list-group-item d-flex justify-content-between align-items-center"
                        onClick={() => {
                            if (editingIndex !== index) {
                                startEdit(index, item);
                                onSelectItem(item);
                            }
                        }}
                    >
                        {editingIndex === index ? (
                            <input
                                type="text"
                                value={editValue}
                                onChange={(e) => setEditValue(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") {
                                        saveEdit(index);
                                    }
                                }}
                                onBlur={() => saveEdit(index)}
                                autoFocus
                            />
                        ) : (
                            <span>{item}</span>
                        )}
                        <button
                            type="button"
                            className="btn-close"
                            onClick={(e) => {
                                e.stopPropagation();
                                onDelete(index);
                            }}
                        />
                    </li>
                ))}
            </ul>
        </>
    );
};

export default List;