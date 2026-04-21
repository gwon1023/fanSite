# fanSite Prototype

캐릭터 일러스트 한 장을 중심으로, 팬위키가 아니라 "캐릭터에게 감염된 조용한 디지털 공간"처럼 보이도록 만든 웹 아트형 팬 사이트 프로토타입입니다.  
Next.js App Router 위에 TypeScript, Tailwind CSS, Motion for React, Lenis를 사용해 느리고 절제된 모션과 토큰 기반 스타일 구조를 우선 설계했습니다.

## 실행 방법

```bash
npm install
npm run dev
```

개발 서버: `http://localhost:3000`

프로덕션 빌드:

```bash
npm run build
npm run start
```

## 폴더 구조

```text
app/
  layout.tsx        # 전역 메타데이터, CSS 변수 주입, Lenis 연결
  page.tsx          # 단일 페이지 조합
  globals.css       # 전역 배경, 기본 타이포, 표면 질감
components/
  sections/         # Hero, Identity, Narrative, Gallery, Motif 섹션
  LenisProvider.tsx # 부드러운 스크롤 제어
  NoiseOverlay.tsx  # grain/noise 오버레이
  FloatingLayer.tsx # 약한 부유 애니메이션
  ThemedPanel.tsx   # 패널 재질 공통 컴포넌트
  SectionTitle.tsx  # 공통 섹션 타이틀
  GlitchAccentText.tsx
  Reveal.tsx        # 섹션 진입 애니메이션
config/
  theme.ts          # 캐릭터용 theme token preset
  motion.ts         # 조정 가능한 모션/연출 수치
  content.ts        # 정적 섹션 텍스트 및 갤러리 데이터
lib/
  utils.ts          # 클래스 병합 유틸
public/images/character/
  img1.jpg          # 메인 캐릭터 비주얼
```

## Theme Token 설명

`config/theme.ts`의 `CharacterThemeTokens`는 캐릭터별 프리셋 확장을 염두에 둔 기본 토큰 구조입니다.

- `background`, `backgroundSecondary`: 전체 공간의 어두운 바탕색
- `textPrimary`, `textSecondary`: 전경 텍스트 대비 조절
- `accent`, `accentSoft`: 붉은 강조와 잔광 흔적
- `panelBg`, `panelBorder`, `panelBlur`: 탁한 패널 재질의 핵심 값
- `glowColor`: 패널이나 장식선에 남는 미약한 적색 광량
- `noiseOpacity`: 노이즈 오버레이 강도
- `motionFast`, `motionMedium`, `motionSlow`: 인터랙션과 섹션 연출 속도 기준
- `easingPrimary`: 전반적인 easing 통일값
- `hoverShift`: hover 시 미세한 좌표 이동량
- `glitchOpacity`: 텍스트 잔상 강도

## 조정 가능한 모션 값 설명

`config/motion.ts`에서 주요 연출 강도를 한 번에 바꿀 수 있습니다.

- `overlayOpacity`: 전반적인 레이어 감도
- `sectionRevealDuration`: 섹션 등장 속도
- `floatingAmplitude`: 부유 레이어 이동 폭
- `floatingDuration`: 부유 주기
- `panelBlurAmount`: 패널 blur 양
- `accentGlowStrength`: 붉은 glow 확산 반경
- `hoverShiftDistance`: 썸네일이나 장식 요소 hover 이동 거리
- `textRevealStagger`: 텍스트 등장 간격의 기준값

## 향후 확장 포인트

- 캐릭터별 `theme.ts` preset 추가
- `content.ts` 분리로 다른 캐릭터/세계관 텍스트 교체
- 갤러리 이미지 소스 교체 및 실제 모달 뷰 확장
- 노이즈, glow, hover 강도만 재조정해 정서 밀도 미세 조정
- 섹션 수를 늘리더라도 현재의 레이어 분리 구조를 유지한 채 확장
