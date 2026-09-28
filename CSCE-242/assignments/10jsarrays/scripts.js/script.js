const mountains = [];
const beaches = [];

mountains["Asheville, North Carolina"] = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d207789.42220315794!2d-82.73022397136475!3d35.53617039077573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88598ca93c0f6f09%3A0x94ef31c106343a5d!2sAsheville%2C%20NC!5e0!3m2!1sen!2sus!4v1790632937135!5m2!1sen!2sus";
mountains["Boone, North Carolina"] = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51508.49201449528!2d-81.70456758513048!3d36.208370439683264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8850d12869945a65%3A0x6e0a346179f5a6e9!2sBoone%2C%20NC!5e0!3m2!1sen!2sus!4v1790633018636!5m2!1sen!2sus";
mountains["Gatlinburg, Tennessee"] = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51823.29739811242!2d-83.5393326407458!3d35.72729847824663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x885953eacb08a589%3A0x4ab1d7ae7eb779a8!2sGatlinburg%2C%20TN%2037738!5e0!3m2!1sen!2sus!4v1790633062333!5m2!1sen!2sus";
mountains["Table Rock, South Carolina"] = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26132.456108092032!2d-82.72406329476321!3d35.04281055917055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8859b2454bbb22d5%3A0x573d2c49c8967814!2sTable%20Rock!5e0!3m2!1sen!2sus!4v1790633089371!5m2!1sen!2sus";

beaches["Myrtle Beach, South Carolina"] = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106194.10314265858!2d-78.96792214419003!3d33.72018459022813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x890068953b552101%3A0xbc0fb115b5d09618!2sMyrtle%20Beach%2C%20SC!5e0!3m2!1sen!2sus!4v1790633134900!5m2!1sen!2sus";
beaches["Outer Banks, North Carolina"] = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d415591.821350146!2d-75.82543694186096!3d35.53366539434149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89a45b3ca7736c71%3A0x1b77116175d236b3!2sOuter%20Banks!5e0!3m2!1sen!2sus!4v1790633151843!5m2!1sen!2sus";
beaches["Virginia Beach, Virginia"] = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d408956.9074985918!2d-76.3424257443476!3d36.79512966006474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89bac1e8fc1527a7%3A0x4161080a32e0173!2sVirginia%20Beach%2C%20VA!5e0!3m2!1sen!2sus!4v1790633208659!5m2!1sen!2sus";
beaches["Ocean City, Maryland"] = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100074.58772269805!2d-75.15337987256444!3d38.38759820906956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b8d671ac93de8b%3A0xb4bc715a3af31672!2sOcean%20City%2C%20MD!5e0!3m2!1sen!2sus!4v1790633235023!5m2!1sen!2sus";


document.getElementById("select-destination").onchange = (e) => {
    const destinationType = e.target.value;
    let destinationMap;

    if(destinationType === "Mountains"){
        destinationMap = mountains;
    }else if (destinationType === "Beaches"){
        destinationMap = beaches;
    }
};

