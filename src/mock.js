// 引入mockjs
const Mock = require('mockjs');
var obj = {
  'aa': '11',
  'bb': '22',
  'cc': '33',
  'dd': '44'
};
var pics = {
  'P1': 'http://img61.ddimg.cn/2018/6/11/201806111545175891.jpg',
  'P2': 'http://img62.ddimg.cn/2018/6/11/2018061115311867597.jpg',
  'P3': 'http://img61.ddimg.cn/2018/6/11/201806111727326920.jpg',
  'P4': 'http://img63.ddimg.cn/2018/6/11/2018061115455743326.jpg',
  'P5': 'http://img62.ddimg.cn/2018/6/11/2018061115311867597.jpg'
};
Mock.mock('http://text.com',{
    'list':[{
      'id':0,/*618狂欢 */
      'lists':[{
        'name':'佳沛新西兰阳光金奇异果(巨无霸)(原箱)',
        'decription':'能量巨果一口爆浆过瘾',
        'img':'https://imgqn4.fruitday.com/images/product_pic/21323/1/1-370x370-21323-2XXBS2DW.jpg',
        'gui':'199.00/22个',
        'price':'199.00',
        'born': '海南海口',
        'quantity': '15878份',
        'stock': 10,
        'critis': {
          'c1': '好吃',
          'c2': '不错',
          'c3': '很看好啊'
        },
        'crContent': {
          'name': '***仰望星空',
          'content': '炒鸡好吃的!!!!从没吃过这么好吃的,也可以用...'
        }
      },{
        'name':'越南黑虎虾仁（中）',
        'description':'手剥虾仁 颗颗弹力十足',
        'img':'https://imgqn2.fruitday.com/images/product_pic/3475/1/1-370x370-3475-P974WF6D.jpg',
        'gui':'59.80/200g*2盒',
        'price':'59.80',
        'born': '海南海口',
        'quantity': '15878份',
        'stock': 10,
        'critis': {
          'c1': '好吃',
          'c2': '不错',
          'c3': '很看好啊'
        },
        'crContent': {
          'name': '***仰望星空',
          'content': '炒鸡好吃的!!!!从没吃过这么好吃的,也可以用...'
        }
      },{
        'name':'澳洲牛腩s级',
        'description':'​肥瘦分明独立块 炖一锅喷香',
        'img':'https://imgqn2.fruitday.com/images/product_pic/4247/1/1-370x370-4247-B3W14A35.jpg',
        'gui':'49.90/500g',
        'price':'49.90',
        'born': '海南海口',
        'quantity': '15878份',
        'stock': 10,
        'critis': {
          'c1': '好吃',
          'c2': '不错',
          'c3': '很看好啊'
        },
        'crContent': {
          'name': '***仰望星空',
          'content': '炒鸡好吃的!!!!从没吃过这么好吃的,也可以用...'
        }
      },{
        'name':'鲜摘蓝莓',
        'description':'新鲜大粒 营养天使',
        'img':'https://imgqn2.fruitday.com/images/product_pic/2212/1/1-370x370-2212-C8HP5KR1.jpg',
        'gui':'86.00/6盒',
        'price':'86.00',
        'born': '海南海口',
        'quantity': '15878份',
        'stock': 10,
        'critis': {
          'c1': '好吃',
          'c2': '不错',
          'c3': '很看好啊'
        },
        'crContent': {
          'name': '***仰望星空',
          'content': '炒鸡好吃的!!!!从没吃过这么好吃的,也可以用...'
        }
      },{
        'name':'夏日阳光番茄',
        'description':'金灿阳光果 皮薄能爆浆',
        'img':'https://imgqn1.fruitday.com/images/product_pic/5417/1/1-370x370-5417-PHFTFTHA.jpg',
        'gui':'15.80/300g',
        'price':'15.80',
        'born': '海南海口',
        'quantity': '15878份',
        'stock': 10,
        'critis': {
          'c1': '好吃',
          'c2': '不错',
          'c3': '很看好啊'
        },
        'crContent': {
          'name': '***仰望星空',
          'content': '炒鸡好吃的!!!!从没吃过这么好吃的,也可以用...'
        }
      }]
    },{
      'id':1,/*高温福利 */
      'lists':[{
        'name':'无籽青柠檬',
        'description':'青皮味不涩，香水柠香有点甜',
        'img':'https://imgqn2.fruitday.com/images/product_pic/2542/1/1-370x370-2542-U7KRY4U4.jpg',
        'gui':'29.90/1kg',
        'price':'29.90',
        'born': '海南海口',
        'quantity': '15878份',
        'stock': 10,
        'critis': {
          'c1': '好吃',
          'c2': '不错',
          'c3': '很看好啊'
        },
        'crContent': {
          'name': '***仰望星空',
          'content': '炒鸡好吃的!!!!从没吃过这么好吃的,也可以用...'
        }
      },{
        'name':'双提组合',
        'description':'澳大利亚无籽黑提+澳大利亚无籽红提',
        'img':'https://imgqn1.fruitday.com/images/product_pic/5040/1/1-370x370-5040-A9H9U7A4.jpg',
        'gui':'99.00/1kg+1kg',
        'price':'99.00',
        'born': '海南海口',
        'quantity': '15878份',
        'stock': 10,
        'critis': {
          'c1': '好吃',
          'c2': '不错',
          'c3': '很看好啊'
        },
        'crContent': {
          'name': '***仰望星空',
          'content': '炒鸡好吃的!!!!从没吃过这么好吃的,也可以用...'
        }
      },{
        'name':'新西兰ROCKIT小苹果礼盒装',
        'description':'加大加高 随时甜蜜',
        'img':'https://imgqn2.fruitday.com/images/product_pic/22899/1/1-370x370-22899-587P7B6X.jpg',
        'gui':'178.00/1盒（4管）',
        'price':'178.00',
        'born': '海南海口',
        'quantity': '15878份',
        'stock': 10,
        'critis': {
          'c1': '好吃',
          'c2': '不错',
          'c3': '很看好啊'
        },
        'crContent': {
          'name': '***仰望星空',
          'content': '炒鸡好吃的!!!!从没吃过这么好吃的,也可以用...'
        }
      },{
        'name':'佳沛新西兰阳光金奇异果(巨无霸plus)(原箱)',
        'description':'一口爆浆超过瘾',
        'img':'https://imgqn1.fruitday.com/images/product_pic/2392/1/1-370x370-2392-5TA7T6R3.jpg',
        'gui':'258.00/18个',
        'price':'258.00',
        'born': '海南海口',
        'quantity': '15878份',
        'stock': 10,
        'critis': {
          'c1': '好吃',
          'c2': '不错',
          'c3': '很看好啊'
        },
        'crContent': {
          'name': '***仰望星空',
          'content': '炒鸡好吃的!!!!从没吃过这么好吃的,也可以用...'
        }
      },{
        'name':'白桃味汽水',
        'description':'清爽不甜腻 女生向饮品',
        'img':'https://imgqn2.fruitday.com/images/product_pic/5372/1/1-370x370-5372-WB88SYTY.jpg',
        'gui':'42.00/410ml-12瓶',
        'price':'42.00',
        'born': '海南海口',
        'quantity': '15878份',
        'stock': 10,
        'critis': {
          'c1': '好吃',
          'c2': '不错',
          'c3': '很看好啊'
        },
        'crContent': {
          'name': '***仰望星空',
          'content': '炒鸡好吃的!!!!从没吃过这么好吃的,也可以用...'
        }
      }]
    }]
})
Mock.mock('http://456.com', {
  'user': [{
    'list|1': [{
      'title': '有没有一部电影，让你想去电影的所在?',
      'content': '有没有一部电影里的世界，城市，小镇，或一个小小的景点，让你梦绕魂牵，一直想去？',
      'img':'https://img3.doubanio.com/view/note/l/public/p48414060.jpg',
      'list': [{
        'name': 'Joycee',
        'main': '《海边的曼切斯特》想在曼切斯特海边的小房子安静地住着，也想买一艘小破船，和喜欢的人，在海上摇摇晃晃，钓鱼、看风景…… 《me before you》<br>其实这部电影跟挪威没什么关系，但是龙妈的（前？）男友跟她说要带她去挪威旅行的时候 龙妈激动到不行地说Norway？！ 那一下，我也好想去挪威……',
        'content': ' 《海边的曼切斯特》<br><br>想在曼切斯特海边的小房子安静地住着，也想买一艘小破船，和喜欢的人，在海上摇摇晃晃，钓鱼、看风景……<br><br> 《me before you》<br>其实这部电影跟挪威没什么关系，但是龙妈的（前？）男友跟她说要带她去挪威旅行的时候 龙妈激动到不行地说Norway？！ 那一下，我也好想去挪威……',
        'img': ''
      }, {
        'name': '啊噗',
        'main': "“Doyourememberthatsummerinthehouse? That houses out on the island. You taught me to swim. I was happy then. Everybody was happy that summer. Just be honest with yourself, that's all...” 你还记得我们在那个房子里度过的夏天吗? 那个在岛上的房子, 你教会了我游泳, 那时候的我很快乐, 那个夏天 我们每个人都很快乐。对你自己诚实就可以了。 天各一方的俩姐妹，性格截然相反，一个柔弱敏感有点 ...",
        'content': "“Do you remember that summer in the house? That houses out on the island. You taught me to swim. I was happy then. Everybody was happy that summer. Just be honest with yourself, that's all...” 你还记得我们在那个房子里度过的夏天吗? 那个在岛上的房子, 你教会了我游泳, 那时候的我很快乐,那个夏天我们每个人都很快乐。对你自己诚实就可以了。天各一方的俩姐妹，性格截然相反，一个柔弱敏感有点神经质，却最为坚强勇敢；一个倔强嘴硬有点小别扭，却最为脆弱胆小，艾丽西亚·维坎与伊娃·格林精湛的演技完美地诠释了多年来因为母亲的离世，彼此产生的隔阂之间揪心的羁绊。我们可能彼此没能好好地相处，也不喜欢各自的行为处事，以前是，现在是或许以后也是，但无论彼此如何互相伤害对方，有多么痛恨对方，那都是因为彼此深爱着对方，此谓的怨与恨也好，但是因为你才是我心里最薄弱的软肋，我的母亲和我的姐姐。我总是想离开你，但最后的最后，我最舍不得的也是你。你在我身边就是我无法痊愈的欣快症。",
        'img': ''
      }, {
        'name': '密丝榴',
        'main': '',
        'content': '和格里高利·派克那样一位绅士相遇相知相爱，哪怕只是一日情缘也好，这才是真正的不求天长地久、只求曾经拥有。我相信，每个女人心中都珍藏着一部《罗马假日》。',
        'img': ''
      }, {
        'name': '妙南',
        'main': '',
        'content': '乱世佳人，去塔拉庄园收棉花，光着膀子；要么去亚特兰大，看北佬大炮核平全城......',
        'img': ''
      }, {
        'name': '讲故事的程叁叁',
        'main': '',
        'content': '《海街日记》看过就是想住在那样的地方。夏天里有青梅可以酿酒，春天里有樱花盛开的路，骑着自行车可以看一路的花，有少年的朋友，有年少的欢喜。木质的屋子，青绿的山林，还有一望无际的海。有温暖的小餐馆，有固定可以吃的美味，有暖心的姐妹，有欢闹的朋友，有过不完的青春，有生活中的小小惊喜.',
        'img': ''
      }]
    }, {
      'title': '你拍过最夏天的照片',
      'content': '一提到夏天，就仿佛回到高中时代，午后带着洗发露香气的头发，白衬衫，裙摆～',
      'img':'https://img3.doubanio.com/view/status/m/public/d445204e49a839f.webp',
      'list': [{
        'name': '门生箩',
        'main': '',
        'content': '',
        'img': 'https://img3.doubanio.com/view/note/l/public/p51508564.jpg'
      }, {
        'name': '凉',
        'main': '',
        'content': '',
        'img': 'https://img3.doubanio.com/view/note/l/public/p51441424.jpg',
      }, {
        'name': '大恭实',
        'main': '',
        'content': '',
        'img': {
          'p1': 'https://img3.doubanio.com/view/note/l/public/p51301913.jpg',
          'p2': 'https://img1.doubanio.com/view/note/l/public/p51301919.jpg',
          'p3': 'https://img1.doubanio.com/view/note/l/public/p51301918.jpg',
          'p4': 'https://img1.doubanio.com/view/note/l/public/p51301917.jpg'
        }
      }, {
        'name': '艽野羌塘尘梦凤',
        'main': '喜欢夏天栀子花的味道',
        'content': '喜欢夏天栀子花的味道',
        'img': {
          'p1': 'https://img3.doubanio.com/view/note/l/public/p51420960.jpg',
          'p2': 'https://img3.doubanio.com/view/note/l/public/p51420962.jpg',
          'p3': 'https://img3.doubanio.com/view/note/l/public/p51420962.jpg',

        }
      }, {
        'name': '新儿快乐',
        'main': '我的最夏天照片，西瓜🍉+冰激凌🍦+酸奶，简直绝了。',
        'content': '我的最夏天照片，西瓜🍉+冰激凌🍦+酸奶，简直绝了。',
        'img': {
          'p1': 'https://img3.doubanio.com/view/status/m/public/79e0ffe5c6fd4e5.webp',
          'p2': 'https://img1.doubanio.com/view/status/m/public/7a04ff3edf2130b.webp',
          'p3': 'https://img3.doubanio.com/view/status/m/public/75ab2793727ab1e.webp',
          'p4': 'https://img3.doubanio.com/view/status/m/public/d445204e49a839f.webp',
          'p5': 'https://img3.doubanio.com/view/status/m/public/ea6a940fe871524.webp'
        }
      }]
    },{
     'title': '学生时期的旧物，你后来都怎么处理的？',
    'content': '大学毕业了，在家收拾东西。我曾经是个念旧的人，家里存了很多以前初高中同学留下的照片、信、贺卡、小礼物，甚至小纸条，之前搬家也没有丢下，带到了新家。现在看着这一堆东西，想全部丢掉，但还是有一点不舍。留在那里的意义是什么？重要吗？记忆里不会消失的人和事，没有这些东西也依然会清晰地存在吧。',
    'img':'https://img3.doubanio.com/view/note/l/public/p51343246.jpg',
    'list': [{
      'name': '杜耳朵',
      'main': '我是一个念旧的人学生时代的旧物大多时候都是被留下不管他们有多么沉重、老旧我也要带他们回家我只想最大限度地锁住回忆当我年老时温一杯暖茶 安静地坐在藤椅上 和旧时光说一声： 嘿，好久不见！ 我轻轻拂去旧情人身上的尘埃 拾起那些躲在光阴角落里的的书 抚摸那些曾陪我南征北战的古着文具 心头微微一颤 嘿，旧情人 做我的 ...',
      'content': '学生时代的旧物<br>大多时候都是被留下<br>不管他们有多么沉重、老旧<br>我也要带他们回家<br>我只想最大限度地锁住回忆<br>当我年老时<br>温一杯暖茶<br>安静地坐在藤椅上<br>和旧时光说一声：<br>嘿，好久不见！<br>我轻轻拂去旧情人身上的尘埃<br>拾起那些躲在光阴角落里的的书<br>抚摸那些曾陪我南征北战的古着文具<br>心头微微一颤<br>嘿，旧情人<br>做我的新欢，好吗？',
      'img': {
        'p1': 'https://img3.doubanio.com/view/note/l/public/p51343246.jpg'
      }
    }, {
      'name': '南宁元喜',
      'main': '我也是个念旧的人。学生时期有很多旧物，比如作文本、绘画本、日记本、笔记本、别人送的信、特别喜欢的课外书、摘抄本、同学录等等，我全部都收拾起来，每年都清点一遍，清扫灰尘，都是满满的回忆。回去翻看的时候，才会发现，原来那个时候的自己，是这样的。有一个22寸的行李箱那么多呢。其实课外书也有很多，后来被老妈卖了不少。很贵重的还是自己珍藏着，很有纪念意义 ...',
      'content': '我也是个念旧的人。学生时期有很多旧物，比如作文本、绘画本、日记本、笔记本、别人送的信、特别喜欢的课外书、摘抄本、同学录等等，我全部都收拾起来，每年都清点一遍，清扫灰尘，都是满满的回忆。回去翻看的时候，才会发现，原来那个时候的自己，是这样的。有一个22寸的行李箱那么多呢。其实课外书也有很多，后来被老妈卖了不少。很贵重的还是自己珍藏着，很有纪念意义。',
      'img': ''
    }, {
      'name': 'sursrs',
      'main': '都收在一个小纸箱里了。我有两种明信片，一种是同学送我的，也有信，我都放在一起。一种是自己想了好久写了好久，最终却没有勇气送出去的明信片。明知会后悔，但真的开不了口。。。高三一年的书，我都没了，学校的老伯把高三学生的书，他们不要的都扔在小房间里，我的本来想带回去的，收拾的整整齐齐，来晚了一步，那老伯以为不要的，就扔了 ... ',
      'content': '都收在一个小纸箱里了。我有两种明信片，一种是同学送我的，也有信，我都放在一起。一种是自己想了好久写了好久，最终却没有勇气送出去的明信片。明知会后悔，但真的开不了口。。。高三一年的书，我都没了，学校的老伯把高三学生的书，他们不要的都扔在小房间里，我的本来想带回去的，收拾的整整齐齐，来晚了一步，那老伯以为不要的，就扔了。',
      'img': ''
    }, {
      'name': '李螃蟹',
      'main': '留着呀，小纸条小卡片又不占地方～放在一个小箱子里，偶尔打扫卫生时候打开，回忆一页一页往前翻，想起来原来无忧无虑的日子和你们，嘴角都带笑呢。',
      'content': '留着呀，小纸条小卡片又不占地方～放在一个小箱子里，偶尔打扫卫生时候打开，回忆一页一页往前翻，想起来原来无忧无虑的日子和你们，嘴角都带笑呢。',
      'img': ''
    }] 
    }]
  }]
})
// Mock响应模板
Mock.mock('http://test.com', {
  "user|1": [{
    'pic|3': pics,
    'list': [{
      'name': '礼品卡券',
      'list': [{
        'id': 1,
        'img': 'https://imgqn3.fruitday.com/images/product_pic/3877/1/1-270x270-3877-BXDY6KCU.jpg',
        'name': '欢乐时光水果礼篮',
        'price': '188.00',
        'gui': '188.00/份',
        'born': '海南海口',
        'quantity': '15878份',
        'stock': 10,
        'critis': {
          'c1': '好吃',
          'c2': '不错',
          'c3': '很看好啊'
        },
        'crContent': {
          'name': '***仰望星空',
          'content': '炒鸡好吃的!!!!从没吃过这么好吃的,也可以用...'
        }
      }, {
        'id': 2,
        'img': 'https://imgqn4.fruitday.com/images/product_pic/2114/1/1-270x270-2114-226C8S26.jpg',
        'name': '真心祝福水果篮',
        'price': '358.00',
        'gui': '358.00/礼篮',
        'born': '海南海口',
        'quantity': '15878份',
        'stock': 10,
        'critis': {
          'c1': '好吃',
          'c2': '不错',
          'c3': '很看好啊'
        },
        'crContent': {
          'name': '***仰望星空',
          'content': '炒鸡好吃的!!!!从没吃过这么好吃的,也可以用...'
        }
      }, {
        'id': 3,
        'img': 'https://imgqn1.fruitday.com/images/product_pic/2109/1/1-270x270-2109-SDK5WUW8.jpg',
        'name': '深情厚意水果礼篮',
        'price': '580.00',
        'gui': '580.00/礼篮',
        'born': '海南海口',
        'quantity': '15878份',
        'stock': 10,
        'critis': {
          'c1': '好吃',
          'c2': '不错',
          'c3': '很看好啊'
        },
        'crContent': {
          'name': '***仰望星空',
          'content': '炒鸡好吃的!!!!从没吃过这么好吃的,也可以用...'
        }
      }, {
        'id': 4,
        'img': 'https://imgqn3.fruitday.com/images/product_pic/430/1/1-270x270-430-9RBRWTU9.jpg',
        'name': '关怀备至礼盒',
        'price': '198.00',
        'gui': '198.00/1盒',
        'born': '海南海口',
        'quantity': '15878份',
        'stock': 10,
        'critis': {
          'c1': '好吃',
          'c2': '不错',
          'c3': '很看好啊'
        },
        'crContent': {
          'name': '***仰望星空',
          'content': '炒鸡好吃的!!!!从没吃过这么好吃的,也可以用...'
        }
      }, {
        'id': 5,
        'img': 'https://imgqn2.fruitday.com/images/product_pic/435/1/1-270x270-435-8829CP99.jpg',
        'name': '万事如意礼盒',
        'price': '198.00',
        'gui': '198.00/1盒',
        'born': '海南海口',
        'quantity': '15878份',
        'stock': 10,
        'critis': {
          'c1': '好吃',
          'c2': '不错',
          'c3': '很看好啊'
        },
        'crContent': {
          'name': '***仰望星空',
          'content': '炒鸡好吃的!!!!从没吃过这么好吃的,也可以用...'
        }
      }, {
        'id': 6,
        'img': 'https://imgqn2.fruitday.com/images/product_pic/3356/1/1-270x270-3356-T4P73D4B.jpg',
        'name': '与众不同礼盒',
        'price': '168.00',
        'gui': '168.00/1盒',
        'born': '海南海口',
        'quantity': '15878份',
        'stock': 10,
        'critis': {
          'c1': '好吃',
          'c2': '不错',
          'c3': '很看好啊'
        },
        'crContent': {
          'name': '***仰望星空',
          'content': '炒鸡好吃的!!!!从没吃过这么好吃的,也可以用...'
        }
      }]
    }, {
      'name': '家庭量版',
      'list': [{
        'id': 7,
        'img': 'https://imgqn4.fruitday.com/images/product_pic/2169/1/1-270x270-2169-YR8PTW67.jpg',
        'name': '静宁富士苹果',
        'price': '59.80',
        'gui': '59.80/2.5kg',
        'born': '海南海口',
        'quantity': '15878份',
        'stock': 10,
        'critis': {
          'c1': '好吃',
          'c2': '不错',
          'c3': '很看好啊'
        },
        'crContent': {
          'name': '***仰望星空',
          'content': '炒鸡好吃的!!!!从没吃过这么好吃的,也可以用...'
        }
      }, {
        'id': 8,
        'img': 'https://imgqn1.fruitday.com/images/product_pic/3434/1/1-270x270-3434-HU23DTCC.jpg',
        'name': '阿根廷凤尾虾仁',
        'price': '49.80',
        'gui': '49.80/250kg',
        'born': '海南海口',
        'quantity': '15878份',
        'stock': 10,
        'critis': {
          'c1': '好吃',
          'c2': '不错',
          'c3': '很看好啊'
        },
        'crContent': {
          'name': '***仰望星空',
          'content': '炒鸡好吃的!!!!从没吃过这么好吃的,也可以用...'
        }
      }, {
        'id': 9,
        'img': 'https://imgqn1.fruitday.com/images/product_pic/2681/1/1-270x270-2681-P3TKD2R8.jpg',
        'name': '厄瓜多尔白虾',
        'price': '198.00',
        'gui': '198.00',
        'born': '海南海口',
        'quantity': '15878份',
        'stock': 10,
        'critis': {
          'c1': '好吃',
          'c2': '不错',
          'c3': '很看好啊'
        },
        'crContent': {
          'name': '***仰望星空',
          'content': '炒鸡好吃的!!!!从没吃过这么好吃的,也可以用...'
        }
      }, {
        'id': 10,
        'img': 'https://imgqn3.fruitday.com/images/product_pic/105/1/1-270x270-105-75CUX8FS.jpg',
        'name': '澳大利亚无籽红提',
        'price': '59.80',
        'gui': '59.80/1kg',
        'born': '海南海口',
        'quantity': '15878份',
        'stock': 10,
        'critis': {
          'c1': '好吃',
          'c2': '不错',
          'c3': '很看好啊'
        },
        'crContent': {
          'name': '***仰望星空',
          'content': '炒鸡好吃的!!!!从没吃过这么好吃的,也可以用...'
        }
      }, {
        'id': 11,
        'img': 'https://imgqn1.fruitday.com/images/product_pic/4069/1/1-270x270-4069-CSRFHUK6.jpg',
        'name': '禾煜和田贡枣',
        'price': '51.80',
        'gui': '51.80/800g',
        'born': '海南海口',
        'quantity': '15878份',
        'stock': 10,
        'critis': {
          'c1': '好吃',
          'c2': '不错',
          'c3': '很看好啊'
        },
        'crContent': {
          'name': '***仰望星空',
          'content': '炒鸡好吃的!!!!从没吃过这么好吃的,也可以用...'
        }
      }]
    }, {
      'name': '全球鲜果',
      'list': [{
        'id': 12,
        'img': 'https://imgqn4.fruitday.com/images/product_pic/5633/1/1-270x270-5633-5D17YSRH.jpg',
        'name': '澳洲初夏蜜桔',
        'price': '49.90/6个',
        'gui': '49.90',
        'born': '海南海口',
        'quantity': '15878份',
        'stock': 10,
        'critis': {
          'c1': '好吃',
          'c2': '不错',
          'c3': '很看好啊'
        },
        'crContent': {
          'name': '***仰望星空',
          'content': '炒鸡好吃的!!!!从没吃过这么好吃的,也可以用...'
        }
      }, {
        'id': 13,
        'img': 'https://imgqn3.fruitday.com/images/product_pic/2383/1/1-270x270-2383-UKTRW3W2.jpg',
        'name': '妃子笑荔枝',
        'price': '49.90',
        'gui': '49.90/2kg+500g',
        'born': '海南海口',
        'quantity': '15878份',
        'stock': 10,
        'critis': {
          'c1': '好吃',
          'c2': '不错',
          'c3': '很看好啊'
        },
        'crContent': {
          'name': '***仰望星空',
          'content': '炒鸡好吃的!!!!从没吃过这么好吃的,也可以用...'
        }
      }, {
        'id': 14,
        'img': 'https://imgqn4.fruitday.com/images/product_pic/27/1/1-270x270-27-DRXW9AYR.jpg',
        'name': '海南小台农芒果',
        'price': '29.90',
        'gui': '29.90/1kg',
        'born': '海南海口',
        'quantity': '15878份',
        'stock': 10,
        'critis': {
          'c1': '好吃',
          'c2': '不错',
          'c3': '很看好啊'
        },
        'crContent': {
          'name': '***仰望星空',
          'content': '炒鸡好吃的!!!!从没吃过这么好吃的,也可以用...'
        }
      }, {
        'id': 16,
        'img': 'https://imgqn1.fruitday.com/images/product_pic/5/1/1-270x270-5-HRHCPAH9.jpg',
        'name': '越南红心火龙果（小）',
        'price': '29.90',
        'gui': '29.90/1kg',
        'born': '海南海口',
        'quantity': '15878份',
        'stock': 10,
        'critis': {
          'c1': '好吃',
          'c2': '不错',
          'c3': '很看好啊'
        },
        'crContent': {
          'name': '***仰望星空',
          'content': '炒鸡好吃的!!!!从没吃过这么好吃的,也可以用...'
        }
      }, {
        'id': 17,
        'img': 'https://imgqn1.fruitday.com/images/product_pic/19/1/1-270x270-19-YATB7835.jpg',
        'name': '进口香蕉',
        'price': '16.90/根',
        'born': '海南海口',
        'quantity': '15878份',
        'stock': 10,
        'critis': {
          'c1': '好吃',
          'c2': '不错',
          'c3': '很看好啊'
        },
        'crContent': {
          'name': '***仰望星空',
          'content': '炒鸡好吃的!!!!从没吃过这么好吃的,也可以用...'
        }
      }]
    }, {
      'name': '生鲜美食',
      'list': [{
        'id': 18,
        'img': 'https://imgqn3.fruitday.com/images/product_pic/2761/1/1-270x270-2761-RPCT61D9.jpg',
        'name': '厦门紫红茄',
        'price': '9.80',
        'gui': '9.80/300g',
        'born': '海南海口',
        'quantity': '15878份',
        'stock': 10,
        'critis': {
          'c1': '好吃',
          'c2': '不错',
          'c3': '很看好啊'
        },
        'crContent': {
          'name': '***仰望星空',
          'content': '炒鸡好吃的!!!!从没吃过这么好吃的,也可以用...'
        }
      }, {
        'id': 19,
        'img': 'https://imgqn4.fruitday.com/images/product_pic/4844/1/1-270x270-4844-TFPS61UD.jpg',
        'name': '鲜活生态甲鱼',
        'price': '380.00',
        'gui': '380.00/1-1.15kg',
        'born': '海南海口',
        'quantity': '15878份',
        'stock': 10,
        'critis': {
          'c1': '好吃',
          'c2': '不错',
          'c3': '很看好啊'
        },
        'crContent': {
          'name': '***仰望星空',
          'content': '炒鸡好吃的!!!!从没吃过这么好吃的,也可以用...'
        }
      }, {
        'id': 20,
        'img': 'https://imgqn4.fruitday.com/images/product_pic/4844/1/1-270x270-4844-TFPS61UD.jpg',
        'name': '鲜活生态甲鱼',
        'price': '380.00',
        'gui': '380.00/1-1.15kg',
        'born': '海南海口',
        'quantity': '15878份',
        'stock': 10,
        'critis': {
          'c1': '好吃',
          'c2': '不错',
          'c3': '很看好啊'
        },
        'crContent': {
          'name': '***仰望星空',
          'content': '炒鸡好吃的!!!!从没吃过这么好吃的,也可以用...'
        }
      }, {
        'id': 21,
        'img': 'https://imgqn4.fruitday.com/images/product_pic/4252/1/1-270x270-4252-TRP2XKRF.jpg',
        'name': '澳洲草饲原切西冷牛排',
        'price': '39.90',
        'gui': '39.90/110g',
        'born': '海南海口',
        'quantity': '15878份',
        'stock': 10,
        'critis': {
          'c1': '好吃',
          'c2': '不错',
          'c3': '很看好啊'
        },
        'crContent': {
          'name': '***仰望星空',
          'content': '炒鸡好吃的!!!!从没吃过这么好吃的,也可以用...'
        }
      }, {
        'id': 22,
        'img': 'https://imgqn2.fruitday.com/images/product_pic/293/1/1-270x270-293-K2TPBUPC.jpg',
        'name': '澳洲和牛眼肉牛排（M9级）',
        'price': '358.00',
        'gui': '358.00/200g',
        'born': '海南海口',
        'quantity': '15878份',
        'stock': 10,
        'critis': {
          'c1': '好吃',
          'c2': '不错',
          'c3': '很看好啊'
        },
        'crContent': {
          'name': '***仰望星空',
          'content': '炒鸡好吃的!!!!从没吃过这么好吃的,也可以用...'
        }
      }, {
        'id': 23,
        'img': 'https://imgqn3.fruitday.com/images/product_pic/283/1/1-270x270-283-312H31Y2.jpg',
        'name': '金华芋艿',
        'price': '8.90',
        'gui': '8.90/300g',
        'born': '海南海口',
        'quantity': '15878份',
        'stock': 10,
        'critis': {
          'c1': '好吃',
          'c2': '不错',
          'c3': '很看好啊'
        },
        'crContent': {
          'name': '***仰望星空',
          'content': '炒鸡好吃的!!!!从没吃过这么好吃的,也可以用...'
        }
      }, {
        'id': 24,
        'img': 'https://imgqn3.fruitday.com/images/product_pic/185/1/1-270x270-185-XDFCXH6K.jpg',
        'name': '阿根廷雪花鲳鱼',
        'price': '29.90',
        'gui': '29.90/300-400g',
        'born': '海南海口',
        'quantity': '15878份',
        'stock': 10,
        'critis': {
          'c1': '好吃',
          'c2': '不错',
          'c3': '很看好啊'
        },
        'crContent': {
          'name': '***仰望星空',
          'content': '炒鸡好吃的!!!!从没吃过这么好吃的,也可以用...'
        }
      }, {
        'id': 25,
        'img': 'https://imgqn4.fruitday.com/images/product_pic/106/1/1-270x270-106-W65K5SA2.jpg',
        'name': '山东黄心大土豆 ',
        'price': '3.90',
        'gui': '3.90/500g',
        'born': '海南海口',
        'quantity': '15878份',
        'stock': 10,
        'critis': {
          'c1': '好吃',
          'c2': '不错',
          'c3': '很看好啊'
        },
        'crContent': {
          'name': '***仰望星空',
          'content': '炒鸡好吃的!!!!从没吃过这么好吃的,也可以用...'
        }
      }]
    }]
  }]

});
Mock.mock('http://regist.com', function (options) {
  console.log(options);
  return Mock.mock({
    'user|1': {
      'user': 123
    }
  })

});
Mock.mock('http://login.com', function (options) {
  console.log(options);
  return Mock.mock({
    'user|1': {
      'user': 123
    }
  })
})
/*"user|1-3": [{   // 随机生成1到3个数组元素
        'name': '@book',  // 中文名称
        'id|+1': 88,    // 属性值自动加 1，初始值为88
        'age|18-28': 0,   // 18至28以内随机整数, 0只是用来确定类型
        'birthday': '@date("yyyy-MM-dd")',  // 日期
        'city': '@city(true)',   // 中国城市
        'color': '@color',  // 16进制颜色
        'isMale|1': true,  // 布尔值
        'isFat|1-2': true,  // true的概率是1/3
        'fromObj|2': obj,  // 从obj对象中随机获取2个属性
        'fromObj2|1-3': obj,  // 从obj对象中随机获取1至3个属性
        'brother|1': ['jack', 'jim'], // 随机选取 1 个元素
        'sister|+1': ['jack', 'jim', 'lily'], // array中顺序选取元素作为结果
        'friends|2': ['jack', 'jim'] // 重复2次属性值生成一个新数组
    },{
        'gf': '@cname'
    }]*/
