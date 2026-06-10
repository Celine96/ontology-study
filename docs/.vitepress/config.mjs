import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'ko-KR',
  title: "온톨로지 학습 교안",
  description: '크롤링+온톨로지로 지식그래프를 만드는 실습 중심 교안 (수연님 맞춤)',
  base: '/ontology-study/',
  themeConfig: {
    nav: [
      { text: '홈', link: '/' },
      { text: '시작하기', link: '/modules/m0-triple' },
      { text: '실전', link: '/modules/m5-build' },
      { text: '부록', link: '/appendix' },
    ],
    sidebar: [
      {
        text: '교안 소개',
        items: [
          { text: '시작하기', link: '/' },
        ]
      },
      {
        text: '기초: 온톨로지의 심장',
        items: [
          { text: 'M0. 멘탈모델 — 트리플', link: '/modules/m0-triple' },
          { text: 'M1. 클래스 & 인스턴스', link: '/modules/m1-class-instance' },
          { text: 'M2. 속성 & 관계', link: '/modules/m2-property-relation' },
        ]
      },
      {
        text: '심화: 살아 움직이는 지식',
        items: [
          { text: 'M3. 추론', link: '/modules/m3-reasoning' },
          { text: 'M4. 지식그래프 & 시각화', link: '/modules/m4-knowledge-graph' },
          { text: 'M5. 실전 — 내 온톨로지 만들기', link: '/modules/m5-build' },
        ]
      },
      {
        text: '부록',
        items: [
          { text: '표준·도구 & 진도표', link: '/appendix' },
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Celine96/ontology-study' }
    ],
    outline: {
      level: [2, 3],
      label: '목차'
    },
    search: {
      provider: 'local'
    },
    docFooter: {
      prev: '이전',
      next: '다음'
    }
  }
})
