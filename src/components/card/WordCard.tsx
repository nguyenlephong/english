'use client';
import React from 'react';
import {Badge, Button, Image, Space} from "antd";
import "./WordCard.style.scss";
import {PhraseType, SentenceType, WordType} from "@/services/AppInterface";
import {removeBracketCharacter} from "@/shared/utils";
import {Lightbulb, Student} from "phosphor-react";

type WordCardPropType = {
  wordData: WordType;
  onClick?: () => void;
}
const WordCard = (props: WordCardPropType) => {
  const {wordData, onClick} = props;
  const {word, meaning, description, sentences} = wordData;
  if (!wordData) return <React.Fragment/>
  return (
    <Badge.Ribbon text="Verb" color="green">
      <div className={"word-card"} onClick={onClick}>
        <div className={"block horizontal"}>
          <div className={"meme-photo"}>
            <Image
              width={"100%"}
              height={"160px"}
              src={wordData.image?.[0]}
            />
          </div>
          <div className={"main-content"}>
            <div className="word">{word}</div>
            <div className="meaning">{meaning}</div>
            <div className="description">{description}</div>
          </div>
        
        </div>
        <div className="footer green">
          {
            wordData.phrases?.map((p: PhraseType) => {
              return (
                <div
                  key={p.id}
                  className={"phrase"}
                >
                  <strong>*</strong> {removeBracketCharacter(p.phrase)}
                </div>
              )
            })
          }
          {sentences?.map((s: SentenceType) => {
            return (
              <div key={s.id} title={s.sentence}>
                {removeBracketCharacter(s.sentence)}
              </div>
            )
          })}
        </div>
        <div className={"action-bar"}>
          <Space wrap={true} size={12}>
            <Button
              icon={<Lightbulb size={16}/>}
              size={"large"}
              type="primary"
              shape="circle">
            </Button>
            <Button
              icon={<Student size={16}/>}
              size={"large"}
              type="primary" shape="circle">
            </Button>
    
          </Space>
  
        </div>
      </div>

    </Badge.Ribbon>
  );
};

export default WordCard;
