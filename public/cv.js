import Gallery from './gallery.js';

class CV {
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
          { class: "fa-solid fa-code", content: "See the code for this site", onAction: function() { window.open("https://github.com/Atral/CV") } },
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
        const $section = this.addSection('Projects & Awards');
        this.getProjectData().forEach(project => {
            const $subsection = this.addSubsection($section, '', $(`${project.link? `<a href="${project.link}">`: '<span>'}${project.title}${project.link? '</a>': '</span>'}`),
                project.date, $(`<div class="content">${project.text}</div>`));

            if(['Community Flavor Pack', 'Dice Roll App for Tabletop RPGs'].includes(project.title)) {
                const images = ['images/image1.jpg', 'images/image2.jpg', 'images/image3.jpg'];
                const gallery = new Gallery(images);
                gallery.container.appendTo($subsection)
            }
        });
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

        return $subsection;
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
            [
                {name: 'JavaScript', icon: '<i class="fa-brands fa-square-js"></i>'}, 
                {name: 'node.js', icon: '<i class="fa-brands fa-node-js"></i>'}, 
                {name: 'HTML 5', icon: '<i class="fa-brands fa-html5"></i>'},
                {name: 'CSS', icon: '<i class="fa-brands fa-css3"></i>'}, 
                {name: 'MySQL', icon: '<i class="fa-solid fa-database"></i>'},
                {name: 'Full-Stack Web Development', icon: '<i class="fa-solid fa-layer-group"></i>'}
            ],
            [
                {name: 'Python', icon: '<i class="fa-brands fa-python"></i>'},
                {name:'Java', icon: '<i class="fa-brands fa-java"></i>'}, 
                {name: 'Ruby', icon: '<i class="fa-solid fa-gem"></i>'},
                {name: 'Machine Learning', icon: '<i class="fa-solid fa-robot"></i>'},
                {name: 'Adobe Photoshop', icon: '<i class="fa-solid fa-image"></i>'}, 
                {name: 'Adobe Illustrator', icon: '<i class="fa-solid fa-vector-square"></i>'},
            ],
        ];
    }

    getProjectData() {
        return [
            {title: 'Community Flavor Pack', link: "https://communityflavorpack.com/", date: 'Dec 2020 - Present', text: `I am part of the core development team of Community Flavor Pack,
                the leading modification for Crusader Kings 3 with ~400,000 downloads. As part of this I work with a small team to add visual flavour to the game including clothing, 
                headwear and historical courtrooms. I produce most of the 2D assets for the mod including textures for clothing and architecture and write the code to implement them in game.`},
            {title: 'Dice Roll App for Tabletop RPGs', link: 'https://github.com/Atral/dice_roll', date: 'Jun 2020 - Sep 2020', text: `In the summer of 2020,
                I created a 3D, physics-based dice rolling app for use in tabletop RPGs in Unity Engine using C#.`},
            {title: 'Cookie Cutter Chrome Extension - Hackathon Prize Winner', date: 'Mar 2019', text: `As a hackathon project I worked with a team of 3 over 24 hours to create a 
                Chrome extension that removes invasive cookie popups without agreeing to give away your data.`},
            {title: 'Engineering in Business Competition - 1st Place Winner', link: 'https://www.eibf.org.uk/', date: 'Feb 2020 - Aug 2020', text: `I worked in a multidisciplinary team of
                engineers to design and pitch a swarm robotics solution to spraying of fertiliser and pesticides in agriculture and won first place, progressing to the national finals where
                we won the people's choice award.`}
        ]
    }

}

export default CV;