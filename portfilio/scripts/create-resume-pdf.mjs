import { PDFDocument, StandardFonts, rgb } from 'pdf-lib'
import { writeFile } from 'node:fs/promises'

const pdf = await PDFDocument.create()
const page = pdf.addPage([595, 842])
const regular = await pdf.embedFont(StandardFonts.Helvetica)
const bold = await pdf.embedFont(StandardFonts.HelveticaBold)
const orange = rgb(0.86, 0.34, 0.18)
const ink = rgb(0.12, 0.13, 0.12)
const muted = rgb(0.34, 0.35, 0.33)
let y = 790

const text = (value, x, size, font = regular, color = muted) => {
  page.drawText(value, { x, y, size, font, color })
  y -= size + 6
}
const heading = (value) => {
  y -= 10
  page.drawText(value.toUpperCase(), { x: 46, y, size: 11, font: bold, color: orange })
  y -= 8
  page.drawLine({ start: { x: 46, y }, end: { x: 549, y }, thickness: 1, color: orange })
  y -= 18
}
const paragraph = (value, size = 9.5, lineWidth = 95) => {
  const words = value.split(' ')
  let line = ''
  for (const word of words) {
    const next = line ? `${line} ${word}` : word
    if (regular.widthOfTextAtSize(next, size) > lineWidth * 5.25) {
      text(line, 46, size)
      line = word
    } else line = next
  }
  if (line) text(line, 46, size)
}

page.drawText('Rushikesh Kedar', { x: 46, y, size: 30, font: bold, color: orange })
y -= 25
text('Full-Stack Developer | Pune, Maharashtra, India', 46, 11, bold, ink)
text('8485863058 | rushikeshkedar13@gmail.com', 46, 9.5)
text('github.com/rushikedar13 | linkedin.com/in/rushikesh-kedar-2511b5390', 46, 9.5)
heading('Profile')
paragraph('Computer Science and Engineering graduate focused on full-stack web applications, REST APIs, and database-driven solutions. Hands-on experience with React.js, Node.js, Express.js, MongoDB, MySQL, Java, and JavaScript.')
heading('Technical Skills')
paragraph('Languages: Java, JavaScript, Python, C, C++, SQL. Frontend: React.js, HTML5, CSS3, Tailwind. Backend: Node.js, Express.js, REST APIs, API Integration. Database: MongoDB, MySQL, PostgreSQL. Tools: Git, GitHub, Postman, VS Code, Linux, Docker.')
heading('Experience')
text('Java Developer Intern - Compilers Technologies, Amravati', 46, 10.5, bold, ink)
text('Jul 2022 - Sep 2022', 46, 9.5)
paragraph('Built Java-based application functionality using Java Swing, JDBC, Servlets, JSP, and SQL. Implemented database-driven CRUD operations, validation, functional testing, debugging, and error handling.')
heading('Projects')
text('AI Resume Builder', 46, 10.5, bold, ink)
paragraph('Full-stack AI resume builder with authentication, editing, templates, AI suggestions, ATS scoring, job-description tailoring, and PDF export. React, Node.js, MongoDB, Redux, JWT, Groq AI.')
text('Dropidex', 46, 10.5, bold, ink)
paragraph('MERN platform connecting senders, drivers, and administrators for intercity goods transportation. React, Node.js, Express.js, MongoDB.')
text('Gym Management System', 46, 10.5, bold, ink)
paragraph('Java desktop application for members, trainers, memberships, payments, attendance, and reports. Java Swing, JDBC, MySQL.')
text('E-Commerce UI Automation Framework', 46, 10.5, bold, ink)
paragraph('Selenium framework using Java, TestNG, Maven, and Page Object Model.')
heading('Education')
text('B.E. Computer Science and Engineering', 46, 10.5, bold, ink)
text('Sipna College of Engineering and Technology, Amravati | 2023 - 2026', 46, 9.5)
text('Diploma in Computer Engineering', 46, 10.5, bold, ink)
text('Government Polytechnic, Amravati | 2020 - 2023', 46, 9.5)

await writeFile('public/resume.pdf', await pdf.save())
