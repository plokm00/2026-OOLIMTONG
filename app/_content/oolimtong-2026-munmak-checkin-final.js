// 문막-흙으로 잇다 2026 현장 방명록 — 마감 기록
//
// 행사가 끝나 실시간 체크인(Firestore munmak2026_checkins)을 닫으면서, 닫는 시점(2026-11-04)의
// 컬렉션 내용을 그대로 옮겨 둔 것이다. 체크인 페이지와 인쇄용 명단은 이제 이 값만 읽는다.

const checkinEntries = {
  "r10": {
    "date": "2026-09-19",
    "updatedAt": 1789972466785,
    "names": [
      "이민숙",
      "윤경채",
      "윤지호",
      "윤수호",
      "신은서",
      "유승태",
      "유시안",
      "유지안"
    ],
    "name": "이민숙",
    "isWalkin": false
  },
  "r12": {
    "date": "2026-09-05",
    "isWalkin": false,
    "names": [
      "유지혜",
      "최예서",
      "최윤서",
      "최종효"
    ],
    "updatedAt": 1788759186033,
    "name": "유지혜"
  },
  "r15": {
    "updatedAt": 1789208295466,
    "date": "2026-09-12",
    "isWalkin": false,
    "names": [
      "최연희",
      "최은희",
      "박주원",
      "김시우",
      "원정현"
    ],
    "name": "최연희"
  },
  "r16": {
    "date": "2026-09-12",
    "isWalkin": false,
    "updatedAt": 1789202241898,
    "name": "김정미",
    "names": [
      "김정미",
      "전지예",
      "전은우",
      "정소영",
      "김서희"
    ]
  },
  "r17": {
    "date": "2026-09-05",
    "name": "유미나",
    "names": [
      "유미나",
      "양예진",
      "한지오",
      "홍라온",
      "홍지훈"
    ],
    "isWalkin": false,
    "updatedAt": 1788759853298
  },
  "r18": {
    "name": "박유림",
    "updatedAt": 1788760851080,
    "names": [
      "손지원",
      "손지율",
      "손지후",
      "이영빈",
      "이정운"
    ],
    "isWalkin": false,
    "date": "2026-09-05"
  },
  "r20": {
    "name": "배미진",
    "updatedAt": 1788770513013,
    "isWalkin": false,
    "names": [
      "배미진",
      "배가인",
      "배준영",
      "배지후"
    ],
    "date": "2026-09-05"
  },
  "r21": {
    "date": "2026-09-05",
    "name": "박혜진",
    "names": [
      "박혜진",
      "김경용",
      "김다인",
      "김아인"
    ],
    "isWalkin": false,
    "updatedAt": 1788759202099
  },
  "r24": {
    "names": [
      "김세정",
      "김규민",
      "김지아"
    ],
    "name": "김세정",
    "isWalkin": false,
    "date": "2026-09-05",
    "updatedAt": 1788759133349
  },
  "r25": {
    "date": "2026-09-05",
    "names": [
      "김은영",
      "안동희",
      "안유영",
      "안유은"
    ],
    "isWalkin": false,
    "name": "김은영",
    "updatedAt": 1788759148906
  },
  "r3": {
    "updatedAt": 1789207962203,
    "isWalkin": false,
    "names": [
      "엄하진",
      "나예람",
      "이은옥",
      "이동희"
    ],
    "name": "이동희",
    "date": "2026-09-12"
  },
  "r30": {
    "names": [],
    "name": "김미정",
    "isWalkin": false,
    "updatedAt": 1789203080028,
    "date": "2026-09-12"
  },
  "r31": {
    "updatedAt": 1788759161487,
    "name": "노지선",
    "isWalkin": false,
    "names": [
      "노지선",
      "조성율",
      "조준연"
    ],
    "date": "2026-09-05"
  },
  "r32": {
    "date": "2026-09-19",
    "updatedAt": 1789970386674,
    "names": [
      "김현미",
      "김도윤",
      "김성한"
    ],
    "isWalkin": false,
    "name": "김현미"
  },
  "r34": {
    "updatedAt": 1788759218925,
    "name": "최동규",
    "isWalkin": false,
    "names": [
      "최동규",
      "김소영",
      "최수완",
      "최수호"
    ],
    "date": "2026-09-05"
  },
  "r36": {
    "isWalkin": false,
    "date": "2026-09-12",
    "name": "윤태영",
    "updatedAt": 1789205207581,
    "names": [
      "윤태영",
      "안민균",
      "안시언"
    ]
  },
  "r37": {
    "name": "이미순",
    "names": [
      "이미순",
      "김무열"
    ],
    "isWalkin": false,
    "date": "2026-09-12",
    "updatedAt": 1789205191977
  },
  "r38": {
    "names": [
      "이명화",
      "이경준",
      "이하영",
      "이하임"
    ],
    "name": "이명화",
    "isWalkin": false,
    "date": "2026-09-12",
    "updatedAt": 1789203171569
  },
  "r39": {
    "name": "원예진",
    "updatedAt": 1789972248905,
    "names": [
      "원예진",
      "신소율"
    ],
    "isWalkin": false,
    "date": "2026-09-19"
  },
  "r40": {
    "updatedAt": 1788760487042,
    "isWalkin": false,
    "name": "김강일",
    "names": [
      "김강일",
      "김태리",
      "김태민",
      "안진"
    ],
    "date": "2026-09-05"
  },
  "r41": {
    "names": [
      "장민경",
      "함상균",
      "함은정"
    ],
    "name": "장민경",
    "updatedAt": 1789204410195,
    "date": "2026-09-12",
    "isWalkin": false
  },
  "r44": {
    "updatedAt": 1789206605131,
    "date": "2026-09-12",
    "isWalkin": false,
    "names": [
      "김희준",
      "김선우"
    ],
    "name": "진다혜"
  },
  "r45": {
    "names": [
      "김은주",
      "이정민",
      "이서윤",
      "이서현"
    ],
    "name": "김은주",
    "isWalkin": false,
    "updatedAt": 1789970553227,
    "date": "2026-09-19"
  },
  "r46": {
    "updatedAt": 1788759473245,
    "isWalkin": false,
    "name": "김현정",
    "names": [
      "김현정",
      "노아"
    ],
    "date": "2026-09-05"
  },
  "r5": {
    "date": "2026-09-05",
    "isWalkin": false,
    "updatedAt": 1788759092063,
    "names": [
      "박아름",
      "권기연",
      "김소이",
      "김소현"
    ],
    "name": "박아름"
  },
  "r50": {
    "updatedAt": 1788759651699,
    "name": "한조아",
    "isWalkin": false,
    "names": [
      "한조아",
      "박민유",
      "박시헌",
      "박원용"
    ],
    "date": "2026-09-05"
  },
  "r52": {
    "updatedAt": 1789970609388,
    "name": "이소정",
    "names": [
      "이소정",
      "석서율",
      "공수지",
      "박서호"
    ],
    "date": "2026-09-19",
    "isWalkin": false
  },
  "r53": {
    "date": "2026-09-05",
    "updatedAt": 1788760448846,
    "name": "이선민",
    "names": [
      "이선민",
      "이윤호"
    ],
    "isWalkin": false
  },
  "r54": {
    "name": "노미래",
    "names": [],
    "isWalkin": false,
    "date": "2026-09-05",
    "updatedAt": 1788760671181
  },
  "r55": {
    "isWalkin": false,
    "date": "2026-09-19",
    "name": "윤소라",
    "names": [
      "윤소라",
      "김윤우"
    ],
    "updatedAt": 1789971131671
  },
  "r56": {
    "updatedAt": 1789208139299,
    "isWalkin": false,
    "name": "이솜귤",
    "names": [
      "이솜귤",
      "김서후",
      "김지후",
      "조우영",
      "조충흠",
      "조현준"
    ],
    "date": "2026-09-12"
  },
  "r57": {
    "names": [
      "최미량",
      "어나율",
      "어성율"
    ],
    "name": "최미량",
    "isWalkin": false,
    "date": "2026-09-19",
    "updatedAt": 1789970756418
  },
  "r58": {
    "date": "2026-09-19",
    "names": [
      "김성미",
      "장하선",
      "장하준"
    ],
    "name": "김성미",
    "updatedAt": 1789971469348,
    "isWalkin": false
  },
  "r6": {
    "date": "2026-09-05",
    "names": [
      "김선영",
      "한서우",
      "한진우"
    ],
    "updatedAt": 1788759674127,
    "isWalkin": false,
    "name": "김선영"
  },
  "r61": {
    "updatedAt": 1789204794701,
    "isWalkin": false,
    "date": "2026-09-12",
    "names": [],
    "name": "박명희"
  },
  "r62": {
    "date": "2026-09-19",
    "isWalkin": false,
    "name": "송주영",
    "names": [
      "송주영",
      "이서이",
      "이수완"
    ],
    "updatedAt": 1789971158977
  },
  "r63": {
    "names": [
      "신예지",
      "김온하",
      "김도하",
      "김도준"
    ],
    "name": "신예지",
    "updatedAt": 1789972213436,
    "isWalkin": false,
    "date": "2026-09-19"
  },
  "r64": {
    "names": [
      "염동규",
      "염새봄"
    ],
    "name": "염동규",
    "isWalkin": false,
    "updatedAt": 1788759231006,
    "date": "2026-09-05"
  },
  "r65": {
    "isWalkin": false,
    "date": "2026-09-12",
    "updatedAt": 1789204851805,
    "names": [],
    "name": "김혜림"
  },
  "r66": {
    "names": [
      "이은교",
      "유진호",
      "유서은",
      "유은결"
    ],
    "updatedAt": 1789971381787,
    "isWalkin": false,
    "name": "이은교",
    "date": "2026-09-19"
  },
  "r69": {
    "isWalkin": false,
    "updatedAt": 1789204676661,
    "date": "2026-09-12",
    "names": [
      "서지혜",
      "엄해진",
      "오수아",
      "남궁설"
    ],
    "name": "서지혜"
  },
  "r7": {
    "updatedAt": 1789202241898,
    "names": [
      "나영실",
      "황상준",
      "황서아"
    ],
    "isWalkin": false,
    "date": "2026-09-12",
    "name": "나영실"
  },
  "r70": {
    "isWalkin": false,
    "date": "2026-09-12",
    "names": [
      "김도균",
      "김도현",
      "서우준",
      "서현우",
      "강민경",
      "민진경"
    ],
    "updatedAt": 1789204475053,
    "name": "강민경"
  },
  "r71": {
    "updatedAt": 1789971288060,
    "names": [
      "안혜준",
      "노성혁",
      "노진철"
    ],
    "name": "안혜준",
    "isWalkin": false,
    "date": "2026-09-19"
  },
  "r72": {
    "names": [
      "오다영",
      "모수빈",
      "모수연"
    ],
    "name": "오다영",
    "isWalkin": false,
    "date": "2026-09-12",
    "updatedAt": 1789202241898
  },
  "r73": {
    "date": "2026-09-12",
    "names": [
      "강규녀",
      "박율",
      "박진"
    ],
    "updatedAt": 1789204500366,
    "isWalkin": false,
    "name": "박율"
  },
  "r74": {
    "names": [
      "김선율",
      "김태린",
      "김주호"
    ],
    "name": "이지혜",
    "date": "2026-09-12",
    "isWalkin": false,
    "updatedAt": 1789208637471
  },
  "r75": {
    "name": "박상희",
    "names": [
      "박상희",
      "김은아",
      "김은후",
      "안덕환"
    ],
    "isWalkin": false,
    "date": "2026-09-12",
    "updatedAt": 1789203742009
  },
  "r76": {
    "name": "장혜림",
    "date": "2026-09-12",
    "names": [
      "이민형",
      "이다온",
      "장혜림",
      "홍이서"
    ],
    "isWalkin": false,
    "updatedAt": 1789202241898
  },
  "r77": {
    "names": [
      "김효정",
      "한진우",
      "한진서",
      "한서아"
    ],
    "name": "김효정",
    "updatedAt": 1789203445668,
    "isWalkin": false,
    "date": "2026-09-12"
  },
  "r78": {
    "updatedAt": 1789970532660,
    "date": "2026-09-19",
    "names": [
      "임지민",
      "조연성",
      "조유주",
      "조명우"
    ],
    "name": "임지민",
    "isWalkin": false
  },
  "r80": {
    "name": "장혜림",
    "isWalkin": false,
    "names": [
      "장혜림",
      "홍이서",
      "신수호",
      "원혜주",
      "신혜원",
      "신혜리"
    ],
    "date": "2026-09-19",
    "updatedAt": 1789971123531
  },
  "r83": {
    "date": "2026-09-19",
    "names": [
      "박나연",
      "김진만",
      "변승민",
      "김채아",
      "김도아",
      "변서하"
    ],
    "isWalkin": false,
    "name": "박나연",
    "updatedAt": 1789972491176
  },
  "r84": {
    "date": "2026-09-19",
    "names": [
      "진주",
      "안재호",
      "안유하"
    ],
    "isWalkin": false,
    "name": "진주",
    "updatedAt": 1789970283350
  },
  "r85": {
    "isWalkin": false,
    "name": "장혜린",
    "names": [
      "장혜린",
      "최하룬",
      "최이룬",
      "고하준",
      "고예준",
      "김다솔",
      "김남용"
    ],
    "date": "2026-09-19",
    "updatedAt": 1789970471190
  },
  "r86": {
    "date": "2026-09-19",
    "isWalkin": false,
    "names": [
      "안혜미",
      "안혜련",
      "최창헌",
      "최기주",
      "김건우",
      "최다온"
    ],
    "updatedAt": 1789970588706,
    "name": "안혜미"
  },
  "r89": {
    "name": "정은영",
    "updatedAt": 1789971324236,
    "date": "2026-09-19",
    "names": [
      "정은영",
      "김채하",
      "김솔몬"
    ],
    "isWalkin": false
  },
  "r90": {
    "isWalkin": false,
    "updatedAt": 1789972127616,
    "date": "2026-09-19",
    "name": "이은희",
    "names": [
      "이은희",
      "전유담",
      "전헤담",
      "전도담",
      "홍성화",
      "김나은",
      "김도연"
    ]
  },
  "walkin_1788758667434_yp648": {
    "date": "2026-09-05",
    "names": [
      "방은아",
      "전상훈",
      "전소이"
    ],
    "updatedAt": 1788759278391,
    "isWalkin": true,
    "time": "11:00",
    "note": "",
    "addedAt": 1788758667434
  },
  "walkin_1788759302959_3fcc3": {
    "names": [
      "김현화",
      "이영준",
      "이은진"
    ],
    "isWalkin": true,
    "note": "",
    "addedAt": 1788759302959,
    "time": "11:00",
    "date": "2026-09-05",
    "updatedAt": 1788759317492
  },
  "walkin_1788759485666_ibc8i": {
    "date": "2026-09-05",
    "names": [
      "이하늘",
      "이희재"
    ],
    "note": "",
    "time": "12:00",
    "isWalkin": true,
    "addedAt": 1788759485666,
    "updatedAt": 1788759493607
  },
  "walkin_1788759500625_sfalk": {
    "names": [
      "강서우",
      "강정현",
      "김은경",
      "전지호",
      "전태집",
      "정영란"
    ],
    "date": "2026-09-05",
    "addedAt": 1788759500625,
    "time": "12:00",
    "note": "",
    "isWalkin": true,
    "updatedAt": 1788759552582
  },
  "walkin_1788759682426_qcdzm": {
    "updatedAt": 1788759924364,
    "time": "13:00",
    "isWalkin": true,
    "addedAt": 1788759682426,
    "note": "서포터즈 가족(딸)",
    "names": [
      "박지현"
    ],
    "date": "2026-09-05"
  },
  "walkin_1788759717674_gb1rt": {
    "isWalkin": true,
    "updatedAt": 1788759921300,
    "time": "13:00",
    "note": "",
    "addedAt": 1788759717674,
    "names": [
      "이상욱",
      "이수아",
      "이수지",
      "이수현",
      "최예라"
    ],
    "date": "2026-09-05"
  },
  "walkin_1788759872417_39n10": {
    "date": "2026-09-05",
    "updatedAt": 1788760997515,
    "addedAt": 1788759872417,
    "isWalkin": true,
    "names": [
      "조채안",
      "조채윤"
    ],
    "note": "",
    "time": "13:00"
  },
  "walkin_1788760877358_885tx": {
    "date": "2026-09-05",
    "isWalkin": true,
    "updatedAt": 1788767830398,
    "note": "",
    "names": [
      "김시윤",
      "김예온"
    ],
    "time": "13:00",
    "addedAt": 1788760877358
  },
  "walkin_1788767858950_cubsd": {
    "date": "2026-09-05",
    "isWalkin": true,
    "names": [
      "김경숙",
      "민서아",
      "민승준",
      "민승현"
    ],
    "updatedAt": 1788767902949,
    "addedAt": 1788767858950,
    "note": "",
    "time": "13:00"
  },
  "walkin_1788767916102_gn1fd": {
    "date": "2026-09-05",
    "updatedAt": 1788768145417,
    "isWalkin": true,
    "names": [
      "박성준",
      "박율휘"
    ],
    "time": "14:00",
    "addedAt": 1788767916102,
    "note": ""
  },
  "walkin_1788768155178_swiv7": {
    "note": "",
    "isWalkin": true,
    "time": "14:00",
    "date": "2026-09-05",
    "names": [
      "구인아",
      "김민수",
      "김수호",
      "김지호"
    ],
    "updatedAt": 1788768186720,
    "addedAt": 1788768155179
  },
  "walkin_1788768206214_kug8z": {
    "date": "2026-09-05",
    "addedAt": 1788768206215,
    "updatedAt": 1788768245173,
    "names": [
      "이주연",
      "정하원",
      "정하윤"
    ],
    "isWalkin": true,
    "note": "",
    "time": "15:00"
  },
  "walkin_1788768250534_hx09s": {
    "addedAt": 1788768250534,
    "time": "15:00",
    "names": [
      "윤선희",
      "정아인",
      "정지환"
    ],
    "note": "",
    "updatedAt": 1788768277494,
    "isWalkin": true,
    "date": "2026-09-05"
  },
  "walkin_1788768280074_hmg8s": {
    "date": "2026-09-05",
    "updatedAt": 1788768295377,
    "isWalkin": true,
    "names": [
      "박소연",
      "유사랑",
      "유은수"
    ],
    "addedAt": 1788768280074,
    "time": "15:00",
    "note": ""
  },
  "walkin_1788768292682_5n1ix": {
    "note": "",
    "time": "15:00",
    "date": "2026-09-05",
    "names": [
      "강내용",
      "강리안",
      "강우진",
      "김다영"
    ],
    "addedAt": 1788768292682,
    "updatedAt": 1788768326816,
    "isWalkin": true
  },
  "walkin_1788768327567_n4875": {
    "isWalkin": true,
    "date": "2026-09-05",
    "time": "15:00",
    "note": "",
    "updatedAt": 1788768336184,
    "addedAt": 1788768327567,
    "names": [
      "김다솔",
      "박채원"
    ]
  },
  "walkin_1788768337206_83xp9": {
    "date": "2026-09-05",
    "names": [
      "김가온",
      "김동영",
      "김보람",
      "김지온"
    ],
    "addedAt": 1788768337206,
    "note": "",
    "time": "15:00",
    "isWalkin": true,
    "updatedAt": 1788768576905
  },
  "walkin_1789202228898_rjd3g": {
    "date": "2026-09-12",
    "updatedAt": 1789206834783,
    "note": "",
    "time": "10:00",
    "isWalkin": true,
    "names": [
      "박성배",
      "박준후",
      "윤혜진"
    ],
    "addedAt": 1789202228898
  },
  "walkin_1789202229898_zsqsz": {
    "date": "2026-09-12",
    "names": [
      "이윤찬",
      "이지후",
      "이예준"
    ],
    "updatedAt": 1789206887312,
    "addedAt": 1789202229898,
    "isWalkin": true,
    "note": "",
    "time": "10:00"
  },
  "walkin_1789202231898_ir50p": {
    "time": "11:00",
    "note": "",
    "names": [
      "전재현",
      "명수정",
      "전세하",
      "전세연"
    ],
    "addedAt": 1789202231898,
    "isWalkin": true,
    "date": "2026-09-12",
    "updatedAt": 1789206950873
  },
  "walkin_1789202232898_1ietw": {
    "note": "",
    "addedAt": 1789202232898,
    "time": "11:00",
    "updatedAt": 1789202241898,
    "isWalkin": true,
    "names": [
      "김정희",
      "신이준"
    ],
    "date": "2026-09-12"
  },
  "walkin_1789202233898_s00vb": {
    "names": [
      "박지영",
      "손재환",
      "손서연"
    ],
    "note": "",
    "time": "11:00",
    "date": "2026-09-12",
    "addedAt": 1789202233898,
    "isWalkin": true,
    "updatedAt": 1789207199365
  },
  "walkin_1789202236898_8t47w": {
    "updatedAt": 1789207632080,
    "addedAt": 1789202236898,
    "note": "",
    "names": [
      "유종욱",
      "박소연",
      "유사랑",
      "유은수",
      "유아람"
    ],
    "isWalkin": true,
    "time": "13:00",
    "date": "2026-09-12"
  },
  "walkin_1789202237898_ur3bm": {
    "names": [
      "이사라",
      "임연우"
    ],
    "addedAt": 1789202237898,
    "note": "",
    "time": "14:00",
    "date": "2026-09-12",
    "isWalkin": true,
    "updatedAt": 1789202241898
  },
  "walkin_1789202238898_fe053": {
    "time": "14:00",
    "updatedAt": 1789202241898,
    "names": [
      "이하온"
    ],
    "note": "",
    "isWalkin": true,
    "addedAt": 1789202238898,
    "date": "2026-09-12"
  },
  "walkin_1789202239898_6jojm": {
    "updatedAt": 1789207666889,
    "isWalkin": true,
    "date": "2026-09-12",
    "addedAt": 1789202239898,
    "names": [
      "최시유",
      "변서율",
      "변민건"
    ],
    "note": "",
    "time": "14:00"
  },
  "walkin_1789202240898_qw1j7": {
    "date": "2026-09-12",
    "updatedAt": 1789202241898,
    "names": [
      "권소예",
      "최현주",
      "권민오"
    ],
    "isWalkin": true,
    "time": "15:00",
    "addedAt": 1789202240898,
    "note": ""
  },
  "walkin_1789970315908_1be11": {
    "note": "",
    "names": [
      "홍영미",
      "이건오"
    ],
    "time": "10:00",
    "addedAt": 1789970315908,
    "date": "2026-09-19",
    "isWalkin": true,
    "updatedAt": 1789970335214
  },
  "walkin_1789970340300_aim96": {
    "names": [
      "양정모",
      "양하윤",
      "양하나",
      "린찬헝"
    ],
    "note": "",
    "time": "10:00",
    "updatedAt": 1789970357591,
    "date": "2026-09-19",
    "isWalkin": true,
    "addedAt": 1789970340300
  },
  "walkin_1789970477115_7w1yo": {
    "date": "2026-09-19",
    "isWalkin": true,
    "addedAt": 1789970477115,
    "names": [
      "안정호",
      "한하나",
      "안다빈"
    ],
    "time": "10:00",
    "updatedAt": 1789970501426,
    "note": ""
  },
  "walkin_1789970675788_7smbk": {
    "time": "11:00",
    "note": "",
    "names": [
      "양동민",
      "양지오",
      "김소망"
    ],
    "addedAt": 1789970675788,
    "date": "2026-09-19",
    "updatedAt": 1789970698954,
    "isWalkin": true
  },
  "walkin_1789970702436_3lpeu": {
    "names": [
      "전옥희",
      "김현민",
      "최윤"
    ],
    "time": "11:00",
    "updatedAt": 1789970714837,
    "note": "",
    "addedAt": 1789970702436,
    "date": "2026-09-19",
    "isWalkin": true
  },
  "walkin_1789970719316_h64kk": {
    "addedAt": 1789970719316,
    "note": "",
    "names": [
      "문종민",
      "문종원",
      "유이슬"
    ],
    "time": "11:00",
    "updatedAt": 1789970731234,
    "isWalkin": true,
    "date": "2026-09-19"
  },
  "walkin_1789970765396_ewz37": {
    "isWalkin": true,
    "updatedAt": 1789970783933,
    "time": "11:00",
    "addedAt": 1789970765396,
    "note": "",
    "names": [
      "변희진",
      "탁윤진",
      "탁이진"
    ],
    "date": "2026-09-19"
  },
  "walkin_1789970874808_uw12u": {
    "time": "11:00",
    "note": "",
    "names": [
      "서준희",
      "정루호",
      "정루아",
      "한이서",
      "한이준",
      "김새롬",
      "양하영",
      "양하린"
    ],
    "date": "2026-09-19",
    "addedAt": 1789970874808,
    "isWalkin": true,
    "updatedAt": 1789971031434
  },
  "walkin_1789970928072_4t44g": {
    "names": [
      "김이도",
      "이혜정"
    ],
    "time": "11:00",
    "note": "",
    "addedAt": 1789970928072,
    "date": "2026-09-19",
    "updatedAt": 1789971036175,
    "isWalkin": true
  },
  "walkin_1789971007216_bzu0y": {
    "time": "11:00",
    "addedAt": 1789971007216,
    "note": "",
    "names": [
      "최은희",
      "김민우",
      "김루아"
    ],
    "isWalkin": true,
    "updatedAt": 1789971037901,
    "date": "2026-09-19"
  },
  "walkin_1789971072852_7i3bg": {
    "note": "",
    "names": [
      "오연준",
      "강현희",
      "오찬희"
    ],
    "time": "11:00",
    "addedAt": 1789971072852,
    "updatedAt": 1789971088189,
    "isWalkin": true,
    "date": "2026-09-19"
  },
  "walkin_1789971184244_lqh2n": {
    "updatedAt": 1789971194114,
    "isWalkin": true,
    "date": "2026-09-19",
    "time": "12:00",
    "note": "",
    "addedAt": 1789971184244,
    "names": [
      "박해균",
      "박준우",
      "신순옥"
    ]
  },
  "walkin_1789971234632_8e5kl": {
    "note": "",
    "time": "12:00",
    "isWalkin": true,
    "updatedAt": 1789971253381,
    "addedAt": 1789971234632,
    "names": [
      "박영미",
      "김은정",
      "정유준",
      "정이준"
    ],
    "date": "2026-09-19"
  },
  "walkin_1789971348560_rlhzy": {
    "date": "2026-09-19",
    "isWalkin": true,
    "names": [
      "김민우",
      "김루아",
      "김도아",
      "최은희"
    ],
    "updatedAt": 1789971362733,
    "time": "13:00",
    "addedAt": 1789971348560,
    "note": ""
  },
  "walkin_1789971397320_0pu3k": {
    "addedAt": 1789971397320,
    "date": "2026-09-19",
    "isWalkin": true,
    "time": "14:00",
    "note": "",
    "updatedAt": 1789971411003,
    "names": [
      "봉준형",
      "김나래",
      "봉성진",
      "봉성연"
    ]
  },
  "walkin_1789971413863_95feg": {
    "date": "2026-09-19",
    "time": "14:00",
    "note": "",
    "updatedAt": 1789971423109,
    "isWalkin": true,
    "names": [
      "박소라",
      "안성민",
      "안유민"
    ],
    "addedAt": 1789971413863
  },
  "walkin_1789971425000_a9tp5": {
    "note": "",
    "time": "14:00",
    "date": "2026-09-19",
    "names": [
      "정재훈",
      "김애령",
      "정다율"
    ],
    "updatedAt": 1789971455453,
    "addedAt": 1789971425000,
    "isWalkin": true
  },
  "walkin_1789971472880_6b6cx": {
    "isWalkin": true,
    "updatedAt": 1789971559474,
    "note": "",
    "time": "14:00",
    "addedAt": 1789971472880,
    "names": [
      "홍주희",
      "탁원규",
      "탁은",
      "탁율"
    ],
    "date": "2026-09-19"
  },
  "walkin_1789972155348_3s0t4": {
    "isWalkin": true,
    "time": "14:00",
    "note": "",
    "addedAt": 1789972155348,
    "names": [
      "이영주",
      "김교현",
      "김찬오",
      "김지오",
      "김태오"
    ],
    "updatedAt": 1789972182277,
    "date": "2026-09-19"
  },
  "walkin_1789972223051_jfy86": {
    "isWalkin": true,
    "names": [
      "윤소예",
      "고다솔"
    ],
    "updatedAt": 1789972229472,
    "addedAt": 1789972223051,
    "note": "",
    "time": "14:00",
    "date": "2026-09-19"
  },
  "walkin_1789972315675_gi3k7": {
    "updatedAt": 1789972385565,
    "isWalkin": true,
    "date": "2026-09-19",
    "names": [
      "안정희",
      "최솜이",
      "최윤",
      "김민지",
      "이우성",
      "남가인",
      "최이현"
    ],
    "time": "14:00",
    "addedAt": 1789972315675,
    "note": ""
  },
  "walkin_1789972357363_fzww3": {
    "isWalkin": true,
    "time": "14:00",
    "names": [
      "주예나",
      "주예준"
    ],
    "note": "",
    "addedAt": 1789972357363,
    "updatedAt": 1789972388145,
    "date": "2026-09-19"
  },
  "walkin_1789972371276_77s3c": {
    "date": "2026-09-19",
    "updatedAt": 1789972404136,
    "addedAt": 1789972371276,
    "names": [
      "성하준",
      "성하윤",
      "성하은",
      "차세아"
    ],
    "note": "",
    "isWalkin": true,
    "time": "14:00"
  },
  "walkin_1789972980732_k7yum": {
    "updatedAt": 1789972992729,
    "date": "2026-09-19",
    "addedAt": 1789972980732,
    "note": "",
    "time": "10:00",
    "isWalkin": true,
    "names": [
      "박이현"
    ]
  }
};

export default checkinEntries;
