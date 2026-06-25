let BASE_RATINGS = {
  Argentina: 95, Spain: 94, France: 94, England: 92, Brazil: 92, Portugal: 90,
  Netherlands: 89, Germany: 89, Belgium: 88, Uruguay: 87, Croatia: 86,
  Colombia: 85, Switzerland: 84, Morocco: 84, Japan: 83, Mexico: 82,
  "United States": 81, Austria: 81, Denmark: 81, Sweden: 80, Norway: 80,
  Senegal: 80, Iran: 78, Canada: 78, Australia: 77, Egypt: 77, Ghana: 76,
  "South Korea": 76, "Ivory Coast": 76, Scotland: 75, Algeria: 75,
  "South Africa": 73, Turkey: 73, Paraguay: 73, Ecuador: 73, Tunisia: 72,
  "Czech Republic": 72, Qatar: 71, "Saudi Arabia": 71, Panama: 70,
  "Cape Verde": 70, "DR Congo": 70, Uzbekistan: 69, Iraq: 69,
  "New Zealand": 68, Haiti: 67, Jordan: 67, Curacao: 66,
  "Bosnia and Herzegovina": 76
};

let DISPLAY_NAMES = {
  "Czech Republic": "Czechia",
  Turkey: "Türkiye",
  "Ivory Coast": "Côte d'Ivoire",
  Curacao: "Curaçao",
  Iran: "IR Iran",
  "South Korea": "Korea Republic",
  "DR Congo": "Congo DR"
};

let GROUPS = {
  A: ["Mexico", "South Africa", "South Korea", "Czech Republic"],
  B: ["Switzerland", "Canada", "Bosnia and Herzegovina", "Qatar"],
  C: ["Brazil", "Morocco", "Scotland", "Haiti"],
  D: ["United States", "Australia", "Paraguay", "Turkey"],
  E: ["Germany", "Ivory Coast", "Ecuador", "Curacao"],
  F: ["Netherlands", "Japan", "Sweden", "Tunisia"],
  G: ["Egypt", "Iran", "Belgium", "New Zealand"],
  H: ["Spain", "Uruguay", "Cape Verde", "Saudi Arabia"],
  I: ["France", "Norway", "Senegal", "Iraq"],
  J: ["Argentina", "Austria", "Algeria", "Jordan"],
  K: ["Colombia", "Portugal", "DR Congo", "Uzbekistan"],
  L: ["England", "Ghana", "Croatia", "Panama"]
};

let PLAYED_MATCHES = [
  ["A", "2026-06-11", "Mexico", 2, "South Africa", 0],
  ["A", "2026-06-11", "South Korea", 2, "Czech Republic", 1],
  ["A", "2026-06-18", "Czech Republic", 1, "South Africa", 1],
  ["A", "2026-06-18", "Mexico", 1, "South Korea", 0],
  ["A", "2026-06-24", "Czech Republic", 0, "Mexico", 3],
  ["A", "2026-06-24", "South Africa", 1, "South Korea", 0],

  ["B", "2026-06-12", "Canada", 1, "Bosnia and Herzegovina", 1],
  ["B", "2026-06-13", "Qatar", 1, "Switzerland", 1],
  ["B", "2026-06-18", "Canada", 6, "Qatar", 0],
  ["B", "2026-06-18", "Switzerland", 4, "Bosnia and Herzegovina", 1],
  ["B", "2026-06-24", "Switzerland", 2, "Canada", 1],
  ["B", "2026-06-24", "Bosnia and Herzegovina", 3, "Qatar", 1],

  ["C", "2026-06-13", "Brazil", 1, "Morocco", 1],
  ["C", "2026-06-13", "Haiti", 0, "Scotland", 1],
  ["C", "2026-06-19", "Brazil", 3, "Haiti", 0],
  ["C", "2026-06-19", "Morocco", 1, "Scotland", 0],
  ["C", "2026-06-24", "Scotland", 0, "Brazil", 3],
  ["C", "2026-06-24", "Morocco", 4, "Haiti", 2],

  ["D", "2026-06-12", "United States", 4, "Paraguay", 1],
  ["D", "2026-06-13", "Australia", 2, "Turkey", 0],
  ["D", "2026-06-19", "United States", 2, "Australia", 0],
  ["D", "2026-06-19", "Turkey", 0, "Paraguay", 1],

  ["E", "2026-06-14", "Germany", 7, "Curacao", 1],
  ["E", "2026-06-14", "Ivory Coast", 1, "Ecuador", 0],
  ["E", "2026-06-20", "Germany", 2, "Ivory Coast", 1],
  ["E", "2026-06-20", "Ecuador", 0, "Curacao", 0],

  ["F", "2026-06-14", "Netherlands", 2, "Japan", 2],
  ["F", "2026-06-14", "Sweden", 5, "Tunisia", 1],
  ["F", "2026-06-20", "Netherlands", 5, "Sweden", 1],
  ["F", "2026-06-20", "Tunisia", 0, "Japan", 4],

  ["G", "2026-06-15", "Belgium", 1, "Egypt", 1],
  ["G", "2026-06-15", "Iran", 2, "New Zealand", 2],
  ["G", "2026-06-21", "Belgium", 0, "Iran", 0],
  ["G", "2026-06-21", "New Zealand", 1, "Egypt", 3],

  ["H", "2026-06-15", "Spain", 0, "Cape Verde", 0],
  ["H", "2026-06-15", "Saudi Arabia", 1, "Uruguay", 1],
  ["H", "2026-06-21", "Spain", 4, "Saudi Arabia", 0],
  ["H", "2026-06-21", "Uruguay", 2, "Cape Verde", 2],

  ["I", "2026-06-16", "France", 3, "Senegal", 1],
  ["I", "2026-06-16", "Norway", 4, "Iraq", 1],
  ["I", "2026-06-22", "France", 3, "Iraq", 0],
  ["I", "2026-06-22", "Norway", 3, "Senegal", 2],

  ["J", "2026-06-16", "Argentina", 3, "Algeria", 0],
  ["J", "2026-06-16", "Austria", 3, "Jordan", 1],
  ["J", "2026-06-22", "Argentina", 2, "Austria", 0],
  ["J", "2026-06-22", "Jordan", 1, "Algeria", 2],

  ["K", "2026-06-17", "Portugal", 1, "DR Congo", 1],
  ["K", "2026-06-17", "Uzbekistan", 1, "Colombia", 3],
  ["K", "2026-06-23", "Portugal", 5, "Uzbekistan", 0],
  ["K", "2026-06-23", "Colombia", 1, "DR Congo", 0],

  ["L", "2026-06-17", "England", 4, "Croatia", 2],
  ["L", "2026-06-17", "Ghana", 1, "Panama", 0],
  ["L", "2026-06-23", "England", 0, "Ghana", 0],
  ["L", "2026-06-23", "Panama", 0, "Croatia", 1]
].map(toMatch);

let FUTURE_FIXTURES = [
  ["D", "2026-06-25", "Turkey", "United States"],
  ["D", "2026-06-25", "Paraguay", "Australia"],
  ["E", "2026-06-25", "Curacao", "Ivory Coast"],
  ["E", "2026-06-25", "Ecuador", "Germany"],
  ["F", "2026-06-25", "Japan", "Sweden"],
  ["F", "2026-06-25", "Tunisia", "Netherlands"],
  ["I", "2026-06-26", "Norway", "France"],
  ["I", "2026-06-26", "Senegal", "Iraq"],
  ["G", "2026-06-26", "Egypt", "Iran"],
  ["G", "2026-06-26", "New Zealand", "Belgium"],
  ["H", "2026-06-26", "Cape Verde", "Saudi Arabia"],
  ["H", "2026-06-26", "Uruguay", "Spain"],
  ["L", "2026-06-27", "Panama", "England"],
  ["L", "2026-06-27", "Croatia", "Ghana"],
  ["J", "2026-06-27", "Algeria", "Austria"],
  ["J", "2026-06-27", "Jordan", "Argentina"],
  ["K", "2026-06-27", "Colombia", "Portugal"],
  ["K", "2026-06-27", "DR Congo", "Uzbekistan"]
].map(([group, date, home, away]) => ({ group, date, home, away, played: false }));

let ALL_TEAMS = Object.values(GROUPS).flat().sort((a, b) => a.localeCompare(b));

const els = {
  teamA: document.querySelector("#teamA"),
  teamB: document.querySelector("#teamB"),
  scoreA: document.querySelector("#scoreA"),
  scoreB: document.querySelector("#scoreB"),
  insight: document.querySelector("#matchInsight"),
  teamAWinLabel: document.querySelector("#teamAWinLabel"),
  teamBWinLabel: document.querySelector("#teamBWinLabel"),
  teamAWinPct: document.querySelector("#teamAWinPct"),
  teamBWinPct: document.querySelector("#teamBWinPct"),
  drawPct: document.querySelector("#drawPct"),
  scorelineOdds: document.querySelector("#scorelineOdds"),
  countryList: document.querySelector("#countryList"),
  countrySearch: document.querySelector("#countrySearch"),
  groupTables: document.querySelector("#groupTables"),
  fixtures: document.querySelector("#fixtureList"),
  bracket: document.querySelector("#bracket"),
  champion: document.querySelector("#championName"),
  runner: document.querySelector("#runnerUpName"),
  count: document.querySelector("#countryCount")
};

async function loadTournamentData() {
  try {
    const response = await fetch(`data.json?updated=${Date.now()}`);
    if (!response.ok) return;
    const data = await response.json();
    BASE_RATINGS = data.baseRatings || BASE_RATINGS;
    DISPLAY_NAMES = data.displayNames || DISPLAY_NAMES;
    GROUPS = data.groups || GROUPS;
    PLAYED_MATCHES = (data.playedMatches || []).map(toMatch);
    FUTURE_FIXTURES = (data.futureFixtures || []).map(([group, date, home, away]) => ({ group, date, home, away, played: false }));
    ALL_TEAMS = Object.values(GROUPS).flat().sort((a, b) => a.localeCompare(b));
    const snapshot = document.querySelector(".snapshot");
    if (data.snapshotLabel && snapshot) snapshot.textContent = data.snapshotLabel;
  } catch {
    // Local file previews may block fetch; the built-in fallback data keeps the app usable.
  }
}

function toMatch([group, date, home, homeGoals, away, awayGoals]) {
  return { group, date, home, away, homeGoals, awayGoals, played: true };
}

function blankStanding(team, group) {
  return { team, group, played: 0, wins: 0, draws: 0, losses: 0, gf: 0, ga: 0, gd: 0, pts: 0 };
}

function addMatchToTable(table, match) {
  const home = table[match.home];
  const away = table[match.away];
  home.played += 1;
  away.played += 1;
  home.gf += match.homeGoals;
  home.ga += match.awayGoals;
  away.gf += match.awayGoals;
  away.ga += match.homeGoals;
  home.gd = home.gf - home.ga;
  away.gd = away.gf - away.ga;

  if (match.homeGoals > match.awayGoals) {
    home.wins += 1;
    away.losses += 1;
    home.pts += 3;
  } else if (match.homeGoals < match.awayGoals) {
    away.wins += 1;
    home.losses += 1;
    away.pts += 3;
  } else {
    home.draws += 1;
    away.draws += 1;
    home.pts += 1;
    away.pts += 1;
  }
}

function buildTables(matches = PLAYED_MATCHES) {
  const tables = {};
  Object.entries(GROUPS).forEach(([group, teams]) => {
    tables[group] = Object.fromEntries(teams.map(team => [team, blankStanding(team, group)]));
  });
  matches.forEach(match => addMatchToTable(tables[match.group], match));
  return Object.fromEntries(Object.entries(tables).map(([group, rows]) => [
    group,
    Object.values(rows).sort(sortStandings)
  ]));
}

function sortStandings(a, b) {
  return b.pts - a.pts || b.gd - a.gd || b.gf - a.gf || getStrength(b.team) - getStrength(a.team);
}

function teamStanding(team, tables = buildTables()) {
  return Object.values(tables).flat().find(row => row.team === team);
}

function recentMatches(team) {
  return PLAYED_MATCHES
    .filter(match => match.home === team || match.away === team)
    .sort((a, b) => a.date.localeCompare(b.date))
    .map(match => {
      const isHome = match.home === team;
      const gf = isHome ? match.homeGoals : match.awayGoals;
      const ga = isHome ? match.awayGoals : match.homeGoals;
      const opponent = isHome ? match.away : match.home;
      const result = gf > ga ? "W" : gf < ga ? "L" : "D";
      return `${result} ${gf}-${ga} vs ${opponent}`;
    });
}

function getStrength(team) {
  const row = teamStanding(team);
  const base = BASE_RATINGS[team] || 72;
  if (!row || row.played === 0) return base;
  const pointsPerGame = row.pts / row.played;
  const attack = row.gf / row.played;
  const defense = row.ga / row.played;
  return base + pointsPerGame * 3.2 + row.gd * 0.9 + attack * 1.1 - defense * 0.7;
}

function hashPair(a, b) {
  return [...`${a}|${b}`].reduce((sum, char) => sum + char.charCodeAt(0), 0);
}

function predictScore(teamA, teamB, knockout = false) {
  const { expectedA, expectedB } = expectedGoals(teamA, teamB);

  let scoreA = Math.max(0, Math.round(expectedA));
  let scoreB = Math.max(0, Math.round(expectedB));

  if (knockout && scoreA === scoreB) {
    if (strengthA >= strengthB) scoreA += 1;
    else scoreB += 1;
  }

  const winner = scoreA > scoreB ? teamA : scoreB > scoreA ? teamB : null;
  return { scoreA, scoreB, winner, expectedA, expectedB };
}

function expectedGoals(teamA, teamB) {
  const strengthA = getStrength(teamA);
  const strengthB = getStrength(teamB);
  const formA = teamStanding(teamA);
  const formB = teamStanding(teamB);
  const gap = strengthA - strengthB;
  const wrinkle = ((hashPair(teamA, teamB) % 7) - 3) * 0.08;
  const avgA = formA?.played ? formA.gf / formA.played : 1.2;
  const avgB = formB?.played ? formB.gf / formB.played : 1.2;
  let expectedA = 1.2 + gap / 35 + avgA * 0.22 - (formB?.ga || 2) * 0.08 + wrinkle;
  let expectedB = 1.2 - gap / 35 + avgB * 0.22 - (formA?.ga || 2) * 0.08 - wrinkle;
  expectedA = Math.max(0.2, Math.min(4.5, expectedA));
  expectedB = Math.max(0.2, Math.min(4.5, expectedB));
  return { expectedA, expectedB };
}

function poissonProbability(goals, lambda) {
  let factorial = 1;
  for (let value = 2; value <= goals; value += 1) factorial *= value;
  return (Math.exp(-lambda) * lambda ** goals) / factorial;
}

function scorelineProbabilities(teamA, teamB) {
  const { expectedA, expectedB } = expectedGoals(teamA, teamB);
  const scorelines = [];
  let homeWin = 0;
  let draw = 0;
  let awayWin = 0;

  for (let goalsA = 0; goalsA <= 6; goalsA += 1) {
    for (let goalsB = 0; goalsB <= 6; goalsB += 1) {
      const probability = poissonProbability(goalsA, expectedA) * poissonProbability(goalsB, expectedB);
      scorelines.push({ goalsA, goalsB, probability });
      if (goalsA > goalsB) homeWin += probability;
      else if (goalsA < goalsB) awayWin += probability;
      else draw += probability;
    }
  }

  const total = homeWin + draw + awayWin;
  return {
    homeWin: homeWin / total,
    draw: draw / total,
    awayWin: awayWin / total,
    scorelines: scorelines
      .map(item => ({ ...item, probability: item.probability / total }))
      .sort((a, b) => b.probability - a.probability)
      .slice(0, 8)
  };
}

function completeGroupStage() {
  const predictions = FUTURE_FIXTURES.map(fixture => {
    const prediction = predictScore(fixture.home, fixture.away);
    return {
      ...fixture,
      played: true,
      homeGoals: prediction.scoreA,
      awayGoals: prediction.scoreB,
      predicted: true
    };
  });
  const matches = [...PLAYED_MATCHES, ...predictions];
  return { predictions, tables: buildTables(matches) };
}

function qualifiersFromTables(tables) {
  const automatic = [];
  const thirds = [];
  Object.keys(tables).sort().forEach(group => {
    automatic.push(tables[group][0], tables[group][1]);
    thirds.push(tables[group][2]);
  });
  return [...automatic, ...thirds.sort(sortStandings).slice(0, 8)].sort(sortStandings);
}

function simulateKnockout(qualifiers) {
  let matches = qualifiers.map(row => row.team);
  let pairs = Array.from({ length: matches.length / 2 }, (_, index) => [matches[index], matches[matches.length - 1 - index]]);
  const rounds = [];
  const roundNames = ["Round of 32", "Round of 16", "Quarterfinals", "Semifinals", "Final"];

  while (pairs.length) {
    const round = pairs.map(([home, away]) => {
      const p = predictScore(home, away, true);
      return { home, away, homeGoals: p.scoreA, awayGoals: p.scoreB, winner: p.winner };
    });
    rounds.push({ name: roundNames[rounds.length], matches: round });
    const winners = round.map(match => match.winner);
    if (winners.length === 1) break;
    pairs = Array.from({ length: winners.length / 2 }, (_, index) => [winners[index * 2], winners[index * 2 + 1]]);
  }

  return rounds;
}

function renderOptions() {
  els.teamA.innerHTML = ALL_TEAMS.map(team => `<option value="${team}">${displayTeam(team)}</option>`).join("");
  els.teamB.innerHTML = ALL_TEAMS.map(team => `<option value="${team}">${displayTeam(team)}</option>`).join("");
  els.teamA.value = "Argentina";
  els.teamB.value = "France";
  els.count.textContent = ALL_TEAMS.length;
}

function renderCountries() {
  const query = els.countrySearch.value.trim().toLowerCase();
  const tables = buildTables();
  const rows = Object.values(tables).flat()
    .sort((a, b) => a.team.localeCompare(b.team))
    .filter(row => `${row.team} ${displayTeam(row.team)}`.toLowerCase().includes(query));

  els.countryList.innerHTML = rows.map(row => {
    const form = recentMatches(row.team).slice(-3).join(" | ") || "No matches played yet";
    return `
      <article class="country-row">
        <div>
          <strong>${displayTeam(row.team)}</strong>
          <span>Group ${row.group} | ${row.pts} pts, ${row.gf}-${row.ga}, GD ${signed(row.gd)}</span>
          <span>Last games: ${form}</span>
        </div>
        <div class="rating-pill">${Math.round(getStrength(row.team))}</div>
      </article>
    `;
  }).join("");
}

function renderTables(tables = buildTables()) {
  els.groupTables.innerHTML = Object.entries(tables).map(([group, rows]) => `
    <article class="group-card">
      <h3>Group ${group}</h3>
      <table>
        <thead>
          <tr><th>Team</th><th>P</th><th>W</th><th>D</th><th>L</th><th>GD</th><th>Pts</th></tr>
        </thead>
        <tbody>
          ${rows.map(row => `
            <tr>
              <td>${displayTeam(row.team)}</td>
              <td>${row.played}</td>
              <td>${row.wins}</td>
              <td>${row.draws}</td>
              <td>${row.losses}</td>
              <td>${signed(row.gd)}</td>
              <td><strong>${row.pts}</strong></td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </article>
  `).join("");
}

function renderFixtures(predictions = []) {
  const predictedMap = new Map(predictions.map(match => [`${match.home}-${match.away}`, match]));
  els.fixtures.innerHTML = FUTURE_FIXTURES.map(fixture => {
    const match = predictedMap.get(`${fixture.home}-${fixture.away}`);
    const score = match ? `${match.homeGoals}-${match.awayGoals}` : "not simulated";
    return `
      <article class="fixture-card">
        <strong>${displayTeam(fixture.home)} vs ${displayTeam(fixture.away)}</strong>
        <span>Group ${fixture.group} | ${fixture.date}</span>
        <span>Prediction: <b>${score}</b></span>
      </article>
    `;
  }).join("");
}

function renderBracket(rounds = []) {
  els.bracket.innerHTML = rounds.map(round => `
    <h3 class="round-title">${round.name}</h3>
    ${round.matches.map(match => `
      <article class="match-card">
        <strong>${displayTeam(match.home)} ${match.homeGoals}-${match.awayGoals} ${displayTeam(match.away)}</strong>
        <span>Winner: <b class="winner">${displayTeam(match.winner)}</b></span>
      </article>
    `).join("")}
  `).join("");
}

function predictSelectedMatch() {
  const teamA = els.teamA.value;
  const teamB = els.teamB.value;
  if (teamA === teamB) {
    els.insight.textContent = "Pick two different countries.";
    renderEmptyOdds();
    return;
  }
  const prediction = predictScore(teamA, teamB);
  els.scoreA.textContent = prediction.scoreA;
  els.scoreB.textContent = prediction.scoreB;
  const winnerText = prediction.winner ? `${displayTeam(prediction.winner)} edge the prediction` : "Projected draw";
  els.insight.textContent = `${winnerText}. Current form and group stats are included in the score model.`;
  renderMatchOdds(teamA, teamB);
}

function renderMatchOdds(teamA, teamB) {
  const odds = scorelineProbabilities(teamA, teamB);
  els.teamAWinLabel.textContent = `${displayTeam(teamA)} win`;
  els.teamBWinLabel.textContent = `${displayTeam(teamB)} win`;
  els.teamAWinPct.textContent = formatPercent(odds.homeWin);
  els.drawPct.textContent = formatPercent(odds.draw);
  els.teamBWinPct.textContent = formatPercent(odds.awayWin);
  els.scorelineOdds.innerHTML = odds.scorelines.map(scoreline => `
    <article class="scoreline-card">
      <strong>${scoreline.goalsA}-${scoreline.goalsB}</strong>
      <span>${formatPercent(scoreline.probability)}</span>
    </article>
  `).join("");
}

function renderEmptyOdds() {
  els.teamAWinLabel.textContent = "Team A win";
  els.teamBWinLabel.textContent = "Team B win";
  els.teamAWinPct.textContent = "-";
  els.drawPct.textContent = "-";
  els.teamBWinPct.textContent = "-";
  els.scorelineOdds.innerHTML = "";
}

function simulateTournament() {
  const { predictions, tables } = completeGroupStage();
  const qualifiers = qualifiersFromTables(tables);
  const rounds = simulateKnockout(qualifiers);
  const final = rounds.at(-1).matches[0];
  const runner = final.winner === final.home ? final.away : final.home;
  els.champion.textContent = displayTeam(final.winner);
  els.runner.textContent = displayTeam(runner);
  renderTables(tables);
  renderFixtures(predictions);
  renderBracket(rounds);
}

function signed(value) {
  return value > 0 ? `+${value}` : `${value}`;
}

function formatPercent(value) {
  return `${(value * 100).toFixed(1)}%`;
}

function displayTeam(team) {
  return DISPLAY_NAMES[team] || team;
}

function reset() {
  els.champion.textContent = "Not simulated yet";
  els.runner.textContent = "-";
  els.scoreA.textContent = "-";
  els.scoreB.textContent = "-";
  els.insight.textContent = "Choose two countries to predict a match score.";
  renderEmptyOdds();
  renderTables();
  renderFixtures();
  renderBracket();
}

document.querySelector("#predictMatch").addEventListener("click", predictSelectedMatch);
document.querySelector("#simulateTournament").addEventListener("click", simulateTournament);
document.querySelector("#resetSim").addEventListener("click", reset);
els.teamA.addEventListener("change", predictSelectedMatch);
els.teamB.addEventListener("change", predictSelectedMatch);
els.countrySearch.addEventListener("input", renderCountries);

async function startApp() {
  await loadTournamentData();
  renderOptions();
  renderCountries();
  renderTables();
  renderFixtures();
  predictSelectedMatch();
}

startApp();
