# AddFood_Backend
원준이 너무 싫어요

==========

##Database Schema
-------------------

###User Schema

> _id : String, 사용자의 고유 식별번호입니다. 페이스북 auth를 사용할 경우 페이스북 고유 식별번호로 초기화됩니다.

> name : String, 사용자의 이름입니다.

###Food Schema

동봉된 pdf 문서 참조.
[혹은 이걸 ](https://github.com/GrooshBene/EatSight-npm)참조



##API Docs
--------------

* /auth/facebook/token : 페이스북 로그인을 완료했을 시, 서버에 토큰을 보내 유효 판별 체크 후 데이터베이스에 적재합니다.

>리퀘스트 파라미터

>>access_token : 페이스북 인증 토큰입니다. Facebook SDK의 로그인 버튼을 통해 추출해낼 수 있습니다.

>응답

>> fb user data json


* /search : 음식 관련 정보를 찾습니다.

>리퀘스트 파라미터

>> searchType : 음식을 검색하는 형식을 의미합니다. 이름검색, 성분검색 및 다양한 검색이 지원됩니다. 자세한건 API pdf 문서 참조

>> query : 검색 쿼리입니다. searchType에 따라 형식이 달라집니다.

  >>>query example
    searchType이 foodName으로 설정되어 있을 경우

      request param query의 형식 = 음식이름
      요런식
