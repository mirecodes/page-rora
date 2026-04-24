import React from 'react';

export const Methodology: React.FC = () => {
  return (
    <section className="section">
      <div className="container is-max-desktop">
        <div className="columns is-centered">
          <div className="column is-full-width">
            {/* TODO: Replace with your section title */}
            <h2 className="title is-3 has-text-centered">Methodology / Approach</h2>
            <div className="content has-text-justified">
              {/* TODO: Replace with your section subtitle */}
              <h3 className="title is-4">Overview</h3>
              {/* TODO: Replace with your body paragraph */}
              <p>
                이곳에 연구 방법론의 개요를 설명하는 텍스트를 입력합니다. 컬럼을 나누지 않았기 때문에 텍스트가 컨테이너의 전체 폭을 여유 있게 사용하여 가독성이 높아집니다.
              </p>
              <p>
                제안하는 파이프라인의 핵심 아이디어나 알고리즘의 동작 과정을 이곳에 상세히 서술해 주세요.
              </p>
            </div>

            <div className="has-text-centered" style={{ marginTop: '2rem' }}>
              {/* TODO: Replace with your body image */}
              <img src="/static/images/method_overview.jpg" alt="Method Overview" width="100%" style={{ borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }} />

              <p className="is-size-6 has-text-grey" style={{ marginTop: '1rem' }}>
                {/* TODO: Replace with your image caption */}
                <strong>Figure 1.</strong> Overview of our proposed architecture. 논문의 캡션 텍스트를 여기에 적어주세요.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
