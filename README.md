# 송보경 | AI Content Creator Portfolio

생성형 AI로 광고 영상을 만들고, 실제 메타 광고로 집행해 성과를 검증한 포트폴리오입니다.

**웹 포트폴리오 → https://urgr1111.github.io/bokyung-portfolio/**

| 영상 | 제작 툴 | 접근 |
|---|---|---|
| [캐릭터편 1차 (최종 채택)](https://youtube.com/shorts/HyQqhv2wuxw) | Google Flow/Veo | 정서적 접근 · 1주차 코미디편을 이기고 2주차에도 유지 |
| [캐릭터편 2차 (데이터 보완판)](https://youtube.com/shorts/rYDwXGkZ_iY) | Higgsfield | 이탈 시점·시청 연령을 반영해 제품 소개를 앞당긴 버전 |
| [코미디편](https://youtube.com/shorts/tndAloKpasc) | Google Flow/Veo | 이성적 접근 |

---

## 1. 프로젝트 개요 & 비즈니스 문제

**달칩샌드 일본 시장 진출 프로젝트** · (주)네이처오다 · 제1기 KITA 글로벌마케팅마스터 마케팅 프로젝트 최우수상

'달칩샌드'는 기름에 튀기지 않고 구워 만드는 국내산 유기농 쌀과자입니다. 일본으로 판로를 넓히는 것이 이 프로젝트의 목적이었습니다.

문제는 **일본 쌀과자 시장의 77.5%가 간장맛에 편중**되어 있다는 점이었습니다. 단맛 쌀과자는 현지 소비자에게 낯선 범주라, "맛있다"만으로는 구매 이유가 되지 않았습니다. 그래서 '맛과 건강'을 함께 내세우는 포지셔닝 공백을 공략 지점으로 잡고, 어떤 메시지가 실제로 클릭을 만드는지를 광고 데이터로 검증하는 것을 과제로 설정했습니다.

- **팀:** 4인 ('막내온탑')
- **본인 기여도:** 프로젝트 전체 40% / 아이엄마(T1) 타깃 광고 소재 제작 100%
- **담당:** AI 광고 영상 제작 · 메타 광고 집행 · 프로모션 기획 · 링크드인 B2B 콘텐츠 운영 · 일본어 랜딩페이지 제작 참여

> 정규 고용이 아닌 KITA 과정 연계 기업 매칭 프로젝트 참여이며, 수행 범위는 기획·광고·홍보·데이터 분석입니다. 실제 수출·납품·판매는 수행하지 않았습니다.

---

## 2. 데이터 소스 & 규모

| 구분 | 내용 | 규모 |
|---|---|---|
| 메타 광고 성과 | 노출·클릭·CTR·CPC·지출 (광고 관리자) | 캠페인 전체 노출 125,590 / 링크 클릭 3,149 (전체 클릭 3,652) / 지출 ₩469,201 (2주) |
| 원본 내보내기 데이터 | 광고관리자 Raw Data Report를 Python(pandas)으로 재집계해 모든 수치 검증 | 일·성별·연령·광고별 691행 × 57열 / 2주차 지면·플랫폼별 237행 |
| 아이엄마(T1) 광고 세트 | 본인 제작 소재 4편의 링크 클릭 기준 성과 | 노출 66,856 / 링크 클릭 2,339 / 지출 ₩338,026 |
| 소비자 인터뷰 | 재한 일본인 유학생 심층 인터뷰 | 3명 |
| 기업 인터뷰 | 네이처오다 대표 미팅 (성분·판매 현황·광고 표현 범위 확인) | 1회 |
| 시장 데이터 | 일본 쌀과자 시장 구성, 구매 결정권, 캐릭터 과자 구매층 | 간장맛 77.5% / 식품 구매 결정 91% 여성 / 캐릭터 과자 구매자의 69.3%가 3040 여성 |

---

## 3. 분석 방법 & 기술 스택

**분석**
- **타깃 세분화:** 구매 결정권 데이터(91% 여성)와 국내 30-40대 여성 결제 비중(63.9%)을 근거로 핵심 타깃을 '3040 아이 엄마'로 좁힘
- **소재 비교 테스트:** 같은 제품을 감성(2D 캐릭터 애니메이션) / 이성(실사 코미디) 두 갈래로 제작해 소재별 CTR·CPC 비교. 메타가 노출을 자동 배분해 무작위 A/B 테스트는 아니므로, CTR 차이는 두 비율 z검정으로 확인
- **성별·연령·지면 분석:** 원본 엑셀을 성별·연령·지면별로 다시 집계해 누가, 어디서 클릭했는지 확인
- **주차별 효율 추적:** 1주차 결과로 소재를 좁히고 2주차 광고 세트 예산을 재배분

**제작**
- 씬 단위로 이미지를 먼저 생성한 뒤 영상으로 변환하는 파이프라인 구축
- 캐릭터 일관성 확보: 5방향 턴어라운드 시트 + 3D 모델로 시각 기준 고정, `Dalchibi is fixed and generated` 등 필수 디테일을 Fixed Prompt로 고정, 동일 씬 수십 차례 재생성
- 캐릭터 목소리·효과음 직접 생성, 컷 편집과 더빙 타이밍까지 직접 완성

---

## 4. 핵심 발견 사항

**캠페인 전체 기준**

- **1주차 → 2주차:** 지출 +74% 대비 클릭 +87%, CTR +20%, CPC -7% — 예산 증액분 이상으로 효율 개선
- **캠페인 기준:** 1주차 → 2주차 수치는 전체 클릭 기준입니다.

**T1(아이엄마 타깃) · 본인 제작 소재 기준**

| 지표 | 값 | 비교 |
|---|---|---|
| 노출 | 66,856 | 캠페인 전체의 53% |
| 링크 클릭 | 2,339 | 캠페인 전체 링크 클릭의 74% |
| 링크 CTR | 3.50% | 캠페인 평균 2.51%의 **1.4배** |
| 링크 CPC | ₩145 | 캠페인 평균 ₩149 대비 **-3%** |

- **1주차 소재 비교:** 캐릭터편 CPC ₩143 · 링크 CTR 4.70% vs 코미디편 CPC ₩200 · 3.00% (p<0.001). 캐릭터 소재의 클릭 단가가 **28% 낮았음** → 코미디를 멈추고 광고 세트 일예산을 ₩14,300 → ₩70,000으로 올려 캐릭터편에 집중
- **목표 지표로 판단:** 노출 대비 끝까지 본 비율은 오히려 코미디가 높았음(7.35% vs 2.60%). 끝까지 보게 만들었지만 클릭으로는 이어지지 않았고, 캠페인 목표가 링크 클릭이라 캐릭터를 선택
- **2주차 소재 비교:** 1주차에 이긴 캐릭터 원본을 살리고, 이탈 시점·시청 연령 데이터로 단점을 보완한 캐릭터 2차와 비교. 보완판은 25% 지점까지 본 비율이 25.6% vs 8.6%(재생 대비)로 이탈을 크게 줄였지만, 링크 CTR 1.69% vs 3.38%·CPC ₩239 vs ₩138(p<0.001)로 클릭은 절반 → 고치려던 지표(시청)와 목표 지표(클릭)가 달랐다고 판단하고 원본 유지. 원본은 지출이 2.6배(₩84,150 → ₩221,065) 늘어도 CPC가 ₩143 → ₩138로 내려감
- **반응층:** 링크 클릭의 87%가 여성(2,339건 중 2,037건). 연령별 링크 CTR은 55세 이상 4.54% vs 25~54세 3.08%로, 조부모층의 반응이 예상보다 높았음
- **지면:** 2주차 링크 클릭 1,674건 중 1,280건(76%)이 페이스북·인스타그램 릴스에서 발생. 지면별 지출 데이터가 없어 비용 효율은 비교하지 않음
- **캐릭터 일관성:** 턴어라운드 시트를 레퍼런스로 넣어도 앵글이 바뀌면 앞치마 디테일이 사라지는 문제가 반복 → Fixed Prompt로 필수 요소를 고정하고 반복 생성해 해결 ([Before/After 비교](https://urgr1111.github.io/bokyung-portfolio/#projects))

---

## 5. 비즈니스 제안 & 예상 임팩트

관측된 데이터에서 도출한 제안입니다. 실제 집행 결과가 없는 항목은 예상 수치 대신 근거가 되는 관측값을 함께 적었습니다.

| 제안 | 근거 | 기대 효과 |
|---|---|---|
| 캐릭터('달치비') 소재 중심으로 예산 집중 | 코미디 대비 CPC 28% 저렴(p<0.001), T1 세트 링크 CTR이 캠페인 평균의 1.4배 | 동일 예산에서 더 많은 링크 클릭 확보 |
| 9:16 세로 영상(릴스) 소재 우선 제작, 릴스 지면 분리 테스트 | 2주차 링크 클릭의 76%가 릴스에서 발생 | 클릭이 나오는 지면에 맞춘 소재 제작 |
| 50~60대 여성 세트를 분리해 테스트 | 55세 이상 링크 CTR 4.54% vs 25~54세 3.08%, 링크 클릭의 37% | 숨은 반응층 확인 |
| **전환 트래킹 도입** | 이번 집행에서는 링크 클릭까지만 측정 가능. 랜딩 페이지의 GA4·Pixel로는 아마존 안의 구매를 볼 수 없으므로 Amazon Attribution 태그 필요 | CPC 최적화에서 CPA·ROAS 최적화로 기준 이동 |

**Lesson Learned** — 외부 권한 문제로 최종 구매 전환율(CVR)까지 트래킹하지 못한 점은 아쉬웠지만, 주어진 상황에서 CTR과 CPC 데이터를 최대한 예민하게 분석하고 소재 비교 테스트로 예산을 옮기는 실전 감각을 익힐 수 있었습니다.

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
