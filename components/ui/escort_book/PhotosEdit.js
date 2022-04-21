import styled from '@emotion/styled'

export const Container = styled.section`
  width: 100%;
  padding-top: 2%;
  margin-bottom: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;

  .box_photo{
    width: 33%;
    margin-bottom: 5px;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(255,255,255,0.2);
    position: relative;
  }
  .box_photo:after {
    content: '';
    display: block;
    padding-bottom: 100%;
  }
  .box_photo_content {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
  }
  .box_photo_content>img{
    width: 100%;
  }
`
export const BtnGridPhoto = styled.form`
  width: 50px;
  height: 50px;
  position: absolute;
  bottom: 70px;
  right: 2%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  #photos_containt_profile{
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
  }
  #photos_containt_profile + label {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: var(--purple1);
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 0;
  }
  label>.ico_photo{
    width: 30px;
    height: 30px;
    filter: invert(0.7);
  }
`