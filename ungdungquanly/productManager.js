let listProduct = [
    new Product("Aster Mix Gold", 3, 300000),
    new Product("Iphone 12", 5, 15000),
    new Product("Sony", 2, 30000),
    new Product("Aster Mix Gold", 3, 300000),
    new Product("Aster Mix Gold", 3, 300000),
    new Product("Aster Mix Gold", 3, 300000),

];
function showAllProduct(){
    let content = "";
    for (let i = 0; i<listProduct.length; i++){
        content += `
        <tr>
        <td>${listProduct[i].name}</td>
        <td>${listProduct[i].price}</td>
        <td>${listProduct[i].number}</td>
        <td>${listProduct[i].getAmount()}</td>
        <td><button onclick="editById(${i})">Edit</button></td> 
        <td><button onclick="deleteById(${i})">Delete</button></td>
        <td><button onclick="moreById(${i})">More</button></td>
        <td><button onclick="lessById(${i})">Less</button></td>
        </tr>
        `;
    };
    document.getElementById("listProduct").innerHTML = content;
    document.getElementById("numProduct").innerHTML = listProduct.length + " product";
}
showAllProduct();
