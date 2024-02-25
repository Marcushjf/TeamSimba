import { Fragment } from "react";
import chatbot_logo from "../assets/ReMind.png";
import qr from "../assets/qr.png";

const teleLink = () => {
  const teleUrl = 'https://t.me/testing2402_bot';
  window.open(teleUrl, '_blank');
};

const ChatBot = () => {
  return (
    <Fragment>
      <div className="position-relative">
        <img src={qr} alt="Chat" className="position-absolute end-0 top-0 mt-5 rounded-5" style={{ width: '20%', height: 'auto' }} />
      </div>

      <div className="d-flex h-50 justify-content-center pt-5">
        <img
          src={chatbot_logo}
          style={{ objectFit: "cover", height: "30vh", width: "30vh" }}
          className="img-fluid"
          alt="..."
        ></img>
      </div>
      <div>
        <h1 className="text-center pt-5" style={{ fontFamily: "Roboto" }}>
          Feeling Lonely? I'm always here for you!
        </h1>
      </div>
      <div>
        <h2 className="text-center pt-3" style={{ fontFamily: "Roboto" }}>
          Start chatting with me on Telegram
        </h2>
      </div>
      <div className="d-grid gap-2 col-3 mx-auto pt-5">
        <button
          className="btn btn-info text-light"
          type="button"
          style={{
            height: "60px",
            fontFamily: "Times New Roman",
            fontSize: "30px",
          }}
          onClick={teleLink}
        >
          Here is my telechat!
        </button>
      </div>
    </Fragment>
  );
};

export default ChatBot;
