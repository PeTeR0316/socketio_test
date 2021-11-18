import React, { useEffect, useState } from "react";

const KakaoShareBtn = () => {
    const createKakaoButton = (e) => {
        // kakao sdk script이 정상적으로 불러와졌으면 window.Kakao로 접근이 가능합니다
        if (window.Kakao) {
            const kakao = window.Kakao;

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

    return (
        <span onClick={createKakaoButton} className="kakao-link-btn">
            <img src="//developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_medium.png" alt="켄싱턴월드" />
        </span>
    )
};

export default KakaoShareBtn;