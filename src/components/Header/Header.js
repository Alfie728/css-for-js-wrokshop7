import React from 'react';
import styled from 'styled-components/macro';
import { Menu, Search, User } from 'react-feather';

import { QUERIES } from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const Header = () => {
  return (
    <header>
      <MobileSuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </MobileSuperHeader>
      <MainHeader>
        <LeftSpacer>
          <DesktopActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </DesktopActionGroup>
        </LeftSpacer>
        <Logo />
        <RightSpacer>
          <SubscribeButtonGroup>
            <SubscribeButton>Subscribe</SubscribeButton>
            <Span>Already a subscriber?</Span>
          </SubscribeButtonGroup>
        </RightSpacer>
      </MainHeader>
    </header>
  );
};

const LeftSpacer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
`;
const RightSpacer = styled(LeftSpacer)`
  justify-content: flex-end;
`;

const MobileSuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;
  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const DesktopActionGroup = styled.div`
  display: none;
  @media ${QUERIES.laptopAndUp} {
    display: flex;
    gap: 24px;
  }
`;

const SubscribeButton = styled(Button)``;

const SubscribeButtonGroup = styled(DesktopActionGroup)`
  flex-direction: column;
  gap: 8px;
  margin-top: 24px;
`;

const Span = styled.span`
  font-family: 'Crimson Pro', serif;
  font-size: ${14 / 16}rem;
  font-style: italic;
  font-weight: 400;
  text-align: center;
  text-decoration: underline;
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;

  @media ${QUERIES.laptopAndUp} {
    /* justify-content: space-between; */
    margin-top: 16px;
    /* align-items: baseline; */
  }
`;

export default Header;
