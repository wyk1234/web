function max(a, b){
    return a > b? a:b;
}
function getData(){
    data = {
        "nodes": [],
        "links": [{
            "source": "HaydenBot",
            "target": "大V宣传",
            "value": 100
        },{
            "source": "HaydenBot",
            "target": "网站",
            "value": 150
        },{
            "source": "HaydenBot",
            "target": "白皮书",
            "value": 100
        },{
            "source": "HaydenBot",
            "target": "代币",
            "value": 300
        },{
            "source": "HaydenBot",
            "target": "代码开源",
            "value": 100
        },{
            "source": "HaydenBot",
            "target": "社交媒体",
            "value": 400
        },{
            "source": "HaydenBot",
            "target": "线下会议",
            "value": 50
        },{
            "source": "HaydenBot",
            "target": "融资",
            "value": 200
        },{
            "source": "融资",
            "target": "融资人员",
            "value": 200
        },{
            "source": "代币",
            "target": "链上监控&特征分析",
            "value": 50
        },{
            "source": "代币",
            "target": "中心化交易所",
            "value": 200
        },{
            "source": "代币",
            "target": "DEX",
            "value": 50
        },{
            "source": "代码开源",
            "target": "Github账号",
            "value": 50
        },{
            "source": "代码开源",
            "target": "技术依赖",
            "value": 50
        },{
            "source": "技术依赖",
            "target": "团队信息",
            "value": 50
        },{
            "source": "白皮书",
            "target": "Github账号",
            "value": 50
        },{
            "source": "白皮书",
            "target": "创始人背景",
            "value": 50
        },{
            "source": "大V宣传",
            "target": "运营人员",
            "value": 100
        },{
            "source": "社交媒体",
            "target": "运营人员",
            "value": 50
        },{
            "source": "线下会议",
            "target": "运营人员",
            "value": 50
        },{
            "source": "社交媒体",
            "target": "社区人肉搜索",
            "value": 50
        },{
            "source": "社交媒体",
            "target": "Twitter账号",
            "value": 100
        },{
            "source": "社交媒体",
            "target": "Discord账号",
            "value": 100
        },{
            "source": "社交媒体",
            "target": "Telegram账号",
            "value": 100
        }, {
            "source": "网站",
            "target": "云服务信息",
            "value": 50
        }, {
            "source": "网站",
            "target": "域名信息",
            "value": 50
        }, {
            "source": "网站",
            "target": "网站漏洞",
            "value": 50
        }, {
            "source": "网站漏洞",
            "target": "团队信息",
            "value": 50
        },{
            "source": "社区人肉搜索",
            "target": "团队信息",
            "value": 50
        },{
            "source": "融资人员",
            "target": "团队信息",
            "value": 200
        },{
            "source": "运营人员",
            "target": "团队信息",
            "value": 200
        },{
            "source": "Telegram账号",
            "target": "团队信息",
            "value": 100
        },{
            "source": "Discord账号",
            "target": "团队信息",
            "value": 100
        },{
            "source": "Twitter账号",
            "target": "团队信息",
            "value": 100
        },{
            "source": "Github账号",
            "target": "团队信息",
            "value": 100
        },{
            "source": "中心化交易所",
            "target": "团队信息",
            "value": 200
        },{
            "source": "云服务信息",
            "target": "团队信息",
            "value": 50
        },{
            "source": "域名信息",
            "target": "团队信息",
            "value": 50
        },{
            "source": "链上监控&特征分析",
            "target": "团队信息",
            "value": 50
        },{
            "source": "创始人背景",
            "target": "团队信息",
            "value": 50
        },{
            "source": "DEX",
            "target": "团队信息",
            "value": 50
        }]
    }; 
    nodes_dict = {}
    nodes_list = []
    for(var i = 0; i < data["links"].length; i++){
        if(!nodes_dict.hasOwnProperty(data["links"][i]["source"])){
            nodes_dict[data["links"][i]["source"]] = {"source":0, "target":0}
            nodes_list.push(data["links"][i]["source"])
        }
        nodes_dict[data["links"][i]["source"]]["source"] += data["links"][i]["value"]
    }
    for(var i = 0; i < data["links"].length; i++){
        if(!nodes_dict.hasOwnProperty(data["links"][i]["target"])){
            nodes_dict[data["links"][i]["target"]] = {"source":0, "target":0}
            nodes_list.push(data["links"][i]["target"])
        }
        nodes_dict[data["links"][i]["target"]]["target"] += data["links"][i]["value"]
    }
    for(var i = 0; i < nodes_list.length; i++){
        var key = nodes_list[i];
        if(key == "团队信息" || key == "HaydenBot"){
            data["nodes"].push({"name":key})
        }
        else{
            data["nodes"].push({"name":key, "value":nodes_dict[key]["source"]})
        }
    }
    return data
}
function drawSankey(data) {
    var chartDom = document.getElementById("Echarts_Div");
    var myChart = echarts.init(chartDom);
    var option;
    option = {
        title: {
            text: '\n   HaydenBot 匿名信息梳理'
        },
        tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove'
        },
        series: [{
            type: 'sankey',
            data: data.nodes,
            links: data.links,
            lineStyle: {
                color: 'gradient',
                curveness: 0.5
            }
        }]
    };

    option && myChart.setOption(option);
}
window.onload = function() {
    drawSankey(getData());
    //drawSunburst();
}
