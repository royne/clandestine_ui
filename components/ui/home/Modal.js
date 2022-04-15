import styled from '@emotion/styled'

export const StyledModal = styled.div`
  background: var(--black);
  width: 90%;
  max-height: 600px;
  border-radius: 5px;
  padding: 15px;
  @media (min-width: 576px) {
    width: 400px;
  }
`;

export const StyledModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 25px;
  font-weight: bold;
  color: var(--purple3);
`;

export const StyledModalBody = styled.div`
  padding-top: 5px;
`;

export const StyledModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;