// // Get references and display area
// const form = document.getElementById('resume-form') as HTMLFormElement | null;
// const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement | null;

// // Check if the form and resume display elements exist
// if (!form) {
//   console.error('Form element is missing.');
//   throw new Error('Form element is missing.'); // Stop execution if form is missing
// }

// if (!resumeDisplayElement) {
//   console.error('Resume display element is missing.');
//   throw new Error('Resume display element is missing.'); // Stop execution if resume display element is missing
// }

// // Handle form submission
// form.addEventListener('submit', (event: Event) => {
//   event.preventDefault(); // Prevent the default form submission

//   // Collect input values with null checks
//   const nameInput = document.getElementById('name') as HTMLInputElement | null;
//   const emailInput = document.getElementById('email') as HTMLInputElement | null;
//   const phoneInput = document.getElementById('phone') as HTMLInputElement | null;
//   const educationInput = document.getElementById('education') as HTMLInputElement | null;
//   const experienceInput = document.getElementById('experience') as HTMLInputElement | null;
//   const skillsInput = document.getElementById('skills') as HTMLInputElement | null;

//   // Check if input fields exist before accessing their values
//   if (!nameInput || !emailInput || !phoneInput || !educationInput || !experienceInput || !skillsInput) {
//     console.error('One or more input fields are missing.');
//     return; // Stop execution if any input field is missing
//   }

//   // Collect the values from the input fields
//   const name = nameInput.value;
//   const email = emailInput.value;
//   const phone = phoneInput.value;
//   const education = educationInput.value;
//   const experience = experienceInput.value;
//   const skills = skillsInput.value;

//   // Generate resume content
//   const resumeHTML = `
//     <h2><b>Editable Resume</b></h2>
//     <h3>Personal Information</h3>
//     <p><b>Name:</b><span contenteditable="true">${name}</span></p>
//     <p><b>Email:</b><span contenteditable="true">${email}</span></p>
//     <p><b>Phone:</b><span contenteditable="true">${phone}</span></p>
//     <h3>Education</h3>
//     <p contenteditable="true">${education}</p>
//     <h3>Experience</h3>
//     <p contenteditable="true">${experience}</p>
//     <h3>Skills</h3>
//     <p contenteditable="true">${skills}</p>
//   `;

//    // Display generated resume
//  resumeDisplayElement.innerHTML = resumeHTML; });






// Get references and display area
const forms = document.getElementById('resume-form') as HTMLFormElement | null;
const resumeDisplayElements = document.getElementById('resume-display') as HTMLDivElement | null;

// Check if the form and resume display elements exist
if (!forms) {
  console.error('Form element is missing.');
  throw new Error('Form element is missing.'); // Stop execution if form is missing
}

if (!resumeDisplayElements) {
  console.error('Resume display element is missing.');
  throw new Error('Resume display element is missing.'); // Stop execution if resume display element is missing
}

// Handle form submission
forms.addEventListener('submit', (event: Event) => {
  event.preventDefault(); // Prevent the default form submission

  // Collect input values with null checks
  const nameInput = document.getElementById('name') as HTMLInputElement | null;
  const emailInput = document.getElementById('email') as HTMLInputElement | null;
  const phoneInput = document.getElementById('phone') as HTMLInputElement | null;
  const educationInput = document.getElementById('education') as HTMLInputElement | null;
  const experienceInput = document.getElementById('experience') as HTMLInputElement | null;
  const skillsInput = document.getElementById('skills') as HTMLInputElement | null;

  // Check if input fields exist before accessing their values
  if (!nameInput || !emailInput || !phoneInput || !educationInput || !experienceInput || !skillsInput) {
    console.error('One or more input fields are missing.');
    return; // Stop execution if any input field is missing
  }

  // Collect the values from the input fields
  const name = nameInput.value;
  const email = emailInput.value;
  const phone = phoneInput.value;
  const education = educationInput.value;
  const experience = experienceInput.value;
  const skills = skillsInput.value;

  // Generate resume content
  const resumeHTML = `
    <h2><b>Editable Resume</b></h2>
    <h3>Personal Information</h3>
    <p><b>Name:</b><span contenteditable="true">${name}</span></p>
    <p><b>Email:</b><span contenteditable="true">${email}</span></p>
    <p><b>Phone:</b><span contenteditable="true">${phone}</span></p>
    <h3>Education</h3>
    <p contenteditable="true">${education}</p>
    <h3>Experience</h3>
    <p contenteditable="true">${experience}</p>
    <h3>Skills</h3>
    <p contenteditable="true">${skills}</p>
  `;

  // Display generated resume
  resumeDisplayElements.innerHTML = resumeHTML;
});