L.control.tagFilterButton({
                data: ['GOVERNMENT', 'NGO','PRIVATE','HC II', 'Hospital','HC III','< 1 km', 'More than 1Km'],

                //data: {ownership:'Private, Government, NGO'}, 

                filterOnEveryClick: true,
                icon: '<img src="heathcenters.png">',
            }).addTo(storkmap.map);
