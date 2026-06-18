const appShell = document.getElementById('app-shell');
const landingContent = document.getElementById('landing-content');
const appClose = document.getElementById('app-close');
const appNavButtons = Array.from(document.querySelectorAll('.app-nav-item'));
const appPages = Array.from(document.querySelectorAll('.app-page'));
const loginButton = document.getElementById('login-button');
const profileBack = document.getElementById('profile-back');
const patronSearchInput = document.getElementById('patron-search-input');
const riskFilter = document.getElementById('risk-filter');
const patronSearchBody = document.getElementById('patron-search-body');
const profileName = document.getElementById('profile-name');
const profileRisk = document.getElementById('profile-risk');
const profileRiskChip = document.getElementById('profile-risk-chip');
const profileIncidents = document.getElementById('profile-incidents');
const profileBarrings = document.getElementById('profile-barrings');
const profileBarringCount = document.getElementById('profile-barring-count');
const profileVenuesList = document.getElementById('profile-venues-list');
const profileReason = document.getElementById('profile-reason');
const barringsBody = document.getElementById('barrings-body');
const complianceGrid = document.getElementById('compliance-grid');
const venueGrid = document.getElementById('venue-grid');
const activeBarrings = document.getElementById('active-barrings');
const expiringBarrings = document.getElementById('expiring-barrings');
const missingDocs = document.getElementById('missing-docs');
const highRiskPatrons = document.getElementById('high-risk-patrons');
const venueDetailName = document.getElementById('venue-detail-name');
const venueDetailRisk = document.getElementById('venue-detail-risk');
const venueDetailLocation = document.getElementById('venue-detail-location');
const venueDetailPatrons = document.getElementById('venue-detail-patrons');
const venueDetailBarrings = document.getElementById('venue-detail-barrings');
const venueDetailCompliance = document.getElementById('venue-detail-compliance');
const venueDetailNote = document.getElementById('venue-detail-note');
const venueDetailIssues = document.getElementById('venue-detail-issues');
const venueDetailBarringsList = document.getElementById('venue-detail-barrings-list');
const venueDetailComplianceList = document.getElementById('venue-detail-compliance-list');
const venueBreadcrumbCurrent = document.getElementById('venue-breadcrumb-current');
const venueDetailActions = document.getElementById('venue-detail-actions');

const venues = [
  { id: 1, name: 'Swan Port Hotel', location: 'Harbour District', risk: 'Green', barrings: 2, compliance: 1, patrons: 34, note: 'Entry flow improvements recommended.', issues: ['CCTV coverage gap'], summary: 'Stable operations with a strong security team.' },
  { id: 2, name: 'Crestview Lounge', location: 'City Centre', risk: 'Amber', barrings: 6, compliance: 3, patrons: 47, note: 'Need better radio checks for late shifts.', issues: ['Missing documentation', 'Poor staff handover'], summary: 'Medium risk due to inconsistent procedures.' },
  { id: 3, name: 'Night Harbor Club', location: 'Riverside', risk: 'Red', barrings: 8, compliance: 6, patrons: 29, note: 'Urgent review of barring records required.', issues: ['Unclear entry control', 'Evidence workflow gap'], summary: 'High risk and demanding operational environment.' },
  { id: 4, name: 'Stone Gate Tavern', location: 'West End', risk: 'Green', barrings: 1, compliance: 0, patrons: 18, note: 'Good oversight; maintain current controls.', issues: ['Minimal CCTV coverage'], summary: 'Low risk with mature process alignment.' },
  { id: 5, name: 'Harbor Gate', location: 'Seafront', risk: 'Amber', barrings: 4, compliance: 2, patrons: 24, note: 'Review staff handovers after events.', issues: ['Handover procedures', 'Barring documentation'], summary: 'Moderate risk with targeted improvement areas.' }
];

const patrons = [
  { id: 1, name: 'John Smith', venue: 'Swan Port Hotel', risk: 'Amber', incidents: ['Incident on 12 March', 'Late entry warning'], activeBarring: true, barrings: ['30-day venue barring', '12-month judicial bar', 'Incident review ban'], previousBarrings: 3, reasons: ['Aggressive behaviour', 'Failure to leave'], venues: ['Swan Port Hotel', 'Crestview Lounge'], lastIncident: '12 March' },
  { id: 2, name: 'James Carter', venue: 'Swan Port Hotel', risk: 'Green', incidents: ['Minor altercation closed on site'], activeBarring: false, barrings: [], previousBarrings: 0, reasons: ['No recorded reason'], venues: ['Swan Port Hotel'], lastIncident: '3 April' },
  { id: 3, name: 'Maya Ortiz', venue: 'Crestview Lounge', risk: 'Amber', incidents: ['Repeated late-night incidents', 'Previous security warning'], activeBarring: true, barrings: ['30-day venue barring'], previousBarrings: 1, reasons: ['Repeated late-night incidents'], venues: ['Crestview Lounge', 'Harbor Gate'], lastIncident: '21 March' },
  { id: 4, name: 'Liam Brown', venue: 'Night Harbor Club', risk: 'Red', incidents: ['Serious incident, police notified', 'Barring follow-up pending'], activeBarring: true, barrings: ['12-month venue ban'], previousBarrings: 2, reasons: ['Assault and property damage'], venues: ['Night Harbor Club'], lastIncident: '8 March' },
  { id: 5, name: 'Ava Wong', venue: 'Stone Gate Tavern', risk: 'Green', incidents: ['No recorded incidents'], activeBarring: false, barrings: [], previousBarrings: 0, reasons: ['No recorded reason'], venues: ['Stone Gate Tavern'], lastIncident: 'N/A' },
  { id: 6, name: 'Noah Patel', venue: 'Harbor Gate', risk: 'Amber', incidents: ['Security removal last month'], activeBarring: false, barrings: [], previousBarrings: 0, reasons: ['Failure to leave after repeated warnings'], venues: ['Harbor Gate', 'Swan Port Hotel'], lastIncident: '15 March' },
  { id: 7, name: 'Jade Miller', venue: 'Crestview Lounge', risk: 'Amber', incidents: ['Review initiated after repeated disturbance reports'], activeBarring: true, barrings: ['Pending barring review'], previousBarrings: 1, reasons: ['Aggressive behaviour', 'Escalation with staff'], venues: ['Crestview Lounge'], lastIncident: '10 March' }
];

const barrings = [
  { patron: 'Maya Ortiz', venue: 'Crestview Lounge', status: 'Active', reason: 'Repeat late-night incidents' },
  { patron: 'Liam Brown', venue: 'Night Harbor Club', status: 'Active', reason: 'Serious incident reported' },
  { patron: 'Jade Miller', venue: 'Crestview Lounge', status: 'Review', reason: 'Pending barring review' }
];

const complianceItems = [
  { venue: 'Swan Port Hotel', issue: 'CCTV coverage gap', status: 'Open' },
  { venue: 'Crestview Lounge', issue: 'Missing documentation', status: 'Action required' },
  { venue: 'Night Harbor Club', issue: 'Evidence workflow gap', status: 'Urgent' },
  { venue: 'Stone Gate Tavern', issue: 'Minimal CCTV coverage', status: 'Monitor' },
  { venue: 'Harbor Gate', issue: 'Handover procedures', status: 'Review' }
];

const sampleNotes = [
  'Venue risk context trending upward due to inconsistent handovers.',
  'Barrings team needs a clearer audit trail for evidence collection.',
  'Venue compliance review highlights CCTV and entry control gaps.',
  'Strong venue security posture with minimal active incidents.',
  'Suggested improvements for record-keeping and staff communication.'
];

function findVenueByName(venueName) {
  return venues.find(item => item.name === venueName) || null;
}

function findPatronByName(patronName) {
  return patrons.find(item => item.name === patronName) || null;
}

function buildVenueActions(venue, venueComplianceIssues, venueBarrings) {
  const actions = [];

  if (venueComplianceIssues.length) {
    actions.push(`Resolve ${venueComplianceIssues[0].issue.toLowerCase()} at ${venue.name}.`);
  }

  if (venueBarrings.length) {
    actions.push(`Review ${venueBarrings.length} recent barring record${venueBarrings.length > 1 ? 's' : ''} with the duty manager.`);
  }

  if (venue.risk === 'Red') {
    actions.push('Escalate to regional operations and schedule an immediate site review.');
  } else if (venue.risk === 'Amber') {
    actions.push('Confirm next-shift handover and validate mitigation steps before tonight.');
  } else {
    actions.push('Maintain controls and verify audit notes are complete before end of week.');
  }

  return actions;
}

function setActivePage(pageId) {
  appPages.forEach(page => {
    const isActive = page.id === pageId;
    page.classList.toggle('app-active', isActive);
    page.classList.toggle('hidden', !isActive);
  });
  appNavButtons.forEach(button => {
    button.classList.toggle('active', button.dataset.page === pageId);
  });
}

appClose.addEventListener('click', () => {
  appShell.classList.add('hidden');
  landingContent.classList.remove('hidden');
  window.location.hash = '';
});

appNavButtons.forEach(button => {
  button.addEventListener('click', () => {
    setActivePage(button.dataset.page);
  });
});

loginButton.addEventListener('click', () => {
  setActivePage('dashboard-page');
  populateDashboard();
});

profileBack.addEventListener('click', () => {
  setActivePage('patron-search-page');
});

function loadPatrons() {
  patronSearchBody.innerHTML = '';
  const filter = riskFilter.value;
  const query = patronSearchInput.value.toLowerCase();

  patrons.filter(patron => {
    const matchesQuery = patron.name.toLowerCase().includes(query) || patron.venue.toLowerCase().includes(query);
    const matchesRisk = filter === 'all' || patron.risk === filter;
    return matchesQuery && matchesRisk;
  }).forEach(patron => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${patron.name}</td>
      <td>${patron.venue}</td>
      <td><span class="risk-chip ${patron.risk.toLowerCase()}">${patron.risk}</span></td>
      <td>${patron.previousBarrings}</td>
      <td>${patron.lastIncident}</td>
      <td><button class="table-action" data-id="${patron.id}">View profile</button></td>
    `;
    patronSearchBody.appendChild(row);
  });
}

function renderProfile(patronId) {
  const patron = patrons.find(item => item.id === Number(patronId));
  if (!patron) return;

  profileName.textContent = patron.name;
  profileRisk.textContent = `Risk context: ${patron.risk}`;
  profileRiskChip.textContent = patron.risk;
  profileRiskChip.className = `risk-chip ${patron.risk.toLowerCase()}`;
  profileIncidents.innerHTML = patron.incidents.map(item => `<li>${item}</li>`).join('');
  profileBarrings.innerHTML = patron.barrings.length ? patron.barrings.map(item => `<li>${item}</li>`).join('') : '<li>No current barrings</li>';
  profileBarringCount.textContent = String(patron.previousBarrings);
  profileVenuesList.innerHTML = patron.venues.map(venue => `<li>${venue}</li>`).join('');
  profileReason.innerHTML = patron.reasons.map(reason => `<div>${reason}</div>`).join('');
  setActivePage('patron-profile-page');
}

function populateBarrings() {
  barringsBody.innerHTML = barrings.map(item => `
    <tr>
      <td>${item.patron}</td>
      <td>${item.venue}</td>
      <td>${item.status}</td>
      <td>${item.reason}</td>
    </tr>
  `).join('');
}

function populateCompliance() {
  complianceGrid.innerHTML = complianceItems.map(item => `
    <div class="compliance-item">
      <button class="compliance-item-button" data-venue-id="${findVenueByName(item.venue)?.id || ''}">
        <h4>${item.venue}</h4>
        <p>${item.issue}</p>
        <p class="portal-pill">${item.status}</p>
        <p class="inline-action">Open linked venue</p>
      </button>
    </div>
  `).join('');
}

function populateVenues() {
  venueGrid.innerHTML = venues.map(venue => `
    <div class="venue-item">
      <button class="venue-card-button" data-venue-id="${venue.id}">
        <h4>${venue.name}</h4>
        <p>${venue.location}</p>
        <p>${venue.summary}</p>
        <p class="portal-pill">Risk: ${venue.risk}</p>
        <p class="portal-pill">Active barrings: ${venue.barrings}</p>
      </button>
    </div>
  `).join('');

  renderVenueDetails(venues[0].id);
}

function renderVenueDetails(venueId) {
  const venue = venues.find(item => item.id === Number(venueId));
  if (!venue) return;
  const venueBarrings = barrings.filter(item => item.venue === venue.name);
  const venueComplianceIssues = complianceItems.filter(item => item.venue === venue.name);
  const venueActions = buildVenueActions(venue, venueComplianceIssues, venueBarrings);

  venueDetailName.textContent = venue.name;
  venueBreadcrumbCurrent.textContent = venue.name;
  venueDetailRisk.textContent = venue.risk;
  venueDetailRisk.className = `risk-chip ${venue.risk.toLowerCase()}`;
  venueDetailLocation.textContent = venue.location;
  venueDetailPatrons.textContent = String(venue.patrons);
  venueDetailBarrings.textContent = String(venue.barrings);
  venueDetailCompliance.textContent = String(venue.compliance);
  venueDetailNote.textContent = venue.note;
  venueDetailIssues.innerHTML = venue.issues.map(issue => `<li>${issue}</li>`).join('');
  venueDetailBarringsList.innerHTML = venueBarrings.length
    ? venueBarrings.map(item => {
      const patron = findPatronByName(item.patron);
      if (!patron) {
        return `<li>${item.patron} — ${item.reason}</li>`;
      }

      return `<li><button class="detail-list-button" data-patron-id="${patron.id}">${item.patron} — ${item.reason}<span>Open patron profile</span></button></li>`;
    }).join('')
    : '<li>No recent barrings recorded</li>';
  venueDetailComplianceList.innerHTML = venueComplianceIssues.length
    ? venueComplianceIssues.map(item => `<li>${item.issue} — ${item.status}</li>`).join('')
    : '<li>No compliance issues recorded</li>';
  venueDetailActions.innerHTML = venueActions.map(action => `<li>${action}</li>`).join('');
}

const dashboardVenues = [
  { venueId: 1, label: 'Swan Port Hotel', status: 'green' },
  { venueId: 2, label: 'Crestview Lounge', status: 'green' },
  { venueId: 3, label: 'Night Harbor Club', status: 'amber' },
  { venueId: 4, label: 'Stone Gate Tavern', status: 'red' },
  { venueId: 5, label: 'Harbor Gate', status: 'green' }
];

const recentActivity = [
  { time: '22:13', event: 'Barring added' },
  { time: '21:44', event: 'Compliance review completed' },
  { time: '20:51', event: 'Patron profile updated' },
  { time: '19:03', event: 'Incident linked to barring' }
];

function populateDashboard() {
  activeBarrings.textContent = '147';
  expiringBarrings.textContent = '12';
  missingDocs.textContent = '3';
  highRiskPatrons.textContent = '28';

  const venueStatusList = document.getElementById('venue-status-list');
  const activityList = document.getElementById('activity-list');

  venueStatusList.innerHTML = dashboardVenues.map(item => `
    <li class="venue-status-item">
      <button class="venue-status-button" data-venue-id="${item.venueId}">
        <span>${item.status === 'green' ? '🟢' : item.status === 'amber' ? '🟠' : '🔴'} ${item.label}</span>
      </button>
    </li>
  `).join('');

  activityList.innerHTML = recentActivity.map(entry => `
    <li class="activity-item">
      <span>${entry.event}</span>
      <time>${entry.time}</time>
    </li>
  `).join('');
}

function initDemo() {
  patronSearchInput.value = 'John Smith';
  loadPatrons();
  populateBarrings();
  populateCompliance();
  populateVenues();
}

document.addEventListener('click', event => {
  const target = event.target;
  if (target.matches('.table-action')) {
    renderProfile(target.dataset.id);
  }

  const detailListButton = target.closest('.detail-list-button');
  if (detailListButton) {
    renderProfile(detailListButton.dataset.patronId);
    return;
  }

  const breadcrumbButton = target.closest('.breadcrumb-button');
  if (breadcrumbButton) {
    setActivePage(breadcrumbButton.dataset.page);
    return;
  }

  const venueButton = target.closest('.venue-status-button, .venue-card-button, .compliance-item-button');
  if (venueButton) {
    const venueId = venueButton.dataset.venueId;
    const selectedVenue = venueId
      ? venues.find(item => item.id === Number(venueId))
      : null;

    if (selectedVenue) {
      renderVenueDetails(selectedVenue.id);
      setActivePage('multi-venue-page');
    }
  }
});

patronSearchInput.addEventListener('input', loadPatrons);
riskFilter.addEventListener('change', loadPatrons);

function checkHash() {
  if (window.location.hash === '#app-shell') {
    appShell.classList.remove('hidden');
    landingContent.classList.add('hidden');
    setActivePage('dashboard-page');
    populateDashboard();
  } else {
    appShell.classList.add('hidden');
    landingContent.classList.remove('hidden');
  }
}

window.addEventListener('hashchange', checkHash);

initDemo();
checkHash();
