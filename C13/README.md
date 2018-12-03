# 13장 구글 API로 장소 검색 서비스 만들기

## 1. 프로젝트 구조 갖추기.

두 가지 API (Google Maps API, Google Place API)를 사용하여 프로젝트를 구성합니다. 검색을 통해 위치를 파악해 위치 데이터를 프론트 엔드로 내려보내는 것.

검색 했던 내역과, 즐겨찾기에 추가한 장소를 데이터 베이스에 저장할 것. 관계형 데이터 베이스가 필요하지 않으므로 NoSQL인 Mongo 사용.

1. schemas 폴더 생성.