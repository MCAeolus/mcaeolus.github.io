
export const resume = async (args: string[]): Promise<string> => {
    return `
<div>
    <h1
        style="text-align: center"
        >
    Nathan Smith | Columbia, MO | nsmith320@gatech.edu | <a href="https://www.linkedin.com/in/nathansmith2023/" target="_blank">Linkedin</a> | <a href="https://github.com/MCAeolus" target="_blank">Github</a></h1>
    <table
        style="align-content: normal; width=100%; table-layout: fixed"
        >
        <tr>
            <td style="width=50%">
                <h2 style="text-align: center">~ EXPERIENCE ~</h2>

<span style="color: #0cc20c">Cybersecurity and Infrastructure Security Agency - Intern</span><br/>
MAY '22 - SEP '22, Remote
<ul>
    <li>Researched and studied CACAO, STIX, and TAXII frameworks and tools.</li>
    <li>Collaborated to develop a command-line tool to validate CACAO playbooks, utilizing Github, Gitflow, and Jenkins via sprint-based development and demoed for senior CISA staff and leadership.</li>
</ul>
<span style="color: orange">Fiserv - Intern</span><br/>
JUN '21 - AUG '21, Remote
<ul>
    <li>Contributed to core payments platform with feature enhancements, bug fixes, and documentation, and conducted code reviews.</li>
    <li>Developed integration testing library for payments microservice using Spring framework and collaborated with QA team to meet testing and feature requirements.</li>
</ul>
<span style="color: mediumpurple">Georgia Tech ARCS - Student Worker</span><br/>
FEB '20 - MAY '21, Atlanta, GA
<ul>
    <li>Provided technical support to Georgia Tech’s College of Science by deploying servers, user devices, and troubleshooting network and computer system issues.</li>
    <li>Developed Python scripts and command-line utilities to automate tasks and collaborated with senior staff on the tool's roadmap plans and goals.</li>
</ul>
            </td>
            <td style="width=50%">
                <h2 style="text-align: center">~ EDUCATION ~</h2>
<span style="color: goldenrod">Georgia Institute of Technology - B.S. Computer Science</span><br/>
AUG '19 - GRADUATED MAY '23, Atlanta, GA
<ul>
    <li>3.50 GPA, High Honors</li>
    <li>Specialization: System Architecture and Artificial Intelligence</li>
    <li>Awards: Dean's List, CyberCorps Scholarship for Service</li>
</ul>
                 <h2 style="text-align: center">~ SKILLS ~</h2>
<span style="color: #c75757">TECHNICAL</span><br/>
<ul style="list-style-type: none">
    <li>Programming Languages: Java, Javascript, Kotlin, Python, C/C++, C#, Rust, ANTLR</li>
    <li>Web Development: Node.JS, REST protocol, API development</li>
    <li>Cloud Computing: PCF CloudFoundry, Microservices</li>
    <li>Cybersecurity: STIX, TAXII, CACAO, IDA Pro, Ghidra</li>
    <li>System Architecture: Virtual machines, Unit/Integration testing</li>
    <li>Tools: Github, Gitflow, JIRA, Cloudbees, VS Code, IntelliJ</li>
</ul>
<span style="color: #9666c0">COURSEWORK</span><span>: Advanced Algorithms, A.I. and Robotics, Advanced Operating Systems, Processor/Circuit Design, Compiler Design, Malware Analysis</span><br/>
<span style="color: orange">SOFT SKILLS</span><span>: Outgoing, Leadership, Teamwork, Coordination, Teaching and Training</span>
                </td>
            </tr>
        </table>
</div>
    `;
}