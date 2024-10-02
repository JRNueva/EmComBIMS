export function ARTICLES() {

        const articles = [
        {
            "id": 1,
            "title": "Barangay Mojon Celebrates 132nd Founding Anniversary",
            "img": "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            "alt": "Image 1",
            "desc": "The barangay celebrated its founding anniversary with a grand parade and a cultural festival.",
            "date": "2024-07-31",
            "author": {
                "name": "Miguel Flores",
                "position": "Barangay Councilor",
                "img": "https://www.material-tailwind.com/img/avatar1.jpg"
            }
        },
        {
            "id": 2,
            "title": "Barangay Launches New Health Initiative",
            "img": "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            "alt": "Image 2",
            "desc": "A new health initiative focusing on preventive care and community wellness has been launched in Barangay Mojon.",
            "date": "2024-07-15",
            "author": {
                "name": "Ana Rivera",
                "position": "Barangay Councilor",
                "img": "https://www.material-tailwind.com/img/avatar2.jpg"
            }
        },
        {
            "id": 3,
            "title": "Community Clean-Up Drive Success",
            "img": "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            "alt": "Image 3",
            "desc": "The recent community clean-up drive was a success, with volunteers collecting over 500 bags of trash.",
            "date": "2024-07-10",
            "author": {
                "name": "Carlos Ramirez",
                "position": "Barangay Councilor",
                "img": "https://www.material-tailwind.com/img/avatar3.jpg"
            }
        },
        {
            "id": 4,
            "title": "Barangay Accreditation Form",
            "img": "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            "alt": "Image 4",
            "desc": "Official recognition form for organizational authorization is now available. Apply today to get your organization accredited.",
            "date": "2024-07-05",
            "author": {
                "name": "Maria Clara",
                "position": "Barangay Councilor",
                "img": "https://www.material-tailwind.com/img/avatar4.jpg"
            }
        },
        {
            "id": 5,
            "title": "Youth Sports Festival Announced",
            "img": "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            "alt": "Image 5",
            "desc": "The barangay will host its annual Youth Sports Festival this coming August, featuring various sports events.",
            "date": "2024-07-25",
            "author": {
                "name": "Juan Dela Cruz",
                "position": "Barangay Captain",
                "img": "https://www.material-tailwind.com/img/avatar5.jpg"
            }
        },
        {
            "id": 6,
            "title": "Emergency Preparedness Seminar Held",
            "img": "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            "alt": "Image 6",
            "desc": "A seminar on emergency preparedness was conducted for the residents, emphasizing safety protocols.",
            "date": "2024-07-03",
            "author": {
                "name": "Sofia Morales",
                "position": "Barangay Treasurer",
                "img": "https://www.material-tailwind.com/img/avatar6.jpg"
            }
        },
        {
            "id": 7,
            "title": "New Barangay Hall Inaugurated",
            "img": "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            "alt": "Image 7",
            "desc": "The newly constructed Barangay Hall was officially inaugurated, providing better facilities for residents.",
            "date": "2024-06-30",
            "author": {
                "name": "Ricardo Gomez",
                "position": "Barangay Secretary",
                "img": "https://www.material-tailwind.com/img/avatar7.jpg"
            }
        },
        {
            "id": 8,
            "title": "Barangay Hosts Cultural Dance Competition",
            "img": "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            "alt": "Image 8",
            "desc": "A vibrant cultural dance competition was held in Barangay Mojon, showcasing local talent.",
            "date": "2024-07-12",
            "author": {
                "name": "Ana Rivera",
                "position": "Barangay Councilor",
                "img": "https://www.material-tailwind.com/img/avatar8.jpg"
            }
        },
        {
            "id": 9,
            "title": "Barangay Blood Donation Drive",
            "img": "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            "alt": "Image 9",
            "desc": "The barangay organized a blood donation drive to help replenish the local blood bank.",
            "date": "2024-06-28",
            "author": {
                "name": "Miguel Flores",
                "position": "Barangay Councilor",
                "img": "https://www.material-tailwind.com/img/avatar1.jpg"
            }
        },
        {
            "id": 10,
            "title": "Barangay Disaster Relief Efforts",
            "img": "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            "alt": "Image 10",
            "desc": "In response to recent flooding, the barangay initiated relief efforts to support affected families.",
            "date": "2024-07-08",
            "author": {
                "name": "Ana Rivera",
                "position": "Barangay Councilor",
                "img": "https://www.material-tailwind.com/img/avatar2.jpg"
            }
        },
        {
            "id": 11,
            "title": "Educational Scholarship Program Launched",
            "img": "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            "alt": "Image 11",
            "desc": "A new scholarship program has been launched to support students pursuing higher education.",
            "date": "2024-07-13",
            "author": {
                "name": "Carlos Ramirez",
                "position": "Barangay Councilor",
                "img": "https://www.material-tailwind.com/img/avatar3.jpg"
            }
        },
        {
            "id": 12,
            "title": "Barangay Sports Festival Highlights",
            "img": "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            "alt": "Image 12",
            "desc": "Highlights from the annual sports festival, including the most exciting matches and performances.",
            "date": "2024-07-20",
            "author": {
                "name": "Maria Clara",
                "position": "Barangay Councilor",
                "img": "https://www.material-tailwind.com/img/avatar4.jpg"
            }
        },
        {
            "id": 13,
            "title": "Barangay Mojon Annual Fair",
            "img": "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            "alt": "Image 13",
            "desc": "The annual fair featured food stalls, games, and entertainment for the entire family.",
            "date": "2024-07-18",
            "author": {
                "name": "Juan Dela Cruz",
                "position": "Barangay Captain",
                "img": "https://www.material-tailwind.com/img/avatar5.jpg"
            }
        },
        {
            "id": 14,
            "title": "Barangay Environmental Awareness Campaign",
            "img": "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            "alt": "Image 14",
            "desc": "An awareness campaign aimed at promoting environmental sustainability within the community.",
            "date": "2024-07-23",
            "author": {
                "name": "Sofia Morales",
                "position": "Barangay Treasurer",
                "img": "https://www.material-tailwind.com/img/avatar6.jpg"
            }
        },
        {
            "id": 15,
            "title": "New Library Opens in Barangay",
            "img": "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            "alt": "Image 15",
            "desc": "The barangay has opened a new library to provide residents with more resources for education and leisure.",
            "date": "2024-07-27",
            "author": {
                "name": "Ricardo Gomez",
                "position": "Barangay Secretary",
                "img": "https://www.material-tailwind.com/img/avatar7.jpg"
            }
        },
        {
            "id": 16,
            "title": "Barangay Health Fair Updates",
            "img": "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            "alt": "Image 16",
            "desc": "Updates and outcomes from the recent health fair organized by the barangay.",
            "date": "2024-07-19",
            "author": {
                "name": "Ana Rivera",
                "position": "Barangay Councilor",
                "img": "https://www.material-tailwind.com/img/avatar8.jpg"
            }
        },
        {
            "id": 17,
            "title": "Barangay Safety Workshop",
            "img": "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            "alt": "Image 17",
            "desc": "A workshop on safety and security measures was held for barangay residents.",
            "date": "2024-07-26",
            "author": {
                "name": "Miguel Flores",
                "position": "Barangay Councilor",
                "img": "https://www.material-tailwind.com/img/avatar1.jpg"
            }
        },
        {
            "id": 18,
            "title": "Barangay Art and Craft Workshop",
            "img": "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            "alt": "Image 18",
            "desc": "Residents participated in an art and craft workshop to promote local talent and creativity.",
            "date": "2024-07-09",
            "author": {
                "name": "Ana Rivera",
                "position": "Barangay Councilor",
                "img": "https://www.material-tailwind.com/img/avatar2.jpg"
            }
        },
        {
            "id": 19,
            "title": "Barangay Talent Show",
            "img": "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            "alt": "Image 19",
            "desc": "A talent show was held to showcase the diverse skills and talents of barangay residents.",
            "date": "2024-07-21",
            "author": {
                "name": "Carlos Ramirez",
                "position": "Barangay Councilor",
                "img": "https://www.material-tailwind.com/img/avatar3.jpg"
            }
        },
        {
            "id": 20,
            "title": "Barangay Mojon’s New Waste Management System",
            "img": "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            "alt": "Image 20",
            "desc": "The barangay has implemented a new waste management system to improve cleanliness and recycling.",
            "date": "2024-07-17",
            "author": {
                "name": "Maria Clara",
                "position": "Barangay Councilor",
                "img": "https://www.material-tailwind.com/img/avatar4.jpg"
            }
        },
        {
            "id": 21,
            "title": "Barangay Mojon’s Gardening and Landscaping Event",
            "img": "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            "alt": "Image 21",
            "desc": "A gardening and landscaping event was held to beautify public spaces in the barangay.",
            "date": "2024-07-24",
            "author": {
                "name": "Juan Dela Cruz",
                "position": "Barangay Captain",
                "img": "https://www.material-tailwind.com/img/avatar5.jpg"
            }
        },
        {
            "id": 22,
            "title": "Barangay Fire Safety Training",
            "img": "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            "alt": "Image 22",
            "desc": "Residents participated in a fire safety training session to learn about prevention and response.",
            "date": "2024-07-29",
            "author": {
                "name": "Sofia Morales",
                "position": "Barangay Treasurer",
                "img": "https://www.material-tailwind.com/img/avatar6.jpg"
            }
        },
        {
            "id": 23,
            "title": "Barangay Art Exhibit",
            "img": "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            "alt": "Image 23",
            "desc": "An art exhibit was organized to showcase the works of local artists and promote community culture.",
            "date": "2024-07-02",
            "author": {
                "name": "Ricardo Gomez",
                "position": "Barangay Secretary",
                "img": "https://www.material-tailwind.com/img/avatar7.jpg"
            }
        },
        {
            "id": 24,
            "title": "Barangay Mojon’s Pet Parade",
            "img": "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            "alt": "Image 24",
            "desc": "A pet parade was held to celebrate and recognize the beloved pets of the community.",
            "date": "2024-07-11",
            "author": {
                "name": "Miguel Flores",
                "position": "Barangay Councilor",
                "img": "https://www.material-tailwind.com/img/avatar1.jpg"
            }
        },
        {
            "id": 25,
            "title": "Barangay Mojon’s Cooking Competition",
            "img": "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            "alt": "Image 25",
            "desc": "The barangay organized a cooking competition to highlight local culinary talents and favorite dishes.",
            "date": "2024-07-22",
            "author": {
                "name": "Ana Rivera",
                "position": "Barangay Councilor",
                "img": "https://www.material-tailwind.com/img/avatar8.jpg"
            }
        }
    ]


    const sortedArticles = articles.sort(
        (a, b) => new Date(b.date) - new Date(a.date)
    );

    return sortedArticles;
}
