
use('odds_comparison');

db.races.updateOne(
  { course: 'Nottingham', raceTime: '1.30pm' },   
  {
    $set: {
      distance: '1m 4f',
      type: 'Hcap',
      description: 'Today at Nottingham: sample card and prices.',
      horses: [
        {
          number: 1, name: 'Thunder Moon', age: 3,
          markets: [
            { type: 'Back',     odds: { 'Boylesports': 3.30, 'Paddy Power': 3.45, 'Bet365': 3.60 }, best: 3.60 },
            { type: 'Each-Way', odds: { 'Boylesports': 3.20, 'Paddy Power': 3.30, 'Bet365': 3.35 }, best: 3.35 }
          ]
        },
        {
          number: 2, name: 'Lightning Bolt', age: 3,
          markets: [
            { type: 'Back',     odds: { 'Boylesports': 4.20, 'Paddy Power': 4.30, 'Bet365': 4.10 }, best: 4.30 },
            { type: 'Each-Way', odds: { 'Boylesports': 4.00, 'Paddy Power': 4.10, 'Bet365': 4.00 }, best: 4.10 }
          ]
        },
        {
          number: 3, name: 'Green Valley', age: 4,
          markets: [
            { type: 'Back',     odds: { 'Boylesports': 6.00, 'Paddy Power': 5.80, 'Bet365': 6.10 }, best: 6.10 },
            { type: 'Each-Way', odds: { 'Boylesports': 5.50, 'Paddy Power': 5.60, 'Bet365': 5.70 }, best: 5.70 }
          ]
        },
        {
          number: 4, name: 'Silver Arrow', age: 5,
          markets: [
            { type: 'Back',     odds: { 'Boylesports': 2.80, 'Paddy Power': 2.75, 'Bet365': 2.85 }, best: 2.85 },
            { type: 'Each-Way', odds: { 'Boylesports': 2.70, 'Paddy Power': 2.65, 'Bet365': 2.68 }, best: 2.70 }
          ]
        },
        {
          number: 5, name: 'Midnight Star', age: 3,
          markets: [
            { type: 'Back',     odds: { 'Boylesports': 9.00, 'Paddy Power': 9.20, 'Bet365': 8.80 }, best: 9.20 },
            { type: 'Each-Way', odds: { 'Boylesports': 8.50, 'Paddy Power': 8.40, 'Bet365': 8.60 }, best: 8.60 }
          ]
        }
      ]
    }
  },
  { upsert: true } // create if not exists
);

// quick check (appears in OUTPUT)
db.races.find(
  { course: 'Nottingham', raceTime: '1.30pm' },
  { projection: { course: 1, raceTime: 1, 'horses.number': 1, 'horses.name': 1 } }
).toArray();
