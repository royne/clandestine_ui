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