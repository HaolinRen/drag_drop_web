(function() {
    var nodes = [
        {"name":"Myriel","group":1},
        {"name":"Napoleon","group":1},
        {"name":"Mlle.Baptistine","group":1},
        {"name":"Mme.Magloire","group":1},
        {"name":"CountessdeLo","group":1},
        {"name":"Geborand","group":1},
        {"name":"Champtercier","group":1},
        {"name":"Cravatte","group":1},
        {"name":"Count","group":1},
        {"name":"OldMan","group":1},
        {"name":"Labarre","group":2},
        {"name":"Valjean","group":2},
        {"name":"Marguerite","group":3},
        {"name":"Mme.deR","group":2},
        {"name":"Isabeau","group":2},
        {"name":"Gervais","group":2},
        {"name":"Tholomyes","group":3},
        {"name":"Listolier","group":3},
        {"name":"Fameuil","group":3},
        {"name":"Blacheville","group":3},
        {"name":"Favourite","group":3},
        {"name":"Dahlia","group":3},
        {"name":"Zephine","group":3},
        {"name":"Fantine","group":3},
        {"name":"Mme.Thenardier","group":4},
        {"name":"Thenardier","group":4},
        {"name":"Cosette","group":5},
        {"name":"Javert","group":4}
        ];
    var nodes2 = [
        {"name":"Mme.deR","group":2},
        {"name":"Isabeau","group":2},
        {"name":"Gervais","group":2},
        {"name":"Tholomyes","group":3},
        {"name":"Listolier","group":3},
        {"name":"Fameuil","group":3},
        {"name":"Blacheville","group":3},
        {"name":"Favourite","group":3},
        {"name":"Dahlia","group":3},
        {"name":"Zephine","group":3},
        {"name":"Fantine","group":3},
        {"name":"Mme.Thenardier","group":4},
        {"name":"Thenardier","group":4},
        {"name":"Cosette","group":5},
        {"name":"Javert","group":4},
        {"name":"Fauchelevent","group":0},
        {"name":"Bamatabois","group":2},
        {"name":"Perpetue","group":3},
        {"name":"Simplice","group":2},
        {"name":"Scaufflaire","group":2},
        {"name":"Woman1","group":2},
        {"name":"Judge","group":2},
        {"name":"Champmathieu","group":2},
        {"name":"Brevet","group":2},
        {"name":"Chenildieu","group":2},
        {"name":"Cochepaille","group":2},
        {"name":"Pontmercy","group":4},
        {"name":"Boulatruelle","group":6},
        {"name":"Eponine","group":4},
        {"name":"Anzelma","group":4},
        {"name":"Woman2","group":5},
        {"name":"MotherInnocent","group":0},
        {"name":"Gribier","group":0},
        {"name":"Jondrette","group":7},
        {"name":"Mme.Burgon","group":7},
        {"name":"Gavroche","group":8},
        {"name":"Gillenormand","group":5},
        {"name":"Magnon","group":5},
        {"name":"Mlle.Gillenormand","group":5},
        {"name":"Mme.Pontmercy","group":5},
        {"name":"Mlle.Vaubois","group":5},
        {"name":"Lt.Gillenormand","group":5},
        {"name":"Marius","group":8},
        {"name":"BaronessT","group":5},
        {"name":"Mabeuf","group":8},
        {"name":"Enjolras","group":8},
        {"name":"Combeferre","group":8},
        {"name":"Prouvaire","group":8},
        {"name":"Feuilly","group":8},
        {"name":"Courfeyrac","group":8},
        {"name":"Bahorel","group":8},
        {"name":"Bossuet","group":8},
        {"name":"Joly","group":8},
        {"name":"Grantaire","group":8},
        {"name":"MotherPlutarch","group":9},
        {"name":"Gueulemer","group":4},
        {"name":"Babet","group":4},
        {"name":"Claquesous","group":4},
        {"name":"Montparnasse","group":4},
        {"name":"Toussaint","group":5},
    ];
    var links = [
        {"source":1,"target":0,"value":1},
        {"source":2,"target":0,"value":8},
        {"source":3,"target":0,"value":10},
        {"source":3,"target":2,"value":6},
        {"source":4,"target":0,"value":1},
        {"source":5,"target":0,"value":1},
        {"source":6,"target":0,"value":1},
        {"source":7,"target":0,"value":1},
        {"source":8,"target":0,"value":2},
        {"source":9,"target":0,"value":1},
        {"source":11,"target":10,"value":1},
        {"source":11,"target":3,"value":3},
        {"source":11,"target":2,"value":3},
        {"source":11,"target":0,"value":5},
        {"source":12,"target":11,"value":1},
        {"source":13,"target":11,"value":1},
        {"source":14,"target":11,"value":1},
        {"source":15,"target":11,"value":1},
        {"source":17,"target":16,"value":4},
        {"source":18,"target":16,"value":4},
        {"source":18,"target":17,"value":4},
        {"source":19,"target":16,"value":4},
        {"source":19,"target":17,"value":4},
        {"source":19,"target":18,"value":4},
        {"source":20,"target":16,"value":3},
        {"source":20,"target":17,"value":3},
        {"source":20,"target":18,"value":3},
        {"source":20,"target":19,"value":4},
        {"source":21,"target":16,"value":3},
        {"source":21,"target":17,"value":3},
        {"source":21,"target":18,"value":3},
        {"source":21,"target":19,"value":3},
        {"source":21,"target":20,"value":5},
        {"source":22,"target":16,"value":3},
        {"source":22,"target":17,"value":3},
        {"source":22,"target":18,"value":3},
        {"source":22,"target":19,"value":3},
        {"source":22,"target":20,"value":4},
        {"source":22,"target":21,"value":4},
        {"source":23,"target":16,"value":3},
        {"source":23,"target":17,"value":3},
        {"source":23,"target":18,"value":3},
        {"source":23,"target":19,"value":3},
        {"source":23,"target":20,"value":4},
        {"source":23,"target":21,"value":4},
        {"source":23,"target":22,"value":4},
        {"source":23,"target":12,"value":2},
        {"source":23,"target":11,"value":9},
        {"source":24,"target":23,"value":2},
        {"source":24,"target":11,"value":7},
        {"source":25,"target":24,"value":13},
        {"source":25,"target":23,"value":1},
        {"source":25,"target":11,"value":12},
        {"source":26,"target":24,"value":4},
        {"source":26,"target":11,"value":31},
        {"source":26,"target":16,"value":1},
        {"source":26,"target":25,"value":1},
        {"source":27,"target":11,"value":17},
        {"source":27,"target":23,"value":5},
        {"source":27,"target":25,"value":5},
        {"source":27,"target":24,"value":1},
        {"source":27,"target":26,"value":1}
        ];

    var links2 = [{"source":1,"target":0,"value":1},
        {"source":2,"target":0,"value":8},
        {"source":3,"target":0,"value":10},
        {"source":3,"target":2,"value":6},
        {"source":4,"target":0,"value":1},
        {"source":5,"target":0,"value":1},
        {"source":6,"target":0,"value":1},
        {"source":7,"target":0,"value":1},
        {"source":8,"target":0,"value":2},
        {"source":9,"target":0,"value":1},
        {"source":11,"target":10,"value":1},
        {"source":11,"target":3,"value":3},
        {"source":11,"target":2,"value":3},
        {"source":11,"target":0,"value":5},
        {"source":12,"target":11,"value":1},
        {"source":13,"target":11,"value":1},
        {"source":14,"target":11,"value":1},
        {"source":15,"target":11,"value":1},
        {"source":17,"target":16,"value":4},
        {"source":18,"target":16,"value":4},
        {"source":18,"target":17,"value":4},
        {"source":19,"target":16,"value":4},
        {"source":19,"target":17,"value":4},
        {"source":19,"target":18,"value":4},
        {"source":20,"target":16,"value":3},
        {"source":20,"target":17,"value":3},
        {"source":20,"target":18,"value":3},
        {"source":20,"target":19,"value":4},
        {"source":21,"target":16,"value":3},
        {"source":21,"target":17,"value":3},
        {"source":21,"target":18,"value":3},
        {"source":21,"target":19,"value":3},
        {"source":21,"target":20,"value":5},
        {"source":22,"target":16,"value":3},
        {"source":22,"target":17,"value":3},
        {"source":22,"target":18,"value":3},
        {"source":22,"target":19,"value":3},
        {"source":22,"target":20,"value":4},
        {"source":22,"target":21,"value":4},
        {"source":23,"target":16,"value":3},
        {"source":23,"target":17,"value":3},
        {"source":23,"target":18,"value":3},
        {"source":23,"target":19,"value":3},
        {"source":23,"target":20,"value":4},
        {"source":23,"target":21,"value":4},
        {"source":23,"target":22,"value":4},
        {"source":23,"target":12,"value":2},
        {"source":23,"target":11,"value":9},
        {"source":24,"target":23,"value":2},
        {"source":24,"target":11,"value":7},
        {"source":25,"target":24,"value":13},
        {"source":25,"target":23,"value":1},
        {"source":25,"target":11,"value":12},
        {"source":26,"target":24,"value":4},
        {"source":26,"target":11,"value":31},
        {"source":26,"target":16,"value":1},
        {"source":26,"target":25,"value":1},
        {"source":27,"target":11,"value":17},
        {"source":27,"target":23,"value":5},
        {"source":27,"target":25,"value":5},
        {"source":27,"target":24,"value":1},
        {"source":27,"target":26,"value":1},
        {"source":28,"target":11,"value":8},
        {"source":28,"target":27,"value":1},
        {"source":29,"target":23,"value":1},
        {"source":29,"target":27,"value":1},
        {"source":29,"target":11,"value":2},
        {"source":30,"target":23,"value":1},
        {"source":31,"target":30,"value":2},
        {"source":31,"target":11,"value":3},
        {"source":31,"target":23,"value":2},
        {"source":31,"target":27,"value":1},
        {"source":32,"target":11,"value":1},
        {"source":33,"target":11,"value":2},
        {"source":33,"target":27,"value":1},
        {"source":34,"target":11,"value":3},
        {"source":34,"target":29,"value":2},
        {"source":35,"target":11,"value":3},
        {"source":35,"target":34,"value":3},
        {"source":35,"target":29,"value":2},
        {"source":36,"target":34,"value":2},
        {"source":36,"target":35,"value":2},
        {"source":36,"target":11,"value":2},
        {"source":36,"target":29,"value":1},
        {"source":37,"target":34,"value":2},
        {"source":37,"target":35,"value":2},
        {"source":37,"target":36,"value":2},
        {"source":37,"target":11,"value":2},
        {"source":37,"target":29,"value":1},
        {"source":38,"target":34,"value":2},
        {"source":38,"target":35,"value":2},
        {"source":38,"target":36,"value":2},
        {"source":38,"target":37,"value":2},
        {"source":38,"target":11,"value":2},
        {"source":38,"target":29,"value":1},
        {"source":39,"target":25,"value":1},
        {"source":40,"target":25,"value":1},
        {"source":41,"target":24,"value":2},
        {"source":41,"target":25,"value":3},
        {"source":42,"target":41,"value":2},
        {"source":42,"target":25,"value":2},
        {"source":42,"target":24,"value":1},
        {"source":43,"target":11,"value":3},
        {"source":43,"target":26,"value":1},
        {"source":43,"target":27,"value":1},
        {"source":44,"target":28,"value":3},
        {"source":44,"target":11,"value":1},
        {"source":45,"target":28,"value":2},
        {"source":47,"target":46,"value":1},
        {"source":48,"target":47,"value":2},
        {"source":48,"target":25,"value":1},
        {"source":48,"target":27,"value":1},
        {"source":48,"target":11,"value":1},
        {"source":49,"target":26,"value":3},
        {"source":49,"target":11,"value":2},
        {"source":50,"target":49,"value":1},
        {"source":50,"target":24,"value":1},
        {"source":51,"target":49,"value":9},
        {"source":51,"target":26,"value":2},
        {"source":51,"target":11,"value":2},
        {"source":52,"target":51,"value":1},
        {"source":52,"target":39,"value":1},
        {"source":53,"target":51,"value":1},
        {"source":54,"target":51,"value":2},
        {"source":54,"target":49,"value":1},
        {"source":54,"target":26,"value":1},
        {"source":55,"target":51,"value":6},
        {"source":55,"target":49,"value":12},
        {"source":55,"target":39,"value":1},
        {"source":55,"target":54,"value":1},
        {"source":55,"target":26,"value":21},
        {"source":55,"target":11,"value":19},
        {"source":55,"target":16,"value":1},
        {"source":55,"target":25,"value":2},
        {"source":55,"target":41,"value":5},
        {"source":55,"target":48,"value":4},
        {"source":56,"target":49,"value":1},
        {"source":56,"target":55,"value":1},
        {"source":57,"target":55,"value":1},
        {"source":57,"target":41,"value":1},
        {"source":57,"target":48,"value":1},
        {"source":58,"target":55,"value":7},
        {"source":58,"target":48,"value":7},
        {"source":58,"target":27,"value":6},
        {"source":58,"target":57,"value":1},
        {"source":58,"target":11,"value":4},
        {"source":59,"target":58,"value":15},
        {"source":59,"target":55,"value":5},
        {"source":59,"target":48,"value":6},
        {"source":59,"target":57,"value":2},
    ];
    
    links.forEach(function(d) { d.index = nodes[d.source].name + "-" + nodes[d.target].name; });
    links2.forEach(function(d) { d.index = nodes2[d.source].name + "-" + nodes2[d.target].name; });
    var width = 500, height = 580;
    var mData = {mNodes:[], mEdges:[], indexList:[]};
    var mData2 = {mNodes:[], mEdges:[], indexList:[]};

    function getMData() {
        return {
            mNodes : [],
            mEdges : [],
            indexList : []
        }
    }

    var color = d3.scale.category20();
    var force = d3.layout.force()
                .nodes(nodes)
                .links(links)
                .charge(-200) 
                .linkDistance(70)
                .friction(0.8)
                .size([width, height])
                .on("tick", tick1);
    
    var force2 = d3.layout.force()
                .nodes(nodes2)
                .links(links2)
                .charge(-200) 
                .linkDistance(70)
                .friction(0.8)
                .size([width, height])
                .on("tick", tick2);

    var svg = d3.select("#gg1")
                .append("svg")
       	        .attr("width", width)
                .attr("height", height)
                .attr("id", "dd1");

    var svg2 = d3.select("#gg2").append("svg")
                .attr("width", width)
                .attr("height", height);

    var backDrop = d3.select("#dgs").append("svg")
                    .attr("width", width)
                    .attr("height", height);

    var backDrop2 = d3.select("#ggs").append("svg")
                    .attr("width", width)
                    .attr("height", height);

    var isSelected = false;
    var isDrag = false;
    var dataAdded = false;

    var vis = backDrop.append("g")
                .append("path")
                .attr("class", "hull");

    var vis2 = backDrop2.append("g")
                .append("path")
                .attr("class", "hull");

    var vinl = backDrop.append("g")
                .attr("id", "vinl");

    var vinEdge = vinl.append("g");
    var vinNode = vinl.append("g");

    var vinl2 = backDrop2.append("g")
                .attr("id", "vinl2");

    var vinEdge2 = vinl2.append("g");
    var vinNode2 = vinl2.append("g");


    var link = svg.append("g")
                .selectAll(".link") 
                .data(links)
                .enter().append("line")
                .attr("class", "link");

    function dragstart() {
        force.stop();
    }

    function dragstart2() {
        force2.stop();
    }

    function dragmove(d) {
        if (!isSelected) {
            d.px += d3.event.dx;
            d.py += d3.event.dy;
            d.x += d3.event.dx;
            d.y += d3.event.dy; 
            tick1();
        }
    }

    function dragmove2(d) {
        if (!isDrag) {
            d.px += d3.event.dx;
            d.py += d3.event.dy;
            d.x += d3.event.dx;
            d.y += d3.event.dy;
            tick2();
        }
        if (dataAdded) {
            clearBack2();
            dataAdded = false;
            svg2.attr("opacity", 1);
        }
    }

    function dragend(d) {
        if (!isSelected) {
            d.fixed = true;
            tick1();
            force.resume();
        }
    }

    function dragend2(d) {
        d.fixed = true;
        tick2();
        force2.resume();
    }

    function onClick(d) {
        if (!isSelected) {

        } else {
            selectNode(d);
            drawHull(mData);
        }
    }

    function selectNode(d) {
        if (mData.indexList.indexOf(d.index) != -1) {
            var i, len = mData.mNodes.length;
            if (len == 1) {
                handleBoxes("none");
                vis.attr("d", "");
                mData.mEdges = [];
            } else {
                var tempArray = [];
                mData.mEdges.forEach(function(g) {
                    if (g.source.index != d.index && g.target.index != d.index) {
                        tempArray.push(g);
                    }
                })
                mData.mEdges = tempArray;
            }
            for (i = 0; i < len; i += 1) {
                if (d.index == mData.mNodes[i].index) {
                    mData.mNodes.splice(i,1);
                    break;
                }
            }
            mData.indexList.splice(mData.indexList.indexOf(d.index),1);
        } else {
            if (mData.mNodes.length == 0) {
                handleBoxes("inline-block");
            } else {
                links.forEach(function(g) {
                    if (d.index == g.target.index) {
                        mData.indexList.forEach(function(e) {
                            if (g.source.index == e) {
                                mData.mEdges.push(g);
                            }
                        })
                    } else if (d.index == g.source.index) {
                        mData.indexList.forEach(function(e) {
                            if (g.target.index == e) {
                                mData.mEdges.push(g);
                            }
                        })
                    }
                })
            }
            mData.indexList.push(d.index);
            mData.mNodes.push(d);
        }
        dropUpdate(mData);
    }

    function dropUpdate(dropData) {
        var temp = vinNode.selectAll(".node")
                .data(dropData.mNodes, function(d) {return d.name;});
        temp.enter()
            .append("circle")
            .attr("r", 8)
            .attr("cx", function(d) { return d.x; })
            .attr("cy", function(d) { return d.y; })
            .attr("class", "node")
            .style("fill", function(d) {return color(d.group); });

        temp.exit().remove();

        var tempE = vinEdge.selectAll(".pLink")
                         .data(dropData.mEdges, function(d) {
                                return d.index;
                            });
        tempE.enter().append("line")
            .attr("x1", function(d) { return d.source.x })
            .attr("y1", function(d) { return d.source.y })
            .attr("x2", function(d) { return d.target.x })
            .attr("y2", function(d) { return d.target.y })
            .attr("class", "pLink");

        tempE.exit().remove();
    }

    function clearBack() {
        vinNode.selectAll(".node").remove();
        vinEdge.selectAll(".pLink").remove();
    }

    function clearBack2() {
        vinNode2.selectAll(".node").remove();
        vinEdge2.selectAll(".pLink").remove();
    }

    function dropUpdate2(dropData) {
        var temp = vinNode2.selectAll(".node")
                .data(dropData.mNodes, function(d) {return d.name;});
        temp.enter()
            .append("circle")
            .attr("r", 8)
            .attr("cx", function(d) { return d.x; })
            .attr("cy", function(d) { return d.y; })
            .attr("class", "node")
            .style("fill", function(d) {return color(d.group); });

        temp.exit().remove();

        var tempE = vinEdge2.selectAll(".pLink")
                         .data(dropData.mEdges, function(d) {
                            return d.index;
                        });
        tempE.enter().append("line")
            .attr("x1", function(d) { return d.source.x })
            .attr("y1", function(d) { return d.source.y })
            .attr("x2", function(d) { return d.target.x })
            .attr("y2", function(d) { return d.target.y })
            .attr("class", "pLink");

        tempE.exit().remove();
    }

    function edgeOnClick(d) {

        if (!isSelected) {

        } else {
            var i, len = mData.mEdges.length;
            var flag = true;
            for (i = 0; i < len; i += 1) {
                if (d.index == mData.mEdges[i].index) {
                    var index1 = 0, index2 = 0;
                    mData.mEdges.forEach(function(g) {
                        if (g.source.index == mData.mEdges[i].source.index || g.target.index == mData.mEdges[i].source.index) {
                            index1 += 1;
                        }
                        if (g.target.index == mData.mEdges[i].target.index || g.source.index == mData.mEdges[i].target.index) {
                            index2 += 1;
                        }
                    })
                    if (index1 > 1 && index2 > 1) {
                        mData.mEdges.splice(i, 1);
                    }
                    flag = false;
                    break;
                }
            }
            if (flag) {
                if (mData.indexList.indexOf(d.source.index)==0 && mData.indexList.indexOf(d.target.index) == 0) {
                    mData.mEdges.push(d);
                }
            }
            
            dropUpdate();
        }
    }

    var node_drag = d3.behavior.drag()
                    .on("dragstart", dragstart)
                    .on("drag", dragmove)
                    .on("dragend", dragend);
    
    var node_drag2 = d3.behavior.drag()
                        .on("dragstart", dragstart2)
                        .on("drag", dragmove2)
                        .on("dragend", dragend2);

    var node = svg.append("g")
                .selectAll(".node")
                .data(nodes)
                .enter().append("circle")
                .attr("r", 8)
                .attr("class", "node")
                .style("fill", function(d) {
                    return color(d.group);
                })
                .call(node_drag);               

    var link2 = svg2.append("g")
                .selectAll(".link") 
                   .data(links2)
                   .enter().append("line")
                   .attr("class", "link");

    var node2 = svg2.append("g").selectAll(".node")
                  .data(nodes2)
                  .enter().append("circle")
                  .attr("r", 8)
                  .attr("class", "node")
                  .style("fill", function(d) {
                    return color(d.group);
                  })
                  .call(node_drag2);


    function update() {

        var temp = node.selectAll(".node")
                .data(nodes, function(d) { return d.name; });

        temp.enter()
            .append("circle")
            .attr("r", 8)
            .attr("cx", function(d) { return d.x; })
            .attr("cy", function(d) { return d.y; })
            .attr("class", "node")
            .style("fill", function(d) {return color(d.group); })
            .call(node_drag);

        temp.exit().remove();

        var tempE = link.selectAll(".link")
                         .data(links, function(d) {
                                return d.index;
                            });
        tempE.enter().append("line")
            .attr("x1", function(d) { return d.source.x })
            .attr("y1", function(d) { return d.source.y })
            .attr("x2", function(d) { return d.target.x })
            .attr("y2", function(d) { return d.target.y })
            .attr("class", "link");

        tempE.exit().remove();
    }

    function update2() {

        var temp = node2.selectAll(".node")
                .data(nodes2, function(d) { return d.name; });

        temp.enter()
            .append("circle")
            .attr("r", 8)
            .attr("cx", function(d) { return d.x; })
            .attr("cy", function(d) { return d.y; })
            .attr("class", "node")
            .style("fill", function(d) {return color(d.group); })
            .call(node_drag2);

        temp.exit().remove();
        
        var tempE = link2.selectAll(".link")
                         .data(links2, function(d) {
                                return d.index;
                            });
        tempE.enter().insert("line", ".node")
            .attr("x1", function(d) { return d.source.x })
            .attr("y1", function(d) { return d.source.y })
            .attr("x2", function(d) { return d.target.x })
            .attr("y2", function(d) { return d.target.y })
            .attr("class", "link");

        tempE.exit().remove();
        force2.start();
    }


    function drawHull(dsOb, isTarget) {
        var ds = dsOb.mNodes;
        var len = ds.length;
        if (len == 0) {
            return "";
        }
        var tempList = [];
        var i;
        for (i = 0; i < len; i += 1) {
            tempList.push([ds[i].x, ds[i].y]);
        }
        if (len == 1) {
            tempList.push([tempList[0][0]+3, tempList[0][1]+3]);
            tempList.push([tempList[0][0]-3, tempList[0][1]-3]);
        } else if (len == 2) {
            tempList.push([tempList[1][0]-3, tempList[1][1]-3]);
        }
        if (isTarget) {
            vis2.datum(d3.geom.hull(tempList)).attr("d", function(d) {
                    return "M" + d.join("L") + "Z";
                });
        } else {
            vis.datum(d3.geom.hull(tempList)).attr("d", function(d) {
                    return "M" + d.join("L") + "Z";
                });
        }
    }


    var graphBorder = function(winWidth, winHeight) {
        var bd = 5;
        var bx = winWidth - bd;
        var by = winHeight - bd;
        return {
            testX : function(xp) {
                if (xp < bd) {
                    return bd;
                } else {
                    return xp > bx ? bx : xp;
                }
            },
            testY : function(yp) {
                if (yp < bd) {
                    return bd;
                } else {
                    return yp > by ? by : yp;
                }
            }
        }
    }(width, height);


    function tick1() {
        link.attr("x1", function(d) { return graphBorder.testX(d.source.x); })
            .attr("y1", function(d) { return graphBorder.testY(d.source.y); })
            .attr("x2", function(d) { return graphBorder.testX(d.target.x); })
            .attr("y2", function(d) { return graphBorder.testY(d.target.y); });

        node.attr("cx", function(d) { return graphBorder.testX(d.x); })
            .attr("cy", function(d) { return graphBorder.testY(d.y); });

        if (isSelected) {
            drawHull(mData);
        }
    }

    function tick2() {

        link2.attr("x1", function(d) { return graphBorder.testX(d.source.x); })
            .attr("y1", function(d) { return graphBorder.testY(d.source.y); })
            .attr("x2", function(d) { return graphBorder.testX(d.target.x); })
            .attr("y2", function(d) { return graphBorder.testY(d.target.y); });

        node2.attr("cx", function(d) { return graphBorder.testX(d.x); })
            .attr("cy", function(d) { return graphBorder.testY(d.y); });
        if (isSelected) {
            drawHull(mData2, true);
        }
    }


    var handleBoxes = function(method) {
        var cboxes = document.getElementsByClassName("cbox");
        var index, len = cboxes.length;
        for (index = 0; index < len; index += 1) {
            cboxes[index].style.display = method;
        }
        if (method == "none") {
            cboxes[0].firstElementChild.checked = false;
        }
    }


    function clearMData(mDataIn) {
        mDataIn.mNodes = [];
        mDataIn.indexList = [];
        mDataIn.mEdges = [];
    }
    
    document.getElementById("sc").onchange = function() {
        if (this.checked == true) {
            isSelected = true;
            force.stop();
            force2.stop();
            svg.attr("opacity", 0.6);
            var brush = svg.insert("g", "g")
                    .attr("class", "brush")
                    .call(d3.svg.brush()
                    .x(d3.scale.identity().domain([0, width]))
                    .y(d3.scale.identity().domain([0, height]))
                    .on("brushstart", function() {
                        
                    })
                    .on("brush", function() {
                        
                        var extent = d3.event.target.extent();
                        var dist1 = Math.abs(extent[1][1] - extent[0][1]);
                        var dist2 = Math.abs(extent[1][0] - extent[0][0]);
                        if (dist1 < 5 && dist2 < 5) {
                            return;
                        }
                        nodes.forEach(function(d) {
                            if (extent[0][0] <= d.x && d.x < extent[1][0] && extent[0][1] <= d.y && d.y < extent[1][1]) {
                                if (mData.indexList.indexOf(d.index) == -1) {
                                    selectNode(d);
                                }
                            } else {
                                if (mData.indexList.indexOf(d.index) != -1) {
                                    selectNode(d);
                                }
                            }
                        })
                    })
                    .on("brushend", function() {
                        drawHull(mData);
                        d3.event.target.clear();
                        d3.select(this).call(d3.event.target);
                    }));
            node.on("click", onClick);
            link.on("mouseover", null);
            // link.on("click", edgeOnClick);
            
        } else {
            isSelected = false;
            nodes.forEach(function(d) { d.selected = false; });
            vis.attr("d", "");
            vis2.attr("d", "");
            svg.select(".brush").remove();
            svg2.attr("opacity", 1);
            svg.attr("opacity", 1);
            node2.filter(function(d) { d.fixed = false; });
            clearBack();
            clearBack2();
            clearMData(mData);
            clearMData(mData2);
            handleBoxes("none");
            enableDrag(false);
            // link.on("click", null);
            node.on("click", null);
            // node.on("mouseout", null);
            // link.on("mouseout", null);
            
        }
    }

    var movePosi = {
        startPosi : [0, 0],
        endPosi : [0, 0],
        setStartPosi : function(posi) {
            movePosi.startPosi = posi;
        },
        setEndPosi : function(posi) {
            movePosi.endPosi = posi;
        },
        getChangeDist : function() {
            return [movePosi.endPosi[0]-movePosi.startPosi[0], movePosi.endPosi[1]-movePosi.startPosi[1]];
        }
    }

    var enableDrag = function(trigger) {
        var dragPart = document.getElementById("dgs");
        if (trigger == true) {
            clearBack2();
            vis2.attr("d", "");
            dragPart.style.zIndex = "9";
            svg.attr("opacity", 0.2);
            // document.getElementById("gg1").style.display = "none";
            dragPart.draggable = true;         
        } else {
            if (isSelected) {
                svg.attr("opacity", 0.6);
            }
            dragPart.style.zIndex = "-1";
            // document.getElementById("gg1").style.display = "block";
            dragPart.draggable = false;
        }
        if (!dragPart.ondragend) {
            dragPart.ondragend = function(ev) {
                // ev.preventDefault();
                document.getElementById("ggs").style.zIndex = "-1";
                isDrag = false;
                // enableDrag(false);
                // handleBoxes("none");
                // var rmd = document.getElementById("dgs");
                // rmd.parentNode.removeChild(rmd);
                // document.getElementById("gg1").draggable = true;
            }
        }
        if (!dragPart.ondragstart) {
            dragPart.ondragstart = function(ev){
                ev.dataTransfer.setData("text", getDragData(mData));
                document.getElementById("ggs").style.zIndex = "14";
                isDrag = true;
                clearBack2();
                vis2.attr("d", "");
                clearMData(mData2);
                svg2.attr("opacity", 1);
                var e = window.event;
                movePosi.setStartPosi([e.clientX, e.clientY]);
            }
        }
    }

    function getDragData(dropData) {
        var res = getMData();
        res.mNodes = dropData.mNodes;
        res.indexList = dropData.indexList;
        dropData.mEdges.forEach(function(d) {
            var tempObj = {};
            var tmp;
            for (tmp in d) {
                if (tmp == "target") {
                    tempObj.target = d.target.index;
                } else if (tmp == "source") {
                    tempObj.source = d.source.index;
                } else {
                    tempObj[tmp] = d[tmp];
                }
            }
            res.mEdges.push(tempObj);
        });
        return JSON.stringify(res);
    }

    function moveToOriginal(dropData) {
        var tempData = getMData();
        var tempData2 = getMData();
        node2.filter(function(g) {
            dropData.mNodes.forEach(function(d) {
                if (d.name == g.name) {
                    g.px = d.px;
                    g.x = d.x;
                    g.py = d.py;
                    g.y = d.y;
                    g.fixed = true;
                    tempData.indexList.push(g.index);
                    tempData.mNodes.push(g);
                    tempData2.mNodes.push(d);
                }
            })
        });
        links2.forEach(function(d) {
            dropData.mEdges.forEach(function(e) {
                if (d.index == e.index) {
                    tempData2.mEdges.push(e);
                }
            })
        });
        link2.transition().duration(600)
            .attr("x1", function(d) { return d.source.x; })
            .attr("y1", function(d) { return d.source.y; })
            .attr("x2", function(d) { return d.target.x; })
            .attr("y2", function(d) { return d.target.y; });

        node2.transition().duration(600)
            .attr("cx", function(d) { return d.x; })
            .attr("cy", function(d) { return d.y; });

        mData2 = tempData2;
        dropUpdate2(mData2);
        setTimeout(function() {
            drawHull(tempData, true);
        }, 600);
    }

    function mergeMethod(dropData) {
        console.log(dropData);
        console.log(nodes2);
        console.log(edges2);
        mData2 = getMData();
        var tempData = getMData();
        mData2.mNodes = dropData.mNodes;
        mData2.mEdges = dropData.mEdges;
        var indexIndice = dropData.mNodes.length;
        var indexCompareDict = {};
        node2.filter(function(g) {
            dropData.mNodes.forEach(function(d) {
                if (d.name == g.name) {
                    g.x = d.x;
                    g.y = d.y;
                    g.px = d.x;
                    g.py = d.y;
                    indexCompareDict[d.index] = g.index;
                    tempData.mNodes.push(g);
                } else {
                    indexCompareDict[d.index] = indexIndice;
                    d.index = indexIndice;
                    nodes2.push(d); 
                    tempData.mNodes.push(d);
                    indexIndice += 1;
                }
                mData2.indexList.push(d.index);
            })
        });
        var linksIndexList = links2.map(function(d) {
            return d.index;
        })

        dropData.mEdges.forEach(function(e) {
            if (linksIndexList.indexOf(e.index) == -1) {
                e.source = nodes2[indexCompareDict[e.source.index]];
                e.target = nodes2[indexCompareDict[e.target.index]];
                links2.push(e);
            }
        })
        update2();
        link2.transition().duration(600)
            .attr("x1", function(d) { return d.source.x; })
            .attr("y1", function(d) { return d.source.y; })
            .attr("x2", function(d) { return d.target.x; })
            .attr("y2", function(d) { return d.target.y; });

        node2.transition().duration(600)
            .attr("cx", function(d) { return d.x; })
            .attr("cy", function(d) { return d.y; });

        setTimeout(function(){
            drawHull(tempData, true);
        }, 600); 
    }


    function highLightMethod(dropData) {
        var tempData = getMData();
        var tempData2 = getMData();
        var dist = movePosi.getChangeDist();
        node2.filter(function(g) {
            dropData.mNodes.forEach(function(d) {
                if (d.name == g.name) {
                    d.x = g.x;
                    d.y = g.y;
                    d.px = g.x;
                    d.py = g.y; 
                    g.fixed = true;
                    tempData2.mNodes.push(g);
                    tempData.mNodes.push(d);
                }
            })
        });
        links2.forEach(function(d) {
            dropData.mEdges.forEach(function(e) {
                if (d.index == e.index) {
                    tempData.mEdges.push(e);
                }
            })
        })
        vis2.attr("d", "");
        mData2 = tempData;
        dropUpdate2(mData2);
        
        vinNode2.selectAll(".node").transition().duration(600)
            .attr("cx", function(d) { return d.x; })
            .attr("cy", function(d) { return d.y; });

        vinEdge2.selectAll(".pLink").transition().duration(600)
            .attr("x1", function(d) { return d.source.x; })
            .attr("y1", function(d) { return d.source.y; })
            .attr("x2", function(d) { return d.target.x; })
            .attr("y2", function(d) { return d.target.y; });
        setTimeout(function() {
            drawHull(tempData2, true);
        }, 500);
    }

    function getDropInfo(dropData) {

        drawHull(dropData, true);
        dropUpdate2(dropData);

        var chos = document.getElementsByClassName("dty");
        var lenChos = chos.length, choice = "r1";
        for (var i = 0; i < lenChos; i += 1) {
            if (chos[i].checked == true) {
                choice = chos[i].id;
                break;
            }
        }
        setTimeout(function() {
            if (choice == "r1") {
                moveToOriginal(dropData);
            } else if (choice == "r2") {
                highLightMethod(dropData);
            } else {
                mergeMethod(dropData);
            }
        }, 200);
    }

    function getDropData(strData) {
        mData2 = JSON.parse(strData);
        var e = window.event;
        var tempCompareDict = {};
        movePosi.setEndPosi([e.clientX, e.clientY]);
        var dist = movePosi.getChangeDist();
        mData2.mNodes.forEach(function(d, i) {
            d.x += (dist[0] - 500);
            d.y += dist[1];
            d.px = d.x;
            d.py = d.y;
            tempCompareDict[d.index] = i;
        });
        mData2.mEdges.forEach(function(d, i, l) {
            l[i].source = mData2.mNodes[tempCompareDict[d.source]];
            l[i].target = mData2.mNodes[tempCompareDict[d.target]];
        });
    }

    var dropTarget = function() {
        var field = document.getElementById("ggs");
        if (!field.ondragover) {
            field.ondragover = function(ev) {
                ev.preventDefault();
                // console.log("over");
            }
        }
        if (!field.ondragenter) {
            field.ondragenter = function(ev) {
                ev.preventDefault();
                field.className += " dropTarget";
                svg2.attr("opacity", 0.5);
            }
        }
        if (!field.ondragleave) {
            field.ondragleave = function(ev) {
                field.className = "dg";
                // ev.preventDefault();
                console.log("leave");
            }
        }
        if (!field.ondrop) {
            field.ondrop = function(ev) {
                // ev.preventDefault();
                var transferData = ev.dataTransfer.getData("text");
                //getJson(transferData);
                getDropData(transferData);
                node2.filter(function(d) { d.fixed = false; });
                
                dataAdded = true;
                
                enableDrag(false);
                document.getElementById("check").checked = false;
                field.className = "dg";
                getDropInfo(mData2);
                // force2.resume();
            }
        }
    }
    dropTarget();

    document.getElementById("check").onchange = function() {
        enableDrag(this.checked);
    }

    
})(); 