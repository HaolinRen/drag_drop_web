(function() {
    var nodes = [1,2,3,4,5,6];
    var links = [{"source":1, "target":0},
    {"source":4, "target":1},{"source":2, "target":4},{"source":4, "target":5},
    {"source":4, "target":3},{"source":1, "target":2},{"source":5, "target":0}]
    var width = 400, height = 600;
    var color = d3.scale.category20();
    var force = d3.layout.force()
                .charge(-120) 
                .linkDistance(30)
                .size([width, height]);
    var svg = d3.select("#g1").append("svg")
       	        .attr("width", width)
                .attr("height", height);
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
})(); 