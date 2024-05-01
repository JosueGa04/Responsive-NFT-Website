var data_V1 = [{
    "Program": "Text",
    "Percentage": 50,
    "Description": "These AI models, such as GPT (Generative Pre-trained Transformer), utilize vast amounts of data to understand and replicate human language patterns, enabling them to produce coherent and contextually relevant text across various domains. From generating creative stories and poetry to assisting in customer service interactions and writing code snippets, AI text generation has become ubiquitous.",
    "Elements": ["ChatGPT", "Notion.AI", "Llama", "GPT-3", "GPT-4", "GPT-5"]
}, {
    "Program": "Image",
    "Percentage": 50,
    "Description": "CSS stands for Cascading Style Sheets. CSS describes how HTML elements are to be displayed on screen, paper, or in other media. CSS saves a lot of work. It can control the layout of multiple web pages all at once.",
    "Elements": ["Photoshop", "GIMP", "Illustrator"]
}, {
    "Program": "Data Simulation",
    "Percentage": 50,
    "Description": "Python is a computer programming language often used to build websites and software, automate tasks, and conduct data analysis.",
    "Elements": ["Python"]
}, {
    "Program": "Code Generator Review",
    "Percentage": 50,
    "Description": "SQL (Structured Query Language) is a standardized programming language that's used to manage relational databases and perform various operations on the data in them.",
    "Elements": ["SQL"]
}, {
    "Program": "Music & Sound",
    "Percentage": 50,
    "Description": "Bla bla bla",
    "Elements": ["Ableton Live", "FL Studio", "Audacity"]
}];

var elementData = {
    "ChatGPT": {
        "IdTool": 1001,
        "Description": "ChatGPT es un modelo de lenguaje AI desarrollado por OpenAI.",
        "Image": "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
        "Website": "https://chat.openai.com/",
        "Video": "https://www.youtube.com/watch?v=o5MutYFWsM8",
    },
    "Notion.AI": {
        "Description": "Notion.AI es una herramienta de productividad impulsada por AI.",
        "Image": "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png",
        "Website": "https://chat.openai.com/",
        "Video": "https://www.youtube.com/watch?v=o5MutYFWsM8",
    },
    "Photoshop": {
        "Description": "Photoshop es un software de edición de imágenes desarrollado por Adobe.",
        "Image": "https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg",
        "Website": "https://chat.openai.com/",
        "Video": "https://www.youtube.com/watch?v=o5MutYFWsM8",
    },
    "GIMP": {
        "Description": "GIMP es un editor de imágenes de código abierto.",
        "Image": "https://upload.wikimedia.org/wikipedia/commons/0/0d/GIMP_icon.svg",
        "Website": "https://chat.openai.com/",
        "Video": "https://www.youtube.com/watch?v=o5MutYFWsM8",
    },
    "Illustrator": {
        "Description": "Illustrator es un software de diseño gráfico desarrollado por Adobe.",
        "Image": "https://upload.wikimedia.org/wikipedia/commons/2/2d/Illustrator_CC_icon.png",
        "Website": "https://chat.openai.com/",
        "Video": "https://www.youtube.com/watch?v=o5MutYFWsM8",
    },
    "Python": {
        "Description": "Python es un lenguaje de programación de alto nivel.",
        "Image": "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
        "Website": "https://chat.openai.com/",
        "Video": "https://www.youtube.com/watch?v=o5MutYFWsM8",
    },
    "Llama": {
        "Description": "Llama es un modelo de lenguaje AI desarrollado por OpenAI.",
        "Image": "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
        "Website": "https://chat.openai.com/",
        "Video": "https://www.youtube.com/watch?v=o5MutYFWsM8",
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

var labelArc = d3.svg.arc()
    .outerRadius(radius - 40)
    .innerRadius(150);

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
    $('#segmentTitle').replaceWith('<h1 id="segmentTitle">' + d.data.Program + '</h1>');
    $('#segmentText').replaceWith('<p id="segmentText">' + d.data.Description + '</p>');
    
    // Crea un elemento de texto para cada elemento en la lista
    var elementsHtml = d.data.Elements.map(function(element) {
        return '<span class="element element-button" style="cursor: pointer;">' + element + '</span>';
    }).join(' ');
    $('#segmentElements').replaceWith('<p id="segmentElements">' + elementsHtml + '</p>');
    
    $('.text-container').fadeIn(400);
    
    // Agrega la clase 'hidden' a elementTitle, elementDescription, elementImage, elementWebsite y elementVideo
    $('#elementTitle').addClass('hidden');
    $('#elementDescription').addClass('hidden');
    $('#elementImage').addClass('hidden');
    $('#elementWebsite').addClass('hidden');
    $('#elementVideo').addClass('hidden');
    $('.card').addClass('hidden');

    // Agrega un controlador de eventos de clic a cada elemento
    $('.element').on('click', function() {
    // Muestra información específica sobre el elemento cuando se hace clic en él
        var element = $(this).text();
        var elementInfo = elementData[element];
        $('#elementTitle').replaceWith('<h2 id="elementTitle">' + element + '</h2>');
        $('#elementDescription').replaceWith('<p id="elementDescription">' + elementInfo.Description + '</p>');
        $('#elementImage').replaceWith('<img id="elementImage" src="' + elementInfo.Image + '" alt="' + element + '">').removeClass('hidden');
        $('#elementWebsite').replaceWith('<a id="elementWebsite" href="' + elementInfo.Website + '">Sitio web</a>').removeClass('hidden');
        $('.card').removeClass('hidden'); // Muestra el div .card
});
});


document.querySelector('style').textContent += '@media(max-width:767px) {#pieChart { transform: rotate(90deg); transform-origin: 50% 50%; transition: 1s; max-width: 50%; } .text-container { width: 100%; min-height: 0; }} @media(min-width:768px) {#pieChart { transition: 1s;}}'