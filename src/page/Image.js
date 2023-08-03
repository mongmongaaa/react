import logo from '../logo.svg';
//되도록 퍼블릭안에 이미지 파일 넣을것,,,, 몰라몰라 아래거 안나와 
// import logo from '../logo.svg';  

function Image() {
  return (
    <>
     *src폴더안에 이미지 출력 <br />
     {/* <img src={logo} alt=""/> */}
    <br /><br />
     *public 폴더안에 이미지 출력<br />
     <img src="./logo512.png" alt=""/>
    </>
  )
}

export default Image