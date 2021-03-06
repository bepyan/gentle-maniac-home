import styled from "styled-components";
import Image from "next/image";
import { useRef } from "react";
import { animated, useSpring } from "react-spring";
import { device } from "../styles";
import { Img } from "../assets";
import { SectionLayout } from "../components";
import { useObserverOnce } from "../utils";

export const WelfareSection = () => {
  return (
    <SectionLayout theme="black">
      <Wrapper>
        <animated.h1>WELFARE</animated.h1>

        <div className="container">
          {welfareData.map((item, i) => (
            <SectionItem key={i} item={item} />
          ))}
        </div>
      </Wrapper>
    </SectionLayout>
  );
};

const SectionItem = ({ item }) => {
  const itemRef = useRef(null);
  const itemVisible = useObserverOnce(itemRef, { threshold: 0 });
  const itemStyle = useSpring({
    opacity: itemVisible ? 1 : 0,
    x: itemVisible ? 0 : -150,
  });
  return (
    <animated.div ref={itemRef} style={itemStyle}>
      <WelfareItem>
        <div className="icon">
          <Image src={item.icon} alt="복지" />
        </div>
        <div>
          <div className="title">{item.title}</div>
          <div className="content">{item.content}</div>
        </div>
      </WelfareItem>
    </animated.div>
  );
};

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  border: 4px solid #d29b3a;
  padding: 5rem 0rem 5rem 4rem;

  h1 {
    font-weight: 900;
    color: #d29b3a;
    margin-bottom: 0rem;
  }

  .container {
    margin: 4rem 0rem;
  }

  @media ${device.mobile} {
    padding: 1.5rem;
    padding-right: 0.5rem;

    .container {
      margin: 2rem 0rem;
    }
  }
`;

const WelfareItem = styled.div`
  @media ${device.mobile} {
    margin-left: 0rem;
  }
  margin-left: 25%;
  margin-bottom: 2rem;
  display: flex;

  & > * + * {
    @media ${device.mobile} {
      margin-left: 1rem;
    }
    margin-left: 3rem;
  }

  .icon {
    @media ${device.mobile} {
      width: 60px;
      height: 60px;
    }
    width: 90px;
    height: 90px;
    border-radius: 16px;
    background-color: gray;
    box-shadow: #d29b3a90 0px 0px 40px 0px;
  }
  .title {
    @media ${device.mobile} {
      font-size: 1rem;
      font-weight: 900;
    }
    font-size: 1.75rem;
    font-weight: 900;
    color: #d29b3a;
  }
  .content {
    @media ${device.mobile} {
      font-size: 12px;
    }
    margin-top: 8px;
  }
`;

const welfareData = [
  {
    icon: Img.복지01,
    title: "[최신형 업무 장비]",
    content: "일의 효율을 높여요",
  },
  {
    icon: Img.복지02,
    title: "[여유 있는 출근 시간]",
    content: "10시출근으로 복합한 시간대를 피해요",
  },
  {
    icon: Img.복지03,
    title: "[인센티브 제도]",
    content: "성과에 대해선 확실하게 보장해요",
  },
  {
    icon: Img.복지04,
    title: "[다양한 간식 제공]",
    content: "직원들이 좋아하는 걸로 준비해요",
  },
  {
    icon: Img.복지05,
    title: "[청년내일채움 가입 적용]",
    content: "목돈마련, 회사와 정부에서 함께 도와줘요",
  },
  {
    icon: Img.복지06,
    title: "[회식강요 워크샵 놉!]",
    content: "꼰대 문화 없어요",
  },
  {
    icon: Img.복지_비타민,
    title: "[건강을 위하여]",
    content: `영양제 구비 직원 건강을 챙겨요`,
  },
  {
    icon: Img.복지_햄버거,
    title: "[소확행을 위하여]",
    content: `매월 1회 피자 or 버거파티를 즐겨요`,
  },
];
