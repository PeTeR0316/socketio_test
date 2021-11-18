import React, { useRef } from 'react';

import '../css/footer.css'

const Footer = () => {
    const inputEl = useRef();
    const onButtonClick = () => {
        alert(inputEl.current.value)
        // alert(inputEl.current.textContent) //텍스트 가져오기
        // inputEl.current.focus();
    };

    return (
        <div className="footer">
            <ul className="footerMenu">
                <li>로그인</li>
                <li>마이페이지</li>
                <li>고객센터</li>
                <li>공지사항</li>
            </ul>

            <div className="companyInfo">
                <p>(주)온다패션</p>

                <ul>
                    <li>고객센터 : 02-336-4677</li>
                    <li>사업자등록번호 : 712-81-01789 <a>사업자정보확인</a></li>
                    <li>통신판매업 신고번호 : 2020-서울마포-2052</li>
                    <li>(04085) 서울특별시 마포구 토정로 24-12(합정동) 3층</li>
                    <li>대표이사 : 김명현</li>
                    <li>개인정보 보호책임자 : 안지훈</li>
                    <li>메일 : onda_sm@onda.co.kr</li>
                </ul>

                <ul>
                    <li><a href="#">이용약관</a></li>
                    <li><a href="#">개인정보처리방침</a></li>
                    <li><a href="#">운영정책</a></li>
                </ul>
                <p>Copyright &copy; Ondafashion All rights reserved.</p>

                {/* useRef 테스트 */}
                {/* <input ref={inputEl} type='text' />
                <button onClick={onButtonClick}>button</button> */}
            </div>
        </div>
    );
}

export default Footer;