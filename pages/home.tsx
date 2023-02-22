import React from 'react';
import WordCard from "@/components/card/WordCard";
import {Col, Row} from "antd";

export default function Home() {
  return (
    <div className="page">
      <Row gutter={[12, 12]}>
        <Col xs={24} lg={12}>
          <WordCard/>
        </Col>
        <Col xs={24} lg={12}>
          <WordCard/>
        </Col>
      </Row>
    </div>
  )
}
