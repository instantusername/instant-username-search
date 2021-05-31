import React from 'react';
import { Collapse } from 'antd';

import '../styles/FrequentQuestions.css';

export default function FrequentQuestions({ questions = [] }) {
  return (
    <div className="frequentQuestions-container">
      <div className="frequentQuestions-illustration mobile">
        <img src={require('../resources/faq.png')} alt="Frequent questions" />
      </div>
      <h2>Frequently asked questions</h2>
      <div className="frequentQuestions-body">
        <Collapse className="frequentQuestions-collapse" accordion bordered={false}>
          {questions.map((q, index) => (
            <Collapse.Panel header={q.question} key={`faq-${index + 1}`}>
              <p className="frequentQuestions-answer">{q.answer}</p>
            </Collapse.Panel>
          ))}
        </Collapse>
        <div className="frequentQuestions-illustration">
          <img src={require('../resources/faq.png')} alt="Frequent questions" />
        </div>
      </div>
      <div className="frequentQuestions-footer">
        <h3>Still have questions?</h3>
        <p>
          <a href="mailto:someone@yoursite.com?subject=I%20have%20a%20question">Mail</a> your
          question to us. We are happy to help!
        </p>
      </div>
    </div>
  );
}
