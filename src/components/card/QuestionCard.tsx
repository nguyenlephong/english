'use client'
import React, {useRef} from 'react';
import {QuestionType} from "@/services/AppInterface";
import {Button, Space, Swiper} from 'antd-mobile'
import {SwiperRef} from 'antd-mobile/es/components/swiper'
import {extractWordFromSentence, hideWordInSentence, removeBracketCharacter} from "@/shared/utils";
import {useSetState} from "ahooks";
import classNames from "classnames";

type QuestionCardPropType = {
  questions: QuestionType[]
}
type QuestionCardState = {
  [sentenceId: string]: {
    answer: null | string;
    correct: null | boolean;
  }
}
const QuestionCard = (props: QuestionCardPropType) => {
  const {questions} = props
  const [state, setState] = useSetState<QuestionCardState>({})
  const ref = useRef<SwiperRef>(null)
  if (questions?.length === 0) return <React.Fragment/>
  return (
    <div className={"question-card-container"}>
      <Space direction='vertical' block>
        <Swiper allowTouchMove={false} ref={ref} loop>
          {questions.map((q) => {
            const result = extractWordFromSentence(q.sentence)
            return (
              <Swiper.Item key={q.id}>
                <div className={"word-learning-container"}>
                  <h2 className={classNames({
                    "question-text": true,
                    "correct": state.correct
                  })}>{state[q.id]?.correct ? removeBracketCharacter(q.sentence) : hideWordInSentence(q.sentence)}</h2>
                  {state[q.id]?.correct === false && (
                    <h2 className={"question-check"}>Ấy chà chưa thuộc bài rồi nha! Nhanh trí chọn lại mau mau nè.</h2>
                  )}
                  <div className={"answer-container"}>
                    {q.suggestions?.map((w: string) => {
                      return (
                        <div
                          key={w}
                          className={classNames({
                            'word-to-answer': true,
                            'active': w === state[q.id]?.answer,
                          })}
                          onClick={() => setState({[q.id]: {answer: w, correct: result.includes(w)}})}
                        >
                          {w}
                        </div>
                      )
                    })}
                  </div>
                </div>
              </Swiper.Item>
            )
          })}
        </Swiper>
        <Space justify={"between"} style={{width: "100%"}}>
          <Button
            onClick={() => {
              ref.current?.swipePrev()
            }}
          >
            Back
          </Button>
          <Button
            onClick={() => {
              ref.current?.swipeNext();
            }}
          >
            Next
          </Button>
        </Space>
      </Space>
    </div>
  );
};

export default QuestionCard;
