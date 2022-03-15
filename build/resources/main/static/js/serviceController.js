const createHTMLList = (index, name, description, imageUrl) =>
`
    <div class="col-md-4">
        <a id="${index}" href="#" data-bs-toggle="modal" data-bs-target="#serviceModal">
            <div class="card mb-5">
                <img class="img-fluid" src=${imageUrl} alt="">
                <div class="card-body">
                    <h5 class="card-title">${name}</h5>
                    <p class="card-text">${description}</p>
                </div>
            </div>
        </a>
    </div>

`;


function displayServiceDetails(item){

    document.getElementById('itemName').innerText = item.name;
    document.getElementById('itemDescription').innerText = item.description;
    document.getElementById('itemImage').src = item.imageUrl;
    document.getElementById('itemPrice').innerText = item.price;

} //End of displayServiceDetails function




class Service {

    //properties
    //constructor
    constructor() {
        this.serviceItems = [];

    }

    //methods
    addService(name, description, imageUrl, price, imageObject) {


        let service = this;
        const formData = new FormData();
        formData.append('name', name);
        formData.append('description', description);
        formData.append('imageUrl', imageUrl);
        formData.append('price', price);
        formData.append('imageFile', imageObject);

        fetch('https://lelelandccversion.herokuapp.com/item/add', {
            method: 'POST',
            body: formData
            })
            .then(function(response) {
                console.log(response.status);
                if (response.ok) {
                    alert("Successfully Added Service!")}
            })
            .catch((error) => {
                console.error('Error:', error);
                alert("Error adding service!")
            });
    }



    displayService() {


        let service = this;
        service.serviceItems = [];


        fetch('https://lelelandccversion.herokuapp.com/item/all')
            .then((resp) => resp.json())
            .then(function(data) {
                console.log("2. receive data");
                console.log(data);
                data.forEach(function (item, index) {

                    const itemObj = {
                        id: item.id,
                        name: item.name,
                        description: item.description,
                        imageUrl: item.imageUrl,
                        price: item.price
                    };

                    service.serviceItems.push(itemObj);
                });

                service.renderProductPage();

            })
            .catch(function(error) {
                console.log(error);
            });
    }


    renderProductPage() {
        let productHTMLList = [];

        for (let i = 0; i < this.serviceItems.length; i++) {
            const item = this.serviceItems[i];

            const productHTML = createHTMLList(i, item.name, item.description, item.imageUrl);

            productHTMLList.push(productHTML);
        }

        const pHTML = productHTMLList.join('\n');
        document.querySelector('#serviceRow').innerHTML = pHTML;

        for (let i = 0; i < this.serviceItems.length; i++) {
            const item = this.serviceItems[i];
            document.getElementById(i).addEventListener("click", function() {
                displayServiceDetails(item);});
        }

    }
} //End of Service Class