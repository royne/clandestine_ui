import styled from '@emotion/styled'

export const StyledModal = styled.div`
  background: ${props => props.optionDesing ? 'rgba(0,0,0,.98)' : 'rgba(0,0,0,.9) url("/Fondo_Modal.jpg")'};;
  background-position: center;
  background-blend-mode: darken;
  width: ${props => props.optionDesing ? '100%' : '90%'};
  max-height: ${props => props.optionDesing ? '100%' : '600px'};
  height: ${props => props.optionDesing ? '100%' : 'auto'};
  border-radius: 5px;
  padding: 15px;
  border:  ${props => props.optionDesing ? 'none' : '1px solid var(--white)'};
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

export const StyledModalTitle = styled.div`
  color: white;
  text-align: center;
  margin-bottom: 20px;
`