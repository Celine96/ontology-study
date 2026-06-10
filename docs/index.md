---
layout: home

hero:
  name: "온톨로지 학습 교안"
  text: "지식그래프를 손으로 만들며 배우기"
  tagline: 트리플 하나에서 시작해, 서초 AI 페스타 → 부동산 온톨로지까지. 끝나면 나만의 일일 큐레이션 파이프라인이 완성됩니다.
  actions:
    - theme: brand
      text: M0부터 시작하기
      link: /modules/m0-triple
    - theme: alt
      text: 부록 & 진도표
      link: /appendix

features:
  - icon: "🧩"
    title: "M0. 멘탈모델 — 트리플"
    details: "모든 지식을 주어-서술어-목적어로 쪼개기. 온톨로지의 심장."
    link: /modules/m0-triple
  - icon: "🗂️"
    title: "M1. 클래스 & 인스턴스"
    details: "세상을 '종류'로 나누기. schema.json ↔ instances.json"
    link: /modules/m1-class-instance
  - icon: "🔗"
    title: "M2. 속성 & 관계"
    details: "개체를 잇기. operates / hostsAt / partOfSeries"
    link: /modules/m2-property-relation
  - icon: "🧠"
    title: "M3. 추론"
    details: "적지 않은 사실을 컴퓨터가 만들어낸다. 신뢰도 점수까지."
    link: /modules/m3-reasoning
  - icon: "🌐"
    title: "M4. 지식그래프 & 시각화"
    details: "KG 스냅샷, 스키마 자동 진화, 그리고 온토에어 연결점."
    link: /modules/m4-knowledge-graph
  - icon: "🚀"
    title: "M5. 실전 — 내 온톨로지 만들기"
    details: "onto-osint fork → 서초 AI 페스타 → 부동산으로 확장."
    link: /modules/m5-build
---

## 이 교안 사용법

책처럼 추상적으로가 아니라, **손으로 익혀서 실제로 쓰는** 것을 목표로 합니다.

- **[개념]** → 핵심만 짧게 이해하는 파트
- **[레포에서 볼 곳]** → `onto-osint` 레포에서 실물로 확인
- **[실습]** → 내 도메인(서초 AI 페스타 / 부동산)으로 손으로 옮겨보기
- **[완료 체크]** → 다음으로 넘어가도 되는지 확인

> **실습실(lab):** `tykimos/onto-osint-yuseong-event` — 크롤링+온톨로지로 지역 이벤트 일일 큐레이션 리포트를 만드는 레포
> **실전 도메인:** 서초 AI 페스타(10/17) → 부동산 온톨로지 → 온토에어
> **권장 페이스:** 1주 1모듈. 9월 전 M5 완성.

**읽기만 하지 말고, 매 모듈 실습을 꼭 완성하세요.** 그게 수업입니다.
