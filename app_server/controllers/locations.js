/* GET 'home' page */
exports.homelist = (req, res) => {
  res.render('index', { 
    title: 'Nottingham Races',
    pageHeader: {
      title: 'Nottingham',
      time: '1.30pm',
      distance: '1m 4f',
      type: 'Hcap',
    },
    sidebar: 'Today at Nottingham: sample card and prices.',
    locations: [
  {
    course: 'Listowel',
    horse: '1 Thunder Moon',
    age: '3',
    back: 'Back',
    eachWay: 'Each-Way',
    bookmakers: [
      { boyle: 'Boylesports',  odds: { back: '3.30', eachWay: '3.20' } },
      { paddy: 'Paddy Power',  odds: { back: '3.45', eachWay: '3.30' } },
      { bet365: 'Bet365',      odds: { back: '3.60', eachWay: '3.35' } }
    ],
    best: { back: '3.60', eachWay: '3.35'}
  },
  {
    horse: '2 Lightning Bolt',
    age: '3',
    back: 'Back',
    eachWay: 'Each-Way',
    bookmakers: [
      { boyle: 'Boylesports',  odds: { back: '4.20', eachWay: '4.00' } },
      { paddy: 'Paddy Power',  odds: { back: '4.30', eachWay: '4.10' } },
      { bet365: 'Bet365',      odds: { back: '4.10', eachWay: '4.00' } }
    ],
    best: { back: '4.30', eachWay: '4.10' }
  },
  {
    horse: '3 Green Valley',
    age: '4',
    back: 'Back',
    eachWay: 'Each-Way',
    bookmakers: [
      { boyle: 'Boylesports',  odds: { back: '6.00', eachWay: '5.50' } },
      { paddy: 'Paddy Power',  odds: { back: '5.80', eachWay: '5.60' } },
      { bet365: 'Bet365',      odds: { back: '6.10', eachWay: '5.70' } }
    ],
    best: { back: '6.10', eachWay: '5.70' }
  },
  {
    horse: '4 Silver Arrow',
    age: '5',
    back: 'Back',
    eachWay: 'Each-Way',
    bookmakers: [
      { boyle: 'Boylesports',  odds: { back: '2.80', eachWay: '2.70' } },
      { paddy: 'Paddy Power',  odds: { back: '2.75', eachWay: '2.65' } },
      { bet365: 'Bet365',      odds: { back: '2.85', eachWay: '2.68' } }
    ],
    best: { back: '2.85', eachWay: '2.70' }
  },
  {
    horse: '5 Midnight Star',
    age: '3',
    back: 'Back',
    eachWay: 'Each-Way',
    bookmakers: [
      { boyle: 'Boylesports',  odds: { back: '9.00', eachWay: '8.50' } },
      { paddy: 'Paddy Power',  odds: { back: '9.20', eachWay: '8.40' } },
      { bet365: 'Bet365',      odds: { back: '8.80', eachWay: '8.60' } }
    ],
    best: { back: '9.20', eachWay: '8.60' }
  }
]
  });
};
