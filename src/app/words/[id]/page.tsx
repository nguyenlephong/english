'use client';
import React from 'react';
import WordCard from "@/components/card/WordCard";
import {Col, Row} from "antd";
import TabBar from "@/components/tab-bar/TabBar";
import {ROUTE_NAME} from "@/configuration/Application.config";
import {useQuery} from "react-query";
import {getWordById} from "@/services/Words.service";

type WordType = {
  [key: string]: any;
}
export default function Page({params}: any) {
  const {data: dataWordDetail} = useQuery('word_by_id', () => getWordById(params.id));
  const word = dataWordDetail?.data?.data || []
  
  return (
    <div className="page">
      <div className={"page-body"}>
        <Row gutter={[12, 12]}>
          
          <Col key={word.id} xs={24}>
            <WordCard wordData={word}/>
          </Col>
        
        
        </Row>
      </div>
      
      <TabBar active={ROUTE_NAME.WORDS}/>
    </div>
  )
}
