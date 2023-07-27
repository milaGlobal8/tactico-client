import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Alert from "@mui/material/Alert";
import Form from "react-bootstrap/Form";

const Mailer = () => {
  const [isSent, setIsSent] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    setIsSent(true);
  };

  return (
    <div className="container-fluid" style={{ width: "100%", height: "100vh" }}>
      <div className="container-fluid" style={{ overflowY: "hidden" }}>
        <Form
          style={{
            marginTop: "100px",
            border: "1px solid lightgray",
            width: "80%",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            marginRight: "auto",
            marginLeft: "auto",
            backgroundColor: "#E2ECF2",
            borderRadius: "10px",
          }}
          ref={form}
          onSubmit={sendEmail}
        >
          <h1 style={{ marginTop: "25px" }}>お問い合わせフォーム</h1>
          {isSent ? (
            <Alert severity="success" sx={{ marginX: 3, marginTop: 2 }}>
              送信に成功しました！
            </Alert>
          ) : (
            <></>
          )}
          <Form.Group
            className="mb-3"
            controlId="exampleForm.ControlInput1"
            style={{ width: "80%" }}
          >
            <Form.Label>メールアドレス</Form.Label>
            <Form.Control
              type="email"
              placeholder="name@example.com"
              name="user_email"
            />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="exampleForm.ControlTextarea1"
            style={{ width: "80%" }}
          >
            <Form.Label>内容</Form.Label>
            <Form.Control as="textarea" name="message" rows={12} />
          </Form.Group>
          <input
            type="submit"
            value="報告する"
            className="form-control btn btn-sm"
            id="report_btn"
            style={{
              marginTop: "20px",
              backgroundColor: "#D08FDE",
              color: "white",
              width: "70%",
              display: "flex",
              justifyContent: "center",
              marginRight: "auto",
              marginLeft: "auto",
              marginBottom: "30px",
            }}
          />
        </Form>
      </div>
    </div>
  );
};

export default Mailer;
