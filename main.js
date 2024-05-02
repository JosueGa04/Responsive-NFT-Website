var data_V1 = [{
    "Program": "Text",
    "Percentage": 50,
    "Description": "These AI models, such as GPT (Generative Pre-trained Transformer), utilize vast amounts of data to understand and replicate human language patterns, enabling them to produce coherent and contextually relevant text across various domains. From generating creative stories and poetry to assisting in customer service interactions and writing code snippets, AI text generation has become ubiquitous.",
    "Elements": ["ChatGPT", "Notion.AI", "Llama", "GPT-3", "GPT-4", "GPT-5"]
}, {
    "Program": "Image",
    "Percentage": 50,
    "Description": "AI-driven image generation has reshaped the visual landscape, offering the ability to create realistic and diverse images across a spectrum of styles and subjects. Utilizing deep learning techniques, these systems analyze vast datasets to understand and replicate visual patterns, resulting in striking and sometimes surreal imagery. While ethical considerations and potential biases require careful navigation, the potential for AI-generated images to inspire creativity, streamline design processes, and even assist in scientific exploration is immense, heralding a new era of visual expression and innovation.",
    "Elements": ["Photoshop", "GIMP", "Illustrator"]
}, {
    "Program": "Data Simulation",
    "Percentage": 50,
    "Description": " AI-driven data simulation has emerged as a powerful tool for generating synthetic datasets that mimic real-world scenarios with remarkable accuracy. Leveraging machine learning algorithms, these simulations can replicate complex systems and behaviors, enabling researchers and practitioners to explore hypothetical scenarios, test algorithms, and train AI models in controlled environments. By generating diverse and representative datasets, AI data simulation not only accelerates research and development but also addresses privacy concerns associated with real data",
    "Elements": ["Python"]
}, {
    "Program": "Code Generator Review",
    "Percentage": 50,
    "Description": "The AI-driven code generator represents a groundbreaking advancement in software development, offering developers a powerful tool to streamline coding processes and boost productivity. By leveraging deep learning algorithms, this innovative technology can swiftly generate high-quality code snippets tailored to specific tasks and programming languages. Its intuitive interface and user-friendly design make it accessible to developers of all skill levels, enabling rapid prototyping and iteration. Additionally, the code generator's ability to learn from vast repositories of code ensures that it produces efficient and reliable solutions, saving developers valuable time and effort.",
    "Elements": ["SQL"]
}, {
    "Program": "Music & Sound",
    "Percentage": 50,
    "Description": "AI-driven music and sound generation have revolutionized the creative process, offering musicians, composers, and sound designers innovative tools to explore new sonic landscapes. By leveraging machine learning algorithms, these systems can analyze vast musical datasets and understand intricate patterns, resulting in the creation of captivating melodies, harmonies, and rhythms. The ability to generate music in various styles and genres empowers artists to experiment and push the boundaries of their creativity, while also providing inspiration for new compositions. Moreover, AI-driven sound generation can produce immersive audio experiences for various applications, from video games and virtual reality to film and advertising.",
    "Elements": ["Ableton Live", "FL Studio", "Audacity"]
}, {
    "Program": "Video",
    "Percentage": 50,
    "Description": " AI-driven video generation has unlocked unprecedented possibilities for visual storytelling, offering creators innovative tools to bring their ideas to life. By harnessing deep learning algorithms, these systems can analyze vast repositories of video content to understand visual patterns and styles, enabling the generation of compelling and dynamic video sequences. Whether it's generating realistic animations, enhancing video quality, or automating editing tasks, AI-driven video generation streamlines the production process and empowers filmmakers, content creators, and marketers to realize their vision more efficiently. Moreover, AI-generated video content can be customized to suit specific preferences and target audiences, enhancing engagement and driving viewer interaction.",
    "Elements": ["Premiere Pro", "Final Cut Pro", "DaVinci Resolve"]
}, {
    "Program": "Game & Virtual Reality",
    "Percentage": 50,
    "Description": "AI-driven game and virtual reality (VR) experiences have propelled interactive entertainment to new heights, offering immersive and dynamic worlds that captivate players like never before. By leveraging advanced algorithms, these systems can generate lifelike environments, intelligent non-player characters (NPCs), and engaging gameplay mechanics, enhancing the overall gaming experience. AI-driven game development streamlines the design process, enabling developers to create complex worlds and scenarios more efficiently while maintaining high levels of realism and interactivity. Additionally, AI-powered NPCs can adapt to player actions, providing challenging and unpredictable gameplay experiences that keep players engaged. In the realm of virtual reality, AI algorithms enhance immersion by generating realistic environments, simulating natural interactions, and even personalizing experiences based on user preferences.",
    "Elements": ["Unity", "Unreal Engine", "Blender"]
}, {
    "Program": "Vector Database",
    "Percentage": 50,
    "Description": "AI-driven vector databases have revolutionized data storage and retrieval, offering a highly efficient and scalable solution for organizing and accessing vast amounts of vector-based information. By utilizing advanced machine learning algorithms, these databases can efficiently index and search through high-dimensional vector representations, enabling rapid retrieval of relevant data points. This technology is particularly valuable in applications such as image recognition, natural language processing, and recommendation systems, where data is often represented as vectors in high-dimensional spaces. AI-driven vector databases empower researchers, engineers, and data scientists to perform complex analyses and extract valuable insights from large datasets with unprecedented speed and accuracy.",
    "Elements": ["MongoDB", "MySQL", "PostgreSQL"]
}, {
    "Program": "Text, Image, Video, Speech & More",
    "Percentage": 50,
    "Description": "AI-powered platforms seamlessly integrate text, image, video, speech, and more, revolutionizing content creation, analysis, and interaction. Leveraging advanced algorithms, these platforms empower users to automate tasks, streamline workflows, and unlock new possibilities for creativity and innovation across various industries. From generating coherent text to creating realistic images and videos, transcribing speech, and understanding natural language, AI-driven platforms offer a comprehensive toolkit for communication and decision-making, driving transformative change worldwide.",
    "Elements": ["TensorFlow", "PyTorch", "Keras"]
}];

var elementData = {
    "ChatGPT": {
        "toolName" : "ChatGPT",
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