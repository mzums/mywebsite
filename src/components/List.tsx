interface Props {
    items: string[];
    onDelete: (item: string) => void;
}

const List = ({ items, onDelete }: Props) => {
    return (
        <>
            {items.length === 0 && <p>No item found</p>}

            <ul className="list-group">
                {items.map((item, index) => (
                    <li
                        className="list-group-item d-flex justify-content-between align-items-center"
                        key={index}
                    >
                        {item}

                        <button
                            type="button"
                            className="btn-close"
                            onClick={() => onDelete(item)}
                        ></button>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default List;