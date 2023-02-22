import React from 'react';
import {Badge, Col, Image, Row} from "antd";
import "./WordCard.style.scss";

type WordCardPropType = {}
const WordCard = (props: WordCardPropType) => {
  return (
    <div>
      <Badge.Ribbon text="Verb" color="green">
        <div className={"word-card"}>
          <Row gutter={[24, 12]}>
            <Col xs={8}>
              <Image
                width={"100%"}
                height={"160px"}
                src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
              />
            </Col>
            <Col xs={16}>
              <div className={"main-content"}>
                <div className="word">BOOK</div>
                <div className="meaning">Đặt chổ</div>
                <div className="description">to arrange to have something at a certain time</div>
              </div>
            </Col>
            
            <Col xs={24}>
              <div className="footer">
                <div className={"phrase"}><strong>*</strong> Book a table = đặt bàn</div>
                <p>He book a table at a sushi restaurant</p>
                <p>Anh ấy đặt bàn tại một nhà hàng sushi</p>
              </div>
            </Col>
          </Row>
        </div>
      </Badge.Ribbon>
    </div>
  );
};

export default WordCard;
