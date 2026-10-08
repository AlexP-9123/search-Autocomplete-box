let products = [
    "Apple",
    "Banana",
    "Orange",
    "Mango",
    "Pineapple",
    "Strawberry",
    "Watermelon"
];

const search = document.getElementById("searchInput");
const results = document.getElementById("results");

search.addEventListener("keyup", () => {

    const input = search.value.trim().toLowerCase();

    if (input === "") {
        results.innerHTML = "";
        return;
    }

    const words = products.filter((product) =>
        product.toLowerCase().includes(input)
    );

    results.innerHTML = words
        .map((word) => `<p>${word}</p>`)
        .join("");

    const suggestions = results.querySelectorAll("p");

    suggestions.forEach((suggestion) => {

        suggestion.addEventListener("click", () => {

            search.value = suggestion.textContent;

            results.innerHTML = "";
        });

    });
});