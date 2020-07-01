# Helltaker_widget_electron    
    
### 일전에 Pygame으로 만들었던 헬테이커 데스크탑 앱이 운영체제 단계의 설정하기가 굉장히 까다로워 배경을 투명하게 하거나, 다른 응용프로그램보다 항상 위에 위치하거나, 시스템 트레이 및 작업 표시줄 관련 기능을 구현하지 못하는 등의 한계가 많아 Electron.js로 다시 만들었습니다.    

### 데스크탑 어플리케이션 제작 프레임워크 Electron.js와 Electron.js 전용 배포 라이브러리인 electron-builder를 사용하여 배포했습니다.    
### 제작 OS 환경이 Windows 10이었기 때문에 배포파일 제작은 윈도우 버전으로만 진행했습니다.     
### 실행파일이 .exe이기 때문에 mac에서도 돌아갈 가능성은 있습니다.    
    
### [배포 압축 zip파일](https://drive.google.com/file/d/1qRGIW0WMoPDhbpmJ4l7wAZVnfMm3o4br/view)    
    
## 기능 설명    
    
1. 메인 프레임 관련 기능    
![pygame1](https://user-images.githubusercontent.com/56597998/86202877-71ff3900-bb9e-11ea-97ff-72f1e53f915e.gif)    
첫번째 영상은 이전에 pygame 모듈로 제작한 위젯 영상입니다.    
클릭 시 윈도우 프레임 / 툴바 토글 기능을 구현했습니다.    
    
두번째 영상은 Electron.js로 제작한 위젯 영상입니다.    
이전 프로젝트와는 달리 윈도우 프레임 / 툴바의 디폴트가 hide된 상태로 설정되어있으며 창을 드래그해도 애니메이션이 멈추는 현상도 발생하지 않고, 무엇보다 위젯의 배경을 투명하게 설정할 수 있어 좀 더 깔끔한 연출이 가능해지는 등 여러 개선 사항을 구현 할 수 있었습니다.    
    
2. 캐릭터 전환 기능    
    
![electronArrow](https://user-images.githubusercontent.com/56597998/86203496-1766dc80-bba0-11ea-962e-3fa2c8a6dbc8.gif)    
    
←, → 방향키 입력 시 캐릭터 전환이 가능합니다.    
    
    
3. 작업표시줄 비(非)표시    
    
![taskbar](https://user-images.githubusercontent.com/56597998/86203604-67de3a00-bba0-11ea-87bc-c5aa075f5629.gif)    
    
근본이 눈요기 용도 위젯이라 함부로 작업표시줄의 공간을 차지하는 우를 범해서는 안 되기 때문에 작업표시줄에는 나타나지 않도록 설정했습니다.    
    
4. 시스템 트레이 표시    

![tray1](https://user-images.githubusercontent.com/56597998/86204473-8e04d980-bba2-11ea-844f-4ff8463f1366.gif)    
![tray2](https://user-images.githubusercontent.com/56597998/86204475-8f360680-bba2-11ea-8a1a-a380f915c619.gif)    
    
트레이 아이콘을 우클릭한 뒤 컨텍스트 메뉴 버튼을 클릭하면 앱이 종료됩니다.    
꼭 트레이 아이콘을 일일이 우클릭하지 않아도 위젯에 우클릭 한 뒤 창 닫기를 하는 방식으로도 앱 종료가 가능합니다.
    
    
## 느낀 점    
    
1. 데스크탑 앱 제작 관련하여 pygame과 비교했을 때 Electron.js가 굉장히 강력했습니다.
pygame 프로젝트에서는 위젯을 다른 프로그램들의 항상 위에 위치하도록 하는 alwaysOnTop기능을 구현하려면 반드시 파이썬 3.4.x 이전 버전으로 프로젝트를 진행해야만 해서 venv작업이 강제되며, PyGObject와 같은 특정 모듈을 설치하고나서야 해당 기능을 구현할 수 있는 모듈을 import가능하게 하는 등 굉장히 까다롭게 진행되는데 반해 Electron.js는 alwaysOnTop기능은 물론 프레임 삭제, 배경 투명화, 작업표시줄 비표시, 시스템 트레이 표시 기능 추가하는데 BrowserWindow 객체에 각각 코드 한 줄 씩만 추가해주면 스무스하게 진행이 가능한 편리하게 이용할 수 있었습니다.    
Electron.js는 일반적 웹의 기능들도 거의 그대로 사용할 수 있는데다 작업표시줄, 윈도우 프레임 등 OS와 가까운 레벨의 기능을 편리하게 이용할 수 있다는게 굉장히 큰 장점이었습니다.