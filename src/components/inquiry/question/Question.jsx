import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "./question.css";
import { useNavigate } from "react-router-dom";

const Question = () => {
  const navigate = useNavigate();
  return (
    <div className="container-fluid" style={{ width: "90%" }}>
      <div
        className="text-center"
        style={{
          marginTop: "80px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1
          className="title"
          style={{ marginRight: "auto", marginLeft: "auto" }}
        >
          よくあるご質問
        </h1>
      </div>
      <Accordion defaultActiveKey="0" style={{ marginTop: "30px" }}>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            パスワードを忘れた場合、どうすればいいですか？
          </Accordion.Header>
          <Accordion.Body>
            パスワードを忘れてしまった場合は、
            <span
              style={{ cursor: "pointer", color: "blue" }}
              onClick={() => navigate("/reset-password")}
            >
              こちら
            </span>
            から。
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            ユーザーネームを忘れた場合、どうしたらいいですか？
          </Accordion.Header>
          <Accordion.Body>
            ユーザーネームを忘れてしまった方は、恐れ入りますが、アカウントを作り直してください。
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <div>
        <p
          style={{ color: "blue", display: "flex", justifyContent: "flex-end" }}
        >
          質問は適宜追加していきます
        </p>
        <span
          className="bug"
          style={{
            marginLeft: "auto",
            cursor: "pointer",
            display: "flex",
            justifyContent: "flex-end",
            textDecoration: "underline",
          }}
          onClick={() => navigate("/inquiry")}
        >
          ※お問い合わせやご要望がある方・バグを見つけた方はこちら
        </span>
      </div>
    </div>
  );
};

export default Question;
