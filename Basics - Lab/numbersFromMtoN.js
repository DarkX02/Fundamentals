function numbersFromMtoN(n1, n2) {
    n1 = Number(n1)
    n2 = Number(n2)

    while (n1 >= n2) {
        console.log(n1);
        n1--
    }
}
numbersFromMtoN(10, 4)