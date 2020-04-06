var config = {
    style: 'mapbox://styles/joshyboy/ck84sb7tg074a1iqhqfyo0qyx',
    accessToken: 'pk.eyJ1Ijoiam9zaHlib3kiLCJhIjoiY2s1ZnE0ZjVtMGRnajNtcHQ4cTZrbTNnZyJ9.hDzQGmZJfT251xgsI5Q15w',
    showMarkers: false,
    theme: 'light',
    alignment: 'left',
    title: 'The life story of a third culture kid',
    subtitle: 'Documenting the different places that ive lived in',
    byline: 'by Josh Worden',
    footer: 'The following sources were utilized in the creation of this story map : <ul style="list-style-type:none;"> <li> <a href= "http://geojson.io/"> geojson </a> </li> <li> <a href="https://studio.mapbox.com/"> mapbox studio </a> </li> </ul>  ',
   

    chapters: [
        { //make sure to make locations in long, lat format
            id: '1', //first chapter of mine
            title: 'El Salvador',
            image: '', //old picture of me with friends
            description: 'This was my first home on the outskirts of San Salvador for the first year or two of life',
            location: { //made sure to center and properly zoom in on my feature object
                center: [-89.219, 13.704],
                zoom: 12.97,
                pitch: 60, //gave pitch and bearing numbers, to accentuate the 3D aspect of the polygon feature
                bearing: -43.2
            },
            onChapterEnter: [
                
            ],
            onChapterExit: [
             
            ]
        }, 

        { //this is the first instance of us including an embedded youtube video. enjoyed tinkering with the frame width and height
            id:'2' ,
            title:'Peru' ,
            image:'',
            description:'This is where I can actually start remembering my memories. ' ,
            location: {
                center:[-77.037, -12.084],
                zoom: 12.52,
                pitch: 25,
                bearing: 0
            },


            onChapterEnter: [

            ],

            onChapterExit: [

            ]

        }, 

        {
            id: '3',
            title: 'Guatemala',
            image: '',
            description: 'this was a formative time in my life and living here shaped the person that I have now become',
            location: {
                center: [-90.492,14.608],
                zoom: 13.50,
                pitch: 60,
                bearing: 90
            },
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            // change the text marker to be on right-side
            id: '4' ,
            image:'',
            title:'United States',
            description:'I lived right outside D.C., in a county called Arlington' ,
            location: {
                center:[-77.082, 38.899],
                zoom: 11.96,
                pitch: 45,
                bearing: 270
            },
            onChapterEnter: [

            ],

            onChapterExit: [

            ]

        }, 


        {
            // make text market right-side
            id:'5' ,
            title:'Thailand' ,
            image:'' ,
            description:'I lived in Bangkok during my high school years and boy did I love it! ' ,
            location: {
                center: [100.550,13.724],
                zoom: 11.88,
                pitch: 30,
                bearing:270
            },
            onChapterEnter: [

            ],

            onChapterExit: [

            ]

        }, 

      {
            id:'6',
            title:'New Zealand',
            image:'',
            description:'I travelled throughout New Zealand during my gap year.',
            location: {
                center:[171.986,-41.404],
                zoom:[7.79],
                pitch: 30,
                bearing: 0
            },
            onChapterEnter: [

            ],

            onChapterExit: [

            ]

        }, 
        
     {
            id: '7',
            title: 'Montreal',
            image: '',
            description: 'I live here currently and attend McGill University' ,
            location: {
                center:[-73.603, 45.513] ,
                zoom: 12.33,
                pitch: 30 ,
                bearing:0
            },
            onChapterEnter: [

            ],

            onChapterExit: [

            ]

        },
    
    ]
};
