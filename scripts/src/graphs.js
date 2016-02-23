var MDD = function(nodes, edges, {width, height}) {
	/*
	Control pane
	select button
	drag button
	drop type radio
	*/
	//data nodes edges
	//parametre width height
	this.width = 500;
	var bd = 5;
	var bdx = width - bd;
	var bdy = height - bd;
	this.height = 580;
	this.color = d3.scale.category20();
	this.force = d3.layout.force()
					.nodes(nodes)
					.links(edges)
					.charget(-200)
					.linkDistance(70)
					.friction(0.8)
					.size([this.width, this.height])
					.on("tick", function() {

					});
	this.svg = d3.select("graphDiv").append("svg")
				.attr("width", this.width)
				.attr("height", this.height)
				.attr("id", "idYouGive");

	this.backDrop = d3.select("backGraph").append("svg")	
						.attr("width", this.width)
						.attr("height", this.height);

	var vis = backDrop.append("g")
						.append("path")
						.attr("class", "hull");

 	var visHull = backDrop.append("g")
 							.attr("id", "vinl");//it's better to use class

 	var visEdge = backDrop.append("g").selectAll(".pLink");//add select all edges

 	var visNode = backDrop.append("g").selectAll(".node");

 	var node_drag = d3.behavior.drag()
 						.on("dragstart", function() {

 						})
 						.on("drag", function() {

 						})
 						.on("dragend", function() {

 						});

 	var link = svg.append("g").selectAll(".link");
 	var node = svg.append("g").select(".node");


	function onClick(d) {
		if (!this.isSelected) {

		} else {

		}
	};

	function dropUpdate(dropData) {
        visNode = visNode.data(dropData.mNodes, function(d) {return d.name;});
        
        visNode.enter()
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
 	function selectNode(d) {
	    if (mData.indexList.indexOf(d.index) != -1) {
	        var i, len = this.mData.mNodes.length;
	        if (len == 1) {
	            this.handleBoxes("none");
	            this.mData.mEdges = [];
	        } else {
	            var tempArray = [];
	            this.mData.mEdges.forEach(function(g) {
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
	};

	this.clearBack = function() {
		visNode.remove();
		visEdge.remove();
	};

	this.update() {
		node = node.data(nodes, function(d) { return d.name; });

        node.enter()
            .append("circle")
            .attr("r", 8)
            .attr("cx", function(d) { return d.x; })
            .attr("cy", function(d) { return d.y; })
            .attr("class", "node")
            .style("fill", function(d) {return color(d.group); })
            .call(node_drag);

        node.exit().remove();

        link = link.data(links, function(d) {
                        return d.index;
                    });
        link.enter().insert("line", ".node")
            .attr("x1", function(d) { return d.source.x })
            .attr("y1", function(d) { return d.source.y })
            .attr("x2", function(d) { return d.target.x })
            .attr("y2", function(d) { return d.target.y })
            .attr("class", "link");

        link.exit().remove();
	};

	function drawHull(mDataIn) {
		var ds = mDataIn.mNodes;
        var len = ds.length;
        if (len == 0) {
        	vis.attr("d", "");
            return 0;
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
        vis.datum(d3.geom.hull(tempList)).attr("d", function(d) {
            return "M" + d.join("L") + "Z";
        });
	};

	function testX(xp) {
		if (xp < bd) {
			return bd;
		} else {
			return xp > bdx ? bdx : xp;
		}
	};

	function testY(yp) {
		if (yp < bd) {
			return bd;
		} else {
			return yp > bdy ? bdy : yp;
		}
	};

	function tick() {
		link.attr("x1", function(d) { return testX(d.source.x); })
            .attr("y1", function(d) { return testY(d.source.y); })
            .attr("x2", function(d) { return testX(d.target.x); })
            .attr("y2", function(d) { return testY(d.target.y); });

        node.attr("cx", function(d) { return testX(d.x); })
            .attr("cy", function(d) { return testY(d.y); });
	};

	this.clearMData(mDataIn) {
		mDataIn = this.getMData();
	};
	

}

MDD.prototype.init = function() {
	//create control pane
	//create back div
	//create graph div
};

MDD.prototype.getMData = function() {
	return {
		mNodes : [],
		mEdges : [],
		indexList : []
	}
};





