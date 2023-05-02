Index = class {
    constructor() {
        this.$el = $('<div class="cv"/>');
        this.render();
    }

    render() {
        this.addHeader();
        this.addCompetencies();
        this.addExperience();
        this.addEducation();
        this.addProjects();
    }

    addHeader() {
        const $header = $('<div class="header"/>').appendTo(this.$el);
        $('<div class="name">Jack Maskell</name>').appendTo($header);
        $('<div class="role">Software Engineer</div>').appendTo($header);
        
        this.addContactRow($header);
    }

    addContactRow($header) {
        const icons = [
          { class: "fa-solid fa-envelope", content: "Send me an email", onAction: function() { window.location = "mailto: jack_maskell@hotmail.co.uk"; } },
          { class: "fa-brands fa-github", content: "View my GitHub", onAction: function() { window.open("https://github.com/Atral") } },
          { class: "fa-solid fa-code", content: "See the code for this site", onAction: function() { alert("Code icon clicked"); } },
          { class: "fa-solid fa-file-arrow-down", content: "Download my CV", onAction: function() { window.open("cv.pdf", '_blank') } },
        ];
      
        const contactDiv = $('<div class="contact"/>');
        contactDiv.appendTo($header);
      
        icons.forEach((icon) => {
            const iconDiv = $(`<div class="contact-item" data-tippy-content="${icon.content}"><i class="${icon.class}"></i></div>`);
            iconDiv.appendTo(contactDiv);
          iconDiv.on('click', () => {icon.onAction()});
        });
    }

    addCompetencies() {
        const [core, additional] = this.getCompetencies();
        const $section = this.addSection('Competencies').appendTo(this.$el);

        const $core =  $('<div class="subsection"/>').appendTo($section);
        $('<div class="subtitle">Core</div>').appendTo($core);
        const $coreContent = $('<div class="content competencies"/>').appendTo($core);
        core.forEach(competency => {$(`<div class="competency">${competency.icon} ${competency.name}</div>`).appendTo($coreContent)})

        const $additional =  $('<div class="subsection"/>').appendTo($section);
        $('<div class="subtitle">Additional</div>').appendTo($additional);
        const $additionalContent = $('<div class="content competencies"/>').appendTo($additional);
        additional.forEach(competency => {$(`<div class="competency">${competency.icon} ${competency.name}</div>`).appendTo($additionalContent)});

    }

    addExperience() {
        const $section = this.addSection('Professional Experience');

        const $list = $(`<ul/>`);
        this.getExpirienceBullets().forEach(bullet => {$(`<li>${bullet}</li>`).appendTo($list)});
        this.addSubsection($section, 'Software Engineer', $('<a href="https://darktrace.com/">Darktrace, Cambridge</a>'), 'Jun 2021 - Present', $list);

    }

    addSection(title) {
        const $section = $('<div class="section"/>').appendTo(this.$el);
        $(`<div class="title">${title}</div>`).appendTo($section);
        return $section;
    }

    addEducation() {
        const $section = this.addSection('Education');

        const $compSciContent = $(`<div class="content">${this.getCompsciText()}</div>`);
        this.addSubsection($section, 'The University of Sheffield', $('<span>BSc Artificial Intilligence and Computer Science (1st)</span>'), 'Sep 2018 - Jun 2021', $compSciContent);

        const $physicsContent = $(`<div class="content">${this.getPhysicsText()}</div>`)
        this.addSubsection($section, 'The University of Sheffield', $('<span>2nd Year BSc Physics (Unfinished)</span>'), 'Sep 2016 - Jun 2017', $physicsContent);

        const $ouContent = $(`<div class="content">${this.getOUText()}</div>`)
        this.addSubsection($section, 'The Open University', $('<span>1st Year and Foundation BSc Physics (Pass)</span>'), 'Feb 2014 - Oct 2015', $ouContent);
    }

    addProjects() {
        const $section = this.addSection('Projects');
    }

    addSubsection($el, subtitle, location, dateRangeString, $content) {
        const $subsection = $('<div class="subsection"/>').appendTo($el);
        $(`<div class="subtitle">${subtitle}</div>`).appendTo($subsection);
        
        const $locationDateRow = $(`<div class="location-date-row"/>`).appendTo($subsection);

        const $location = $(`<span class="location-date-item"></span>`).appendTo($locationDateRow);
        location.appendTo($location);

        $(`<span class="location-date-item">${dateRangeString}</span>`).appendTo($locationDateRow);

        $('<div class="content"/>').appendTo($content);
        $content.appendTo($subsection);
    }

    getExpirienceBullets() {
        const bullets = [
            "Developed JavaScript (node.js / jQuery) code to improve and expand the company's bespoke CRM platform.",
            "Worked with a MySQL backend to create database structures and write queries.",
            "Performed code reviews and gave feedback and release approval to merge requests.",
            "Created extensive reworks of legacy code, dramatically improving usability, maintainability and performance.",
            "Wrote large amounts of JSDoc documentation for previously undocumented code.",
            "Wrote end to end tests in cypress.",
            "Assisted newer developers in writing well-structured code."
        ];

        return bullets
    }

    getCompsciText() {
        return `I graduated with a first in Artificial Intelligence and Computer Science and covered a wide range of subjects during my study including web development,
         data structures and algorithms, robotics, AI & machine learning, software reengineering, functional programming, 3D Computer graphics and speech processing.`
    }

    getPhysicsText() {
        return `I spent a year studying 2nd year physics at the University of Sheffield learning about things like classical and quantum physics, medical imaging,
         special relativity, astrobiology and programming in python.`
    }

    getOUText() {
        return `I studied a foundation and first year in physics with The Open University where I learned fundamentals of Physics and Mathematics.`
    }

    getCompetencies() {
        return [
            [{name: 'JavaScript', icon: '<i class="fa-brands fa-square-js"></i>'}, {name: 'node.js', icon: '<i class="fa-brands fa-node-js"></i>'}, {name: 'HTML 5', icon: '<i class="fa-brands fa-html5"></i>'}, {name: 'CSS', icon: '<i class="fa-brands fa-css3"></i>'}, {name: 'MySQL', icon: '<i class="fa-solid fa-database"></i>'}, {name: 'Full-Stack Web Development', icon: '<i class="fa-solid fa-layer-group"></i>'}],
            [{name: 'Python', icon: '<i class="fa-brands fa-python"></i>'}, {name:'Java', icon: '<i class="fa-brands fa-java"></i>'}, {name: 'Ruby', icon: '<i class="fa-solid fa-gem"></i>'}, {name: 'Machine Learning', icon: '<i class="fa-solid fa-robot"></i>'}, {name: 'Adobe Photoshop', icon: '<i class="fa-solid fa-image"></i>'}, {name: 'Adobe Illustrator', icon: '<i class="fa-solid fa-vector-square"></i>'}],
        ]
    }

}

$(() => {
    const page = new Index();
    $('body').append(page.$el);
    tippy('[data-tippy-content]', {
        placement: 'bottom',
    });
});