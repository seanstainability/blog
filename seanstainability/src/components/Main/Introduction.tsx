import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import ProfileImage, { ProfileImageProps } from 'components/Main/ProfileImage';

type IntroductionProps = ProfileImageProps;

const Background = styled.div`
  width: 100%;
  background-color: #323f67;
  // background-image: linear-gradient(135deg, #8bc6ec 0%, #9599e2 100%);
  color: #f0eadb;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 768px;
  height: 400px;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 100%;
    height: 300px;
    padding: 0 20px;
  }
`;

const SubTitle = styled.div`
  font-size: 20px;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const Title = styled.div`
  margin-top: 5px;
  font-size: 30px;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const Introduction: FunctionComponent<IntroductionProps> = function ({
  profileImage,
}) {
  return (
    <Background>
      <Wrapper>
        <div
          style={{
            width: '100%',
            display: 'flex',
          }}
        >
          <ProfileImage profileImage={profileImage} />
          <div>
            <a
              href="https://github.com/seanstainability"
              target="_blank"
              rel="noreferrer noopener"
            >
              <i
                className="fab fa-github"
                style={{ fontSize: '2em', transform: 'translate(-100%, 0)' }}
              ></i>
            </a>
          </div>
        </div>

        <div>
          <SubTitle>Web Front-end Developer</SubTitle>
          <Title>지속 가능한 개발자, Sean의 성장 로그</Title>
        </div>
      </Wrapper>
    </Background>
  );
};

export default Introduction;
