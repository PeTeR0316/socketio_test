import React, { useEffect, useState, useRef } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import '../css/products.css'
import productImg from '../images/main/4@2x.png' 
import houseLink from '../images/main/link.jpeg'

const Products = () => {
    const [linkePlace, setLinkPlace] = useState([]);
    const [linkNum, setLinkNum] = useState(0);
    const linkName = React.useRef('refTest');

    //이미지에 상품 링크 생성
    const productLink = (e) => {
        e.stopPropagation();
        
        let leftPosition = e.nativeEvent.offsetX;
        let topPosition = e.nativeEvent.offsetY;

        setLinkPlace((linkePlace) => [...linkePlace,[leftPosition,topPosition]]);

        let el = "div"
        let linkDiv = document.createElement(el); //클릭 시 div 요소 생성
        let jbBtnText = document.createTextNode('');

        new Promise((resolve, reject) => {
            linkDiv.appendChild(jbBtnText);
            document.getElementById("imgFrame").appendChild( linkDiv ).id=`link${linkNum}`;

            let linkAddr = prompt("링크 주소를 입력하세요");

            // https:// 또는 http://를 포함하여 입력할 경우 주소 변환
            if(linkAddr.indexOf("https://") >= 0) {
                linkAddr = linkAddr.replace("https://", "");
                document.getElementById(`link${linkNum}`).innerHTML = `<a href=https://${linkAddr} target='_blank'>+</a>`;
                console.log("https://");
            } else if(linkAddr.indexOf("http://") >= 0) {
                linkAddr = linkAddr.replace("http://", "");
                document.getElementById(`link${linkNum}`).innerHTML = `<a href=http://${linkAddr} target='_blank'>+</a>`;
                console.log("http://");
            } else if(linkAddr === '') {
                alert("주소를 입력하세요.")
                return;
            } else {
                document.getElementById(`link${linkNum}`).innerHTML = `<a href=http://${linkAddr} target='_blank'>+</a>`;
            }

            resolve();
        })
        .then(() => {
            //클리한 위치에 마커 생성
            document.getElementById(`link${linkNum}`).style.left= leftPosition + "px";
            document.getElementById(`link${linkNum}`).style.top= topPosition + "px";
        })
        .catch(() => {
            console.log("동기식 처리 실패!")
        })

        setLinkNum(linkNum + 1) //마커마다 ID값을 다르게 하기위해
    }

    const createKakaoButton = (e) => {
        debugger;

        // kakao sdk script이 정상적으로 불러와졌으면 window.Kakao로 접근이 가능합니다
        if (window.Kakao) {
            const kakao = window.Kakao;

            // 중복 initialization 방지
            // if (!kakao.isInitialized()) {
            //     //javascript key 를 이용하여 initialize
            //     kakao.init('8fd968ba3f57963906792313e3dcd428');
            // };

            kakao.Link.createDefaultButton({
                // Render 부분 className=kakao-link-btn 을 찾아 그부분에 렌더링을 합니다
                container: '.kakao-link-btn',
                objectType: 'feed',
                content: {
                    title: e.target.alt,
                    description: '#리액트 #카카오 #공유버튼',
                    imageUrl: 'http://mud-kage.kakao.co.kr/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png', // i.e. process.env.FETCH_URL + '/logo.png'
                    link: {
                    mobileWebUrl: "http://www.naver.com/",
                    webUrl: "http://www.naver.com/",
                    },
                },
                social: {
                    likeCount: 77,
                    commentCount: 55,
                    sharedCount: 333,
                },
                buttons: [
                    {
                    title: '웹으로 보기',
                    link: {
                        mobileWebUrl: "http://www.naver.com/",
                        webUrl: "http://www.naver.com/",
                    },
                    },
                    {
                    title: '앱으로 보기',
                    link: {
                        mobileWebUrl: "http://www.naver.com/",
                        webUrl: "http://www.naver.com/",
                    },
                    },
                ],
            });
        };
    }

    function test() {
        
    }

    return (
        <div className="products">
            <div className="productList">
                <div id="imgFrame" >
                    <img src= {houseLink} alt="image1" onClick={productLink} />
                </div>

                <h2 onClick={test}>추천</h2>
                <ul className="productLink">
                    <li>
                        <ul className="productInfo">
                            <li>
                                <img alt="상품이미지" />
                            </li>
                            <li className="linkTitle" ref={linkName} onClick={createKakaoButton}>
                                켄싱턴월드
                            </li>
                            <li onClick={createKakaoButton} className="kakao-link-btn">
                               <img src="//developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_medium.png" alt="켄싱턴월드" />
                            </li>
                        </ul>
                    </li>
                    <li>
                        <ul className="productInfo">
                            <li>
                                <img alt="상품이미지" />
                            </li>
                            <li className="linkTitle">
                                페라가모
                            </li>
                            <li onClick={createKakaoButton} className="kakao-link-btn">
                               <img src="//developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_medium.png" alt="페라가모" />
                            </li>
                        </ul>
                    </li>
                    <li>
                        <ul className="productInfo">
                            <li>
                                <img alt="상품이미지" />
                            </li>
                            <li className="linkTitle">
                                지방시
                            </li>
                            <li onClick={createKakaoButton} className="kakao-link-btn">
                               <img src="//developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_medium.png" alt="지방시" />
                            </li>
                        </ul>
                    </li>
                    <li>
                        <ul className="productInfo">
                            <li>
                                <img alt="상품이미지" />
                            </li>
                            <li className="linkTitle">
                                구찌
                            </li>
                            <li onClick={createKakaoButton} className="kakao-link-btn">
                               <img src="//developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_medium.png" alt="구찌" />
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            
            <div className="productList">
                <img src= {productImg} alt="image2"/>
                <h2>브랜드명</h2>

                <ul className="productLink">
                    <li>Link1</li>
                    <li>Link2</li>
                    <li>Link3</li>
                    <li>Link4</li>
                </ul>
            </div>

            <div className="productList">
                <img src= {productImg} alt="image3"/>
                <h2>브랜드명</h2>

                <ul className="productLink">
                    <li>Link1</li>
                    <li>Link2</li>
                    <li>Link3</li>
                    <li>Link4</li>
                </ul>
            </div>

            <div className="productList">
                <img src= {productImg} alt="image4"/>
                <h2>브랜드명</h2>

                <ul className="productLink">
                    <li>Link1</li>
                    <li>Link2</li>
                    <li>Link3</li>
                    <li>Link4</li>
                </ul>
            </div>

            <div className="productList">
                <img src= {productImg} alt="image5"/>
                <h2>브랜드명</h2>

                <ul className="productLink">
                    <li>Link1</li>
                    <li>Link2</li>
                    <li>Link3</li>
                    <li>Link4</li>
                </ul>
            </div>
        </div>
    );
}

export default Products;