(function() {
    var nodes = [{},{},{},{},{},{}];
    var links = [{"source":1, "target":0},
    {"source":4, "target":1},{"source":2, "target":4},{"source":4, "target":5},
    {"source":4, "target":3},{"source":1, "target":2},{"source":5, "target":0}]
    
    var width = 400, height = 600;
    var color = d3.scale.category20();
    var force = d3.layout.force()
                .charge(-120) 
                .linkDistance(30)
                .size([width, height]);
    var svg = d3.select("#g1")
                .attr("draggable", true).append("svg")
       	        .attr("width", width)
                .attr("height", height)
                .attr("id", "dd1");
    var svg2 = d3.select("#g2").append("svg")
                .attr("width", width)
                .attr("height", height);
    force.nodes(nodes)
         .links(links)   
	     .start();
    var link = svg.selectAll(".link") 
                   .data(links)
                   .enter().append("line")
                   .attr("class", "link");
    var node = svg.selectAll(".node")
                  .data(nodes)
                  .enter().append("circle")
                  .attr("r", 5)
                  .call(force.drag);                 

    var link2 = svg2.selectAll(".link") 
                   .data(links)
                   .enter().append("line")
                   .attr("class", "link")
                   .on("click", function() {

                  });
    var node2 = svg2.selectAll(".node")
                  .data(nodes)
                  .enter().append("circle")
                  .attr("r", 5)
                  .on("click", function() {
                   var   that = this;
                   document.getElementById("dd1").cloneNode(that);
                  })
                  .call(force.drag);
    force.on("tick", function() {
    link.attr("x1", function(d) { return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; });

    node.attr("cx", function(d) { return d.x; })
        .attr("cy", function(d) { return d.y; });
        
    link2.attr("x1", function(d) { return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; });

    node2.attr("cx", function(d) { return d.x; })
        .attr("cy", function(d) { return d.y; });
  });
    document.getElementById("g1").ondragstart = function(ev) {
        ev.dataTransfer.setData("text", "<svg id='es'></svg>");
    }
    document.getElementById("g1").ondragend = function(ev) {
        // this.draggable = false;
        console.log("drag end");
    }
    
    document.getElementById("g2").ondragover = function(ev) {
        ev.preventDefault();
          
    }
    document.getElementById("g2").ondrop = function(ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        console.log(data);
        // ev.target.appendChild(data);
    }
})(); 