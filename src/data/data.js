const movies = [
    {
        id: 0,
        title: "Avatar",
        year : '2009',
        director: {
            name: 'James Cameron',
            nationalite: 'Canadien',
            birthDate : '16/08/1954'
        },
        genre : 'Science fiction',
        resume : 'Malgré sa paralysie, Jake Sully, un ancien marine immobilisé dans un fauteuil roulant, est resté un combattant au plus profond de son être. Il est recruté pour se rendre à des années-lumière de la Terre, sur Pandora, où de puissants groupes industriels exploitent un minerai rarissime destiné à résoudre la crise énergétique sur Terre.',
        affiche : '/../../static/affiche/avatar_affiche.jpg'
    },
    {
        id: 1,
        title: "Retour vers le futur",
        year : '1985',
        director: {
            name: 'Robert Zemeckis',
            nationalite: 'Américain',
            birthDate : '26/03/1950'
        },
        genre : 'Science fiction',
        resume : 'Le jeune Marty McFly mène une existence anonyme, auprès de sa petite amie Jennifer, seulement troublée par sa famille en crise et un proviseur qui serait ravi de l\'expulser du lycée. Ami de l\'excentrique professeur Emmett Brown, il l\'accompagne tester sa nouvelle expérience : le voyage dans le temps via une DeLorean modifiée. La démonstration tourne mal : des trafiquants d\'armes débarquent et assassinent le scientifique.',
        affiche : '/../../static/affiche/retour-vers-le-futur_affiche.jpg'
    },
    {
        id: 2,
        title: "Harry potter",
        year : '2001',
        director: {
            name: 'Chris Columbus',
            nationalite: 'Américain',
            birthDate : '10/09/1958'
        },
        genre : 'Fantaisie',
        resume : 'Orphelin, le jeune Harry Potter peut enfin quitter ses tyranniques oncle et tante Dursley lorsqu\'un curieux messager lui révèle qu\'il est un sorcier. À 11 ans, Harry va enfin pouvoir intégrer la légendaire école de sorcellerie de Poudlard, y trouver une famille digne de ce nom et des amis, développer ses dons, et préparer son glorieux avenir.',
        affiche : '/../../static/affiche/harry-potter_affiche.jpg'
    },
    {
        id: 3,
        title: "Titanic",
        year : '1998',
        director: {
            name: 'James Cameron',
            nationalite: 'Canadien',
            birthDate : '16/08/1954'
        },
        genre : 'Drame',
        resume : 'En 1997, l\'épave du Titanic est l\'objet d\'une exploration fiévreuse, menée par des chercheurs de trésor en quête d\'un diamant bleu qui se trouvait à bord. Frappée par un reportage télévisé, l\'une des rescapés du naufrage, âgée de 102 ans, Rose DeWitt, se rend sur place et évoque ses souvenirs. 1912. Fiancée à un industriel arrogant, Rose croise sur le bateau un artiste sans le sou.',
        affiche : '/../../static/affiche/titanic_affiche.jpg'
    },  
    {
        id: 4,
        title: "Le Seigneur des Anneaux",
        year : '2001',
        director: {
            name: 'Peter Jackson',
            nationalite: 'Néo-zélandais',
            birthDate : '31/10/1961'
        },
        genre : 'Aventure',
        resume : 'Un jeune et timide `Hobbit\', Frodon Sacquet, hérite d\'un anneau magique. Bien loin d\'être une simple babiole, il s\'agit d\'un instrument de pouvoir absolu qui permettrait à Sauron, le `Seigneur des ténèbres\', de régner sur la `Terre du Milieu\' et de réduire en esclavage ses peuples. Frodon doit parvenir jusqu\'à la \`Crevasse du Destin\' pour détruire l\'anneau.',
        affiche : '/../../static/affiche/le-seigneur-des-anneaux_affiche.jpg'
    },
    {
        id: 5,
        title: "L'empire contre-attaque",
        year : '1980',
        director: {
            name: 'Irvin Kershner',
            nationalite: 'Américain',
            birthDate : '29/04/1923'
        },
        genre : 'Science fiction',
        resume : 'Malgré la destruction de l\'Etoile Noire, l\'Empire maintient son emprise sur la galaxie, et poursuit sans relâche sa lutte contre l\'Alliance rebelle. Basés sur la planète glacée de Hoth, les rebelles essuient un assaut des troupes impériales. Parvenus à s\'échapper, la princesse Leia, Han Solo, Chewbacca et C-3P0 se dirigent vers Bespin, la cité des nuages gouvernée par Lando Calrissian, ancien compagnon de Han.',
        affiche : '/../../static/affiche/star-wars_affiche.jpg'
    },
    {
        id: 6,
        title: "Jurrasic Park",
        year : '1993',
        director: {
            name: 'Steven Spielberg',
            nationalite: 'Américain',
            birthDate : '18/12/1946'
        },
        genre : 'Science fiction',
        resume : 'John Parker Hammond, le PDG de la puissante compagnie InGen, parvient à donner vie à des dinosaures grâce à la génétique et décide de les utiliser dans le cadre d’un parc d\'attractions qu’il compte ouvrir sur une île au large du Costa Rica. Avant l\'ouverture, il fait visiter le parc à un groupe d\'experts pour obtenir leur aval. Pendant la visite, une tempête éclate et un informaticien corrompu par une entreprise rivale en profite pour couper les systèmes de sécurité afin de voler des embryons de dinosaures. En l\'absence de tout système de sécurité pendant plusieurs heures, les dinosaures s\'échappent sans mal, mais le cauchemar des visiteurs ne fait que commencer...',
        affiche : '/../../static/affiche/jurassic-park_affiche.jpg'
    },
    {
        id: 7,
        title: "Indiana Jones",
        year : '1981',
        director: {
            name: 'Steven Spielberg',
            nationalite: 'Américain',
            birthDate : '18/12/1946'
        },
        genre : 'Aventure',
        resume : 'Professeur d\'archéologie, Indiana Jones parcourt le monde à la recherche de trésors. Son rival, le Français René Belloq, travaille pour les nazis qui rêvent de retrouver l\'Arche d\'alliance contenant les Tables de la Loi. Or, feu le professeur Ravenwood, père de Marion, l\'ex-petite amie d\'Indiana Jones, détenait une médaille permettant de localiser l\'arche. Jones part sur les traces de Marion au Népal.',
        affiche : '/../../static/affiche/indiana-jones_affiche.jpg'
    },
    {
        id: 8,
        title: "Terminator",
        year : '1985',
        director: {
            name: 'James Cameron',
            nationalite: 'Canadien',
            birthDate : '16/08/1954'
        },
        genre : 'Action',
        resume : 'Un Terminator, robot d\'aspect humain, est envoyé d\'un futur où sa race livre aux hommes une guerre sans merci. Sa mission est de trouver et d\'éliminer Sarah Connor avant qu\'elle ne donne naissance à John, appelé à devenir le chef de la résistance. Cette dernière envoie un de ses membres, Reese, aux trousses du cyborg.',
        affiche : '/../../static/affiche/terminator_affiche.jpg'
    },
    {
        id: 9,
        title: "La vie est belle",
        year : '1998',
        director: {
            name: 'Roberto Benigni',
            nationalite: 'Italien',
            birthDate : '27/10/1952'
        },
        genre : 'Drame',
        resume : 'En 1938, Guido, jeune homme plein de gaieté, rêve d\'ouvrir une librairie malgré les tracasseries de l\'administration fasciste. Il tombe amoureux de Dora, institutrice étouffée par le conformisme familial et l\'enlève le jour de ses fiançailles. Quelques années plus tard, Guido et Dora ont un fils, Giosué, mais les lois raciales sont entrées en vigueur et Guido est juif. Il est déporté avec son fils.',
        affiche : '/../../static/affiche/la-vie-est-belle_affiche.jpg'
    },
]

exports.movies = movies