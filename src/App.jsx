import React, { useState } from "react";

export default function App() {
  const name = "Duong Phan";
  const isLogin = false;
  let date = new Date().toLocaleDateString();
  const [follow, setFollow] = useState("Follow me");
  function handleFollow (){
    setFollow(!follow);
  }
  const [count, setCount] = useState(0);

  const products = [
    { id: 1, name: "Laptop", price: 2000, stock: true },
    { id: 2, name: "Mouse", price: 20, stock: false }
  ];

  const students = [
    { id: 1, name: "An", age: 20, score: 9 },
    { id: 2, name: "Bình", age: 21, score: 7 },
    { id: 3, name: "Cúc", age: 19, score: 4.5 }
  ];

  const classify = (score) => {
    if (score >= 8) return "Giỏi";
    if (score >= 5) return "Khá";
    return "Trung Bình";
  };

  return (
    <div style={{ padding: 20, fontFamily: 'Arial, sans-serif' }}>
      <div>App</div>
      <p> Xin chao {name} </p>
      <p>{isLogin ? "hello" : "Hay dang nhap" }</p>
      <p>lich trinh ngay {date}</p>
      <ul>
        <li> ngu </li>
        <li> an </li>
        <li> hoc </li>
        <li> choi</li>
      </ul>
      <button onClick={handleFollow}>
        {follow ? "Follow me" : "Following"}
      </button>
      <p>{count}</p>
      <button onClick={() =>setCount(count+1) }>+</button>
      <button onClick={() =>setCount(count-1) }>-</button>
      <button onClick={() =>setCount(0) }>reset</button>

      <h2 style={{ marginTop: 24 }}>Sản phẩm</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: 20 }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ccc', padding: 8 }}>ID</th>
            <th style={{ border: '1px solid #ccc', padding: 8 }}>Tên</th>
            <th style={{ border: '1px solid #ccc', padding: 8 }}>Giá</th>
            <th style={{ border: '1px solid #ccc', padding: 8 }}>Tình trạng</th>
          </tr>
        </thead>
        <tbody>
          {products.map(p => (
            <tr key={p.id}>
              <td style={{ border: '1px solid #ccc', padding: 8 }}>{p.id}</td>
              <td style={{ border: '1px solid #ccc', padding: 8 }}>{p.name}</td>
              <td style={{ border: '1px solid #ccc', padding: 8 }}>{p.price}</td>
              <td style={{ border: '1px solid #ccc', padding: 8, color: p.stock ? 'green' : 'red' }}>
                {p.stock ? 'Còn hàng' : 'Hết hàng'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Sinh viên</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ccc', padding: 8 }}>ID</th>
            <th style={{ border: '1px solid #ccc', padding: 8 }}>Tên</th>
            <th style={{ border: '1px solid #ccc', padding: 8 }}>Tuổi</th>
            <th style={{ border: '1px solid #ccc', padding: 8 }}>Điểm</th>
            <th style={{ border: '1px solid #ccc', padding: 8 }}>Kết quả</th>
          </tr>
        </thead>
        <tbody>
          {students.map(s => (
            <tr key={s.id}>
              <td style={{ border: '1px solid #ccc', padding: 8 }}>{s.id}</td>
              <td style={{ border: '1px solid #ccc', padding: 8 }}>{s.name}</td>
              <td style={{ border: '1px solid #ccc', padding: 8 }}>{s.age}</td>
              <td style={{ border: '1px solid #ccc', padding: 8 }}>{s.score}</td>
              <td style={{ border: '1px solid #ccc', padding: 8 }}>{classify(s.score)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}