// Toggle Sidebar
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('collapsed');
}

// Adjust Font Size
function adjustFontSize(level) {
  const root = document.documentElement;
  const currentSize = parseFloat(getComputedStyle(root).fontSize);
  if (level === -1) {
    root.style.fontSize = `${Math.max(currentSize - 2, 12)}px`;
  } else if (level === 1) {
    root.style.fontSize = `${Math.min(currentSize + 2, 24)}px`;
  } else {
    root.style.fontSize = `16px`; // Reset to default
  }
}


// Function to dynamically load content into the main content area
function loadContent(page) {
  const mainContent = document.querySelector('.main-content');
  const contentMap = {
    profile: `
      <h1 class="display-5">User Profile Overview</h1>
      <p class="lead">Here you can view and update your profile details.</p>
      <ul>
        <li><strong>Name:</strong>Devansh Sanghi</li>
        <li><strong>Email:</strong> johndoe@example.com</li>
        <li><strong>Phone:</strong> +1234567890</li>
      </ul>
    `,
    application: `
      <h1 class="display-5">Application Status Summary</h1>
      <p class="lead">View the current status of your job applications.</p>
      <ul>
        <li><strong>Application #1:</strong> Pending Review</li>
        <li><strong>Application #2:</strong> Interview Scheduled</li>
        <li><strong>Application #3:</strong> Hired</li>
      </ul>
    `,
    dates: `
      <h1 class="display-5">Upcoming Important Dates</h1>
      <p class="lead">Don't miss these upcoming events:</p>
      <ul>
        <li><strong>Skill Training:</strong> December 5, 2024</li>
        <li><strong>Job Fair:</strong> December 10, 2024</li>
        <li><strong>Interview Round:</strong> December 15, 2024</li>
      </ul>
    `,
    jobs: `
      <h1 class="display-5">Job Listing Feed</h1>
      <p class="lead">Explore job opportunities that match your skills.</p>
      <ul>
        <li><strong>Software Engineer:</strong> Google</li>
        <li><strong>Data Analyst:</strong> Microsoft</li>
        <li><strong>Web Developer:</strong> Meta</li>
      </ul>
    `,
    skills: `
      <h1 class="display-5">Skills Training Program</h1>
      <p class="lead">Learn new skills to improve your career opportunities.</p>
      <ul>
        <li><strong>Course:</strong> Advanced JavaScript</li>
        <li><strong>Course:</strong> Data Science Fundamentals</li>
        <li><strong>Course:</strong> UI/UX Design Mastery</li>
      </ul>
    `,
    notifications: `
      <h1 class="display-5">Notification Center</h1>
      <p class="lead">Stay updated with the latest notifications:</p>
      <ul>
        <li><strong>Message:</strong> Your application has been approved.</li>
        <li><strong>Message:</strong> Reminder: Job fair on December 10.</li>
        <li><strong>Message:</strong> New training course available: React.js</li>
      </ul>
    `,
    resources: `
      <h1 class="display-5">Quick Access to Resources</h1>
      <p class="lead">Find important resources below:</p>
      <ul>
        <li><a href="#">Resume Templates</a></li>
        <li><a href="#">Interview Preparation Guide</a></li>
        <li><a href="#">Skill Assessment Tests</a></li>
      </ul>
    `,
    support: `
      <h1 class="display-5">Support & Assistance</h1>
      <p class="lead">We're here to help. Contact us for support.</p>
      <ul>
        <li><strong>Email:</strong> support@udhyogsaarthi.com</li>
        <li><strong>Phone:</strong> +18001234567</li>
        <li><strong>Live Chat:</strong> Available 24/7</li>
      </ul>
    `,
    logout: `
      <h1 class="display-5">Logout</h1>
      <p class="lead">You have successfully logged out. See you again!</p>
    `,
  };

  mainContent.innerHTML = contentMap[page] || `<h1 class="display-5">Page Not Found</h1>`;
}

document.querySelector('.search-input').addEventListener('input', (event) => {
  const suggestions = document.getElementById('search-suggestions');
  if (event.target.value.length > 0) {
    suggestions.classList.remove('visually-hidden'); // Show suggestions
  } else {
    suggestions.classList.add('visually-hidden'); // Hide suggestions
  }
});

// Optionally, close suggestions on blur
document.querySelector('.search-input').addEventListener('blur', () => {
  setTimeout(() => {
    document.getElementById('search-suggestions').classList.add('visually-hidden');
  }, 100); // Delay to allow clicking on a suggestion
});
document.querySelectorAll('.nav-item').forEach((item) => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    const contentArea = document.querySelector('.main-content');

    // Clear previous content
    contentArea.innerHTML = '';

    if (e.target.innerText === 'User Profile Overview') {
      contentArea.innerHTML = `
        <div class="container py-5">
          <h1 class="display-5 text-primary mb-4">User Profile Overview</h1>
          <div class="row">
            <!-- Profile Information -->
            <div class="col-md-4">
              <div class="card shadow">
                <img src="photo.jpg" alt="Profile Photo" class="card-img-top rounded-circle p-3">
                <div class="card-body text-center">
                  <h3 class="card-title">Devansh Sanghi</h3>
                  <p class="text-muted">Age: 20</p>
                  <p>📞 Phone: +91-9414004645</p>
                  <p>📧 Email: devanshsanghi001@gmail.com </p>
                  <p>💼 Job Preferences: IT, Onsite</p>
                </div>
              </div>
            </div>

            <!-- Progress Indicator -->
            <div class="col-md-8">
              <div class="mb-4">
                <h4>Progress Overview</h4>
                <div class="progress mb-2" style="height: 20px;">
                  <div class="progress-bar bg-success" style="width: 75%;">75% Completed</div>
                </div>
                <p class="text-muted">Courses: 5/6 completed | Applications: 4/5 submitted</p>
              </div>

              <!-- Achievements -->
              <div class="mb-4">
                <h4>Achievements</h4>
                <ul class="list-group">
                  <li class="list-group-item">🏆 Completed Advanced Python Training</li>
                  <li class="list-group-item">🎓 Earned Certification: Data Science Basics</li>
                  <li class="list-group-item">💡 Skills Badge: Problem-Solving</li>
                </ul>
              </div>

              <!-- Edit Profile -->
              <div class="mt-3">
                <button class="btn btn-primary me-2">Edit Profile</button>
                <button class="btn btn-secondary">Set Job Preferences</button>
              </div>
            </div>
          </div>

          <!-- Accessibility Options -->
          <div class="mt-5">
            <h4>Accessibility Options</h4>
            <button class="btn btn-outline-primary me-2" onclick="adjustFontSize(-1)">A-</button>
            <button class="btn btn-outline-primary me-2" onclick="adjustFontSize(0)">A</button>
            <button class="btn btn-outline-primary me-2" onclick="adjustFontSize(1)">A+</button>
            <button class="btn btn-outline-dark" onclick="toggleHighContrast()">Toggle High Contrast</button>
          </div>
        </div>
      `;
    }
  });
});

// High Contrast Mode
function toggleHighContrast() {
  document.body.classList.toggle('high-contrast');
}



document.querySelectorAll('.nav-item').forEach((item) => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    const contentArea = document.querySelector('.main-content');

    // Clear previous content
    contentArea.innerHTML = '';

    if (e.target.innerText === 'Application Status Summary') {
      contentArea.innerHTML = `
        <div class="container py-5">
          <h1 class="display-5 text-primary mb-4">Application Status Summary</h1>

          <!-- Filters and Search -->
          <div class="d-flex justify-content-between mb-4">
            <div>
              <select class="form-select me-2" style="width: 200px;" aria-label="Filter by Status">
                <option value="all" selected>All Applications</option>
                <option value="pending">Pending</option>
                <option value="in-review">In Review</option>
                <option value="accepted">Accepted</option>
              </select>
            </div>
            <div>
              <input type="text" id="searchApplications" class="form-control" placeholder="Search applications" style="width: 250px;">
            </div>
          </div>

          <!-- Applications Table -->
          <table class="table table-bordered table-hover">
            <thead class="table-light">
              <tr>
                <th>#</th>
                <th>Job/Course Name</th>
                <th>Company/Institution</th>
                <th>Date Applied</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody id="applicationsTable">
              <tr>
                <td>1</td>
                <td>Software Developer</td>
                <td>TechCorp</td>
                <td>2024-11-15</td>
                <td><span class="badge bg-warning">Pending</span></td>
                <td><button class="btn btn-primary btn-sm">View Details</button></td>
              </tr>
              <tr>
                <td>2</td>
                <td>Data Analyst</td>
                <td>DataWorks</td>
                <td>2024-11-10</td>
                <td><span class="badge bg-info">In Review</span></td>
                <td><button class="btn btn-primary btn-sm">View Details</button></td>
              </tr>
              <tr>
                <td>3</td>
                <td>Web Designer</td>
                <td>Creative Agency</td>
                <td>2024-11-01</td>
                <td><span class="badge bg-success">Accepted</span></td>
                <td><button class="btn btn-primary btn-sm">View Details</button></td>
              </tr>
            </tbody>
          </table>

          <!-- Highlight Actions Required -->
          <div class="mt-5">
            <h4>Actions Required</h4>
            <p class="text-muted">No actions required at the moment. Check your pending applications for updates.</p>
          </div>
        </div>
      `;

      // Attach event listeners for filters or search (optional functionality)
      document.getElementById('searchApplications').addEventListener('input', filterApplications);
    }
  });
});

// Filter/Search Applications Function (Optional)
function filterApplications() {
  const searchQuery = document.getElementById('searchApplications').value.toLowerCase();
  const rows = document.querySelectorAll('#applicationsTable tr');

  rows.forEach((row) => {
    const cells = row.querySelectorAll('td');
    const text = Array.from(cells).map((cell) => cell.innerText.toLowerCase()).join(' ');
    row.style.display = text.includes(searchQuery) ? '' : 'none';
  });
}
document.addEventListener('click', (event) => {
  if (event.target.classList.contains('btn-primary')) {
    const button = event.target;
    const row = button.closest('tr');
    const jobName = row.querySelector('td:nth-child(2)').innerText;
    const companyName = row.querySelector('td:nth-child(3)').innerText;
    const applicationStatus = row.querySelector('td:nth-child(5) span').innerText;

    // Dynamically update content with detailed view
    const contentArea = document.querySelector('.main-content');
    contentArea.innerHTML = `
      <div class="container py-5">
        <h1 class="display-5 text-primary mb-4">${jobName} - Details</h1>
        <p class="lead"><strong>Company:</strong> ${companyName}</p>
        <p><strong>Status:</strong> <span class="badge ${
          applicationStatus === 'Pending'
            ? 'bg-warning'
            : applicationStatus === 'In Review'
            ? 'bg-info'
            : 'bg-success'
        }">${applicationStatus}</span></p>
        
        <h3 class="mt-4">Timeline</h3>
        <ul class="timeline">
          <li><strong>Applied:</strong> 2024-11-01</li>
          <li><strong>Interview:</strong> Scheduled for 2024-12-01</li>
          <li><strong>Offer:</strong> Pending</li>
        </ul>

        <h3 class="mt-4">Documents</h3>
        <ul class="list-unstyled">
          <li><a href="#" class="text-decoration-none"><i class="fa fa-file me-2"></i>Resume.pdf</a></li>
          <li><a href="#" class="text-decoration-none"><i class="fa fa-file me-2"></i>CoverLetter.docx</a></li>
        </ul>

        <div class="mt-4">
          <button class="btn btn-secondary" onclick="goBack()">Back to Applications</button>
        </div>
      </div>
    `;
  }
});

// Function to go back to Applications Summary
function goBack() {
  const contentArea = document.querySelector('.main-content');
  contentArea.innerHTML = ''; // Clear the content
  document.querySelector('.nav-item[href="#applications"]').click(); // Trigger Applications content
}





document.querySelectorAll('.nav-item').forEach((item) => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    const contentArea = document.querySelector('.main-content');

    // Clear previous content
    contentArea.innerHTML = '';

    if (e.target.innerText === 'Upcoming Important Dates') {
      contentArea.innerHTML = `
        <div class="container py-5">
          <h1 class="display-5 text-primary mb-4">Upcoming Important Dates</h1>

          <!-- Calendar Widget -->
          <div class="row">
            <div class="col-lg-8">
              <div id="calendar" class="border rounded p-3 mb-4"></div>
            </div>

            <!-- Event List -->
            <div class="col-lg-4">
              <h4>Event List</h4>
              <ul id="eventList" class="list-group">
                <li class="list-group-item" onclick="showEventDetails('Interview', '2024-12-01', 'Zoom, 10:00 AM')">
                  <strong>Interview</strong> - December 1, 2024
                </li>
                <li class="list-group-item" onclick="showEventDetails('Course Deadline', '2024-12-05', 'Complete ReactJS Course')">
                  <strong>Course Deadline</strong> - December 5, 2024
                </li>
                <li class="list-group-item" onclick="showEventDetails('Job Fair', '2024-12-10', 'Convention Center, 9:00 AM')">
                  <strong>Job Fair</strong> - December 10, 2024
                </li>
              </ul>
            </div>
          </div>

          <!-- Add Reminder -->
          <div class="mt-4">
            <h4>Add Reminder</h4>
            <form id="reminderForm" class="d-flex">
              <input type="text" id="reminderText" class="form-control me-2" placeholder="Reminder text..." required>
              <button type="submit" class="btn btn-primary">Set Reminder</button>
            </form>
          </div>

          <!-- Event Details Section -->
          <div id="eventDetails" class="mt-5 visually-hidden">
            <h4>Event Details</h4>
            <p id="eventDetailsText" class="text-muted"></p>
          </div>
        </div>
      `;

      // Initialize the calendar widget
      initializeCalendar();
    }
  });
});

// Initialize Calendar Widget
function initializeCalendar() {
  const calendarEl = document.getElementById('calendar');
  calendarEl.innerHTML = `
    <h5 class="text-center">December 2024</h5>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>Sun</th>
          <th>Mon</th>
          <th>Tue</th>
          <th>Wed</th>
          <th>Thu</th>
          <th>Fri</th>
          <th>Sat</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td><td></td><td></td><td></td><td></td><td class="event-day">1</td><td>2</td>
        </tr>
        <tr>
          <td>3</td><td>4</td><td class="event-day">5</td><td>6</td><td>7</td><td>8</td><td>9</td>
        </tr>
        <tr>
          <td class="event-day">10</td><td>11</td><td>12</td><td>13</td><td>14</td><td>15</td><td>16</td>
        </tr>
      </tbody>
    </table>
  `;

  // Add event-day click event to display details
  document.querySelectorAll('.event-day').forEach((day) => {
    day.addEventListener('click', () => {
      const event = {
        '1': 'Interview - Zoom, 10:00 AM',
        '5': 'Course Deadline - Complete ReactJS Course',
        '10': 'Job Fair - Convention Center, 9:00 AM',
      }[day.textContent];

      showEventDetails(`Event on December ${day.textContent}`, `2024-12-${day.textContent}`, event || 'No details available.');
    });
  });
}

// Show Event Details
function showEventDetails(title, date, description) {
  const detailsSection = document.getElementById('eventDetails');
  const detailsText = document.getElementById('eventDetailsText');

  detailsSection.classList.remove('visually-hidden');
  detailsText.innerHTML = `
    <strong>Title:</strong> ${title}<br>
    <strong>Date:</strong> ${date}<br>
    <strong>Description:</strong> ${description}
  `;
}

// Add Reminder
document.addEventListener('submit', (event) => {
  if (event.target.id === 'reminderForm') {
    event.preventDefault();
    const reminderText = document.getElementById('reminderText').value;

    alert(`Reminder set: "${reminderText}"`);
    document.getElementById('reminderText').value = '';
  }
});
