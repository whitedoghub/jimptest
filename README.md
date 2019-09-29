# jimptest

<h4><테스트 개요></h4> 

- background 이미지에 logo 이미지를 합성  
- backgournd 이미지에 문자열(영문, 한글) 합성

---

<h4><준비 : 프레임워크></h4>  

- node update (Linux)
```node
> node -v // 현재 버전 확인
> node install -g n // 'n' -> node 버전 관리 모듈 ->  root 계정으로 설치  
> n stable // 안정화 버전 설치. 참조) n latest, n lts, n 11.4.0
> n // node 버전 변경
> n remove 11.4.0 // 특정 버전 삭제 (다른 표기법 : n - 11.4.0)
> n prone // 현재 선택된 버전을 제외하고, 모든 버전 삭제
```

- node update (Windows)
```node
> npm install -g npm-windows-upgrade // 관리자 권한으로 cmd 실행
> npm-windows-upgrade // 버전 목록을 확인 후 선택 설치
```

- npm update  
```node
> npm -v // 현재 버전 확인
> npm install -g npm@latest // 안정화 최신 버전 업데이트. 참조) npm@next -> 가장 최신 버전
```


---

<h4><준비 : 코딩></h4>

1. vs code 프로젝트 폴더 생성
2. jimp install
```node
> npm init // package.json 생성
> npm install --save jimp // jimp local 설치, package.json에 dependencies 기록, dev 및 prod 적용
```
3. 프로젝트 폴더 git 초기화
```node
> git init // 또는 VSC에서 깃초기화 (untagged 항목을 tagged로 변경을 하면 git add 명령어와 동일한 효과가 있는 듯)
```
4. gitignore 처리 (VSC에서 처리)
5. github push
```node
> git remote add origin 'git remote url'
```
