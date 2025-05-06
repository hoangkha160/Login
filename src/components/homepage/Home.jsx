import React, { useState } from "react";
import "./Home.scss";

const Home = () => {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const handleAddOrUpdate = () => {
    if (editIndex !== null) {
      // Sửa
      const updatedItems = items.map((item, index) =>
        index === editIndex ? input : item
      );
      setItems(updatedItems);
      setEditIndex(null);
    } else {
      // Thêm
      setItems([...items, input]);
    }
    setInput("");
  };

  const handleEdit = (index) => {
    setInput(items[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  return (
    <div className="container">
      <h1>Quản lý danh sách</h1>
      <div className="input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <div className="submit">
        {" "}
        <button onClick={handleAddOrUpdate}>
          {editIndex !== null ? "Cập nhật" : "Thêm"}
        </button>
      </div>
      <div className="button">
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              {item}
              <button onClick={() => handleEdit(index)}>Sửa</button>
              <button onClick={() => handleDelete(index)}>Xóa</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
