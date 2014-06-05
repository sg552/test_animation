/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {};
var resources = [
];
var symbols = {
"stage": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "horizontal",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 's1',
                type: 'rect',
                rect: ['-379px', '0px','auto','auto','auto', 'auto']
            },
            {
                id: 's2',
                type: 'rect',
                rect: ['0', '0','auto','auto','auto', 'auto']
            },
            {
                id: 's3',
                type: 'rect',
                rect: ['0', '0','auto','auto','auto', 'auto']
            },
            {
                id: 's4',
                type: 'rect',
                rect: ['0', '0','auto','auto','auto', 'auto']
            },
            {
                id: 'QQ20140505140510',
                type: 'image',
                rect: ['-138px', '2865px','1605px','105px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"QQ20140505140510.jpg",'0px','0px']
            },
            {
                id: 's1_r',
                type: 'rect',
                rect: ['auto', '2297','auto','auto','437px', 'auto']
            }],
            symbolInstances: [
            {
                id: 's1_r',
                symbolName: 's1_rf',
                autoPlay: {

                }
            },
            {
                id: 's1',
                symbolName: 's1',
                autoPlay: {

                }
            },
            {
                id: 's4',
                symbolName: 's4',
                autoPlay: {

                }
            },
            {
                id: 's3',
                symbolName: 's3',
                autoPlay: {

                }
            },
            {
                id: 's2',
                symbolName: 's2',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_s4}": [
                ["style", "left", '149px'],
                ["style", "top", '2297px']
            ],
            "${_QQ20140505140510}": [
                ["style", "top", '2865px'],
                ["style", "left", '-138px']
            ],
            "${_s2}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '1200px'],
                ["style", "height", '3000px'],
                ["style", "overflow", 'hidden']
            ],
            "${_s3}": [
                ["style", "top", '1460px'],
                ["style", "left", '13px']
            ],
            "${_s1}": [
                ["motion", "location", '666.5px 340.5px']
            ],
            "${_s1_r}": [
                ["style", "left", 'auto'],
                ["style", "right", '437px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 11963,
            autoPlay: true,
            timeline: [
                { id: "eid200", tween: [ "style", "${_s4}", "top", '2297px', { fromValue: '2297px'}], position: 2175, duration: 0 },
                { id: "eid177", tween: [ "style", "${_s3}", "left", '13px', { fromValue: '13px'}], position: 2175, duration: 0 },
                { id: "eid176", tween: [ "style", "${_s3}", "top", '1460px', { fromValue: '1460px'}], position: 2175, duration: 0 },
                { id: "eid201", tween: [ "style", "${_s4}", "left", '149px', { fromValue: '149px'}], position: 2175, duration: 0 },
                { id: "eid60", tween: [ "style", "${_s2}", "top", '129px', { fromValue: '0px'}], position: 0, duration: 2175, easing: "easeOutQuad" },
                { id: "eid104", tween: [ "motion", "${_s1}", [[666.5, 340.5, 0, 0],[665.5, 340.5, 0, 0]]], position: 0, duration: 2175, easing: "easeOutQuad" },
                { id: "eid59", tween: [ "style", "${_s2}", "left", '79px', { fromValue: '0px'}], position: 0, duration: 2175, easing: "easeOutQuad" },
                { id: "eid39", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_s1}', [] ], ""], position: 0 }            ]
        }
    }
},
"s1": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'e',
                    type: 'image',
                    rect: ['1594px', '332px', '23.8%', '49.6%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/e.jpg', '0%', '0%', '100%', 'auto']
                },
                {
                    rect: ['1000', '508px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 16, 'rgba(255,255,255,1)', '400', 'none', 'normal'],
                    id: 't4',
                    text: '云计算',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['1000px', '471px', 'auto', '20px', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 16, 'rgba(255,255,255,1)', '400', 'none', 'normal'],
                    id: 't3',
                    text: '网站建设',
                    align: 'left',
                    type: 'text'
                },
                {
                    id: 's11',
                    type: 'rect',
                    rect: ['891', '162', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'b',
                    type: 'image',
                    rect: ['442px', '147px', '12.8%', '10.1%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/b.jpg', '0%', '0%', '100%', 'auto']
                },
                {
                    rect: ['474', '167', '185px', '28px', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 28, 'rgba(248,119,17,1.00)', '700', 'none', 'normal'],
                    id: 'Text9',
                    text: '关于我们',
                    align: 'left',
                    type: 'text'
                },
                {
                    id: 'c',
                    type: 'image',
                    rect: ['0px', '290px', '18.9%', '57.4%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/c.jpg', '0%', '0%', '100%', 'auto']
                },
                {
                    id: 'a',
                    type: 'image',
                    rect: ['345px', '0px', '61.4%', '14.8%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/a.jpg', '0%', '0%', '100%', 'auto']
                },
                {
                    rect: ['auto', '24px', '52px', '20px', '892px', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 12, 'rgba(116,116,116,1.00)', '600', 'none', 'normal'],
                    id: 'server_t',
                    text: '服务项目',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['auto', '24px', '52px', '16px', '823px', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 12, 'rgba(116,116,116,1.00)', '600', 'none', 'normal'],
                    id: 'show_t',
                    text: '案例展示',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['auto', '24px', '52px', '16px', '754px', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 12, 'rgba(116,116,116,1.00)', '600', 'none', 'normal'],
                    id: 'contact_t',
                    text: '联系我们',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['auto', '24px', '20px', 'auto', '965px', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 12, 'rgba(116,116,116,1.00)', '600', 'none', 'normal'],
                    id: 'about_t',
                    text: '关于我们',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['auto', '24px', 'auto', 'auto', '1037px', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 12, 'rgba(116,116,116,1.00)', '600', 'none', 'normal'],
                    id: 'index_t',
                    text: '首页<br>',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['1004px', '407px', '117px', '28px', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 16, 'rgba(255,255,255,1.00)', '700', 'none', 'normal'],
                    id: 't1',
                    text: '宸立方科技提供',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['999px', '439px', '161px', 'auto', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 16, 'rgba(255,255,255,1)', '400', 'none', 'normal'],
                    id: 't2',
                    text: '系统解决方案及服务',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['1002px', '533px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 16, 'rgba(255,255,255,1)', '400', 'none', 'normal'],
                    id: 't5',
                    text: '网站周边',
                    align: 'left',
                    type: 'text'
                }
            ],
            symbolInstances: [
            {
                id: 's11',
                symbolName: 's11',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_b}": [
                ["style", "top", '147px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '442px'],
                ["style", "background-size", [100,'auto'], {valueTemplate:'@@0@@% @@1@@'} ]
            ],
            "${_server_t}": [
                ["style", "top", '24px'],
                ["style", "width", '52px'],
                ["style", "font-weight", '600'],
                ["style", "right", '892px'],
                ["style", "height", '20px'],
                ["style", "opacity", '0.000000'],
                ["color", "color", 'rgba(116,116,116,1)'],
                ["style", "font-size", '12px']
            ],
            "${_index_t}": [
                ["style", "top", '24px'],
                ["style", "opacity", '0.000000'],
                ["color", "color", 'rgba(116,116,116,1.00)'],
                ["style", "font-weight", '600'],
                ["style", "right", '1037px'],
                ["style", "font-size", '12px']
            ],
            "${_e}": [
                ["style", "top", '356px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '1594px'],
                ["style", "background-size", [100,'auto'], {valueTemplate:'@@0@@% @@1@@'} ]
            ],
            "${_c}": [
                ["style", "top", '290px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "background-size", [100,'auto'], {valueTemplate:'@@0@@% @@1@@'} ]
            ],
            "${_t3}": [
                ["style", "top", '471px'],
                ["style", "font-weight", '400'],
                ["style", "height", '20px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '1000px'],
                ["style", "font-size", '12px']
            ],
            "${_contact_t}": [
                ["style", "top", '24px'],
                ["style", "width", '52px'],
                ["style", "font-weight", '600'],
                ["style", "right", '754px'],
                ["style", "height", '16px'],
                ["style", "opacity", '0.000000'],
                ["color", "color", 'rgba(116,116,116,1)'],
                ["style", "font-size", '12px']
            ],
            "${_t5}": [
                ["style", "top", '532px'],
                ["style", "opacity", '0.000000'],
                ["style", "font-weight", '400'],
                ["style", "left", '1000px'],
                ["style", "font-size", '12px']
            ],
            "${_show_t}": [
                ["style", "top", '24px'],
                ["style", "font-size", '12px'],
                ["style", "font-weight", '600'],
                ["style", "right", '823px'],
                ["style", "height", '16px'],
                ["style", "opacity", '0.000000'],
                ["color", "color", 'rgba(116,116,116,1)'],
                ["style", "width", '52px']
            ],
            "${_t4}": [
                ["style", "top", '502px'],
                ["style", "opacity", '0.000000'],
                ["style", "font-weight", '400'],
                ["style", "font-size", '12px']
            ],
            "${symbolSelector}": [
                ["style", "height", '681px'],
                ["style", "width", '2091px']
            ],
            "${_t1}": [
                ["style", "top", '407px'],
                ["style", "width", '140px'],
                ["style", "height", '28px'],
                ["style", "opacity", '0.000000'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '700'],
                ["style", "left", '998px'],
                ["style", "font-size", '16px']
            ],
            "${_about_t}": [
                ["style", "top", '24px'],
                ["style", "font-size", '12px'],
                ["style", "font-weight", '600'],
                ["color", "color", 'rgba(116,116,116,1.00)'],
                ["style", "opacity", '0.000000'],
                ["style", "right", '965px'],
                ["style", "width", 'auto']
            ],
            "${_a}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '371px'],
                ["style", "background-size", [100,'auto'], {valueTemplate:'@@0@@% @@1@@'} ]
            ],
            "${_Text9}": [
                ["style", "width", '185px'],
                ["color", "color", 'rgba(248,119,17,1.00)'],
                ["style", "font-weight", '700'],
                ["style", "height", '28px'],
                ["style", "font-size", '28px']
            ],
            "${_t2}": [
                ["style", "top", '439px'],
                ["style", "width", '161px'],
                ["style", "font-weight", '400'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '998px'],
                ["style", "font-size", '12px']
            ],
            "${_s11}": [
                ["style", "left", '915px'],
                ["style", "top", '147px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 11963,
            autoPlay: false,
            timeline: [
                { id: "eid272", tween: [ "style", "${_t3}", "font-size", '12px', { fromValue: '12px'}], position: 11963, duration: 0, easing: "easeOutQuad" },
                { id: "eid261", tween: [ "style", "${_t1}", "left", '998px', { fromValue: '998px'}], position: 6065, duration: 0, easing: "easeOutQuad" },
                { id: "eid257", tween: [ "style", "${_t4}", "top", '502px', { fromValue: '502px'}], position: 9815, duration: 0, easing: "easeOutQuad" },
                { id: "eid253", tween: [ "style", "${_t3}", "opacity", '1', { fromValue: '0.000000'}], position: 7315, duration: 1250, easing: "easeOutQuad" },
                { id: "eid252", tween: [ "style", "${_t2}", "left", '998px', { fromValue: '998px'}], position: 7315, duration: 0, easing: "easeOutQuad" },
                { id: "eid33", tween: [ "style", "${_e}", "opacity", '1', { fromValue: '0.000000'}], position: 1574, duration: 2914, easing: "easeOutQuad" },
                { id: "eid237", tween: [ "style", "${_s11}", "left", '912px', { fromValue: '915px'}], position: 2000, duration: 1750, easing: "easeOutQuad" },
                { id: "eid532", tween: [ "style", "${_index_t}", "opacity", '1', { fromValue: '0.000000'}], position: 0, duration: 2175, easing: "easeOutQuad" },
                { id: "eid29", tween: [ "style", "${_c}", "top", '263px', { fromValue: '290px'}], position: 705, duration: 2175, easing: "easeOutQuad" },
                { id: "eid536", tween: [ "style", "${_server_t}", "opacity", '1', { fromValue: '0.000000'}], position: 0, duration: 2175, easing: "easeOutQuad" },
                { id: "eid236", tween: [ "style", "${_s11}", "top", '174px', { fromValue: '147px'}], position: 2000, duration: 1750, easing: "easeOutQuad" },
                { id: "eid262", tween: [ "style", "${_t1}", "opacity", '1', { fromValue: '0.000000'}], position: 4565, duration: 1500, easing: "easeOutQuad" },
                { id: "eid37", tween: [ "style", "${_e}", "left", '895px', { fromValue: '1594px'}], position: 1574, duration: 2914, easing: "easeOutQuad" },
                { id: "eid254", tween: [ "style", "${_e}", "left", '898px', { fromValue: '895px'}], position: 4487, duration: 13, easing: "easeOutQuad" },
                { id: "eid534", tween: [ "style", "${_contact_t}", "opacity", '1', { fromValue: '0.000000'}], position: 0, duration: 2175, easing: "easeOutQuad" },
                { id: "eid259", tween: [ "style", "${_t5}", "opacity", '1', { fromValue: '0.000000'}], position: 9815, duration: 1250, easing: "easeOutQuad" },
                { id: "eid34", tween: [ "style", "${_c}", "opacity", '1', { fromValue: '0'}], position: 705, duration: 2175, easing: "easeOutQuad" },
                { id: "eid271", tween: [ "style", "${_t2}", "font-size", '12px', { fromValue: '12px'}], position: 11963, duration: 0, easing: "easeOutQuad" },
                { id: "eid251", tween: [ "style", "${_t2}", "opacity", '1', { fromValue: '0.000000'}], position: 6065, duration: 1250, easing: "easeOutQuad" },
                { id: "eid30", tween: [ "style", "${_b}", "opacity", '1', { fromValue: '0.000000'}], position: 0, duration: 2175, easing: "easeOutQuad" },
                { id: "eid38", tween: [ "style", "${_e}", "top", '356px', { fromValue: '356px'}], position: 1570, duration: 2917, easing: "easeOutQuad" },
                { id: "eid255", tween: [ "style", "${_t4}", "opacity", '1', { fromValue: '0.000000'}], position: 8565, duration: 1250, easing: "easeOutQuad" },
                { id: "eid530", tween: [ "style", "${_a}", "left", '371px', { fromValue: '371px'}], position: 11963, duration: 0 },
                { id: "eid535", tween: [ "style", "${_show_t}", "opacity", '1', { fromValue: '0.000000'}], position: 0, duration: 2175, easing: "easeOutQuad" },
                { id: "eid28", tween: [ "style", "${_c}", "left", '435px', { fromValue: '0px'}], position: 705, duration: 2175, easing: "easeOutQuad" },
                { id: "eid273", tween: [ "style", "${_t4}", "font-size", '12px', { fromValue: '12px'}], position: 11963, duration: 0, easing: "easeOutQuad" },
                { id: "eid533", tween: [ "style", "${_about_t}", "opacity", '1', { fromValue: '0.000000'}], position: 0, duration: 2175, easing: "easeOutQuad" },
                { id: "eid31", tween: [ "style", "${_a}", "opacity", '1', { fromValue: '0.000000'}], position: 0, duration: 2175, easing: "easeOutQuad" }            ]
        }
    }
},
"s2": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'm',
                    type: 'image',
                    rect: ['0px', '0px', '213px', '212px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/m.jpg', '0px', '0px']
                },
                {
                    id: 'g',
                    type: 'image',
                    rect: ['0px', '0px', '385px', '140px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/g.jpg', '0px', '0px']
                },
                {
                    rect: ['747px', '834px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 12, 'rgba(124,124,124,1)', '400', 'none', 'normal'],
                    id: 't2-7',
                    text: '站建设与研发等',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['747px', '768px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 16, 'rgba(248,119,16,1.00)', '500', 'none', 'normal'],
                    id: 't2-2',
                    text: '移动APP',
                    align: 'left',
                    type: 'text'
                },
                {
                    id: 'k',
                    type: 'image',
                    rect: ['0px', '0px', '157px', '146px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/k.jpg', '0px', '0px']
                },
                {
                    id: 'j',
                    type: 'image',
                    rect: ['0px', '0px', '165px', '150px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/j.jpg', '0px', '0px']
                },
                {
                    id: 'i',
                    type: 'image',
                    rect: ['0px', '0px', '313px', '142px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/i.jpg', '0px', '0px']
                },
                {
                    id: 'h',
                    type: 'image',
                    rect: ['0px', '0px', '304px', '134px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/h.jpg', '0px', '0px']
                },
                {
                    rect: ['789px', '1211px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 16, 'rgba(248,119,16,1.00)', '500', 'none', 'normal'],
                    id: 'Text3',
                    text: '网络超市',
                    align: 'left',
                    type: 'text'
                },
                {
                    id: 'l',
                    type: 'image',
                    rect: ['0px', '0px', '556px', '122px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/l.jpg', '0px', '0px']
                },
                {
                    rect: ['746px', '812px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 12, 'rgba(124,124,124,1.00)', '400', 'none', 'normal'],
                    id: 't2-6',
                    text: '为客户提供专业化、品牌化的网站界面设计、网站策划、网',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['162px', '1217px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 16, 'rgba(248,119,16,1)', '500', 'none', 'normal'],
                    id: 't2-8',
                    text: '域名主机',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['-51px', '1253px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 12, 'rgba(124,124,124,1.00)', '500', 'none', 'normal'],
                    id: 'Text27',
                    text: '在无地震等重大自然灾害下，云服务器数据可靠性可',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['38px', '1277px', '195px', 'auto', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 12, 'rgba(124,124,124,1)', '500', 'none', 'normal'],
                    id: 'Text28',
                    text: '达99.999%，让您的数据安全无忧！',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['-64px', '724px', '325px', '200px', 'auto', 'auto'],
                    id: 'f2-1',
                    userClass: 'T_Server_T',
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/f1.jpg', '0px', '0px']
                },
                {
                    id: 'f2-2',
                    type: 'image',
                    rect: ['-64px', '806px', '325px', '200px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/f2.jpg', '0px', '0px']
                },
                {
                    rect: ['-22px', '810px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 12, 'rgba(124,124,124,1.00)', '500', 'none', 'normal'],
                    id: 'Text',
                    text: '为客户提供专业化、品牌化的网站界面设计、网站策',
                    align: 'left',
                    type: 'text'
                },
                {
                    id: 'f2-3',
                    type: 'image',
                    rect: ['-64px', '842px', '325px', '200px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/f3.jpg', '0px', '0px']
                },
                {
                    rect: ['174px', '878px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 14, 'rgba(255,255,255,1.00)', '400', 'none', 'normal'],
                    id: 't2-3',
                    text: '查看流程<br>',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['140px', '773px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 16, 'rgba(248,119,16,1)', '500', 'none', 'normal'],
                    id: 'Text29',
                    text: '网站设计及研发',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['135px', '834px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 12, 'rgba(124,124,124,1)', '500', 'none', 'normal'],
                    id: 'Text2',
                    text: '划、网站建设与研发等',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['784px', '1250px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 12, 'rgba(124,124,124,1.00)', '500', 'none', 'normal'],
                    id: 'Text4',
                    text: '在无地震等重大自然灾害下，云服务器数据可靠性可',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['784px', '1277px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 12, 'rgba(124,124,124,1)', '500', 'none', 'normal'],
                    id: 'Text5',
                    text: '达99.999%，让您的数据安全无忧！',
                    align: 'left',
                    type: 'text'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_f2-1}": [
                ["style", "top", '711px'],
                ["style", "height", '87px'],
                ["style", "opacity", '0'],
                ["style", "left", '-422px'],
                ["style", "width", '320px']
            ],
            "${_t2-3}": [
                ["style", "top", '864px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '-290px'],
                ["style", "font-size", '14px']
            ],
            "${_m}": [
                ["style", "top", '743px'],
                ["style", "opacity", '0'],
                ["style", "left", '379px']
            ],
            "${_Text3}": [
                ["style", "top", '1321px'],
                ["color", "color", 'rgba(248,119,16,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '979px'],
                ["style", "font-size", '16px']
            ],
            "${_t2-8}": [
                ["style", "top", '1351px'],
                ["style", "opacity", '0'],
                ["style", "left", '-56px']
            ],
            "${_Text28}": [
                ["style", "top", '1411px'],
                ["style", "opacity", '0'],
                ["style", "left", '-180px'],
                ["style", "width", '195px']
            ],
            "${_Text23}": [
                ["style", "left", '839px'],
                ["style", "top", '842px']
            ],
            "${_Text29}": [
                ["style", "top", '760px'],
                ["style", "opacity", '0'],
                ["style", "font-weight", '500'],
                ["style", "left", '-218px'],
                ["style", "font-size", '16px']
            ],
            "${_t2-1Copy}": [
                ["style", "top", '769px'],
                ["color", "color", 'rgba(248,119,16,1.00)'],
                ["style", "font-weight", '500'],
                ["style", "left", '139px'],
                ["style", "font-size", '16px']
            ],
            "${_k}": [
                ["style", "top", '838px'],
                ["style", "opacity", '0'],
                ["style", "left", '816px']
            ],
            "${_t2-7}": [
                ["style", "top", '864px'],
                ["style", "opacity", '0'],
                ["style", "left", '1063px']
            ],
            "${_Text4}": [
                ["style", "top", '1360px'],
                ["color", "color", 'rgba(124,124,124,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '974px'],
                ["style", "font-size", '12px']
            ],
            "${_f2-3}": [
                ["style", "top", '850px'],
                ["style", "height", '47px'],
                ["style", "opacity", '0'],
                ["style", "left", '-298px'],
                ["style", "width", '84px']
            ],
            "${_Text5}": [
                ["style", "top", '1387px'],
                ["style", "opacity", '0'],
                ["style", "left", '974px']
            ],
            "${_Text2}": [
                ["style", "top", '821px'],
                ["style", "opacity", '0'],
                ["style", "left", '-223px']
            ],
            "${_Text27}": [
                ["style", "top", '1387px'],
                ["color", "color", 'rgba(124,124,124,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '-269px'],
                ["style", "font-size", '12px']
            ],
            "${_l}": [
                ["style", "top", '1253px'],
                ["style", "opacity", '0'],
                ["style", "left", '229px']
            ],
            "${_g}": [
                ["style", "top", '748px'],
                ["style", "opacity", '0'],
                ["style", "left", '1058px']
            ],
            "${_i}": [
                ["style", "top", '1304px'],
                ["style", "opacity", '0'],
                ["style", "left", '-306px']
            ],
            "${_Text}": [
                ["style", "top", '797px'],
                ["color", "color", 'rgba(124,124,124,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '-380px'],
                ["style", "font-size", '12px']
            ],
            "${_t2-6}": [
                ["style", "top", '842px'],
                ["style", "opacity", '0'],
                ["style", "left", '1062px'],
                ["color", "color", 'rgba(124,124,124,1.00)']
            ],
            "${_h}": [
                ["style", "top", '1280px'],
                ["style", "opacity", '0'],
                ["style", "left", '973px']
            ],
            "${_t2-1Copy2}": [
                ["style", "top", '769px'],
                ["style", "opacity", '1'],
                ["color", "color", 'rgba(248,119,16,1.00)'],
                ["style", "font-weight", '500'],
                ["style", "left", '139px'],
                ["style", "font-size", '16px']
            ],
            "${_t2-2}": [
                ["style", "top", '800px'],
                ["style", "opacity", '0'],
                ["color", "color", 'rgba(248,119,16,1.00)'],
                ["style", "font-weight", '500'],
                ["style", "left", '1063px'],
                ["style", "font-size", '16px']
            ],
            "${_Text22}": [
                ["style", "top", '824px'],
                ["color", "color", 'rgba(248,119,16,1)'],
                ["style", "left", '800px'],
                ["style", "font-size", '16px']
            ],
            "${_f2-2}": [
                ["style", "top", '793px'],
                ["style", "height", '87px'],
                ["style", "opacity", '0'],
                ["style", "left", '-422px'],
                ["style", "width", '320px']
            ],
            "${_j}": [
                ["style", "top", '838px'],
                ["style", "opacity", '0'],
                ["style", "left", '7px']
            ],
            "${symbolSelector}": [
                ["style", "height", '212px'],
                ["style", "width", '556px'],
                ["style", "overflow", 'visible']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 5500,
            autoPlay: false,
            labels: {
                "Label 1": 0
            },
            timeline: [
                { id: "eid350", tween: [ "style", "${_t2-3}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 1750, easing: "easeOutQuad" },
                { id: "eid89", tween: [ "style", "${_k}", "top", '818px', { fromValue: '838px'}], position: 1135, duration: 730, easing: "easeOutQuad" },
                { id: "eid344", tween: [ "style", "${_f2-2}", "left", '-64px', { fromValue: '-422px'}], position: 575, duration: 1825, easing: "easeOutQuad" },
                { id: "eid99", tween: [ "style", "${_h}", "opacity", '1', { fromValue: '0'}], position: 3075, duration: 1845, easing: "easeOutQuad" },
                { id: "eid92", tween: [ "style", "${_g}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 1750, easing: "easeOutQuad" },
                { id: "eid90", tween: [ "style", "${_j}", "left", '256px', { fromValue: '7px'}], position: 180, duration: 730, easing: "easeOutQuad" },
                { id: "eid386", tween: [ "style", "${_Text27}", "left", '-51px', { fromValue: '-269px'}], position: 3580, duration: 1920, easing: "easeOutQuad" },
                { id: "eid101", tween: [ "style", "${_h}", "top", '1170px', { fromValue: '1280px'}], position: 3000, duration: 1920, easing: "easeOutQuad" },
                { id: "eid354", tween: [ "style", "${_Text29}", "left", '140px', { fromValue: '-218px'}], position: 0, duration: 1825, easing: "easeOutQuad" },
                { id: "eid541", tween: [ "style", "${_f2-3}", "width", '84px', { fromValue: '84px'}], position: 2750, duration: 0, easing: "easeOutQuad" },
                { id: "eid539", tween: [ "style", "${_f2-3}", "height", '47px', { fromValue: '47px'}], position: 2750, duration: 0, easing: "easeOutQuad" },
                { id: "eid379", tween: [ "style", "${_t2-7}", "opacity", '1', { fromValue: '0'}], position: 1750, duration: 1750, easing: "easeOutQuad" },
                { id: "eid395", tween: [ "style", "${_Text5}", "left", '784px', { fromValue: '974px'}], position: 3500, duration: 1920, easing: "easeOutQuad" },
                { id: "eid340", tween: [ "style", "${_f2-1}", "opacity", '1', { fromValue: '0'}], position: 75, duration: 1750, easing: "easeOutQuad" },
                { id: "eid342", tween: [ "style", "${_f2-2}", "top", '806px', { fromValue: '793px'}], position: 575, duration: 1825, easing: "easeOutQuad" },
                { id: "eid382", tween: [ "style", "${_t2-8}", "opacity", '1', { fromValue: '0'}], position: 3075, duration: 1845, easing: "easeOutQuad" },
                { id: "eid387", tween: [ "style", "${_Text28}", "top", '1277px', { fromValue: '1411px'}], position: 3580, duration: 1920, easing: "easeOutQuad" },
                { id: "eid79", tween: [ "style", "${_m}", "top", '911px', { fromValue: '743px'}], position: 180, duration: 145, easing: "easeOutQuad" },
                { id: "eid81", tween: [ "style", "${_m}", "left", '396px', { fromValue: '379px'}], position: 180, duration: 0, easing: "easeOutQuad" },
                { id: "eid82", tween: [ "style", "${_m}", "left", '396px', { fromValue: '396px'}], position: 325, duration: 0, easing: "easeOutQuad" },
                { id: "eid389", tween: [ "style", "${_Text28}", "left", '38px', { fromValue: '-180px'}], position: 3580, duration: 1920, easing: "easeOutQuad" },
                { id: "eid349", tween: [ "style", "${_t2-3}", "top", '878px', { fromValue: '864px'}], position: 925, duration: 1825, easing: "easeOutQuad" },
                { id: "eid98", tween: [ "style", "${_i}", "opacity", '1', { fromValue: '0'}], position: 3075, duration: 1845, easing: "easeOutQuad" },
                { id: "eid103", tween: [ "style", "${_i}", "top", '1170px', { fromValue: '1304px'}], position: 3000, duration: 1920, easing: "easeOutQuad" },
                { id: "eid345", tween: [ "style", "${_f2-3}", "top", '863px', { fromValue: '850px'}], position: 925, duration: 1825, easing: "easeOutQuad" },
                { id: "eid375", tween: [ "style", "${_t2-6}", "top", '812px', { fromValue: '842px'}], position: 1675, duration: 1825, easing: "easeOutQuad" },
                { id: "eid347", tween: [ "style", "${_f2-3}", "left", '158px', { fromValue: '-298px'}], position: 925, duration: 1825, easing: "easeOutQuad" },
                { id: "eid67", tween: [ "style", "${_m}", "opacity", '0', { fromValue: '0'}], position: 75, duration: 0, easing: "easeOutQuad" },
                { id: "eid83", tween: [ "style", "${_m}", "opacity", '1', { fromValue: '0'}], position: 180, duration: 145, easing: "easeOutQuad" },
                { id: "eid392", tween: [ "style", "${_Text3}", "left", '789px', { fromValue: '979px'}], position: 3000, duration: 1920, easing: "easeOutQuad" },
                { id: "eid109", tween: [ "style", "${_l}", "left", '229px', { fromValue: '229px'}], position: 2875, duration: 0, easing: "easeOutQuad" },
                { id: "eid352", tween: [ "style", "${_Text29}", "top", '773px', { fromValue: '760px'}], position: 0, duration: 1825, easing: "easeOutQuad" },
                { id: "eid351", tween: [ "style", "${_t2-3}", "left", '174px', { fromValue: '-290px'}], position: 925, duration: 1825, easing: "easeOutQuad" },
                { id: "eid356", tween: [ "style", "${_Text}", "opacity", '1', { fromValue: '0'}], position: 650, duration: 1750, easing: "easeOutQuad" },
                { id: "eid383", tween: [ "style", "${_t2-8}", "left", '162px', { fromValue: '-56px'}], position: 3000, duration: 1920, easing: "easeOutQuad" },
                { id: "eid88", tween: [ "style", "${_k}", "left", '585px', { fromValue: '816px'}], position: 1135, duration: 730, easing: "easeOutQuad" },
                { id: "eid107", tween: [ "style", "${_l}", "top", '1243px', { fromValue: '1253px'}], position: 2875, duration: 180, easing: "easeOutQuad" },
                { id: "eid84", tween: [ "style", "${_l}", "top", '1116px', { fromValue: '1243px'}], position: 3055, duration: 395, easing: "easeOutQuad" },
                { id: "eid66", tween: [ "style", "${_j}", "opacity", '0', { fromValue: '0'}], position: 75, duration: 0, easing: "easeOutQuad" },
                { id: "eid86", tween: [ "style", "${_j}", "opacity", '1', { fromValue: '0'}], position: 180, duration: 730, easing: "easeOutQuad" },
                { id: "eid102", tween: [ "style", "${_i}", "left", '-88px', { fromValue: '-306px'}], position: 3000, duration: 1920, easing: "easeOutQuad" },
                { id: "eid380", tween: [ "style", "${_t2-7}", "left", '747px', { fromValue: '1063px'}], position: 1675, duration: 1825, easing: "easeOutQuad" },
                { id: "eid357", tween: [ "style", "${_Text}", "left", '-22px', { fromValue: '-380px'}], position: 575, duration: 1825, easing: "easeOutQuad" },
                { id: "eid359", tween: [ "style", "${_Text2}", "opacity", '1', { fromValue: '0'}], position: 650, duration: 1750, easing: "easeOutQuad" },
                { id: "eid376", tween: [ "style", "${_t2-6}", "opacity", '1', { fromValue: '0'}], position: 1750, duration: 1750, easing: "easeOutQuad" },
                { id: "eid385", tween: [ "style", "${_Text27}", "opacity", '1', { fromValue: '0'}], position: 3655, duration: 1845, easing: "easeOutQuad" },
                { id: "eid64", tween: [ "style", "${_k}", "opacity", '0', { fromValue: '0'}], position: 75, duration: 0, easing: "easeOutQuad" },
                { id: "eid87", tween: [ "style", "${_k}", "opacity", '1', { fromValue: '0'}], position: 1135, duration: 730, easing: "easeOutQuad" },
                { id: "eid390", tween: [ "style", "${_Text3}", "top", '1211px', { fromValue: '1321px'}], position: 3000, duration: 1920, easing: "easeOutQuad" },
                { id: "eid388", tween: [ "style", "${_Text28}", "opacity", '1', { fromValue: '0'}], position: 3655, duration: 1845, easing: "easeOutQuad" },
                { id: "eid358", tween: [ "style", "${_Text2}", "top", '834px', { fromValue: '821px'}], position: 575, duration: 1825, easing: "easeOutQuad" },
                { id: "eid397", tween: [ "style", "${_Text4}", "opacity", '1', { fromValue: '0'}], position: 3575, duration: 1845, easing: "easeOutQuad" },
                { id: "eid391", tween: [ "style", "${_Text3}", "opacity", '1', { fromValue: '0'}], position: 3075, duration: 1845, easing: "easeOutQuad" },
                { id: "eid381", tween: [ "style", "${_t2-8}", "top", '1217px', { fromValue: '1351px'}], position: 3000, duration: 1920, easing: "easeOutQuad" },
                { id: "eid68", tween: [ "style", "${_l}", "opacity", '0', { fromValue: '0'}], position: 2950, duration: 0, easing: "easeOutQuad" },
                { id: "eid85", tween: [ "style", "${_l}", "opacity", '1', { fromValue: '0'}], position: 3055, duration: 395, easing: "easeOutQuad" },
                { id: "eid398", tween: [ "style", "${_Text4}", "left", '784px', { fromValue: '974px'}], position: 3500, duration: 1920, easing: "easeOutQuad" },
                { id: "eid393", tween: [ "style", "${_Text5}", "top", '1277px', { fromValue: '1387px'}], position: 3500, duration: 1920, easing: "easeOutQuad" },
                { id: "eid353", tween: [ "style", "${_Text29}", "opacity", '1', { fromValue: '0'}], position: 75, duration: 1750, easing: "easeOutQuad" },
                { id: "eid368", tween: [ "style", "${_t2-2}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 1750, easing: "easeOutQuad" },
                { id: "eid355", tween: [ "style", "${_Text}", "top", '810px', { fromValue: '797px'}], position: 575, duration: 1825, easing: "easeOutQuad" },
                { id: "eid377", tween: [ "style", "${_t2-6}", "left", '746px', { fromValue: '1062px'}], position: 1675, duration: 1825, easing: "easeOutQuad" },
                { id: "eid369", tween: [ "style", "${_t2-2}", "left", '747px', { fromValue: '1063px'}], position: 925, duration: 1825, easing: "easeOutQuad" },
                { id: "eid384", tween: [ "style", "${_Text27}", "top", '1253px', { fromValue: '1387px'}], position: 3580, duration: 1920, easing: "easeOutQuad" },
                { id: "eid339", tween: [ "style", "${_f2-1}", "top", '724px', { fromValue: '711px'}], position: 0, duration: 1825, easing: "easeOutQuad" },
                { id: "eid341", tween: [ "style", "${_f2-1}", "left", '-64px', { fromValue: '-422px'}], position: 0, duration: 1825, easing: "easeOutQuad" },
                { id: "eid100", tween: [ "style", "${_h}", "left", '783px', { fromValue: '973px'}], position: 3000, duration: 1920, easing: "easeOutQuad" },
                { id: "eid360", tween: [ "style", "${_Text2}", "left", '135px', { fromValue: '-223px'}], position: 575, duration: 1825, easing: "easeOutQuad" },
                { id: "eid95", tween: [ "style", "${_g}", "top", '724px', { fromValue: '748px'}], position: 925, duration: 1825, easing: "easeOutQuad" },
                { id: "eid378", tween: [ "style", "${_t2-7}", "top", '834px', { fromValue: '864px'}], position: 1675, duration: 1825, easing: "easeOutQuad" },
                { id: "eid91", tween: [ "style", "${_j}", "top", '818px', { fromValue: '838px'}], position: 180, duration: 730, easing: "easeOutQuad" },
                { id: "eid396", tween: [ "style", "${_Text4}", "top", '1250px', { fromValue: '1360px'}], position: 3500, duration: 1920, easing: "easeOutQuad" },
                { id: "eid367", tween: [ "style", "${_t2-2}", "top", '770px', { fromValue: '800px'}], position: 925, duration: 1825, easing: "easeOutQuad" },
                { id: "eid346", tween: [ "style", "${_f2-3}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 1750, easing: "easeOutQuad" },
                { id: "eid394", tween: [ "style", "${_Text5}", "opacity", '1', { fromValue: '0'}], position: 3575, duration: 1845, easing: "easeOutQuad" },
                { id: "eid343", tween: [ "style", "${_f2-2}", "opacity", '1', { fromValue: '0'}], position: 650, duration: 1750, easing: "easeOutQuad" },
                { id: "eid94", tween: [ "style", "${_g}", "left", '742px', { fromValue: '1058px'}], position: 925, duration: 1825, easing: "easeOutQuad" }            ]
        }
    }
},
"s3": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['420px', '325px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 14, 'rgba(248,119,16,1.00)', '400', 'none', 'normal'],
                    id: 'Text3',
                    text: '我们服务的网站类型有：',
                    align: 'left',
                    type: 'text'
                },
                {
                    id: '_3_05',
                    type: 'image',
                    rect: ['83px', '76px', '247px', '73px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/_05.jpg', '0px', '0px']
                },
                {
                    rect: ['1018px', '378px', '129px', '127px', 'auto', 'auto'],
                    id: '_3_23',
                    opacity: 1,
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/circle1.jpg', '0px', '0px']
                },
                {
                    rect: ['1045px', '434px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 16, 'rgba(255,255,255,1.00)', '500', 'none', 'normal'],
                    id: 'Text7',
                    text: '政府网站型',
                    align: 'left',
                    type: 'text'
                },
                {
                    id: '_3_08',
                    type: 'image',
                    rect: ['60px', '178px', '315px', '415px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/_08tree.jpg', '0px', '0px']
                },
                {
                    id: '_3_28',
                    type: 'image',
                    rect: ['646px', '562px', '231px', '89px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/_28.jpg', '0px', '0px']
                },
                {
                    rect: ['730px', '599px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 14, 'rgba(255,255,255,1)', '700', 'none', 'normal'],
                    id: 'Text8',
                    text: '查看案例',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['749px', '378px', '69px', '127px', 'auto', 'auto'],
                    id: '_3_22',
                    opacity: 1,
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/add.jpg', '0px', '0px']
                },
                {
                    rect: ['818px', '378px', '123px', '127px', 'auto', 'auto'],
                    id: '_3_19',
                    opacity: 1,
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/circle1.jpg', '0px', '0px']
                },
                {
                    rect: ['840px', '433px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 16, 'rgba(255,255,255,1.00)', '500', 'none', 'normal'],
                    id: 'Text6',
                    text: '电子商业型',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['559px', '378px', '70px', '127px', 'auto', 'auto'],
                    id: '_3_20',
                    opacity: 1,
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/add.jpg', '0px', '0px']
                },
                {
                    rect: ['629px', '378px', '120px', '127px', 'auto', 'auto'],
                    id: '_3_17',
                    opacity: 1,
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/circle1.jpg', '0px', '0px']
                },
                {
                    rect: ['649px', '432px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 16, 'rgba(255,255,255,1.00)', '500', 'none', 'normal'],
                    id: 'Text5',
                    text: '行业门户型',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['423px', '238px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 12, 'rgba(124,124,124,1)', '400', 'none', 'normal'],
                    id: 'Text2',
                    text: '不同客创造适合自己的互联网形象',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['423px', '208px', 'auto', 'auto', 'auto', 'auto'],
                    id: 'Text',
                    text: '宸立方经过9年的WEB体系研究，具备成熟的网站整体解决方案，360度网络品牌策略，分析互联网现状，定位互联网规划目标，为',
                    font: ['Arial, Helvetica, sans-serif', 12, 'rgba(124,124,124,1.00)', 'normal', 'none', ''],
                    type: 'text'
                },
                {
                    rect: ['414px', '378px', '145px', '127px', 'auto', 'auto'],
                    id: '_3_21',
                    opacity: 1,
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/circle1.jpg', '0px', '0px']
                },
                {
                    rect: ['941px', '378px', '87px', '127px', 'auto', 'auto'],
                    id: '_3_18',
                    opacity: 1,
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/add.jpg', '0px', '0px']
                },
                {
                    id: '_3_08tree2',
                    type: 'image',
                    rect: ['60px', '178px', '315px', '415px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/_08tree2.jpg', '0px', '0px']
                },
                {
                    id: '_3_08tree3',
                    type: 'image',
                    rect: ['60px', '178px', '315px', '415px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/_08tree3.jpg', '0px', '0px']
                },
                {
                    id: '_3_08tree4',
                    type: 'image',
                    rect: ['60px', '178px', '315px', '415px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/_08tree4.jpg', '0px', '0px']
                },
                {
                    id: '_3_08tree5',
                    type: 'image',
                    rect: ['60px', '178px', '315px', '415px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/_08tree5.jpg', '0px', '0px']
                },
                {
                    rect: ['464px', '432px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 16, 'rgba(255,255,255,1.00)', '500', 'none', 'normal'],
                    id: 'Text4',
                    text: '企业展示型',
                    align: 'left',
                    type: 'text'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${__3_17}": [
                ["style", "top", '378px'],
                ["style", "opacity", '0.016260162601626'],
                ["style", "left", '754px']
            ],
            "${_Text7}": [
                ["style", "top", '434px'],
                ["style", "opacity", '0.016260162601626'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "font-weight", '500'],
                ["style", "left", '1210px'],
                ["style", "font-size", '16px']
            ],
            "${__3_05}": [
                ["style", "top", '-19px'],
                ["style", "opacity", '0.01625977747324'],
                ["style", "left", '80px']
            ],
            "${__3_23}": [
                ["style", "top", '378px'],
                ["style", "opacity", '0.016260162601626'],
                ["style", "left", '1181px']
            ],
            "${_Text2}": [
                ["style", "top", '146px'],
                ["style", "opacity", '0.01625977747324'],
                ["style", "left", '423px']
            ],
            "${__3_19}": [
                ["style", "top", '378px'],
                ["style", "opacity", '0.016260162601626'],
                ["style", "left", '955px']
            ],
            "${__3_08tree3}": [
                ["style", "top", '178px'],
                ["style", "opacity", '0'],
                ["style", "left", '60px']
            ],
            "${symbolSelector}": [
                ["style", "height", '415px'],
                ["style", "width", '733px']
            ],
            "${__3_08tree2}": [
                ["style", "top", '188px'],
                ["style", "opacity", '0'],
                ["style", "left", '-315px']
            ],
            "${_Text4}": [
                ["style", "top", '432px'],
                ["style", "font-size", '16px'],
                ["style", "font-weight", '500'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "opacity", '0.016260162601626'],
                ["style", "left", '587px'],
                ["style", "width", '80px']
            ],
            "${__3_20}": [
                ["style", "top", '378px'],
                ["style", "opacity", '0.032520325203252'],
                ["style", "left", '718px']
            ],
            "${_Text8}": [
                ["style", "top", '726px'],
                ["style", "opacity", '0.01625977747324'],
                ["style", "font-weight", '700'],
                ["style", "left", '695px'],
                ["style", "font-size", '14px']
            ],
            "${__3_08}": [
                ["style", "top", '188px'],
                ["style", "opacity", '0.01625977747324'],
                ["style", "left", '-315px']
            ],
            "${__3_28}": [
                ["style", "top", '706px'],
                ["style", "height", '52px'],
                ["style", "opacity", '0.01625977747324'],
                ["style", "left", '633px'],
                ["style", "width", '189px']
            ],
            "${__3_08tree4}": [
                ["style", "top", '178px'],
                ["style", "opacity", '0'],
                ["style", "left", '60px']
            ],
            "${_Text6}": [
                ["style", "top", '433px'],
                ["style", "opacity", '0.016260162601626'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "font-weight", '500'],
                ["style", "left", '980px'],
                ["style", "font-size", '16px']
            ],
            "${__3_18}": [
                ["style", "top", '388px'],
                ["style", "opacity", '0.048780487804878'],
                ["style", "left", '1068px']
            ],
            "${_Text}": [
                ["style", "top", '116px'],
                ["color", "color", 'rgba(124,124,124,1.00)'],
                ["style", "opacity", '0.01625977747324'],
                ["style", "left", '423px'],
                ["style", "font-size", '12px']
            ],
            "${__3_08tree5}": [
                ["style", "top", '178px'],
                ["style", "opacity", '0'],
                ["style", "left", '60px']
            ],
            "${_Text5}": [
                ["style", "top", '432px'],
                ["style", "opacity", '0.016260162601626'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "font-weight", '500'],
                ["style", "left", '778px'],
                ["style", "font-size", '16px']
            ],
            "${__3_21}": [
                ["style", "top", '378px'],
                ["style", "opacity", '0.016260162601626'],
                ["style", "left", '563px'],
                ["style", "width", '120px']
            ],
            "${_Text3}": [
                ["style", "top", '229px'],
                ["color", "color", 'rgba(248,119,16,1.00)'],
                ["style", "opacity", '0.01625977747324'],
                ["style", "left", '420px'],
                ["style", "font-size", '14px']
            ],
            "${__3_22}": [
                ["style", "top", '378px'],
                ["style", "opacity", '0'],
                ["style", "left", '866px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 10220,
            autoPlay: false,
            timeline: [
                { id: "eid405", tween: [ "style", "${__3_08tree4}", "opacity", '1', { fromValue: '0'}], position: 3500, duration: 750 },
                { id: "eid141", tween: [ "style", "${__3_18}", "left", '910px', { fromValue: '1068px'}], position: 8000, duration: 780 },
                { id: "eid115", tween: [ "style", "${__3_08}", "left", '60px', { fromValue: '-315px'}], position: 0, duration: 2000 },
                { id: "eid133", tween: [ "style", "${__3_28}", "opacity", '1', { fromValue: '0.01625977747324'}], position: 9170, duration: 1050 },
                { id: "eid156", tween: [ "style", "${__3_22}", "opacity", '1', { fromValue: '0'}], position: 6950, duration: 900 },
                { id: "eid427", tween: [ "style", "${_Text4}", "width", '80px', { fromValue: '80px'}], position: 6250, duration: 0 },
                { id: "eid402", tween: [ "style", "${__3_08tree2}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
                { id: "eid408", tween: [ "style", "${__3_08tree2}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 750 },
                { id: "eid437", tween: [ "style", "${_Text8}", "top", '599px', { fromValue: '726px'}], position: 9170, duration: 1050 },
                { id: "eid160", tween: [ "style", "${__3_17}", "opacity", '1', { fromValue: '0.016260162601626'}], position: 6300, duration: 1080 },
                { id: "eid433", tween: [ "style", "${_Text7}", "left", '1018px', { fromValue: '1210px'}], position: 8375, duration: 795 },
                { id: "eid143", tween: [ "style", "${__3_18}", "top", '378px', { fromValue: '388px'}], position: 8000, duration: 780 },
                { id: "eid123", tween: [ "style", "${__3_28}", "left", '668px', { fromValue: '633px'}], position: 9170, duration: 1050 },
                { id: "eid406", tween: [ "style", "${__3_08tree5}", "opacity", '1', { fromValue: '0'}], position: 4250, duration: 750 },
                { id: "eid418", tween: [ "style", "${_Text3}", "top", '305px', { fromValue: '229px'}], position: 3960, duration: 1215 },
                { id: "eid170", tween: [ "style", "${__3_21}", "opacity", '1', { fromValue: '0.016260162601626'}], position: 4680, duration: 1570 },
                { id: "eid111", tween: [ "style", "${__3_05}", "left", '83px', { fromValue: '80px'}], position: 0, duration: 2000 },
                { id: "eid113", tween: [ "style", "${__3_05}", "top", '76px', { fromValue: '-19px'}], position: 0, duration: 2000 },
                { id: "eid413", tween: [ "style", "${_Text2}", "opacity", '1', { fromValue: '0.01625977747324'}], position: 2000, duration: 2000 },
                { id: "eid404", tween: [ "style", "${__3_08tree3}", "opacity", '1', { fromValue: '0'}], position: 2750, duration: 750 },
                { id: "eid145", tween: [ "style", "${__3_18}", "opacity", '1', { fromValue: '0.048780487804878'}], position: 8000, duration: 780 },
                { id: "eid137", tween: [ "style", "${__3_23}", "left", '990px', { fromValue: '1181px'}], position: 8375, duration: 795 },
                { id: "eid139", tween: [ "style", "${__3_23}", "opacity", '1', { fromValue: '0.016260162601626'}], position: 8375, duration: 795 },
                { id: "eid424", tween: [ "style", "${_Text4}", "opacity", '1', { fromValue: '0.016260162601626'}], position: 4680, duration: 1570 },
                { id: "eid434", tween: [ "style", "${_Text7}", "opacity", '1', { fromValue: '0.016260162601626'}], position: 8375, duration: 795 },
                { id: "eid412", tween: [ "style", "${_Text2}", "top", '238px', { fromValue: '146px'}], position: 2000, duration: 2000 },
                { id: "eid154", tween: [ "style", "${__3_22}", "left", '749px', { fromValue: '866px'}], position: 6950, duration: 900 },
                { id: "eid422", tween: [ "style", "${__3_22}", "left", '720px', { fromValue: '749px'}], position: 7850, duration: 45 },
                { id: "eid425", tween: [ "style", "${_Text4}", "left", '444px', { fromValue: '587px'}], position: 4680, duration: 1570 },
                { id: "eid129", tween: [ "style", "${__3_08}", "opacity", '1', { fromValue: '0.01625977747324'}], position: 0, duration: 2000 },
                { id: "eid546", tween: [ "style", "${__3_28}", "height", '52px', { fromValue: '52px'}], position: 10220, duration: 0, easing: "easeOutQuad" },
                { id: "eid149", tween: [ "style", "${__3_19}", "opacity", '1', { fromValue: '0.016260162601626'}], position: 7380, duration: 870 },
                { id: "eid428", tween: [ "style", "${_Text5}", "left", '622px', { fromValue: '778px'}], position: 6300, duration: 1080 },
                { id: "eid439", tween: [ "style", "${_Text8}", "left", '730px', { fromValue: '695px'}], position: 9170, duration: 1050 },
                { id: "eid410", tween: [ "style", "${_Text}", "top", '208px', { fromValue: '116px'}], position: 2000, duration: 2000 },
                { id: "eid420", tween: [ "style", "${__3_21}", "width", '120px', { fromValue: '120px'}], position: 6250, duration: 0 },
                { id: "eid158", tween: [ "style", "${__3_17}", "left", '600px', { fromValue: '754px'}], position: 6300, duration: 1080 },
                { id: "eid411", tween: [ "style", "${_Text}", "opacity", '1', { fromValue: '0.01625977747324'}], position: 2000, duration: 2000 },
                { id: "eid168", tween: [ "style", "${__3_21}", "left", '420px', { fromValue: '563px'}], position: 4680, duration: 1570 },
                { id: "eid117", tween: [ "style", "${__3_08}", "top", '178px', { fromValue: '188px'}], position: 0, duration: 2000 },
                { id: "eid162", tween: [ "style", "${__3_20}", "left", '535px', { fromValue: '718px'}], position: 5750, duration: 1060 },
                { id: "eid438", tween: [ "style", "${_Text8}", "opacity", '1', { fromValue: '0.01625977747324'}], position: 9170, duration: 1050 },
                { id: "eid432", tween: [ "style", "${_Text6}", "opacity", '1', { fromValue: '0.016260162601626'}], position: 7380, duration: 870 },
                { id: "eid127", tween: [ "style", "${__3_05}", "opacity", '1', { fromValue: '0.01625977747324'}], position: 0, duration: 2000 },
                { id: "eid415", tween: [ "style", "${_Text3}", "opacity", '1', { fromValue: '0.01625977747324'}], position: 3960, duration: 1215 },
                { id: "eid547", tween: [ "style", "${__3_28}", "width", '189px', { fromValue: '189px'}], position: 10220, duration: 0, easing: "easeOutQuad" },
                { id: "eid147", tween: [ "style", "${__3_19}", "left", '788px', { fromValue: '955px'}], position: 7380, duration: 870 },
                { id: "eid125", tween: [ "style", "${__3_28}", "top", '581px', { fromValue: '706px'}], position: 9170, duration: 1050 },
                { id: "eid429", tween: [ "style", "${_Text5}", "opacity", '1', { fromValue: '0.016260162601626'}], position: 6300, duration: 1080 },
                { id: "eid431", tween: [ "style", "${_Text6}", "left", '812px', { fromValue: '980px'}], position: 7380, duration: 870 },
                { id: "eid164", tween: [ "style", "${__3_20}", "opacity", '1', { fromValue: '0.032520325203252'}], position: 5750, duration: 1060 }            ]
        }
    }
},
"s4": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: '_3_37',
                    type: 'image',
                    rect: ['19px', '130px', '614px', '381px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/_37.jpg', '0px', '0px']
                },
                {
                    id: '_3_39',
                    type: 'image',
                    rect: ['626px', '130px', '504px', '381px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/_39.jpg', '0px', '0px']
                },
                {
                    rect: ['701px', '408px', '97px', 'auto', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 10, 'rgba(248,119,16,1.00)', '500', 'underline', 'normal'],
                    id: 'Text8',
                    text: 'www.29858.com.cn',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['663px', '405px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 12, 'rgba(124,124,124,1)', '400', 'none', 'normal'],
                    id: 'Text7',
                    text: '网址：',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['661', '371px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 12, 'rgba(124,124,124,1)', '400', 'none', 'normal'],
                    id: 'Text6',
                    text: 'E-mail : info@chinahere.com.cn',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['661px', '340px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 12, 'rgba(124,124,124,1)', '400', 'none', 'normal'],
                    id: 'Text5',
                    text: 'QQ：',
                    align: 'left',
                    type: 'text'
                },
                {
                    id: '_3_33',
                    type: 'image',
                    rect: ['63px', '17px', '186px', '83px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/_33.jpg', '0px', '0px']
                },
                {
                    rect: ['24px', '39px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 35, 'rgba(248,119,16,1)', '900', 'none', 'normal'],
                    id: 'Text9',
                    text: '联系我们',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['657px', '183px', 'auto', 'auto', 'auto', 'auto'],
                    id: 'Text',
                    text: '北京宸立方科技有限公司',
                    font: ['Arial, Helvetica, sans-serif', 14, 'rgba(90,90,90,1.00)', '700', 'none', ''],
                    type: 'text'
                },
                {
                    rect: ['660px', '235px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 12, 'rgba(124,124,124,1.00)', '400', 'none', 'normal'],
                    id: 'Text2',
                    text: '公司地址：北京市海淀区中关村东路8号东升大厦c座236室',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['661px', '271px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 12, 'rgba(124,124,124,1)', '400', 'none', 'normal'],
                    id: 'Text3',
                    text: '邮政编码：100093',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['660', '306px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 12, 'rgba(124,124,124,1)', '400', 'none', 'normal'],
                    id: 'Text4',
                    text: '办公电话：400-600-3031',
                    align: 'left',
                    type: 'text'
                },
                {
                    id: '_3_39qq',
                    type: 'image',
                    rect: ['693px', '337px', '65px', '25px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/_qq.jpg', '0px', '0px']
                },
                {
                    id: '_3_37_s',
                    type: 'image',
                    rect: ['19px', '130px', '614px', '381px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/_37_submit.jpg', '0px', '0px']
                },
                {
                    rect: ['151px', '442px', '52px', 'auto', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 16, 'rgba(255,255,255,1.00)', '400', 'none', 'normal'],
                    id: 'Text10',
                    text: '提  交',
                    align: 'center',
                    type: 'text'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Text7}": [
                ["style", "top", '405px'],
                ["style", "opacity", '0'],
                ["style", "left", '1215px']
            ],
            "${__3_37_s}": [
                ["style", "top", '427px'],
                ["style", "height", '42px'],
                ["style", "opacity", '0'],
                ["style", "left", '-591px'],
                ["style", "width", '70px']
            ],
            "${_Text3}": [
                ["style", "top", '271px'],
                ["style", "opacity", '0'],
                ["style", "left", '1213px']
            ],
            "${_Text8}": [
                ["style", "top", '408px'],
                ["style", "width", '97px'],
                ["style", "text-decoration", 'underline'],
                ["style", "opacity", '0'],
                ["color", "color", 'rgba(248,119,16,1.00)'],
                ["style", "font-weight", '500'],
                ["style", "left", '1253px'],
                ["style", "font-size", '10px']
            ],
            "${__3_33}": [
                ["style", "top", '-173px'],
                ["style", "opacity", '0'],
                ["style", "left", '56px']
            ],
            "${__3_37}": [
                ["style", "top", '130px'],
                ["style", "opacity", '0'],
                ["style", "left", '-591px'],
                ["style", "height", '291px']
            ],
            "${symbolSelector}": [
                ["style", "height", '381px'],
                ["style", "width", '614px']
            ],
            "${_Text4}": [
                ["style", "top", '306px'],
                ["style", "opacity", '0'],
                ["style", "left", '1212px']
            ],
            "${__3_39}": [
                ["style", "top", '130px'],
                ["style", "height", '381px'],
                ["style", "opacity", '0'],
                ["style", "left", '1166px'],
                ["style", "width", '485px']
            ],
            "${__3_39qq}": [
                ["style", "top", '337px'],
                ["style", "height", '25px'],
                ["style", "opacity", '0'],
                ["style", "left", '1245px'],
                ["style", "width", '70px']
            ],
            "${_Text10}": [
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '400'],
                ["style", "left", '-584px'],
                ["style", "font-size", '16px'],
                ["style", "top", '438px'],
                ["style", "text-align", 'center'],
                ["style", "height", '19px'],
                ["style", "opacity", '0'],
                ["style", "width", '52px']
            ],
            "${_Text6}": [
                ["style", "top", '371px'],
                ["style", "opacity", '0'],
                ["style", "left", '1213px']
            ],
            "${_Text}": [
                ["style", "top", '183px'],
                ["style", "opacity", '0'],
                ["color", "color", 'rgba(90,90,90,1.00)'],
                ["style", "font-weight", '700'],
                ["style", "left", '1209px'],
                ["style", "font-size", '14px']
            ],
            "${_Text9}": [
                ["style", "top", '-151px'],
                ["style", "opacity", '0'],
                ["style", "left", '77px'],
                ["style", "font-weight", '900'],
                ["style", "text-decoration", 'none'],
                ["style", "font-size", '35px']
            ],
            "${_Text5}": [
                ["style", "top", '340px'],
                ["style", "opacity", '0'],
                ["style", "left", '1213px']
            ],
            "${_Text2}": [
                ["style", "top", '235px'],
                ["style", "opacity", '0'],
                ["color", "color", 'rgba(124,124,124,1.00)'],
                ["style", "font-weight", '400'],
                ["style", "left", '1212px'],
                ["style", "font-size", '12px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 4350,
            autoPlay: false,
            timeline: [
                { id: "eid185", tween: [ "style", "${__3_39}", "left", '538px', { fromValue: '1166px'}], position: 0, duration: 2175 },
                { id: "eid461", tween: [ "style", "${_Text3}", "left", '585px', { fromValue: '1213px'}], position: 0, duration: 2175 },
                { id: "eid553", tween: [ "style", "${__3_37_s}", "height", '42px', { fromValue: '42px'}], position: 2175, duration: 0 },
                { id: "eid456", tween: [ "style", "${__3_39qq}", "width", '70px', { fromValue: '70px'}], position: 4350, duration: 0 },
                { id: "eid501", tween: [ "style", "${_Text10}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 2175 },
                { id: "eid191", tween: [ "style", "${__3_33}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 2175 },
                { id: "eid458", tween: [ "style", "${_Text}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 2175 },
                { id: "eid473", tween: [ "style", "${_Text9}", "top", '39px', { fromValue: '-151px'}], position: 0, duration: 2175 },
                { id: "eid469", tween: [ "style", "${_Text7}", "left", '587px', { fromValue: '1215px'}], position: 0, duration: 2175 },
                { id: "eid463", tween: [ "style", "${_Text4}", "left", '584px', { fromValue: '1212px'}], position: 0, duration: 2175 },
                { id: "eid478", tween: [ "style", "${__3_37_s}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 2175 },
                { id: "eid457", tween: [ "style", "${_Text}", "left", '581px', { fromValue: '1209px'}], position: 0, duration: 2175 },
                { id: "eid454", tween: [ "style", "${__3_39qq}", "left", '617px', { fromValue: '1245px'}], position: 0, duration: 2175 },
                { id: "eid460", tween: [ "style", "${_Text2}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 2175 },
                { id: "eid189", tween: [ "style", "${__3_37}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 2175 },
                { id: "eid179", tween: [ "style", "${__3_33}", "top", '17px', { fromValue: '-173px'}], position: 0, duration: 2175 },
                { id: "eid470", tween: [ "style", "${_Text7}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 2175 },
                { id: "eid474", tween: [ "style", "${_Text9}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 2175 },
                { id: "eid556", tween: [ "style", "${__3_37_s}", "width", '70px', { fromValue: '70px'}], position: 2175, duration: 0 },
                { id: "eid475", tween: [ "style", "${_Text9}", "left", '24px', { fromValue: '77px'}], position: 0, duration: 2175 },
                { id: "eid183", tween: [ "style", "${__3_37}", "left", '-72px', { fromValue: '-591px'}], position: 0, duration: 2175 },
                { id: "eid471", tween: [ "style", "${_Text8}", "left", '625px', { fromValue: '1253px'}], position: 0, duration: 2175 },
                { id: "eid181", tween: [ "style", "${__3_33}", "left", '3px', { fromValue: '56px'}], position: 0, duration: 2175 },
                { id: "eid459", tween: [ "style", "${_Text2}", "left", '584px', { fromValue: '1212px'}], position: 0, duration: 2175 },
                { id: "eid450", tween: [ "style", "${__3_39}", "width", '485px', { fromValue: '485px'}], position: 2175, duration: 0 },
                { id: "eid453", tween: [ "style", "${__3_39qq}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 2175 },
                { id: "eid465", tween: [ "style", "${_Text5}", "left", '585px', { fromValue: '1213px'}], position: 0, duration: 2175 },
                { id: "eid462", tween: [ "style", "${_Text3}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 2175 },
                { id: "eid557", tween: [ "style", "${__3_37_s}", "top", '427px', { fromValue: '427px'}], position: 2175, duration: 0 },
                { id: "eid479", tween: [ "style", "${__3_37_s}", "left", '139px', { fromValue: '-591px'}], position: 0, duration: 2175 },
                { id: "eid468", tween: [ "style", "${_Text6}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 2175 },
                { id: "eid464", tween: [ "style", "${_Text4}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 2175 },
                { id: "eid504", tween: [ "style", "${_Text10}", "top", '438px', { fromValue: '438px'}], position: 0, duration: 0 },
                { id: "eid505", tween: [ "style", "${_Text10}", "top", '438px', { fromValue: '438px'}], position: 2175, duration: 0 },
                { id: "eid490", tween: [ "style", "${_Text10}", "left", '151px', { fromValue: '-584px'}], position: 0, duration: 2175 },
                { id: "eid187", tween: [ "style", "${__3_39}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 2175 },
                { id: "eid476", tween: [ "style", "${__3_37}", "height", '291px', { fromValue: '291px'}], position: 2175, duration: 0 },
                { id: "eid466", tween: [ "style", "${_Text5}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 2175 },
                { id: "eid467", tween: [ "style", "${_Text6}", "left", '585px', { fromValue: '1213px'}], position: 0, duration: 2175 },
                { id: "eid472", tween: [ "style", "${_Text8}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 2175 }            ]
        }
    }
},
"s11": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'text',
                    id: 'Text',
                    text: '北京宸立方科技有限公司成立于2005年，是一家提供虚拟现实应用系统解决方案及服务、网站建设、云计算、网站周边等相关业务的供应商',
                    rect: ['55px', '29px', '369px', '69px', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 24, 'rgba(0,0,0,1)', 'normal', 'none', '']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Text}": [
                ["style", "top", '8px'],
                ["style", "font-size", '12px'],
                ["style", "height", '69px'],
                ["color", "color", 'rgba(124,124,124,1.00)'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '58px'],
                ["style", "width", '400px']
            ],
            "${symbolSelector}": [
                ["style", "height", '127px'],
                ["style", "width", '497px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2175,
            autoPlay: true,
            timeline: [
                { id: "eid216", tween: [ "style", "${_Text}", "width", '400px', { fromValue: '400px'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid217", tween: [ "style", "${_Text}", "width", '400px', { fromValue: '400px'}], position: 2173, duration: 0, easing: "easeOutQuad" },
                { id: "eid214", tween: [ "style", "${_Text}", "font-size", '12px', { fromValue: '12px'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid215", tween: [ "style", "${_Text}", "font-size", '12px', { fromValue: '12px'}], position: 2173, duration: 0, easing: "easeOutQuad" },
                { id: "eid204", tween: [ "style", "${_Text}", "top", '126px', { fromValue: '8px'}], position: 0, duration: 2175, easing: "easeOutQuad" },
                { id: "eid206", tween: [ "style", "${_Text}", "left", '58px', { fromValue: '58px'}], position: 0, duration: 2175, easing: "easeOutQuad" },
                { id: "eid205", tween: [ "style", "${_Text}", "opacity", '1', { fromValue: '0.000000'}], position: 0, duration: 2175, easing: "easeOutQuad" },
                { id: "eid209", tween: [ "color", "${_Text}", "color", 'rgba(124,124,124,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(124,124,124,1.00)'}], position: 2173, duration: 0, easing: "easeOutQuad" }            ]
        }
    }
},
"s1_rf": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 's1_r',
                    type: 'rect',
                    rect: ['-149px', '-2297px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    rect: ['auto', '-5px', 'auto', 'auto', '617px', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 20, 'rgba(206,206,206,1.00)', '900', 'none', 'normal'],
                    userClass: 'T_14_a',
                    id: 'T_14_a',
                    text: '●',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['auto', '58px', 'auto', 'auto', '618px', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 20, 'rgba(206,206,206,1.00)', '900', 'none', 'normal'],
                    userClass: 'T_15_a',
                    id: 'T_15_a',
                    text: '●',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['auto', '89px', 'auto', 'auto', '618px', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 20, 'rgba(206,206,206,1.00)', '900', 'none', 'normal'],
                    userClass: 'T_17_a',
                    id: 'T_17_a',
                    text: '●',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['auto', '25px', 'auto', 'auto', '618px', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 20, 'rgba(206,206,206,1.00)', '900', 'none', 'normal'],
                    userClass: 'T_16_a',
                    id: 'T_16_a',
                    text: '●',
                    align: 'left',
                    type: 'text'
                },
                {
                    font: ['Arial, Helvetica, sans-serif', 12, 'rgba(94,94,94,1.00)', '900', 'none', 'normal'],
                    rect: ['auto', '94px', 'auto', 'auto', '559px', 'auto'],
                    userClass: 'T_17',
                    align: 'left',
                    id: 'T_17',
                    opacity: 0.96000001907349,
                    text: '联系我们',
                    type: 'text'
                },
                {
                    rect: ['auto', '30px', 'auto', 'auto', '558px', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 12, 'rgba(94,94,94,1.00)', '900', 'none', 'normal'],
                    userClass: 'T_16',
                    id: 'T_16',
                    text: '项目服务',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['auto', '0px', 'auto', 'auto', '558px', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 12, 'rgba(94,94,94,1.00)', '900', 'none', 'normal'],
                    userClass: 'T_14',
                    id: 'T_14',
                    text: '关于我们<br>',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['auto', '63px', 'auto', 'auto', '559px', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 12, 'rgba(94,94,94,1.00)', '900', 'none', 'normal'],
                    userClass: 'T_15',
                    id: 'T_15',
                    text: '案例展示',
                    align: 'left',
                    type: 'text'
                }
            ],
            symbolInstances: [
            {
                id: 's1_r',
                symbolName: 's4',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_T_15_a}": [
                ["style", "top", '58px'],
                ["style", "right", '618px'],
                ["color", "color", 'rgba(206,206,206,1)']
            ],
            "${_s1_r}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '-41px']
            ],
            "${_T_17}": [
                ["style", "top", '94px'],
                ["style", "right", '559px'],
                ["color", "color", 'rgba(94,94,94,1.00)'],
                ["style", "opacity", '0.96000001907349']
            ],
            "${_T_16_a}": [
                ["style", "top", '25px'],
                ["style", "right", '618px'],
                ["color", "color", 'rgba(206,206,206,1.00)']
            ],
            "${_T_16}": [
                ["style", "top", '30px'],
                ["style", "right", '558px'],
                ["color", "color", 'rgba(94,94,94,1.00)']
            ],
            "${symbolSelector}": [
                ["style", "height", '381px'],
                ["style", "width", '614px']
            ],
            "${_T_17_a}": [
                ["style", "top", '89px'],
                ["style", "right", '618px'],
                ["color", "color", 'rgba(206,206,206,1)']
            ],
            "${_T_14}": [
                ["color", "color", 'rgba(94,94,94,1.00)'],
                ["style", "right", '558px'],
                ["style", "top", '0px']
            ],
            "${_T_15}": [
                ["style", "top", '63px'],
                ["style", "right", '559px'],
                ["color", "color", 'rgba(94,94,94,1.00)']
            ],
            "${_T_14_a}": [
                ["style", "top", '-5px'],
                ["style", "right", '617px'],
                ["color", "color", 'rgba(206,206,206,1)']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-944249601");
