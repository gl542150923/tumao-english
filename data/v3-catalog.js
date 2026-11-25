/* 兔猫英语小镇 V3.0 全量 36 集课程、水粉贴纸与陪玩目录 */
window.TUMAO_V3 = {
  "sfx": {
    "chime": "./audio/v3/sfx/chime.mp3",
    "pop": "./audio/v3/sfx/pop.mp3",
    "gentle": "./audio/v3/sfx/gentle.mp3",
    "fanfare": "./audio/v3/sfx/fanfare.mp3",
    "micOn": "./audio/v3/sfx/mic_on.mp3"
  },
  "islands": [
    {
      "id": "全部",
      "label": "全部小岛",
      "tint": "#2E4540",
      "soft": "#E6F2EA"
    },
    {
      "id": "基础认知",
      "label": "基础认知岛",
      "tint": "#D9822B",
      "soft": "#FFF1D6"
    },
    {
      "id": "身体日常",
      "label": "身体日常岛",
      "tint": "#558B2F",
      "soft": "#ECF6DC"
    },
    {
      "id": "家园出行",
      "label": "家园出行岛",
      "tint": "#2B6CB0",
      "soft": "#E4F2FE"
    },
    {
      "id": "美味餐桌",
      "label": "美味餐桌岛",
      "tint": "#C54B3C",
      "soft": "#FDE8E4"
    },
    {
      "id": "情商社交",
      "label": "情商社交岛",
      "tint": "#7B4B94",
      "soft": "#F3E8FA"
    },
    {
      "id": "自然探索",
      "label": "自然探索岛",
      "tint": "#1F7A65",
      "soft": "#E0F5EE"
    }
  ],
  "stageEpisodes": {
    "EP001": {
      "id": "EP001",
      "num": 1,
      "title": "认识颜色",
      "enTitle": "Colors",
      "subtitle": "第 1 集 · 暖阳小镇广场",
      "island": "基础认知",
      "hook": "逛超市挑水果积木 · 4 个基础颜色脱口而出",
      "theme": {
        "paper": "#FFF8EA",
        "accent": "#D97724",
        "accentLip": "#9A4E10",
        "pillBg": "#FFE9C2",
        "ink": "#4A2C14"
      },
      "defaultScene": "./img/v3/scenes/ep001_main.jpg",
      "sceneLabel": "暖阳小镇广场",
      "worksheet": "./worksheets/EP001-亲子涂色连线卡.jpg",
      "parentScript": [
        {
          "role": "👩 爸妈在生活场景里指一指",
          "line": "Look! Can you find: Red?（留足 3 秒让宝贝观察）"
        },
        {
          "role": "🧒 引导宝贝手指点并开口",
          "line": "Red! A red apple!"
        },
        {
          "role": "👩 换一个对比物继续玩",
          "line": "Awesome! How about Blue? Blue! A blue boot!"
        },
        {
          "role": "💡 本集不费妈陪玩锦囊",
          "line": "拿 4 种颜色的水果或积木问宝贝：'Can you find the red one?'，等 3 秒再击掌！"
        }
      ],
      "words": [
        {
          "key": "red",
          "word": "Red",
          "zh": "红色 · 红苹果",
          "sentence": "Red! A red apple!",
          "highlight": "Red",
          "color": "#E5533D",
          "soft": "#FFEAE6",
          "cardImg": "./img/v3/cards/EP001/red.png",
          "sceneImg": "./img/v3/scenes/ep001_main.jpg",
          "sceneTag": "暖阳小镇广场 · 红色",
          "distractor": "blue",
          "leadAudio": "./audio/v3/EP001/lead_red.mp3",
          "teachAudio": "./audio/v3/EP001/teach_red.mp3",
          "quizAudio": "./audio/v3/EP001/quiz_red.mp3",
          "ansAudio": "./audio/v3/EP001/ans_red.mp3"
        },
        {
          "key": "blue",
          "word": "Blue",
          "zh": "蓝色 · 蓝雨靴",
          "sentence": "Blue! A blue boot!",
          "highlight": "Blue",
          "color": "#357EC7",
          "soft": "#E5F2FF",
          "cardImg": "./img/v3/cards/EP001/blue.png",
          "sceneImg": "./img/v3/scenes/ep001_main.jpg",
          "sceneTag": "暖阳小镇广场 · 蓝色",
          "distractor": "yellow",
          "leadAudio": "./audio/v3/EP001/lead_blue.mp3",
          "teachAudio": "./audio/v3/EP001/teach_blue.mp3",
          "quizAudio": "./audio/v3/EP001/quiz_blue.mp3",
          "ansAudio": "./audio/v3/EP001/ans_blue.mp3"
        },
        {
          "key": "yellow",
          "word": "Yellow",
          "zh": "黄色 · 黄香蕉",
          "sentence": "Yellow! A yellow banana!",
          "highlight": "Yellow",
          "color": "#D98A16",
          "soft": "#FFF5D6",
          "cardImg": "./img/v3/cards/EP001/yellow.png",
          "sceneImg": "./img/v3/scenes/ep001_main.jpg",
          "sceneTag": "暖阳小镇广场 · 黄色",
          "distractor": "green",
          "leadAudio": "./audio/v3/EP001/lead_yellow.mp3",
          "teachAudio": "./audio/v3/EP001/teach_yellow.mp3",
          "quizAudio": "./audio/v3/EP001/quiz_yellow.mp3",
          "ansAudio": "./audio/v3/EP001/ans_yellow.mp3"
        },
        {
          "key": "green",
          "word": "Green",
          "zh": "绿色 · 绿树叶",
          "sentence": "Green! A green leaf!",
          "highlight": "Green",
          "color": "#3E9B52",
          "soft": "#E4F7E8",
          "cardImg": "./img/v3/cards/EP001/green.png",
          "sceneImg": "./img/v3/scenes/ep001_main.jpg",
          "sceneTag": "暖阳小镇广场 · 绿色",
          "distractor": "red",
          "leadAudio": "./audio/v3/EP001/lead_green.mp3",
          "teachAudio": "./audio/v3/EP001/teach_green.mp3",
          "quizAudio": "./audio/v3/EP001/quiz_green.mp3",
          "ansAudio": "./audio/v3/EP001/ans_green.mp3"
        }
      ]
    },
    "EP002": {
      "id": "EP002",
      "num": 2,
      "title": "认识身体",
      "enTitle": "My Body",
      "subtitle": "第 2 集 · 阳光洗漱镜前",
      "island": "身体日常",
      "hook": "早晚洗脸照镜子 · 边指五官边玩英文口令操",
      "theme": {
        "paper": "#F6FBEF",
        "accent": "#4D8B31",
        "accentLip": "#2E5B1B",
        "pillBg": "#E5F5D4",
        "ink": "#243E16"
      },
      "defaultScene": "./img/v3/scenes/ep002_main.jpg",
      "sceneLabel": "阳光洗漱镜前",
      "worksheet": "./worksheets/EP002-亲子涂色连线卡.jpg",
      "parentScript": [
        {
          "role": "👩 爸妈在生活场景里指一指",
          "line": "Look! Can you find: Head?（留足 3 秒让宝贝观察）"
        },
        {
          "role": "🧒 引导宝贝手指点并开口",
          "line": "Head! Touch your head!"
        },
        {
          "role": "👩 换一个对比物继续玩",
          "line": "Awesome! How about Eyes? Eyes! Look at my eyes!"
        },
        {
          "role": "💡 本集不费妈陪玩锦囊",
          "line": "照镜子时和宝贝比赛：喊 'Touch your nose!'，爸妈故意摸错耳朵逗娃纠正！"
        }
      ],
      "words": [
        {
          "key": "head",
          "word": "Head",
          "zh": "小脑袋",
          "sentence": "Head! Touch your head!",
          "highlight": "Head",
          "color": "#E5533D",
          "soft": "#FFEAE6",
          "cardImg": "./img/v3/cards/EP002/head.png",
          "sceneImg": "./img/v3/scenes/ep002_main.jpg",
          "sceneTag": "阳光洗漱镜前 · 小脑袋",
          "distractor": "eyes",
          "leadAudio": "./audio/v3/EP002/lead_head.mp3",
          "teachAudio": "./audio/v3/EP002/teach_head.mp3",
          "quizAudio": "./audio/v3/EP002/quiz_head.mp3",
          "ansAudio": "./audio/v3/EP002/ans_head.mp3"
        },
        {
          "key": "eyes",
          "word": "Eyes",
          "zh": "大眼睛",
          "sentence": "Eyes! Look at my eyes!",
          "highlight": "Eyes",
          "color": "#357EC7",
          "soft": "#E5F2FF",
          "cardImg": "./img/v3/cards/EP002/eyes.png",
          "sceneImg": "./img/v3/scenes/ep002_main.jpg",
          "sceneTag": "阳光洗漱镜前 · 大眼睛",
          "distractor": "nose",
          "leadAudio": "./audio/v3/EP002/lead_eyes.mp3",
          "teachAudio": "./audio/v3/EP002/teach_eyes.mp3",
          "quizAudio": "./audio/v3/EP002/quiz_eyes.mp3",
          "ansAudio": "./audio/v3/EP002/ans_eyes.mp3"
        },
        {
          "key": "nose",
          "word": "Nose",
          "zh": "小鼻子",
          "sentence": "Nose! Touch your nose!",
          "highlight": "Nose",
          "color": "#D98A16",
          "soft": "#FFF5D6",
          "cardImg": "./img/v3/cards/EP002/nose.png",
          "sceneImg": "./img/v3/scenes/ep002_main.jpg",
          "sceneTag": "阳光洗漱镜前 · 小鼻子",
          "distractor": "mouth",
          "leadAudio": "./audio/v3/EP002/lead_nose.mp3",
          "teachAudio": "./audio/v3/EP002/teach_nose.mp3",
          "quizAudio": "./audio/v3/EP002/quiz_nose.mp3",
          "ansAudio": "./audio/v3/EP002/ans_nose.mp3"
        },
        {
          "key": "mouth",
          "word": "Mouth",
          "zh": "小嘴巴",
          "sentence": "Mouth! Open your mouth!",
          "highlight": "Mouth",
          "color": "#3E9B52",
          "soft": "#E4F7E8",
          "cardImg": "./img/v3/cards/EP002/mouth.png",
          "sceneImg": "./img/v3/scenes/ep002_main.jpg",
          "sceneTag": "阳光洗漱镜前 · 小嘴巴",
          "distractor": "ears",
          "leadAudio": "./audio/v3/EP002/lead_mouth.mp3",
          "teachAudio": "./audio/v3/EP002/teach_mouth.mp3",
          "quizAudio": "./audio/v3/EP002/quiz_mouth.mp3",
          "ansAudio": "./audio/v3/EP002/ans_mouth.mp3"
        },
        {
          "key": "ears",
          "word": "Ears",
          "zh": "长耳朵",
          "sentence": "Ears! Touch your ears!",
          "highlight": "Ears",
          "color": "#8B5CF6",
          "soft": "#EFE9FE",
          "cardImg": "./img/v3/cards/EP002/ears.png",
          "sceneImg": "./img/v3/scenes/ep002_main.jpg",
          "sceneTag": "阳光洗漱镜前 · 长耳朵",
          "distractor": "head",
          "leadAudio": "./audio/v3/EP002/lead_ears.mp3",
          "teachAudio": "./audio/v3/EP002/teach_ears.mp3",
          "quizAudio": "./audio/v3/EP002/quiz_ears.mp3",
          "ansAudio": "./audio/v3/EP002/ans_ears.mp3"
        }
      ]
    },
    "EP003": {
      "id": "EP003",
      "num": 3,
      "title": "认识家人",
      "enTitle": "My Family",
      "subtitle": "第 3 集 · 温馨客厅相册角",
      "island": "情商社交",
      "hook": "翻开家庭相册 · 大方用英文介绍爸爸妈妈",
      "theme": {
        "paper": "#FAF5FE",
        "accent": "#7B4B94",
        "accentLip": "#512B66",
        "pillBg": "#EFE3FA",
        "ink": "#3B1D4E"
      },
      "defaultScene": "./img/v3/scenes/ep003_main.jpg",
      "sceneLabel": "温馨客厅相册角",
      "worksheet": "./worksheets/EP003-亲子涂色连线卡.jpg",
      "parentScript": [
        {
          "role": "👩 爸妈在生活场景里指一指",
          "line": "Look! Can you find: Mom?（留足 3 秒让宝贝观察）"
        },
        {
          "role": "🧒 引导宝贝手指点并开口",
          "line": "Mom! This is my mom!"
        },
        {
          "role": "👩 换一个对比物继续玩",
          "line": "Awesome! How about Dad? Dad! This is my dad!"
        },
        {
          "role": "💡 本集不费妈陪玩锦囊",
          "line": "翻开手机全家福照片，让宝贝当小小介绍员：'This is my Mom / Dad!'"
        }
      ],
      "words": [
        {
          "key": "mom",
          "word": "Mom",
          "zh": "妈妈",
          "sentence": "Mom! This is my mom!",
          "highlight": "Mom",
          "color": "#E5533D",
          "soft": "#FFEAE6",
          "cardImg": "./img/v3/cards/EP003/mom.png",
          "sceneImg": "./img/v3/scenes/ep003_main.jpg",
          "sceneTag": "温馨客厅相册角 · 妈妈",
          "distractor": "dad",
          "leadAudio": "./audio/v3/EP003/lead_mom.mp3",
          "teachAudio": "./audio/v3/EP003/teach_mom.mp3",
          "quizAudio": "./audio/v3/EP003/quiz_mom.mp3",
          "ansAudio": "./audio/v3/EP003/ans_mom.mp3"
        },
        {
          "key": "dad",
          "word": "Dad",
          "zh": "爸爸",
          "sentence": "Dad! This is my dad!",
          "highlight": "Dad",
          "color": "#357EC7",
          "soft": "#E5F2FF",
          "cardImg": "./img/v3/cards/EP003/dad.png",
          "sceneImg": "./img/v3/scenes/ep003_main.jpg",
          "sceneTag": "温馨客厅相册角 · 爸爸",
          "distractor": "brother",
          "leadAudio": "./audio/v3/EP003/lead_dad.mp3",
          "teachAudio": "./audio/v3/EP003/teach_dad.mp3",
          "quizAudio": "./audio/v3/EP003/quiz_dad.mp3",
          "ansAudio": "./audio/v3/EP003/ans_dad.mp3"
        },
        {
          "key": "brother",
          "word": "Brother",
          "zh": "哥哥/弟弟",
          "sentence": "Brother! My brother!",
          "highlight": "Brother",
          "color": "#D98A16",
          "soft": "#FFF5D6",
          "cardImg": "./img/v3/cards/EP003/brother.png",
          "sceneImg": "./img/v3/scenes/ep003_main.jpg",
          "sceneTag": "温馨客厅相册角 · 哥哥/弟弟",
          "distractor": "sister",
          "leadAudio": "./audio/v3/EP003/lead_brother.mp3",
          "teachAudio": "./audio/v3/EP003/teach_brother.mp3",
          "quizAudio": "./audio/v3/EP003/quiz_brother.mp3",
          "ansAudio": "./audio/v3/EP003/ans_brother.mp3"
        },
        {
          "key": "sister",
          "word": "Sister",
          "zh": "姐姐/妹妹",
          "sentence": "Sister! My sister!",
          "highlight": "Sister",
          "color": "#3E9B52",
          "soft": "#E4F7E8",
          "cardImg": "./img/v3/cards/EP003/sister.png",
          "sceneImg": "./img/v3/scenes/ep003_main.jpg",
          "sceneTag": "温馨客厅相册角 · 姐姐/妹妹",
          "distractor": "mom",
          "leadAudio": "./audio/v3/EP003/lead_sister.mp3",
          "teachAudio": "./audio/v3/EP003/teach_sister.mp3",
          "quizAudio": "./audio/v3/EP003/quiz_sister.mp3",
          "ansAudio": "./audio/v3/EP003/ans_sister.mp3"
        }
      ]
    },
    "EP004": {
      "id": "EP004",
      "num": 4,
      "title": "认识常见动物",
      "enTitle": "Cute Animals",
      "subtitle": "第 4 集 · 阳光青草花园",
      "island": "自然探索",
      "hook": "听叫声学动作 · 4 只萌宠好朋友轻松认",
      "theme": {
        "paper": "#F2FBF8",
        "accent": "#1F7A65",
        "accentLip": "#124E40",
        "pillBg": "#DCF5EE",
        "ink": "#134035"
      },
      "defaultScene": "./img/v3/scenes/ep004_main.jpg",
      "sceneLabel": "阳光青草花园",
      "worksheet": "./worksheets/EP004-亲子涂色连线卡.jpg",
      "parentScript": [
        {
          "role": "👩 爸妈在生活场景里指一指",
          "line": "Look! Can you find: Cat?（留足 3 秒让宝贝观察）"
        },
        {
          "role": "🧒 引导宝贝手指点并开口",
          "line": "Cat! Meow, a cute cat!"
        },
        {
          "role": "👩 换一个对比物继续玩",
          "line": "Awesome! How about Dog? Dog! Woof, a happy dog!"
        },
        {
          "role": "💡 本集不费妈陪玩锦囊",
          "line": "读到 Duck 一起学小鸭摇摇摆摆，读到 Rabbit 一起双脚蹦两下，全身动起来记忆最牢！"
        }
      ],
      "words": [
        {
          "key": "cat",
          "word": "Cat",
          "zh": "小猫咪",
          "sentence": "Cat! Meow, a cute cat!",
          "highlight": "Cat",
          "color": "#E5533D",
          "soft": "#FFEAE6",
          "cardImg": "./img/v3/cards/EP004/cat.png",
          "sceneImg": "./img/v3/scenes/ep004_main.jpg",
          "sceneTag": "阳光青草花园 · 小猫咪",
          "distractor": "dog",
          "leadAudio": "./audio/v3/EP004/lead_cat.mp3",
          "teachAudio": "./audio/v3/EP004/teach_cat.mp3",
          "quizAudio": "./audio/v3/EP004/quiz_cat.mp3",
          "ansAudio": "./audio/v3/EP004/ans_cat.mp3"
        },
        {
          "key": "dog",
          "word": "Dog",
          "zh": "小狗狗",
          "sentence": "Dog! Woof, a happy dog!",
          "highlight": "Dog",
          "color": "#357EC7",
          "soft": "#E5F2FF",
          "cardImg": "./img/v3/cards/EP004/dog.png",
          "sceneImg": "./img/v3/scenes/ep004_main.jpg",
          "sceneTag": "阳光青草花园 · 小狗狗",
          "distractor": "duck",
          "leadAudio": "./audio/v3/EP004/lead_dog.mp3",
          "teachAudio": "./audio/v3/EP004/teach_dog.mp3",
          "quizAudio": "./audio/v3/EP004/quiz_dog.mp3",
          "ansAudio": "./audio/v3/EP004/ans_dog.mp3"
        },
        {
          "key": "duck",
          "word": "Duck",
          "zh": "小黄鸭",
          "sentence": "Duck! Quack, a yellow duck!",
          "highlight": "Duck",
          "color": "#D98A16",
          "soft": "#FFF5D6",
          "cardImg": "./img/v3/cards/EP004/duck.png",
          "sceneImg": "./img/v3/scenes/ep004_main.jpg",
          "sceneTag": "阳光青草花园 · 小黄鸭",
          "distractor": "rabbit",
          "leadAudio": "./audio/v3/EP004/lead_duck.mp3",
          "teachAudio": "./audio/v3/EP004/teach_duck.mp3",
          "quizAudio": "./audio/v3/EP004/quiz_duck.mp3",
          "ansAudio": "./audio/v3/EP004/ans_duck.mp3"
        },
        {
          "key": "rabbit",
          "word": "Rabbit",
          "zh": "小兔子",
          "sentence": "Rabbit! Hop, a cute rabbit!",
          "highlight": "Rabbit",
          "color": "#3E9B52",
          "soft": "#E4F7E8",
          "cardImg": "./img/v3/cards/EP004/rabbit.png",
          "sceneImg": "./img/v3/scenes/ep004_main.jpg",
          "sceneTag": "阳光青草花园 · 小兔子",
          "distractor": "cat",
          "leadAudio": "./audio/v3/EP004/lead_rabbit.mp3",
          "teachAudio": "./audio/v3/EP004/teach_rabbit.mp3",
          "quizAudio": "./audio/v3/EP004/quiz_rabbit.mp3",
          "ansAudio": "./audio/v3/EP004/ans_rabbit.mp3"
        }
      ]
    },
    "EP005": {
      "id": "EP005",
      "num": 5,
      "title": "认识水果",
      "enTitle": "Yummy Fruits",
      "subtitle": "第 5 集 · 缤纷水果小摊",
      "island": "美味餐桌",
      "hook": "饭后水果小摊开张 · 先喊英文再吃果果",
      "theme": {
        "paper": "#FFF6F4",
        "accent": "#C94A38",
        "accentLip": "#8E2B1D",
        "pillBg": "#FDE4DF",
        "ink": "#4F1D16"
      },
      "defaultScene": "./img/v3/scenes/ep005_main.jpg",
      "sceneLabel": "缤纷水果小摊",
      "worksheet": "./worksheets/EP005-亲子涂色连线卡.jpg",
      "parentScript": [
        {
          "role": "👩 爸妈在生活场景里指一指",
          "line": "Look! Can you find: Apple?（留足 3 秒让宝贝观察）"
        },
        {
          "role": "🧒 引导宝贝手指点并开口",
          "line": "Apple! A sweet red apple!"
        },
        {
          "role": "👩 换一个对比物继续玩",
          "line": "Awesome! How about Banana? Banana! A yellow banana!"
        },
        {
          "role": "💡 本集不费妈陪玩锦囊",
          "line": "切好果盘扮水果店老板问：'Apple or banana?'，宝贝说出英文就奖励吃一块！"
        }
      ],
      "words": [
        {
          "key": "apple",
          "word": "Apple",
          "zh": "红苹果",
          "sentence": "Apple! A sweet red apple!",
          "highlight": "Apple",
          "color": "#E5533D",
          "soft": "#FFEAE6",
          "cardImg": "./img/v3/cards/EP005/apple.png",
          "sceneImg": "./img/v3/scenes/ep005_main.jpg",
          "sceneTag": "缤纷水果小摊 · 红苹果",
          "distractor": "banana",
          "leadAudio": "./audio/v3/EP005/lead_apple.mp3",
          "teachAudio": "./audio/v3/EP005/teach_apple.mp3",
          "quizAudio": "./audio/v3/EP005/quiz_apple.mp3",
          "ansAudio": "./audio/v3/EP005/ans_apple.mp3"
        },
        {
          "key": "banana",
          "word": "Banana",
          "zh": "黄香蕉",
          "sentence": "Banana! A yellow banana!",
          "highlight": "Banana",
          "color": "#357EC7",
          "soft": "#E5F2FF",
          "cardImg": "./img/v3/cards/EP005/banana.png",
          "sceneImg": "./img/v3/scenes/ep005_main.jpg",
          "sceneTag": "缤纷水果小摊 · 黄香蕉",
          "distractor": "orange",
          "leadAudio": "./audio/v3/EP005/lead_banana.mp3",
          "teachAudio": "./audio/v3/EP005/teach_banana.mp3",
          "quizAudio": "./audio/v3/EP005/quiz_banana.mp3",
          "ansAudio": "./audio/v3/EP005/ans_banana.mp3"
        },
        {
          "key": "orange",
          "word": "Orange",
          "zh": "甜橙子",
          "sentence": "Orange! A juicy orange!",
          "highlight": "Orange",
          "color": "#D98A16",
          "soft": "#FFF5D6",
          "cardImg": "./img/v3/cards/EP005/orange.png",
          "sceneImg": "./img/v3/scenes/ep005_main.jpg",
          "sceneTag": "缤纷水果小摊 · 甜橙子",
          "distractor": "grape",
          "leadAudio": "./audio/v3/EP005/lead_orange.mp3",
          "teachAudio": "./audio/v3/EP005/teach_orange.mp3",
          "quizAudio": "./audio/v3/EP005/quiz_orange.mp3",
          "ansAudio": "./audio/v3/EP005/ans_orange.mp3"
        },
        {
          "key": "grape",
          "word": "Grapes",
          "zh": "紫葡萄",
          "sentence": "Grapes! Sweet purple grapes!",
          "highlight": "Grapes",
          "color": "#3E9B52",
          "soft": "#E4F7E8",
          "cardImg": "./img/v3/cards/EP005/grape.png",
          "sceneImg": "./img/v3/scenes/ep005_main.jpg",
          "sceneTag": "缤纷水果小摊 · 紫葡萄",
          "distractor": "pear",
          "leadAudio": "./audio/v3/EP005/lead_grape.mp3",
          "teachAudio": "./audio/v3/EP005/teach_grape.mp3",
          "quizAudio": "./audio/v3/EP005/quiz_grape.mp3",
          "ansAudio": "./audio/v3/EP005/ans_grape.mp3"
        },
        {
          "key": "pear",
          "word": "Pear",
          "zh": "大黄梨",
          "sentence": "Pear! A crisp pear!",
          "highlight": "Pear",
          "color": "#8B5CF6",
          "soft": "#EFE9FE",
          "cardImg": "./img/v3/cards/EP005/pear.png",
          "sceneImg": "./img/v3/scenes/ep005_main.jpg",
          "sceneTag": "缤纷水果小摊 · 大黄梨",
          "distractor": "strawberry",
          "leadAudio": "./audio/v3/EP005/lead_pear.mp3",
          "teachAudio": "./audio/v3/EP005/teach_pear.mp3",
          "quizAudio": "./audio/v3/EP005/quiz_pear.mp3",
          "ansAudio": "./audio/v3/EP005/ans_pear.mp3"
        },
        {
          "key": "strawberry",
          "word": "Strawberry",
          "zh": "红草莓",
          "sentence": "Strawberry! Yummy strawberry!",
          "highlight": "Strawberry",
          "color": "#DB2777",
          "soft": "#FCE7F3",
          "cardImg": "./img/v3/cards/EP005/strawberry.png",
          "sceneImg": "./img/v3/scenes/ep005_main.jpg",
          "sceneTag": "缤纷水果小摊 · 红草莓",
          "distractor": "apple",
          "leadAudio": "./audio/v3/EP005/lead_strawberry.mp3",
          "teachAudio": "./audio/v3/EP005/teach_strawberry.mp3",
          "quizAudio": "./audio/v3/EP005/quiz_strawberry.mp3",
          "ansAudio": "./audio/v3/EP005/ans_strawberry.mp3"
        }
      ]
    },
    "EP006": {
      "id": "EP006",
      "num": 6,
      "title": "认识蔬菜",
      "enTitle": "Fresh Veggies",
      "subtitle": "第 6 集 · 农夫蔬菜小铺",
      "island": "美味餐桌",
      "hook": "帮爸妈择菜逛超市 · 爱上彩虹蔬菜不挑食",
      "theme": {
        "paper": "#FFF6F4",
        "accent": "#C94A38",
        "accentLip": "#8E2B1D",
        "pillBg": "#FDE4DF",
        "ink": "#4F1D16"
      },
      "defaultScene": "./img/v3/scenes/ep006_main.jpg",
      "sceneLabel": "农夫蔬菜小铺",
      "worksheet": "./worksheets/EP006-亲子涂色连线卡.jpg",
      "parentScript": [
        {
          "role": "👩 爸妈在生活场景里指一指",
          "line": "Look! Can you find: Carrot?（留足 3 秒让宝贝观察）"
        },
        {
          "role": "🧒 引导宝贝手指点并开口",
          "line": "Carrot! A crunchy carrot!"
        },
        {
          "role": "👩 换一个对比物继续玩",
          "line": "Awesome! How about Broccoli? Broccoli! Green broccoli!"
        },
        {
          "role": "💡 本集不费妈陪玩锦囊",
          "line": "买菜回家请宝贝当小帮手：'Find the carrot!'，从购物袋里掏出来超有参与感！"
        }
      ],
      "words": [
        {
          "key": "carrot",
          "word": "Carrot",
          "zh": "胡萝卜",
          "sentence": "Carrot! A crunchy carrot!",
          "highlight": "Carrot",
          "color": "#E5533D",
          "soft": "#FFEAE6",
          "cardImg": "./img/v3/cards/EP006/carrot.png",
          "sceneImg": "./img/v3/scenes/ep006_main.jpg",
          "sceneTag": "农夫蔬菜小铺 · 胡萝卜",
          "distractor": "broccoli",
          "leadAudio": "./audio/v3/EP006/lead_carrot.mp3",
          "teachAudio": "./audio/v3/EP006/teach_carrot.mp3",
          "quizAudio": "./audio/v3/EP006/quiz_carrot.mp3",
          "ansAudio": "./audio/v3/EP006/ans_carrot.mp3"
        },
        {
          "key": "broccoli",
          "word": "Broccoli",
          "zh": "西兰花",
          "sentence": "Broccoli! Green broccoli!",
          "highlight": "Broccoli",
          "color": "#357EC7",
          "soft": "#E5F2FF",
          "cardImg": "./img/v3/cards/EP006/broccoli.png",
          "sceneImg": "./img/v3/scenes/ep006_main.jpg",
          "sceneTag": "农夫蔬菜小铺 · 西兰花",
          "distractor": "tomato",
          "leadAudio": "./audio/v3/EP006/lead_broccoli.mp3",
          "teachAudio": "./audio/v3/EP006/teach_broccoli.mp3",
          "quizAudio": "./audio/v3/EP006/quiz_broccoli.mp3",
          "ansAudio": "./audio/v3/EP006/ans_broccoli.mp3"
        },
        {
          "key": "tomato",
          "word": "Tomato",
          "zh": "红番茄",
          "sentence": "Tomato! A round red tomato!",
          "highlight": "Tomato",
          "color": "#D98A16",
          "soft": "#FFF5D6",
          "cardImg": "./img/v3/cards/EP006/tomato.png",
          "sceneImg": "./img/v3/scenes/ep006_main.jpg",
          "sceneTag": "农夫蔬菜小铺 · 红番茄",
          "distractor": "potato",
          "leadAudio": "./audio/v3/EP006/lead_tomato.mp3",
          "teachAudio": "./audio/v3/EP006/teach_tomato.mp3",
          "quizAudio": "./audio/v3/EP006/quiz_tomato.mp3",
          "ansAudio": "./audio/v3/EP006/ans_tomato.mp3"
        },
        {
          "key": "potato",
          "word": "Potato",
          "zh": "小土豆",
          "sentence": "Potato! A yummy potato!",
          "highlight": "Potato",
          "color": "#3E9B52",
          "soft": "#E4F7E8",
          "cardImg": "./img/v3/cards/EP006/potato.png",
          "sceneImg": "./img/v3/scenes/ep006_main.jpg",
          "sceneTag": "农夫蔬菜小铺 · 小土豆",
          "distractor": "corn",
          "leadAudio": "./audio/v3/EP006/lead_potato.mp3",
          "teachAudio": "./audio/v3/EP006/teach_potato.mp3",
          "quizAudio": "./audio/v3/EP006/quiz_potato.mp3",
          "ansAudio": "./audio/v3/EP006/ans_potato.mp3"
        },
        {
          "key": "corn",
          "word": "Corn",
          "zh": "甜玉米",
          "sentence": "Corn! Sweet yellow corn!",
          "highlight": "Corn",
          "color": "#8B5CF6",
          "soft": "#EFE9FE",
          "cardImg": "./img/v3/cards/EP006/corn.png",
          "sceneImg": "./img/v3/scenes/ep006_main.jpg",
          "sceneTag": "农夫蔬菜小铺 · 甜玉米",
          "distractor": "mushroom",
          "leadAudio": "./audio/v3/EP006/lead_corn.mp3",
          "teachAudio": "./audio/v3/EP006/teach_corn.mp3",
          "quizAudio": "./audio/v3/EP006/quiz_corn.mp3",
          "ansAudio": "./audio/v3/EP006/ans_corn.mp3"
        },
        {
          "key": "mushroom",
          "word": "Mushroom",
          "zh": "小蘑菇",
          "sentence": "Mushroom! Cute mushroom!",
          "highlight": "Mushroom",
          "color": "#DB2777",
          "soft": "#FCE7F3",
          "cardImg": "./img/v3/cards/EP006/mushroom.png",
          "sceneImg": "./img/v3/scenes/ep006_main.jpg",
          "sceneTag": "农夫蔬菜小铺 · 小蘑菇",
          "distractor": "carrot",
          "leadAudio": "./audio/v3/EP006/lead_mushroom.mp3",
          "teachAudio": "./audio/v3/EP006/teach_mushroom.mp3",
          "quizAudio": "./audio/v3/EP006/quiz_mushroom.mp3",
          "ansAudio": "./audio/v3/EP006/ans_mushroom.mp3"
        }
      ]
    },
    "EP007": {
      "id": "EP007",
      "num": 7,
      "title": "早餐和饮品",
      "enTitle": "Breakfast Time",
      "subtitle": "第 7 集 · 阳光原木早餐桌",
      "island": "美味餐桌",
      "hook": "每天早饭餐桌就能用 · 礼貌点餐开口说",
      "theme": {
        "paper": "#FFF6F4",
        "accent": "#C94A38",
        "accentLip": "#8E2B1D",
        "pillBg": "#FDE4DF",
        "ink": "#4F1D16"
      },
      "defaultScene": "./img/v3/scenes/ep007_main.jpg",
      "sceneLabel": "阳光原木早餐桌",
      "worksheet": "./worksheets/EP007-亲子涂色连线卡.jpg",
      "parentScript": [
        {
          "role": "👩 爸妈在生活场景里指一指",
          "line": "Look! Can you find: Milk?（留足 3 秒让宝贝观察）"
        },
        {
          "role": "🧒 引导宝贝手指点并开口",
          "line": "Milk! Milk, please!"
        },
        {
          "role": "👩 换一个对比物继续玩",
          "line": "Awesome! How about Water? Water! Water, please!"
        },
        {
          "role": "💡 本集不费妈陪玩锦囊",
          "line": "明天早上递牛奶或鸡蛋前，微笑着引导宝贝跟说一句 'Milk, please!'"
        }
      ],
      "words": [
        {
          "key": "milk",
          "word": "Milk",
          "zh": "温牛奶",
          "sentence": "Milk! Milk, please!",
          "highlight": "Milk",
          "color": "#E5533D",
          "soft": "#FFEAE6",
          "cardImg": "./img/v3/cards/EP007/milk.png",
          "sceneImg": "./img/v3/scenes/ep007_main.jpg",
          "sceneTag": "阳光原木早餐桌 · 温牛奶",
          "distractor": "water",
          "leadAudio": "./audio/v3/EP007/lead_milk.mp3",
          "teachAudio": "./audio/v3/EP007/teach_milk.mp3",
          "quizAudio": "./audio/v3/EP007/quiz_milk.mp3",
          "ansAudio": "./audio/v3/EP007/ans_milk.mp3"
        },
        {
          "key": "water",
          "word": "Water",
          "zh": "白开水",
          "sentence": "Water! Water, please!",
          "highlight": "Water",
          "color": "#357EC7",
          "soft": "#E5F2FF",
          "cardImg": "./img/v3/cards/EP007/water.png",
          "sceneImg": "./img/v3/scenes/ep007_main.jpg",
          "sceneTag": "阳光原木早餐桌 · 白开水",
          "distractor": "juice",
          "leadAudio": "./audio/v3/EP007/lead_water.mp3",
          "teachAudio": "./audio/v3/EP007/teach_water.mp3",
          "quizAudio": "./audio/v3/EP007/quiz_water.mp3",
          "ansAudio": "./audio/v3/EP007/ans_water.mp3"
        },
        {
          "key": "juice",
          "word": "Juice",
          "zh": "鲜果汁",
          "sentence": "Juice! Sweet juice, please!",
          "highlight": "Juice",
          "color": "#D98A16",
          "soft": "#FFF5D6",
          "cardImg": "./img/v3/cards/EP007/juice.png",
          "sceneImg": "./img/v3/scenes/ep007_main.jpg",
          "sceneTag": "阳光原木早餐桌 · 鲜果汁",
          "distractor": "egg",
          "leadAudio": "./audio/v3/EP007/lead_juice.mp3",
          "teachAudio": "./audio/v3/EP007/teach_juice.mp3",
          "quizAudio": "./audio/v3/EP007/quiz_juice.mp3",
          "ansAudio": "./audio/v3/EP007/ans_juice.mp3"
        },
        {
          "key": "egg",
          "word": "Egg",
          "zh": "煮鸡蛋",
          "sentence": "Egg! A yummy egg!",
          "highlight": "Egg",
          "color": "#3E9B52",
          "soft": "#E4F7E8",
          "cardImg": "./img/v3/cards/EP007/egg.png",
          "sceneImg": "./img/v3/scenes/ep007_main.jpg",
          "sceneTag": "阳光原木早餐桌 · 煮鸡蛋",
          "distractor": "toast",
          "leadAudio": "./audio/v3/EP007/lead_egg.mp3",
          "teachAudio": "./audio/v3/EP007/teach_egg.mp3",
          "quizAudio": "./audio/v3/EP007/quiz_egg.mp3",
          "ansAudio": "./audio/v3/EP007/ans_egg.mp3"
        },
        {
          "key": "toast",
          "word": "Toast",
          "zh": "烤吐司",
          "sentence": "Toast! Warm crispy toast!",
          "highlight": "Toast",
          "color": "#8B5CF6",
          "soft": "#EFE9FE",
          "cardImg": "./img/v3/cards/EP007/toast.png",
          "sceneImg": "./img/v3/scenes/ep007_main.jpg",
          "sceneTag": "阳光原木早餐桌 · 烤吐司",
          "distractor": "milk",
          "leadAudio": "./audio/v3/EP007/lead_toast.mp3",
          "teachAudio": "./audio/v3/EP007/teach_toast.mp3",
          "quizAudio": "./audio/v3/EP007/quiz_toast.mp3",
          "ansAudio": "./audio/v3/EP007/ans_toast.mp3"
        }
      ]
    },
    "EP008": {
      "id": "EP008",
      "num": 8,
      "title": "认识衣服",
      "enTitle": "My Clothes",
      "subtitle": "第 8 集 · 衣帽收纳客厅",
      "island": "身体日常",
      "hook": "出门穿衣变闯关小游戏 · 认识全套日常衣物",
      "theme": {
        "paper": "#F6FBEF",
        "accent": "#4D8B31",
        "accentLip": "#2E5B1B",
        "pillBg": "#E5F5D4",
        "ink": "#243E16"
      },
      "defaultScene": "./img/v3/scenes/ep008_main.jpg",
      "sceneLabel": "衣帽收纳客厅",
      "worksheet": "./worksheets/EP008-亲子涂色连线卡.jpg",
      "parentScript": [
        {
          "role": "👩 爸妈在生活场景里指一指",
          "line": "Look! Can you find: Hat?（留足 3 秒让宝贝观察）"
        },
        {
          "role": "🧒 引导宝贝手指点并开口",
          "line": "Hat! Put on your hat!"
        },
        {
          "role": "👩 换一个对比物继续玩",
          "line": "Awesome! How about Shirt? Shirt! Put on your shirt!"
        },
        {
          "role": "💡 本集不费妈陪玩锦囊",
          "line": "早上穿袜子穿鞋时顺口念：'Put on your socks! Put on your shoes!'"
        }
      ],
      "words": [
        {
          "key": "hat",
          "word": "Hat",
          "zh": "小帽子",
          "sentence": "Hat! Put on your hat!",
          "highlight": "Hat",
          "color": "#E5533D",
          "soft": "#FFEAE6",
          "cardImg": "./img/v3/cards/EP008/hat.png",
          "sceneImg": "./img/v3/scenes/ep008_main.jpg",
          "sceneTag": "衣帽收纳客厅 · 小帽子",
          "distractor": "shirt",
          "leadAudio": "./audio/v3/EP008/lead_hat.mp3",
          "teachAudio": "./audio/v3/EP008/teach_hat.mp3",
          "quizAudio": "./audio/v3/EP008/quiz_hat.mp3",
          "ansAudio": "./audio/v3/EP008/ans_hat.mp3"
        },
        {
          "key": "shirt",
          "word": "Shirt",
          "zh": "小衬衫",
          "sentence": "Shirt! Put on your shirt!",
          "highlight": "Shirt",
          "color": "#357EC7",
          "soft": "#E5F2FF",
          "cardImg": "./img/v3/cards/EP008/shirt.png",
          "sceneImg": "./img/v3/scenes/ep008_main.jpg",
          "sceneTag": "衣帽收纳客厅 · 小衬衫",
          "distractor": "coat",
          "leadAudio": "./audio/v3/EP008/lead_shirt.mp3",
          "teachAudio": "./audio/v3/EP008/teach_shirt.mp3",
          "quizAudio": "./audio/v3/EP008/quiz_shirt.mp3",
          "ansAudio": "./audio/v3/EP008/ans_shirt.mp3"
        },
        {
          "key": "coat",
          "word": "Coat",
          "zh": "暖外套",
          "sentence": "Coat! Put on your coat!",
          "highlight": "Coat",
          "color": "#D98A16",
          "soft": "#FFF5D6",
          "cardImg": "./img/v3/cards/EP008/coat.png",
          "sceneImg": "./img/v3/scenes/ep008_main.jpg",
          "sceneTag": "衣帽收纳客厅 · 暖外套",
          "distractor": "socks",
          "leadAudio": "./audio/v3/EP008/lead_coat.mp3",
          "teachAudio": "./audio/v3/EP008/teach_coat.mp3",
          "quizAudio": "./audio/v3/EP008/quiz_coat.mp3",
          "ansAudio": "./audio/v3/EP008/ans_coat.mp3"
        },
        {
          "key": "socks",
          "word": "Socks",
          "zh": "小袜子",
          "sentence": "Socks! Cozy warm socks!",
          "highlight": "Socks",
          "color": "#3E9B52",
          "soft": "#E4F7E8",
          "cardImg": "./img/v3/cards/EP008/socks.png",
          "sceneImg": "./img/v3/scenes/ep008_main.jpg",
          "sceneTag": "衣帽收纳客厅 · 小袜子",
          "distractor": "shoes",
          "leadAudio": "./audio/v3/EP008/lead_socks.mp3",
          "teachAudio": "./audio/v3/EP008/teach_socks.mp3",
          "quizAudio": "./audio/v3/EP008/quiz_socks.mp3",
          "ansAudio": "./audio/v3/EP008/ans_socks.mp3"
        },
        {
          "key": "shoes",
          "word": "Shoes",
          "zh": "小鞋子",
          "sentence": "Shoes! Put on your shoes!",
          "highlight": "Shoes",
          "color": "#8B5CF6",
          "soft": "#EFE9FE",
          "cardImg": "./img/v3/cards/EP008/shoes.png",
          "sceneImg": "./img/v3/scenes/ep008_main.jpg",
          "sceneTag": "衣帽收纳客厅 · 小鞋子",
          "distractor": "hat",
          "leadAudio": "./audio/v3/EP008/lead_shoes.mp3",
          "teachAudio": "./audio/v3/EP008/teach_shoes.mp3",
          "quizAudio": "./audio/v3/EP008/quiz_shoes.mp3",
          "ansAudio": "./audio/v3/EP008/ans_shoes.mp3"
        }
      ]
    },
    "EP009": {
      "id": "EP009",
      "num": 9,
      "title": "家里有什么",
      "enTitle": "In My Home",
      "subtitle": "第 9 集 · 阳光木屋客厅",
      "island": "家园出行",
      "hook": "客厅寻宝指一指 · 家里处处是英语实景卡",
      "theme": {
        "paper": "#F3F9FE",
        "accent": "#2B6CB0",
        "accentLip": "#1B4678",
        "pillBg": "#DCEEFF",
        "ink": "#1A365D"
      },
      "defaultScene": "./img/v3/scenes/ep009_main.jpg",
      "sceneLabel": "阳光木屋客厅",
      "worksheet": "./worksheets/EP009-亲子涂色连线卡.jpg",
      "parentScript": [
        {
          "role": "👩 爸妈在生活场景里指一指",
          "line": "Look! Can you find: Door?（留足 3 秒让宝贝观察）"
        },
        {
          "role": "🧒 引导宝贝手指点并开口",
          "line": "Door! Open the door!"
        },
        {
          "role": "👩 换一个对比物继续玩",
          "line": "Awesome! How about Window? Window! Look out the window!"
        },
        {
          "role": "💡 本集不费妈陪玩锦囊",
          "line": "晚饭后玩客厅寻宝：爸妈说 'Point to the door / clock!'，看谁先跑过去轻轻拍一下！"
        }
      ],
      "words": [
        {
          "key": "door",
          "word": "Door",
          "zh": "木门",
          "sentence": "Door! Open the door!",
          "highlight": "Door",
          "color": "#E5533D",
          "soft": "#FFEAE6",
          "cardImg": "./img/v3/cards/EP009/door.png",
          "sceneImg": "./img/v3/scenes/ep009_main.jpg",
          "sceneTag": "阳光木屋客厅 · 木门",
          "distractor": "window",
          "leadAudio": "./audio/v3/EP009/lead_door.mp3",
          "teachAudio": "./audio/v3/EP009/teach_door.mp3",
          "quizAudio": "./audio/v3/EP009/quiz_door.mp3",
          "ansAudio": "./audio/v3/EP009/ans_door.mp3"
        },
        {
          "key": "window",
          "word": "Window",
          "zh": "窗户",
          "sentence": "Window! Look out the window!",
          "highlight": "Window",
          "color": "#357EC7",
          "soft": "#E5F2FF",
          "cardImg": "./img/v3/cards/EP009/window.png",
          "sceneImg": "./img/v3/scenes/ep009_main.jpg",
          "sceneTag": "阳光木屋客厅 · 窗户",
          "distractor": "table",
          "leadAudio": "./audio/v3/EP009/lead_window.mp3",
          "teachAudio": "./audio/v3/EP009/teach_window.mp3",
          "quizAudio": "./audio/v3/EP009/quiz_window.mp3",
          "ansAudio": "./audio/v3/EP009/ans_window.mp3"
        },
        {
          "key": "table",
          "word": "Table",
          "zh": "小桌子",
          "sentence": "Table! At the table!",
          "highlight": "Table",
          "color": "#D98A16",
          "soft": "#FFF5D6",
          "cardImg": "./img/v3/cards/EP009/table.png",
          "sceneImg": "./img/v3/scenes/ep009_main.jpg",
          "sceneTag": "阳光木屋客厅 · 小桌子",
          "distractor": "chair",
          "leadAudio": "./audio/v3/EP009/lead_table.mp3",
          "teachAudio": "./audio/v3/EP009/teach_table.mp3",
          "quizAudio": "./audio/v3/EP009/quiz_table.mp3",
          "ansAudio": "./audio/v3/EP009/ans_table.mp3"
        },
        {
          "key": "chair",
          "word": "Chair",
          "zh": "小椅子",
          "sentence": "Chair! Sit on the chair!",
          "highlight": "Chair",
          "color": "#3E9B52",
          "soft": "#E4F7E8",
          "cardImg": "./img/v3/cards/EP009/chair.png",
          "sceneImg": "./img/v3/scenes/ep009_main.jpg",
          "sceneTag": "阳光木屋客厅 · 小椅子",
          "distractor": "clock",
          "leadAudio": "./audio/v3/EP009/lead_chair.mp3",
          "teachAudio": "./audio/v3/EP009/teach_chair.mp3",
          "quizAudio": "./audio/v3/EP009/quiz_chair.mp3",
          "ansAudio": "./audio/v3/EP009/ans_chair.mp3"
        },
        {
          "key": "clock",
          "word": "Clock",
          "zh": "小闹钟",
          "sentence": "Clock! Tick-tock clock!",
          "highlight": "Clock",
          "color": "#8B5CF6",
          "soft": "#EFE9FE",
          "cardImg": "./img/v3/cards/EP009/clock.png",
          "sceneImg": "./img/v3/scenes/ep009_main.jpg",
          "sceneTag": "阳光木屋客厅 · 小闹钟",
          "distractor": "door",
          "leadAudio": "./audio/v3/EP009/lead_clock.mp3",
          "teachAudio": "./audio/v3/EP009/teach_clock.mp3",
          "quizAudio": "./audio/v3/EP009/quiz_clock.mp3",
          "ansAudio": "./audio/v3/EP009/ans_clock.mp3"
        }
      ]
    },
    "EP010": {
      "id": "EP010",
      "num": 10,
      "title": "从早到晚",
      "enTitle": "Daily Routine",
      "subtitle": "第 10 集 · 晨光洗漱小间",
      "island": "身体日常",
      "hook": "起床刷牙洗手晚安 · 建立规律作息英语仪式感",
      "theme": {
        "paper": "#F6FBEF",
        "accent": "#4D8B31",
        "accentLip": "#2E5B1B",
        "pillBg": "#E5F5D4",
        "ink": "#243E16"
      },
      "defaultScene": "./img/v3/scenes/ep010_main.jpg",
      "sceneLabel": "晨光洗漱小间",
      "worksheet": "./worksheets/EP010-亲子涂色连线卡.jpg",
      "parentScript": [
        {
          "role": "👩 爸妈在生活场景里指一指",
          "line": "Look! Can you find: Wake up?（留足 3 秒让宝贝观察）"
        },
        {
          "role": "🧒 引导宝贝手指点并开口",
          "line": "Wake up! Good morning!"
        },
        {
          "role": "👩 换一个对比物继续玩",
          "line": "Awesome! How about Wash hands? Wash your hands!"
        },
        {
          "role": "💡 本集不费妈陪玩锦囊",
          "line": "饭前洗手说 'Wash your hands!'，睡前关灯抱抱说 'Good night!'，天天自然复现！"
        }
      ],
      "words": [
        {
          "key": "wake_up",
          "word": "Wake up",
          "zh": "起床啦",
          "sentence": "Wake up! Good morning!",
          "highlight": "up",
          "color": "#E5533D",
          "soft": "#FFEAE6",
          "cardImg": "./img/v3/cards/EP010/wake_up.png",
          "sceneImg": "./img/v3/scenes/ep010_main.jpg",
          "sceneTag": "晨光洗漱小间 · 起床啦",
          "distractor": "wash_hands",
          "leadAudio": "./audio/v3/EP010/lead_wake_up.mp3",
          "teachAudio": "./audio/v3/EP010/teach_wake_up.mp3",
          "quizAudio": "./audio/v3/EP010/quiz_wake_up.mp3",
          "ansAudio": "./audio/v3/EP010/ans_wake_up.mp3"
        },
        {
          "key": "wash_hands",
          "word": "Wash hands",
          "zh": "洗洗手",
          "sentence": "Wash your hands!",
          "highlight": "hands",
          "color": "#357EC7",
          "soft": "#E5F2FF",
          "cardImg": "./img/v3/cards/EP010/wash_hands.png",
          "sceneImg": "./img/v3/scenes/ep010_main.jpg",
          "sceneTag": "晨光洗漱小间 · 洗洗手",
          "distractor": "brush_teeth",
          "leadAudio": "./audio/v3/EP010/lead_wash_hands.mp3",
          "teachAudio": "./audio/v3/EP010/teach_wash_hands.mp3",
          "quizAudio": "./audio/v3/EP010/quiz_wash_hands.mp3",
          "ansAudio": "./audio/v3/EP010/ans_wash_hands.mp3"
        },
        {
          "key": "brush_teeth",
          "word": "Brush teeth",
          "zh": "刷刷牙",
          "sentence": "Brush your teeth!",
          "highlight": "teeth",
          "color": "#D98A16",
          "soft": "#FFF5D6",
          "cardImg": "./img/v3/cards/EP010/brush_teeth.png",
          "sceneImg": "./img/v3/scenes/ep010_main.jpg",
          "sceneTag": "晨光洗漱小间 · 刷刷牙",
          "distractor": "bath",
          "leadAudio": "./audio/v3/EP010/lead_brush_teeth.mp3",
          "teachAudio": "./audio/v3/EP010/teach_brush_teeth.mp3",
          "quizAudio": "./audio/v3/EP010/quiz_brush_teeth.mp3",
          "ansAudio": "./audio/v3/EP010/ans_brush_teeth.mp3"
        },
        {
          "key": "bath",
          "word": "Take a bath",
          "zh": "洗香香澡",
          "sentence": "Time for a warm bath!",
          "highlight": "bath",
          "color": "#3E9B52",
          "soft": "#E4F7E8",
          "cardImg": "./img/v3/cards/EP010/bath.png",
          "sceneImg": "./img/v3/scenes/ep010_main.jpg",
          "sceneTag": "晨光洗漱小间 · 洗香香澡",
          "distractor": "good_night",
          "leadAudio": "./audio/v3/EP010/lead_bath.mp3",
          "teachAudio": "./audio/v3/EP010/teach_bath.mp3",
          "quizAudio": "./audio/v3/EP010/quiz_bath.mp3",
          "ansAudio": "./audio/v3/EP010/ans_bath.mp3"
        },
        {
          "key": "good_night",
          "word": "Good night",
          "zh": "晚安好梦",
          "sentence": "Good night! Sweet dreams!",
          "highlight": "night",
          "color": "#8B5CF6",
          "soft": "#EFE9FE",
          "cardImg": "./img/v3/cards/EP010/good_night.png",
          "sceneImg": "./img/v3/scenes/ep010_main.jpg",
          "sceneTag": "晨光洗漱小间 · 晚安好梦",
          "distractor": "wake_up",
          "leadAudio": "./audio/v3/EP010/lead_good_night.mp3",
          "teachAudio": "./audio/v3/EP010/teach_good_night.mp3",
          "quizAudio": "./audio/v3/EP010/quiz_good_night.mp3",
          "ansAudio": "./audio/v3/EP010/ans_good_night.mp3"
        }
      ]
    },
    "EP011": {
      "id": "EP011",
      "num": 11,
      "title": "认识玩具",
      "enTitle": "My Toys",
      "subtitle": "第 11 集 · 阳光玩具房",
      "island": "家园出行",
      "hook": "孩子最爱的 5 样心头好 · 边玩玩具边开口",
      "theme": {
        "paper": "#F3F9FE",
        "accent": "#2B6CB0",
        "accentLip": "#1B4678",
        "pillBg": "#DCEEFF",
        "ink": "#1A365D"
      },
      "defaultScene": "./img/v3/scenes/ep011_main.jpg",
      "sceneLabel": "阳光玩具房",
      "worksheet": "./worksheets/EP011-亲子涂色连线卡.jpg",
      "parentScript": [
        {
          "role": "👩 爸妈在生活场景里指一指",
          "line": "Look! Can you find: Ball?（留足 3 秒让宝贝观察）"
        },
        {
          "role": "🧒 引导宝贝手指点并开口",
          "line": "Ball! Bounce the ball!"
        },
        {
          "role": "👩 换一个对比物继续玩",
          "line": "Awesome! How about Car? Car! Zoom, a toy car!"
        },
        {
          "role": "💡 本集不费妈陪玩锦囊",
          "line": "搭积木或滚皮球时顺口说 'Pass me the ball / blocks!'，在真玩耍里记单词！"
        }
      ],
      "words": [
        {
          "key": "ball",
          "word": "Ball",
          "zh": "小皮球",
          "sentence": "Ball! Bounce the ball!",
          "highlight": "Ball",
          "color": "#E5533D",
          "soft": "#FFEAE6",
          "cardImg": "./img/v3/cards/EP011/ball.png",
          "sceneImg": "./img/v3/scenes/ep011_main.jpg",
          "sceneTag": "阳光玩具房 · 小皮球",
          "distractor": "car",
          "leadAudio": "./audio/v3/EP011/lead_ball.mp3",
          "teachAudio": "./audio/v3/EP011/teach_ball.mp3",
          "quizAudio": "./audio/v3/EP011/quiz_ball.mp3",
          "ansAudio": "./audio/v3/EP011/ans_ball.mp3"
        },
        {
          "key": "car",
          "word": "Car",
          "zh": "玩具车",
          "sentence": "Car! Zoom, a toy car!",
          "highlight": "Car",
          "color": "#357EC7",
          "soft": "#E5F2FF",
          "cardImg": "./img/v3/cards/EP011/car.png",
          "sceneImg": "./img/v3/scenes/ep011_main.jpg",
          "sceneTag": "阳光玩具房 · 玩具车",
          "distractor": "blocks",
          "leadAudio": "./audio/v3/EP011/lead_car.mp3",
          "teachAudio": "./audio/v3/EP011/teach_car.mp3",
          "quizAudio": "./audio/v3/EP011/quiz_car.mp3",
          "ansAudio": "./audio/v3/EP011/ans_car.mp3"
        },
        {
          "key": "blocks",
          "word": "Blocks",
          "zh": "搭积木",
          "sentence": "Blocks! Let's build blocks!",
          "highlight": "Blocks",
          "color": "#D98A16",
          "soft": "#FFF5D6",
          "cardImg": "./img/v3/cards/EP011/blocks.png",
          "sceneImg": "./img/v3/scenes/ep011_main.jpg",
          "sceneTag": "阳光玩具房 · 搭积木",
          "distractor": "doll",
          "leadAudio": "./audio/v3/EP011/lead_blocks.mp3",
          "teachAudio": "./audio/v3/EP011/teach_blocks.mp3",
          "quizAudio": "./audio/v3/EP011/quiz_blocks.mp3",
          "ansAudio": "./audio/v3/EP011/ans_blocks.mp3"
        },
        {
          "key": "doll",
          "word": "Doll",
          "zh": "小玩偶",
          "sentence": "Doll! Hug the cute doll!",
          "highlight": "Doll",
          "color": "#3E9B52",
          "soft": "#E4F7E8",
          "cardImg": "./img/v3/cards/EP011/doll.png",
          "sceneImg": "./img/v3/scenes/ep011_main.jpg",
          "sceneTag": "阳光玩具房 · 小玩偶",
          "distractor": "train",
          "leadAudio": "./audio/v3/EP011/lead_doll.mp3",
          "teachAudio": "./audio/v3/EP011/teach_doll.mp3",
          "quizAudio": "./audio/v3/EP011/quiz_doll.mp3",
          "ansAudio": "./audio/v3/EP011/ans_doll.mp3"
        },
        {
          "key": "train",
          "word": "Train",
          "zh": "小火车",
          "sentence": "Train! Choo-choo train!",
          "highlight": "Train",
          "color": "#8B5CF6",
          "soft": "#EFE9FE",
          "cardImg": "./img/v3/cards/EP011/train.png",
          "sceneImg": "./img/v3/scenes/ep011_main.jpg",
          "sceneTag": "阳光玩具房 · 小火车",
          "distractor": "ball",
          "leadAudio": "./audio/v3/EP011/lead_train.mp3",
          "teachAudio": "./audio/v3/EP011/teach_train.mp3",
          "quizAudio": "./audio/v3/EP011/quiz_train.mp3",
          "ansAudio": "./audio/v3/EP011/ans_train.mp3"
        }
      ]
    },
    "EP012": {
      "id": "EP012",
      "num": 12,
      "title": "幼儿园里的东西",
      "enTitle": "Kindergarten",
      "subtitle": "第 12 集 · 彩虹幼儿园教室",
      "island": "家园出行",
      "hook": "入园小书包自己背 · 绘本文具全认识",
      "theme": {
        "paper": "#F3F9FE",
        "accent": "#2B6CB0",
        "accentLip": "#1B4678",
        "pillBg": "#DCEEFF",
        "ink": "#1A365D"
      },
      "defaultScene": "./img/v3/scenes/ep012_main.jpg",
      "sceneLabel": "彩虹幼儿园教室",
      "worksheet": "./worksheets/EP012-亲子涂色连线卡.jpg",
      "parentScript": [
        {
          "role": "👩 爸妈在生活场景里指一指",
          "line": "Look! Can you find: Backpack?（留足 3 秒让宝贝观察）"
        },
        {
          "role": "🧒 引导宝贝手指点并开口",
          "line": "Backpack! My cute backpack!"
        },
        {
          "role": "👩 换一个对比物继续玩",
          "line": "Awesome! How about Book? Book! Let's read a book!"
        },
        {
          "role": "💡 本集不费妈陪玩锦囊",
          "line": "睡前一起装明日小书包：'Put your book and crayon in the backpack!'"
        }
      ],
      "words": [
        {
          "key": "backpack",
          "word": "Backpack",
          "zh": "小书包",
          "sentence": "Backpack! My cute backpack!",
          "highlight": "Backpack",
          "color": "#E5533D",
          "soft": "#FFEAE6",
          "cardImg": "./img/v3/cards/EP012/backpack.png",
          "sceneImg": "./img/v3/scenes/ep012_main.jpg",
          "sceneTag": "彩虹幼儿园教室 · 小书包",
          "distractor": "book",
          "leadAudio": "./audio/v3/EP012/lead_backpack.mp3",
          "teachAudio": "./audio/v3/EP012/teach_backpack.mp3",
          "quizAudio": "./audio/v3/EP012/quiz_backpack.mp3",
          "ansAudio": "./audio/v3/EP012/ans_backpack.mp3"
        },
        {
          "key": "book",
          "word": "Book",
          "zh": "绘本书",
          "sentence": "Book! Let's read a book!",
          "highlight": "Book",
          "color": "#357EC7",
          "soft": "#E5F2FF",
          "cardImg": "./img/v3/cards/EP012/book.png",
          "sceneImg": "./img/v3/scenes/ep012_main.jpg",
          "sceneTag": "彩虹幼儿园教室 · 绘本书",
          "distractor": "pencil",
          "leadAudio": "./audio/v3/EP012/lead_book.mp3",
          "teachAudio": "./audio/v3/EP012/teach_book.mp3",
          "quizAudio": "./audio/v3/EP012/quiz_book.mp3",
          "ansAudio": "./audio/v3/EP012/ans_book.mp3"
        },
        {
          "key": "pencil",
          "word": "Pencil",
          "zh": "小铅笔",
          "sentence": "Pencil! Hold a pencil!",
          "highlight": "Pencil",
          "color": "#D98A16",
          "soft": "#FFF5D6",
          "cardImg": "./img/v3/cards/EP012/pencil.png",
          "sceneImg": "./img/v3/scenes/ep012_main.jpg",
          "sceneTag": "彩虹幼儿园教室 · 小铅笔",
          "distractor": "crayon",
          "leadAudio": "./audio/v3/EP012/lead_pencil.mp3",
          "teachAudio": "./audio/v3/EP012/teach_pencil.mp3",
          "quizAudio": "./audio/v3/EP012/quiz_pencil.mp3",
          "ansAudio": "./audio/v3/EP012/ans_pencil.mp3"
        },
        {
          "key": "crayon",
          "word": "Crayon",
          "zh": "油画棒",
          "sentence": "Crayon! Color with a crayon!",
          "highlight": "Crayon",
          "color": "#3E9B52",
          "soft": "#E4F7E8",
          "cardImg": "./img/v3/cards/EP012/crayon.png",
          "sceneImg": "./img/v3/scenes/ep012_main.jpg",
          "sceneTag": "彩虹幼儿园教室 · 油画棒",
          "distractor": "eraser",
          "leadAudio": "./audio/v3/EP012/lead_crayon.mp3",
          "teachAudio": "./audio/v3/EP012/teach_crayon.mp3",
          "quizAudio": "./audio/v3/EP012/quiz_crayon.mp3",
          "ansAudio": "./audio/v3/EP012/ans_crayon.mp3"
        },
        {
          "key": "eraser",
          "word": "Eraser",
          "zh": "小橡皮",
          "sentence": "Eraser! Clean eraser!",
          "highlight": "Eraser",
          "color": "#8B5CF6",
          "soft": "#EFE9FE",
          "cardImg": "./img/v3/cards/EP012/eraser.png",
          "sceneImg": "./img/v3/scenes/ep012_main.jpg",
          "sceneTag": "彩虹幼儿园教室 · 小橡皮",
          "distractor": "backpack",
          "leadAudio": "./audio/v3/EP012/lead_eraser.mp3",
          "teachAudio": "./audio/v3/EP012/teach_eraser.mp3",
          "quizAudio": "./audio/v3/EP012/quiz_eraser.mp3",
          "ansAudio": "./audio/v3/EP012/ans_eraser.mp3"
        }
      ]
    },
    "EP013": {
      "id": "EP013",
      "num": 13,
      "title": "认识数量 1–5",
      "enTitle": "Numbers 1–5",
      "subtitle": "第 13 集 · 池塘数小鸭",
      "island": "基础认知",
      "hook": "伸出小手点着小鸭数一数 · 建立真实数感",
      "theme": {
        "paper": "#FFF8EA",
        "accent": "#D97724",
        "accentLip": "#9A4E10",
        "pillBg": "#FFE9C2",
        "ink": "#4A2C14"
      },
      "defaultScene": "./img/v3/scenes/ep013_main.jpg",
      "sceneLabel": "池塘数小鸭",
      "worksheet": "./worksheets/EP013-亲子涂色连线卡.jpg",
      "parentScript": [
        {
          "role": "👩 爸妈在生活场景里指一指",
          "line": "Look! Can you find: 1 One?（留足 3 秒让宝贝观察）"
        },
        {
          "role": "🧒 引导宝贝手指点并开口",
          "line": "One! One little duck!"
        },
        {
          "role": "👩 换一个对比物继续玩",
          "line": "Awesome! How about 2 Two? Two! Two yellow ducks!"
        },
        {
          "role": "💡 本集不费妈陪玩锦囊",
          "line": "爬楼梯或分草莓时一颗颗指着数 'One, two, three, four, five!'，手口一致最有效！"
        }
      ],
      "words": [
        {
          "key": "one",
          "word": "1 One",
          "zh": "1 只小鸭",
          "sentence": "One! One little duck!",
          "highlight": "One",
          "color": "#E5533D",
          "soft": "#FFEAE6",
          "cardImg": "./img/v3/cards/EP013/one.png",
          "sceneImg": "./img/v3/scenes/ep013_main.jpg",
          "sceneTag": "池塘数小鸭 · 1 只小鸭",
          "distractor": "two",
          "leadAudio": "./audio/v3/EP013/lead_one.mp3",
          "teachAudio": "./audio/v3/EP013/teach_one.mp3",
          "quizAudio": "./audio/v3/EP013/quiz_one.mp3",
          "ansAudio": "./audio/v3/EP013/ans_one.mp3"
        },
        {
          "key": "two",
          "word": "2 Two",
          "zh": "2 只小鸭",
          "sentence": "Two! Two yellow ducks!",
          "highlight": "Two",
          "color": "#357EC7",
          "soft": "#E5F2FF",
          "cardImg": "./img/v3/cards/EP013/two.png",
          "sceneImg": "./img/v3/scenes/ep013_main.jpg",
          "sceneTag": "池塘数小鸭 · 2 只小鸭",
          "distractor": "three",
          "leadAudio": "./audio/v3/EP013/lead_two.mp3",
          "teachAudio": "./audio/v3/EP013/teach_two.mp3",
          "quizAudio": "./audio/v3/EP013/quiz_two.mp3",
          "ansAudio": "./audio/v3/EP013/ans_two.mp3"
        },
        {
          "key": "three",
          "word": "3 Three",
          "zh": "3 只小鸭",
          "sentence": "Three! Three little ducks!",
          "highlight": "Three",
          "color": "#D98A16",
          "soft": "#FFF5D6",
          "cardImg": "./img/v3/cards/EP013/three.png",
          "sceneImg": "./img/v3/scenes/ep013_main.jpg",
          "sceneTag": "池塘数小鸭 · 3 只小鸭",
          "distractor": "four",
          "leadAudio": "./audio/v3/EP013/lead_three.mp3",
          "teachAudio": "./audio/v3/EP013/teach_three.mp3",
          "quizAudio": "./audio/v3/EP013/quiz_three.mp3",
          "ansAudio": "./audio/v3/EP013/ans_three.mp3"
        },
        {
          "key": "four",
          "word": "4 Four",
          "zh": "4 只小鸭",
          "sentence": "Four! Four happy ducks!",
          "highlight": "Four",
          "color": "#3E9B52",
          "soft": "#E4F7E8",
          "cardImg": "./img/v3/cards/EP013/four.png",
          "sceneImg": "./img/v3/scenes/ep013_main.jpg",
          "sceneTag": "池塘数小鸭 · 4 只小鸭",
          "distractor": "five",
          "leadAudio": "./audio/v3/EP013/lead_four.mp3",
          "teachAudio": "./audio/v3/EP013/teach_four.mp3",
          "quizAudio": "./audio/v3/EP013/quiz_four.mp3",
          "ansAudio": "./audio/v3/EP013/ans_four.mp3"
        },
        {
          "key": "five",
          "word": "5 Five",
          "zh": "5 只小鸭",
          "sentence": "Five! Five cute ducks!",
          "highlight": "Five",
          "color": "#8B5CF6",
          "soft": "#EFE9FE",
          "cardImg": "./img/v3/cards/EP013/five.png",
          "sceneImg": "./img/v3/scenes/ep013_main.jpg",
          "sceneTag": "池塘数小鸭 · 5 只小鸭",
          "distractor": "one",
          "leadAudio": "./audio/v3/EP013/lead_five.mp3",
          "teachAudio": "./audio/v3/EP013/teach_five.mp3",
          "quizAudio": "./audio/v3/EP013/quiz_five.mp3",
          "ansAudio": "./audio/v3/EP013/ans_five.mp3"
        }
      ]
    },
    "EP014": {
      "id": "EP014",
      "num": 14,
      "title": "认识形状",
      "enTitle": "Fun Shapes",
      "subtitle": "第 14 集 · 趣味形状工坊",
      "island": "基础认知",
      "hook": "出门散步找生活中的形状 · 观察力大升级",
      "theme": {
        "paper": "#FFF8EA",
        "accent": "#D97724",
        "accentLip": "#9A4E10",
        "pillBg": "#FFE9C2",
        "ink": "#4A2C14"
      },
      "defaultScene": "./img/v3/scenes/ep014_main.jpg",
      "sceneLabel": "趣味形状工坊",
      "worksheet": "./worksheets/EP014-亲子涂色连线卡.jpg",
      "parentScript": [
        {
          "role": "👩 爸妈在生活场景里指一指",
          "line": "Look! Can you find: Circle?（留足 3 秒让宝贝观察）"
        },
        {
          "role": "🧒 引导宝贝手指点并开口",
          "line": "Circle! A round circle!"
        },
        {
          "role": "👩 换一个对比物继续玩",
          "line": "Awesome! How about Square? Square! A neat square!"
        },
        {
          "role": "💡 本集不费妈陪玩锦囊",
          "line": "指着车轮说 Circle、指着饼干或窗户说 Square，把马路变成形状寻宝图！"
        }
      ],
      "words": [
        {
          "key": "circle",
          "word": "Circle",
          "zh": "圆溜溜 · 圆形",
          "sentence": "Circle! A round circle!",
          "highlight": "Circle",
          "color": "#E5533D",
          "soft": "#FFEAE6",
          "cardImg": "./img/v3/cards/EP014/circle.png",
          "sceneImg": "./img/v3/scenes/ep014_main.jpg",
          "sceneTag": "趣味形状工坊 · 圆溜溜",
          "distractor": "square",
          "leadAudio": "./audio/v3/EP014/lead_circle.mp3",
          "teachAudio": "./audio/v3/EP014/teach_circle.mp3",
          "quizAudio": "./audio/v3/EP014/quiz_circle.mp3",
          "ansAudio": "./audio/v3/EP014/ans_circle.mp3"
        },
        {
          "key": "square",
          "word": "Square",
          "zh": "四方方 · 正方形",
          "sentence": "Square! A neat square!",
          "highlight": "Square",
          "color": "#357EC7",
          "soft": "#E5F2FF",
          "cardImg": "./img/v3/cards/EP014/square.png",
          "sceneImg": "./img/v3/scenes/ep014_main.jpg",
          "sceneTag": "趣味形状工坊 · 四方方",
          "distractor": "triangle",
          "leadAudio": "./audio/v3/EP014/lead_square.mp3",
          "teachAudio": "./audio/v3/EP014/teach_square.mp3",
          "quizAudio": "./audio/v3/EP014/quiz_square.mp3",
          "ansAudio": "./audio/v3/EP014/ans_square.mp3"
        },
        {
          "key": "triangle",
          "word": "Triangle",
          "zh": "尖尖角 · 三角形",
          "sentence": "Triangle! Three corners!",
          "highlight": "Triangle",
          "color": "#D98A16",
          "soft": "#FFF5D6",
          "cardImg": "./img/v3/cards/EP014/triangle.png",
          "sceneImg": "./img/v3/scenes/ep014_main.jpg",
          "sceneTag": "趣味形状工坊 · 尖尖角",
          "distractor": "rectangle",
          "leadAudio": "./audio/v3/EP014/lead_triangle.mp3",
          "teachAudio": "./audio/v3/EP014/teach_triangle.mp3",
          "quizAudio": "./audio/v3/EP014/quiz_triangle.mp3",
          "ansAudio": "./audio/v3/EP014/ans_triangle.mp3"
        },
        {
          "key": "rectangle",
          "word": "Rectangle",
          "zh": "长方方 · 长方形",
          "sentence": "Rectangle! A long rectangle!",
          "highlight": "Rectangle",
          "color": "#3E9B52",
          "soft": "#E4F7E8",
          "cardImg": "./img/v3/cards/EP014/rectangle.png",
          "sceneImg": "./img/v3/scenes/ep014_main.jpg",
          "sceneTag": "趣味形状工坊 · 长方方",
          "distractor": "star",
          "leadAudio": "./audio/v3/EP014/lead_rectangle.mp3",
          "teachAudio": "./audio/v3/EP014/teach_rectangle.mp3",
          "quizAudio": "./audio/v3/EP014/quiz_rectangle.mp3",
          "ansAudio": "./audio/v3/EP014/ans_rectangle.mp3"
        },
        {
          "key": "star",
          "word": "Star",
          "zh": "亮晶晶 · 五角星",
          "sentence": "Star! Twinkle little star!",
          "highlight": "Star",
          "color": "#8B5CF6",
          "soft": "#EFE9FE",
          "cardImg": "./img/v3/cards/EP014/star.png",
          "sceneImg": "./img/v3/scenes/ep014_main.jpg",
          "sceneTag": "趣味形状工坊 · 亮晶晶",
          "distractor": "circle",
          "leadAudio": "./audio/v3/EP014/lead_star.mp3",
          "teachAudio": "./audio/v3/EP014/teach_star.mp3",
          "quizAudio": "./audio/v3/EP014/quiz_star.mp3",
          "ansAudio": "./audio/v3/EP014/ans_star.mp3"
        }
      ]
    },
    "EP015": {
      "id": "EP015",
      "num": 15,
      "title": "大小和长短",
      "enTitle": "Big & Small",
      "subtitle": "第 15 集 · 玩具对比工坊",
      "island": "基础认知",
      "hook": "同色同款单一变量对比 · 秒懂大小与长短",
      "theme": {
        "paper": "#FFF8EA",
        "accent": "#D97724",
        "accentLip": "#9A4E10",
        "pillBg": "#FFE9C2",
        "ink": "#4A2C14"
      },
      "defaultScene": "./img/v3/scenes/ep015_main.jpg",
      "sceneLabel": "玩具对比工坊",
      "worksheet": "./worksheets/EP015-亲子涂色连线卡.jpg",
      "parentScript": [
        {
          "role": "👩 爸妈在生活场景里指一指",
          "line": "Look! Can you find: Big?（留足 3 秒让宝贝观察）"
        },
        {
          "role": "🧒 引导宝贝手指点并开口",
          "line": "Big! Look, a big ball!"
        },
        {
          "role": "👩 换一个对比物继续玩",
          "line": "Awesome! How about Small? Small! A little small ball!"
        },
        {
          "role": "💡 本集不费妈陪玩锦囊",
          "line": "拿两个【同颜色】的大小碗或长短积木问 'Which one is big?'，避免颜色干扰！"
        }
      ],
      "words": [
        {
          "key": "big",
          "word": "Big",
          "zh": "大的 · 大红球",
          "sentence": "Big! Look, a big ball!",
          "highlight": "Big",
          "color": "#E5533D",
          "soft": "#FFEAE6",
          "cardImg": "./img/v3/cards/EP015/big.png",
          "sceneImg": "./img/v3/scenes/ep015_main.jpg",
          "sceneTag": "玩具对比工坊 · 大的",
          "distractor": "small",
          "leadAudio": "./audio/v3/EP015/lead_big.mp3",
          "teachAudio": "./audio/v3/EP015/teach_big.mp3",
          "quizAudio": "./audio/v3/EP015/quiz_big.mp3",
          "ansAudio": "./audio/v3/EP015/ans_big.mp3"
        },
        {
          "key": "small",
          "word": "Small",
          "zh": "小的 · 小红球",
          "sentence": "Small! A little small ball!",
          "highlight": "Small",
          "color": "#357EC7",
          "soft": "#E5F2FF",
          "cardImg": "./img/v3/cards/EP015/small.png",
          "sceneImg": "./img/v3/scenes/ep015_main.jpg",
          "sceneTag": "玩具对比工坊 · 小的",
          "distractor": "big",
          "leadAudio": "./audio/v3/EP015/lead_small.mp3",
          "teachAudio": "./audio/v3/EP015/teach_small.mp3",
          "quizAudio": "./audio/v3/EP015/quiz_small.mp3",
          "ansAudio": "./audio/v3/EP015/ans_small.mp3"
        },
        {
          "key": "long",
          "word": "Long",
          "zh": "长的 · 长火车",
          "sentence": "Long! A long wooden train!",
          "highlight": "Long",
          "color": "#D98A16",
          "soft": "#FFF5D6",
          "cardImg": "./img/v3/cards/EP015/long.png",
          "sceneImg": "./img/v3/scenes/ep015_main.jpg",
          "sceneTag": "玩具对比工坊 · 长的",
          "distractor": "short",
          "leadAudio": "./audio/v3/EP015/lead_long.mp3",
          "teachAudio": "./audio/v3/EP015/teach_long.mp3",
          "quizAudio": "./audio/v3/EP015/quiz_long.mp3",
          "ansAudio": "./audio/v3/EP015/ans_long.mp3"
        },
        {
          "key": "short",
          "word": "Short",
          "zh": "短的 · 短火车",
          "sentence": "Short! A cute short train!",
          "highlight": "Short",
          "color": "#3E9B52",
          "soft": "#E4F7E8",
          "cardImg": "./img/v3/cards/EP015/short.png",
          "sceneImg": "./img/v3/scenes/ep015_main.jpg",
          "sceneTag": "玩具对比工坊 · 短的",
          "distractor": "long",
          "leadAudio": "./audio/v3/EP015/lead_short.mp3",
          "teachAudio": "./audio/v3/EP015/teach_short.mp3",
          "quizAudio": "./audio/v3/EP015/quiz_short.mp3",
          "ansAudio": "./audio/v3/EP015/ans_short.mp3"
        }
      ]
    },
    "EP016": {
      "id": "EP016",
      "num": 16,
      "title": "认识位置",
      "enTitle": "Where Is It?",
      "subtitle": "第 16 集 · 阳光客厅躲猫猫",
      "island": "基础认知",
      "hook": "客厅躲猫猫寻宝游戏 · 玩转 4 个空间方位词",
      "theme": {
        "paper": "#FFF8EA",
        "accent": "#D97724",
        "accentLip": "#9A4E10",
        "pillBg": "#FFE9C2",
        "ink": "#4A2C14"
      },
      "defaultScene": "./img/v3/scenes/ep016_main.jpg",
      "sceneLabel": "阳光客厅躲猫猫",
      "worksheet": "./worksheets/EP016-亲子涂色连线卡.jpg",
      "parentScript": [
        {
          "role": "👩 爸妈在生活场景里指一指",
          "line": "Look! Can you find: In?（留足 3 秒让宝贝观察）"
        },
        {
          "role": "🧒 引导宝贝手指点并开口",
          "line": "In! The ball is in the box!"
        },
        {
          "role": "👩 换一个对比物继续玩",
          "line": "Awesome! How about On? On! The ball is on the table!"
        },
        {
          "role": "💡 本集不费妈陪玩锦囊",
          "line": "拿小玩偶藏在盒子里/桌子上/桌子下问：'Where is it? In the box!'"
        }
      ],
      "words": [
        {
          "key": "in",
          "word": "In",
          "zh": "在里面 · 木箱里",
          "sentence": "In! The ball is in the box!",
          "highlight": "In",
          "color": "#E5533D",
          "soft": "#FFEAE6",
          "cardImg": "./img/v3/cards/EP016/in.png",
          "sceneImg": "./img/v3/scenes/ep016_main.jpg",
          "sceneTag": "阳光客厅躲猫猫 · 在里面",
          "distractor": "on",
          "leadAudio": "./audio/v3/EP016/lead_in.mp3",
          "teachAudio": "./audio/v3/EP016/teach_in.mp3",
          "quizAudio": "./audio/v3/EP016/quiz_in.mp3",
          "ansAudio": "./audio/v3/EP016/ans_in.mp3"
        },
        {
          "key": "on",
          "word": "On",
          "zh": "在上面 · 木桌上",
          "sentence": "On! The ball is on the table!",
          "highlight": "On",
          "color": "#357EC7",
          "soft": "#E5F2FF",
          "cardImg": "./img/v3/cards/EP016/on.png",
          "sceneImg": "./img/v3/scenes/ep016_main.jpg",
          "sceneTag": "阳光客厅躲猫猫 · 在上面",
          "distractor": "under",
          "leadAudio": "./audio/v3/EP016/lead_on.mp3",
          "teachAudio": "./audio/v3/EP016/teach_on.mp3",
          "quizAudio": "./audio/v3/EP016/quiz_on.mp3",
          "ansAudio": "./audio/v3/EP016/ans_on.mp3"
        },
        {
          "key": "under",
          "word": "Under",
          "zh": "在下面 · 木桌下",
          "sentence": "Under! Under the table!",
          "highlight": "Under",
          "color": "#D98A16",
          "soft": "#FFF5D6",
          "cardImg": "./img/v3/cards/EP016/under.png",
          "sceneImg": "./img/v3/scenes/ep016_main.jpg",
          "sceneTag": "阳光客厅躲猫猫 · 在下面",
          "distractor": "next_to",
          "leadAudio": "./audio/v3/EP016/lead_under.mp3",
          "teachAudio": "./audio/v3/EP016/teach_under.mp3",
          "quizAudio": "./audio/v3/EP016/quiz_under.mp3",
          "ansAudio": "./audio/v3/EP016/ans_under.mp3"
        },
        {
          "key": "next_to",
          "word": "Next to",
          "zh": "在旁边 · 木箱旁",
          "sentence": "Next to! Next to the box!",
          "highlight": "to",
          "color": "#3E9B52",
          "soft": "#E4F7E8",
          "cardImg": "./img/v3/cards/EP016/next_to.png",
          "sceneImg": "./img/v3/scenes/ep016_main.jpg",
          "sceneTag": "阳光客厅躲猫猫 · 在旁边",
          "distractor": "in",
          "leadAudio": "./audio/v3/EP016/lead_next_to.mp3",
          "teachAudio": "./audio/v3/EP016/teach_next_to.mp3",
          "quizAudio": "./audio/v3/EP016/quiz_next_to.mp3",
          "ansAudio": "./audio/v3/EP016/ans_next_to.mp3"
        }
      ]
    },
    "EP017": {
      "id": "EP017",
      "num": 17,
      "title": "认识天气",
      "enTitle": "Weather Today",
      "subtitle": "第 17 集 · 观景花窗草坪",
      "island": "自然探索",
      "hook": "每天早上拉开窗帘看一看 · 播报今日小天气",
      "theme": {
        "paper": "#F2FBF8",
        "accent": "#1F7A65",
        "accentLip": "#124E40",
        "pillBg": "#DCF5EE",
        "ink": "#134035"
      },
      "defaultScene": "./img/v3/scenes/ep017_main.jpg",
      "sceneLabel": "观景花窗草坪",
      "worksheet": "./worksheets/EP017-亲子涂色连线卡.jpg",
      "parentScript": [
        {
          "role": "👩 爸妈在生活场景里指一指",
          "line": "Look! Can you find: Sunny?（留足 3 秒让宝贝观察）"
        },
        {
          "role": "🧒 引导宝贝手指点并开口",
          "line": "Sunny! It's a sunny day!"
        },
        {
          "role": "👩 换一个对比物继续玩",
          "line": "Awesome! How about Rainy? Rainy! Pitter-patter, rainy!"
        },
        {
          "role": "💡 本集不费妈陪玩锦囊",
          "line": "早上拉开窗帘问宝贝：'How's the weather? Look, it's sunny!'"
        }
      ],
      "words": [
        {
          "key": "sunny",
          "word": "Sunny",
          "zh": "晴朗大太阳",
          "sentence": "Sunny! It's a sunny day!",
          "highlight": "Sunny",
          "color": "#E5533D",
          "soft": "#FFEAE6",
          "cardImg": "./img/v3/cards/EP017/sunny.png",
          "sceneImg": "./img/v3/scenes/ep017_sunny.jpg",
          "sceneTag": "观景花窗草坪 · 晴朗大太阳",
          "distractor": "rainy",
          "leadAudio": "./audio/v3/EP017/lead_sunny.mp3",
          "teachAudio": "./audio/v3/EP017/teach_sunny.mp3",
          "quizAudio": "./audio/v3/EP017/quiz_sunny.mp3",
          "ansAudio": "./audio/v3/EP017/ans_sunny.mp3"
        },
        {
          "key": "rainy",
          "word": "Rainy",
          "zh": "淅沥下雨天",
          "sentence": "Rainy! Pitter-patter, rainy!",
          "highlight": "Rainy",
          "color": "#357EC7",
          "soft": "#E5F2FF",
          "cardImg": "./img/v3/cards/EP017/rainy.png",
          "sceneImg": "./img/v3/scenes/ep017_rainy.jpg",
          "sceneTag": "观景花窗草坪 · 淅沥下雨天",
          "distractor": "windy",
          "leadAudio": "./audio/v3/EP017/lead_rainy.mp3",
          "teachAudio": "./audio/v3/EP017/teach_rainy.mp3",
          "quizAudio": "./audio/v3/EP017/quiz_rainy.mp3",
          "ansAudio": "./audio/v3/EP017/ans_rainy.mp3"
        },
        {
          "key": "windy",
          "word": "Windy",
          "zh": "呼呼刮风天",
          "sentence": "Windy! Whoosh, it's windy!",
          "highlight": "Windy",
          "color": "#D98A16",
          "soft": "#FFF5D6",
          "cardImg": "./img/v3/cards/EP017/windy.png",
          "sceneImg": "./img/v3/scenes/ep017_windy.jpg",
          "sceneTag": "观景花窗草坪 · 呼呼刮风天",
          "distractor": "cloudy",
          "leadAudio": "./audio/v3/EP017/lead_windy.mp3",
          "teachAudio": "./audio/v3/EP017/teach_windy.mp3",
          "quizAudio": "./audio/v3/EP017/quiz_windy.mp3",
          "ansAudio": "./audio/v3/EP017/ans_windy.mp3"
        },
        {
          "key": "cloudy",
          "word": "Cloudy",
          "zh": "朵朵多云天",
          "sentence": "Cloudy! Soft white clouds!",
          "highlight": "Cloudy",
          "color": "#3E9B52",
          "soft": "#E4F7E8",
          "cardImg": "./img/v3/cards/EP017/cloudy.png",
          "sceneImg": "./img/v3/scenes/ep017_cloudy.jpg",
          "sceneTag": "观景花窗草坪 · 朵朵多云天",
          "distractor": "sunny",
          "leadAudio": "./audio/v3/EP017/lead_cloudy.mp3",
          "teachAudio": "./audio/v3/EP017/teach_cloudy.mp3",
          "quizAudio": "./audio/v3/EP017/quiz_cloudy.mp3",
          "ansAudio": "./audio/v3/EP017/ans_cloudy.mp3"
        }
      ]
    },
    "EP018": {
      "id": "EP018",
      "num": 18,
      "title": "认识交通工具",
      "enTitle": "On the Go",
      "subtitle": "第 18 集 · 小镇中心车站",
      "island": "家园出行",
      "hook": "出门看车坐巴士 · 孩子最兴奋的交通启蒙",
      "theme": {
        "paper": "#F3F9FE",
        "accent": "#2B6CB0",
        "accentLip": "#1B4678",
        "pillBg": "#DCEEFF",
        "ink": "#1A365D"
      },
      "defaultScene": "./img/v3/scenes/ep018_main.jpg",
      "sceneLabel": "小镇中心车站",
      "worksheet": "./worksheets/EP018-亲子涂色连线卡.jpg",
      "parentScript": [
        {
          "role": "👩 爸妈在生活场景里指一指",
          "line": "Look! Can you find: Bus?（留足 3 秒让宝贝观察）"
        },
        {
          "role": "🧒 引导宝贝手指点并开口",
          "line": "Bus! Beep-beep, big bus!"
        },
        {
          "role": "👩 换一个对比物继续玩",
          "line": "Awesome! How about Train? Train! Choo-choo train!"
        },
        {
          "role": "💡 本集不费妈陪玩锦囊",
          "line": "在路上看到公交车或单车经过时指着喊：'Look! Here comes the bus!'"
        }
      ],
      "words": [
        {
          "key": "bus",
          "word": "Bus",
          "zh": "大巴士",
          "sentence": "Bus! Beep-beep, big bus!",
          "highlight": "Bus",
          "color": "#E5533D",
          "soft": "#FFEAE6",
          "cardImg": "./img/v3/cards/EP018/bus.png",
          "sceneImg": "./img/v3/scenes/ep018_bus.jpg",
          "sceneTag": "小镇中心车站 · 大巴士",
          "distractor": "train",
          "leadAudio": "./audio/v3/EP018/lead_bus.mp3",
          "teachAudio": "./audio/v3/EP018/teach_bus.mp3",
          "quizAudio": "./audio/v3/EP018/quiz_bus.mp3",
          "ansAudio": "./audio/v3/EP018/ans_bus.mp3"
        },
        {
          "key": "train",
          "word": "Train",
          "zh": "小火车",
          "sentence": "Train! Choo-choo train!",
          "highlight": "Train",
          "color": "#357EC7",
          "soft": "#E5F2FF",
          "cardImg": "./img/v3/cards/EP018/train.png",
          "sceneImg": "./img/v3/scenes/ep018_train.jpg",
          "sceneTag": "小镇中心车站 · 小火车",
          "distractor": "bike",
          "leadAudio": "./audio/v3/EP018/lead_train.mp3",
          "teachAudio": "./audio/v3/EP018/teach_train.mp3",
          "quizAudio": "./audio/v3/EP018/quiz_train.mp3",
          "ansAudio": "./audio/v3/EP018/ans_train.mp3"
        },
        {
          "key": "bike",
          "word": "Bike",
          "zh": "自行车",
          "sentence": "Bike! Ring-ring, ride a bike!",
          "highlight": "Bike",
          "color": "#D98A16",
          "soft": "#FFF5D6",
          "cardImg": "./img/v3/cards/EP018/bike.png",
          "sceneImg": "./img/v3/scenes/ep018_bike.jpg",
          "sceneTag": "小镇中心车站 · 自行车",
          "distractor": "boat",
          "leadAudio": "./audio/v3/EP018/lead_bike.mp3",
          "teachAudio": "./audio/v3/EP018/teach_bike.mp3",
          "quizAudio": "./audio/v3/EP018/quiz_bike.mp3",
          "ansAudio": "./audio/v3/EP018/ans_bike.mp3"
        },
        {
          "key": "boat",
          "word": "Boat",
          "zh": "小木船",
          "sentence": "Boat! Row a little boat!",
          "highlight": "Boat",
          "color": "#3E9B52",
          "soft": "#E4F7E8",
          "cardImg": "./img/v3/cards/EP018/boat.png",
          "sceneImg": "./img/v3/scenes/ep018_boat.jpg",
          "sceneTag": "小镇中心车站 · 小木船",
          "distractor": "bus",
          "leadAudio": "./audio/v3/EP018/lead_boat.mp3",
          "teachAudio": "./audio/v3/EP018/teach_boat.mp3",
          "quizAudio": "./audio/v3/EP018/quiz_boat.mp3",
          "ansAudio": "./audio/v3/EP018/ans_boat.mp3"
        }
      ]
    },
    "EP019": {
      "id": "EP019",
      "num": 19,
      "title": "公园里玩什么",
      "enTitle": "At the Park",
      "subtitle": "第 19 集 · 暖阳儿童公园",
      "island": "家园出行",
      "hook": "周末下楼遛娃实景复现 · 秋千滑梯风筝全会说",
      "theme": {
        "paper": "#F3F9FE",
        "accent": "#2B6CB0",
        "accentLip": "#1B4678",
        "pillBg": "#DCEEFF",
        "ink": "#1A365D"
      },
      "defaultScene": "./img/v3/scenes/ep019_main.jpg",
      "sceneLabel": "暖阳儿童公园",
      "worksheet": "./worksheets/EP019-亲子涂色连线卡.jpg",
      "parentScript": [
        {
          "role": "👩 爸妈在生活场景里指一指",
          "line": "Look! Can you find: Swing?（留足 3 秒让宝贝观察）"
        },
        {
          "role": "🧒 引导宝贝手指点并开口",
          "line": "Swing! Up high on the swing!"
        },
        {
          "role": "👩 换一个对比物继续玩",
          "line": "Awesome! How about Slide? Slide! Wheee down the slide!"
        },
        {
          "role": "💡 本集不费妈陪玩锦囊",
          "line": "带娃去小区滑梯或秋千时问：'Swing or slide? Let's go on the slide!'"
        }
      ],
      "words": [
        {
          "key": "swing",
          "word": "Swing",
          "zh": "荡秋千",
          "sentence": "Swing! Up high on the swing!",
          "highlight": "Swing",
          "color": "#E5533D",
          "soft": "#FFEAE6",
          "cardImg": "./img/v3/cards/EP019/swing.png",
          "sceneImg": "./img/v3/scenes/ep019_swing.jpg",
          "sceneTag": "暖阳儿童公园 · 荡秋千",
          "distractor": "slide",
          "leadAudio": "./audio/v3/EP019/lead_swing.mp3",
          "teachAudio": "./audio/v3/EP019/teach_swing.mp3",
          "quizAudio": "./audio/v3/EP019/quiz_swing.mp3",
          "ansAudio": "./audio/v3/EP019/ans_swing.mp3"
        },
        {
          "key": "slide",
          "word": "Slide",
          "zh": "滑滑梯",
          "sentence": "Slide! Wheee down the slide!",
          "highlight": "Slide",
          "color": "#357EC7",
          "soft": "#E5F2FF",
          "cardImg": "./img/v3/cards/EP019/slide.png",
          "sceneImg": "./img/v3/scenes/ep019_slide.jpg",
          "sceneTag": "暖阳儿童公园 · 滑滑梯",
          "distractor": "ball",
          "leadAudio": "./audio/v3/EP019/lead_slide.mp3",
          "teachAudio": "./audio/v3/EP019/teach_slide.mp3",
          "quizAudio": "./audio/v3/EP019/quiz_slide.mp3",
          "ansAudio": "./audio/v3/EP019/ans_slide.mp3"
        },
        {
          "key": "ball",
          "word": "Ball",
          "zh": "拍皮球",
          "sentence": "Ball! Kick and bounce the ball!",
          "highlight": "Ball",
          "color": "#D98A16",
          "soft": "#FFF5D6",
          "cardImg": "./img/v3/cards/EP019/ball.png",
          "sceneImg": "./img/v3/scenes/ep019_ball.jpg",
          "sceneTag": "暖阳儿童公园 · 拍皮球",
          "distractor": "kite",
          "leadAudio": "./audio/v3/EP019/lead_ball.mp3",
          "teachAudio": "./audio/v3/EP019/teach_ball.mp3",
          "quizAudio": "./audio/v3/EP019/quiz_ball.mp3",
          "ansAudio": "./audio/v3/EP019/ans_ball.mp3"
        },
        {
          "key": "kite",
          "word": "Kite",
          "zh": "放风筝",
          "sentence": "Kite! Fly a colorful kite!",
          "highlight": "Kite",
          "color": "#3E9B52",
          "soft": "#E4F7E8",
          "cardImg": "./img/v3/cards/EP019/kite.png",
          "sceneImg": "./img/v3/scenes/ep019_kite.jpg",
          "sceneTag": "暖阳儿童公园 · 放风筝",
          "distractor": "swing",
          "leadAudio": "./audio/v3/EP019/lead_kite.mp3",
          "teachAudio": "./audio/v3/EP019/teach_kite.mp3",
          "quizAudio": "./audio/v3/EP019/quiz_kite.mp3",
          "ansAudio": "./audio/v3/EP019/ans_kite.mp3"
        }
      ]
    },
    "EP020": {
      "id": "EP020",
      "num": 20,
      "title": "花园里有什么",
      "enTitle": "In the Garden",
      "subtitle": "第 20 集 · 秘密阳光花园",
      "island": "自然探索",
      "hook": "小区草地散步捡落叶 · 大自然就是最好的绘本",
      "theme": {
        "paper": "#F2FBF8",
        "accent": "#1F7A65",
        "accentLip": "#124E40",
        "pillBg": "#DCF5EE",
        "ink": "#134035"
      },
      "defaultScene": "./img/v3/scenes/ep020_main.jpg",
      "sceneLabel": "秘密阳光花园",
      "worksheet": "./worksheets/EP020-亲子涂色连线卡.jpg",
      "parentScript": [
        {
          "role": "👩 爸妈在生活场景里指一指",
          "line": "Look! Can you find: Tree?（留足 3 秒让宝贝观察）"
        },
        {
          "role": "🧒 引导宝贝手指点并开口",
          "line": "Tree! A tall green tree!"
        },
        {
          "role": "👩 换一个对比物继续玩",
          "line": "Awesome! How about Leaf? Leaf! A little green leaf!"
        },
        {
          "role": "💡 本集不费妈陪玩锦囊",
          "line": "散步蹲下来看小花和落叶时轻声问：'Can you find a green leaf and a flower?'"
        }
      ],
      "words": [
        {
          "key": "tree",
          "word": "Tree",
          "zh": "大树",
          "sentence": "Tree! A tall green tree!",
          "highlight": "Tree",
          "color": "#E5533D",
          "soft": "#FFEAE6",
          "cardImg": "./img/v3/cards/EP020/tree.png",
          "sceneImg": "./img/v3/scenes/ep020_tree.jpg",
          "sceneTag": "秘密阳光花园 · 大树",
          "distractor": "leaf",
          "leadAudio": "./audio/v3/EP020/lead_tree.mp3",
          "teachAudio": "./audio/v3/EP020/teach_tree.mp3",
          "quizAudio": "./audio/v3/EP020/quiz_tree.mp3",
          "ansAudio": "./audio/v3/EP020/ans_tree.mp3"
        },
        {
          "key": "leaf",
          "word": "Leaf",
          "zh": "小树叶",
          "sentence": "Leaf! A little green leaf!",
          "highlight": "Leaf",
          "color": "#357EC7",
          "soft": "#E5F2FF",
          "cardImg": "./img/v3/cards/EP020/leaf.png",
          "sceneImg": "./img/v3/scenes/ep020_leaf.jpg",
          "sceneTag": "秘密阳光花园 · 小树叶",
          "distractor": "flower",
          "leadAudio": "./audio/v3/EP020/lead_leaf.mp3",
          "teachAudio": "./audio/v3/EP020/teach_leaf.mp3",
          "quizAudio": "./audio/v3/EP020/quiz_leaf.mp3",
          "ansAudio": "./audio/v3/EP020/ans_leaf.mp3"
        },
        {
          "key": "flower",
          "word": "Flower",
          "zh": "漂亮花朵",
          "sentence": "Flower! Smell the pretty flower!",
          "highlight": "Flower",
          "color": "#D98A16",
          "soft": "#FFF5D6",
          "cardImg": "./img/v3/cards/EP020/flower.png",
          "sceneImg": "./img/v3/scenes/ep020_flower.jpg",
          "sceneTag": "秘密阳光花园 · 漂亮花朵",
          "distractor": "seed",
          "leadAudio": "./audio/v3/EP020/lead_flower.mp3",
          "teachAudio": "./audio/v3/EP020/teach_flower.mp3",
          "quizAudio": "./audio/v3/EP020/quiz_flower.mp3",
          "ansAudio": "./audio/v3/EP020/ans_flower.mp3"
        },
        {
          "key": "seed",
          "word": "Seed",
          "zh": "小种子",
          "sentence": "Seed! Plant a tiny seed!",
          "highlight": "Seed",
          "color": "#3E9B52",
          "soft": "#E4F7E8",
          "cardImg": "./img/v3/cards/EP020/seed.png",
          "sceneImg": "./img/v3/scenes/ep020_seed.jpg",
          "sceneTag": "秘密阳光花园 · 小种子",
          "distractor": "tree",
          "leadAudio": "./audio/v3/EP020/lead_seed.mp3",
          "teachAudio": "./audio/v3/EP020/teach_seed.mp3",
          "quizAudio": "./audio/v3/EP020/quiz_seed.mp3",
          "ansAudio": "./audio/v3/EP020/ans_seed.mp3"
        }
      ]
    },
    "EP021": {
      "id": "EP021",
      "num": 21,
      "title": "跟着做动作",
      "enTitle": "Action Game",
      "subtitle": "第 21 集 · 草坪律动小舞台",
      "island": "身体日常",
      "hook": "全身放电 TPR 律动木头人 · 听英文指令秒反应",
      "theme": {
        "paper": "#F6FBEF",
        "accent": "#4D8B31",
        "accentLip": "#2E5B1B",
        "pillBg": "#E5F5D4",
        "ink": "#243E16"
      },
      "defaultScene": "./img/v3/scenes/ep021_main.jpg",
      "sceneLabel": "草坪律动小舞台",
      "worksheet": "./worksheets/EP021-亲子涂色连线卡.jpg",
      "parentScript": [
        {
          "role": "👩 爸妈在生活场景里指一指",
          "line": "Look! Can you find: Clap?（留足 3 秒让宝贝观察）"
        },
        {
          "role": "🧒 引导宝贝手指点并开口",
          "line": "Clap! Clap your hands!"
        },
        {
          "role": "👩 换一个对比物继续玩",
          "line": "Awesome! How about Jump? Jump! Jump up high!"
        },
        {
          "role": "💡 本集不费妈陪玩锦囊",
          "line": "在客厅玩英文版“一二三木头人”：喊 'Jump! Jump! ... Stop!' 孩子笑到停不下来！"
        }
      ],
      "words": [
        {
          "key": "clap",
          "word": "Clap",
          "zh": "拍拍小手",
          "sentence": "Clap! Clap your hands!",
          "highlight": "Clap",
          "color": "#E5533D",
          "soft": "#FFEAE6",
          "cardImg": "./img/v3/cards/EP021/clap.png",
          "sceneImg": "./img/v3/scenes/ep021_clap.jpg",
          "sceneTag": "草坪律动小舞台 · 拍拍小手",
          "distractor": "jump",
          "leadAudio": "./audio/v3/EP021/lead_clap.mp3",
          "teachAudio": "./audio/v3/EP021/teach_clap.mp3",
          "quizAudio": "./audio/v3/EP021/quiz_clap.mp3",
          "ansAudio": "./audio/v3/EP021/ans_clap.mp3"
        },
        {
          "key": "jump",
          "word": "Jump",
          "zh": "蹦蹦跳跳",
          "sentence": "Jump! Jump up high!",
          "highlight": "Jump",
          "color": "#357EC7",
          "soft": "#E5F2FF",
          "cardImg": "./img/v3/cards/EP021/jump.png",
          "sceneImg": "./img/v3/scenes/ep021_jump.jpg",
          "sceneTag": "草坪律动小舞台 · 蹦蹦跳跳",
          "distractor": "walk",
          "leadAudio": "./audio/v3/EP021/lead_jump.mp3",
          "teachAudio": "./audio/v3/EP021/teach_jump.mp3",
          "quizAudio": "./audio/v3/EP021/quiz_jump.mp3",
          "ansAudio": "./audio/v3/EP021/ans_jump.mp3"
        },
        {
          "key": "walk",
          "word": "Walk",
          "zh": "迈步走走",
          "sentence": "Walk! Walk, walk, walk!",
          "highlight": "Walk",
          "color": "#D98A16",
          "soft": "#FFF5D6",
          "cardImg": "./img/v3/cards/EP021/walk.png",
          "sceneImg": "./img/v3/scenes/ep021_walk.jpg",
          "sceneTag": "草坪律动小舞台 · 迈步走走",
          "distractor": "stop",
          "leadAudio": "./audio/v3/EP021/lead_walk.mp3",
          "teachAudio": "./audio/v3/EP021/teach_walk.mp3",
          "quizAudio": "./audio/v3/EP021/quiz_walk.mp3",
          "ansAudio": "./audio/v3/EP021/ans_walk.mp3"
        },
        {
          "key": "stop",
          "word": "Stop",
          "zh": "停下来不动",
          "sentence": "Stop! Freeze and stop!",
          "highlight": "Stop",
          "color": "#3E9B52",
          "soft": "#E4F7E8",
          "cardImg": "./img/v3/cards/EP021/stop.png",
          "sceneImg": "./img/v3/scenes/ep021_stop.jpg",
          "sceneTag": "草坪律动小舞台 · 停下来不动",
          "distractor": "clap",
          "leadAudio": "./audio/v3/EP021/lead_stop.mp3",
          "teachAudio": "./audio/v3/EP021/teach_stop.mp3",
          "quizAudio": "./audio/v3/EP021/quiz_stop.mp3",
          "ansAudio": "./audio/v3/EP021/ans_stop.mp3"
        }
      ]
    },
    "EP022": {
      "id": "EP022",
      "num": 22,
      "title": "见面怎么说",
      "enTitle": "Greetings",
      "subtitle": "第 22 集 · 紫藤花廊玄关",
      "island": "情商社交",
      "hook": "早安晚安挥手问好 · 养成高情商有礼貌萌娃",
      "theme": {
        "paper": "#FAF5FE",
        "accent": "#7B4B94",
        "accentLip": "#512B66",
        "pillBg": "#EFE3FA",
        "ink": "#3B1D4E"
      },
      "defaultScene": "./img/v3/scenes/ep022_main.jpg",
      "sceneLabel": "紫藤花廊玄关",
      "worksheet": "./worksheets/EP022-亲子涂色连线卡.jpg",
      "parentScript": [
        {
          "role": "👩 爸妈在生活场景里指一指",
          "line": "Look! Can you find: Hello?（留足 3 秒让宝贝观察）"
        },
        {
          "role": "🧒 引导宝贝手指点并开口",
          "line": "Hello! Hi, nice to see you!"
        },
        {
          "role": "👩 换一个对比物继续玩",
          "line": "Awesome! How about Goodbye? Goodbye! Bye-bye, see you!"
        },
        {
          "role": "💡 本集不费妈陪玩锦囊",
          "line": "进幼儿园跟老师挥手说 'Good morning / Hello!'，放学挥手说 'Goodbye!'"
        }
      ],
      "words": [
        {
          "key": "hello",
          "word": "Hello",
          "zh": "你好呀",
          "sentence": "Hello! Hi, nice to see you!",
          "highlight": "Hello",
          "color": "#E5533D",
          "soft": "#FFEAE6",
          "cardImg": "./img/v3/cards/EP022/hello.png",
          "sceneImg": "./img/v3/scenes/ep022_hello.jpg",
          "sceneTag": "紫藤花廊玄关 · 你好呀",
          "distractor": "goodbye",
          "leadAudio": "./audio/v3/EP022/lead_hello.mp3",
          "teachAudio": "./audio/v3/EP022/teach_hello.mp3",
          "quizAudio": "./audio/v3/EP022/quiz_hello.mp3",
          "ansAudio": "./audio/v3/EP022/ans_hello.mp3"
        },
        {
          "key": "goodbye",
          "word": "Goodbye",
          "zh": "挥手再见",
          "sentence": "Goodbye! Bye-bye, see you!",
          "highlight": "Goodbye",
          "color": "#357EC7",
          "soft": "#E5F2FF",
          "cardImg": "./img/v3/cards/EP022/goodbye.png",
          "sceneImg": "./img/v3/scenes/ep022_goodbye.jpg",
          "sceneTag": "紫藤花廊玄关 · 挥手再见",
          "distractor": "good_morning",
          "leadAudio": "./audio/v3/EP022/lead_goodbye.mp3",
          "teachAudio": "./audio/v3/EP022/teach_goodbye.mp3",
          "quizAudio": "./audio/v3/EP022/quiz_goodbye.mp3",
          "ansAudio": "./audio/v3/EP022/ans_goodbye.mp3"
        },
        {
          "key": "good_morning",
          "word": "Good morning",
          "zh": "早上好",
          "sentence": "Good morning! Rise and shine!",
          "highlight": "morning",
          "color": "#D98A16",
          "soft": "#FFF5D6",
          "cardImg": "./img/v3/cards/EP022/good_morning.png",
          "sceneImg": "./img/v3/scenes/ep022_good_morning.jpg",
          "sceneTag": "紫藤花廊玄关 · 早上好",
          "distractor": "good_night",
          "leadAudio": "./audio/v3/EP022/lead_good_morning.mp3",
          "teachAudio": "./audio/v3/EP022/teach_good_morning.mp3",
          "quizAudio": "./audio/v3/EP022/quiz_good_morning.mp3",
          "ansAudio": "./audio/v3/EP022/ans_good_morning.mp3"
        },
        {
          "key": "good_night",
          "word": "Good night",
          "zh": "晚安啦",
          "sentence": "Good night! Sweet dreams!",
          "highlight": "night",
          "color": "#3E9B52",
          "soft": "#E4F7E8",
          "cardImg": "./img/v3/cards/EP022/good_night.png",
          "sceneImg": "./img/v3/scenes/ep022_good_night.jpg",
          "sceneTag": "紫藤花廊玄关 · 晚安啦",
          "distractor": "hello",
          "leadAudio": "./audio/v3/EP022/lead_good_night.mp3",
          "teachAudio": "./audio/v3/EP022/teach_good_night.mp3",
          "quizAudio": "./audio/v3/EP022/quiz_good_night.mp3",
          "ansAudio": "./audio/v3/EP022/ans_good_night.mp3"
        }
      ]
    },
    "EP023": {
      "id": "EP023",
      "num": 23,
      "title": "认识心情",
      "enTitle": "My Feelings",
      "subtitle": "第 23 集 · 温暖绘本情绪角",
      "island": "情商社交",
      "hook": "看见并说出小情绪 · 不哭闹用英语表达感受",
      "theme": {
        "paper": "#FAF5FE",
        "accent": "#7B4B94",
        "accentLip": "#512B66",
        "pillBg": "#EFE3FA",
        "ink": "#3B1D4E"
      },
      "defaultScene": "./img/v3/scenes/ep023_main.jpg",
      "sceneLabel": "温暖绘本情绪角",
      "worksheet": "./worksheets/EP023-亲子涂色连线卡.jpg",
      "parentScript": [
        {
          "role": "👩 爸妈在生活场景里指一指",
          "line": "Look! Can you find: Happy?（留足 3 秒让宝贝观察）"
        },
        {
          "role": "🧒 引导宝贝手指点并开口",
          "line": "Happy! I am so happy!"
        },
        {
          "role": "👩 换一个对比物继续玩",
          "line": "Awesome! How about Sad? Sad. Oh, feeling a little sad."
        },
        {
          "role": "💡 本集不费妈陪玩锦囊",
          "line": "当宝贝开心或委屈时先抱抱共情：'Are you sad or happy? I'm here!'"
        }
      ],
      "words": [
        {
          "key": "happy",
          "word": "Happy",
          "zh": "开心的",
          "sentence": "Happy! I am so happy!",
          "highlight": "Happy",
          "color": "#E5533D",
          "soft": "#FFEAE6",
          "cardImg": "./img/v3/cards/EP023/happy.png",
          "sceneImg": "./img/v3/scenes/ep023_happy.jpg",
          "sceneTag": "温暖绘本情绪角 · 开心的",
          "distractor": "sad",
          "leadAudio": "./audio/v3/EP023/lead_happy.mp3",
          "teachAudio": "./audio/v3/EP023/teach_happy.mp3",
          "quizAudio": "./audio/v3/EP023/quiz_happy.mp3",
          "ansAudio": "./audio/v3/EP023/ans_happy.mp3"
        },
        {
          "key": "sad",
          "word": "Sad",
          "zh": "难过的",
          "sentence": "Sad. Oh, feeling a little sad.",
          "highlight": "Sad",
          "color": "#357EC7",
          "soft": "#E5F2FF",
          "cardImg": "./img/v3/cards/EP023/sad.png",
          "sceneImg": "./img/v3/scenes/ep023_sad.jpg",
          "sceneTag": "温暖绘本情绪角 · 难过的",
          "distractor": "scared",
          "leadAudio": "./audio/v3/EP023/lead_sad.mp3",
          "teachAudio": "./audio/v3/EP023/teach_sad.mp3",
          "quizAudio": "./audio/v3/EP023/quiz_sad.mp3",
          "ansAudio": "./audio/v3/EP023/ans_sad.mp3"
        },
        {
          "key": "scared",
          "word": "Scared",
          "zh": "害怕的",
          "sentence": "Scared! Don't be scared!",
          "highlight": "Scared",
          "color": "#D98A16",
          "soft": "#FFF5D6",
          "cardImg": "./img/v3/cards/EP023/scared.png",
          "sceneImg": "./img/v3/scenes/ep023_scared.jpg",
          "sceneTag": "温暖绘本情绪角 · 害怕的",
          "distractor": "angry",
          "leadAudio": "./audio/v3/EP023/lead_scared.mp3",
          "teachAudio": "./audio/v3/EP023/teach_scared.mp3",
          "quizAudio": "./audio/v3/EP023/quiz_scared.mp3",
          "ansAudio": "./audio/v3/EP023/ans_scared.mp3"
        },
        {
          "key": "angry",
          "word": "Angry",
          "zh": "生气的",
          "sentence": "Angry. Take a deep breath!",
          "highlight": "Angry",
          "color": "#3E9B52",
          "soft": "#E4F7E8",
          "cardImg": "./img/v3/cards/EP023/angry.png",
          "sceneImg": "./img/v3/scenes/ep023_angry.jpg",
          "sceneTag": "温暖绘本情绪角 · 生气的",
          "distractor": "happy",
          "leadAudio": "./audio/v3/EP023/lead_angry.mp3",
          "teachAudio": "./audio/v3/EP023/teach_angry.mp3",
          "quizAudio": "./audio/v3/EP023/quiz_angry.mp3",
          "ansAudio": "./audio/v3/EP023/ans_angry.mp3"
        }
      ]
    },
    "EP024": {
      "id": "EP024",
      "num": 24,
      "title": "一起玩会轮流",
      "enTitle": "Taking Turns",
      "subtitle": "第 24 集 · 友爱游乐场",
      "island": "情商社交",
      "hook": "社交黄金四句话 · 排排队轮流玩不抢玩具",
      "theme": {
        "paper": "#FAF5FE",
        "accent": "#7B4B94",
        "accentLip": "#512B66",
        "pillBg": "#EFE3FA",
        "ink": "#3B1D4E"
      },
      "defaultScene": "./img/v3/scenes/ep024_main.jpg",
      "sceneLabel": "友爱游乐场",
      "worksheet": "./worksheets/EP024-亲子涂色连线卡.jpg",
      "parentScript": [
        {
          "role": "👩 爸妈在生活场景里指一指",
          "line": "Look! Can you find: My turn?（留足 3 秒让宝贝观察）"
        },
        {
          "role": "🧒 引导宝贝手指点并开口",
          "line": "My turn! Watch me go!"
        },
        {
          "role": "👩 换一个对比物继续玩",
          "line": "Awesome! How about Your turn? Your turn! Go ahead!"
        },
        {
          "role": "💡 本集不费妈陪玩锦囊",
          "line": "在家滚皮球或搭积木时一人一次，边递边说 'My turn! Now your turn!'"
        }
      ],
      "words": [
        {
          "key": "my_turn",
          "word": "My turn",
          "zh": "轮到我啦",
          "sentence": "My turn! Watch me go!",
          "highlight": "turn",
          "color": "#E5533D",
          "soft": "#FFEAE6",
          "cardImg": "./img/v3/cards/EP024/my_turn.png",
          "sceneImg": "./img/v3/scenes/ep024_my_turn.jpg",
          "sceneTag": "友爱游乐场 · 轮到我啦",
          "distractor": "your_turn",
          "leadAudio": "./audio/v3/EP024/lead_my_turn.mp3",
          "teachAudio": "./audio/v3/EP024/teach_my_turn.mp3",
          "quizAudio": "./audio/v3/EP024/quiz_my_turn.mp3",
          "ansAudio": "./audio/v3/EP024/ans_my_turn.mp3"
        },
        {
          "key": "your_turn",
          "word": "Your turn",
          "zh": "轮到你啦",
          "sentence": "Your turn! Go ahead!",
          "highlight": "turn",
          "color": "#357EC7",
          "soft": "#E5F2FF",
          "cardImg": "./img/v3/cards/EP024/your_turn.png",
          "sceneImg": "./img/v3/scenes/ep024_your_turn.jpg",
          "sceneTag": "友爱游乐场 · 轮到你啦",
          "distractor": "thank_you",
          "leadAudio": "./audio/v3/EP024/lead_your_turn.mp3",
          "teachAudio": "./audio/v3/EP024/teach_your_turn.mp3",
          "quizAudio": "./audio/v3/EP024/quiz_your_turn.mp3",
          "ansAudio": "./audio/v3/EP024/ans_your_turn.mp3"
        },
        {
          "key": "thank_you",
          "word": "Thank you",
          "zh": "谢谢你",
          "sentence": "Thank you! Thank you so much!",
          "highlight": "you",
          "color": "#D98A16",
          "soft": "#FFF5D6",
          "cardImg": "./img/v3/cards/EP024/thank_you.png",
          "sceneImg": "./img/v3/scenes/ep024_thank_you.jpg",
          "sceneTag": "友爱游乐场 · 谢谢你",
          "distractor": "youre_welcome",
          "leadAudio": "./audio/v3/EP024/lead_thank_you.mp3",
          "teachAudio": "./audio/v3/EP024/teach_thank_you.mp3",
          "quizAudio": "./audio/v3/EP024/quiz_thank_you.mp3",
          "ansAudio": "./audio/v3/EP024/ans_thank_you.mp3"
        },
        {
          "key": "youre_welcome",
          "word": "You're welcome",
          "zh": "不用谢",
          "sentence": "You're welcome! Happy to share!",
          "highlight": "welcome",
          "color": "#3E9B52",
          "soft": "#E4F7E8",
          "cardImg": "./img/v3/cards/EP024/youre_welcome.png",
          "sceneImg": "./img/v3/scenes/ep024_youre_welcome.jpg",
          "sceneTag": "友爱游乐场 · 不用谢",
          "distractor": "my_turn",
          "leadAudio": "./audio/v3/EP024/lead_youre_welcome.mp3",
          "teachAudio": "./audio/v3/EP024/teach_youre_welcome.mp3",
          "quizAudio": "./audio/v3/EP024/quiz_youre_welcome.mp3",
          "ansAudio": "./audio/v3/EP024/ans_youre_welcome.mp3"
        }
      ]
    },
    "EP025": {
      "id": "EP025",
      "num": 25,
      "title": "开口请别人帮忙",
      "enTitle": "Polite Requests",
      "subtitle": "第 25 集 · 礼貌文具小铺",
      "island": "情商社交",
      "hook": "想要东西不急躁 · 礼貌开口请别人递给自己",
      "theme": {
        "paper": "#FAF5FE",
        "accent": "#7B4B94",
        "accentLip": "#512B66",
        "pillBg": "#EFE3FA",
        "ink": "#3B1D4E"
      },
      "defaultScene": "./img/v3/scenes/ep025_main.jpg",
      "sceneLabel": "礼貌文具小铺",
      "worksheet": "./worksheets/EP025-亲子涂色连线卡.jpg",
      "parentScript": [
        {
          "role": "👩 爸妈在生活场景里指一指",
          "line": "Look! Can you find: Please?（留足 3 秒让宝贝观察）"
        },
        {
          "role": "🧒 引导宝贝手指点并开口",
          "line": "Please! Help me, please!"
        },
        {
          "role": "👩 换一个对比物继续玩",
          "line": "Awesome! How about Can I have?? Can I have a crayon, please?"
        },
        {
          "role": "💡 本集不费妈陪玩锦囊",
          "line": "和宝贝玩过家家小商店，买东西先说 'Can I have ..., please?'，递过去说 'Here you go!'"
        }
      ],
      "words": [
        {
          "key": "please",
          "word": "Please",
          "zh": "请 · 礼貌魔法词",
          "sentence": "Please! Help me, please!",
          "highlight": "Please",
          "color": "#E5533D",
          "soft": "#FFEAE6",
          "cardImg": "./img/v3/cards/EP025/please.png",
          "sceneImg": "./img/v3/scenes/ep025_please.jpg",
          "sceneTag": "礼貌文具小铺 · 请",
          "distractor": "can_i_have",
          "leadAudio": "./audio/v3/EP025/lead_please.mp3",
          "teachAudio": "./audio/v3/EP025/teach_please.mp3",
          "quizAudio": "./audio/v3/EP025/quiz_please.mp3",
          "ansAudio": "./audio/v3/EP025/ans_please.mp3"
        },
        {
          "key": "can_i_have",
          "word": "Can I have?",
          "zh": "可以给我吗",
          "sentence": "Can I have a crayon, please?",
          "highlight": "have",
          "color": "#357EC7",
          "soft": "#E5F2FF",
          "cardImg": "./img/v3/cards/EP025/can_i_have.png",
          "sceneImg": "./img/v3/scenes/ep025_can_i_have.jpg",
          "sceneTag": "礼貌文具小铺 · 可以给我吗",
          "distractor": "here_you_go",
          "leadAudio": "./audio/v3/EP025/lead_can_i_have.mp3",
          "teachAudio": "./audio/v3/EP025/teach_can_i_have.mp3",
          "quizAudio": "./audio/v3/EP025/quiz_can_i_have.mp3",
          "ansAudio": "./audio/v3/EP025/ans_can_i_have.mp3"
        },
        {
          "key": "here_you_go",
          "word": "Here you go",
          "zh": "给你吧",
          "sentence": "Here you go! Take it!",
          "highlight": "go",
          "color": "#D98A16",
          "soft": "#FFF5D6",
          "cardImg": "./img/v3/cards/EP025/here_you_go.png",
          "sceneImg": "./img/v3/scenes/ep025_here_you_go.jpg",
          "sceneTag": "礼貌文具小铺 · 给你吧",
          "distractor": "wait",
          "leadAudio": "./audio/v3/EP025/lead_here_you_go.mp3",
          "teachAudio": "./audio/v3/EP025/teach_here_you_go.mp3",
          "quizAudio": "./audio/v3/EP025/quiz_here_you_go.mp3",
          "ansAudio": "./audio/v3/EP025/ans_here_you_go.mp3"
        },
        {
          "key": "wait",
          "word": "Wait",
          "zh": "耐心等一等",
          "sentence": "Wait! Wait a moment, please!",
          "highlight": "Wait",
          "color": "#3E9B52",
          "soft": "#E4F7E8",
          "cardImg": "./img/v3/cards/EP025/wait.png",
          "sceneImg": "./img/v3/scenes/ep025_wait.jpg",
          "sceneTag": "礼貌文具小铺 · 耐心等一等",
          "distractor": "please",
          "leadAudio": "./audio/v3/EP025/lead_wait.mp3",
          "teachAudio": "./audio/v3/EP025/teach_wait.mp3",
          "quizAudio": "./audio/v3/EP025/quiz_wait.mp3",
          "ansAudio": "./audio/v3/EP025/ans_wait.mp3"
        }
      ]
    },
    "EP026": {
      "id": "EP026",
      "num": 26,
      "title": "说说喜欢什么",
      "enTitle": "Likes & Dislikes",
      "subtitle": "第 26 集 · 美味点心吧台",
      "island": "美味餐桌",
      "hook": "从蹦单词升级说整句 · 自信表达我喜欢什么",
      "theme": {
        "paper": "#FFF6F4",
        "accent": "#C94A38",
        "accentLip": "#8E2B1D",
        "pillBg": "#FDE4DF",
        "ink": "#4F1D16"
      },
      "defaultScene": "./img/v3/scenes/ep026_main.jpg",
      "sceneLabel": "美味点心吧台",
      "worksheet": "./worksheets/EP026-亲子涂色连线卡.jpg",
      "parentScript": [
        {
          "role": "👩 爸妈在生活场景里指一指",
          "line": "Look! Can you find: I like ...?（留足 3 秒让宝贝观察）"
        },
        {
          "role": "🧒 引导宝贝手指点并开口",
          "line": "I like sweet red apples!"
        },
        {
          "role": "👩 换一个对比物继续玩",
          "line": "Awesome! How about I don't like? Ooh, sour! I don't like lemons."
        },
        {
          "role": "💡 本集不费妈陪玩锦囊",
          "line": "吃水果点心时问宝贝：'Do you like apples?'，鼓励回答 'Yes, I do! I like apples!'"
        }
      ],
      "words": [
        {
          "key": "i_like",
          "word": "I like ...",
          "zh": "我喜欢",
          "sentence": "I like sweet red apples!",
          "highlight": "...",
          "color": "#E5533D",
          "soft": "#FFEAE6",
          "cardImg": "./img/v3/cards/EP026/i_like.png",
          "sceneImg": "./img/v3/scenes/ep026_i_like.jpg",
          "sceneTag": "美味点心吧台 · 我喜欢",
          "distractor": "i_dont_like",
          "leadAudio": "./audio/v3/EP026/lead_i_like.mp3",
          "teachAudio": "./audio/v3/EP026/teach_i_like.mp3",
          "quizAudio": "./audio/v3/EP026/quiz_i_like.mp3",
          "ansAudio": "./audio/v3/EP026/ans_i_like.mp3"
        },
        {
          "key": "i_dont_like",
          "word": "I don't like",
          "zh": "我不喜欢",
          "sentence": "Ooh, sour! I don't like lemons.",
          "highlight": "like",
          "color": "#357EC7",
          "soft": "#E5F2FF",
          "cardImg": "./img/v3/cards/EP026/i_dont_like.png",
          "sceneImg": "./img/v3/scenes/ep026_i_dont_like.jpg",
          "sceneTag": "美味点心吧台 · 我不喜欢",
          "distractor": "do_you_like",
          "leadAudio": "./audio/v3/EP026/lead_i_dont_like.mp3",
          "teachAudio": "./audio/v3/EP026/teach_i_dont_like.mp3",
          "quizAudio": "./audio/v3/EP026/quiz_i_dont_like.mp3",
          "ansAudio": "./audio/v3/EP026/ans_i_dont_like.mp3"
        },
        {
          "key": "do_you_like",
          "word": "Do you like?",
          "zh": "你喜欢吗",
          "sentence": "Do you like yummy cookies?",
          "highlight": "like",
          "color": "#D98A16",
          "soft": "#FFF5D6",
          "cardImg": "./img/v3/cards/EP026/do_you_like.png",
          "sceneImg": "./img/v3/scenes/ep026_do_you_like.jpg",
          "sceneTag": "美味点心吧台 · 你喜欢吗",
          "distractor": "yes_i_do",
          "leadAudio": "./audio/v3/EP026/lead_do_you_like.mp3",
          "teachAudio": "./audio/v3/EP026/teach_do_you_like.mp3",
          "quizAudio": "./audio/v3/EP026/quiz_do_you_like.mp3",
          "ansAudio": "./audio/v3/EP026/ans_do_you_like.mp3"
        },
        {
          "key": "yes_i_do",
          "word": "Yes, I do!",
          "zh": "是的我喜欢",
          "sentence": "Yes, I do! Yummy, yummy!",
          "highlight": "do",
          "color": "#3E9B52",
          "soft": "#E4F7E8",
          "cardImg": "./img/v3/cards/EP026/yes_i_do.png",
          "sceneImg": "./img/v3/scenes/ep026_yes_i_do.jpg",
          "sceneTag": "美味点心吧台 · 是的我喜欢",
          "distractor": "i_like",
          "leadAudio": "./audio/v3/EP026/lead_yes_i_do.mp3",
          "teachAudio": "./audio/v3/EP026/teach_yes_i_do.mp3",
          "quizAudio": "./audio/v3/EP026/quiz_yes_i_do.mp3",
          "ansAudio": "./audio/v3/EP026/ans_yes_i_do.mp3"
        }
      ]
    },
    "EP027": {
      "id": "EP027",
      "num": 27,
      "title": "自己穿衣服",
      "enTitle": "put on · take off · zip up · button up",
      "subtitle": "第 27 集 · 玄关衣帽圆毯角",
      "island": "身体日常",
      "hook": "早上催穿衣不吼娃 · 4 句自理英语",
      "theme": {
        "paper": "#F6FBEF",
        "accent": "#4D8B31",
        "accentLip": "#2E5B1B",
        "pillBg": "#E5F5D4",
        "ink": "#243E16"
      },
      "defaultScene": "./img/v3/scenes/ep027_main.jpg",
      "sceneLabel": "玄关衣帽圆毯角",
      "worksheet": "./worksheets/EP027-亲子涂色连线卡.jpg",
      "parentScript": [
        {
          "role": "👩 妈妈递外套",
          "line": "Time to go! <strong>Put on</strong> your coat!"
        },
        {
          "role": "🧒 引导宝贝说",
          "line": "I can <strong>zip up</strong>! / <strong>Button up</strong>!"
        },
        {
          "role": "👩 回家进门时",
          "line": "Welcome home! <strong>Take off</strong> your coat!"
        },
        {
          "role": "🌟 夸奖收尾",
          "line": "Wow, you did it all by yourself!"
        }
      ],
      "words": [
        {
          "key": "put_on",
          "word": "Put on",
          "zh": "穿上",
          "sentence": "Put on your coat!",
          "highlight": "put",
          "color": "#15803D",
          "soft": "#DCFCE7",
          "cardImg": "./img/v3/cards/EP027/put_on.png",
          "sceneImg": "./img/v3/scenes/ep027_w1.jpg",
          "sceneTag": "早上穿外套时用",
          "distractor": "take_off",
          "leadAudio": "./audio/v3/EP027/lead_put_on.mp3",
          "teachAudio": "./audio/v3/EP027/teach_put_on.mp3",
          "quizAudio": "./audio/v3/EP027/quiz_put_on.mp3",
          "ansAudio": "./audio/v3/EP027/ans_put_on.mp3"
        },
        {
          "key": "take_off",
          "word": "Take off",
          "zh": "脱下",
          "sentence": "Take off your hat!",
          "highlight": "take",
          "color": "#EA580C",
          "soft": "#FFEDD5",
          "cardImg": "./img/v3/cards/EP027/take_off.png",
          "sceneImg": "./img/v3/scenes/ep027_w2.jpg",
          "sceneTag": "回家进门脱衣时用",
          "distractor": "put_on",
          "leadAudio": "./audio/v3/EP027/lead_take_off.mp3",
          "teachAudio": "./audio/v3/EP027/teach_take_off.mp3",
          "quizAudio": "./audio/v3/EP027/quiz_take_off.mp3",
          "ansAudio": "./audio/v3/EP027/ans_take_off.mp3"
        },
        {
          "key": "zip_up",
          "word": "Zip up",
          "zh": "拉拉链",
          "sentence": "Zip up your jacket!",
          "highlight": "zip",
          "color": "#0284C7",
          "soft": "#E0F2FE",
          "cardImg": "./img/v3/cards/EP027/zip_up.png",
          "sceneImg": "./img/v3/scenes/ep027_w3.jpg",
          "sceneTag": "拉拉链时边拉边说",
          "distractor": "button_up",
          "leadAudio": "./audio/v3/EP027/lead_zip_up.mp3",
          "teachAudio": "./audio/v3/EP027/teach_zip_up.mp3",
          "quizAudio": "./audio/v3/EP027/quiz_zip_up.mp3",
          "ansAudio": "./audio/v3/EP027/ans_zip_up.mp3"
        },
        {
          "key": "button_up",
          "word": "Button up",
          "zh": "扣扣子",
          "sentence": "Button up your sweater!",
          "highlight": "button",
          "color": "#E11D48",
          "soft": "#FFE4E6",
          "cardImg": "./img/v3/cards/EP027/button_up.png",
          "sceneImg": "./img/v3/scenes/ep027_w4.jpg",
          "sceneTag": "扣纽扣时慢声鼓励",
          "distractor": "zip_up",
          "leadAudio": "./audio/v3/EP027/lead_button_up.mp3",
          "teachAudio": "./audio/v3/EP027/teach_button_up.mp3",
          "quizAudio": "./audio/v3/EP027/quiz_button_up.mp3",
          "ansAudio": "./audio/v3/EP027/ans_button_up.mp3"
        }
      ]
    },
    "EP028": {
      "id": "EP028",
      "num": 28,
      "title": "饿了渴了会自己说",
      "enTitle": "hungry · thirsty · tired · full",
      "subtitle": "第 28 集 · 阳光早餐桌主景",
      "island": "美味餐桌",
      "hook": "告别哭闹猜需求 · 4 句身体感受英语",
      "theme": {
        "paper": "#FFF6F4",
        "accent": "#C94A38",
        "accentLip": "#8E2B1D",
        "pillBg": "#FDE4DF",
        "ink": "#4F1D16"
      },
      "defaultScene": "./img/v3/scenes/ep028_main.jpg",
      "sceneLabel": "阳光早餐桌主景",
      "worksheet": "./worksheets/EP028-亲子涂色连线卡.jpg",
      "parentScript": [
        {
          "role": "👩 妈妈饭前问",
          "line": "Are you <strong>hungry</strong>? Let's eat!"
        },
        {
          "role": "🧒 引导宝贝说",
          "line": "Yes! I'm <strong>hungry</strong>! / Water, I'm <strong>thirsty</strong>!"
        },
        {
          "role": "👩 吃完饭后问",
          "line": "Are you <strong>full</strong>? Pat your tummy!"
        },
        {
          "role": "🌙 睡前犯困时",
          "line": "I'm <strong>tired</strong>. Time for a cozy nap!"
        }
      ],
      "words": [
        {
          "key": "hungry",
          "word": "Hungry",
          "zh": "饿了",
          "sentence": "I'm hungry!",
          "highlight": "hungry",
          "color": "#EA580C",
          "soft": "#FFEDD5",
          "cardImg": "./img/v3/cards/EP028/hungry.png",
          "sceneImg": "./img/v3/scenes/ep028_w1.jpg",
          "sceneTag": "饭前摸摸小肚子说",
          "distractor": "full",
          "leadAudio": "./audio/v3/EP028/lead_hungry.mp3",
          "teachAudio": "./audio/v3/EP028/teach_hungry.mp3",
          "quizAudio": "./audio/v3/EP028/quiz_hungry.mp3",
          "ansAudio": "./audio/v3/EP028/ans_hungry.mp3"
        },
        {
          "key": "full",
          "word": "Full",
          "zh": "吃饱了",
          "sentence": "I'm full!",
          "highlight": "full",
          "color": "#059669",
          "soft": "#D1FAE5",
          "cardImg": "./img/v3/cards/EP028/full.png",
          "sceneImg": "./img/v3/scenes/ep028_w2.jpg",
          "sceneTag": "吃完拍拍小肚子说",
          "distractor": "hungry",
          "leadAudio": "./audio/v3/EP028/lead_full.mp3",
          "teachAudio": "./audio/v3/EP028/teach_full.mp3",
          "quizAudio": "./audio/v3/EP028/quiz_full.mp3",
          "ansAudio": "./audio/v3/EP028/ans_full.mp3"
        },
        {
          "key": "thirsty",
          "word": "Thirsty",
          "zh": "渴了",
          "sentence": "I'm thirsty!",
          "highlight": "thirsty",
          "color": "#0284C7",
          "soft": "#E0F2FE",
          "cardImg": "./img/v3/cards/EP028/thirsty.png",
          "sceneImg": "./img/v3/scenes/ep028_w3.jpg",
          "sceneTag": "玩累递水杯时说",
          "distractor": "tired",
          "leadAudio": "./audio/v3/EP028/lead_thirsty.mp3",
          "teachAudio": "./audio/v3/EP028/teach_thirsty.mp3",
          "quizAudio": "./audio/v3/EP028/quiz_thirsty.mp3",
          "ansAudio": "./audio/v3/EP028/ans_thirsty.mp3"
        },
        {
          "key": "tired",
          "word": "Tired",
          "zh": "累了",
          "sentence": "I'm tired!",
          "highlight": "tired",
          "color": "#7C3AED",
          "soft": "#EDE9FE",
          "cardImg": "./img/v3/cards/EP028/tired.png",
          "sceneImg": "./img/v3/scenes/ep028_w4.jpg",
          "sceneTag": "午睡打哈欠时用",
          "distractor": "thirsty",
          "leadAudio": "./audio/v3/EP028/lead_tired.mp3",
          "teachAudio": "./audio/v3/EP028/teach_tired.mp3",
          "quizAudio": "./audio/v3/EP028/quiz_tired.mp3",
          "ansAudio": "./audio/v3/EP028/ans_tired.mp3"
        }
      ]
    },
    "EP029": {
      "id": "EP029",
      "num": 29,
      "title": "动物会什么",
      "enTitle": "swim · fly · hop · run",
      "subtitle": "第 29 集 · 阳光草坪大树主景",
      "island": "自然探索",
      "hook": "去公园边玩边模仿 · 4 个动物动作词",
      "theme": {
        "paper": "#F2FBF8",
        "accent": "#1F7A65",
        "accentLip": "#124E40",
        "pillBg": "#DCF5EE",
        "ink": "#134035"
      },
      "defaultScene": "./img/v3/scenes/ep029_main.jpg",
      "sceneLabel": "阳光草坪大树主景",
      "worksheet": "./worksheets/EP029-亲子涂色连线卡.jpg",
      "parentScript": [
        {
          "role": "👩 妈妈指池塘",
          "line": "Look at the duck! It can <strong>swim</strong>!"
        },
        {
          "role": "🧒 引导宝贝模仿",
          "line": "I can <strong>fly</strong> like a bird! Flap, flap!"
        },
        {
          "role": "👩 草地互动游戏",
          "line": "Can you <strong>hop</strong> like a frog?"
        },
        {
          "role": "🏃 奔跑放风收尾",
          "line": "Ready, set, <strong>run</strong>! Good job!"
        }
      ],
      "words": [
        {
          "key": "swim",
          "word": "Swim",
          "zh": "游泳",
          "sentence": "A duck can swim!",
          "highlight": "swim",
          "color": "#0284C7",
          "soft": "#E0F2FE",
          "cardImg": "./img/v3/cards/EP029/swim.png",
          "sceneImg": "./img/v3/scenes/ep029_w1.jpg",
          "sceneTag": "看小鸭划水时说",
          "distractor": "fly",
          "leadAudio": "./audio/v3/EP029/lead_swim.mp3",
          "teachAudio": "./audio/v3/EP029/teach_swim.mp3",
          "quizAudio": "./audio/v3/EP029/quiz_swim.mp3",
          "ansAudio": "./audio/v3/EP029/ans_swim.mp3"
        },
        {
          "key": "fly",
          "word": "Fly",
          "zh": "飞",
          "sentence": "A bird can fly!",
          "highlight": "fly",
          "color": "#0D9488",
          "soft": "#CCFBF1",
          "cardImg": "./img/v3/cards/EP029/fly.png",
          "sceneImg": "./img/v3/scenes/ep029_w2.jpg",
          "sceneTag": "抬头看小鸟时说",
          "distractor": "swim",
          "leadAudio": "./audio/v3/EP029/lead_fly.mp3",
          "teachAudio": "./audio/v3/EP029/teach_fly.mp3",
          "quizAudio": "./audio/v3/EP029/quiz_fly.mp3",
          "ansAudio": "./audio/v3/EP029/ans_fly.mp3"
        },
        {
          "key": "hop",
          "word": "Hop",
          "zh": "蹦跳",
          "sentence": "A frog can hop!",
          "highlight": "hop",
          "color": "#15803D",
          "soft": "#DCFCE7",
          "cardImg": "./img/v3/cards/EP029/hop.png",
          "sceneImg": "./img/v3/scenes/ep029_w3.jpg",
          "sceneTag": "像青蛙小兔蹦跳时用",
          "distractor": "run",
          "leadAudio": "./audio/v3/EP029/lead_hop.mp3",
          "teachAudio": "./audio/v3/EP029/teach_hop.mp3",
          "quizAudio": "./audio/v3/EP029/quiz_hop.mp3",
          "ansAudio": "./audio/v3/EP029/ans_hop.mp3"
        },
        {
          "key": "run",
          "word": "Run",
          "zh": "跑",
          "sentence": "A puppy can run!",
          "highlight": "run",
          "color": "#EA580C",
          "soft": "#FFEDD5",
          "cardImg": "./img/v3/cards/EP029/run.png",
          "sceneImg": "./img/v3/scenes/ep029_w4.jpg",
          "sceneTag": "在草地奔跑时说",
          "distractor": "hop",
          "leadAudio": "./audio/v3/EP029/lead_run.mp3",
          "teachAudio": "./audio/v3/EP029/teach_run.mp3",
          "quizAudio": "./audio/v3/EP029/quiz_run.mp3",
          "ansAudio": "./audio/v3/EP029/ans_run.mp3"
        }
      ]
    },
    "EP030": {
      "id": "EP030",
      "num": 30,
      "title": "自己收拾玩具",
      "enTitle": "clean up · put away · pick up · throw away",
      "subtitle": "第 30 集 · 原木玩具收纳角",
      "island": "家园出行",
      "hook": "玩具满地不吼娃 · 4 句收拾自理口令",
      "theme": {
        "paper": "#F3F9FE",
        "accent": "#2B6CB0",
        "accentLip": "#1B4678",
        "pillBg": "#DCEEFF",
        "ink": "#1A365D"
      },
      "defaultScene": "./img/v3/scenes/ep030_main.jpg",
      "sceneLabel": "原木玩具收纳角",
      "worksheet": "./worksheets/EP030-亲子涂色连线卡.jpg",
      "parentScript": [
        {
          "role": "👩 妈妈开启游戏",
          "line": "Time to <strong>clean up</strong>! Let's race!"
        },
        {
          "role": "🧒 引导宝贝行动",
          "line": "I can <strong>pick up</strong> the blocks!"
        },
        {
          "role": "👩 送玩具回小家",
          "line": "Great! Now <strong>put away</strong> your teddy bear!"
        },
        {
          "role": "🗑️ 整理废纸收尾",
          "line": "<strong>Throw away</strong> the paper. So tidy!"
        }
      ],
      "words": [
        {
          "key": "clean_up",
          "word": "Clean up",
          "zh": "收拾整理",
          "sentence": "Let's clean up!",
          "highlight": "clean",
          "color": "#0284C7",
          "soft": "#E0F2FE",
          "cardImg": "./img/v3/cards/EP030/clean_up.png",
          "sceneImg": "./img/v3/scenes/ep030_w1.jpg",
          "sceneTag": "玩完玩具收场时用",
          "distractor": "put_away",
          "leadAudio": "./audio/v3/EP030/lead_clean_up.mp3",
          "teachAudio": "./audio/v3/EP030/teach_clean_up.mp3",
          "quizAudio": "./audio/v3/EP030/quiz_clean_up.mp3",
          "ansAudio": "./audio/v3/EP030/ans_clean_up.mp3"
        },
        {
          "key": "put_away",
          "word": "Put away",
          "zh": "放回原位",
          "sentence": "Put away the toys!",
          "highlight": "put",
          "color": "#7C3AED",
          "soft": "#EDE9FE",
          "cardImg": "./img/v3/cards/EP030/put_away.png",
          "sceneImg": "./img/v3/scenes/ep030_w2.jpg",
          "sceneTag": "玩具放回书架盒时用",
          "distractor": "clean_up",
          "leadAudio": "./audio/v3/EP030/lead_put_away.mp3",
          "teachAudio": "./audio/v3/EP030/teach_put_away.mp3",
          "quizAudio": "./audio/v3/EP030/quiz_put_away.mp3",
          "ansAudio": "./audio/v3/EP030/ans_put_away.mp3"
        },
        {
          "key": "pick_up",
          "word": "Pick up",
          "zh": "捡起来",
          "sentence": "Pick up the blocks!",
          "highlight": "pick",
          "color": "#D97706",
          "soft": "#FEF3C7",
          "cardImg": "./img/v3/cards/EP030/pick_up.png",
          "sceneImg": "./img/v3/scenes/ep030_w3.jpg",
          "sceneTag": "捡起地上积木球时用",
          "distractor": "throw_away",
          "leadAudio": "./audio/v3/EP030/lead_pick_up.mp3",
          "teachAudio": "./audio/v3/EP030/teach_pick_up.mp3",
          "quizAudio": "./audio/v3/EP030/quiz_pick_up.mp3",
          "ansAudio": "./audio/v3/EP030/ans_pick_up.mp3"
        },
        {
          "key": "throw_away",
          "word": "Throw away",
          "zh": "扔进垃圾桶",
          "sentence": "Throw away the trash!",
          "highlight": "throw",
          "color": "#059669",
          "soft": "#D1FAE5",
          "cardImg": "./img/v3/cards/EP030/throw_away.png",
          "sceneImg": "./img/v3/scenes/ep030_w4.jpg",
          "sceneTag": "丢废纸进垃圾桶时用",
          "distractor": "pick_up",
          "leadAudio": "./audio/v3/EP030/lead_throw_away.mp3",
          "teachAudio": "./audio/v3/EP030/teach_throw_away.mp3",
          "quizAudio": "./audio/v3/EP030/quiz_throw_away.mp3",
          "ansAudio": "./audio/v3/EP030/ans_throw_away.mp3"
        }
      ]
    },
    "EP031": {
      "id": "EP031",
      "num": 31,
      "title": "冷热软硬大探索",
      "enTitle": "hot · cold · soft · hard",
      "subtitle": "第 31 集 · 阳光矮桌探索角",
      "island": "基础认知",
      "hook": "喝汤摸抱枕随手启蒙 · 4 个感官反义词",
      "theme": {
        "paper": "#FFF8EA",
        "accent": "#D97724",
        "accentLip": "#9A4E10",
        "pillBg": "#FFE9C2",
        "ink": "#4A2C14"
      },
      "defaultScene": "./img/v3/scenes/ep031_main.jpg",
      "sceneLabel": "阳光矮桌探索角",
      "worksheet": "./worksheets/EP031-亲子涂色连线卡.jpg",
      "parentScript": [
        {
          "role": "👩 端热汤提醒",
          "line": "Careful! The soup is <strong>hot</strong>! Blow on it!"
        },
        {
          "role": "🧊 摸冰块体验",
          "line": "Brr! Ice is <strong>cold</strong>!"
        },
        {
          "role": "👩 抱枕头对比",
          "line": "Touch the pillow—it is <strong>soft</strong>!"
        },
        {
          "role": "🧒 敲积木回答",
          "line": "Knock, knock! The wooden block is <strong>hard</strong>!"
        }
      ],
      "words": [
        {
          "key": "hot",
          "word": "Hot",
          "zh": "热的",
          "sentence": "The soup is hot!",
          "highlight": "hot",
          "color": "#DC2626",
          "soft": "#FEE2E2",
          "cardImg": "./img/v3/cards/EP031/hot.png",
          "sceneImg": "./img/v3/scenes/ep031_w1.jpg",
          "sceneTag": "端热汤提醒小心烫",
          "distractor": "cold",
          "leadAudio": "./audio/v3/EP031/lead_hot.mp3",
          "teachAudio": "./audio/v3/EP031/teach_hot.mp3",
          "quizAudio": "./audio/v3/EP031/quiz_hot.mp3",
          "ansAudio": "./audio/v3/EP031/ans_hot.mp3"
        },
        {
          "key": "cold",
          "word": "Cold",
          "zh": "冷的",
          "sentence": "The ice is cold!",
          "highlight": "cold",
          "color": "#0284C7",
          "soft": "#E0F2FE",
          "cardImg": "./img/v3/cards/EP031/cold.png",
          "sceneImg": "./img/v3/scenes/ep031_w2.jpg",
          "sceneTag": "摸冰块水果对比说",
          "distractor": "hot",
          "leadAudio": "./audio/v3/EP031/lead_cold.mp3",
          "teachAudio": "./audio/v3/EP031/teach_cold.mp3",
          "quizAudio": "./audio/v3/EP031/quiz_cold.mp3",
          "ansAudio": "./audio/v3/EP031/ans_cold.mp3"
        },
        {
          "key": "soft",
          "word": "Soft",
          "zh": "软的",
          "sentence": "The pillow is soft!",
          "highlight": "soft",
          "color": "#DB2777",
          "soft": "#FCE7F3",
          "cardImg": "./img/v3/cards/EP031/soft.png",
          "sceneImg": "./img/v3/scenes/ep031_w3.jpg",
          "sceneTag": "抱毛绒枕头时体验",
          "distractor": "hard",
          "leadAudio": "./audio/v3/EP031/lead_soft.mp3",
          "teachAudio": "./audio/v3/EP031/teach_soft.mp3",
          "quizAudio": "./audio/v3/EP031/quiz_soft.mp3",
          "ansAudio": "./audio/v3/EP031/ans_soft.mp3"
        },
        {
          "key": "hard",
          "word": "Hard",
          "zh": "硬的",
          "sentence": "The block is hard!",
          "highlight": "hard",
          "color": "#B45309",
          "soft": "#FEF3C7",
          "cardImg": "./img/v3/cards/EP031/hard.png",
          "sceneImg": "./img/v3/scenes/ep031_w4.jpg",
          "sceneTag": "敲敲木积木时体验",
          "distractor": "soft",
          "leadAudio": "./audio/v3/EP031/lead_hard.mp3",
          "teachAudio": "./audio/v3/EP031/teach_hard.mp3",
          "quizAudio": "./audio/v3/EP031/quiz_hard.mp3",
          "ansAudio": "./audio/v3/EP031/ans_hard.mp3"
        }
      ]
    },
    "EP032": {
      "id": "EP032",
      "num": 32,
      "title": "外出安全四句话",
      "enTitle": "hold my hand · look both ways · walk slowly · stay close",
      "subtitle": "第 32 集 · 林荫斑马线十字路口",
      "island": "家园出行",
      "hook": "出门逛街不乱跑 · 4 句安全小口令",
      "theme": {
        "paper": "#F3F9FE",
        "accent": "#2B6CB0",
        "accentLip": "#1B4678",
        "pillBg": "#DCEEFF",
        "ink": "#1A365D"
      },
      "defaultScene": "./img/v3/scenes/ep032_main.jpg",
      "sceneLabel": "林荫斑马线十字路口",
      "worksheet": "./worksheets/EP032-亲子涂色连线卡.jpg",
      "parentScript": [
        {
          "role": "👩 过斑马线前",
          "line": "Stop! <strong>Hold my hand</strong> and <strong>look both ways</strong>!"
        },
        {
          "role": "🧒 引导宝贝回答",
          "line": "Left, right! Safe to go!"
        },
        {
          "role": "👩 上下楼梯时",
          "line": "Careful! Let's <strong>walk slowly</strong>!"
        },
        {
          "role": "🛍️ 逛商场集市",
          "line": "It's busy here. <strong>Stay close</strong> to Mommy!"
        }
      ],
      "words": [
        {
          "key": "hold_my_hand",
          "word": "Hold my hand",
          "zh": "牵紧我的手",
          "sentence": "Hold my hand, please!",
          "highlight": "hold",
          "color": "#0284C7",
          "soft": "#E0F2FE",
          "cardImg": "./img/v3/cards/EP032/hold_my_hand.png",
          "sceneImg": "./img/v3/scenes/ep032_w1.jpg",
          "sceneTag": "过街走人行道时说",
          "distractor": "look_both_ways",
          "leadAudio": "./audio/v3/EP032/lead_hold_my_hand.mp3",
          "teachAudio": "./audio/v3/EP032/teach_hold_my_hand.mp3",
          "quizAudio": "./audio/v3/EP032/quiz_hold_my_hand.mp3",
          "ansAudio": "./audio/v3/EP032/ans_hold_my_hand.mp3"
        },
        {
          "key": "look_both_ways",
          "word": "Look both ways",
          "zh": "看两边",
          "sentence": "Stop and look both ways!",
          "highlight": "look",
          "color": "#D97706",
          "soft": "#FEF3C7",
          "cardImg": "./img/v3/cards/EP032/look_both_ways.png",
          "sceneImg": "./img/v3/scenes/ep032_w2.jpg",
          "sceneTag": "过斑马线停步时说",
          "distractor": "hold_my_hand",
          "leadAudio": "./audio/v3/EP032/lead_look_both_ways.mp3",
          "teachAudio": "./audio/v3/EP032/teach_look_both_ways.mp3",
          "quizAudio": "./audio/v3/EP032/quiz_look_both_ways.mp3",
          "ansAudio": "./audio/v3/EP032/ans_look_both_ways.mp3"
        },
        {
          "key": "walk_slowly",
          "word": "Walk slowly",
          "zh": "慢慢走",
          "sentence": "Walk slowly, please!",
          "highlight": "walk",
          "color": "#059669",
          "soft": "#D1FAE5",
          "cardImg": "./img/v3/cards/EP032/walk_slowly.png",
          "sceneImg": "./img/v3/scenes/ep032_w3.jpg",
          "sceneTag": "上下台阶不奔跑时说",
          "distractor": "stay_close",
          "leadAudio": "./audio/v3/EP032/lead_walk_slowly.mp3",
          "teachAudio": "./audio/v3/EP032/teach_walk_slowly.mp3",
          "quizAudio": "./audio/v3/EP032/quiz_walk_slowly.mp3",
          "ansAudio": "./audio/v3/EP032/ans_walk_slowly.mp3"
        },
        {
          "key": "stay_close",
          "word": "Stay close",
          "zh": "跟紧我",
          "sentence": "Stay close to me!",
          "highlight": "stay",
          "color": "#E11D48",
          "soft": "#FFE4E6",
          "cardImg": "./img/v3/cards/EP032/stay_close.png",
          "sceneImg": "./img/v3/scenes/ep032_w4.jpg",
          "sceneTag": "商场集市人多时说",
          "distractor": "walk_slowly",
          "leadAudio": "./audio/v3/EP032/lead_stay_close.mp3",
          "teachAudio": "./audio/v3/EP032/teach_stay_close.mp3",
          "quizAudio": "./audio/v3/EP032/quiz_stay_close.mp3",
          "ansAudio": "./audio/v3/EP032/ans_stay_close.mp3"
        }
      ]
    },
    "EP033": {
      "id": "EP033",
      "num": 33,
      "title": "农场里的朋友",
      "enTitle": "cow · pig · sheep · horse",
      "subtitle": "第 33 集 · 红谷仓风车牧场全景",
      "island": "自然探索",
      "hook": "打卡阳光红谷仓农场 · 4 位动物好朋友",
      "theme": {
        "paper": "#F2FBF8",
        "accent": "#1F7A65",
        "accentLip": "#124E40",
        "pillBg": "#DCF5EE",
        "ink": "#134035"
      },
      "defaultScene": "./img/v3/scenes/ep033_main.jpg",
      "sceneLabel": "红谷仓风车牧场全景",
      "worksheet": "./worksheets/EP033-亲子涂色连线卡.jpg",
      "parentScript": [
        {
          "role": "👩 妈妈学叫声",
          "line": "Moo, moo! Who lives on the farm?"
        },
        {
          "role": "🧒 引导宝贝猜",
          "line": "It's a <strong>cow</strong>! / Oink, oink—a pink <strong>pig</strong>!"
        },
        {
          "role": "👩 摸毛绒联结",
          "line": "Baa! The <strong>sheep</strong> is so soft!"
        },
        {
          "role": "🐴 拍手学马蹄",
          "line": "Clip-clop! Look at the fast <strong>horse</strong>!"
        }
      ],
      "words": [
        {
          "key": "cow",
          "word": "Cow",
          "zh": "奶牛",
          "sentence": "Moo! A big cow!",
          "highlight": "cow",
          "color": "#0D9488",
          "soft": "#CCFBF1",
          "cardImg": "./img/v3/cards/EP033/cow.png",
          "sceneImg": "./img/v3/scenes/ep033_w1.jpg",
          "sceneTag": "喝牛奶时聊小奶牛",
          "distractor": "pig",
          "leadAudio": "./audio/v3/EP033/lead_cow.mp3",
          "teachAudio": "./audio/v3/EP033/teach_cow.mp3",
          "quizAudio": "./audio/v3/EP033/quiz_cow.mp3",
          "ansAudio": "./audio/v3/EP033/ans_cow.mp3"
        },
        {
          "key": "pig",
          "word": "Pig",
          "zh": "小猪",
          "sentence": "Oink! A pink pig!",
          "highlight": "pig",
          "color": "#DB2777",
          "soft": "#FCE7F3",
          "cardImg": "./img/v3/cards/EP033/pig.png",
          "sceneImg": "./img/v3/scenes/ep033_w2.jpg",
          "sceneTag": "学小猪哼哼声互动",
          "distractor": "cow",
          "leadAudio": "./audio/v3/EP033/lead_pig.mp3",
          "teachAudio": "./audio/v3/EP033/teach_pig.mp3",
          "quizAudio": "./audio/v3/EP033/quiz_pig.mp3",
          "ansAudio": "./audio/v3/EP033/ans_pig.mp3"
        },
        {
          "key": "sheep",
          "word": "Sheep",
          "zh": "绵羊",
          "sentence": "Baa! A fluffy sheep!",
          "highlight": "sheep",
          "color": "#0284C7",
          "soft": "#E0F2FE",
          "cardImg": "./img/v3/cards/EP033/sheep.png",
          "sceneImg": "./img/v3/scenes/ep033_w3.jpg",
          "sceneTag": "摸毛绒玩具聊绵羊",
          "distractor": "horse",
          "leadAudio": "./audio/v3/EP033/lead_sheep.mp3",
          "teachAudio": "./audio/v3/EP033/teach_sheep.mp3",
          "quizAudio": "./audio/v3/EP033/quiz_sheep.mp3",
          "ansAudio": "./audio/v3/EP033/ans_sheep.mp3"
        },
        {
          "key": "horse",
          "word": "Horse",
          "zh": "小马",
          "sentence": "Neigh! A brown horse!",
          "highlight": "horse",
          "color": "#B45309",
          "soft": "#FEF3C7",
          "cardImg": "./img/v3/cards/EP033/horse.png",
          "sceneImg": "./img/v3/scenes/ep033_w4.jpg",
          "sceneTag": "拍膝盖模仿马蹄声",
          "distractor": "sheep",
          "leadAudio": "./audio/v3/EP033/lead_horse.mp3",
          "teachAudio": "./audio/v3/EP033/teach_horse.mp3",
          "quizAudio": "./audio/v3/EP033/quiz_horse.mp3",
          "ansAudio": "./audio/v3/EP033/ans_horse.mp3"
        }
      ]
    },
    "EP034": {
      "id": "EP034",
      "num": 34,
      "title": "犯错道歉与和好",
      "enTitle": "I'm sorry · it's okay · let's share · be gentle",
      "subtitle": "第 34 集 · 阳光木屋绘本积木角",
      "island": "情商社交",
      "hook": "抢玩具撞倒哭鼻子 · 4 句高情商和好对话",
      "theme": {
        "paper": "#FAF5FE",
        "accent": "#7B4B94",
        "accentLip": "#512B66",
        "pillBg": "#EFE3FA",
        "ink": "#3B1D4E"
      },
      "defaultScene": "./img/v3/scenes/ep034_main.jpg",
      "sceneLabel": "阳光木屋绘本积木角",
      "worksheet": "./worksheets/EP034-亲子涂色连线卡.jpg",
      "parentScript": [
        {
          "role": "👩 撞倒积木引导",
          "line": "Oops! Say <strong>I'm sorry</strong> to your friend."
        },
        {
          "role": "🧒 微笑回应原谅",
          "line": "<strong>It's okay</strong>! We can build it again!"
        },
        {
          "role": "👩 鼓励一起玩耍",
          "line": "Good idea! <strong>Let's share</strong> the toys!"
        },
        {
          "role": "🌸 提醒温柔小手",
          "line": "Use gentle hands—<strong>be gentle</strong>!"
        }
      ],
      "words": [
        {
          "key": "im_sorry",
          "word": "I'm sorry",
          "zh": "对不起",
          "sentence": "I'm sorry!",
          "highlight": "I'm",
          "color": "#7C3AED",
          "soft": "#EDE9FE",
          "cardImg": "./img/v3/cards/EP034/im_sorry.png",
          "sceneImg": "./img/v3/scenes/ep034_w1.jpg",
          "sceneTag": "撞倒玩具主动道歉用",
          "distractor": "its_okay",
          "leadAudio": "./audio/v3/EP034/lead_im_sorry.mp3",
          "teachAudio": "./audio/v3/EP034/teach_im_sorry.mp3",
          "quizAudio": "./audio/v3/EP034/quiz_im_sorry.mp3",
          "ansAudio": "./audio/v3/EP034/ans_im_sorry.mp3"
        },
        {
          "key": "its_okay",
          "word": "It's okay",
          "zh": "没关系",
          "sentence": "It's okay, friend!",
          "highlight": "it's",
          "color": "#059669",
          "soft": "#D1FAE5",
          "cardImg": "./img/v3/cards/EP034/its_okay.png",
          "sceneImg": "./img/v3/scenes/ep034_w2.jpg",
          "sceneTag": "宽容安慰好朋友时说",
          "distractor": "im_sorry",
          "leadAudio": "./audio/v3/EP034/lead_its_okay.mp3",
          "teachAudio": "./audio/v3/EP034/teach_its_okay.mp3",
          "quizAudio": "./audio/v3/EP034/quiz_its_okay.mp3",
          "ansAudio": "./audio/v3/EP034/ans_its_okay.mp3"
        },
        {
          "key": "lets_share",
          "word": "Let's share",
          "zh": "一起分享",
          "sentence": "Let's share together!",
          "highlight": "let's",
          "color": "#EA580C",
          "soft": "#FFEDD5",
          "cardImg": "./img/v3/cards/EP034/lets_share.png",
          "sceneImg": "./img/v3/scenes/ep034_w3.jpg",
          "sceneTag": "分享拼图零食时说",
          "distractor": "be_gentle",
          "leadAudio": "./audio/v3/EP034/lead_lets_share.mp3",
          "teachAudio": "./audio/v3/EP034/teach_lets_share.mp3",
          "quizAudio": "./audio/v3/EP034/quiz_lets_share.mp3",
          "ansAudio": "./audio/v3/EP034/ans_lets_share.mp3"
        },
        {
          "key": "be_gentle",
          "word": "Be gentle",
          "zh": "轻轻的",
          "sentence": "Gentle hands, please!",
          "highlight": "be",
          "color": "#DB2777",
          "soft": "#FCE7F3",
          "cardImg": "./img/v3/cards/EP034/be_gentle.png",
          "sceneImg": "./img/v3/scenes/ep034_w4.jpg",
          "sceneTag": "摸小花小动物提醒用",
          "distractor": "lets_share",
          "leadAudio": "./audio/v3/EP034/lead_be_gentle.mp3",
          "teachAudio": "./audio/v3/EP034/teach_be_gentle.mp3",
          "quizAudio": "./audio/v3/EP034/quiz_be_gentle.mp3",
          "ansAudio": "./audio/v3/EP034/ans_be_gentle.mp3"
        }
      ]
    },
    "EP035": {
      "id": "EP035",
      "num": 35,
      "title": "正在做什么",
      "enTitle": "reading · drawing · dancing · singing",
      "subtitle": "第 35 集 · 森林幼儿园活动厅",
      "island": "身体日常",
      "hook": "幼儿园放学回家聊什么 · 4 句正在做英语",
      "theme": {
        "paper": "#F6FBEF",
        "accent": "#4D8B31",
        "accentLip": "#2E5B1B",
        "pillBg": "#E5F5D4",
        "ink": "#243E16"
      },
      "defaultScene": "./img/v3/scenes/ep035_main.jpg",
      "sceneLabel": "森林幼儿园活动厅",
      "worksheet": "./worksheets/EP035-亲子涂色连线卡.jpg",
      "parentScript": [
        {
          "role": "👩 妈妈好奇提问",
          "line": "What are you doing, sweetie?"
        },
        {
          "role": "🧒 边看绘本边答",
          "line": "I am <strong>reading</strong>! / I am <strong>drawing</strong>!"
        },
        {
          "role": "👩 打开儿歌互动",
          "line": "Let's play music! Look, we are <strong>dancing</strong>!"
        },
        {
          "role": "🎤 一起哼歌收尾",
          "line": "La la la! We are <strong>singing</strong> together!"
        }
      ],
      "words": [
        {
          "key": "reading",
          "word": "Reading",
          "zh": "在读书",
          "sentence": "I am reading!",
          "highlight": "reading",
          "color": "#15803D",
          "soft": "#DCFCE7",
          "cardImg": "./img/v3/cards/EP035/reading.png",
          "sceneImg": "./img/v3/scenes/ep035_w1.jpg",
          "sceneTag": "亲子共读翻绘本时用",
          "distractor": "drawing",
          "leadAudio": "./audio/v3/EP035/lead_reading.mp3",
          "teachAudio": "./audio/v3/EP035/teach_reading.mp3",
          "quizAudio": "./audio/v3/EP035/quiz_reading.mp3",
          "ansAudio": "./audio/v3/EP035/ans_reading.mp3"
        },
        {
          "key": "drawing",
          "word": "Drawing",
          "zh": "在画画",
          "sentence": "I am drawing!",
          "highlight": "drawing",
          "color": "#EA580C",
          "soft": "#FFEDD5",
          "cardImg": "./img/v3/cards/EP035/drawing.png",
          "sceneImg": "./img/v3/scenes/ep035_w2.jpg",
          "sceneTag": "拿蜡笔画太阳花时说",
          "distractor": "reading",
          "leadAudio": "./audio/v3/EP035/lead_drawing.mp3",
          "teachAudio": "./audio/v3/EP035/teach_drawing.mp3",
          "quizAudio": "./audio/v3/EP035/quiz_drawing.mp3",
          "ansAudio": "./audio/v3/EP035/ans_drawing.mp3"
        },
        {
          "key": "dancing",
          "word": "Dancing",
          "zh": "在跳舞",
          "sentence": "We are dancing!",
          "highlight": "dancing",
          "color": "#7C3AED",
          "soft": "#EDE9FE",
          "cardImg": "./img/v3/cards/EP035/dancing.png",
          "sceneImg": "./img/v3/scenes/ep035_w3.jpg",
          "sceneTag": "放音乐摇摆转圈时说",
          "distractor": "singing",
          "leadAudio": "./audio/v3/EP035/lead_dancing.mp3",
          "teachAudio": "./audio/v3/EP035/teach_dancing.mp3",
          "quizAudio": "./audio/v3/EP035/quiz_dancing.mp3",
          "ansAudio": "./audio/v3/EP035/ans_dancing.mp3"
        },
        {
          "key": "singing",
          "word": "Singing",
          "zh": "在唱歌",
          "sentence": "We are singing!",
          "highlight": "singing",
          "color": "#E11D48",
          "soft": "#FFE4E6",
          "cardImg": "./img/v3/cards/EP035/singing.png",
          "sceneImg": "./img/v3/scenes/ep035_w4.jpg",
          "sceneTag": "哼儿歌开演唱会时说",
          "distractor": "dancing",
          "leadAudio": "./audio/v3/EP035/lead_singing.mp3",
          "teachAudio": "./audio/v3/EP035/teach_singing.mp3",
          "quizAudio": "./audio/v3/EP035/quiz_singing.mp3",
          "ansAudio": "./audio/v3/EP035/ans_singing.mp3"
        }
      ]
    },
    "EP036": {
      "id": "EP036",
      "num": 36,
      "title": "蜡笔盒的新颜色",
      "enTitle": "pink · purple · black · silver",
      "subtitle": "第 36 集 · 彩虹拱门画材小铺",
      "island": "基础认知",
      "hook": "涂色画画告别只会红黄蓝 · 4 个进阶颜色",
      "theme": {
        "paper": "#FFF8EA",
        "accent": "#D97724",
        "accentLip": "#9A4E10",
        "pillBg": "#FFE9C2",
        "ink": "#4A2C14"
      },
      "defaultScene": "./img/v3/scenes/ep036_main.jpg",
      "sceneLabel": "彩虹拱门画材小铺",
      "worksheet": "./worksheets/EP036-亲子涂色连线卡.jpg",
      "parentScript": [
        {
          "role": "👩 涂色递蜡笔问",
          "line": "Which color do you want? <strong>Pink</strong> or <strong>purple</strong>?"
        },
        {
          "role": "🧒 挑选画笔回答",
          "line": "<strong>Purple</strong>, please! And a <strong>pink</strong> flower!"
        },
        {
          "role": "👩 画出对比线条",
          "line": "Draw the outline with <strong>black</strong>!"
        },
        {
          "role": "⭐ 贴上闪亮星星",
          "line": "Look! A shiny <strong>silver</strong> star on top!"
        }
      ],
      "words": [
        {
          "key": "pink",
          "word": "Pink",
          "zh": "粉色",
          "sentence": "A pretty pink flower!",
          "highlight": "pink",
          "color": "#DB2777",
          "soft": "#FCE7F3",
          "cardImg": "./img/v3/cards/EP036/pink.png",
          "sceneImg": "./img/v3/scenes/ep036_w1.jpg",
          "sceneTag": "挑粉色蜡笔丝带时说",
          "distractor": "purple",
          "leadAudio": "./audio/v3/EP036/lead_pink.mp3",
          "teachAudio": "./audio/v3/EP036/teach_pink.mp3",
          "quizAudio": "./audio/v3/EP036/quiz_pink.mp3",
          "ansAudio": "./audio/v3/EP036/ans_pink.mp3"
        },
        {
          "key": "purple",
          "word": "Purple",
          "zh": "紫色",
          "sentence": "Bright purple paint!",
          "highlight": "purple",
          "color": "#7C3AED",
          "soft": "#EDE9FE",
          "cardImg": "./img/v3/cards/EP036/purple.png",
          "sceneImg": "./img/v3/scenes/ep036_w2.jpg",
          "sceneTag": "涂葡萄茄子气球时说",
          "distractor": "pink",
          "leadAudio": "./audio/v3/EP036/lead_purple.mp3",
          "teachAudio": "./audio/v3/EP036/teach_purple.mp3",
          "quizAudio": "./audio/v3/EP036/quiz_purple.mp3",
          "ansAudio": "./audio/v3/EP036/ans_purple.mp3"
        },
        {
          "key": "black",
          "word": "Black",
          "zh": "黑色",
          "sentence": "A shiny black hat!",
          "highlight": "black",
          "color": "#1E293B",
          "soft": "#E2E8F0",
          "cardImg": "./img/v3/cards/EP036/black.png",
          "sceneImg": "./img/v3/scenes/ep036_w3.jpg",
          "sceneTag": "找黑色帽子画笔时说",
          "distractor": "silver",
          "leadAudio": "./audio/v3/EP036/lead_black.mp3",
          "teachAudio": "./audio/v3/EP036/teach_black.mp3",
          "quizAudio": "./audio/v3/EP036/quiz_black.mp3",
          "ansAudio": "./audio/v3/EP036/ans_black.mp3"
        },
        {
          "key": "silver",
          "word": "Silver",
          "zh": "银色",
          "sentence": "A sparkling silver star!",
          "highlight": "silver",
          "color": "#475569",
          "soft": "#F1F5F9",
          "cardImg": "./img/v3/cards/EP036/silver.png",
          "sceneImg": "./img/v3/scenes/ep036_w4.jpg",
          "sceneTag": "看亮晶晶银星星时说",
          "distractor": "black",
          "leadAudio": "./audio/v3/EP036/lead_silver.mp3",
          "teachAudio": "./audio/v3/EP036/teach_silver.mp3",
          "quizAudio": "./audio/v3/EP036/quiz_silver.mp3",
          "ansAudio": "./audio/v3/EP036/ans_silver.mp3"
        }
      ]
    }
  },
  "mapEpisodes": [
    {
      "id": "EP001",
      "title": "认识颜色",
      "island": "基础认知",
      "words": "Red · Blue · Yellow · Green",
      "v3": true
    },
    {
      "id": "EP002",
      "title": "认识身体",
      "island": "身体日常",
      "words": "Head · Eyes · Nose · Mouth",
      "v3": true
    },
    {
      "id": "EP003",
      "title": "认识家人",
      "island": "情商社交",
      "words": "Mom · Dad · Brother · Sister",
      "v3": true
    },
    {
      "id": "EP004",
      "title": "认识常见动物",
      "island": "自然探索",
      "words": "Cat · Dog · Duck · Rabbit",
      "v3": true
    },
    {
      "id": "EP005",
      "title": "认识水果",
      "island": "美味餐桌",
      "words": "Apple · Banana · Orange · Grapes",
      "v3": true
    },
    {
      "id": "EP006",
      "title": "认识蔬菜",
      "island": "美味餐桌",
      "words": "Carrot · Broccoli · Tomato · Potato",
      "v3": true
    },
    {
      "id": "EP007",
      "title": "早餐和饮品",
      "island": "美味餐桌",
      "words": "Milk · Water · Juice · Egg",
      "v3": true
    },
    {
      "id": "EP008",
      "title": "认识衣服",
      "island": "身体日常",
      "words": "Hat · Shirt · Coat · Socks",
      "v3": true
    },
    {
      "id": "EP009",
      "title": "家里有什么",
      "island": "家园出行",
      "words": "Door · Window · Table · Chair",
      "v3": true
    },
    {
      "id": "EP010",
      "title": "从早到晚",
      "island": "身体日常",
      "words": "Wake up · Wash hands · Brush teeth · Take a bath",
      "v3": true
    },
    {
      "id": "EP011",
      "title": "认识玩具",
      "island": "家园出行",
      "words": "Ball · Car · Blocks · Doll",
      "v3": true
    },
    {
      "id": "EP012",
      "title": "幼儿园里的东西",
      "island": "家园出行",
      "words": "Backpack · Book · Pencil · Crayon",
      "v3": true
    },
    {
      "id": "EP013",
      "title": "认识数量 1–5",
      "island": "基础认知",
      "words": "1 One · 2 Two · 3 Three · 4 Four",
      "v3": true
    },
    {
      "id": "EP014",
      "title": "认识形状",
      "island": "基础认知",
      "words": "Circle · Square · Triangle · Rectangle",
      "v3": true
    },
    {
      "id": "EP015",
      "title": "大小和长短",
      "island": "基础认知",
      "words": "Big · Small · Long · Short",
      "v3": true
    },
    {
      "id": "EP016",
      "title": "认识位置",
      "island": "基础认知",
      "words": "In · On · Under · Next to",
      "v3": true
    },
    {
      "id": "EP017",
      "title": "认识天气",
      "island": "自然探索",
      "words": "Sunny · Rainy · Windy · Cloudy",
      "v3": true
    },
    {
      "id": "EP018",
      "title": "认识交通工具",
      "island": "家园出行",
      "words": "Bus · Train · Bike · Boat",
      "v3": true
    },
    {
      "id": "EP019",
      "title": "公园里玩什么",
      "island": "家园出行",
      "words": "Swing · Slide · Ball · Kite",
      "v3": true
    },
    {
      "id": "EP020",
      "title": "花园里有什么",
      "island": "自然探索",
      "words": "Tree · Leaf · Flower · Seed",
      "v3": true
    },
    {
      "id": "EP021",
      "title": "跟着做动作",
      "island": "身体日常",
      "words": "Clap · Jump · Walk · Stop",
      "v3": true
    },
    {
      "id": "EP022",
      "title": "见面怎么说",
      "island": "情商社交",
      "words": "Hello · Goodbye · Good morning · Good night",
      "v3": true
    },
    {
      "id": "EP023",
      "title": "认识心情",
      "island": "情商社交",
      "words": "Happy · Sad · Scared · Angry",
      "v3": true
    },
    {
      "id": "EP024",
      "title": "一起玩会轮流",
      "island": "情商社交",
      "words": "My turn · Your turn · Thank you · You're welcome",
      "v3": true
    },
    {
      "id": "EP025",
      "title": "开口请别人帮忙",
      "island": "情商社交",
      "words": "Please · Can I have? · Here you go · Wait",
      "v3": true
    },
    {
      "id": "EP026",
      "title": "说说喜欢什么",
      "island": "美味餐桌",
      "words": "I like ... · I don't like · Do you like? · Yes, I do!",
      "v3": true
    },
    {
      "id": "EP027",
      "title": "自己穿衣服",
      "island": "身体日常",
      "words": "Put on · Take off · Zip up · Button up",
      "v3": true
    },
    {
      "id": "EP028",
      "title": "饿了渴了会自己说",
      "island": "美味餐桌",
      "words": "Hungry · Full · Thirsty · Tired",
      "v3": true
    },
    {
      "id": "EP029",
      "title": "动物会什么",
      "island": "自然探索",
      "words": "Swim · Fly · Hop · Run",
      "v3": true
    },
    {
      "id": "EP030",
      "title": "自己收拾玩具",
      "island": "家园出行",
      "words": "Clean up · Put away · Pick up · Throw away",
      "v3": true
    },
    {
      "id": "EP031",
      "title": "冷热软硬大探索",
      "island": "基础认知",
      "words": "Hot · Cold · Soft · Hard",
      "v3": true
    },
    {
      "id": "EP032",
      "title": "外出安全四句话",
      "island": "家园出行",
      "words": "Hold my hand · Look both ways · Walk slowly · Stay close",
      "v3": true
    },
    {
      "id": "EP033",
      "title": "农场里的朋友",
      "island": "自然探索",
      "words": "Cow · Pig · Sheep · Horse",
      "v3": true
    },
    {
      "id": "EP034",
      "title": "犯错道歉与和好",
      "island": "情商社交",
      "words": "I'm sorry · It's okay · Let's share · Be gentle",
      "v3": true
    },
    {
      "id": "EP035",
      "title": "正在做什么",
      "island": "身体日常",
      "words": "Reading · Drawing · Dancing · Singing",
      "v3": true
    },
    {
      "id": "EP036",
      "title": "蜡笔盒的新颜色",
      "island": "基础认知",
      "words": "Pink · Purple · Black · Silver",
      "v3": true
    }
  ]
};
