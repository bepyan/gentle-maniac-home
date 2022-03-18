import styled from "styled-components";
import { SectionLayout } from "../components";

export const WelfareSection = () => {
  return (
    <SectionLayout theme="black">
      <Wrapper>
        <h1>WELFARE</h1>

        <div className="container">
          {welfareData.map((v, i) => (
            <WelfareItem key={i}>
              <div className="icon" />
              <div>
                <div className="title">{v.title}</div>
                <div className="content">{v.content}</div>
              </div>
            </WelfareItem>
          ))}
        </div>
      </Wrapper>
    </SectionLayout>
  );
};

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  border-top: 4px solid #d29b3a;

  h1 {
    margin-top: 4rem;
    margin-left: 2rem;
    font-weight: 900;
    color: #d29b3a;
  }
`;

const WelfareItem = styled.div`
  margin-left: 30%;
  display: flex;

  & + * {
    margin-top: 2rem;
  }
  & > * + * {
    margin-left: 3rem;
  }
  .icon {
    width: 90px;
    height: 90px;
    border-radius: 10px;
    background-color: gray;
    box-shadow: #d29b3a70 0px 0px 30px 0px;
  }
  .title {
    font-size: 1.75rem;
    font-weight: 900;
    color: #d29b3a;
  }
  .content {
    margin-top: 4px;
  }
`;

const welfareData = [
  {
    icon: "",
    title: "[최신형 업무 장비]",
    content: "일의 효율을 높여요",
  },
  {
    icon: "",
    title: "[여유 있는 출근 시간]",
    content: "10시출근으로 복합한 시간대를 피해요",
  },
  {
    icon: "",
    title: "[인센티브 제도]",
    content: "성과에 대해선 확실하게 보장해요",
  },
  {
    icon: "",
    title: "[다양한 간식 제공]",
    content: "직원들이 좋아하는 걸로 준비해요",
  },
  {
    icon: "",
    title: "[쳥년내일채움 가입 적용]",
    content: "목돈마련 회사에서 정부에서 함께 도와줘요",
  },
  {
    icon: "",
    title: "[회식강요 워크샵 놉!]",
    content: "꼰대 문화 없어요",
  },
  {
    icon: "",
    title: "[건강을 위하여]",
    content: `매월 1회 피자 or 버거파티\n
    영양제 구비 직원 건강을 챙겨요`,
  },
];