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
        {"source":27,"target":26,"value":1}];

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
    
    var width = 500, height = 580;
    var mNodes = [];
    var color = d3.scale.category20();
    var force = d3.layout.force()
                .charge(-200) 
                .linkDistance(50)
                .size([width, height]);
    var force2 = d3.layout.force()
                .charge(-200) 
                .linkDistance(50)
                .size([width, height]);
    var svg = d3.select("#gg1")
                .append("svg")
       	        .attr("width", width)
                .attr("height", height)
                .attr("id", "dd1");
    var svg2 = d3.select("#gg2").append("svg")
                .attr("width", width)
                .attr("height", height);

    var isSelected = false;

    force.nodes(nodes)
         .links(links)   
	     .start();

    force2.nodes(nodes2)
        .links(links2)
        .start();

    var vis = svg.append("g")
                .append("path")
                .attr("class", "hull");

    var link = svg.append("g")
                .selectAll(".link") 
                .data(links)
                .enter().append("line")
                .attr("class", "link");

    function dragstart() {
        force.stop();
    }

    function dragmove(d, i) {
        if (!isSelected) {
            d.px += d3.event.dx;
            d.py += d3.event.dy;
            d.x += d3.event.dx;
            d.y += d3.event.dy; 
            tick1();
        }
    }

    function dragend(d, i) {
        if (!isSelected) {
            d.fixed = true;
            tick1();
            force.resume();
        }
    }

    function onClick(d) {
        if (!isSelected) {
            mNodes = [[0,0]];
            drawHull(mNodes);
        } else {
            mNodes.push([d.x, d.y]);
            drawHull(mNodes);
        }

    }

    var node_drag = d3.behavior.drag()
                    .on("dragstart", dragstart)
                    .on("drag", dragmove)
                    .on("dragend", dragend);
    
    var node = svg.append("g")
                .selectAll(".node")
                .data(nodes)
                .enter().append("circle")
                .attr("r", 8)
                .attr("class", "node")
                .style("fill", function(d) {
                    return color(d.group);
                })
                .call(node_drag)
                .on("click", onClick);                 

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
                  .call(node_drag);

    force.on("tick", tick1);
    force2.on("tick", tick2);

    function drawHull(ds) {
        console.log(ds);
        vis.datum(d3.geom.hull(ds)).attr("d", function(d) {
            return "M" + d.join("L") + "Z";});
    }

    function tick1() {
        link.attr("x1", function(d) { return d.source.x > width ? width : d.source.x; })
            .attr("y1", function(d) { return d.source.y > height ? height : d.source.y; })
            .attr("x2", function(d) { return d.target.x > width ? width : d.target.x;; })
            .attr("y2", function(d) { return d.target.y > height ? height : d.target.y; });

        node.attr("cx", function(d) { return d.x > width ? width : d.x; })
            .attr("cy", function(d) { return d.y > height ? height : d.y; });

        // mNodes = nodes.map(function(i, d) {
            // return [i.x, i.y]
        // })
        // mNodes = [[nodes[1].x, nodes[1].y],[nodes[1].x-3,nodes[1].y-3], [nodes[1].x+3,nodes[1].y]+3];
        drawHull(mNodes);
    }

    function tick2() {

        link2.attr("x1", function(d) { return d.source.x; })
            .attr("y1", function(d) { return d.source.y; })
            .attr("x2", function(d) { return d.target.x; })
            .attr("y2", function(d) { return d.target.y; });

        node2.attr("cx", function(d) { return d.x; })
            .attr("cy", function(d) { return d.y; });
    }

    // document.getElementById("dgs").draggable = true;

    // document.getElementById("dgs").ondragstart = function(ev) {
    //     ev.dataTransfer.setData("text", "<svg id='es'></svg>");
    // }
    // document.getElementById("dgs").ondragend = function(ev) {
    //     // this.draggable = false;
    //     console.log("drag end");
    // }
    
    // document.getElementById("g2").ondragover = function(ev) {
    //     ev.preventDefault();
          
    // }
    // document.getElementById("g2").ondrop = function(ev) {
    //     ev.preventDefault();
    //     var data = ev.dataTransfer.getData("text");
    //     console.log(data);
    //     // ev.target.appendChild(data);
    // }

    
    document.getElementById("sc").onchange = function() {
        var handleBoxes = function(method) {
            var cboxes = document.getElementsByClassName("cbox");
            var index, len = cboxes.length;
            for (index = 0; index < len; index += 1) {
                cboxes[index].style.display = method;
            }
        }
        if (this.checked == true) {
            handleBoxes("inline-block");
            isSelected = true;
            
            node.on("mouseover", function(g) {
                force.stop();
                // node.
                if (g.isCovered) {
                    return;
                }
                var x = g.x;
                var y = g.y;
                
                g.isCovered = true;



            });
            link.on("mouseover", function(g) {
                var x1 = g.source.x, y1 = g.source.y, y2 = g.target.y, x2 = g.target.x;
                

            });
            node.on("mouseout", function(g) {
                g.isCovered = false;
            });
            link.on("mouseout", function() {
            })
        } else {
            isSelected = false;
            handleBoxes("none");
            enableDrag(false);
            link.on("mouseover", null);
            node.on("mouseover", null);
            node.on("mouseout", null);
            link.on("mouseout", null);
            
            document.getElementById("check").checked = false;
        }
    }
    var enableDrag = function(trigger) {
        var dragPart = document.getElementById("dgs");
        if (!dragPart) {
            return 0;
        }
        if (trigger == true) {
            dragPart.draggable = true;         
        } else {
            dragPart.draggable = false;
        }
    }
    document.getElementById("check").onchange = function() {
        enableDrag(this.checked);
    }
    document.getElementById("gg1").ondragend = function() {
        var rmd = document.getElementById("dgs");
        rmd.parentNode.removeChild(rmd);
        document.getElementById("gg1").draggable = true;
    }
    document.getElementById("gg1").ondragstart = function() {
        // document.getElementById("gg1").draggable = false;
        
        // var dgs = document.getElementById("dgs");
        // if (this.checked == true) {
        //     // dgs.style.display = "block";
            
        // } else {
        //     dgs.style.display = "none";
        // }

    }
})(); 