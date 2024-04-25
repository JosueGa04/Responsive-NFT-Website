var data_V1 = [{
    "Program": "Text",
    "Percentage": 65,
    "Description": "JavaScript is a text-based programming language used both on the client-side and server-side that allows you to make web pages interactive.",
    "Elements": ["ChatGPT", "Notion.AI", "Llama"]
}, {
    "Program": "Image",
    "Percentage": 55,
    "Description": "CSS stands for Cascading Style Sheets. CSS describes how HTML elements are to be displayed on screen, paper, or in other media. CSS saves a lot of work. It can control the layout of multiple web pages all at once.",
    "Elements": ["Photoshop", "GIMP", "Illustrator"]
}, {
    "Program": "Data Simulation",
    "Percentage": 48,
    "Description": "Python is a computer programming language often used to build websites and software, automate tasks, and conduct data analysis."
}, {
    "Program": "Code Generator Review",
    "Percentage": 47,
    "Description": "SQL (Structured Query Language) is a standardized programming language that's used to manage relational databases and perform various operations on the data in them."
}, {
    "Program": "Music & Sound",
    "Percentage": 33,
    "Description": "Bla bla bla"
}];

var elementData = {
    "ChatGPT": {
        "Description": "ChatGPT es un modelo de lenguaje AI desarrollado por OpenAI.",
        // Más propiedades aquí...
    },
    "Notion.AI": {
        "Description": "Notion.AI es una herramienta de productividad impulsada por AI.",
        // Más propiedades aquí...
    },
    "Photoshop": {
        "Description": "Photoshop es un software de edición de imágenes desarrollado por Adobe.",
        // Más propiedades aquí...
    },
};

var width = parseInt(d3.select('#pieChart').style('width'), 10);
var height = width;
var radius = (Math.min(width, height) - 15) / 2;

var type = function getObject(obj) {
    types = [];
    for (var i = 0; i < obj.length; i++) {
        types.push(obj[i].Program);
    }
    return types
};
var arcOver = d3.svg.arc()
    .outerRadius(radius + 10)
    .innerRadius(150);

var color = d3.scale.ordinal()
    .domain(type(data_V1))
    .range(["#8A76A6", "#54B5BF", "#8EA65B", "#F27B35", "#F2C14E"]);

/*var color = d3.scale.category20();
color.domain(type(data))*/

var arc = d3.svg.arc()
    .outerRadius(radius - 10)
    .innerRadius(150);

var pie = d3.layout.pie()
    .sort(null)
    .value(function(d) {
        return +d.Percentage;
    });

change = function(d, i) {
    var angle = 90 - ((d.startAngle * (180 / Math.PI)) + ((d.endAngle - d.startAngle) * (180 / Math.PI) / 2))
    svg.transition()
    .duration(1000)
    .attr("transform", "translate(" + radius + "," + height / 2 + ") rotate(" + angle + ")")
    d3.selectAll("path")
    .transition()
    .attr("d", arc)
    d3.select(i)
    .transition()
    .duration(1000)
    .attr("d", arcOver)
};

var svg = d3.select("#pieChart").append("svg")
    .attr("width", '100%')
    .attr("height", '100%')
    .attr('viewBox', '0 0 ' + Math.min(width, height) + ' ' + Math.min(width, height))
    .attr('preserveAspectRatio', 'xMinYMin')
    .append("g")
    .attr("transform", "translate(" + radius + "," + height / 2 + ")");

// Crea los segmentos de la dona
var g = svg.selectAll("path")
    .data(pie(data_V1))
    .enter().append("path")
    .style("fill", function(d) {
        return color(d.data.Program);
    })
    .attr("d", arc)
    .style("fill", function(d) {
        return color(d.data.Program);
    })
    .on("click", function(d) {
        change(d, this);
        $('.text-container').hide();
        $('#segmentTitle').replaceWith('<h1 id="segmentTitle">' + d.data.Program + ": " + d.data.Percentage + '%</h1>');
        $('#segmentText').replaceWith('<p id="segmentText">' + d.data.Description + '</p>');
    
        // Crea un elemento de texto para cada elemento en la lista
        var elementsHtml = d.data.Elements.map(function(element) {
            return '<span class="element" style="cursor: pointer;">' + element + '</span>';
        }).join(', ');
        $('#segmentElements').replaceWith('<p id="segmentElements">Top AIs: ' + elementsHtml + '</p>');
    
        $('.text-container').fadeIn(400);
    
        // Agrega un controlador de eventos de clic a cada elemento
        $('.element').on('click', function() {
            // Muestra información específica sobre el elemento cuando se hace clic en él
            var element = $(this).text();
            var elementInfo = elementData[element];
            $('#elementTitle').replaceWith('<h2 id="elementTitle">' + element + '</h2>');
            $('#elementDescription').replaceWith('<p id="elementDescription">' + elementInfo.Description + '</p>');
        });
    });


document.querySelector('style').textContent += '@media(max-width:767px) {#pieChart { transform: rotate(90deg); transform-origin: 50% 50%; transition: 1s; max-width: 50%; } .text-container { width: 100%; min-height: 0; }} @media(min-width:768px) {#pieChart { transition: 1s;}}'