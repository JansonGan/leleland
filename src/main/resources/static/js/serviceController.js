class Service {

    //properties
    serviceItems = [];
    //constructor
    constructor() {}

    //methods
    addService(name, image, description, price) {

        const item = {
            name: name,
            description: description,
            image: image,
            price: price
        }
        
        this.serviceItems.push(item);

    } //End of addService method

    displayService() {

        let serviceDetails = "";
        let index = 0;
        let moreBtnId = "";

        this.serviceItems.forEach(item => {

            moreBtnId = "item" + index;

            serviceDetails +=
            `
            <div class="col-md-4">
            <a id="${moreBtnId}" href="#" data-bs-toggle="modal" data-bs-target="#serviceModal">
                        <div class="card mb-5">
                            <img class="img-fluid" src="${item.image}" alt="">
                            <div class="card-body">
                                <h5 class="card-title">${item.name}</h5>
                                <p class="card-text">${item.price}</p>
                            </div>
                        </div>
                    </a>
                </div>
            `;

            index++;

        }); //End of forEach loop
        
        document.querySelector('#serviceRow').innerHTML = serviceDetails;

        index = 0;
        this.serviceItems.forEach(item => {

            moreBtnId = "item" + index;

            document.getElementById(moreBtnId).addEventListener("click", function(){displayServiceDetails(item);});

            index++;
        });

    } //End of displayService method

} //End of Service Class

const displayServiceDetails = (item) => {

    document.getElementById('itemName').innerText = item.name;
    document.getElementById('itemDescription').innerText = item.description;
    document.getElementById('itemImage').src = item.image;
    document.getElementById('itemPrice').innerText = item.price;
    
} //End of displayServiceDetails function