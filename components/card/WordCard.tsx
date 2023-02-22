import React from 'react';
import {Badge, Image} from "antd";
import "./WordCard.style.scss";

type WordCardPropType = {}
const WordCard = (props: WordCardPropType) => {
  return (
      <Badge.Ribbon text="Verb" color="green">
        <div className={"word-card"}>
          <div className={"block horizontal"}>
            <div className={"memo-photo"}>
              <Image
                width={"100%"}
                height={"160px"}
                src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
              />
            </div>
            <div className={"main-content"}>
              <div className="word">BOOK</div>
              <div className="meaning">Đặt chổ</div>
              <div className="description">to arrange to have something at a certain time</div>
            </div>
    
          </div>
          <div className="footer green">
            <div className={"phrase"}><strong>*</strong> Book a table = đặt bàn</div>
            <div>He book a table at a sushi restaurant</div>
            <div>Anh ấy đặt bàn tại một nhà hàng sushi</div>
          </div>
        </div>
      </Badge.Ribbon>
  );
};

export default WordCard;
