# Dharshan T — Astra-style portfolio (Full Folder)

This is the complete static portfolio folder—not a patch. It contains the website source, local image assets, résumé, project data, credential data, and setup instructions.

## Run locally

1. Extract this ZIP.
2. Open the `Dharshan-Astra-Scroll-Portfolio` folder in VS Code.
3. Keep `index.html`, `style.css`, `script.js`, `portfolio-data.js`, and the `assets/` folder together.
4. Right-click `index.html` → **Open with Live Server**. The page can also be opened directly in a browser.

## Correct profile links

- LinkedIn: https://www.linkedin.com/in/dharshan-t-729020290/
- GitHub: https://github.com/Dharshansgitup

All LinkedIn links in the portfolio now use the canonical profile above. The user-provided `?isSelfProfile=true` query is not needed for a public profile link.

## Add your two real photos

Save your photos into the existing `assets/` folder using these exact names:

- `assets/profile-professional.jpg` — professional portrait for Recruiter mode
- `assets/profile-casual.jpg` — casual portrait for Curious Visitor mode

The site does not have an upload button. The circular photo area changes based on the selected mode. If a photo file is absent, the existing monogram placeholder appears instead.

## Certificates and credential files

The `assets/certificates/` folder contains thematic artwork only; those images are **not certificate scans**. Copy your original PDFs from your current local portfolio into the matching folder in this full folder before removing your old copy:

- `assets/certificates/java-programming.pdf`
- `assets/certificates/vlsi-design-internship.pdf`
- `assets/certificates/smart-irrigation-paper.pdf` (optional local paper copy)

Optional image previews can use the filenames:

- `assets/certificates/java-programming-preview.jpg`
- `assets/certificates/vlsi-design-internship-preview.jpg`

The credential section separates formal certifications from course/training posts and recognition. Items visible in the public LinkedIn profile/activity include ServiceNow CAD, NPTEL Cryptography and Network Security, HTML Essential Training, Java Training Program at MKCE, a PCBathon second-prize post, and a patent-related metamaterial research post. The résumé also lists Java Programming Certification, a Tessolve VLSI Design Internship Certificate, and the IEEE Smart Irrigation publication. A LinkedIn activity link is not presented as a downloadable certificate; add the original PDF if you want the card to open a local certificate document.

## Projects included

The project section includes these verified repository/project entries:

- TRANSMA — Transport Management System
- Student Management System
- VivaMind — AI-Powered Smart Interview
- Car Showroom Website
- Smart Irrigation System for Precision Farming (IEEE publication)
- Medical Image Enhancement Using MATLAB

Edit `portfolio-data.js` to add or change projects and credentials. Add each new project cover to `assets/projects/` and set its relative file path in that data file. The site renders cards from those arrays, so future additions do not need new hand-written card markup.

## Image note

Project and story photos are illustrative AI-generated imagery (including scenic/team/workspace themes). They are not screenshots of the actual applications or photographs of Dharshan. Replace them with authentic screenshots/photos when ready. Project photos are now image-first, with their descriptions kept below the image so card text cannot overlap the picture.

## Before publishing

- Check the public files for personal information you do not want to publish.
- Confirm that certificate PDFs are authentic and that the file paths work.
- Test both audience choices, all project links, and the résumé link in Live Server.
- Commit the **entire folder**, including CSS, JavaScript, `portfolio-data.js`, and image assets—not just `index.html`.
