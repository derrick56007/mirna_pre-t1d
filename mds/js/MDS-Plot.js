glimma.layout.setupGrid(d3.select(".container"), "md", [1,2]);
glimma.storage.chartData.push(glimma.transform.toRowMajor({"dim1":[0.1195,1.434,-0.2802,0.8921,-0.4371,-1.019,1.075,1.746,1.181,-0.3855,-0.5361,-0.201,-0.8555,1.396,0.3333,-0.5405,0.6264,0.03648,-0.02052,-0.1603,-0.5189,-0.5051,1.563,1.181,0.1376,0.1783,-0.6192,1.333,0.2451,0.6667,-0.1779,1.308,-0.4099,-0.7246,0.6527,-0.6561,-0.6332,-0.5345,-0.158,-0.2576,-0.4094,-0.5469,-0.6592,-0.581,-1.055,-0.7482,1.408,-0.7964,-0.4171,1.103,0.7978,-0.5891,-0.3627,-0.1515,-0.5486,-0.04802,-0.141,0.01683,1.113,-0.5821,1,0.3443,-0.7172,-0.6454,0.5669,-0.966,1.282,-0.8173,-0.5435,1.244,0.7506,-0.9452,-0.6721,-0.5683,-0.7088,-0.5275,-0.5877,-0.134,-0.6326],"dim2":[-0.06624,-1.307,0.1187,-0.07542,0.2145,-0.4739,-0.6888,-0.2657,-0.1614,-0.7011,-0.02416,0.5874,0.09877,0.3707,-0.2996,0.2292,0.9761,0.3794,-0.8554,0.4192,0.3096,-0.6938,0.7349,-0.02097,0.3615,-0.9033,0.3016,0.01439,0.2777,-1.226,0.1491,-0.2434,0.1504,0.1992,0.1232,0.3373,-0.738,-0.08838,0.739,-0.8559,0.2286,0.1708,-0.6436,-0.671,0.6696,0.007916,0.2921,0.01705,-0.02238,0.596,0.03236,0.2216,-0.6732,-0.6341,-0.5248,0.7469,0.3293,-0.6314,0.2508,0.05906,0.1276,-0.1192,0.09397,-0.0427,0.7405,0.2717,0.4311,-0.02069,0.0661,0.4391,-0.05314,0.3289,0.9334,-0.6467,0.5126,0.3249,-0.5551,-0.661,0.6033],"dim3":[0.4972,0.2851,-0.02697,-1.024,0.09758,-0.8826,1.301,0.2427,1.53,-0.5816,0.1954,-0.06259,-0.4716,-0.2767,0.2017,0.431,-0.1511,0.5839,0.1038,0.5454,0.4473,0.09226,0.3547,-0.3168,0.3034,0.1566,0.2652,-0.5237,0.3756,1.106,1.017,-0.5379,0.4112,0.1138,-0.5541,0.3247,-0.4067,0.4597,-0.2477,-0.2316,0.009846,0.06187,-0.6906,-0.695,-0.4565,0.05046,0.3304,0.2067,0.1182,-0.3938,-0.6244,0.1952,-0.07403,-0.1332,-0.3324,0.06604,0.2274,-0.2569,-0.4559,0.1022,-0.6096,-0.3806,0.1352,0.43,-0.4084,0.03557,-0.3255,-0.1011,0.3099,-0.4434,-0.333,0.03366,-0.1696,-0.5389,-0.02148,0.2627,-0.1938,-0.09431,0.009558],"dim4":[-0.7234,-0.1912,-0.746,-0.79,-0.3593,-0.1477,-0.7577,0.1414,-0.3833,-0.2481,-0.3049,-0.02004,-0.235,-0.2144,0.8664,0.09893,0.8956,0.3311,0.511,0.8199,0.377,1.104,0.7285,-0.2459,-0.06788,0.2223,-0.3009,-0.2019,-0.1943,-0.323,-0.2435,-0.03875,0.2087,-0.1102,0.02502,0.02004,0.192,-0.08439,-0.2973,-0.2259,-0.3002,-0.3612,-0.3317,-0.2888,-0.2934,-0.3967,0.2071,-0.4167,-0.3046,0.2679,-0.1862,-0.2434,0.5286,0.9584,0.4315,0.3413,0.2075,0.627,-0.3759,-0.2276,-0.09313,0.02577,-0.109,-0.1756,-0.1218,0.1221,0.06704,-0.2709,0.01611,-0.04309,0.1424,0.06744,0.2163,0.2869,0.08721,0.0966,0.2186,0.3231,0.2136],"dim5":[-0.7051,-0.326,-0.2234,-0.006364,-0.5835,-0.007494,0.03214,0.2643,-0.6434,-0.4637,0.1798,-0.4158,0.1402,0.3881,-0.5126,0.1123,-0.2084,-0.4085,-0.228,0.08377,0.509,0.04076,0.7251,0.296,-0.5177,-0.429,0.1113,0.09668,-0.5081,0.06317,0.1524,0.2696,-0.2385,0.3823,-0.02165,0.1016,-0.05362,0.4876,-0.7019,0.1384,-0.2482,-0.0285,-0.1583,-0.3363,-0.4263,0.4243,0.05952,0.643,0.4231,0.1028,-0.1685,0.2027,0.05025,-0.007893,0.0878,-0.534,-0.4648,-0.2754,0.07363,0.4327,-0.06536,0.1878,0.5144,0.7953,-0.1898,0.3099,0.4862,0.2743,0.5271,0.3899,0.1841,0.366,-0.5202,0.04886,-0.3636,-0.0336,0.2372,-0.1941,-0.1782],"dim6":[-0.1871,-0.501,0.4624,0.2552,-0.2402,0.02344,-0.3173,-0.3141,-0.4505,0.4444,0.2562,-0.08708,0.1225,-0.0783,0.09757,0.6917,-0.06015,0.2942,0.1601,-0.1757,0.1167,-0.2413,-0.07439,0.3892,0.4462,0.4198,0.6195,0.1724,0.5037,0.352,1.232,0.2704,-0.1062,0.3549,0.361,-0.2281,0.2535,0.1186,-0.1519,-0.426,-0.7872,-0.7022,-0.0916,0.02893,-0.3065,-0.1346,-0.28,-0.6568,-0.08979,0.05379,-0.0762,0.09142,0.02536,-0.302,-0.07372,0.07219,-0.04384,-0.05031,-0.1927,-0.1138,-0.008362,-0.17,-0.01874,-0.4422,-0.2069,0.2041,0.1948,-0.2456,0.07019,-0.08603,0.1379,0.1897,0.07105,0.006645,-0.2903,-0.4369,-0.03526,0.1014,-0.1843],"dim7":[-0.3022,-0.2966,-0.09405,-0.343,-0.203,0.178,-0.2877,0.1651,0.3444,0.06928,-0.166,-0.2075,0.09073,-0.09418,0.4703,-0.389,0.6377,-0.4318,-0.1211,-0.5983,-0.3736,-0.3447,-0.000672,-0.6127,-0.2333,0.2205,-0.1533,-0.2264,-0.1639,0.9179,0.434,-0.3841,-0.4352,-0.04236,-0.282,-0.2424,0.174,-0.07265,0.3389,0.23,-0.09023,-0.009321,0.3322,0.1906,0.06746,0.02893,0.5134,-0.04441,0.0421,0.4594,-0.3452,0.1023,-0.08236,-0.2547,0.1585,0.06974,-0.1716,0.06612,0.1556,0.064,-0.07316,-0.3964,0.06387,0.1235,0.6133,0.1947,0.4621,0.3944,0.04441,0.1824,-0.454,0.2383,0.3712,0.1058,-0.1818,-0.2232,0.1549,-0.01411,-0.02778],"dim8":[0.4683,-0.08374,-0.2323,0.3543,0.1923,-0.2273,-0.6593,0.7843,-0.2335,-0.3308,-0.07012,-0.2908,-0.4253,-0.5092,-0.1435,-0.02939,0.5339,-0.09526,0.1166,0.01191,-0.2093,0.2795,-0.4569,-0.03368,-0.4037,-0.2115,-0.189,0.2322,-0.5248,0.7996,0.6759,0.5753,0.3209,-0.1229,0.1636,0.07113,-0.1128,0.1004,0.2478,-0.06112,0.263,0.1815,0.005835,-0.1124,0.2465,0.0299,-0.5852,0.04537,0.01379,-0.06851,0.3336,-0.03911,-0.005707,-0.1238,-0.09345,0.1433,-0.3574,-0.08922,-0.2363,-0.1821,-0.1463,0.4885,-0.06804,0.1084,-0.09606,0.1274,-0.3069,-0.1452,0.08236,-0.1549,0.4971,0.2097,0.2013,-0.3154,-0.0067,0.1701,-0.1432,-0.2262,0.08242],"label":["GSM1088200_M7_Naive Naive TRUE","GSM1088201_M8_Naive Naive TRUE","GSM1088202_M9_Naive Naive TRUE","GSM1088203_M10_Naive Naive TRUE","GSM1088204_M12_Naive Naive TRUE","GSM1088205_M29_Naive Naive TRUE","GSM1088206_M7_rTreg rTreg TRUE","GSM1088207_M8_rTreg rTreg TRUE","GSM1088208_M9_rTreg rTreg TRUE","GSM1088209_M10_rTreg rTreg TRUE","GSM1088210_M12_rTreg rTreg TRUE","GSM1088211_M26_rTreg rTreg TRUE","GSM1088212_M27_rTreg rTreg TRUE","GSM1088213_M30_rTreg rTreg TRUE","GSM1088214_M7_aTreg aTreg TRUE","GSM1088215_M8_aTreg aTreg TRUE","GSM1088216_M9_aTreg aTreg TRUE","GSM1088217_M10_aTreg aTreg TRUE","GSM1088218_M12_aTreg aTreg TRUE","GSM1088219_M26_aTreg aTreg TRUE","GSM1088220_M27_aTreg aTreg TRUE","GSM1088221_M29_aTreg aTreg TRUE","GSM1088222_M30_aTreg aTreg TRUE","GSM1088223_M7_Tcm Tcm TRUE","GSM1088224_M8_Tcm Tcm TRUE","GSM1088225_M9_Tcm Tcm TRUE","GSM1088226_M10_Tcm Tcm TRUE","GSM1088227_M12_Tcm Tcm TRUE","GSM1088228_M7_Tem Tem TRUE","GSM1088229_M8_Tem Tem TRUE","GSM1088230_M9_Tem Tem TRUE","GSM1088231_M10_Tem Tem TRUE","GSM1088232_M12_Tem Tem TRUE","GSM1088233_M7_Ttm Ttm TRUE","GSM1088234_M8_Ttm Ttm TRUE","GSM1088235_M9_Ttm Ttm TRUE","GSM1088236_M10_Ttm Ttm TRUE","GSM1088237_M12_Ttm Ttm TRUE","GSM1088238_P1_Naive Naive FALSE","GSM1088239_P2_Naive Naive FALSE","GSM1088240_P3_Naive Naive FALSE","GSM1088241_P4_Naive Naive FALSE","GSM1088242_P5_Naive Naive FALSE","GSM1088243_P6_Naive Naive FALSE","GSM1088244_P7_Naive Naive FALSE","GSM1088245_P1_rTreg rTreg FALSE","GSM1088246_P2_rTreg rTreg FALSE","GSM1088247_P3_rTreg rTreg FALSE","GSM1088248_P4_rTreg rTreg FALSE","GSM1088249_P5_rTreg rTreg FALSE","GSM1088250_P6_rTreg rTreg FALSE","GSM1088251_P7_rTreg rTreg FALSE","GSM1088252_P1_aTreg aTreg FALSE","GSM1088254_P3_aTreg aTreg FALSE","GSM1088255_P4_aTreg aTreg FALSE","GSM1088256_P5_aTreg aTreg FALSE","GSM1088257_P6_aTreg aTreg FALSE","GSM1088258_P7_aTreg aTreg FALSE","GSM1088259_P1_Tcm Tcm FALSE","GSM1088260_P2_Tcm Tcm FALSE","GSM1088261_P3_Tcm Tcm FALSE","GSM1088262_P4_Tcm Tcm FALSE","GSM1088263_P5_Tcm Tcm FALSE","GSM1088264_P6_Tcm Tcm FALSE","GSM1088265_P7_Tcm Tcm FALSE","GSM1088266_P1_Tem Tem FALSE","GSM1088267_P2_Tem Tem FALSE","GSM1088268_P3_Tem Tem FALSE","GSM1088269_P4_Tem Tem FALSE","GSM1088270_P5_Tem Tem FALSE","GSM1088271_P6_Tem Tem FALSE","GSM1088272_P7_Tem Tem FALSE","GSM1088273_P1_Ttm Ttm FALSE","GSM1088274_P2_Ttm Ttm FALSE","GSM1088275_P3_Ttm Ttm FALSE","GSM1088276_P4_Ttm Ttm FALSE","GSM1088277_P5_Ttm Ttm FALSE","GSM1088278_P6_Ttm Ttm FALSE","GSM1088279_P7_Ttm Ttm FALSE"],"groups":["Naive.TRUE","Naive.TRUE","Naive.TRUE","Naive.TRUE","Naive.TRUE","Naive.TRUE","rTreg.TRUE","rTreg.TRUE","rTreg.TRUE","rTreg.TRUE","rTreg.TRUE","rTreg.TRUE","rTreg.TRUE","rTreg.TRUE","aTreg.TRUE","aTreg.TRUE","aTreg.TRUE","aTreg.TRUE","aTreg.TRUE","aTreg.TRUE","aTreg.TRUE","aTreg.TRUE","aTreg.TRUE","Tcm.TRUE","Tcm.TRUE","Tcm.TRUE","Tcm.TRUE","Tcm.TRUE","Tem.TRUE","Tem.TRUE","Tem.TRUE","Tem.TRUE","Tem.TRUE","Ttm.TRUE","Ttm.TRUE","Ttm.TRUE","Ttm.TRUE","Ttm.TRUE","Naive.FALSE","Naive.FALSE","Naive.FALSE","Naive.FALSE","Naive.FALSE","Naive.FALSE","Naive.FALSE","rTreg.FALSE","rTreg.FALSE","rTreg.FALSE","rTreg.FALSE","rTreg.FALSE","rTreg.FALSE","rTreg.FALSE","aTreg.FALSE","aTreg.FALSE","aTreg.FALSE","aTreg.FALSE","aTreg.FALSE","aTreg.FALSE","Tcm.FALSE","Tcm.FALSE","Tcm.FALSE","Tcm.FALSE","Tcm.FALSE","Tcm.FALSE","Tcm.FALSE","Tem.FALSE","Tem.FALSE","Tem.FALSE","Tem.FALSE","Tem.FALSE","Tem.FALSE","Tem.FALSE","Ttm.FALSE","Ttm.FALSE","Ttm.FALSE","Ttm.FALSE","Ttm.FALSE","Ttm.FALSE","Ttm.FALSE"]}));
glimma.storage.chartInfo.push({"x":"dim1","y":"dim2","id":[],"ndigits":[],"signif":6,"pntsize":4,"xlab":"Dimension 1","ylab":"Dimension 2","xjitter":0,"yjitter":0,"xord":false,"yord":false,"xlog":false,"ylog":false,"xgrid":false,"ygrid":false,"xstep":false,"ystep":false,"col":"groups","cfixed":false,"anno":["label","groups","dim1","dim2"],"annoLabels":[],"height":400,"width":500,"type":"scatter","title":"MDS Plot","flag":[],"info":{"groupsNames":"groups"},"hide":false,"disableClick":false,"disableHover":false,"disableZoom":false});
glimma.storage.charts.push(glimma.chart.scatterChart().height(400).width(500).size(function (d) { return 4; }).x(function (d) { return d["dim1"]; }).xlab("Dimension 1").xJitter(0).y(function (d) { return d["dim2"]; }).ylab("Dimension 2").yJitter(0).tooltip(glimma.storage.chartInfo[0].anno).title(glimma.storage.chartInfo[0].title).signif(6).col(function(d) { return d["groups"]; }));
glimma.storage.chartData.push(glimma.transform.toRowMajor({"name":[1,2,3,4,5,6,7,8],"eigen":[0.18,0.07,0.06,0.05,0.04,0.03,0.03,0.03]}));
glimma.storage.chartInfo.push({"names":"name","y":"eigen","ndigits":[],"signif":6,"xlab":"Dimension","ylab":"Proportion","col":[],"anno":"eigen","height":300,"width":300,"type":"bar","title":"Variance Explained","flag":[],"info":{"dims":78}});
glimma.storage.charts.push(glimma.chart.barChart().height(300).width(300).id(function (d) { return d["name"]; }).xlab("Dimension").y(function (d) { return d["eigen"]; }).ylab("Proportion").title(glimma.storage.chartInfo[1].title).signif(6));
glimma.storage.tables.push(glimma.chart.table().data(glimma.storage.chartData[0]).columns(["label","groups"]));
glimma.layout.addTable(glimma.layout.bsAddRow(d3.select(".container")));
glimma.storage.linkage = [{"from":2,"to":1,"src":"none","dest":"none","flag":"mds","info":"none"},{"from":1,"to":1,"src":"click","dest":"highlightById","flag":"tablink","info":"none"}];
glimma.storage.input = [];