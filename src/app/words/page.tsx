'use client';
import React from 'react';
import WordCard from "@/components/card/WordCard";
import {Col, Row} from "antd";
import TabBar from "@/components/tab-bar/TabBar";
import {ROUTE_NAME} from "@/configuration/Application.config";
import {useQuery} from "react-query";
import {getWords} from "@/services/Words.service";
import {useRouter} from "next/navigation";
import {WordType} from "@/services/AppInterface";

export default function Page() {
  const router = useRouter()
  const {data: wordsResp, isLoading, error} = useQuery('words', getWords);
  const words = wordsResp?.data?.data || []
  return (
    <div className="page">
      <div className={"page-body"}>
        <Row gutter={[12, 12]}>
          {words.map((w: WordType) => {
            return (
              <Col key={w.id} xs={24} md={12}>
                <WordCard
                  wordData={w}
                  onClick={() => router.push(`/${ROUTE_NAME.WORDS}/${w.id}`)}
                />
              </Col>
            )
          })}
        
        </Row>
      </div>
  
      <TabBar active={ROUTE_NAME.WORDS}/>
    </div>
  )
}
