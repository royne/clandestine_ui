import styled from "@emotion/styled";

export const HeaderNav = styled.header`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 0 5%;
  align-items: center;
  background: linear-gradient(0deg, var(--purple2) 0%, var(--purple1) 100%);
  box-shadow: 0 5px 10px rgba(70,19,25, 0.6);
  padding: 0 3%;
  box-sizing: border-box;
  color: var(--purple3);
  &>img{
    width: 20px;
    padding-top: 10px;
  }
`;

export const HeaderBox = styled.div`
  position: relative;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: flex-end;
  position: relative;
  &>h2{
    position: absolute;
    top:0;
    left: 50%;
    transform: translateX(-50%) translateY(30%);
    color: var(--purple3);
  }
  .logo{
    position: absolute;
    top: 39%;
    right: 2%;
    transform: translateY(-35%);
    &>img{
      max-width: 100%;
      min-width: 100%;
      height: 90px;
    }
  }
`;

export const HeaderNavBottom = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  background: linear-gradient(0deg, var(--purple1) 0%, var(--purple2) 100%);
`;

export const BoxBanner = styled.div`
  width: 100%;
  height: 80px;
  &>img{
    max-width: 100%;
    min-width: 100%;
    height: 80px;
  }
`;