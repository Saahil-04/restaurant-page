export function createContact() {
    const contactDiv = document.createElement("div");
    contactDiv.classList.add("contactDiv");

    // Contact Heading
    const heading = document.createElement("h1");
    heading.textContent = "Contact Us";

    // Contact Info Section
    const contactInfo = document.createElement("div");
    contactInfo.classList.add("contactInfo");

    const phone = document.createElement("p");
    phone.innerHTML = "📞 123-456-7890";

    const address = document.createElement("p");
    address.innerHTML = "📍 123 Main Street, Food City";

    // GitHub Link
    const github = document.createElement("a");
    github.href = "https://github.com/Saahil-04"; // Replace with your actual GitHub URL
    github.textContent = "🌐 Visit My GitHub";
    github.target = "_blank";
    github.classList.add("githubLink");

    // Append elements to contactInfo
    contactInfo.appendChild(phone);
    contactInfo.appendChild(address);
    contactInfo.appendChild(github);

    // Append everything to contactDiv
    contactDiv.appendChild(heading);
    contactDiv.appendChild(contactInfo);

    return contactDiv;
}