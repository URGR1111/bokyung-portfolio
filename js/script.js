// ===== 프로필 사진: images/profile.jpg 없으면 이니셜로 대체 =====
const profileImg = document.getElementById('profileImg');
const heroPhoto = document.getElementById('heroPhoto');
function showPhotoFallback() {
  profileImg.style.display = 'none';
  heroPhoto.querySelector('.hero-photo-fallback').style.display = 'flex';
}
if (profileImg.complete && profileImg.naturalWidth === 0) {
  showPhotoFallback();
} else {
  profileImg.addEventListener('error', showPhotoFallback);
}

// ===== 상단 스크롤 진행률 바 =====
const progressBar = document.getElementById('progressBar');
function updateProgress() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  progressBar.style.width = docHeight > 0 ? `${(scrollTop / docHeight) * 100}%` : '0%';
}

// ===== 네비게이션 바 배경 전환 =====
const nav = document.getElementById('nav');
function updateNav() {
  nav.classList.toggle('scrolled', window.scrollY > 40);
}

window.addEventListener('scroll', () => {
  updateProgress();
  updateNav();
}, { passive: true });
updateProgress();
updateNav();

// ===== 모바일 메뉴 토글 =====
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ===== 현재 섹션에 맞춰 nav 링크 active 표시 =====
const sections = document.querySelectorAll('section[id]');
const navLinkEls = document.querySelectorAll('.nav-link');
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      navLinkEls.forEach((link) => {
        link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
      });
    }
  });
}, { rootMargin: '-45% 0px -45% 0px' });
sections.forEach((section) => sectionObserver.observe(section));

// ===== 스크롤 시 등장 애니메이션 =====
const revealTargets = document.querySelectorAll(
  '.timeline-item, .award-chip, .project-card, .skill-group, .section-title, .section-lead'
);
revealTargets.forEach((el) => el.classList.add('reveal'));
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
revealTargets.forEach((el) => revealObserver.observe(el));

// ===== 그 외 프로젝트 9개 (포트폴리오 10개 프로젝트 표 기준) =====
const otherProjects = [
  {
    title: '네이처오다 링크드인 B2B 콘텐츠 (9건)',
    target: '일본·글로벌 유통사·바이어',
    platform: '링크드인 (영문)',
    tools: '링크드인, 영문 카피라이팅',
    purpose: '바이어 접점 확보, 브랜드 신뢰도 구축',
  },
  {
    title: '천원의 아침밥 홍보 콘텐츠',
    target: '아침식사 결식률 높은 대학생',
    platform: '유튜브·인스타·블로그',
    tools: '미리캔버스, 망고보드, VITA, CapCut',
    purpose: '쌀 소비 촉진·사업 홍보',
    award: '대상',
  },
  {
    title: 'DSC 공유대학 홍보 서포터즈',
    target: '9개교 재학생',
    platform: '유튜브·인스타·블로그',
    tools: '미리캔버스, 망고보드',
    purpose: 'DSC 공유대학 홍보',
  },
  {
    title: '목원대 취업 서포터즈 (1~3기)',
    target: '재학생, 청년구직자',
    platform: '인스타그램',
    tools: '미리캔버스, 망고보드, 어도비',
    purpose: '청년 취업정책 홍보·참여 유도',
  },
  {
    title: '희망이음 프로젝트',
    target: '지역기업 취업 관심 청년',
    platform: 'PPT 발표',
    tools: '파워포인트',
    purpose: '리얼커머스 인식 개선, 지역 정착 유도',
    award: '장관상',
  },
  {
    title: '청년고용정책 RE:View 경진대회',
    target: '인문·자연계열 재학생',
    platform: 'PPT 발표',
    tools: '파워포인트',
    purpose: 'K-MOVE 스쿨 홍보',
    award: '우수상',
  },
  {
    title: '무역안보의 날',
    target: '무역안보 인지도 낮은 일반 국민',
    platform: 'PPT 발표',
    tools: '파워포인트, 미리캔버스',
    purpose: '무역안보 홍보',
    award: '장려상',
  },
  {
    title: '대전·세종 청년 관광 창업 아이디어',
    target: '외국인 유학생·재학생',
    platform: 'PPT 발표',
    tools: '파워포인트',
    purpose: '유학생 유치·정착, 청년 관광 창업',
    award: '장려상',
  },
  {
    title: 'FTA 활용 홍보 공모전',
    target: '소극적인 수출 중소기업',
    platform: '카드뉴스 (SNS)',
    tools: '미리캔버스, 망고보드, 어도비',
    purpose: 'FTA 활용도 제고',
  },
];

const grid = document.getElementById('projectsGrid');
grid.innerHTML = otherProjects
  .map(
    (p) => `
    <article class="project-card">
      <div class="project-card-top">
        <h4>${p.title}</h4>
        ${p.award ? `<span class="project-award">${p.award}</span>` : ''}
      </div>
      <div class="project-meta-row"><b>타겟</b><span>${p.target}</span></div>
      <div class="project-meta-row"><b>플랫폼</b><span>${p.platform}</span></div>
      <div class="project-meta-row"><b>툴</b><span>${p.tools}</span></div>
      <p class="project-purpose">${p.purpose}</p>
    </article>
  `
  )
  .join('');

grid.querySelectorAll('.project-card').forEach((el) => {
  el.classList.add('reveal');
  revealObserver.observe(el);
});
