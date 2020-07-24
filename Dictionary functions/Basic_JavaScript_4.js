function my_Dictionary()  {
    var Car = {
         brand: "Tesla",
         model:"Model 3",
        year: "2020",
        color: "Red",
    };
    delete Car.brand;
    document.getElementById("Dictionary").innerHTML= Car.brand;

}