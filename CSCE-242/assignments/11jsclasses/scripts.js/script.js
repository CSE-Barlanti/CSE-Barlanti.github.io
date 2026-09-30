class Vacation{
    constructor(title, type, description, thingsToDo, image, mapSrc){
        this.title = title;
        this.type = type;
        this.description = description;
        this.thingsToDo = thingsToDo;
        this.image = image;
        this.mapSrc = mapSrc;
    }

    getCard() {
        const card = document.createElement("section");
        card.classList.add("vacation-card");
        
        
        const title = document.createElement("h3");
        title.innerHTML = this.title;
        card.append(title);

        const type = document.createElement("p");
        type.innerHTML = `${this.type} Vacation`;
        card.append(type);

        const image = document.createElement("img");
        image.src = this.image;
        image.alt = this.title;
        card.append(image);

        card.onclick = () =>{
            showModal(this);
        };
            

        return card;
    }
}

const vacations = [];

vacations.push(
    new Vacation(
        "Asheville",
        "North Carolina",
        "A lively North Carolina mountain city with scenic views, hiking, and a walkable downtown.",
        "Explore downtown, hike in the Blue Ridge Mountains, and visit the Biltmore Estate.",
        "images/Asheville.webp",
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d207789.42220315794!2d-82.73022397136475!3d35.53617039077573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88598ca93c0f6f09%3A0x94ef31c106343a5d!2sAsheville%2C%20NC!5e0!3m2!1sen!2sus!4v1790632937135!5m2!1sen!2sus"
    )
);

vacations.push(
    new Vacation(
        "Boone",
        "North Carolina",
        "A scenic college town in the Blue Ridge Mountains with beautiful hiking and skiing.",
        "Go skiing, visit Appalachian State University, and hike Grandfather Mountain.",
        "images/Boone.webp",
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51508.49201449528!2d-81.70456758513048!3d36.208370439683264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8850d12869945a65%3A0x6e0a346179f5a6e9!2sBoone%2C%20NC!5e0!3m2!1sen!2sus!4v1790633018636!5m2!1sen!2sus"
    )
);

vacations.push(
    new Vacation(
        "Gatlinburg",
        "Tennesse",
        "A mountain town near Great Smoky Mountains National Park with outdoor attractions.",
        "Visit the national park, ride the SkyLift, and explore downtown shops.",
        "images/Gatlinburg.webp",
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51823.29739811242!2d-83.5393326407458!3d35.72729847824663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x885953eacb08a589%3A0x4ab1d7ae7eb779a8!2sGatlinburg%2C%20TN%2037738!5e0!3m2!1sen!2sus!4v1790633062333!5m2!1sen!2sus"
    )
);

vacations.push(
    new Vacation(
        "Myrtle Beach",
        "South Carolina",
        "A popular South Carolina beach destination with a long boardwalk and many attractions.",
        "Relax on the beach, walk the boardwalk, and visit Broadway at the Beach.",
        "images/myrtle.webp",
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106194.10314265858!2d-78.96792214419003!3d33.72018459022813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x890068953b552101%3A0xbc0fb115b5d09618!2sMyrtle%20Beach%2C%20SC!5e0!3m2!1sen!2sus!4v1790633134900!5m2!1sen!2sus"
    )
);

vacations.push(
    new Vacation(
        "Ocean City",
        "Maryland",
        "A Maryland resort town known for its beach, boardwalk, and amusement rides.",
        "Ride bikes on the boardwalk, visit the beach, and play arcade games.",
        "images/oceancity.webp",
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100074.58772269805!2d-75.15337987256444!3d38.38759820906956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b8d671ac93de8b%3A0xb4bc715a3af31672!2sOcean%20City%2C%20MD!5e0!3m2!1sen!2sus!4v1790633235023!5m2!1sen!2sus"
    )
);

vacations.push(
    new Vacation(
        "Outer Banks",
        "North Carolina",
        "A chain of barrier islands in North Carolina with wide beaches and historic lighthouses.",
        "Visit the Wright Brothers Memorial, see lighthouses, and spend time at the beach.",
        "images/outerbanks.webp",
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d415591.821350146!2d-75.82543694186096!3d35.53366539434149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89a45b3ca7736c71%3A0x1b77116175d236b3!2sOuter%20Banks!5e0!3m2!1sen!2sus!4v1790633151843!5m2!1sen!2sus"
    )
);

vacations.push(
    new Vacation(
        "Table Rock",
        "South Carolina",
        "A South Carolina destination known for its dramatic mountain views and trails.",
        "Hike Table Rock Trail, take pictures, and visit Table Rock State Park.",
        "images/TableRock.webp",
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26132.456108092032!2d-82.72406329476321!3d35.04281055917055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8859b2454bbb22d5%3A0x573d2c49c8967814!2sTable%20Rock!5e0!3m2!1sen!2sus!4v1790633089371!5m2!1sen!2sus"
    )
);

vacations.push(
    new Vacation(
        "Virgina Beach",
        "Virgina",
        "A coastal Virginia city with a large beach, boardwalk, and waterfront activities.",
        "Walk the boardwalk, visit the aquarium, and enjoy the beach.",
        "images/virginia.webp",
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d408956.9074985918!2d-76.3424257443476!3d36.79512966006474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89bac1e8fc1527a7%3A0x4161080a32e0173!2sVirginia%20Beach%2C%20VA!5e0!3m2!1sen!2sus!4v1790633208659!5m2!1sen!2sus"
    )
);

const vacationList = document.getElementById("vacation-list");

vacations.forEach((vacation) => {
    vacationList.append(vacation.getCard());
});


const modal = document.getElementById("modal");
const modalInfo = document.getElementById("modal-info");

const showModal = (vacation) => {
    modalInfo.innerHTML =
    `<h2>${vacation.title}</h2>
        <p><strong>Type:</strong> ${vacation.type}</p>
        <p><strong>Description:</strong> ${vacation.description}</p>
        <p><strong>Things To Do:</strong> ${vacation.thingsToDo}</p>
        <iframe
            src="${vacation.mapSrc}"
            width="100%"
            height="300"
            style="border:0;"
            allowfullscreen=""
            loading="lazy">
        </iframe>`
        

    modal.classList.remove("hidden");
}

document.getElementById("close-modal").onclick = () => {
    modal.classList.add("hidden");
};