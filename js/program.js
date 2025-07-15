const programs = [
    {   "image": "../imgs/1.ciee/south-korea.jpg", 
        "name": "CIEE Seoul Summer Internship", 
        "term": "summer", 
        "country": "South Korea", 
        "offered_by": "CIEE", 
        "study_level": "undergraduate", 
        "field": "Business", 
        "type": "internship abroad", 
        "language": "Korean", 
        "length": "months",
        "description": "This program in Seoul lasts 8 weeks and features two key components: A full-time internship with an international organization (approximately 30-40 hours per week) and an internship seminar. Enhance your experience with co-curricular and extracurricular activities while building career skills, expanding your professional network, and immersing yourself in South Korean culture. Live, learn, and work in Seoul!"
    },

    {   "image": "../imgs/1.ciee/shanghai.jpg", 
        "name": "CIEE Shanghai Summer Intensive Chinese", 
        "term": "summer", 
        "country": "China", 
        "offered_by": "CIEE", 
        "study_level": "undergraduate", 
        "field": "Language & Culture", 
        "type": "study abroad", 
        "language": "Chinese", 
        "length": "months", 
        "description": "This Summer Accelerated Chinese Language program in Shanghai lasts 8 weeks and is designed for students interested in fast-forwarding their Mandarin language skills. You will enroll in CIEE courses at CIEE Shanghai. Enhance your experience with co-curricular and extracurricular activities while immersing yourself in Chinese culture. Live and learn in Shanghai!"
    },

    {   "image": "../imgs/1.ciee/london.jpg", 
        "name": "CIEE London Psychology Semester", 
        "term": "fall", "country": "United Kingdom", 
        "offered_by": "CIEE", 
        "study_level": "undergraduate", 
        "field": "Psychology", 
        "type": "study abroad", 
        "length": "semesters", 
        "description": "Your Semester in London program lasts a full semester and is designed for students from all academic backgrounds. You will enroll in a combination of CIEE courses, host institution courses, and courses taught online through CIEE's global academic partner, ASU. Enhance your experience with co-curricular and extracurricular activities while immersing yourself in British culture. Live and learn in London!"
    },

    {   "image": "../imgs/1.ciee/Paris.jpg", 
        "name": "CIEE Paris Graduate Business Research", 
        "term": "spring", 
        "country": "France", 
        "offered_by": "CIEE", 
        "study_level": "graduate", 
        "field": "Business", 
        "type": "research", 
        "language": "French", 
        "length": "semesters", 
        "description": "hh"
         
    },

    {   "image": "../imgs/1.ciee/cape-town.jpg", 
        "name": "CIEE Cape Town Environmental Studies", 
        "term": "spring", 
        "country": "South Africa", 
        "offered_by": "CIEE", 
        "study_level": "undergraduate", 
        "field": "Environmental Studies", 
        "type": "study abroad", 
        "length": "semesters", 
        "description": "" 
    },



    {   "image": "../imgs/2.isa/florence.jpg", 
        "name": "ISA Florence Art History Semester", 
        "term": "fall", 
        "country": "Italy", 
        "offered_by": "ISA", 
        "study_level": "undergraduate", 
        "field": "Art", 
        "type": "study abroad", 
        "language": "Italian", 
        "length": "semesters", 
        "description": "" 
    },

    {   "image": "../imgs/2.isa/buenos-aires.jpeg", 
        "name": "ISA Buenos Aires Spanish Immersion", 
        "term": "winter", 
        "country": "Argentina", 
        "offered_by": "ISA", 
        "study_level": "undergraduate", 
        "field": "Language & Culture", 
        "type": "study abroad", 
        "language": "Spanish", 
        "length": "months", 
        "description": "" 
    },

    {   "image": "../imgs/2.isa/sydney.jpg", 
        "name": "ISA Sydney Engineering Internship", 
        "term": "summer", "country": "Australia", 
        "offered_by": "ISA", 
        "study_level": "undergraduate", 
        "field": "Engineering", 
        "type": "internship abroad", 
        "length": "months", 
        "description": "" 
    },

    {   "image": "../imgs/2.isa/berlin.jpg", 
        "name": "ISA Berlin Business & Economics", 
        "term": "spring", "country": "Germany", 
        "offered_by": "ISA", 
        "study_level": "undergraduate", 
        "field": "Business", 
        "type": "study abroad", 
        "language": "German", 
        "length": "semesters", 
        "description": "" 
    },

    {   "image": "../imgs/1.ciee/cape-town.jpg", 
        "name": "ISA Cape Town Social Work Internship", 
        "term": "summer", 
        "country": "South Africa", 
        "offered_by": "ISA", 
        "study_level": "undergraduate", 
        "field": "Social Work", 
        "type": "internship abroad", 
        "length": "months", 
        "description": ""
    },
    


    {
        "image": "../imgs/3.ies/tokyo.jpg",
        "name": "IES Abroad Tokyo International Relations",
        "term": "spring",
        "country": "Japan",
        "offered_by": "IES Abroad",
        "study_level": "undergraduate",
        "field": "International Relations",
        "type": "study abroad",
        "language": "Japanese",
        "length": "semesters", 
        "description": ""
    }, 

    {
        "image": "../imgs/3.ies/madrid.jpg",
        "name": "IES Abroad Madrid Media & Communications",
        "term": "summer",
        "country": "Spain",
        "offered_by": "IES Abroad",
        "study_level": "undergraduate",
        "field": "Communications",
        "type": "study abroad",
        "language": "Spanish",
        "length": "months", 
        "description": ""
    },

    {
        "image": "../imgs/2.isa/sydney.jpg",
        "name": "IES Abroad Sydney Marketing Internship",
        "term": "summer",
        "country": "Australia",
        "offered_by": "IES Abroad",
        "study_level": "undergraduate",
        "field": "Marketing",
        "type": "internship abroad",
        "length": "months", 
        "description": ""
    }, 

    {
        "image": "../imgs/2.isa/berlin.jpg",
        "name": "IES Abroad Berlin Environmental Science",
        "term": "fall",
        "country": "Germany",
        "offered_by": "IES Abroad",
        "study_level": "undergraduate",
        "field": "Environmental Studies",
        "type": "study abroad",
        "language": "German",
        "length": "semesters", 
        "description": ""
    }, 

    {
        "image": "../imgs/3.ies/copenhagen.jpg",
        "name": "IES Abroad Copenhagen Public Health Research",
        "term": "spring",
        "country": "Denmark",
        "offered_by": "IES Abroad",
        "study_level": "graduate",
        "field": "Public Health",
        "type": "research",
        "length": "semesters", 
        "description": ""
    },



    {
        "image": "../imgs/1.ciee/london.jpg",
        "name": "API London Business & Culture",
        "term": "winter",
        "country": "United Kingdom",
        "offered_by": "API",
        "study_level": "undergraduate",
        "field": "Business",
        "type": "study abroad",
        "length": "1-3 weeks", 
        "description": ""
    }, 

    {
        "image": "../imgs/1.ciee/Paris.jpg",
        "name": "API Paris Art & Museum Studies",
        "term": "summer",
        "country": "France",
        "offered_by": "API",
        "study_level": "undergraduate",
        "field": "Arts",
        "type": "study abroad",
        "language": "French",
        "length": "months", 
        "description": ""
    }, 
    
    {
        "image": "../imgs/1.ciee/cape-town.jpg",
        "name": "API Cape Town Social Entrepreneurship",
        "term": "summer",
        "country": "South Africa",
        "offered_by": "API",
        "study_level": "undergraduate",
        "field": "Business",
        "type": "study abroad",
        "length": "months", 
        "description": ""
    },
    
    {
        "image": "../imgs/3.ies/tokyo.jpg",
        "name": "API Tokyo Japanese Language & Culture",
        "term": "summer",
        "country": "Japan",
        "offered_by": "API",
        "study_level": "undergraduate",
        "field": "Language & Culture",
        "type": "study abroad",
        "language": "Japanese",
        "length": "months", 
        "description": ""
    }, 

    {
        "image": "../imgs/4.api/melbourne.jpg",
        "name": "API Melbourne Internship Program",
        "term": "spring",
        "country": "Australia",
        "offered_by": "API",
        "study_level": "undergraduate",
        "field": "Communications",
        "type": "internship abroad",
        "length": "months", 
        "description": ""
    },

    {
        "image": "../imgs/5.sit/consta-rica.jpg",
        "name": "SIT Costa Rica Sustainable Development",
        "term": "fall",
        "country": "Costa Rica",
        "offered_by": "SIT",
        "study_level": "undergraduate",
        "field": "Environmental Studies",
        "type": "study abroad",
        "language": "Spanish",
        "length": "semesters", 
        "description": ""
    }, 

    {
        "image": "../imgs/5.sit/tunisia.jpg",
        "name": "SIT Tunisia Politics & Religious Integration",
        "term": "fall",
        "country": "Tunisia",
        "offered_by": "SIT",
        "study_level": "undergraduate",
        "field": "Political Science",
        "type": "study abroad",
        "length": "semesters", 
        "description": ""
    },

    {
        "image": "../imgs/5.sit/nepal.jpg",
        "name": "SIT Nepal Public Health Internship",
        "term": "spring",
        "country": "Nepal",
        "offered_by": "SIT",
        "study_level": "undergraduate",
        "field": "Public Health",
        "type": "internship abroad",
        "length": "months", 
        "description": ""
    }, 

    {
        "image": "../imgs/2.isa/buenos-aires.jpeg",
        "name": "SIT Argentina Human Rights Semester",
        "term": "spring",
        "country": "Argentina",
        "offered_by": "SIT",
        "study_level": "undergraduate",
        "field": "Political Science",
        "type": "study abroad",
        "language": "Spanish",
        "length": "semesters", 
        "description": ""
    }, 

    {
        "image": "../imgs/5.sit/morocco.jpg",
        "name": "SIT Morocco Gender Studies & Anthropology",
        "term": "summer",
        "country": "Morocco",
        "offered_by": "SIT",
        "study_level": "undergraduate",
        "field": "Anthropology",
        "type": "study abroad",
        "language": "Arabic",
        "length": "months", 
        "description": ""
    }, 

    {
        "image": "../imgs/6.kiis/rome.jpg",
        "name": "KIIS Rome Italian Culture & Language",
        "term": "summer",
        "country": "Italy",
        "offered_by": "KIIS",
        "study_level": "undergraduate",
        "field": "Language & Culture",
        "type": "study abroad",
        "language": "Italian",
        "length": "months", 
        "description": ""
    },

    {
        "image": "../imgs/1.ciee/london.jpg",
        "name": "KIIS London Film Studies",
        "term": "fall",
        "country": "United Kingdom",
        "offered_by": "KIIS",
        "study_level": "undergraduate",
        "field": "Film & Media",
        "type": "study abroad",
        "length": "semesters", 
        "description": ""
    }, 

    {
        "image": "../imgs/6.kiis/granada.jpg",
        "name": "KIIS Granada Spanish Literature",
        "term": "spring",
        "country": "Spain",
        "offered_by": "KIIS",
        "study_level": "undergraduate",
        "field": "Literature",
        "type": "study abroad",
        "language": "Spanish",
        "length": "months", 
        "description": ""
    }, 

    {
        "image": "../imgs/2.isa/florence.jpg",
        "name": "KIIS Florence Business & Italian Culture",
        "term": "summer",
        "country": "Italy",
        "offered_by": "KIIS",
        "study_level": "undergraduate",
        "field": "Business",
        "type": "study abroad",
        "language": "Italian",
        "length": "months", 
        "description": ""
    }, 

    {
        "image": "../imgs/6.kiis/beijing.jpeg",
        "name": "KIIS Beijing Chinese Language & Culture",
        "term": "summer",
        "country": "China",
        "offered_by": "KIIS",
        "study_level": "undergraduate",
        "field": "Language & Culture",
        "type": "study abroad",
        "language": "Chinese (M)",
        "length": "months", 
        "description": ""
    }, 

    {
        "image": "../imgs/7.kcjs/kyoto.jpg",
        "name": "KCJS Kyoto Japanese Studies",
        "term": "summer",
        "country": "Japan",
        "offered_by": "KCJS",
        "study_level": "undergraduate",
        "field": "Language & Culture",
        "type": "study abroad",
        "language": "Japanese",
        "length": "months", 
        "description": ""
    }, 

    {
        "image": "../imgs/3.ies/tokyo.jpg",
        "name": "KCJS Tokyo Japanese Language Intensive",
        "term": "summer",
        "country": "Japan",
        "offered_by": "KCJS",
        "study_level": "graduate",
        "field": "Language & Culture",
        "type": "study abroad",
        "language": "Japanese",
        "length": "months", 
        "description": ""
    }, 

    {
        "image": "../imgs/mult-country.JPG",
        "name": "Semester at Sea Global Voyage",
        "term": "fall",
        "country": "Multiple",
        "offered_by": "Semester at Sea",
        "study_level": "undergraduate",
        "field": "General Education",
        "type": "study abroad",
        "length": "semesters", 
        "description": ""
    }, 

    {
        "image": "../imgs/mult-country.JPG",
        "name": "Semester at Sea Spring Voyage",
        "term": "spring",
        "country": "Multiple",
        "offered_by": "Semester at Sea",
        "study_level": "undergraduate",
        "field": "General Education",
        "type": "study abroad",
        "length": "semesters", 
        "description": ""
    }, 

    {
        "image": "../imgs/1.ciee/shanghai.jpg",
        "name": "AFS NSLI‑Y Mandarin Yearlong",
        "term": "fall",
        "country": "China",
        "offered_by": "AFS",
        "study_level": "high school",
        "field": "Language",
        "type": "study abroad",
        "language": "Chinese (M)",
        "length": "semesters", 
        "description": ""
    }, 

    {
        "image": "../imgs/3.ies/tokyo.jpg",
        "name": "AFS Japan Yearlong Exchange",
        "term": "fall",
        "country": "Japan",
        "offered_by": "AFS",
        "study_level": "high school",
        "field": "Language & Culture",
        "type": "study abroad",
        "language": "Japanese",
        "length": "semesters", 
        "description": ""
    }, 

      {
        "image": "../imgs/8.nse/western_us.jpg",
        "name": "NSE Western U.S. Semester",
        "term": "spring",
        "country": "United States",
        "offered_by": "NSE",
        "study_level": "undergraduate",
        "field": "Open",
        "type": "study abroad",
        "length": "semesters", 
        "description": ""
      }, 

      {
        "image": "../imgs/8.nse/northeast.jpg",
        "name": "NSE Northeast Semester Exchange",
        "term": "fall",
        "country": "United States",
        "offered_by": "NSE",
        "study_level": "undergraduate",
        "field": "Open",
        "type": "study abroad",
        "length": "semesters", 
        "description": ""
      },

      {
        "image": "../imgs/10.global/ecuador.jpg",
        "name": "Global Nomads Group Ecuador Semester",
        "term": "fall",
        "country": "Ecuador",
        "offered_by": "Global Nomads Group",
        "study_level": "undergraduate",
        "field": "Environmental Studies",
        "type": "study abroad",
        "language": "Spanish",
        "length": "semesters", 
        "description": ""
      },

      {
        "image": "../imgs/10.global/india.jpg",
        "name": "Global Nomads Group India Internship",
        "term": "summer",
        "country": "India",
        "offered_by": "Global Nomads Group",
        "study_level": "undergraduate",
        "field": "Public Health",
        "type": "internship abroad",
        "length": "months", 
        "description": ""
      },

      {
        "image": "../imgs/2.isa/buenos-aires.jpeg",
        "name": "IES Intern in Buenos Aires",
        "term": "summer",
        "country": "Argentina",
        "offered_by": "IES Abroad",
        "study_level": "undergraduate",
        "field": "International Relations",
        "type": "internship abroad",
        "length": "months", 
        "description": ""
      },

      {
        "image": "../imgs/2.isa/berlin.jpg",
        "name": "IES Intern in Berlin",
        "term": "spring",
        "country": "Germany",
        "offered_by": "IES Abroad",
        "study_level": "undergraduate",
        "field": "Engineering",
        "type": "internship abroad",
        "length": "months", 
        "description": ""
      },

      {
        "image": "../imgs/9.ciee-res/ghana.jpg",
        "name": "CIEE Research in Ghana",
        "term": "spring",
        "country": "Ghana",
        "offered_by": "CIEE",
        "study_level": "undergraduate",
        "field": "Public Health",
        "type": "research",
        "language": "English",
        "length": "months", 
        "description": ""
      },

    {
        "image": "../imgs/9.ciee-res/peru.jpg",
        "name": "CIEE Research in Peru",
        "term": "summer",
        "country": "Peru",
        "offered_by": "CIEE",
        "study_level": "undergraduate",
        "field": "Anthropology",
        "type": "research",
        "language": "Spanish",
        "length": "months", 
        "description": ""
    }
  ];
  


document.getElementById('filterToggle').addEventListener('click', () => {
    document.getElementById('filterPopup').classList.toggle('hidden');
  });
  
  document.getElementById('clearFilters').addEventListener('click', () => {
    const filterFields = ['offeredBy', 'studyLevel', 'field', 'type', 'language', 'length'];
    filterFields.forEach(id => {
      document.getElementById(id).value = '';
    });
});

  
function collectFormData() {
    const data = {
        search: document.getElementById('searchInput').value.toLowerCase(),
        term: document.getElementById('termSelect').value,
        country: document.getElementById('countrySelect').value,
        offeredBy: document.getElementById('offeredBy').value,
        studyLevel: document.getElementById('studyLevel').value,
        field: document.getElementById('field').value,
        type: document.getElementById('type').value,
        language: document.getElementById('language').value,
        length: document.getElementById('length').value
    };

    const results = programs.filter(program => {
        return (
            (data.search === '' || program.name.toLowerCase().includes(data.search) || program.field.toLowerCase().includes(data.search)) &&
            (data.term === '' || program.term === data.term) &&
            (data.country === '' || program.country === data.country) &&
            (data.offeredBy === '' || program.offered_by === data.offeredBy) &&
            (data.studyLevel === '' || program.study_level === data.studyLevel) &&
            (data.field === '' || program.field === data.field) &&
            (data.type === '' || program.type === data.type) &&
            (data.language === '' || program.language === data.language) &&
            (data.length === '' || program.length === data.length)
        );
    });

    // Output to console or display on page
    console.log("Filtered Programs:", results);

    // Optional: render results in HTML
    renderResults(results);
}

function renderResults(results) {
    const container = document.getElementById('resultsContainer');
    container.innerHTML = ''; // clear previous results

    if (results.length === 0) {
        container.innerHTML = '<p>No matching programs found.</p>';
        return;
    }

    results.forEach(program => {
        const div = document.createElement('div');
        div.classList.add('program-card');
        div.innerHTML = `
            <div class="program-img"> <img src="${program.image}" alt="helicopter during sunset"> </div>
            <h3>${program.name}</h3>
            <div class="program-tags"> 
                <span class="tag">  Country: ${program.country}         </span>
                <span class="tag">  Offered by: ${program.offered_by}   </span>
                <span class="tag">  Field: ${program.field}             </span>
            </div>
            <div class="learn-more-button"> <button class="learn-more"><strong>LEARN MORE</strong></button> </div>
        `;
        container.appendChild(div);
    });
}

// <div class="program-img"> <img src="../imgs/Akter3.JPG" alt="helicopter during sunset"> </div>

/* 
<span class="tag">  Term: ${program.term}               </span>
<span class="tag">  Country: ${program.country}         </span>
<span class="tag">  Offered by: ${program.offered_by}   </span>
<span class="tag">  Study Level: ${program.study_level} </span>
<span class="tag">  Field: ${program.field}             </span>
<span class="tag">  Type: ${program.type}               </span>
<span class="tag">  Length: ${program.length}           </span>
${program.language ? `<span class="tag">Language: ${program.language}</span>` : ''} 
*/

document.getElementById('mainSearchButton').addEventListener('click', collectFormData);
document.getElementById('popupSearch').addEventListener('click', collectFormData);


document.getElementById('program-card').addEventListener('click', function(){
    // make the card center of the page
    // make it about 2-4x bigger
    // add a paragraph of info
    
    
});