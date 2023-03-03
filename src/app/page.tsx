'use client';
import React from "react";
import TabBar from "@/components/tab-bar/TabBar";
import {Col, Row} from "antd";
import WordCard from "@/components/card/WordCard";
import {ROUTE_NAME} from "@/configuration/Application.config";

export default function Home() {
  const demo = {
    "id": "strategy",
    "word": "strategy",
    "meaning": "Chiến lược",
    "phrases": [
      {
        "id": "01",
        "phrase": "strategy {{for}}",
        "suggestions": [
          "for",
          "with",
          "to"
        ]
      }
    ],
    "description": "",
    "sentences": [
      {
        "id": "1",
        "sentence": "Must have a {{strategy}} for it.",
        "suggestions": [
          "strategy",
          "plan",
          "work"
        ]
      }
    ],
    "question": [
      {
        "id": "1",
        "sentence": "Must have a {{strategy}} for it.",
        "suggestions": [
          "strategy",
          "plan",
          "work"
        ]
      },
      {
        "id": "2",
        "sentence": "Please help me, find out a {{strategy}} for it.",
        "suggestions": [
          "strategy",
          "plan",
          "work"
        ]
      }
    ],
    "status": 0,
    "field": [
      "work"
    ],
    "type": "noun",
    "list_of_synonym": [],
    "feedbacks": [
      {
        "id": "f1",
        "title": "",
        "content": ""
      }
    ],
    "image": [
      "https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
    ],
    "url": ""
  }
  return (
    <main className="page">
      <div className={"page-body"}>
        <Row gutter={[12, 12]}>
          
          <Col xs={24} md={12}>
            <WordCard wordData={demo}/>
          </Col>
          <Col xs={24} md={12}>
            <WordCard wordData={demo}/>
          </Col>
        </Row>
      </div>
      
      <TabBar active={ROUTE_NAME.HOME}/>
    </main>
  )
}
