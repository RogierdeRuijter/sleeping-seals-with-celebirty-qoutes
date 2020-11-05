const fileNames = [
    'familyseals.jpg',	
    'marryporn.jpg',
    '2024seal.jpg',
    'fatsealmoss.jpg',		
    'mentalseal.jpg',
    'Baby_Seal_2.jpg',		
    'feelingseal.jpg',		
    'mirrorseal.jpg',
    'appologyseal.jpg',	
    'flossseal.jpg',		
    'neglectedseal.jpg',
    'beherenowseal.jpg',	
    'friendseal.jpg',		
    'nekseals.jpg',
    'belieberseal.jpg',
    'fshtankseal.jpg',	
    'oetserseal.jpg',
    'bellyseal.jpg',	
    'genderlozeseal.jpg',
    'pillow.jpg',
    'bigdickseal.jpg',
    'giveupseal.jpg',
    'purposeseal.jpg',
    'bucketistseal.jpg',	
    'godseal.jpg',
    'reallysadseal.jpg',
    'busyseal.jpg',
    'gooddayseal.jpg',
    'sadseal.jpg',
    'careseal.jpg',	
    'groupseal.jpg',		
    'saduglyseal.jpg',
    'chicken.jpg',
    'heartbreakquoes.jpg',
    'sexseal.jpg',
    'dancerseal.jpg',
    'heartbreakseal.jpg',
    'danceseal.jpg',		
    'hellseal.jpg',
    'sleeping-seals.jpg',
    'death.jpg',
    'jojoseal.jpg',
    'sleepseal.jpg',
    'depressedseal.jpg',
    'somwhereseal.jpg',
    'differentseal.jpg',	
    'lateseal.jpg',
    'sparkleseal.jpg',
    'drowningseal.jpg',
    'lifeseal.jpg',
    'thinkingofyouseal.jpg',
    'einsteinseal.jpg',
    'lugubereseal.jpg',
    'tutuseal.jpg',
    'fameseal.jpg',	
    'marilynseal.jpg',
    'verysadseal.jpg'
];

const lengthfileNames = fileNames.length;

function shuffleArray (array) {
    for (var i = array.length - 1; i > 0; i--) {
        var rand = Math.floor(Math.random() * (i + 1));
        [array[i], array[rand]] = [array[rand], array[i]]
    }
}
    
const shuffleFileNames = () => {
    shuffleArray(fileNames);
}

shuffleFileNames();
