const term = document.querySelector('.term');
const definition = document.querySelector('.definition')
const checkButton = document.querySelector('.check');
const nextButton = document.querySelector('.next');
const previousButton = document.querySelector('.previous');

//flashcards questions below can be changed as prefferable
words = {
    "How technology can help to solve business problem?": "Technology automates day-to-day tasks, improves data analysis, and makes it easier to store and retrieve data. It also helps maintain a company's competitive advantage. You can create new products, differentiate them from your competitors' products, and improve customer service.",
    "What problems does digital transformation solve?": "Simply put, digital transformation is the application of digital technology to create new business models. Often, the goal is to solve business problems, improve efficiency, and provide a more personalized customer experience.",
    "What are the 5 biggest challenges in digital business?": "The biggest obstacles to digital transformation are:Employee pushback, Lack of expertise to lead digitalization initiatives, Organizational structure, The overall digitization strategy is missing, Limited budget.",
    "How can I use the technology to solve the problem?": "Technology is one of many tools that enterprises can use to solve problems. The entire problem-solving process involves collecting and analyzing data to come up with solutions to problems within your organization.", 
    "What is a digital problem?": "In particular, digital problem solving requires navigating everyday contexts, including libraries, online and using new resources, tools, and interfaces in an efficient and flexible way to personal and professional goals. Includes adopting skills, strategies, and approaches (including thinking).",
    "What is digital technology?": "Digital technology are digital tools, systems, gadgets and sources that generate, keep or manner data. Well regarded examples encompass social media, on line games, multimedia and cellular phones. Digital gaining knowledge of is any sort of gaining knowledge of that makes use of technology.",
    "What is a technology solution?": "A solution is the implementation of people, processes, information, and technology in a particular system to support a set of business or technical functions that solve one or more business problems.",
    "How does Information Technology Affect Corporate Decision Making?": "Technology informs decision makers and helps improve the quality and speed of decision making. Technology also makes it easier for people to work together and make shared business decisions.",
    "Why does your business need digital technology?": "Technology helps increase the efficiency of systems, products, and services. Helps track and streamline processes, maintain data flow, and manage contact and employee records. In fact, this increased operational efficiency helps reduce costs and grow the company rapidly.",
}

//below objects functions are entered
data = Object.entries(words)

function getRandomWord() {
    randomTerm = data[Math.floor(Math.random() * data.length)]
    term.innerHTML = `<h3>${randomTerm[0]}</h3>`;
    definition.innerHTML = `<h3>${randomTerm[1]}</h3`;
}


checkButton.addEventListener('click', function() {
    definition.style.display = 'block'; 
});

nextButton.addEventListener('click', function() {
    getRandomWord();
    definition.style.display = 'none'; 
});
