# 송보경 | AI Content Creator Portfolio

생성형 AI로 광고 영상을 만들고, 실제 메타 광고로 집행해 성과를 검증한 포트폴리오입니다.

**웹 포트폴리오 → https://urgr1111.github.io/bokyung-portfolio/**

| 영상 | 제작 툴 | 접근 |
|---|---|---|
| [캐릭터편 1차](https://youtube.com/shorts/HyQqhv2wuxw) | Google Flow/Veo | 정서적 접근 |
| [캐릭터편 2차 (최종 채택)](https://youtube.com/shorts/rYDwXGkZ_iY) | Higgsfield | 3초 훅 리메이크 |
| [코미디편](https://youtube.com/shorts/tndAloKpasc) | Google Flow/Veo | 이성적 접근 |

---

## 1. 프로젝트 개요 & 비즈니스 문제

**달칩샌드 일본 시장 진출 프로젝트** · (주)네이처오다 · KITA 글로벌마케팅마스터 기업 매칭 프로젝트 · 최우수상(2위)

'달칩샌드'는 기름에 튀기지 않고 구워 만드는 국내산 유기농 쌀과자입니다. 일본으로 판로를 넓히는 것이 이 프로젝트의 목적이었습니다.

문제는 **일본 쌀과자 시장의 77.5%가 간장맛에 편중**되어 있다는 점이었습니다. 단맛 쌀과자는 현지 소비자에게 낯선 범주라, "맛있다"만으로는 구매 이유가 되지 않았습니다. 그래서 '맛과 건강'을 함께 내세우는 포지셔닝 공백을 공략 지점으로 잡고, 어떤 메시지가 실제로 클릭을 만드는지를 광고 데이터로 검증하는 것을 과제로 설정했습니다.

- **팀:** 4인 ('막내온탑')
- **본인 기여도:** 프로젝트 전체 40% / AI 광고 영상 제작 파트 100%
- **담당:** AI 광고 영상 제작 · 메타 광고 집행 · 프로모션 기획 · 링크드인 B2B 콘텐츠 운영 · 일본어 랜딩페이지 제작 참여

> 정규 고용이 아닌 KITA 과정 연계 기업 매칭 프로젝트 참여이며, 수행 범위는 기획·광고·홍보·데이터 분석입니다. 실제 수출·납품·판매는 수행하지 않았습니다.

---

## 2. 데이터 소스 & 규모

| 구분 | 내용 | 규모 |
|---|---|---|
| 메타 광고 성과 | 노출·클릭·CTR·CPC·지출 (광고 관리자) | 캠페인 전체 노출 125,590 / 클릭 3,652 / 지출 ₩469,201 (2주) |
| 아이엄마(T1) 광고 세트 | 본인 제작 소재 4편의 링크 클릭 기준 성과 | 노출 66,856 / 링크 클릭 2,339 / 지출 ₩338,026 |
| 소비자 인터뷰 | 재한 일본인 유학생 심층 인터뷰 | 3명 |
| 기업 인터뷰 | 네이처오다 대표 미팅 (성분·판매 현황·광고 표현 범위 확인) | 1회 |
| 시장 데이터 | 일본 쌀과자 시장 구성, 구매 결정권, 캐릭터 과자 구매층 | 간장맛 77.5% / 식품 구매 결정 91% 여성 / 캐릭터 과자 구매자의 69.3%가 3040 여성 |

---

## 3. 분석 방법 & 기술 스택

**분석**
- **타깃 세분화:** 구매 결정권 데이터(91% 여성)와 국내 30-40대 여성 결제 비중(63.9%)을 근거로 핵심 타깃을 '3040 아이 엄마'로 좁힘
- **A/B 테스트:** 같은 제품을 감성(2D 캐릭터 애니메이션) / 이성(실사 코미디) 두 갈래로 제작해 소재별 CTR·CPC 비교
- **지면별 효율 분석:** 페이스북·인스타그램·스레드 지면별 CPC와 반응률 비교로 예산 배분 판단
- **주차별 효율 추적:** 1주차 결과로 소재를 좁히고 2주차 예산을 재배분

**제작**
- 씬 단위로 이미지를 먼저 생성한 뒤 영상으로 변환하는 파이프라인 구축
- 캐릭터 일관성 확보: 5방향 턴어라운드 시트 + 3D 모델로 시각 기준 고정, `Dalchibi is fixed and generated` 등 필수 디테일을 Fixed Prompt로 고정, 동일 씬 수십 차례 재생성
- 캐릭터 목소리·효과음 직접 생성, 컷 편집과 더빙 타이밍까지 직접 완성

---

## 4. 핵심 발견 사항

**캠페인 전체 기준**

- **1주차 → 2주차:** 지출 +74% 대비 클릭 +87%, CTR +20%, CPC -7% — 예산 증액분 이상으로 효율 개선
- **지면별:** 페이스북 피드·릴스가 가장 저렴(-24%), 인스타 릴스·스토리는 1.7~2.7배 비쌈, 스레드는 노출의 절반을 가져가지만 반응률은 평균의 1/4

**T1(아이엄마 타깃) · 본인 제작 소재 기준**

| 지표 | 값 | 비교 |
|---|---|---|
| 노출 | 66,856 | 캠페인 전체의 53% |
| 링크 클릭 | 2,339 | 캠페인 전체 링크 클릭의 74% |
| 링크 CTR | 3.50% | 캠페인 평균 2.51%의 **1.4배** |
| 링크 CPC | ₩145 | 캠페인 평균 ₩149 대비 **-3%** |

- **1주차 A/B 테스트:** 코미디 소재의 클릭 단가가 캐릭터 소재보다 **40% 더 비쌌음** → 이후 캐릭터편에 집중
- **캐릭터 일관성:** 턴어라운드 시트를 레퍼런스로 넣어도 앵글이 바뀌면 앞치마 디테일이 사라지는 문제가 반복 → Fixed Prompt로 필수 요소를 고정하고 반복 생성해 해결 ([Before/After 비교](https://urgr1111.github.io/bokyung-portfolio/#projects))

---

## 5. 비즈니스 제안 & 예상 임팩트

관측된 데이터에서 도출한 제안입니다. 실제 집행 결과가 없는 항목은 예상 수치 대신 근거가 되는 관측값을 함께 적었습니다.

| 제안 | 근거 | 기대 효과 |
|---|---|---|
| 캐릭터('달치비') 소재 중심으로 예산 집중 | 코미디 대비 CPC 40% 저렴, T1 세트 CTR이 캠페인 평균의 1.4배 | 동일 예산에서 더 많은 링크 클릭 확보 |
| 페이스북 피드·릴스 비중 확대, 스레드 축소 | 페북 피드·릴스 CPC -24%, 스레드는 노출의 절반을 쓰고 반응률은 평균의 1/4 | 낭비되는 노출 감소 |
| 3040 아이 엄마 타깃 유지·심화 | 식품 구매 결정 91%가 여성, 캐릭터 과자 구매자의 69.3%가 3040 여성 | 타깃 적합도 유지 |
| **전환 트래킹 도입** | 이번 집행에서는 링크 클릭까지만 측정 가능 | CPC 최적화에서 CPA·ROAS 최적화로 기준 이동 |

**Lesson Learned** — 외부 권한 문제로 최종 구매 전환율(CVR)까지 트래킹하지 못한 점은 아쉬웠지만, 주어진 상황에서 CTR과 CPC 데이터를 최대한 예민하게 분석하고 소재를 최적화(A/B 테스트)하는 실전 감각을 익힐 수 있었습니다.

---

## 6. 기술 스택

**생성형 AI · 영상 제작**

![Google Flow/Veo](https://img.shields.io/badge/Google%20Flow%20%7C%20Veo-4285F4?style=flat-square&logo=google&logoColor=white)
![Higgsfield](https://img.shields.io/badge/Higgsfield-6E56CF?style=flat-square)
![Adobe Firefly](https://img.shields.io/badge/Adobe%20Firefly-FF3B30?style=flat-square&logo=adobe&logoColor=white)
![Fish Audio](https://img.shields.io/badge/Fish%20Audio-00B5AD?style=flat-square)
![Prompt Engineering](https://img.shields.io/badge/Prompt%20Engineering-111827?style=flat-square)

**영상 · 콘텐츠 편집**

![CapCut](https://img.shields.io/badge/CapCut-000000?style=flat-square)
![VITA](https://img.shields.io/badge/VITA-FF6B6B?style=flat-square)
![Adobe](https://img.shields.io/badge/Adobe-FF0000?style=flat-square&logo=adobe&logoColor=white)
![Canva](https://img.shields.io/badge/Canva-00C4CC?style=flat-square&logo=canva&logoColor=white)
![미리캔버스](https://img.shields.io/badge/%EB%AF%B8%EB%A6%AC%EC%BA%94%EB%B2%84%EC%8A%A4-0F7BFF?style=flat-square)
![망고보드](https://img.shields.io/badge/%EB%A7%9D%EA%B3%A0%EB%B3%B4%EB%93%9C-FFA000?style=flat-square)

**광고 · 데이터**

![Meta Ads](https://img.shields.io/badge/Meta%20Ads%20Manager-0866FF?style=flat-square&logo=meta&logoColor=white)
![Tableau](https://img.shields.io/badge/Tableau-E97627?style=flat-square&logo=tableau&logoColor=white)
![LinkedIn](https://img.shields.io/badge/LinkedIn%20B2B-0A66C2?style=flat-square&logo=linkedin&logoColor=white)

**이 사이트**

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222222?style=flat-square&logo=githubpages&logoColor=white)

---

## Contact

**송보경 (Bokyung Song)**

[khodu0616@gmail.com](mailto:khodu0616@gmail.com) · [YouTube](https://www.youtube.com/@bokyung30) · [LinkedIn](https://www.linkedin.com/in/jay-bokyung-song-457332276/) · [Blog](https://blog.naver.com/urgr0226) · [Instagram](https://instagram.com/s.bokyung98)
