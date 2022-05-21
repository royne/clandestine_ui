import styled from '@emotion/styled'
import Image from 'next/image'

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
export const ContainerPhotoProfile = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3%;
`

export const ImgProfile = styled(Image)`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  object-position: top;
  
`
export const BoxInfo = styled.div`
  text-transform: capitalize;
  color: #808080;
  &>h3{
    margin: 0;
  }
  .btn_wp{
    padding: 3px 30px;
    background: var(--purple1);
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &>a{
      display: flex;
      line-height: 2;
    }
    &>a>img{
      width: 30px;
      height: 30px;
      filter: invert(0.5);
    }    
  }

`
export const BoxImgProfile = styled.div`
  width: 33%;
  height: 150px;
  position: relative;

`
export const BtnProfilePhoto = styled.form`
  width: 50px;
  height: 50px;
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translateX(40%) translateY(-20%);
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  #photos_containt_profile_btn{
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
  }
  #photos_containt_profile_btn + label {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: var(--purple1);
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 0;
  }
  label>.ico_photo{
    width: 20px;
    height: 20px;
    filter: invert(0.7);
  }
`
