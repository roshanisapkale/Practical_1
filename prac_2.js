/* Q.2] Take two int values from user & print greatest among them. */
let R = prompt("Enter first value : ");
R = Number.parseInt(R);
let J = prompt("Enter second value : ");
J = Number.parseInt(J);
if (R>J)
{
    console.log("%d is greater than %d", R, J);
}
else
{
    console.log("%d is greater than %d", J, R);
}
